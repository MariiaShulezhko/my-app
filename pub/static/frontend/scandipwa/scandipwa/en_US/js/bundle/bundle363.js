require.config({"config": {
        "jsbuild":{"mage/requirejs/resolver.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'underscore',\n    'domReady!'\n], function (_) {\n    'use strict';\n\n    var context = require.s.contexts._,\n        execCb = context.execCb,\n        registry = context.registry,\n        callbacks = [],\n        retries = 10,\n        updateDelay = 1,\n        ready,\n        update;\n\n    /**\n     * Checks if provided callback already exists in the callbacks list.\n     *\n     * @param {Object} callback - Callback object to be checked.\n     * @returns {Boolean}\n     */\n    function isSubscribed(callback) {\n        return !!_.findWhere(callbacks, callback);\n    }\n\n    /**\n     * Checks if provided module is rejected during load.\n     *\n     * @param {Object} module - Module to be checked.\n     * @return {Boolean}\n     */\n    function isRejected(module) {\n        return registry[module.id] && (registry[module.id].inited || registry[module.id].error);\n    }\n\n    /**\n     * Checks if provided module had path fallback triggered.\n     *\n     * @param {Object} module - Module to be checked.\n     * @return {Boolean}\n     */\n    function isPathFallback(module) {\n        return registry[module.id] && registry[module.id].events.error;\n    }\n\n    /**\n     * Checks if provided module has unresolved dependencies.\n     *\n     * @param {Object} module - Module to be checked.\n     * @returns {Boolean}\n     */\n    function isPending(module) {\n        if (!module.depCount) {\n            return false;\n        }\n\n        return module.depCount >\n            _.filter(module.depMaps, isRejected).length + _.filter(module.depMaps, isPathFallback).length;\n    }\n\n    /**\n     * Checks if requirejs's registry object contains pending modules.\n     *\n     * @returns {Boolean}\n     */\n    function hasPending() {\n        return _.some(registry, isPending);\n    }\n\n    /**\n     * Checks if 'resolver' module is in ready\n     * state and that there are no pending modules.\n     *\n     * @returns {Boolean}\n     */\n    function isReady() {\n        return ready && !hasPending();\n    }\n\n    /**\n     * Invokes provided callback handler.\n     *\n     * @param {Object} callback\n     */\n    function invoke(callback) {\n        callback.handler.call(callback.ctx);\n    }\n\n    /**\n     * Sets 'resolver' module to a ready state\n     * and invokes pending callbacks.\n     */\n    function resolve() {\n        ready = true;\n\n        callbacks.splice(0).forEach(invoke);\n    }\n\n    /**\n     * Drops 'ready' flag and runs the update process.\n     */\n    function tick() {\n        ready = false;\n\n        update(retries);\n    }\n\n    /**\n     * Adds callback which will be invoked\n     * when all of the pending modules are initiated.\n     *\n     * @param {Function} handler - 'Ready' event handler function.\n     * @param {Object} [ctx] - Optional context with which handler\n     *      will be invoked.\n     */\n    function subscribe(handler, ctx) {\n        var callback = {\n            handler: handler,\n            ctx: ctx\n        };\n\n        if (!isSubscribed(callback)) {\n            callbacks.push(callback);\n\n            if (isReady()) {\n                _.defer(tick);\n            }\n        }\n    }\n\n    /**\n     * Checks for all modules to be initiated\n     * and invokes pending callbacks if it's so.\n     *\n     * @param {Number} [retry] - Number of retries\n     *      that will be used to repeat the 'update' function\n     *      invokation in case if there are no pending requests.\n     */\n    update = _.debounce(function (retry) {\n        if (!hasPending()) {\n            retry ? update(--retry) : resolve();\n        }\n    }, updateDelay);\n\n    /**\n     * Overrides requirejs's original 'execCb' method\n     * in order to track pending modules.\n     *\n     * @returns {*} Result of original method call.\n     */\n    context.execCb = function () {\n        var exported = execCb.apply(context, arguments);\n\n        tick();\n\n        return exported;\n    };\n\n    return subscribe;\n});\n"}
}});