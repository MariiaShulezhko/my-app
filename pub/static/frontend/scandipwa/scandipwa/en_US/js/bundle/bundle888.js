require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/themes/advanced/js/anchor.js":"tinyMCEPopup.requireLangPack();\n\nvar AnchorDialog = {\n\tinit : function(ed) {\n\t\tvar action, elm, f = document.forms[0];\n\n\t\tthis.editor = ed;\n\t\telm = ed.dom.getParent(ed.selection.getNode(), 'A');\n\t\tv = ed.dom.getAttrib(elm, 'name');\n\n\t\tif (v) {\n\t\t\tthis.action = 'update';\n\t\t\tf.anchorName.value = v;\n\t\t}\n\n\t\tf.insert.value = ed.getLang(elm ? 'update' : 'insert');\n\t},\n\n\tupdate : function() {\n\t\tvar ed = this.editor, elm, name = document.forms[0].anchorName.value;\n\n\t\tif (!name || !/^[a-z][a-z0-9\\-\\_:\\.]*$/i.test(name)) {\n\t\t\ttinyMCEPopup.alert('advanced_dlg.anchor_invalid');\n\t\t\treturn;\n\t\t}\n\n\t\ttinyMCEPopup.restoreSelection();\n\n\t\tif (this.action != 'update')\n\t\t\ted.selection.collapse(1);\n\n\t\telm = ed.dom.getParent(ed.selection.getNode(), 'A');\n\t\tif (elm) {\n\t\t\telm.setAttribute('name', name);\n\t\t\telm.name = name;\n\t\t} else\n\t\t\ted.execCommand('mceInsertContent', 0, ed.dom.createHTML('a', {name : name, 'class' : 'mceItemAnchor'}, ''));\n\n\t\ttinyMCEPopup.close();\n\t}\n};\n\ntinyMCEPopup.onInit.add(AnchorDialog.init, AnchorDialog);\n"}
}});
