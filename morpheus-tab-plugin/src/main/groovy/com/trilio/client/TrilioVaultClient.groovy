package com.trilio.client

import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import javax.net.ssl.*
import java.security.SecureRandom
import groovy.json.JsonSlurper
import groovy.json.JsonOutput
import groovy.util.logging.Slf4j

@Slf4j
class TrilioVaultClient {
    String baseUrl
    String projectId
    String token
    HttpClient httpClient
    JsonSlurper jsonSlurper = new JsonSlurper()

    TrilioVaultClient(String wlmApiUrl, String projectId, String token) {
        this.baseUrl = wlmApiUrl.endsWith('/') ? wlmApiUrl[0..-2] : wlmApiUrl
        this.projectId = projectId
        this.token = token
        this.httpClient = buildInsecureHttpClient()
        log.info("TrilioVaultClient initialized (insecure SSL): baseUrl=${baseUrl}, projectId=${projectId}")
    }

    private HttpClient buildInsecureHttpClient() {
        TrustManager[] trustAll = [
            (TrustManager) new X509TrustManager() {
                void checkClientTrusted(java.security.cert.X509Certificate[] chain, String authType) {}
                void checkServerTrusted(java.security.cert.X509Certificate[] chain, String authType) {}
                java.security.cert.X509Certificate[] getAcceptedIssuers() { [] as java.security.cert.X509Certificate[] }
            }
        ]

        SSLContext sslContext = SSLContext.getInstance("TLS")
        sslContext.init(null, trustAll, new SecureRandom())
        SSLParameters sslParams = sslContext.getDefaultSSLParameters()
        sslParams.setEndpointIdentificationAlgorithm(null)

        return HttpClient.newBuilder()
            .sslContext(sslContext)
            .sslParameters(sslParams)
            .build()
    }

    private HttpRequest.Builder buildRequest(String path) {
        return HttpRequest.newBuilder()
            .uri(URI.create("${baseUrl}${path}"))
            .header('X-Auth-Project-Id', projectId)
            .header('X-Auth-Token', token)
            .header('Accept', 'application/json')
    }

    Map listWorkloads() {
        def req = buildRequest("/workloads").GET().build()
        def resp = httpClient.send(req, HttpResponse.BodyHandlers.ofString())
        return jsonSlurper.parseText(resp.body())
    }

    Map listSnapshots(String workloadId = null, String dateFrom = null, String dateTo = null, boolean all = false) {
        def query = []
        if (workloadId) query << "workload_id=${workloadId}"
        if (dateFrom)   query << "date_from=${dateFrom}"
        if (dateTo)     query << "date_to=${dateTo}"
        if (all)        query << 'all=true'
        String qs = query ? '?' + query.join('&') : ''
        def req = buildRequest("/snapshots${qs}").GET().build()
        def resp = httpClient.send(req, HttpResponse.BodyHandlers.ofString())
        return jsonSlurper.parseText(resp.body())
    }

    Map takeSnapshot(String workloadId, boolean full = false, Map options = null) {
        String qp = full ? '?full=true' : ''
        def builder = buildRequest("/workloads/${workloadId}${qp}")
            .header('Content-Type', 'application/json')
        builder = options ?
            builder.POST(HttpRequest.BodyPublishers.ofString(JsonOutput.toJson(options))) :
            builder.POST(HttpRequest.BodyPublishers.noBody())
        def resp = httpClient.send(builder.build(), HttpResponse.BodyHandlers.ofString())
        return jsonSlurper.parseText(resp.body())
    }

    boolean deleteSnapshot(String sid) {
        def resp = httpClient.send(buildRequest("/snapshots/${sid}").DELETE().build(),
                                   HttpResponse.BodyHandlers.discarding())
        return resp.statusCode() in 200..299
    }

    Map inplaceRestore(String snapshotId, Map body = [:]) {
        return oneClickRestore(snapshotId, body)
    }

    Map oneClickRestore(String snapshotId, Map restoreBody) {
        String payload = JsonOutput.toJson(restoreBody)
        def req = buildRequest("/snapshots/${snapshotId}")
            .header('Content-Type', 'application/json')
            .POST(HttpRequest.BodyPublishers.ofString(payload))
            .build()
        def resp = httpClient.send(req, HttpResponse.BodyHandlers.ofString())
        return jsonSlurper.parseText(resp.body())
    }
}

