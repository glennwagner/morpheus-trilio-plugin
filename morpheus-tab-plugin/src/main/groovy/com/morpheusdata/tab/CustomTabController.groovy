package com.morpheusdata.tab

import com.morpheusdata.model.Permission
import com.morpheusdata.views.JsonResponse
import com.morpheusdata.views.ViewModel
import com.morpheusdata.web.PluginController
import com.morpheusdata.web.Route
import com.morpheusdata.core.Plugin
import com.morpheusdata.core.MorpheusContext
import groovy.json.JsonSlurper
import groovy.json.JsonBuilder
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import org.slf4j.Logger
import org.slf4j.LoggerFactory

import com.trilio.client.TrilioVaultClient

class CustomTabController implements PluginController {
    private static final Logger log = LoggerFactory.getLogger(CustomTabController)

    MorpheusContext morpheusContext
    Plugin plugin

    CustomTabController(Plugin plugin, MorpheusContext morpheusContext) {
        this.plugin = plugin
        this.morpheusContext = morpheusContext
    }

    @Override
    String getCode() { 'customTabController' }

    @Override
    String getName() { 'Custom Tab Controller' }

    @Override
    MorpheusContext getMorpheus() { morpheusContext }

    @Override
    List<Route> getRoutes() {
        def perm = Permission.build('Cloud Backups','cloud-backups',[ Permission.AccessType.full ])
        [
            Route.build('/customTab/snapshots',    'snapshots',    perm).withMethod("POST"), 
	    Route.build('/customTab/takeSnapshot', 'takeSnapshot', perm).withMethod("POST"),
	    Route.build('/customTab/restoreSnapshot', 'restoreSnapshot', perm).withMethod("POST"),
	    Route.build('/customTab/deleteSnapshot', 'deleteSnapshot', perm).withMethod("DELETE")
        ]
    }

    def ping(ViewModel model) {
        JsonResponse.of([ pong: true, user: model.user.username ])
    }

    def example(ViewModel<String> model) {
        JsonResponse.of([ message: "Hello, ${model.user.firstName} ${model.user.lastName}" ])
    }

    def snapshots(ViewModel model) {
        def webReq  = morpheusContext.getWebRequest()
        HttpServletRequest  request  = webReq.getRequest()
        HttpServletResponse response = webReq.getResponse()

        try {
            String settingsStr = ''
            morpheusContext.getSettings(plugin).blockingSubscribe(
                { data -> settingsStr = data },
                { err  -> throw err }
            )
            Map config = settingsStr?.trim() ? new JsonSlurper().parseText(settingsStr) : [:]

            String authUrl   = config.'trilio-auth-url'
            String projectId = config.'trilio-project-name'
            String token     = config.'trilio-password'
            def client = new TrilioVaultClient(authUrl, projectId, token)

            String workloadName = request.getParameter('workload') ?: config.'trilio-workload-name'
            def workloads = client.listWorkloads()
            def workload = workloads.workloads.find { it.name == workloadName }
            if(!workload) {
                throw new RuntimeException("Workload '${workloadName}' not found")
            }

            def snaps = client.listSnapshots(workload.id)

            response.contentType = 'application/json'
            response.outputStream << new JsonBuilder(snaps).toString()

        } catch(Exception e) {
            log.error("Error fetching snapshots", e)
            response.status = 500
            response.contentType = 'application/json'
            response.outputStream << new JsonBuilder(
                [ error: 'Failed to fetch snapshots', detail: e.message ]
            ).toString()
        }
    }

    def takeSnapshot(ViewModel model) {
        def request = morpheusContext.getWebRequest().getRequest()
        String workloadName = request.getParameter("workload")

        try {
            String settingsStr = morpheusContext.getSettings(plugin).blockingGet()
            Map config = settingsStr?.trim() ? new JsonSlurper().parseText(settingsStr) : [:]

            String authUrl   = config.'trilio-auth-url'
            String projectId = config.'trilio-project-name'
            String token     = config.'trilio-password'
            def client = new TrilioVaultClient(authUrl, projectId, token)

            def workloads = client.listWorkloads()
            def workload = workloads.workloads.find { it.name == workloadName }
            if (!workload) {
                return JsonResponse.of([ success: false, error: "Workload '${workloadName}' not found" ])
            }

            def result = client.takeSnapshot(workload.id.toString(), [:])
            return JsonResponse.of([ success: true, result: result ])

        } catch(Exception e) {
            log.error("Error initiating snapshot", e)
            return JsonResponse.of([ success: false, error: e.message ])
        }
    }

    def restoreSnapshot(ViewModel model) {
        def request = morpheusContext.getWebRequest().getRequest()
        String snapshotId = request.getParameter("id")

        try {
            String settingsStr = morpheusContext.getSettings(plugin).blockingGet()
            Map config = settingsStr?.trim() ? new JsonSlurper().parseText(settingsStr) : [:]
            def client = new TrilioVaultClient(config.'trilio-api-base', config.'trilio-project-name', config.'trilio-password')

            Map restoreBody = [
                restore_type: 'inplace'
            ]
            def result = client.inplaceRestore(snapshotId, restoreBody)
            return JsonResponse.of([ success: true, result: result ])

        } catch(Exception e) {
            log.error("Error restoring snapshot", e)
            return JsonResponse.of([ success: false, error: e.message ])
        }
    }

    def deleteSnapshot(ViewModel model) {
        def request = morpheusContext.getWebRequest().getRequest()
        String snapshotId = request.getParameter("id")

        try {
            String settingsStr = morpheusContext.getSettings(plugin).blockingGet()
            Map config = settingsStr?.trim() ? new JsonSlurper().parseText(settingsStr) : [:]
            def client = new TrilioVaultClient(config.'trilio-api-base', config.'trilio-project-name', config.'trilio-password')
            def result = client.deleteSnapshot(snapshotId)
            return JsonResponse.of([ success: result ])

        } catch(Exception e) {
            log.error("Error deleting snapshot", e)
            return JsonResponse.of([ success: false, error: e.message ])
        }
    }
}

