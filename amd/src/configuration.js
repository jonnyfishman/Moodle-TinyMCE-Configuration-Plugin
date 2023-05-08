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
    removeMenubarItem
} from 'editor_tiny/utils';

export const configure = (instanceConfig) => {

    console.log(instanceConfig);
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
    instanceConfig.toolbar = removeToolbarButtons(instanceConfig.toolbar, 'formatting', ['bold','italic']);

    return instanceConfig;

};

/* The tinyMCE instance object:

{
  "toolbar_mode": "sliding",
  "toolbar": [
    {
      "name": "history",
      "items": [
        "undo",
        "redo"
      ]
    },
    {
      "name": "formatting",
      "items": [
        "bold",
        "italic"
      ]
    },
    {
      "name": "content",
      "items": [
        "tiny_media_image",
        "tiny_media_video",
        "tiny_recordrtc_audio",
        "tiny_recordrtc_video",
        "link",
        "tiny_ai",
        "tiny_h5p",
        "tiny_link_link",
        "tiny_link_unlink"
      ]
    },
    {
      "name": "alignment",
      "items": [
        "alignleft",
        "aligncenter",
        "alignright"
      ]
    },
    {
      "name": "directionality",
      "items": [
        "ltr",
        "rtl"
      ]
    },
    {
      "name": "indentation",
      "items": [
        "outdent",
        "indent"
      ]
    },
    {
      "name": "lists",
      "items": [
        "bullist",
        "numlist"
      ]
    },
    {
      "name": "advanced",
      "items": [
        "tiny_equation"
      ]
    },
    {
      "name": "comments",
      "items": [
        "addcomment"
      ]
    }
  ],
  "quickbars_selection_toolbar": "bold italic | quicklink h3 h4 h5 h6 blockquote",
  "quickbars_insert_toolbar": "",
  "quickbars_image_toolbar": "alignleft aligncenter alignright",
  "menu": {
    "file": {
      "title": "File",
      "items": ""
    },
    "edit": {
      "title": "Edit",
      "items": ""
    },
    "view": {
      "title": "View",
      "items": "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments"
    },
    "insert": {
      "title": "Insert",
      "items": "tiny_media_image tiny_link_link tiny_media_video tiny_recordrtc_audio tiny_recordrtc_video addcomment
                pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents |
                insertdatetime tiny_ai tiny_equation tiny_h5p"
    },
    "format": {
      "title": "Format",
      "items": "bold italic underline strikethrough superscript subscript codeformat | blocks align lineheight |
                language | removeformat"
    },
    "tools": {
      "title": "Tools",
      "items": "spellchecker spellcheckerlanguage | a11ycheck code wordcount tiny_accessibilitychecker tiny_mediamanager"
    },
    "table": {
      "title": "Table",
      "items": "inserttable | cell row column | advtablesort | tableprops deletetable"
    },
    "help": {
      "title": "Help",
      "items": "help"
    }
  },
  "skin": "oxide",
  "base_url": "http://192.168.1.43/lib/editor/tiny/loader.php/1683501528",
  "target": {},
  "min_height": 175,
  "height": 234,
  "language": "en",
  "content_css": [
    "http://192.168.1.43/theme/styles.php/boost/1683501528_1/editor"
  ],
  "convert_urls": false,
  "a11y_advanced_options": true,
  "block_formats": "Paragraph=p; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6;",
  "plugins": [
    "anchor",
    "charmap",
    "code",
    "codesample",
    "directionality",
    "emoticons",
    "fullscreen",
    "help",
    "insertdatetime",
    "lists",
    "nonbreaking",
    "pagebreak",
    "quickbars",
    "save",
    "searchreplace",
    "table",
    "visualblocks",
    "visualchars",
    "wordcount",
    "tiny_accessibilitychecker/plugin",
    "tiny_ai/plugin",
    "tiny_autosave/plugin",
    "tiny_configurator/plugin",
    "tiny_equation/plugin",
    "tiny_h5p/plugin",
    "tiny_link/plugin",
    "tiny_media/plugin",
    "tiny_recordrtc/plugin"
  ],
  "promotion": false,
  "branding": true,
  "table_header_type": "sectionCells",
  "contextmenu": "tiny_media_image tiny_media_video",
  "images_reuse_filename": true,
  "tiny_accessibilitychecker/plugin:permissions": {
    "upload": true
  },
  "tiny_accessibilitychecker/plugin:storeinrepo": true,
  "tiny_ai/plugin:contextid": 2,
  "tiny_autosave/plugin:pagehash": "ce8374961780ef5352e94b10e063e28ab481022b",
  "tiny_autosave/plugin:pageinstance": "2ab8b92f63fb021dacf25adb9fd6ce5a",
  "tiny_autosave/plugin:backoffTime": 500,
  "tiny_configurator/plugin:permissions": {
    "upload": true
  },
  "tiny_configurator/plugin:storeinrepo": true,
  "tiny_equation/plugin:texfilter": true,
  "tiny_equation/plugin:contextid": 2,
  "tiny_equation/plugin:libraries": [
    {
      "key": "group1",
      "groupname": "Operators",
      "elements": [
        "\\cdot",
        "\\times",
        "\\ast",
        "\\div",
        "\\diamond",
        "\\pm",
        "\\mp",
        "\\oplus",
        "\\ominus",
        "\\otimes",
        "\\oslash",
        "\\odot",
        "\\circ",
        "\\bullet",
        "\\asymp",
        "\\equiv",
        "\\subseteq",
        "\\supseteq",
        "\\leq",
        "\\geq",
        "\\preceq",
        "\\succeq",
        "\\sim",
        "\\simeq",
        "\\approx",
        "\\subset",
        "\\supset",
        "\\ll",
        "\\gg",
        "\\prec",
        "\\succ",
        "\\infty",
        "\\in",
        "\\ni",
        "\\forall",
        "\\exists",
        "\\neq"
      ],
      "active": true
    },
    {
      "key": "group2",
      "groupname": "Arrows",
      "elements": [
        "\\leftarrow",
        "\\rightarrow",
        "\\uparrow",
        "\\downarrow",
        "\\leftrightarrow",
        "\\nearrow",
        "\\searrow",
        "\\swarrow",
        "\\nwarrow",
        "\\Leftarrow",
        "\\Rightarrow",
        "\\Uparrow",
        "\\Downarrow",
        "\\Leftrightarrow"
      ]
    },
    {
      "key": "group3",
      "groupname": "Greek symbols",
      "elements": [
        "\\alpha",
        "\\beta",
        "\\gamma",
        "\\delta",
        "\\epsilon",
        "\\zeta",
        "\\eta",
        "\\theta",
        "\\iota",
        "\\kappa",
        "\\lambda",
        "\\mu",
        "\\nu",
        "\\xi",
        "\\pi",
        "\\rho",
        "\\sigma",
        "\\tau",
        "\\upsilon",
        "\\phi",
        "\\chi",
        "\\psi",
        "\\omega",
        "\\Gamma",
        "\\Delta",
        "\\Theta",
        "\\Lambda",
        "\\Xi",
        "\\Pi",
        "\\Sigma",
        "\\Upsilon",
        "\\Phi",
        "\\Psi",
        "\\Omega"
      ]
    },
    {
      "key": "group4",
      "groupname": "Advanced",
      "elements": [
        "\\sum{a,b}",
        "\\sqrt[a]{b+c}",
        "\\int_{a}^{b}{c}",
        "\\iint_{a}^{b}{c}",
        "\\iiint_{a}^{b}{c}",
        "\\oint{a}",
        "(a)",
        "[a]",
        "\\lbrace{a}\\rbrace",
        "\\left| \\begin{matrix} a_1 & a_2 \\\\ a_3 & a_4 \\end{matrix} \\right|",
        "\\frac{a}{b+c}",
        "\\vec{a}",
        "\\binom {a} {b}",
        "{a \\brack b}",
        "{a \\brace b}"
      ]
    }
  ],
  "tiny_equation/plugin:texdocsurl": "https://docs.moodle.org/402/en/Using_TeX_Notation",
  "tiny_h5p/plugin:permissions": {
    "embed": true,
    "upload": true,
    "uploadandembed": true
  },
  "tiny_h5p/plugin:storeinrepo": true,
  "tiny_link/plugin:permissions": {
    "filepicker": true
  },
  "tiny_media/plugin:permissions": {
    "image": {
      "filepicker": true
    },
    "embed": {
      "filepicker": true
    }
  },
  "tiny_media/plugin:storeinrepo": true,
  "tiny_media/plugin:data": {
    "params": {
      "area": {
        "context": 2,
        "areamaxbytes": -1,
        "maxbytes": 0,
        "subdirs": 1,
        "return_types": 15,
        "removeorphaneddrafts": false
      },
      "usercontext": 5
    },
    "fpoptions": {
      "h5p": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".h5p"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e67ee9d",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "image": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "6": {
            "id": "6",
            "name": "URL downloader",
            "type": "url",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_url/1683501528/icon",
            "supported_types": [
              ".gif",
              ".jpe",
              ".jpeg",
              ".jpg",
              ".png",
              ".svg",
              ".svgz"
            ],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 6
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".gif",
          ".jpe",
          ".jpeg",
          ".jpg",
          ".png",
          ".svg",
          ".svgz"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e66d720",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "media": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".3gp",
          ".avi",
          ".dv",
          ".dif",
          ".flv",
          ".f4v",
          ".fmp4",
          ".mov",
          ".movie",
          ".mp4",
          ".m4v",
          ".mpeg",
          ".mpe",
          ".mpg",
          ".ogv",
          ".qt",
          ".rmvb",
          ".rv",
          ".ts",
          ".webm",
          ".wmv",
          ".asf",
          ".aac",
          ".aif",
          ".aiff",
          ".aifc",
          ".au",
          ".flac",
          ".m3u",
          ".mp3",
          ".m4a",
          ".oga",
          ".ogg",
          ".ra",
          ".ram",
          ".rm",
          ".wav",
          ".wma"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e6732a4",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "link": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "6": {
            "id": "6",
            "name": "URL downloader",
            "type": "url",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_url/1683501528/icon",
            "supported_types": [
              ".gif",
              ".jpe",
              ".jpeg",
              ".jpg",
              ".png",
              ".svg",
              ".svgz"
            ],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 6
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e67816f",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "subtitle": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".vtt"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e67b726",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      }
    }
  },
  "tiny_recordrtc/plugin:data": {
    "params": {
      "contextid": 2,
      "sesskey": "xGQjqDUl7b",
      "allowedtypes": "both",
      "audiobitrate": "128000",
      "videobitrate": "2500000",
      "audiotimelimit": "120",
      "videotimelimit": "120",
      "maxrecsize": 104857600
    },
    "fpoptions": {
      "h5p": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".h5p"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e67ee9d",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "image": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "6": {
            "id": "6",
            "name": "URL downloader",
            "type": "url",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_url/1683501528/icon",
            "supported_types": [
              ".gif",
              ".jpe",
              ".jpeg",
              ".jpg",
              ".png",
              ".svg",
              ".svgz"
            ],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 6
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".gif",
          ".jpe",
          ".jpeg",
          ".jpg",
          ".png",
          ".svg",
          ".svgz"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e66d720",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "media": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".3gp",
          ".avi",
          ".dv",
          ".dif",
          ".flv",
          ".f4v",
          ".fmp4",
          ".mov",
          ".movie",
          ".mp4",
          ".m4v",
          ".mpeg",
          ".mpe",
          ".mpg",
          ".ogv",
          ".qt",
          ".rmvb",
          ".rv",
          ".ts",
          ".webm",
          ".wmv",
          ".asf",
          ".aac",
          ".aif",
          ".aiff",
          ".aifc",
          ".au",
          ".flac",
          ".m3u",
          ".mp3",
          ".m4a",
          ".oga",
          ".ogg",
          ".ra",
          ".ram",
          ".rm",
          ".wav",
          ".wma"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e6732a4",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "link": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "6": {
            "id": "6",
            "name": "URL downloader",
            "type": "url",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_url/1683501528/icon",
            "supported_types": [
              ".gif",
              ".jpe",
              ".jpeg",
              ".jpg",
              ".png",
              ".svg",
              ".svgz"
            ],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 6
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e67816f",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      },
      "subtitle": {
        "defaultlicense": "unknown",
        "licenses": {
          "unknown": {
            "id": "1",
            "shortname": "unknown",
            "fullname": "Licence not specified",
            "source": "",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "1"
          },
          "allrightsreserved": {
            "id": "2",
            "shortname": "allrightsreserved",
            "fullname": "All rights reserved",
            "source": "https://en.wikipedia.org/wiki/All_rights_reserved",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "2"
          },
          "public": {
            "id": "3",
            "shortname": "public",
            "fullname": "Public domain",
            "source": "https://en.wikipedia.org/wiki/Public_domain",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "3"
          },
          "cc": {
            "id": "4",
            "shortname": "cc",
            "fullname": "Creative Commons",
            "source": "https://creativecommons.org/licenses/by/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "4"
          },
          "cc-nd": {
            "id": "5",
            "shortname": "cc-nd",
            "fullname": "Creative Commons - NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "5"
          },
          "cc-nc-nd": {
            "id": "6",
            "shortname": "cc-nc-nd",
            "fullname": "Creative Commons - No Commercial NoDerivs",
            "source": "https://creativecommons.org/licenses/by-nc-nd/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "6"
          },
          "cc-nc": {
            "id": "7",
            "shortname": "cc-nc",
            "fullname": "Creative Commons - No Commercial",
            "source": "https://creativecommons.org/licenses/by-nc/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "7"
          },
          "cc-nc-sa": {
            "id": "8",
            "shortname": "cc-nc-sa",
            "fullname": "Creative Commons - No Commercial ShareAlike",
            "source": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "8"
          },
          "cc-sa": {
            "id": "9",
            "shortname": "cc-sa",
            "fullname": "Creative Commons - ShareAlike",
            "source": "https://creativecommons.org/licenses/by-sa/3.0/",
            "enabled": "1",
            "version": "2010033100",
            "custom": "0",
            "sortorder": "9"
          }
        },
        "author": "Admin User",
        "repositories": {
          "1": {
            "id": "1",
            "name": "Embedded files",
            "type": "areafiles",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_areafiles/1683501528/icon",
            "supported_types": [],
            "return_types": 1,
            "defaultreturntype": 2,
            "sortorder": 1
          },
          "2": {
            "id": "2",
            "name": "Content bank",
            "type": "contentbank",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_contentbank/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 4,
            "sortorder": 2
          },
          "3": {
            "id": "3",
            "name": "Server files",
            "type": "local",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_local/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 3
          },
          "4": {
            "id": "4",
            "name": "Recent files",
            "type": "recent",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_recent/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 4
          },
          "5": {
            "id": "5",
            "name": "Upload a file",
            "type": "upload",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_upload/1683501528/icon",
            "supported_types": [],
            "return_types": 2,
            "defaultreturntype": 2,
            "sortorder": 5
          },
          "7": {
            "id": "7",
            "name": "Private files",
            "type": "user",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_user/1683501528/icon",
            "supported_types": [],
            "return_types": 6,
            "defaultreturntype": 2,
            "sortorder": 7
          },
          "8": {
            "id": "8",
            "name": "Wikimedia",
            "type": "wikimedia",
            "icon": "http://192.168.1.43/theme/image.php/boost/repository_wikimedia/1683501528/icon",
            "supported_types": [],
            "return_types": 3,
            "defaultreturntype": 2,
            "sortorder": 8
          }
        },
        "externallink": true,
        "rememberuserlicensepref": true,
        "userprefs": {
          "recentrepository": "",
          "recentlicense": "",
          "recentviewmode": ""
        },
        "accepted_types": [
          ".vtt"
        ],
        "return_types": 15,
        "context": {
          "id": 2,
          "contextlevel": 50,
          "instanceid": "1",
          "path": "/1/2",
          "depth": "2",
          "locked": false
        },
        "client_id": "645831e67b726",
        "maxbytes": 0,
        "areamaxbytes": -1,
        "env": "editor",
        "itemid": 804751037
      }
    }
  },
  "tiny_recordrtc/plugin:videoAllowed": true,
  "tiny_recordrtc/plugin:audioAllowed": true,
  "external_plugins": {},
  "forced_plugins": []
}

*/