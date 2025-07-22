package com.morpheusdata.tab

import com.morpheusdata.core.AbstractInstanceTabProvider
import com.morpheusdata.core.MorpheusContext
import com.morpheusdata.core.Plugin
import com.morpheusdata.model.Instance
import com.morpheusdata.model.User
import com.morpheusdata.model.Account
import com.morpheusdata.views.HTMLResponse
import com.morpheusdata.views.ViewModel

import groovy.json.JsonSlurper
import groovy.json.JsonOutput
import groovy.util.logging.Slf4j

import com.trilio.client.TrilioVaultClient

import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.net.URI
import javax.net.ssl.*
import java.security.SecureRandom

@Slf4j
class CustomTabProvider extends AbstractInstanceTabProvider {
    Plugin plugin
    MorpheusContext morpheus

    String code = 'cloud-backups'
    String name = 'Cloud Backups'

    CustomTabProvider(Plugin plugin, MorpheusContext context) {
        this.plugin = plugin
        this.morpheus = context
    }

    @Override
    HTMLResponse renderTemplate(Instance instance) {
        ViewModel<Map> model = new ViewModel<>()

        // 1) Load plugin settings
        String settingsJson = morpheus.getSettings(plugin).blockingGet()
        Map config = settingsJson?.trim() ? new JsonSlurper().parseText(settingsJson) : [:]
        log.info("Cloud Backups Plugin: settings = ${config}")

        // 2) Keystone auth
        log.info("Cloud Backups Plugin: Authenticating to Keystone at ${config.authUrl}")
        def authPayload = [
            auth: [
                identity: [
                    methods : ['password'],
                    password: [
                        user: [
                            name     : config.username,
                            domain   : [name: config.userDomainName],
                            password : config.password
                        ]
                    ]
                ],
                scope   : [
                    project: [
                        name  : config.projectName,
                        domain: [name: config.projectDomainName]
                    ]
                ]
            ]
        ]
        String authBody = JsonOutput.toJson(authPayload)
        HttpClient authClient = buildInsecureHttpClient()
        HttpRequest authReq = HttpRequest.newBuilder()
            .uri(URI.create(config.authUrl))
            .header('Content-Type','application/json')
            .POST(HttpRequest.BodyPublishers.ofString(authBody))
            .build()
        HttpResponse<String> authResp = authClient.send(authReq, HttpResponse.BodyHandlers.ofString())
        if(authResp.statusCode() != 201) {
            log.error("Keystone authentication failed: ${authResp.statusCode()} ${authResp.body()}")
            return getRenderer().renderTemplate('hbs/instanceTab', model)
        }
        String osToken = authResp.headers().firstValue('X-Subject-Token').orElse('')
        log.info("Cloud Backups Plugin: Keystone token acquired")

        // 3) Instantiate Trilio client
        //    config.apiBase should be like "https://.../v1/{projectId}"
        String wlmApiUrl = config.apiBase.replaceAll('/$','')
        String projectId  = config.projectId  ?: wlmApiUrl.tokenize('/').last()
        TrilioVaultClient trilio = new TrilioVaultClient(wlmApiUrl, projectId, osToken)

        // 4) list workloads & find matching one
        Map workloadsResp = trilio.listWorkloads()
        List workloadsList = workloadsResp.workloads ?: workloadsResp.workloadsList ?: []
        Map match = workloadsList.find { it.name == instance.name }
        if(!match) {
            log.error("No Trilio workload matching instance.name='${instance.name}' found")
            return getRenderer().renderTemplate('hbs/instanceTab', model)
        }
        String workloadId = match.id.toString()
        log.info("Cloud Backups Plugin: mapped instance '${instance.name}' → workloadId=${workloadId}")

        // 5) list its snapshots
        Map snapsResp = trilio.listSnapshots(workloadId)
        List snaps = snapsResp.snapshots ?: snapsResp.snapshot_list ?: []
        log.info("Cloud Backups Plugin: found ${snaps.size()} snapshots")

        // 6) render
        model.object = [
            instance    : instance,
            settings    : config,
            workloadId  : workloadId,
            snapshots   : snaps
        ]
        return getRenderer().renderTemplate('hbs/instanceTab', model)
    }

    @Override
    Boolean show(Instance instance, User user, Account account) {
        true
    }

    /**
     * Builds an HttpClient that skips SSL cert+hostname checks.
     * ONLY for testing/debugging.
     */
    private HttpClient buildInsecureHttpClient() {
        TrustManager[] trustAll = [
            (TrustManager) new X509TrustManager() {
                void checkClientTrusted(java.security.cert.X509Certificate[] c, String a) {}
                void checkServerTrusted(java.security.cert.X509Certificate[] c, String a) {}
                java.security.cert.X509Certificate[] getAcceptedIssuers() { [] as java.security.cert.X509Certificate[] }
            }
        ]
        SSLContext sc = SSLContext.getInstance("TLS")
        sc.init(null, trustAll, new SecureRandom())
        SSLParameters params = sc.defaultSSLParameters
        params.setEndpointIdentificationAlgorithm(null)

        return HttpClient.newBuilder()
            .sslContext(sc)
            .sslParameters(params)
            .build()
    }
}

