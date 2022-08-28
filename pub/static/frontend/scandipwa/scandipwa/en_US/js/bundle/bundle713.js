require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/classes/LegacyInput.js":"/**\n * LegacyInput.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\ntinymce.onAddEditor.add(function(tinymce, ed) {\n\tvar filters, fontSizes, dom, settings = ed.settings;\n\n\tif (settings.inline_styles) {\n\t\tfontSizes = tinymce.explode(settings.font_size_legacy_values);\n\n\t\tfunction replaceWithSpan(node, styles) {\n\t\t\ttinymce.each(styles, function(value, name) {\n\t\t\t\tif (value)\n\t\t\t\t\tdom.setStyle(node, name, value);\n\t\t\t});\n\n\t\t\tdom.rename(node, 'span');\n\t\t};\n\n\t\tfilters = {\n\t\t\tfont : function(dom, node) {\n\t\t\t\treplaceWithSpan(node, {\n\t\t\t\t\tbackgroundColor : node.style.backgroundColor,\n\t\t\t\t\tcolor : node.color,\n\t\t\t\t\tfontFamily : node.face,\n\t\t\t\t\tfontSize : fontSizes[parseInt(node.size) - 1]\n\t\t\t\t});\n\t\t\t},\n\n\t\t\tu : function(dom, node) {\n\t\t\t\treplaceWithSpan(node, {\n\t\t\t\t\ttextDecoration : 'underline'\n\t\t\t\t});\n\t\t\t},\n\n\t\t\tstrike : function(dom, node) {\n\t\t\t\treplaceWithSpan(node, {\n\t\t\t\t\ttextDecoration : 'line-through'\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\n\t\tfunction convert(editor, params) {\n\t\t\tdom = editor.dom;\n\n\t\t\tif (settings.convert_fonts_to_spans) {\n\t\t\t\ttinymce.each(dom.select('font,u,strike', params.node), function(node) {\n\t\t\t\t\tfilters[node.nodeName.toLowerCase()](ed.dom, node);\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\n\t\ted.onPreProcess.add(convert);\n\t\ted.onSetContent.add(convert);\n\n\t\ted.onInit.add(function() {\n\t\t\ted.selection.onSetContent.add(convert);\n\t\t});\n\t}\n});\n"}
}});