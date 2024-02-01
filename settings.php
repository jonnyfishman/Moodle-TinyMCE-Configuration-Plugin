<?php

defined('MOODLE_INTERNAL') || die();

$ADMIN->add('editortiny', new admin_category('tiny_tiny_configurator', new lang_string('pluginname', 'tiny_tiny_configurator')));

$settings = new admin_settingpage('tiny_tiny_configurator_settings', new lang_string('pluginname', 'tiny_tiny_configurator'));

if ($ADMIN->fulltree) {

    $options = [
        'History' => [
            'history:undo' => 'Undo',
            'history:redo' => 'Redo',
        ],
        'Formatting' => [
            'formatting:bold' => 'Bold',
            'formatting:italic' => 'Italic',
        ],
        'Content' => [
            'content:tiny_media_image' => 'Media Image',
            'content:tiny_media_video' => 'Media Video',
            'content:tiny_recordrtc_audio' => 'RecordRTC Audio',
            'content:tiny_recordrtc_video' => 'RecordRTC Video',
            #'content:link' => 'Link',
            'content:tiny_h5p' => 'H5P',
            'content:tiny_link_link' => 'Link Link',
            'content:tiny_link_unlink' => 'Link Unlink',
        ],
        'View' => [
            'view:fullscreen' => 'Fullscreen',
        ],
        'Alignment' => [
            'alignment:alignleft' => 'Align Left',
            'alignment:aligncenter' => 'Align Center',
            'alignment:alignright' => 'Align Right',
        ],
        'Directionality' => [
            'directionality:ltr' => 'Left to Right (LTR)',
            'directionality:rtl' => 'Right to Left (RTL)',
        ],
        'Indentation' => [
            'indentation:outdent' => 'Outdent',
            'indentation:indent' => 'Indent',
        ],
        'Lists' => [
            'lists:bullist' => 'Bullet List',
            'lists:numlist' => 'Numbered List',
        ],
        'Advanced' => [
            'advanced:tiny_equation' => 'Equation',
        ],
        #'Comments' => [
        #    'addcomment' => 'Add Comment',
        #],
    ];
    
    $name = get_string('toolbarRemove', 'tiny_tiny_configurator');
    $desc = get_string('toolbarRemoveDesc', 'tiny_tiny_configurator');
    $default = [];
    $optionsFlat = [];
    
    foreach ($options as $group => $items) {
        foreach ($items as $key => $label) {
            $optionsFlat[$key] = ($group !== ucfirst($key)) ? $group . ': ' . $label : $label;
        }
    }
    
    // Toolbar Remove
    $setting = new admin_setting_configmultiselect('tiny_tiny_configurator/toolbarRemove', $name, $desc, $default, $optionsFlat);
    $setting->set_updatedcallback('theme_reset_all_caches');                                                    
    $settings->add($setting);    

    // Toolbar Add
    $setting = new admin_setting_configtextarea('tiny_tiny_configurator/toolbarAdd',
        new lang_string('toolbarAdd', 'tiny_tiny_configurator'),
        new lang_string('toolbarAddDesc', 'tiny_tiny_configurator'),
        '',
        PARAM_TEXT
    );    
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);    
    
    $settings->add(new admin_setting_heading('tiny_tiny_configurator/explanation','', get_string('menu_warning', 'tiny_tiny_configurator')));

    // Edit menu
    $setting = new admin_setting_configtextarea('tiny_tiny_configurator/editMenu',
    new lang_string('editMenu', 'tiny_tiny_configurator'),
    new lang_string('menuDesc', 'tiny_tiny_configurator'),
    'undo redo | cut copy paste pastetext | selectall | searchreplace',
    PARAM_TEXT
    );
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);    

    // View menu
    $setting = new admin_setting_configtextarea('tiny_tiny_configurator/viewMenu',
    new lang_string('viewMenu', 'tiny_tiny_configurator'),
    new lang_string('menuDesc', 'tiny_tiny_configurator'),
    'undo redo | cut copy paste pastetext | selectall | searchreplace',
    PARAM_TEXT
    );
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);  
    
    // Insert menu
    $setting = new admin_setting_configtextarea('tiny_tiny_configurator/insertMenu',
    new lang_string('insertMenu', 'tiny_tiny_configurator'),
    new lang_string('menuDesc', 'tiny_tiny_configurator'),
    'tiny_media_image tiny_link_link tiny_media_video tiny_recordrtc_audio tiny_recordrtc_video addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime tiny_equation tiny_h5p',
    PARAM_TEXT
    );
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);  
    
    // Format menu
    $setting = new admin_setting_configtextarea('tiny_tiny_configurator/formatMenu',
    new lang_string('formatMenu', 'tiny_tiny_configurator'),
    new lang_string('menuDesc', 'tiny_tiny_configurator'),
    'bold italic underline strikethrough superscript subscript codeformat | blocks align lineheight | language | removeformat',
    PARAM_TEXT
    );
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);  

    // Tools menu
    $setting = new admin_setting_configtextarea('tiny_tiny_configurator/toolsMenu',
    new lang_string('toolsMenu', 'tiny_tiny_configurator'),
    new lang_string('menuDesc', 'tiny_tiny_configurator'),
    'spellchecker spellcheckerlanguage | a11ycheck code wordcount tiny_accessibilitychecker tiny_mediamanager',
    PARAM_TEXT
    );
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);  

    // Bonus settings
    $settings->add(new admin_setting_heading('tiny_tiny_configurator/heading',get_string('bonus_heading', 'tiny_tiny_configurator'),''));

    // Color map
    $setting = new admin_setting_configtextarea('tiny_tiny_configurator/colorMap',
    new lang_string('colorMap', 'tiny_tiny_configurator'),
    new lang_string('colorMapDesc', 'tiny_tiny_configurator'),
    'Black:#000000 Yellow:#FFFF00',
    PARAM_TEXT
    );
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);  
    

}
