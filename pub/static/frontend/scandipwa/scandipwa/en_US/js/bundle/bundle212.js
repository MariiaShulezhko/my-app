require.config({"config": {
        "jsbuild":{"Magento_Ui/js/lib/core/events.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* global WeakMap, Map*/\ndefine([\n    'ko',\n    'underscore'\n], function (ko, _) {\n    'use strict';\n\n    var eventsMap = new WeakMap();\n\n    /**\n     * Returns events map or a specific event\n     * data associated with a provided object.\n     *\n     * @param {Object} obj - Key in the events weakmap.\n     * @param {String} [name] - Name of the event.\n     * @returns {Map|Array|Boolean}\n     */\n    function getEvents(obj, name) {\n        var events = eventsMap.get(obj);\n\n        if (!events) {\n            return false;\n        }\n\n        return name ? events.get(name) : events;\n    }\n\n    /**\n     * Adds new event handler.\n     *\n     * @param {Object} obj - Key in the events weakmap.\n     * @param {String} ns - Callback namespace.\n     * @param {Function} callback - Event callback.\n     * @param {String} name - Name of the event.\n     */\n    function addHandler(obj, ns, callback, name) {\n        var events      = getEvents(obj),\n            observable,\n            data;\n\n        observable = !ko.isObservable(obj[name]) ?\n            ko.getObservable(obj, name) :\n            obj[name];\n\n        if (observable) {\n            observable.subscribe(callback);\n\n            return;\n        }\n\n        if (!events) {\n            events = new Map();\n\n            eventsMap.set(obj, events);\n        }\n\n        data = {\n            callback: callback,\n            ns: ns\n        };\n\n        events.has(name) ?\n            events.get(name).push(data) :\n            events.set(name, [data]);\n    }\n\n    /**\n     * Invokes provided callbacks with a specified arguments.\n     *\n     * @param {Array} handlers\n     * @param {Array} args\n     * @returns {Boolean}\n     */\n    function trigger(handlers, args) {\n        var bubble = true,\n            callback;\n\n        handlers.forEach(function (handler) {\n            callback = handler.callback;\n\n            if (callback.apply(null, args) === false) {\n                bubble = false;\n            }\n        });\n\n        return bubble;\n    }\n\n    return {\n\n        /**\n         * Calls callback when name event is triggered.\n         * @param  {String}   events\n         * @param  {Function} callback\n         * @param  {Function} ns\n         * @return {Object} reference to this\n         */\n        on: function (events, callback, ns) {\n            var iterator;\n\n            if (arguments.length < 2) {\n                ns = callback;\n            }\n\n            iterator = addHandler.bind(null, this, ns);\n\n            _.isObject(events) ?\n                _.each(events, iterator) :\n                iterator(callback, events);\n\n            return this;\n        },\n\n        /**\n         * Removed callback from listening to target event\n         * @param  {String} ns\n         * @return {Object} reference to this\n         */\n        off: function (ns) {\n            var storage = getEvents(this);\n\n            if (!storage) {\n                return this;\n            }\n\n            storage.forEach(function (handlers, name) {\n                handlers = handlers.filter(function (handler) {\n                    return !ns ? false : handler.ns !== ns;\n                });\n\n                handlers.length ?\n                    storage.set(name, handlers) :\n                    storage.delete(name);\n            });\n\n            return this;\n        },\n\n        /**\n         * Triggers event and executes all attached callbacks.\n         *\n         * @param {String} name - Name of the event to be triggered.\n         * @returns {Boolean}\n         */\n        trigger: function (name) {\n            var handlers,\n                args;\n\n            handlers = getEvents(this, name),\n            args = _.toArray(arguments).slice(1);\n\n            if (!handlers || !name) {\n                return true;\n            }\n\n            return trigger(handlers, args);\n        }\n    };\n});\n"}
}});
