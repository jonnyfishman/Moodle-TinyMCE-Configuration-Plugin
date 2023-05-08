<?php

defined('MOODLE_INTERNAL') || die();

$ADMIN->add('editortiny', new admin_category('tiny_configurator', new lang_string('pluginname', 'tiny_configurator')));

$settings = new admin_settingpage('tiny_configurator_settings', new lang_string('pluginnamedesc', 'tiny_configurator'));

if ($ADMIN->fulltree) {

    $setting = new admin_setting_configtextarea('tiny_configurator/buttons',
        new lang_string('buttons', 'tiny_configurator'),
        new lang_string('buttonsdesc', 'tiny_configurator'),
        '',
        PARAM_TEXT
    );
    $settings->add($setting);
    
}
