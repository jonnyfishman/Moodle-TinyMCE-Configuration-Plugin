<?php

defined('MOODLE_INTERNAL') || die();

$ADMIN->add('editortiny', new admin_category('tiny_configurator', new lang_string('pluginname', 'tiny_configurator')));

$settings = new admin_settingpage('tiny_configurator_settings', new lang_string('pluginnamedesc', 'tiny_configurator'));

if ($ADMIN->fulltree) {

    // object
    $setting = new admin_setting_configtextarea('tiny_configurator/disabledToobarButtons',
        new lang_string('buttons', 'tiny_configurator'),
        new lang_string('buttonsdesc', 'tiny_configurator') . ' [history] undo redo [formatting] bold italic [content] tiny_media_image tiny_media_video tiny_recordrtc_audio tiny_recordrtc_video link tiny_h5p tiny_link_link tiny_link_unlink [alignment] alignleft aligncenter alignright [directionality] ltr rtl [indentation] outdent indent [lists] bullist numlist [advanced] tiny_equation [comments] addcomment',
        '[directionality] ltr rtl',
        PARAM_TEXT
    );
    $settings->add($setting);

    // array
    $setting = new admin_setting_configtextarea('tiny_configurator/quickbarsSelectionToolbar',
        new lang_string('buttons', 'tiny_configurator'),
        new lang_string('buttonsdesc', 'tiny_configurator'),
        'bold italic | quicklink h3 h4 h5 h6 blockquote',
        PARAM_TEXT
    );
    $settings->add($setting);

    // object
    $setting = new admin_setting_configtextarea('tiny_configurator/disabledMenuItems',
        new lang_string('buttons', 'tiny_configurator'),
        new lang_string('buttonsdesc', 'tiny_configurator'),
        '"menu": {
            "file": {
              "title": "File",
              "items": ""
            },
            "edit": {
              "title": "Edit",
              "items": ""
            },
            "view": {
              "title": "View",
              "items": "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments"
            },
            "insert": {
              "title": "Insert",
              "items": "tiny_media_image tiny_link_link tiny_media_video tiny_recordrtc_audio tiny_recordrtc_video addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime tiny_ai tiny_equation tiny_h5p"
            },
            "format": {
              "title": "Format",
              "items": "bold italic underline strikethrough superscript subscript codeformat | blocks align lineheight | language | removeformat"
            },
            "tools": {
              "title": "Tools",
              "items": "spellchecker spellcheckerlanguage | a11ycheck code wordcount tiny_accessibilitychecker tiny_mediamanager"
            },
            "table": {
              "title": "Table",
              "items": "inserttable | cell row column | advtablesort | tableprops deletetable"
            },
            "help": {
              "title": "Help",
              "items": "help"
            }
          }',
        PARAM_TEXT
    );
    $settings->add($setting);
    
}
