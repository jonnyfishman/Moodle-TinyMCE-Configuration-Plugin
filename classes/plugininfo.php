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

namespace tiny_tiny_configurator;

use context;
use editor_tiny\editor;
use editor_tiny\plugin;
use editor_tiny\plugin_with_configuration;

/**
 * Tiny media manager plugin.
 *
 * @package    tiny_tiny_configurator
 * @copyright  2022, Stevani Andolo <stevani@hotmail.com.au>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class plugininfo extends plugin implements plugin_with_configuration {

    public static function isValidHexColor($color) {
        // Remove the hash symbol if present
        $color = ltrim($color, '#');
        
        // Check if the remaining string is a valid hex color
        return preg_match('/^[a-fA-F0-9]{6}$/', $color) || preg_match('/^[a-fA-F0-9]{3}$/', $color);
    }

    public static function get_plugin_configuration_for_context(
        context $context,
        array $options,
        array $fpoptions,
        ?editor $editor = null
    ): array {

        // Toolbar settings
        $toolbarSettings = [];

        $toolbarRemove = get_config('tiny_tiny_configurator', 'toolbarRemove');
        $toolbarAdd = get_config('tiny_tiny_configurator', 'toolbarAdd');

        if($toolbarRemove) {
            $settings = explode(',', $toolbarRemove);
            foreach ($settings as $setting) {
                list($menu,$item) = explode(":", $setting);
                if (!isset($toolbarSettings[$menu])) {
                    $toolbarSettings[$menu]['remove'][] = $item;
                } elseif (!isset($toolbarSettings[$menu]['remove'])) {
                    $toolbarSettings[$menu]['remove'][] = $item;
                } else {
                    $toolbarSettings[$menu]['remove'][] = $item;
                }
            }
        }
        if($toolbarAdd) {
            // Split at space OR space comma OR comma OR line breaks
            $settings = preg_split('/[,\\s]+/', $toolbarAdd, -1, PREG_SPLIT_NO_EMPTY);
            foreach ($settings as $setting) {
                // Check if the string contains ':'
                if (strpos($setting, ':') === false) {
                    // String does not contain ':', continue to the next setting
                    continue;
                }

                list($menu,$item) = explode(":", $setting);
                if (!isset($toolbarSettings[$menu])) {
                    $toolbarSettings[$menu]['add'][] = $item;
                } elseif (!isset($toolbarSettings[$menu]['add'])) {
                    $toolbarSettings[$menu]['add'][] = $item;
                } else {
                    $toolbarSettings[$menu]['add'][] = $item;
                }
            }
        }

        // Menu settings
        $menuSettings = [];

        $menus = [
            'edit' => get_config('tiny_tiny_configurator', 'editMenu'),
            'view' => get_config('tiny_tiny_configurator', 'viewMenu'),
            'insert' => get_config('tiny_tiny_configurator', 'insertMenu'),
            'format' => get_config('tiny_tiny_configurator', 'formatMenu'),
            'tools' => get_config('tiny_tiny_configurator', 'toolsMenu')
        ];

        foreach( $menus as $menu => $items) {

            if (!$items) continue;

            // Replace new lines or commas with space
            $oneLineItems = preg_replace('/[\r\n,]+/', ' ', $items);

            // Replace any character that isn't a letter, number, space, _ or |
            $cleanItems = preg_replace('/[^a-zA-Z0-9 _|]/', '', $oneLineItems);
            
            $menuSettings[$menu]['items'] = $cleanItems;
        }

        // Bonus settings
        $colorMapSettings = [];

        $colorMap = get_config('tiny_tiny_configurator', 'colorMap');

        if ($colorMap) {
            // Split at space OR space comma OR comma OR line breaks
            $colors = preg_split('/[,\\s]+/', $colorMap, -1, PREG_SPLIT_NO_EMPTY);
            foreach ($colors as $color) {
                // Check if the string contains ':'
                if (strpos($setting, ':') === false) {
                    // String does not contain ':', continue to the next color
                    continue;
                }

                list($name,$hex) = explode(":", $color);
                if (self::isValidHexColor($hex)) {
                    // Replace any character that isn't a letter, number or _
                    $cleanName = preg_replace('/[^a-zA-Z0-9_]/', '', $name);
                    
                    $colorArray = [
                        'text' => preg_replace('/_/', ' ', $cleanName),
                        'value' => $hex,
                        'icon' => 'checkmark',
                        'type' => 'choiceitem'
                    ];

                    $colorMapSettings[] = $colorArray;
                }
            }
        }

        $data = [
            'params' => [
                'toolbarSettings' => $toolbarSettings,
                'menuSettings' => $menuSettings,
                'colorMapSettings' => $colorMapSettings
            ],
            'fpoptions' => $fpoptions
        ];

        return [
            'data' => $data
        ];
    }
}
