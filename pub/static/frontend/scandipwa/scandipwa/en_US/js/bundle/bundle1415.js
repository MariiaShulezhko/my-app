require.config({"config": {
        "text":{"Magento_Tinymce3/tiny_mce/plugins/preview/example.html":"<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<script language=\"javascript\" src=\"../../tiny_mce_popup.js\"></script>\n<script type=\"text/javascript\" src=\"jscripts/embed.js\"></script>\n<script type=\"text/javascript\">\ntinyMCEPopup.onInit.add(function(ed) {\n\tvar dom = tinyMCEPopup.dom;\n\n\t// Load editor content_css\n\ttinymce.each(ed.settings.content_css.split(','), function(u) {\n\t\tdom.loadCSS(ed.documentBaseURI.toAbsolute(u));\n\t});\n\n\t// Place contents inside div container\n\tdom.setHTML('content', ed.getContent());\n});\n</script>\n<title>Example of a custom preview page</title>\n</head>\n<body>\n\nEditor contents: <br />\n<div id=\"content\">\n<!-- Gets filled with editor contents -->\n</div>\n\n</body>\n</html>\n"}
}});