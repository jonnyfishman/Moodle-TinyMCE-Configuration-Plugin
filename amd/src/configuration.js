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
 * Tiny Media Manager configuration.
 *
 * @module      tiny_configurator/configuration
 * @copyright   2022, Stevani Andolo  <stevani@hotmail.com.au>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// import {accessbilityButtonName} from './common';
import {
    removeToolbarButtons,
} from 'editor_tiny/utils';

export const configure = (instanceConfig) => {

    console.log(instanceConfig);
    // Update the instance configuration to add the Tools menu.
    // We disable the styles, backcolor, and forecolor plugins from the format menu.
    // These are not useful for Moodle and we don't want to encourage their use.
    if (instanceConfig.menu.format) {
        instanceConfig.menu.format.items = instanceConfig.menu.format.items
            // Remove forecolor and backcolor.
            .replace(/forecolor ?/, '')
            .replace(/backcolor ?/, '')

            // Remove fontfamily for now.
            .replace(/fontfamily ?/, '')

            // Remove fontsize for now.
            .replace(/fontsize ?/, '')

            // Remove styles - it just duplicates the format menu in a way which does not respect configuration
            .replace(/styles ?/, '')

            // Remove any duplicate separators.
            .replaceAll(/\| *\|/g, '|');
    }

    // Next we make any standard changes.
    // Here we remove the file menu, as it doesn't offer any useful functionality.
    // We only empty the items list so that a plugin may choose to add to it themselves later if they wish.
    if (instanceConfig.menu.edit) {
        instanceConfig.menu.edit.items = '';
    }

    instanceConfig.toolbar = removeToolbarButtons(instanceConfig.toolbar, 'formatting', [']bold','italic']);

    return instanceConfig;
    /*
    return {
        // menu: addMenubarItem(instanceConfig.menu, 'tools', accessbilityButtonName)
        // menu: removeMenubarItems(instanceConfig.menu, 'tools', accessbilityButtonName)
    };
    */
};
