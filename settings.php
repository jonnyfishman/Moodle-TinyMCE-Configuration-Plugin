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

    // object
    $setting = new admin_setting_configtextarea('tiny_configurator/disabledMenuItems',
    new lang_string('disabledMenuItems', 'tiny_configurator'),
    new lang_string('disabledMenuItemsDesc', 'tiny_configurator'),
    'file view:code view:visualaid view:visualchars view:visualblocks',
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
    
}
