<?php

defined('MOODLE_INTERNAL') || die();

function xmldb_tiny_configurator_install() {
    global $DB;

    $table = new xmldb_table('tiny_configurator');
    $field = new xmldb_field('disabledbuttons', XMLDB_TYPE_CHAR, '255', null, XMLDB_NOTNULL, null, null, 'tinymce');

    // Add the field to the table
    $dbman = $DB->get_manager();
    $dbman->add_field($table, $field);

    // Add any other necessary DB modifications here
    // ...

    // Add default data to the table
    $data = new stdClass();
    $data->id = 1;
    $data->disabledbuttons = '';
    $DB->insert_record('tiny_configurator', $data);

    // Any other necessary DB insertions here
    // ...
}
