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
 * Tiny Media Manager plugin for Moodle.
 *
 * @module      tiny_tiny_configurator/plugin
 * @copyright   2022, Stevani Andolo  <stevani@hotmail.com.au>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
import {getTinyMCE} from 'editor_tiny/loader';
import {getPluginMetadata} from 'editor_tiny/utils';

import {component, pluginName} from './common';
import * as Configuration from './configuration';

import * as Options from './options';

export default new Promise(async(resolve) => {
    const tinyMCE = await getTinyMCE();
    const pluginMetadata = await getPluginMetadata(component, pluginName);

    tinyMCE.PluginManager.add(`${component}/plugin`, (editor) => {

        Options.register(editor);

        return pluginMetadata;
    });

    // Resolve the new tinyMCE instance and include button configuration
    resolve([pluginName, Configuration]);
});
