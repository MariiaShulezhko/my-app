require.config({"config": {
        "jsbuild":{"mage/adminhtml/wysiwyg/tiny_mce/html5-schema.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'underscore'\n], function (_) {\n    'use strict';\n\n    /* eslint-disable max-len */\n\n    var schema = {\n        blockContent: [\n            'address', 'article', 'aside', 'blockquote', 'details', 'dialog', 'div', 'dl', 'fieldset',\n            'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr',\n            'menu', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'\n        ],\n        phrasingContent: [\n            '#comment', '#text', 'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas',\n            'cite','code', 'command', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',\n            'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'meter', 'noscript', 'object',\n            'output', 'picture', 'progress', 'q', 'ruby', 's', 'samp', 'script', 'select', 'small',\n            'span', 'strong', 'sub', 'sup', 'textarea', 'time', 'u', 'var', 'video', 'wbr'\n        ],\n        blockElements: [\n            'address', 'article', 'aside', 'blockquote', 'caption', 'center', 'datalist', 'dd', 'dir', 'div',\n            'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',\n            'header', 'hgroup', 'hr', 'isindex', 'li', 'menu', 'nav', 'noscript', 'ol', 'optgroup', 'option',\n            'p', 'pre', 'section', 'select', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'\n        ],\n        boolAttrs: [\n            'autoplay', 'checked', 'compact', 'controls', 'declare', 'defer', 'disabled', 'ismap', 'loop',\n            'multiple', 'nohref', 'noresize', 'noshade', 'nowrap', 'readonly', 'selected'\n        ],\n        shortEnded: [\n            'area', 'base', 'basefont', 'br', 'col', 'embed', 'frame', 'hr', 'img', 'input', 'isindex',\n            'link', 'meta', 'param', 'source', 'track', 'wbr'\n        ],\n        whiteSpace: [\n            'audio', 'iframe', 'noscript', 'object', 'pre', 'script', 'style', 'textarea', 'video'\n        ],\n        selfClosing: [\n            'colgroup', 'dd', 'dt', 'li', 'option', 'p', 'td', 'tfoot', 'th', 'thead', 'tr'\n        ]\n    };\n\n    schema.flowContent = schema.blockContent.concat(schema.phrasingContent, ['style']);\n    schema.nonEmpty = ['td', 'th', 'iframe', 'video', 'audio', 'object', 'script', 'i', 'em', 'span'].concat(schema.shortEnded);\n\n    _.extend(schema, (function (phrasingContent, flowContent) {\n        var validElements   = [],\n            validChildren   = [],\n            compiled        = {},\n            globalAttrs,\n            rawData;\n\n        globalAttrs = [\n            'id', 'dir', 'lang', 'class', 'style', 'title', 'hidden', 'onclick', 'onkeyup',\n            'tabindex', 'dropzone', 'accesskey', 'draggable', 'translate', 'onmouseup',\n            'onkeydown', 'spellcheck', 'ondblclick', 'onmouseout', 'onkeypress', 'contextmenu',\n            'onmousedown', 'onmouseover', 'onmousemove', 'contenteditable'\n        ];\n\n        rawData = [\n            ['html', 'manifest', 'head body'],\n            ['head', '', 'base command link meta noscript script style title'],\n            ['title hr noscript br'],\n            ['base', 'href target'],\n            ['link', 'href rel media hreflang type sizes hreflang'],\n            ['meta', 'name http-equiv content charset'],\n            ['style', 'media type scoped'],\n            ['script', 'src async defer type charset'],\n            ['body', 'onafterprint onbeforeprint onbeforeunload onblur onerror onfocus ' +\n                'onhashchange onload onmessage onoffline ononline onpagehide onpageshow ' +\n                'onpopstate onresize onscroll onstorage onunload background bgcolor text link vlink alink', flowContent\n            ],\n            ['caption', '', _.without(flowContent, 'table')],\n            ['address dt dd div', '', flowContent],\n            ['h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn', '', phrasingContent],\n            ['blockquote', 'cite', flowContent],\n            ['ol', 'reversed start type', 'li'],\n            ['ul', 'type compact', 'li'],\n            ['li', 'value type', flowContent],\n            ['dl', '', 'dt dd'],\n            ['a', 'href target rel media hreflang type charset name rev shape coords download', phrasingContent],\n            ['q', 'cite', phrasingContent],\n            ['ins del', 'cite datetime', flowContent],\n            ['img', 'src sizes srcset alt usemap ismap width height name longdesc align border hspace vspace'],\n            ['iframe', 'src name width height longdesc frameborder marginwidth marginheight scrolling align sandbox seamless allowfullscreen', flowContent],\n            ['embed', 'src type width height'],\n            ['object', 'data type typemustmatch name usemap form width height declare classid code codebase codetype archive standby align border hspace vspace', flowContent.concat(['param'])],\n            ['param', 'name value valuetype type'],\n            ['map', 'name', flowContent.concat(['area'])],\n            ['area', 'alt coords shape href target rel media hreflang type nohref'],\n            ['table', 'border summary width frame rules cellspacing cellpadding align bgcolor', 'caption colgroup thead tfoot tbody tr col'],\n            ['colgroup', 'span width align char charoff valign', 'col'],\n            ['col', 'span'],\n            ['tbody thead tfoot', 'align char charoff valign', 'tr'],\n            ['tr', 'align char charoff valign bgcolor', 'td th'],\n            ['td', 'colspan rowspan headers abbr axis scope align char charoff valign nowrap bgcolor width height', flowContent],\n            ['th', 'colspan rowspan headers scope abbr axis align char charoff valign nowrap bgcolor width height accept', flowContent],\n            ['form', 'accept-charset action autocomplete enctype method name novalidate target onsubmit onreset', flowContent],\n            ['fieldset', 'disabled form name', flowContent.concat(['legend'])],\n            ['label', 'form for', phrasingContent],\n            ['input', 'accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate ' +\n                'formtarget height list max maxlength min multiple name pattern readonly required size src step type value width usemap align'\n            ],\n            ['button', 'disabled form formaction formenctype formmethod formnovalidate formtarget name type value', phrasingContent],\n            ['select', 'disabled form multiple name required size onfocus onblur onchange', 'option optgroup'],\n            ['optgroup', 'disabled label', 'option'],\n            ['option', 'disabled label selected value'],\n            ['textarea', 'cols dirname disabled form maxlength name readonly required rows wrap'],\n            ['menu', 'type label', flowContent.concat(['li'])],\n            ['noscript', '', flowContent],\n            ['wbr'],\n            ['ruby', '', phrasingContent.concat(['rt', 'rp'])],\n            ['figcaption', '', flowContent],\n            ['mark rt rp summary bdi', '', phrasingContent],\n            ['canvas', 'width height', flowContent],\n            ['video', 'src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered', flowContent.concat(['track', 'source'])],\n            ['audio', 'src crossorigin preload autoplay mediagroup loop muted controls buffered volume', flowContent.concat(['track', 'source'])],\n            ['picture', '', 'img source'],\n            ['source', 'src srcset type media sizes'],\n            ['track', 'kind src srclang label default'],\n            ['datalist', '', phrasingContent.concat(['option'])],\n            ['article section nav aside header footer', '', flowContent],\n            ['hgroup', '', 'h1 h2 h3 h4 h5 h6'],\n            ['figure', '', flowContent.concat(['figcaption'])],\n            ['time', 'datetime', phrasingContent],\n            ['dialog', 'open', flowContent],\n            ['command', 'type label icon disabled checked radiogroup command'],\n            ['output', 'for form name', phrasingContent],\n            ['progress', 'value max', phrasingContent],\n            ['meter', 'value min max low high optimum', phrasingContent],\n            ['details', 'open', flowContent.concat(['summary'])],\n            ['keygen', 'autofocus challenge disabled form keytype name'],\n            ['script', 'language xml:space'],\n            ['style', 'xml:space'],\n            ['embed', 'align name hspace vspace'],\n            ['br', 'clear'],\n            ['applet', 'codebase archive code object alt name width height align hspace vspace'],\n            ['font basefont', 'size color face'],\n            ['h1 h2 h3 h4 h5 h6 div p legend caption', 'align'],\n            ['ol dl menu dir', 'compact'],\n            ['pre', 'width xml:space'],\n            ['hr', 'align noshade size width'],\n            ['isindex', 'prompt'],\n            ['col', 'width align char charoff valign'],\n            ['input button select textarea', 'autofocus'],\n            ['input textarea', 'placeholder onselect onchange onfocus onblur'],\n            ['link script img', 'crossorigin']\n        ];\n\n        rawData.forEach(function (data) {\n            var nodes       = data[0].split(' '),\n                attributes  = data[1] || [],\n                children    = data[2] || [],\n                ni          = nodes.length,\n                nodeName,\n                schemaData;\n\n            if (typeof attributes === 'string') {\n                attributes = attributes.split(' ');\n            }\n\n            if (typeof children === 'string') {\n                children = children.split(' ');\n            }\n\n            while (ni--) {\n                nodeName    = nodes[ni];\n                schemaData  = compiled[nodeName] || {};\n\n                compiled[nodeName] = {\n                    attributes: _.union(schemaData.attributes, globalAttrs, attributes),\n                    children: _.union(schemaData.children, children)\n                };\n            }\n        });\n\n        ['a', 'dfn', 'form', 'meter', 'progress'].forEach(function (nodeName) {\n            var node = compiled[nodeName];\n\n            node.children = _.without(node.children, nodeName);\n        });\n\n        _.each(compiled, function (node, nodeName) {\n            var filteredAttributes = [];\n\n            _.each(node.attributes, function (attribute) { //eslint-disable-line max-nested-callbacks\n                // Disallowing usage of 'on*' attributes.\n                if (!/^on/.test(attribute)) {\n                    filteredAttributes.push(attribute);\n                }\n            });\n\n            node.attributes = filteredAttributes;\n\n            validElements.push(nodeName + '[' + node.attributes.join('|') + ']');\n            validChildren.push(nodeName + '[' + node.children.join('|') + ']');\n        });\n\n        return {\n            nodes: compiled,\n            validElements: validElements,\n            validChildren: validChildren\n        };\n    })(schema.phrasingContent, schema.flowContent));\n\n    return schema;\n});\n"}
}});