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
 * Options helper for Tiny Record RTC plugin.
 *
 * @module      tiny_recordrtc/options
 * @copyright   2022, Stevani Andolo <stevani@hotmail.com.au>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {pluginName} from './common';
import {getPluginOptionName} from 'editor_tiny/options';

const dataName = getPluginOptionName(pluginName, 'data');
const getData = (editor) => editor.options.get(dataName);

export const register = async (editor) => {

  const registerOption = editor.options.register;

  registerOption(dataName, {
      processor: 'object',
  });

  const colorMap = getData(editor).params.colorMapSettings;

  if (colorMap && colorMap.length > 0) {
    // Register colors
    registerOption('color_map', {
      processor: 'array',
      default: colorMap
    });

    // Hide colorPicker
    registerOption('custom_colors', {
      processor: 'boolean',
      default: false
    });

  }

};

export {
  getData
};
