require.config({"config": {
        "jsbuild":{"jquery/jstree/jquery.hotkeys.js":"/*\n * jQuery Hotkeys Plugin\n * Copyright 2010, John Resig\n * Dual licensed under the MIT or GPL Version 2 licenses.\n *\n * Based upon the plugin by Tzury Bar Yochay:\n * http://github.com/tzuryby/hotkeys\n *\n * Original idea by:\n * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/\n*/\n(function (factory) {\n    if (typeof define === 'function' && define.amd) {\n        define([\"jquery\"], factory);\n    } else {\n        factory(jQuery);\n    }\n}(function (jQuery) {\n\n\tjQuery.hotkeys = {\n\t\tversion: \"0.8\",\n\n\t\tspecialKeys: {\n\t\t\t8: \"backspace\", 9: \"tab\", 13: \"return\", 16: \"shift\", 17: \"ctrl\", 18: \"alt\", 19: \"pause\",\n\t\t\t20: \"capslock\", 27: \"esc\", 32: \"space\", 33: \"pageup\", 34: \"pagedown\", 35: \"end\", 36: \"home\",\n\t\t\t37: \"left\", 38: \"up\", 39: \"right\", 40: \"down\", 45: \"insert\", 46: \"del\", \n\t\t\t96: \"0\", 97: \"1\", 98: \"2\", 99: \"3\", 100: \"4\", 101: \"5\", 102: \"6\", 103: \"7\",\n\t\t\t104: \"8\", 105: \"9\", 106: \"*\", 107: \"+\", 109: \"-\", 110: \".\", 111 : \"/\", \n\t\t\t112: \"f1\", 113: \"f2\", 114: \"f3\", 115: \"f4\", 116: \"f5\", 117: \"f6\", 118: \"f7\", 119: \"f8\", \n\t\t\t120: \"f9\", 121: \"f10\", 122: \"f11\", 123: \"f12\", 144: \"numlock\", 145: \"scroll\", 191: \"/\", 224: \"meta\"\n\t\t},\n\t\n\t\tshiftNums: {\n\t\t\t\"`\": \"~\", \"1\": \"!\", \"2\": \"@\", \"3\": \"#\", \"4\": \"$\", \"5\": \"%\", \"6\": \"^\", \"7\": \"&\", \n\t\t\t\"8\": \"*\", \"9\": \"(\", \"0\": \")\", \"-\": \"_\", \"=\": \"+\", \";\": \": \", \"'\": \"\\\"\", \",\": \"<\", \n\t\t\t\".\": \">\",  \"/\": \"?\",  \"\\\\\": \"|\"\n\t\t}\n\t};\n\n\tfunction keyHandler( handleObj ) {\n\t\t// Only care when a possible input has been specified\n\t\tif ( typeof handleObj.data !== \"string\" ) {\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tvar origHandler = handleObj.handler,\n\t\t\tkeys = handleObj.data.toLowerCase().split(\" \");\n\t\n\t\thandleObj.handler = function( event ) {\n\t\t\t// Don't fire in text-accepting inputs that we didn't directly bind to\n            /**\n             * Modified by Magento to ensure it doesn't fire on any content editable areas. This library is no\n             * longer maintained by its author however we require content editable to behave as expected.\n             */\n\t\t\tif ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||\n                event.target.type === \"text\" || event.target.type === \"number\" ||\n                jQuery(event.target).attr('contenteditable')) ) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t\t// Keypress represents characters, not special keys\n\t\t\tvar special = event.type !== \"keypress\" && jQuery.hotkeys.specialKeys[ event.which ],\n\t\t\t\tcharacter = String.fromCharCode( event.which ).toLowerCase(),\n\t\t\t\tkey, modif = \"\", possible = {};\n\n\t\t\t// check combinations (alt|ctrl|shift+anything)\n\t\t\tif ( event.altKey && special !== \"alt\" ) {\n\t\t\t\tmodif += \"alt+\";\n\t\t\t}\n\n\t\t\tif ( event.ctrlKey && special !== \"ctrl\" ) {\n\t\t\t\tmodif += \"ctrl+\";\n\t\t\t}\n\t\t\t\n\t\t\t// TODO: Need to make sure this works consistently across platforms\n\t\t\tif ( event.metaKey && !event.ctrlKey && special !== \"meta\" ) {\n\t\t\t\tmodif += \"meta+\";\n\t\t\t}\n\n\t\t\tif ( event.shiftKey && special !== \"shift\" ) {\n\t\t\t\tmodif += \"shift+\";\n\t\t\t}\n\n\t\t\tif ( special ) {\n\t\t\t\tpossible[ modif + special ] = true;\n\n\t\t\t} else {\n\t\t\t\tpossible[ modif + character ] = true;\n\t\t\t\tpossible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;\n\n\t\t\t\t// \"$\" can be triggered as \"Shift+4\" or \"Shift+$\" or just \"$\"\n\t\t\t\tif ( modif === \"shift+\" ) {\n\t\t\t\t\tpossible[ jQuery.hotkeys.shiftNums[ character ] ] = true;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfor ( var i = 0, l = keys.length; i < l; i++ ) {\n\t\t\t\tif ( possible[ keys[i] ] ) {\n\t\t\t\t\treturn origHandler.apply( this, arguments );\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}\n\n\tjQuery.each([ \"keydown\", \"keyup\", \"keypress\" ], function() {\n\t\tjQuery.event.special[ this ] = { add: keyHandler };\n\t});\n\n}));"}
}});
