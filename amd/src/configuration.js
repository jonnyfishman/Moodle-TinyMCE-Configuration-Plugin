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
 * @module      tiny_tiny_configurator/configuration
 * @copyright   2022, Stevani Andolo  <stevani@hotmail.com.au>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {component} from './common';

export const configure = async (instanceConfig) => {

  let TOOLBAR = [...instanceConfig.toolbar];
  let MENU = {...instanceConfig.menu};

  // Use async to load in plugin variables
  const settings = await (async () => {
    const pluginName = `${component}/plugin:data`;

    while (!instanceConfig[pluginName]) {
      await new Promise(resolve => setTimeout(resolve, 1));
    }

    return instanceConfig[pluginName].params;
  })();



  //let QUICKBAR = instanceConfig.quickbars_selection_toolbar;
  /*
  quickbarToRemove.forEach(button => {
    const escapedButton = button.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    instanceConfig.quickbars_selection_toolbar = instanceConfig.quickbars_selection_toolbar.replace(
      new RegExp(escapedButton, 'g'), ''
    );
  });
  */

  // Edit the toolbar
  TOOLBAR.forEach(menu => {
    // Find the object in settings that matches the current menu.name
    const toolbarSettings = settings.toolbarSettings[menu.name];

    // Remove toolbar buttons
    if (toolbarSettings && toolbarSettings.remove) {

      menu.items = menu.items.filter(item => !toolbarSettings.remove.includes(item));
    }
    // Add toolbar buttons
    if (toolbarSettings && toolbarSettings.add) {
      menu.items = menu.items.concat(toolbarSettings.add);
    }
  });

  // Edit the menu
  for (const [menuName, menu] of Object.entries(MENU)) {
    const menuSettings = settings.menuSettings[menuName];

    if (menuSettings && menuSettings.items) {
      menu.items = menuSettings.items;
    }
  }

  return {
    menu: MENU,
    toolbar: TOOLBAR
  };

};
