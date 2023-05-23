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
  removeToolbarButton
} from 'editor_tiny/utils';

import {component} from './common';

export const configure = async (instanceConfig) => {

  // use async IIFE to wait for object elements to be added
  const pluginParams = await (async () => {
    const pluginName = `${component}/plugin:data`;

    while (!instanceConfig[pluginName]) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return instanceConfig[pluginName].params;
  })();

  // could this be sped up by removing elements from params as they are used?

  // remove toolbar items
  const buttonsToRemove = pluginParams.disabledToolbarButtons.split(' ');
  buttonsToRemove.forEach(button => {

    if( button.includes(":") ) { // remove button
      const parts = button.split(':');
      instanceConfig.toolbar = removeToolbarButton(instanceConfig.toolbar, parts[0], parts[1]);

    } else { // remove button menu
      instanceConfig.toolbar = instanceConfig.toolbar.filter(function (toolbarItem) {
          return toolbarItem.name !== button;
      });

    }
  });

  // remove menu items
  const menusToRemove = pluginParams.disabledMenuItems.split(' ');

  menusToRemove.forEach(menuName => {

    if( menuName.includes(":") ) { // remove menu item
      const parts = menuName.split(':');
      instanceConfig.menu[parts[0]].items = instanceConfig.menu[parts[0]].items.replace(parts[1], '');

    } else { // remove menu
      for (const name in instanceConfig.menu) {
        if (instanceConfig.menu[name] === menuName) {
          delete instanceConfig.menu[name];
          break;
        }
      }
    }
  });

  // These come from editor.js in parent
  /*
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
  */

  // This removes a menu item intirely from the menu bar
  if (instanceConfig.menu.edit) {
      // instanceConfig.menu.edit.items = '';
  }
  console.log(instanceConfig);
  return instanceConfig;

};
