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

namespace tiny_configurator;

use context;
use editor_tiny\editor;
use editor_tiny\plugin;
use editor_tiny\plugin_with_configuration;

/**
 * Tiny media manager plugin.
 *
 * @package    tiny_configurator
 * @copyright  2022, Stevani Andolo <stevani@hotmail.com.au>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class plugininfo extends plugin implements plugin_with_configuration {

    public static function get_plugin_configuration_for_context(
        context $context,
        array $options,
        array $fpoptions,
        ?editor $editor = null
    ): array {
        $disabledToolbarButtons = get_config('tiny_configurator', 'disabledToolbarButtons');
        $quickbarsSelectionToolbar = get_config('tiny_configurator', 'quickbarsSelectionToolbar');
        $disabledMenuItems = get_config('tiny_configurator', 'disabledMenuItems');
        
        $params = [
            'disabledToolbarButtons' => $disabledToolbarButtons,
            'quickbarsSelectionToolbar' => $quickbarsSelectionToolbar,
            'disabledMenuItems' => $disabledMenuItems
        ];

        $data = [
            'params' => $params,
            'fpoptions' => $fpoptions
        ];

        return [
            'data' => $data
        ];
    }
}
