<?php

defined('MOODLE_INTERNAL') || die();

$ADMIN->add('editortiny', new admin_category('tiny_configurator', new lang_string('pluginname', 'tiny_configurator')));

$settings = new admin_settingpage('tiny_configurator_settings', new lang_string('pluginnamedesc', 'tiny_configurator'));

if ($ADMIN->fulltree) {

    // object
    $setting = new admin_setting_configtextarea('tiny_configurator/disabledToolbarButtons',
        new lang_string('disabledToolbarButtons', 'tiny_configurator'),
        new lang_string('disabledToolbarButtonsDesc', 'tiny_configurator'),
        '[directionality] ltr rtl',
        PARAM_TEXT
    );
    $settings->add($setting);

    // array
    $setting = new admin_setting_configtextarea('tiny_configurator/addToolbarButtons',
        new lang_string('addToolbarButtons', 'tiny_configurator'),
        new lang_string('addToolbarButtonsDesc', 'tiny_configurator'),
        '',
        PARAM_TEXT
    );
    $settings->add($setting);    

    // object
    $setting = new admin_setting_configtextarea('tiny_configurator/disabledMenuItems',
    new lang_string('disabledMenuItems', 'tiny_configurator'),
    new lang_string('disabledMenuItemsDesc', 'tiny_configurator'),
    'file view:code view:visualaid view:visualchars view:visualblocks',
    PARAM_TEXT
    );
    $settings->add($setting);    

    // array
    $setting = new admin_setting_configtextarea('tiny_configurator/addMenuItems',
        new lang_string('addMenuItems', 'tiny_configurator'),
        new lang_string('addMenuItemsDesc', 'tiny_configurator'),
        '',
        PARAM_TEXT
    );
    $settings->add($setting);    

    // array
    $setting = new admin_setting_configtextarea('tiny_configurator/quickbarsSelectionToolbar',
        new lang_string('quickbarsSelectionToolbar', 'tiny_configurator'),
        new lang_string('quickbarsSelectionToolbarDesc', 'tiny_configurator'),
        '',
        PARAM_TEXT
    );
    $settings->add($setting);

    // array
    $setting = new admin_setting_configtextarea('tiny_configurator/addQuickbarsSelectionToolbar',
        new lang_string('addQuickbarsSelectionToolbar', 'tiny_configurator'),
        new lang_string('addQuickbarsSelectionToolbarDesc', 'tiny_configurator'),
        '',
        PARAM_TEXT
    );
    $settings->add($setting);
/*
    // Save settings
    if (!empty($_POST)) {
        // Flush cache
        cache_helper::purge_by_definition('default_application', 'cachestore_file');

        // Save the settings
        $settings->save_settings($_POST);
    }
*/
}
