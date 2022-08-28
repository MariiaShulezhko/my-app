require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/classes/dom/Serializer.js":"/**\n * Serializer.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function(tinymce) {\n\t/**\n\t * This class is used to serialize DOM trees into a string. Consult the TinyMCE Wiki API for more details and examples on how to use this class. \n\t *\n\t * @class tinymce.dom.Serializer\n\t */\n\n\t/**\n\t * Constucts a new DOM serializer class.\n\t *\n\t * @constructor\n\t * @method Serializer\n\t * @param {Object} settings Serializer settings object.\n\t * @param {tinymce.dom.DOMUtils} dom DOMUtils instance reference.\n\t * @param {tinymce.html.Schema} schema Optional schema reference.\n\t */\n\ttinymce.dom.Serializer = function(settings, dom, schema) {\n\t\tvar onPreProcess, onPostProcess, isIE = tinymce.isIE, each = tinymce.each, htmlParser;\n\n\t\t// Support the old apply_source_formatting option\n\t\tif (!settings.apply_source_formatting)\n\t\t\tsettings.indent = false;\n\n\t\tsettings.remove_trailing_brs = true;\n\n\t\t// Default DOM and Schema if they are undefined\n\t\tdom = dom || tinymce.DOM;\n\t\tschema = schema || new tinymce.html.Schema(settings);\n\t\tsettings.entity_encoding = settings.entity_encoding || 'named';\n\n\t\t/**\n\t\t * This event gets executed before a HTML fragment gets serialized into a HTML string. This event enables you to do modifications to the DOM before the serialization occurs. It's important to know that the element that is getting serialized is cloned so it's not inside a document.\n\t\t *\n\t\t * @event onPreProcess\n\t\t * @param {tinymce.dom.Serializer} sender object/Serializer instance that is serializing an element.\n\t\t * @param {Object} args Object containing things like the current node.\n\t\t * @example\n\t\t * // Adds an observer to the onPreProcess event\n\t\t * serializer.onPreProcess.add(function(se, o) {\n\t\t *     // Add a class to each paragraph\n\t\t *     se.dom.addClass(se.dom.select('p', o.node), 'myclass');\n\t\t * });\n\t\t */\n\t\tonPreProcess = new tinymce.util.Dispatcher(self);\n\n\t\t/**\n\t\t * This event gets executed after a HTML fragment has been serialized into a HTML string. This event enables you to do modifications to the HTML string like regexp replaces etc. \n\t\t *\n\t\t * @event onPreProcess\n\t\t * @param {tinymce.dom.Serializer} sender object/Serializer instance that is serializing an element.\n\t\t * @param {Object} args Object containing things like the current contents. \n\t\t * @example\n\t\t * // Adds an observer to the onPostProcess event\n\t\t * serializer.onPostProcess.add(function(se, o) {\n\t\t *    // Remove all paragraphs and replace with BR\n\t\t *    o.content = o.content.replace(/<p[^>]+>|<p>/g, '');\n\t\t *    o.content = o.content.replace(/<\\/p>/g, '<br />');\n\t\t * });\n\t\t */\n\t\tonPostProcess = new tinymce.util.Dispatcher(self);\n\n\t\thtmlParser = new tinymce.html.DomParser(settings, schema);\n\n\t\t// Convert move data-mce-src, data-mce-href and data-mce-style into nodes or process them if needed\n\t\thtmlParser.addAttributeFilter('src,href,style', function(nodes, name) {\n\t\t\tvar i = nodes.length, node, value, internalName = 'data-mce-' + name, urlConverter = settings.url_converter, urlConverterScope = settings.url_converter_scope, undef;\n\n\t\t\twhile (i--) {\n\t\t\t\tnode = nodes[i];\n\n\t\t\t\tvalue = node.attributes.map[internalName];\n\t\t\t\tif (value !== undef) {\n\t\t\t\t\t// Set external name to internal value and remove internal\n\t\t\t\t\tnode.attr(name, value.length > 0 ? value : null);\n\t\t\t\t\tnode.attr(internalName, null);\n\t\t\t\t} else {\n\t\t\t\t\t// No internal attribute found then convert the value we have in the DOM\n\t\t\t\t\tvalue = node.attributes.map[name];\n\n\t\t\t\t\tif (name === \"style\")\n\t\t\t\t\t\tvalue = dom.serializeStyle(dom.parseStyle(value), node.name);\n\t\t\t\t\telse if (urlConverter)\n\t\t\t\t\t\tvalue = urlConverter.call(urlConverterScope, value, name, node.name);\n\n\t\t\t\t\tnode.attr(name, value.length > 0 ? value : null);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t// Remove internal classes mceItem<..>\n\t\thtmlParser.addAttributeFilter('class', function(nodes, name) {\n\t\t\tvar i = nodes.length, node, value;\n\n\t\t\twhile (i--) {\n\t\t\t\tnode = nodes[i];\n\t\t\t\tvalue = node.attr('class').replace(/\\s*mce(Item\\w+|Selected)\\s*/g, '');\n\t\t\t\tnode.attr('class', value.length > 0 ? value : null);\n\t\t\t}\n\t\t});\n\n\t\t// Remove bookmark elements\n\t\thtmlParser.addAttributeFilter('data-mce-type', function(nodes, name, args) {\n\t\t\tvar i = nodes.length, node;\n\n\t\t\twhile (i--) {\n\t\t\t\tnode = nodes[i];\n\n\t\t\t\tif (node.attributes.map['data-mce-type'] === 'bookmark' && !args.cleanup)\n\t\t\t\t\tnode.remove();\n\t\t\t}\n\t\t});\n\n\t\t// Force script into CDATA sections and remove the mce- prefix also add comments around styles\n\t\thtmlParser.addNodeFilter('script,style', function(nodes, name) {\n\t\t\tvar i = nodes.length, node, value;\n\n\t\t\tfunction trim(value) {\n\t\t\t\treturn value.replace(/(<!--\\[CDATA\\[|\\]\\]-->)/g, '\\n')\n\t\t\t\t\t\t.replace(/^[\\r\\n]*|[\\r\\n]*$/g, '')\n\t\t\t\t\t\t.replace(/^\\s*(\\/\\/\\s*<!--|\\/\\/\\s*<!\\[CDATA\\[|<!--|<!\\[CDATA\\[)[\\r\\n]*/g, '')\n\t\t\t\t\t\t.replace(/\\s*(\\/\\/\\s*\\]\\]>|\\/\\/\\s*-->|\\]\\]>|-->|\\]\\]-->)\\s*$/g, '');\n\t\t\t};\n\n\t\t\twhile (i--) {\n\t\t\t\tnode = nodes[i];\n\t\t\t\tvalue = node.firstChild ? node.firstChild.value : '';\n\n\t\t\t\tif (name === \"script\") {\n\t\t\t\t\t// Remove mce- prefix from script elements\n\t\t\t\t\tnode.attr('type', (node.attr('type') || 'text/javascript').replace(/^mce\\-/, ''));\n\n\t\t\t\t\tif (value.length > 0)\n\t\t\t\t\t\tnode.firstChild.value = '// <![CDATA[\\n' + trim(value) + '\\n// ]]>';\n\t\t\t\t} else {\n\t\t\t\t\tif (value.length > 0)\n\t\t\t\t\t\tnode.firstChild.value = '<!--\\n' + trim(value) + '\\n-->';\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t// Convert comments to cdata and handle protected comments\n\t\thtmlParser.addNodeFilter('#comment', function(nodes, name) {\n\t\t\tvar i = nodes.length, node;\n\n\t\t\twhile (i--) {\n\t\t\t\tnode = nodes[i];\n\n\t\t\t\tif (node.value.indexOf('[CDATA[') === 0) {\n\t\t\t\t\tnode.name = '#cdata';\n\t\t\t\t\tnode.type = 4;\n\t\t\t\t\tnode.value = node.value.replace(/^\\[CDATA\\[|\\]\\]$/g, '');\n\t\t\t\t} else if (node.value.indexOf('mce:protected ') === 0) {\n\t\t\t\t\tnode.name = \"#text\";\n\t\t\t\t\tnode.type = 3;\n\t\t\t\t\tnode.raw = true;\n\t\t\t\t\tnode.value = unescape(node.value).substr(14);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\thtmlParser.addNodeFilter('xml:namespace,input', function(nodes, name) {\n\t\t\tvar i = nodes.length, node;\n\n\t\t\twhile (i--) {\n\t\t\t\tnode = nodes[i];\n\t\t\t\tif (node.type === 7)\n\t\t\t\t\tnode.remove();\n\t\t\t\telse if (node.type === 1) {\n\t\t\t\t\tif (name === \"input\" && !(\"type\" in node.attributes.map))\n\t\t\t\t\t\tnode.attr('type', 'text');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t// Fix list elements, TODO: Replace this later\n\t\tif (settings.fix_list_elements) {\n\t\t\thtmlParser.addNodeFilter('ul,ol', function(nodes, name) {\n\t\t\t\tvar i = nodes.length, node, parentNode;\n\n\t\t\t\twhile (i--) {\n\t\t\t\t\tnode = nodes[i];\n\t\t\t\t\tparentNode = node.parent;\n\n\t\t\t\t\tif (parentNode.name === 'ul' || parentNode.name === 'ol') {\n\t\t\t\t\t\tif (node.prev && node.prev.name === 'li') {\n\t\t\t\t\t\t\tnode.prev.append(node);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t// Remove internal data attributes\n\t\thtmlParser.addAttributeFilter('data-mce-src,data-mce-href,data-mce-style', function(nodes, name) {\n\t\t\tvar i = nodes.length;\n\n\t\t\twhile (i--) {\n\t\t\t\tnodes[i].attr(name, null);\n\t\t\t}\n\t\t});\n\n\t\t// Return public methods\n\t\treturn {\n\t\t\t/**\n\t\t\t * Schema instance that was used to when the Serializer was constructed.\n\t\t\t *\n\t\t\t * @field {tinymce.html.Schema} schema\n\t\t\t */\n\t\t\tschema : schema,\n\n\t\t\t/**\n\t\t\t * Adds a node filter function to the parser used by the serializer, the parser will collect the specified nodes by name\n\t\t\t * and then execute the callback ones it has finished parsing the document.\n\t\t\t *\n\t\t\t * @example\n\t\t\t * parser.addNodeFilter('p,h1', function(nodes, name) {\n\t\t\t *\t\tfor (var i = 0; i < nodes.length; i++) {\n\t\t\t *\t\t\tconsole.log(nodes[i].name);\n\t\t\t *\t\t}\n\t\t\t * });\n\t\t\t * @method addNodeFilter\n\t\t\t * @method {String} name Comma separated list of nodes to collect.\n\t\t\t * @param {function} callback Callback function to execute once it has collected nodes.\n\t\t\t */\n\t\t\taddNodeFilter : htmlParser.addNodeFilter,\n\n\t\t\t/**\n\t\t\t * Adds a attribute filter function to the parser used by the serializer, the parser will collect nodes that has the specified attributes\n\t\t\t * and then execute the callback ones it has finished parsing the document.\n\t\t\t *\n\t\t\t * @example\n\t\t\t * parser.addAttributeFilter('src,href', function(nodes, name) {\n\t\t\t *\t\tfor (var i = 0; i < nodes.length; i++) {\n\t\t\t *\t\t\tconsole.log(nodes[i].name);\n\t\t\t *\t\t}\n\t\t\t * });\n\t\t\t * @method addAttributeFilter\n\t\t\t * @method {String} name Comma separated list of nodes to collect.\n\t\t\t * @param {function} callback Callback function to execute once it has collected nodes.\n\t\t\t */\n\t\t\taddAttributeFilter : htmlParser.addAttributeFilter,\n\n\t\t\t/**\n\t\t\t * Fires when the Serializer does a preProcess on the contents.\n\t\t\t *\n\t\t\t * @event onPreProcess\n\t\t\t * @param {tinymce.Editor} sender Editor instance.\n\t\t\t * @param {Object} obj PreProcess object.\n\t\t\t * @option {Node} node DOM node for the item being serialized.\n\t\t\t * @option {String} format The specified output format normally \"html\".\n\t\t\t * @option {Boolean} get Is true if the process is on a getContent operation.\n\t\t\t * @option {Boolean} set Is true if the process is on a setContent operation.\n\t\t\t * @option {Boolean} cleanup Is true if the process is on a cleanup operation.\n\t\t\t */\n\t\t\tonPreProcess : onPreProcess,\n\n\t\t\t/**\n\t\t\t * Fires when the Serializer does a postProcess on the contents.\n\t\t\t *\n\t\t\t * @event onPostProcess\n\t\t\t * @param {tinymce.Editor} sender Editor instance.\n\t\t\t * @param {Object} obj PreProcess object.\n\t\t\t */\n\t\t\tonPostProcess : onPostProcess,\n\n\t\t\t/**\n\t\t\t * Serializes the specified browser DOM node into a HTML string.\n\t\t\t *\n\t\t\t * @method serialize\n\t\t\t * @param {DOMNode} node DOM node to serialize.\n\t\t\t * @param {Object} args Arguments option that gets passed to event handlers.\n\t\t\t */\n\t\t\tserialize : function(node, args) {\n\t\t\t\tvar impl, doc, oldDoc, htmlSerializer, content;\n\n\t\t\t\t// Explorer won't clone contents of script and style and the\n\t\t\t\t// selected index of select elements are cleared on a clone operation.\n\t\t\t\tif (isIE && dom.select('script,style,select,map').length > 0) {\n\t\t\t\t\tcontent = node.innerHTML;\n\t\t\t\t\tnode = node.cloneNode(false);\n\t\t\t\t\tdom.setHTML(node, content);\n\t\t\t\t} else\n\t\t\t\t\tnode = node.cloneNode(true);\n\n\t\t\t\t// Nodes needs to be attached to something in WebKit/Opera\n\t\t\t\t// Older builds of Opera crashes if you attach the node to an document created dynamically\n\t\t\t\t// and since we can't feature detect a crash we need to sniff the acutal build number\n\t\t\t\t// This fix will make DOM ranges and make Sizzle happy!\n\t\t\t\timpl = node.ownerDocument.implementation;\n\t\t\t\tif (impl.createHTMLDocument) {\n\t\t\t\t\t// Create an empty HTML document\n\t\t\t\t\tdoc = impl.createHTMLDocument(\"\");\n\n\t\t\t\t\t// Add the element or it's children if it's a body element to the new document\n\t\t\t\t\teach(node.nodeName == 'BODY' ? node.childNodes : [node], function(node) {\n\t\t\t\t\t\tdoc.body.appendChild(doc.importNode(node, true));\n\t\t\t\t\t});\n\n\t\t\t\t\t// Grab first child or body element for serialization\n\t\t\t\t\tif (node.nodeName != 'BODY')\n\t\t\t\t\t\tnode = doc.body.firstChild;\n\t\t\t\t\telse\n\t\t\t\t\t\tnode = doc.body;\n\n\t\t\t\t\t// set the new document in DOMUtils so createElement etc works\n\t\t\t\t\toldDoc = dom.doc;\n\t\t\t\t\tdom.doc = doc;\n\t\t\t\t}\n\n\t\t\t\targs = args || {};\n\t\t\t\targs.format = args.format || 'html';\n\n\t\t\t\t// Pre process\n\t\t\t\tif (!args.no_events) {\n\t\t\t\t\targs.node = node;\n\t\t\t\t\tonPreProcess.dispatch(self, args);\n\t\t\t\t}\n\n\t\t\t\t// Setup serializer\n\t\t\t\thtmlSerializer = new tinymce.html.Serializer(settings, schema);\n\n\t\t\t\t// Parse and serialize HTML\n\t\t\t\targs.content = htmlSerializer.serialize(\n\t\t\t\t\thtmlParser.parse(args.getInner ? node.innerHTML : tinymce.trim(dom.getOuterHTML(node), args), args)\n\t\t\t\t);\n\n\t\t\t\t// Replace all BOM characters for now until we can find a better solution\n\t\t\t\tif (!args.cleanup)\n\t\t\t\t\targs.content = args.content.replace(/\\uFEFF|\\u200B/g, '');\n\n\t\t\t\t// Post process\n\t\t\t\tif (!args.no_events)\n\t\t\t\t\tonPostProcess.dispatch(self, args);\n\n\t\t\t\t// Restore the old document if it was changed\n\t\t\t\tif (oldDoc)\n\t\t\t\t\tdom.doc = oldDoc;\n\n\t\t\t\targs.node = null;\n\n\t\t\t\treturn args.content;\n\t\t\t},\n\n\t\t\t/**\n\t\t\t * Adds valid elements rules to the serializers schema instance this enables you to specify things\n\t\t\t * like what elements should be outputted and what attributes specific elements might have.\n\t\t\t * Consult the Wiki for more details on this format.\n\t\t\t *\n\t\t\t * @method addRules\n\t\t\t * @param {String} rules Valid elements rules string to add to schema.\n\t\t\t */\n\t\t\taddRules : function(rules) {\n\t\t\t\tschema.addValidElements(rules);\n\t\t\t},\n\n\t\t\t/**\n\t\t\t * Sets the valid elements rules to the serializers schema instance this enables you to specify things\n\t\t\t * like what elements should be outputted and what attributes specific elements might have.\n\t\t\t * Consult the Wiki for more details on this format.\n\t\t\t *\n\t\t\t * @method setRules\n\t\t\t * @param {String} rules Valid elements rules string.\n\t\t\t */\n\t\t\tsetRules : function(rules) {\n\t\t\t\tschema.setValidElements(rules);\n\t\t\t}\n\t\t};\n\t};\n})(tinymce);"}
}});
