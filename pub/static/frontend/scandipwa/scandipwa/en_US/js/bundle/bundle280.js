require.config({"config": {
        "jsbuild":{"Magento_Ui/js/grid/data-storage.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'jquery',\n    'underscore',\n    'mageUtils',\n    'uiClass'\n], function ($, _, utils, Class) {\n    'use strict';\n\n    return Class.extend({\n        defaults: {\n            cacheRequests: true,\n            cachedRequestDelay: 50,\n            indexField: 'entity_id',\n            requestConfig: {\n                url: '${ $.updateUrl }',\n                method: 'GET',\n                dataType: 'json'\n            },\n            dataScope: '',\n            data: {}\n        },\n\n        /**\n         * Initializes dataStorage configuration.\n         *\n         * @returns {DataStorage} Chainable.\n         */\n        initConfig: function () {\n            var scope;\n\n            this._super();\n\n            scope = this.dataScope;\n\n            if (typeof scope === 'string') {\n                this.dataScope = scope ? [scope] : [];\n            }\n\n            this._requests = [];\n\n            return this;\n        },\n\n        /**\n         * Extracts data which matches specified set of identifiers.\n         *\n         * @param {Array} ids - Records identifiers.\n         * @returns {Array|Boolean}\n         */\n        getByIds: function (ids) {\n            var result = [],\n                hasData;\n\n            hasData = ids.every(function (id) {\n                var item = this.data[id];\n\n                return item ? result.push(item) : false;\n            }, this);\n\n            return hasData ? result : false;\n        },\n\n        /**\n         * Extracts identifiers of provided records.\n         * If no records were provided then full list of\n         * current data id's will be returned.\n         *\n         * @param {Object|Array} [data=this.data]\n         * @returns {Array}\n         */\n        getIds: function (data) {\n            data = data || this.data;\n\n            return _.pluck(data, this.indexField);\n        },\n\n        /**\n         * Extracts data which matches specified parameters.\n         *\n         * @param {Object} params - Request parameters.\n         * @param {Object} [options={}]\n         * @returns {jQueryPromise}\n         */\n        getData: function (params, options) {\n            var cachedRequest;\n\n            if (this.hasScopeChanged(params)) {\n                this.clearRequests();\n            } else {\n                cachedRequest = this.getRequest(params);\n            }\n\n            options = options || {};\n\n            return !options.refresh && cachedRequest ?\n                this.getRequestData(cachedRequest) :\n                this.requestData(params);\n        },\n\n        /**\n         * Tells whether one of the parameters defined in the \"dataScope\" has\n         * changed since the last request.\n         *\n         * @param {Object} params - Request parameters.\n         * @returns {Boolean}\n         */\n        hasScopeChanged: function (params) {\n            var lastRequest = _.last(this._requests),\n                keys,\n                diff;\n\n            if (!lastRequest) {\n                return false;\n            }\n\n            diff = utils.compare(lastRequest.params, params);\n\n            keys = _.pluck(diff.changes, 'path');\n            keys = keys.concat(Object.keys(diff.containers));\n\n            return _.intersection(this.dataScope, keys).length > 0;\n        },\n\n        /**\n         * Extends records of current data object\n         * with the provided records collection.\n         *\n         * @param {Array} data - An array of records.\n         * @returns {DataStorage} Chainable.\n         */\n        updateData: function (data) {\n            var records = _.indexBy(data || [], this.indexField);\n\n            _.extend(this.data, records);\n\n            return this;\n        },\n\n        /**\n         * Sends request to the server with provided parameters.\n         *\n         * @param {Object} params - Request parameters.\n         * @returns {jQueryPromise}\n         */\n        requestData: function (params) {\n            var query = utils.copy(params),\n                handler = this.onRequestComplete.bind(this, query),\n                request;\n\n            this.requestConfig.data = query;\n            request = $.ajax(this.requestConfig).done(handler);\n\n            return request;\n        },\n\n        /**\n         * Returns request's instance which\n         * contains provided parameters.\n         *\n         * @param {Object} params - Request parameters.\n         * @returns {Object} Instance of request.\n         */\n        getRequest: function (params) {\n            return _.find(this._requests, function (request) {\n                return _.isEqual(params, request.params);\n            }, this);\n        },\n\n        /**\n         * Forms data object associated with provided request.\n         *\n         * @param {Object} request - Request object.\n         * @returns {jQueryPromise}\n         */\n        getRequestData: function (request) {\n            var defer = $.Deferred(),\n                resolve = defer.resolve.bind(defer),\n                delay = this.cachedRequestDelay,\n                result;\n\n            result = {\n                items: this.getByIds(request.ids),\n                totalRecords: request.totalRecords,\n                errorMessage: request.errorMessage\n            };\n\n            delay ?\n                _.delay(resolve, delay, result) :\n                resolve(result);\n\n            return defer.promise();\n        },\n\n        /**\n         * Caches requests object with provided parameters\n         * and data object associated with it.\n         *\n         * @param {Object} data - Data associated with request.\n         * @param {Object} params - Request parameters.\n         * @returns {DataStorage} Chainable.\n         */\n        cacheRequest: function (data, params) {\n            var cached = this.getRequest(params);\n\n            if (cached) {\n                this.removeRequest(cached);\n            }\n\n            this._requests.push({\n                ids: this.getIds(data.items),\n                params: params,\n                totalRecords: data.totalRecords,\n                errorMessage: data.errorMessage\n            });\n\n            return this;\n        },\n\n        /**\n         * Clears all cached requests.\n         *\n         * @returns {DataStorage} Chainable.\n         */\n        clearRequests: function () {\n            this._requests.splice(0);\n\n            return this;\n        },\n\n        /**\n         * Removes provided request object from cached requests list.\n         *\n         * @param {Object} request - Request object.\n         * @returns {DataStorage} Chainable.\n         */\n        removeRequest: function (request) {\n            var requests = this._requests,\n                index = requests.indexOf(request);\n\n            if (~index) {\n                requests.splice(index, 1);\n            }\n\n            return this;\n        },\n\n        /**\n         * Checks if request with a specified parameters was cached.\n         *\n         * @param {Object} params - Parameters of the request.\n         * @returns {Boolean}\n         */\n        wasRequested: function (params) {\n            return !!this.getRequest(params);\n        },\n\n        /**\n         * Handles successful data request.\n         *\n         * @param {Object} params - Request parameters.\n         * @param {Object} data - Response data.\n         */\n        onRequestComplete: function (params, data) {\n            this.updateData(data.items);\n\n            if (this.cacheRequests) {\n                this.cacheRequest(data, params);\n            }\n        }\n    });\n});\n"}
}});
