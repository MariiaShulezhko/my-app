require.config({"config": {
        "jsbuild":{"Magento_Ui/js/lib/knockout/template/renderer.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'jquery',\n    'underscore',\n    './loader'\n], function ($, _, loader) {\n    'use strict';\n\n    var colonReg       = /\\\\:/g,\n        renderedTemplatePromises = {},\n        attributes     = {},\n        elements       = {},\n        globals        = [],\n        renderer,\n        preset;\n\n    renderer = {\n\n        /**\n         * Loads template by provided path and\n         * than converts it's content to html.\n         *\n         * @param {String} tmplPath - Path to the template.\n         * @returns {jQueryPromise}\n         * @alias getRendered\n         */\n        render: function (tmplPath) {\n            var cachedPromise = renderedTemplatePromises[tmplPath];\n\n            if (!cachedPromise) {\n                cachedPromise = renderedTemplatePromises[tmplPath] = loader\n                    .loadTemplate(tmplPath)\n                    .then(renderer.parseTemplate);\n            }\n\n            return cachedPromise;\n        },\n\n        /**\n         * @ignore\n         */\n        getRendered: function (tmplPath) {\n            return renderer.render(tmplPath);\n        },\n\n        /**\n         * Parses provided string as html content\n         * and returns an array of DOM elements.\n         *\n         * @param {String} html - String to be processed.\n         * @returns {Array}\n         */\n        parseTemplate: function (html) {\n            var fragment = document.createDocumentFragment();\n\n            $(fragment).append(html);\n\n            return renderer.normalize(fragment);\n        },\n\n        /**\n         * Processes custom attributes and nodes of provided DOM element.\n         *\n         * @param {HTMLElement} content - Element to be processed.\n         * @returns {Array} An array of content's child nodes.\n         */\n        normalize: function (content) {\n            globals.forEach(function (handler) {\n                handler(content);\n            });\n\n            return _.toArray(content.childNodes);\n        },\n\n        /**\n         * Adds new global content handler.\n         *\n         * @param {Function} handler - Function which will be invoked for\n         *      an every content passed to 'normalize' method.\n         * @returns {Renderer} Chainable.\n         */\n        addGlobal: function (handler) {\n            if (!_.contains(globals, handler)) {\n                globals.push(handler);\n            }\n\n            return this;\n        },\n\n        /**\n         * Removes specified global content handler.\n         *\n         * @param {Function} handler - Handler to be removed.\n         * @returns {Renderer} Chainable.\n         */\n        removeGlobal: function (handler) {\n            var index = globals.indexOf(handler);\n\n            if (~index) {\n                globals.splice(index, 1);\n            }\n\n            return this;\n        },\n\n        /**\n         * Adds new custom attribute handler.\n         *\n         * @param {String} id - Attribute identifier.\n         * @param {(Object|Function)} [config={}]\n         * @returns {Renderer} Chainable.\n         */\n        addAttribute: function (id, config) {\n            var data = {\n                name: id,\n                binding: id,\n                handler: renderer.handlers.attribute\n            };\n\n            if (_.isFunction(config)) {\n                data.handler = config;\n            } else if (_.isObject(config)) {\n                _.extend(data, config);\n            }\n\n            data.id = id;\n            attributes[id] = data;\n\n            return this;\n        },\n\n        /**\n         * Removes specified attribute handler.\n         *\n         * @param {String} id - Attribute identifier.\n         * @returns {Renderer} Chainable.\n         */\n        removeAttribute: function (id) {\n            delete attributes[id];\n\n            return this;\n        },\n\n        /**\n         * Adds new custom node handler.\n         *\n         * @param {String} id - Node identifier.\n         * @param {(Object|Function)} [config={}]\n         * @returns {Renderer} Chainable.\n         */\n        addNode: function (id, config) {\n            var data = {\n                name: id,\n                binding: id,\n                handler: renderer.handlers.node\n            };\n\n            if (_.isFunction(config)) {\n                data.handler = config;\n            } else if (_.isObject(config)) {\n                _.extend(data, config);\n            }\n\n            data.id = id;\n            elements[id] = data;\n\n            return this;\n        },\n\n        /**\n         * Removes specified custom node handler.\n         *\n         * @param {String} id - Node identifier.\n         * @returns {Renderer} Chainable.\n         */\n        removeNode: function (id) {\n            delete elements[id];\n\n            return this;\n        },\n\n        /**\n         * Checks if provided DOM element is a custom node.\n         *\n         * @param {HTMLElement} node - Node to be checked.\n         * @returns {Boolean}\n         */\n        isCustomNode: function (node) {\n            return _.some(elements, function (elem) {\n                return elem.name.toUpperCase() === node.tagName;\n            });\n        },\n\n        /**\n         * Processes custom attributes of a content's child nodes.\n         *\n         * @param {HTMLElement} content - DOM element to be processed.\n         */\n        processAttributes: function (content) {\n            var repeat;\n\n            repeat = _.some(attributes, function (attr) {\n                var attrName = attr.name,\n                    nodes    = content.querySelectorAll('[' + attrName + ']'),\n                    handler  = attr.handler;\n\n                return _.toArray(nodes).some(function (node) {\n                    var data = node.getAttribute(attrName);\n\n                    return handler(node, data, attr) === true;\n                });\n            });\n\n            if (repeat) {\n                renderer.processAttributes(content);\n            }\n        },\n\n        /**\n         * Processes custom nodes of a provided content.\n         *\n         * @param {HTMLElement} content - DOM element to be processed.\n         */\n        processNodes: function (content) {\n            var repeat;\n\n            repeat = _.some(elements, function (element) {\n                var nodes   = content.querySelectorAll(element.name),\n                    handler = element.handler;\n\n                return _.toArray(nodes).some(function (node) {\n                    var data = node.getAttribute('args');\n\n                    return handler(node, data, element) === true;\n                });\n            });\n\n            if (repeat) {\n                renderer.processNodes(content);\n            }\n        },\n\n        /**\n         * Wraps provided string in curly braces if it's necessary.\n         *\n         * @param {String} args - String to be wrapped.\n         * @returns {String} Wrapped string.\n         */\n        wrapArgs: function (args) {\n            if (~args.indexOf('\\\\:')) {\n                args = args.replace(colonReg, ':');\n            } else if (~args.indexOf(':') && !~args.indexOf('}')) {\n                args = '{' + args + '}';\n            }\n\n            return args;\n        },\n\n        /**\n         * Wraps child nodes of provided DOM element\n         * with knockout's comment tag.\n         *\n         * @param {HTMLElement} node - Node whose children should be wrapped.\n         * @param {String} binding - Name of the binding for the opener comment tag.\n         * @param {String} data - Data associated with a binding.\n         *\n         * @example\n         *      <div id=\"example\"><span/></div>\n         *      wrapChildren(document.getElementById('example'), 'foreach', 'data');\n         *      =>\n         *      <div id=\"example\">\n         *      <!-- ko foreach: data -->\n         *          <span></span>\n         *      <!-- /ko -->\n         *      </div>\n         */\n        wrapChildren: function (node, binding, data) {\n            var tag = this.createComment(binding, data),\n                $node = $(node);\n\n            $node.prepend(tag.open);\n            $node.append(tag.close);\n        },\n\n        /**\n         * Wraps specified node with knockout's comment tag.\n         *\n         * @param {HTMLElement} node - Node to be wrapped.\n         * @param {String} binding - Name of the binding for the opener comment tag.\n         * @param {String} data - Data associated with a binding.\n         *\n         * @example\n         *      <div id=\"example\"></div>\n         *      wrapNode(document.getElementById('example'), 'foreach', 'data');\n         *      =>\n         *      <!-- ko foreach: data -->\n         *          <div id=\"example\"></div>\n         *      <!-- /ko -->\n         */\n        wrapNode: function (node, binding, data) {\n            var tag = this.createComment(binding, data),\n                $node = $(node);\n\n            $node.before(tag.open);\n            $node.after(tag.close);\n        },\n\n        /**\n         * Creates knockouts' comment tag for the provided binding.\n         *\n         * @param {String} binding - Name of the binding.\n         * @param {String} data - Data associated with a binding.\n         * @returns {Object} Object with an open and close comment elements.\n         */\n        createComment: function (binding, data) {\n            return {\n                open: document.createComment(' ko ' + binding + ': ' + data + ' '),\n                close: document.createComment(' /ko ')\n            };\n        }\n    };\n\n    renderer.handlers = {\n\n        /**\n         * Basic node handler. Replaces custom nodes\n         * with a corresponding knockout's comment tag.\n         *\n         * @param {HTMLElement} node - Node to be processed.\n         * @param {String} data\n         * @param {Object} element\n         * @returns {Boolean} True\n         *\n         * @example Sample syntaxes conversions.\n         *      <with args=\"model\">\n         *          <span/>\n         *      </with>\n         *      =>\n         *      <!-- ko with: model-->\n         *          <span/>\n         *      <!-- /ko -->\n         */\n        node: function (node, data, element) {\n            data = renderer.wrapArgs(data);\n\n            renderer.wrapNode(node, element.binding, data);\n            $(node).replaceWith(node.childNodes);\n\n            return true;\n        },\n\n        /**\n         * Base attribute handler. Replaces custom attributes with\n         * a corresponding knockouts' data binding.\n         *\n         * @param {HTMLElement} node - Node to be processed.\n         * @param {String} data - Data associated with a binding.\n         * @param {Object} attr - Attribute definition.\n         *\n         * @example Sample syntaxes conversions.\n         *      <div text=\"label\"></div>\n         *      =>\n         *      <div data-bind=\"text: label\"></div>\n         */\n        attribute: function (node, data, attr) {\n            data = renderer.wrapArgs(data);\n\n            renderer.bindings.add(node, attr.binding, data);\n            node.removeAttribute(attr.name);\n        },\n\n        /**\n         * Wraps provided node with a knockouts' comment tag.\n         *\n         * @param {HTMLElement} node - Node that will be wrapped.\n         * @param {String} data - Data associated with a binding.\n         * @param {Object} attr - Attribute definition.\n         *\n         * @example\n         *      <div outereach=\"data\" class=\"test\"></div>\n         *      =>\n         *      <!-- ko foreach: data -->\n         *          <div class=\"test\"></div>\n         *      <!-- /ko -->\n         */\n        wrapAttribute: function (node, data, attr) {\n            data = renderer.wrapArgs(data);\n\n            renderer.wrapNode(node, attr.binding, data);\n            node.removeAttribute(attr.name);\n        }\n    };\n\n    renderer.bindings = {\n\n        /**\n         * Appends binding string to the current\n         * 'data-bind' attribute of provided node.\n         *\n         * @param {HTMLElement} node - DOM element whose 'data-bind' attribute will be extended.\n         * @param {String} name - Name of a binding.\n         * @param {String} data - Data associated with the binding.\n         */\n        add: function (node, name, data) {\n            var bindings = this.get(node);\n\n            if (bindings) {\n                bindings += ', ';\n            }\n\n            bindings += name;\n\n            if (data) {\n                bindings += ': ' + data;\n            }\n\n            this.set(node, bindings);\n        },\n\n        /**\n         * Extracts value of a 'data-bind' attribute from provided node.\n         *\n         * @param {HTMLElement} node - Node whose attribute to be extracted.\n         * @returns {String}\n         */\n        get: function (node) {\n            return node.getAttribute('data-bind') || '';\n        },\n\n        /**\n         * Sets 'data-bind' attribute of the specified node\n         * to the provided value.\n         *\n         * @param {HTMLElement} node - Node whose attribute will be altered.\n         * @param {String} bindings - New value of 'data-bind' attribute.\n         */\n        set: function (node, bindings) {\n            node.setAttribute('data-bind', bindings);\n        }\n    };\n\n    renderer\n        .addGlobal(renderer.processAttributes)\n        .addGlobal(renderer.processNodes);\n\n    /**\n     * Collection of default binding conversions.\n     */\n    preset = {\n        nodes: _.object([\n            'if',\n            'text',\n            'with',\n            'scope',\n            'ifnot',\n            'foreach',\n            'component'\n        ], Array.prototype),\n        attributes: _.object([\n            'css',\n            'attr',\n            'html',\n            'with',\n            'text',\n            'click',\n            'event',\n            'submit',\n            'enable',\n            'disable',\n            'options',\n            'visible',\n            'template',\n            'hasFocus',\n            'textInput',\n            'component',\n            'uniqueName',\n            'optionsText',\n            'optionsValue',\n            'checkedValue',\n            'selectedOptions'\n        ], Array.prototype)\n    };\n\n    _.extend(preset.attributes, {\n        if: renderer.handlers.wrapAttribute,\n        ifnot: renderer.handlers.wrapAttribute,\n        innerif: {\n            binding: 'if'\n        },\n        innerifnot: {\n            binding: 'ifnot'\n        },\n        outereach: {\n            binding: 'foreach',\n            handler: renderer.handlers.wrapAttribute\n        },\n        foreach: {\n            name: 'each'\n        },\n        value: {\n            name: 'ko-value'\n        },\n        style: {\n            name: 'ko-style'\n        },\n        checked: {\n            name: 'ko-checked'\n        },\n        disabled: {\n            name: 'ko-disabled',\n            binding: 'disable'\n        },\n        focused: {\n            name: 'ko-focused',\n            binding: 'hasFocus'\n        },\n\n        /**\n         * Custom 'render' attribute handler function. Wraps child elements\n         * of a node with knockout's 'ko template:' comment tag.\n         *\n         * @param {HTMLElement} node - Element to be processed.\n         * @param {String} data - Data specified in 'render' attribute of a node.\n         */\n        render: function (node, data) {\n            data = data || 'getTemplate()';\n            data = renderer.wrapArgs(data);\n\n            renderer.wrapChildren(node, 'template', data);\n            node.removeAttribute('render');\n        }\n    });\n\n    _.extend(preset.nodes, {\n        foreach: {\n            name: 'each'\n        },\n\n        /**\n         * Custom 'render' node handler function.\n         * Replaces node with knockout's 'ko template:' comment tag.\n         *\n         * @param {HTMLElement} node - Element to be processed.\n         * @param {String} data - Data specified in 'args' attribute of a node.\n         */\n        render: function (node, data) {\n            data = data || 'getTemplate()';\n            data = renderer.wrapArgs(data);\n\n            renderer.wrapNode(node, 'template', data);\n            $(node).replaceWith(node.childNodes);\n        }\n    });\n\n    _.each(preset.attributes, function (data, id) {\n        renderer.addAttribute(id, data);\n    });\n\n    _.each(preset.nodes, function (data, id) {\n        renderer.addNode(id, data);\n    });\n\n    return renderer;\n});\n"}
}});
