package com.morpheusdata.tab

import com.morpheusdata.views.JsonResponse
import com.morpheusdata.views.ViewModel
import groovy.json.JsonSlurper
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import com.trilio.client.TrilioVaultClient

class RestoreController {
    private static final Logger log = LoggerFactory.getLogger(RestoreController)

    def morpheusContext
    def plugin

    RestoreController(plugin, morpheusContext) {
        this.plugin = plugin
        this.morpheusContext = morpheusContext
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
}

