require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/plugins/example/editor_plugin_src.js":"/**\n * editor_plugin_src.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function() {\n\t// Load plugin specific language pack\n\ttinymce.PluginManager.requireLangPack('example');\n\n\ttinymce.create('tinymce.plugins.ExamplePlugin', {\n\t\t/**\n\t\t * Initializes the plugin, this will be executed after the plugin has been created.\n\t\t * This call is done before the editor instance has finished it's initialization so use the onInit event\n\t\t * of the editor instance to intercept that event.\n\t\t *\n\t\t * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.\n\t\t * @param {string} url Absolute URL to where the plugin is located.\n\t\t */\n\t\tinit : function(ed, url) {\n\t\t\t// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');\n\t\t\ted.addCommand('mceExample', function() {\n\t\t\t\ted.windowManager.open({\n\t\t\t\t\tfile : url + '/dialog.htm',\n\t\t\t\t\twidth : 320 + parseInt(ed.getLang('example.delta_width', 0)),\n\t\t\t\t\theight : 120 + parseInt(ed.getLang('example.delta_height', 0)),\n\t\t\t\t\tinline : 1\n\t\t\t\t}, {\n\t\t\t\t\tplugin_url : url, // Plugin absolute URL\n\t\t\t\t\tsome_custom_arg : 'custom arg' // Custom argument\n\t\t\t\t});\n\t\t\t});\n\n\t\t\t// Register example button\n\t\t\ted.addButton('example', {\n\t\t\t\ttitle : 'example.desc',\n\t\t\t\tcmd : 'mceExample',\n\t\t\t\timage : url + '/img/example.gif'\n\t\t\t});\n\n\t\t\t// Add a node change handler, selects the button in the UI when a image is selected\n\t\t\ted.onNodeChange.add(function(ed, cm, n) {\n\t\t\t\tcm.setActive('example', n.nodeName == 'IMG');\n\t\t\t});\n\t\t},\n\n\t\t/**\n\t\t * Creates control instances based in the incoming name. This method is normally not\n\t\t * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons\n\t\t * but you sometimes need to create more complex controls like listboxes, split buttons etc then this\n\t\t * method can be used to create those.\n\t\t *\n\t\t * @param {String} n Name of the control to create.\n\t\t * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.\n\t\t * @return {tinymce.ui.Control} New control instance or null if no control was created.\n\t\t */\n\t\tcreateControl : function(n, cm) {\n\t\t\treturn null;\n\t\t},\n\n\t\t/**\n\t\t * Returns information about the plugin as a name/value array.\n\t\t * The current keys are longname, author, authorurl, infourl and version.\n\t\t *\n\t\t * @return {Object} Name/value array containing information about the plugin.\n\t\t */\n\t\tgetInfo : function() {\n\t\t\treturn {\n\t\t\t\tlongname : 'Example plugin',\n\t\t\t\tauthor : 'Some author',\n\t\t\t\tauthorurl : 'http://tinymce.moxiecode.com',\n\t\t\t\tinfourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/example',\n\t\t\t\tversion : \"1.0\"\n\t\t\t};\n\t\t}\n\t});\n\n\t// Register plugin\n\ttinymce.PluginManager.add('example', tinymce.plugins.ExamplePlugin);\n})();"}
}});