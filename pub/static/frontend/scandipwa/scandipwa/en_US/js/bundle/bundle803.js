require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/plugins/xhtmlxtras/js/element_common.js":"/**\n * element_common.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\ntinyMCEPopup.requireLangPack();\n\nfunction initCommonAttributes(elm) {\n\tvar formObj = document.forms[0], dom = tinyMCEPopup.editor.dom;\n\n\t// Setup form data for common element attributes\n\tsetFormValue('title', dom.getAttrib(elm, 'title'));\n\tsetFormValue('id', dom.getAttrib(elm, 'id'));\n\tselectByValue(formObj, 'class', dom.getAttrib(elm, 'class'), true);\n\tsetFormValue('style', dom.getAttrib(elm, 'style'));\n\tselectByValue(formObj, 'dir', dom.getAttrib(elm, 'dir'));\n\tsetFormValue('lang', dom.getAttrib(elm, 'lang'));\n\tsetFormValue('onfocus', dom.getAttrib(elm, 'onfocus'));\n\tsetFormValue('onblur', dom.getAttrib(elm, 'onblur'));\n\tsetFormValue('onclick', dom.getAttrib(elm, 'onclick'));\n\tsetFormValue('ondblclick', dom.getAttrib(elm, 'ondblclick'));\n\tsetFormValue('onmousedown', dom.getAttrib(elm, 'onmousedown'));\n\tsetFormValue('onmouseup', dom.getAttrib(elm, 'onmouseup'));\n\tsetFormValue('onmouseover', dom.getAttrib(elm, 'onmouseover'));\n\tsetFormValue('onmousemove', dom.getAttrib(elm, 'onmousemove'));\n\tsetFormValue('onmouseout', dom.getAttrib(elm, 'onmouseout'));\n\tsetFormValue('onkeypress', dom.getAttrib(elm, 'onkeypress'));\n\tsetFormValue('onkeydown', dom.getAttrib(elm, 'onkeydown'));\n\tsetFormValue('onkeyup', dom.getAttrib(elm, 'onkeyup'));\n}\n\nfunction setFormValue(name, value) {\n\tif(document.forms[0].elements[name]) document.forms[0].elements[name].value = value;\n}\n\nfunction insertDateTime(id) {\n\tdocument.getElementById(id).value = getDateTime(new Date(), \"%Y-%m-%dT%H:%M:%S\");\n}\n\nfunction getDateTime(d, fmt) {\n\tfmt = fmt.replace(\"%D\", \"%m/%d/%y\");\n\tfmt = fmt.replace(\"%r\", \"%I:%M:%S %p\");\n\tfmt = fmt.replace(\"%Y\", \"\" + d.getFullYear());\n\tfmt = fmt.replace(\"%y\", \"\" + d.getYear());\n\tfmt = fmt.replace(\"%m\", addZeros(d.getMonth()+1, 2));\n\tfmt = fmt.replace(\"%d\", addZeros(d.getDate(), 2));\n\tfmt = fmt.replace(\"%H\", \"\" + addZeros(d.getHours(), 2));\n\tfmt = fmt.replace(\"%M\", \"\" + addZeros(d.getMinutes(), 2));\n\tfmt = fmt.replace(\"%S\", \"\" + addZeros(d.getSeconds(), 2));\n\tfmt = fmt.replace(\"%I\", \"\" + ((d.getHours() + 11) % 12 + 1));\n\tfmt = fmt.replace(\"%p\", \"\" + (d.getHours() < 12 ? \"AM\" : \"PM\"));\n\tfmt = fmt.replace(\"%%\", \"%\");\n\n\treturn fmt;\n}\n\nfunction addZeros(value, len) {\n\tvar i;\n\n\tvalue = \"\" + value;\n\n\tif (value.length < len) {\n\t\tfor (i=0; i<(len-value.length); i++)\n\t\t\tvalue = \"0\" + value;\n\t}\n\n\treturn value;\n}\n\nfunction selectByValue(form_obj, field_name, value, add_custom, ignore_case) {\n\tif (!form_obj || !form_obj.elements[field_name])\n\t\treturn;\n\n\tvar sel = form_obj.elements[field_name];\n\n\tvar found = false;\n\tfor (var i=0; i<sel.options.length; i++) {\n\t\tvar option = sel.options[i];\n\n\t\tif (option.value == value || (ignore_case && option.value.toLowerCase() == value.toLowerCase())) {\n\t\t\toption.selected = true;\n\t\t\tfound = true;\n\t\t} else\n\t\t\toption.selected = false;\n\t}\n\n\tif (!found && add_custom && value != '') {\n\t\tvar option = new Option('Value: ' + value, value);\n\t\toption.selected = true;\n\t\tsel.options[sel.options.length] = option;\n\t}\n\n\treturn found;\n}\n\nfunction setAttrib(elm, attrib, value) {\n\tvar formObj = document.forms[0];\n\tvar valueElm = formObj.elements[attrib.toLowerCase()];\n\ttinyMCEPopup.editor.dom.setAttrib(elm, attrib, value || valueElm.value);\n}\n\nfunction setAllCommonAttribs(elm) {\n\tsetAttrib(elm, 'title');\n\tsetAttrib(elm, 'id');\n\tsetAttrib(elm, 'class');\n\tsetAttrib(elm, 'style');\n\tsetAttrib(elm, 'dir');\n\tsetAttrib(elm, 'lang');\n\t/*setAttrib(elm, 'onfocus');\n\tsetAttrib(elm, 'onblur');\n\tsetAttrib(elm, 'onclick');\n\tsetAttrib(elm, 'ondblclick');\n\tsetAttrib(elm, 'onmousedown');\n\tsetAttrib(elm, 'onmouseup');\n\tsetAttrib(elm, 'onmouseover');\n\tsetAttrib(elm, 'onmousemove');\n\tsetAttrib(elm, 'onmouseout');\n\tsetAttrib(elm, 'onkeypress');\n\tsetAttrib(elm, 'onkeydown');\n\tsetAttrib(elm, 'onkeyup');*/\n}\n\nSXE = {\n\tcurrentAction : \"insert\",\n\tinst : tinyMCEPopup.editor,\n\tupdateElement : null\n}\n\nSXE.focusElement = SXE.inst.selection.getNode();\n\nSXE.initElementDialog = function(element_name) {\n\taddClassesToList('class', 'xhtmlxtras_styles');\n\tTinyMCE_EditableSelects.init();\n\n\telement_name = element_name.toLowerCase();\n\tvar elm = SXE.inst.dom.getParent(SXE.focusElement, element_name.toUpperCase());\n\tif (elm != null && elm.nodeName.toUpperCase() == element_name.toUpperCase()) {\n\t\tSXE.currentAction = \"update\";\n\t}\n\n\tif (SXE.currentAction == \"update\") {\n\t\tinitCommonAttributes(elm);\n\t\tSXE.updateElement = elm;\n\t}\n\n\tdocument.forms[0].insert.value = tinyMCEPopup.getLang(SXE.currentAction, 'Insert', true); \n}\n\nSXE.insertElement = function(element_name) {\n\tvar elm = SXE.inst.dom.getParent(SXE.focusElement, element_name.toUpperCase()), h, tagName;\n\n\tif (elm == null) {\n\t\tvar s = SXE.inst.selection.getContent();\n\t\tif(s.length > 0) {\n\t\t\ttagName = element_name;\n\n\t\t\tinsertInlineElement(element_name);\n\t\t\tvar elementArray = tinymce.grep(SXE.inst.dom.select(element_name));\n\t\t\tfor (var i=0; i<elementArray.length; i++) {\n\t\t\t\tvar elm = elementArray[i];\n\n\t\t\t\tif (SXE.inst.dom.getAttrib(elm, 'data-mce-new')) {\n\t\t\t\t\telm.id = '';\n\t\t\t\t\telm.setAttribute('id', '');\n\t\t\t\t\telm.removeAttribute('id');\n\t\t\t\t\telm.removeAttribute('data-mce-new');\n\n\t\t\t\t\tsetAllCommonAttribs(elm);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t} else {\n\t\tsetAllCommonAttribs(elm);\n\t}\n\tSXE.inst.nodeChanged();\n\ttinyMCEPopup.execCommand('mceEndUndoLevel');\n}\n\nSXE.removeElement = function(element_name){\n\telement_name = element_name.toLowerCase();\n\telm = SXE.inst.dom.getParent(SXE.focusElement, element_name.toUpperCase());\n\tif(elm && elm.nodeName.toUpperCase() == element_name.toUpperCase()){\n\t\ttinyMCE.execCommand('mceRemoveNode', false, elm);\n\t\tSXE.inst.nodeChanged();\n\t\ttinyMCEPopup.execCommand('mceEndUndoLevel');\n\t}\n}\n\nSXE.showRemoveButton = function() {\n\t\tdocument.getElementById(\"remove\").style.display = '';\n}\n\nSXE.containsClass = function(elm,cl) {\n\treturn (elm.className.indexOf(cl) > -1) ? true : false;\n}\n\nSXE.removeClass = function(elm,cl) {\n\tif(elm.className == null || elm.className == \"\" || !SXE.containsClass(elm,cl)) {\n\t\treturn true;\n\t}\n\tvar classNames = elm.className.split(\" \");\n\tvar newClassNames = \"\";\n\tfor (var x = 0, cnl = classNames.length; x < cnl; x++) {\n\t\tif (classNames[x] != cl) {\n\t\t\tnewClassNames += (classNames[x] + \" \");\n\t\t}\n\t}\n\telm.className = newClassNames.substring(0,newClassNames.length-1); //removes extra space at the end\n}\n\nSXE.addClass = function(elm,cl) {\n\tif(!SXE.containsClass(elm,cl)) elm.className ? elm.className += \" \" + cl : elm.className = cl;\n\treturn true;\n}\n\nfunction insertInlineElement(en) {\n\tvar ed = tinyMCEPopup.editor, dom = ed.dom;\n\n\ted.getDoc().execCommand('FontName', false, 'mceinline');\n\ttinymce.each(dom.select('span,font'), function(n) {\n\t\tif (n.style.fontFamily == 'mceinline' || n.face == 'mceinline')\n\t\t\tdom.replace(dom.create(en, {'data-mce-new' : 1}), n, 1);\n\t});\n}\n"}
}});
