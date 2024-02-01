<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Strings for component 'tiny_tiny_configurator', language 'en'.
 *
 * @package    tiny_tiny_configurator
 * @copyright  2022, Stevani Andolo <stevani@hotmail.com.au>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// Need to remove the html from $string variables?
$string['pluginname'] = 'Tiny Configurator';
$string['pluginnamedesc'] = 'A plugin for configuring TinyMCE buttons';

$string['toolbarRemove'] = 'Remove Toolbar Buttons';
$string['toolbarRemoveDesc'] = 'Select the button/s to remove from the editor.';

$string['toolbarAdd'] = 'Add Toolbar Buttons';
$string['toolbarAddDesc'] = '<p>The toolbar has the following groups: History, Formatting, Content, View, Alignment, Directionality, Indentation, Lists, Advanced, Comments </p><p>Add the group followed by <strong>:</strong> and the button required <a href="https://www.tiny.cloud/docs/advanced/available-toolbar-buttons/" target="_blank">see the full list of available buttons<span class="sr-only"> (opens in a new window)</span></a> for support. Place each button on a new line.</p><p><em>Example: formatting:forecolor</em></p>';

$string['menu_warning'] = '
<div class="notify notifyproblem">
    <div class="notifycontent">
        <span class="icon"></span>
        <div class="info">
            <h2>Warning!</h2>
            <p>Below are settings for the first 5 menus available in TinyMCE. The default content for each is shown. Changes made here will overwrite the default editor menus, so use with caution. <a href="https://www.tiny.cloud/docs/tinymce/latest/menus-configuration-options/#example-the-tinymce-default-menu-items" target="_blank">See the documentation for the correct format to use<span class="sr-only"> (opens in a new window)</span></a> when setting these values.</p>
        </div>
    </div>
</div>';

$string['editMenu'] = "Edit Menu";
$string['viewMenu'] = "View Menu";
$string['insertMenu'] = "Insert Menu";
$string['formatMenu'] = "Format Menu";
$string['toolsMenu'] = "Tools Menu";
$string['menuDesc'] = "<p>Place each menu item on a new line.</p>";

$string['bonus_heading'] = 'Bonus Settings';

$string['colorMap'] = 'Colour Palette';
$string['colorMapDesc'] = "<p>Add a custom palette to TinyMCE forecolor and backcolor buttons. Use the form [name]:[hex value] with each colour on a new line.</p><p><em>N.B. spaces in names should use _ as a separator, hex values must include #</em></p>";
 
$string['helplinktext'] = 'To remove a button or menu item add the parent name followed by a colon. To remove the parent just use the parent name';

