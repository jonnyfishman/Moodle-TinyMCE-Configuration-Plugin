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
  removeMenubarItem
} from 'editor_tiny/utils';
import {component} from './common';

export const configure = async (instanceConfig) => {


  // use async IIFE to wait for object elements to be added
  const disabledToobarButtons = await (async () => {
    const pluginName = `${component}/plugin:data`;

    while (!instanceConfig[pluginName]) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return instanceConfig[pluginName].params;
  })();

  console.log(disabledToobarButtons);

  const buttonsToRemove = disabledToobarButtons.disabledToobarButtons.split(' ');
  buttonsToRemove.forEach(button => {
    if( button.includes("[") ) { // remove top level button
      instanceConfig.toolbar = instanceConfig.toolbar.filter(function(item) {
        return item.name !== button.replace('[|]','');
      });
    } else {
      instanceConfig.toolbar.forEach(function (element) {
        element.items = element.items.filter(function (item) {
          return item !== button;
        });
      });
    }
  });

  // These come from editor.js in parent

  // This could be tweaked to change the colours to match the theme etc.
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

  // This removes a menu item intirely from the menu bar
  if (instanceConfig.menu.edit) {
      instanceConfig.menu.edit.items = '';
  }

  // This is how to remove menu buttons
  instanceConfig.menu = removeMenubarItem(instanceConfig.menu, 'format', 'bold');

  // This is how to remove toolbar buttons
  console.log(instanceConfig);
  return instanceConfig;

};
