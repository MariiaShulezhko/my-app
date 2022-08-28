require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/plugins/advlink/editor_plugin_src.js":"/**\n * editor_plugin_src.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function() {\n\ttinymce.create('tinymce.plugins.AdvancedLinkPlugin', {\n\t\tinit : function(ed, url) {\n\t\t\tthis.editor = ed;\n\n\t\t\t// Register commands\n\t\t\ted.addCommand('mceAdvLink', function() {\n\t\t\t\tvar se = ed.selection;\n\n\t\t\t\t// No selection and not in link\n\t\t\t\tif (se.isCollapsed() && !ed.dom.getParent(se.getNode(), 'A'))\n\t\t\t\t\treturn;\n\n\t\t\t\ted.windowManager.open({\n\t\t\t\t\tfile : url + '/link.htm',\n\t\t\t\t\twidth : 480 + parseInt(ed.getLang('advlink.delta_width', 0)),\n\t\t\t\t\theight : 400 + parseInt(ed.getLang('advlink.delta_height', 0)),\n\t\t\t\t\tinline : 1\n\t\t\t\t}, {\n\t\t\t\t\tplugin_url : url\n\t\t\t\t});\n\t\t\t});\n\n\t\t\t// Register buttons\n\t\t\ted.addButton('link', {\n\t\t\t\ttitle : 'advlink.link_desc',\n\t\t\t\tcmd : 'mceAdvLink'\n\t\t\t});\n\n\t\t\ted.addShortcut('ctrl+k', 'advlink.advlink_desc', 'mceAdvLink');\n\n\t\t\ted.onNodeChange.add(function(ed, cm, n, co) {\n\t\t\t\tcm.setDisabled('link', co && n.nodeName != 'A');\n\t\t\t\tcm.setActive('link', n.nodeName == 'A' && !n.name);\n\t\t\t});\n\t\t},\n\n\t\tgetInfo : function() {\n\t\t\treturn {\n\t\t\t\tlongname : 'Advanced link',\n\t\t\t\tauthor : 'Moxiecode Systems AB',\n\t\t\t\tauthorurl : 'http://tinymce.moxiecode.com',\n\t\t\t\tinfourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/advlink',\n\t\t\t\tversion : tinymce.majorVersion + \".\" + tinymce.minorVersion\n\t\t\t};\n\t\t}\n\t});\n\n\t// Register plugin\n\ttinymce.PluginManager.add('advlink', tinymce.plugins.AdvancedLinkPlugin);\n})();"}
}});
