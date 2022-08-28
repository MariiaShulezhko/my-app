require.config({"config": {
        "jsbuild":{"mage/requirejs/mixins.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine('mixins', [\n    'module'\n], function (module) {\n    'use strict';\n\n    var contexts = require.s.contexts,\n        defContextName = '_',\n        defContext = contexts[defContextName],\n        unbundledContext = require.s.newContext('$'),\n        defaultConfig = defContext.config,\n        unbundledConfig = {\n            baseUrl: defaultConfig.baseUrl,\n            paths: defaultConfig.paths,\n            shim: defaultConfig.shim,\n            config: defaultConfig.config,\n            map: defaultConfig.map\n        },\n        rjsMixins;\n\n    /**\n     * Prepare a separate context where modules are not assigned to bundles\n     * so we are able to get their true path and corresponding mixins.\n     */\n    unbundledContext.configure(unbundledConfig);\n\n    /**\n     * Checks if specified string contains\n     * a plugin spacer '!' substring.\n     *\n     * @param {String} name - Name, path or alias of a module.\n     * @returns {Boolean}\n     */\n    function hasPlugin(name) {\n        return !!~name.indexOf('!');\n    }\n\n    /**\n     * Adds 'mixins!' prefix to the specified string.\n     *\n     * @param {String} name - Name, path or alias of a module.\n     * @returns {String} Modified name.\n     */\n    function addPlugin(name) {\n        return 'mixins!' + name;\n    }\n\n    /**\n     * Removes base url from the provided string.\n     *\n     * @param {String} url - Url to be processed.\n     * @param {Object} config - Contexts' configuration object.\n     * @returns {String} String without base url.\n     */\n    function removeBaseUrl(url, config) {\n        var baseUrl = config.baseUrl || '',\n            index = url.indexOf(baseUrl);\n\n        if (~index) {\n            url = url.substring(baseUrl.length - index);\n        }\n\n        return url;\n    }\n\n    /**\n     * Extracts url (without baseUrl prefix)\n     * from a module name ignoring the fact that it may be bundled.\n     *\n     * @param {String} name - Name, path or alias of a module.\n     * @param {Object} config - Context's configuration.\n     * @returns {String}\n     */\n    function getPath(name, config) {\n        var url = unbundledContext.require.toUrl(name);\n\n        return removeBaseUrl(url, config);\n    }\n\n    /**\n     * Checks if specified string represents a relative path (../).\n     *\n     * @param {String} name - Name, path or alias of a module.\n     * @returns {Boolean}\n     */\n    function isRelative(name) {\n        return !!~name.indexOf('./');\n    }\n\n    /**\n     * Iteratively calls mixins passing to them\n     * current value of a 'target' parameter.\n     *\n     * @param {*} target - Value to be modified.\n     * @param {...Function} mixins - List of mixins to apply.\n     * @returns {*} Modified 'target' value.\n     */\n    function applyMixins(target) {\n        var mixins = Array.prototype.slice.call(arguments, 1);\n\n        mixins.forEach(function (mixin) {\n            target = mixin(target);\n        });\n\n        return target;\n    }\n\n    rjsMixins = {\n\n        /**\n         * Loads specified module along with its' mixins.\n         * This method is called for each module defined with \"mixins!\" prefix\n         * in its name that was added by processNames method.\n         *\n         * @param {String} name - Module to be loaded.\n         * @param {Function} req - Local \"require\" function to use to load other modules.\n         * @param {Function} onLoad - A function to call with the value for name.\n         * @param {Object} config - RequireJS configuration object.\n         */\n        load: function (name, req, onLoad, config) {\n            var path     = getPath(name, config),\n                mixins   = this.getMixins(path),\n                deps     = [name].concat(mixins);\n\n            req(deps, function () {\n                onLoad(applyMixins.apply(null, arguments));\n            });\n        },\n\n        /**\n         * Retrieves list of mixins associated with a specified module.\n         *\n         * @param {String} path - Path to the module (without base URL).\n         * @returns {Array} An array of paths to mixins.\n         */\n        getMixins: function (path) {\n            var config = module.config() || {},\n                mixins;\n\n            // Fix for when urlArgs is set.\n            if (path.indexOf('?') !== -1) {\n                path = path.substring(0, path.indexOf('?'));\n            }\n            mixins = config[path] || {};\n\n            return Object.keys(mixins).filter(function (mixin) {\n                return mixins[mixin] !== false;\n            });\n        },\n\n        /**\n         * Checks if specified module has associated with it mixins.\n         *\n         * @param {String} path - Path to the module (without base URL).\n         * @returns {Boolean}\n         */\n        hasMixins: function (path) {\n            return this.getMixins(path).length;\n        },\n\n        /**\n         * Modifies provided names prepending to them\n         * the 'mixins!' plugin prefix if it's necessary.\n         *\n         * @param {(Array|String)} names - Module names, paths or aliases.\n         * @param {Object} context - Current RequireJS context.\n         * @returns {Array|String}\n         */\n        processNames: function (names, context) {\n            var config = context.config;\n\n            /**\n             * Prepends 'mixin' plugin to a single name.\n             *\n             * @param {String} name\n             * @returns {String}\n             */\n            function processName(name) {\n                var path = getPath(name, config);\n\n                if (!hasPlugin(name) && (isRelative(name) || rjsMixins.hasMixins(path))) {\n                    return addPlugin(name);\n                }\n\n                return name;\n            }\n\n            return typeof names !== 'string' ?\n                names.map(processName) :\n                processName(names);\n        }\n    };\n\n    return rjsMixins;\n});\n\nrequire([\n    'mixins'\n], function (mixins) {\n    'use strict';\n\n    var contexts = require.s.contexts,\n        defContextName = '_',\n        defContext = contexts[defContextName],\n        originalContextRequire = defContext.require,\n        processNames = mixins.processNames;\n\n    /**\n     * Wrap default context's require function which gets called every time\n     * module is requested using require call. The upside of this approach\n     * is that deps parameter is already normalized and guaranteed to be an array.\n     */\n    defContext.require = function (deps, callback, errback) {\n        deps = processNames(deps, defContext);\n\n        return originalContextRequire(deps, callback, errback);\n    };\n\n    /**\n     * Copy properties of original 'require' method.\n     */\n    Object.keys(originalContextRequire).forEach(function (key) {\n        defContext.require[key] = originalContextRequire[key];\n    });\n\n    /**\n     * Wrap shift method from context's definitions queue.\n     * Items are added to the queue when a new module is defined and taken\n     * from it every time require call happens.\n     */\n    defContext.defQueue.shift = function () {\n        var queueItem = Array.prototype.shift.call(this),\n            lastDeps = queueItem && queueItem[1];\n\n        if (Array.isArray(lastDeps)) {\n            queueItem[1] = processNames(queueItem[1], defContext);\n        }\n\n        return queueItem;\n    };\n});\n"}
}});