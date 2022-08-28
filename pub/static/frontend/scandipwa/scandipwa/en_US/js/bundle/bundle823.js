require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/plugins/layer/editor_plugin_src.js":"/**\n * editor_plugin_src.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function() {\n\tfunction findParentLayer(node) {\n\t\tdo {\n\t\t\tif (node.className && node.className.indexOf('mceItemLayer') != -1) {\n\t\t\t\treturn node;\n\t\t\t}\n\t\t} while (node = node.parentNode);\n\t};\n\n\ttinymce.create('tinymce.plugins.Layer', {\n\t\tinit : function(ed, url) {\n\t\t\tvar t = this;\n\n\t\t\tt.editor = ed;\n\n\t\t\t// Register commands\n\t\t\ted.addCommand('mceInsertLayer', t._insertLayer, t);\n\n\t\t\ted.addCommand('mceMoveForward', function() {\n\t\t\t\tt._move(1);\n\t\t\t});\n\n\t\t\ted.addCommand('mceMoveBackward', function() {\n\t\t\t\tt._move(-1);\n\t\t\t});\n\n\t\t\ted.addCommand('mceMakeAbsolute', function() {\n\t\t\t\tt._toggleAbsolute();\n\t\t\t});\n\n\t\t\t// Register buttons\n\t\t\ted.addButton('moveforward', {title : 'layer.forward_desc', cmd : 'mceMoveForward'});\n\t\t\ted.addButton('movebackward', {title : 'layer.backward_desc', cmd : 'mceMoveBackward'});\n\t\t\ted.addButton('absolute', {title : 'layer.absolute_desc', cmd : 'mceMakeAbsolute'});\n\t\t\ted.addButton('insertlayer', {title : 'layer.insertlayer_desc', cmd : 'mceInsertLayer'});\n\n\t\t\ted.onInit.add(function() {\n\t\t\t\tvar dom = ed.dom;\n\n\t\t\t\tif (tinymce.isIE)\n\t\t\t\t\ted.getDoc().execCommand('2D-Position', false, true);\n\t\t\t});\n\n\t\t\t// Remove serialized styles when selecting a layer since it might be changed by a drag operation\n\t\t\ted.onMouseUp.add(function(ed, e) {\n\t\t\t\tvar layer = findParentLayer(e.target);\n\t\n\t\t\t\tif (layer) {\n\t\t\t\t\ted.dom.setAttrib(layer, 'data-mce-style', '');\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// Fixes edit focus issues with layers on Gecko\n\t\t\t// This will enable designMode while inside a layer and disable it when outside\n\t\t\ted.onMouseDown.add(function(ed, e) {\n\t\t\t\tvar node = e.target, doc = ed.getDoc(), parent;\n\n\t\t\t\tif (tinymce.isGecko) {\n\t\t\t\t\tif (findParentLayer(node)) {\n\t\t\t\t\t\tif (doc.designMode !== 'on') {\n\t\t\t\t\t\t\tdoc.designMode = 'on';\n\n\t\t\t\t\t\t\t// Repaint caret\n\t\t\t\t\t\t\tnode = doc.body;\n\t\t\t\t\t\t\tparent = node.parentNode;\n\t\t\t\t\t\t\tparent.removeChild(node);\n\t\t\t\t\t\t\tparent.appendChild(node);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if (doc.designMode == 'on') {\n\t\t\t\t\t\tdoc.designMode = 'off';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\n\t\t\ted.onNodeChange.add(t._nodeChange, t);\n\t\t\ted.onVisualAid.add(t._visualAid, t);\n\t\t},\n\n\t\tgetInfo : function() {\n\t\t\treturn {\n\t\t\t\tlongname : 'Layer',\n\t\t\t\tauthor : 'Moxiecode Systems AB',\n\t\t\t\tauthorurl : 'http://tinymce.moxiecode.com',\n\t\t\t\tinfourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/layer',\n\t\t\t\tversion : tinymce.majorVersion + \".\" + tinymce.minorVersion\n\t\t\t};\n\t\t},\n\n\t\t// Private methods\n\n\t\t_nodeChange : function(ed, cm, n) {\n\t\t\tvar le, p;\n\n\t\t\tle = this._getParentLayer(n);\n\t\t\tp = ed.dom.getParent(n, 'DIV,P,IMG');\n\n\t\t\tif (!p) {\n\t\t\t\tcm.setDisabled('absolute', 1);\n\t\t\t\tcm.setDisabled('moveforward', 1);\n\t\t\t\tcm.setDisabled('movebackward', 1);\n\t\t\t} else {\n\t\t\t\tcm.setDisabled('absolute', 0);\n\t\t\t\tcm.setDisabled('moveforward', !le);\n\t\t\t\tcm.setDisabled('movebackward', !le);\n\t\t\t\tcm.setActive('absolute', le && le.style.position.toLowerCase() == \"absolute\");\n\t\t\t}\n\t\t},\n\n\t\t// Private methods\n\n\t\t_visualAid : function(ed, e, s) {\n\t\t\tvar dom = ed.dom;\n\n\t\t\ttinymce.each(dom.select('div,p', e), function(e) {\n\t\t\t\tif (/^(absolute|relative|fixed)$/i.test(e.style.position)) {\n\t\t\t\t\tif (s)\n\t\t\t\t\t\tdom.addClass(e, 'mceItemVisualAid');\n\t\t\t\t\telse\n\t\t\t\t\t\tdom.removeClass(e, 'mceItemVisualAid');\n\n\t\t\t\t\tdom.addClass(e, 'mceItemLayer');\n\t\t\t\t}\n\t\t\t});\n\t\t},\n\n\t\t_move : function(d) {\n\t\t\tvar ed = this.editor, i, z = [], le = this._getParentLayer(ed.selection.getNode()), ci = -1, fi = -1, nl;\n\n\t\t\tnl = [];\n\t\t\ttinymce.walk(ed.getBody(), function(n) {\n\t\t\t\tif (n.nodeType == 1 && /^(absolute|relative|static)$/i.test(n.style.position))\n\t\t\t\t\tnl.push(n); \n\t\t\t}, 'childNodes');\n\n\t\t\t// Find z-indexes\n\t\t\tfor (i=0; i<nl.length; i++) {\n\t\t\t\tz[i] = nl[i].style.zIndex ? parseInt(nl[i].style.zIndex) : 0;\n\n\t\t\t\tif (ci < 0 && nl[i] == le)\n\t\t\t\t\tci = i;\n\t\t\t}\n\n\t\t\tif (d < 0) {\n\t\t\t\t// Move back\n\n\t\t\t\t// Try find a lower one\n\t\t\t\tfor (i=0; i<z.length; i++) {\n\t\t\t\t\tif (z[i] < z[ci]) {\n\t\t\t\t\t\tfi = i;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (fi > -1) {\n\t\t\t\t\tnl[ci].style.zIndex = z[fi];\n\t\t\t\t\tnl[fi].style.zIndex = z[ci];\n\t\t\t\t} else {\n\t\t\t\t\tif (z[ci] > 0)\n\t\t\t\t\t\tnl[ci].style.zIndex = z[ci] - 1;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t// Move forward\n\n\t\t\t\t// Try find a higher one\n\t\t\t\tfor (i=0; i<z.length; i++) {\n\t\t\t\t\tif (z[i] > z[ci]) {\n\t\t\t\t\t\tfi = i;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (fi > -1) {\n\t\t\t\t\tnl[ci].style.zIndex = z[fi];\n\t\t\t\t\tnl[fi].style.zIndex = z[ci];\n\t\t\t\t} else\n\t\t\t\t\tnl[ci].style.zIndex = z[ci] + 1;\n\t\t\t}\n\n\t\t\ted.execCommand('mceRepaint');\n\t\t},\n\n\t\t_getParentLayer : function(n) {\n\t\t\treturn this.editor.dom.getParent(n, function(n) {\n\t\t\t\treturn n.nodeType == 1 && /^(absolute|relative|static)$/i.test(n.style.position);\n\t\t\t});\n\t\t},\n\n\t\t_insertLayer : function() {\n\t\t\tvar ed = this.editor, dom = ed.dom, p = dom.getPos(dom.getParent(ed.selection.getNode(), '*')), body = ed.getBody();\n\n\t\t\ted.dom.add(body, 'div', {\n\t\t\t\tstyle : {\n\t\t\t\t\tposition : 'absolute',\n\t\t\t\t\tleft : p.x,\n\t\t\t\t\ttop : (p.y > 20 ? p.y : 20),\n\t\t\t\t\twidth : 100,\n\t\t\t\t\theight : 100\n\t\t\t\t},\n\t\t\t\t'class' : 'mceItemVisualAid mceItemLayer'\n\t\t\t}, ed.selection.getContent() || ed.getLang('layer.content'));\n\n\t\t\t// Workaround for IE where it messes up the JS engine if you insert a layer on IE 6,7\n\t\t\tif (tinymce.isIE)\n\t\t\t\tdom.setHTML(body, body.innerHTML);\n\t\t},\n\n\t\t_toggleAbsolute : function() {\n\t\t\tvar ed = this.editor, le = this._getParentLayer(ed.selection.getNode());\n\n\t\t\tif (!le)\n\t\t\t\tle = ed.dom.getParent(ed.selection.getNode(), 'DIV,P,IMG');\n\n\t\t\tif (le) {\n\t\t\t\tif (le.style.position.toLowerCase() == \"absolute\") {\n\t\t\t\t\ted.dom.setStyles(le, {\n\t\t\t\t\t\tposition : '',\n\t\t\t\t\t\tleft : '',\n\t\t\t\t\t\ttop : '',\n\t\t\t\t\t\twidth : '',\n\t\t\t\t\t\theight : ''\n\t\t\t\t\t});\n\n\t\t\t\t\ted.dom.removeClass(le, 'mceItemVisualAid');\n\t\t\t\t\ted.dom.removeClass(le, 'mceItemLayer');\n\t\t\t\t} else {\n\t\t\t\t\tif (le.style.left == \"\")\n\t\t\t\t\t\tle.style.left = 20 + 'px';\n\n\t\t\t\t\tif (le.style.top == \"\")\n\t\t\t\t\t\tle.style.top = 20 + 'px';\n\n\t\t\t\t\tif (le.style.width == \"\")\n\t\t\t\t\t\tle.style.width = le.width ? (le.width + 'px') : '100px';\n\n\t\t\t\t\tif (le.style.height == \"\")\n\t\t\t\t\t\tle.style.height = le.height ? (le.height + 'px') : '100px';\n\n\t\t\t\t\tle.style.position = \"absolute\";\n\n\t\t\t\t\ted.dom.setAttrib(le, 'data-mce-style', '');\n\t\t\t\t\ted.addVisual(ed.getBody());\n\t\t\t\t}\n\n\t\t\t\ted.execCommand('mceRepaint');\n\t\t\t\ted.nodeChanged();\n\t\t\t}\n\t\t}\n\t});\n\n\t// Register plugin\n\ttinymce.PluginManager.add('layer', tinymce.plugins.Layer);\n})();"}
}});