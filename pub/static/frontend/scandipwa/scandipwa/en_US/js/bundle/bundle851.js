require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/plugins/noneditable/editor_plugin_src.js":"/**\n * editor_plugin_src.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function() {\n\tvar Event = tinymce.dom.Event;\n\n\ttinymce.create('tinymce.plugins.NonEditablePlugin', {\n\t\tinit : function(ed, url) {\n\t\t\tvar t = this, editClass, nonEditClass, state;\n\n\t\t\tt.editor = ed;\n\t\t\teditClass = ed.getParam(\"noneditable_editable_class\", \"mceEditable\");\n\t\t\tnonEditClass = ed.getParam(\"noneditable_noneditable_class\", \"mceNonEditable\");\n\n\t\t\ted.onNodeChange.addToTop(function(ed, cm, n) {\n\t\t\t\tvar sc, ec;\n\n\t\t\t\t// Block if start or end is inside a non editable element\n\t\t\t\tsc = ed.dom.getParent(ed.selection.getStart(), function(n) {\n\t\t\t\t\treturn ed.dom.hasClass(n, nonEditClass);\n\t\t\t\t});\n\n\t\t\t\tec = ed.dom.getParent(ed.selection.getEnd(), function(n) {\n\t\t\t\t\treturn ed.dom.hasClass(n, nonEditClass);\n\t\t\t\t});\n\n\t\t\t\t// Block or unblock\n\t\t\t\tif (sc || ec) {\n\t\t\t\t\tstate = 1;\n\t\t\t\t\tt._setDisabled(1);\n\t\t\t\t\treturn false;\n\t\t\t\t} else if (state == 1) {\n\t\t\t\t\tt._setDisabled(0);\n\t\t\t\t\tstate = 0;\n\t\t\t\t}\n\t\t\t});\n\t\t},\n\n\t\tgetInfo : function() {\n\t\t\treturn {\n\t\t\t\tlongname : 'Non editable elements',\n\t\t\t\tauthor : 'Moxiecode Systems AB',\n\t\t\t\tauthorurl : 'http://tinymce.moxiecode.com',\n\t\t\t\tinfourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/noneditable',\n\t\t\t\tversion : tinymce.majorVersion + \".\" + tinymce.minorVersion\n\t\t\t};\n\t\t},\n\n\t\t_block : function(ed, e) {\n\t\t\tvar k = e.keyCode;\n\n\t\t\t// Don't block arrow keys, pg up/down, and F1-F12\n\t\t\tif ((k > 32 && k < 41) || (k > 111 && k < 124))\n\t\t\t\treturn;\n\n\t\t\treturn Event.cancel(e);\n\t\t},\n\n\t\t_setDisabled : function(s) {\n\t\t\tvar t = this, ed = t.editor;\n\n\t\t\ttinymce.each(ed.controlManager.controls, function(c) {\n\t\t\t\tc.setDisabled(s);\n\t\t\t});\n\n\t\t\tif (s !== t.disabled) {\n\t\t\t\tif (s) {\n\t\t\t\t\ted.onKeyDown.addToTop(t._block);\n\t\t\t\t\ted.onKeyPress.addToTop(t._block);\n\t\t\t\t\ted.onKeyUp.addToTop(t._block);\n\t\t\t\t\ted.onPaste.addToTop(t._block);\n\t\t\t\t\ted.onContextMenu.addToTop(t._block);\n\t\t\t\t} else {\n\t\t\t\t\ted.onKeyDown.remove(t._block);\n\t\t\t\t\ted.onKeyPress.remove(t._block);\n\t\t\t\t\ted.onKeyUp.remove(t._block);\n\t\t\t\t\ted.onPaste.remove(t._block);\n\t\t\t\t\ted.onContextMenu.remove(t._block);\n\t\t\t\t}\n\n\t\t\t\tt.disabled = s;\n\t\t\t}\n\t\t}\n\t});\n\n\t// Register plugin\n\ttinymce.PluginManager.add('noneditable', tinymce.plugins.NonEditablePlugin);\n})();"}
}});