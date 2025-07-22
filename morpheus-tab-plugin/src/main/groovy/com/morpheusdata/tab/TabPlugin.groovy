package com.morpheusdata.tab

import com.morpheusdata.core.Plugin
import com.morpheusdata.model.Permission
import com.morpheusdata.model.OptionType
import com.morpheusdata.views.HandlebarsRenderer

class TabPlugin extends Plugin {

    @Override
    String getCode() { 'morpheus-tab-plugin' }

    @Override
    void initialize() {
        // Register provider and controller
        CustomTabProvider provider = new CustomTabProvider(this, morpheus)
        pluginProviders.put(provider.code, provider)
         CustomTabController controller = new CustomTabController(this, morpheus)
         controllers.add(controller) // ✅ Correct way to register controller

        // Plugin metadata
        setName('Cloud Backup')
        setRenderer(new HandlebarsRenderer(classLoader))
        setPermissions([Permission.build('Custom Tab Plugin','customTabPlugin',[Permission.AccessType.full])])

        // Trilio configuration settings
        settings << new OptionType(
            name: 'AUTH_URL', code: 'trilio-auth-url', fieldName: 'authUrl',
            displayOrder: 1, fieldLabel: 'Auth URL', helpText: 'Keystone token endpoint',
            required: true, inputType: OptionType.InputType.TEXT
        )
        settings << new OptionType(
            name: 'USERNAME', code: 'trilio-username', fieldName: 'username',
            displayOrder: 2, fieldLabel: 'Username', helpText: 'Trilio/OpenStack username',
            required: true, inputType: OptionType.InputType.TEXT
        )
        settings << new OptionType(
            name: 'PASSWORD', code: 'trilio-password', fieldName: 'password',
            displayOrder: 3, fieldLabel: 'Password', helpText: 'Trilio/OpenStack password',
            required: true, inputType: OptionType.InputType.PASSWORD
        )
        settings << new OptionType(
            name: 'PROJECT_NAME', code: 'trilio-project-name', fieldName: 'projectName',
            displayOrder: 4, fieldLabel: 'Project Name', helpText: 'OpenStack project name',
            required: true, inputType: OptionType.InputType.TEXT
        )
        settings << new OptionType(
            name: 'USER_DOMAIN_NAME', code: 'trilio-user-domain-name', fieldName: 'userDomainName',
            displayOrder: 5, fieldLabel: 'User Domain Name', helpText: 'OpenStack user domain',
            required: true, inputType: OptionType.InputType.TEXT
        )
        settings << new OptionType(
            name: 'PROJECT_DOMAIN_NAME', code: 'trilio-project-domain-name', fieldName: 'projectDomainName',
            displayOrder: 6, fieldLabel: 'Project Domain Name', helpText: 'OpenStack project domain',
            required: true, inputType: OptionType.InputType.TEXT
        )
        settings << new OptionType(
            name: 'TRILIO_API_BASE', code: 'trilio-api-base', fieldName: 'apiBase',
            displayOrder: 7, fieldLabel: 'Trilio API Base', helpText: 'Base URL for Trilio API',
            required: true, inputType: OptionType.InputType.TEXT
        )
        settings << new OptionType(
            name: 'WORKLOAD_NAME', code: 'trilio-workload-name', fieldName: 'workloadName',
            displayOrder: 8, fieldLabel: 'Workload Name', helpText: 'Trilio workload name',
            required: true, inputType: OptionType.InputType.TEXT
        )
    }

    @Override
    void onDestroy() {}

    @Override
    List<Permission> getPermissions() {
        [ Permission.build('Custom Tab Plugin','customTabPlugin',[Permission.AccessType.full]) ]
    }
}

