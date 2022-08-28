require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/model/url-builder.js":"/**\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    var config = window.checkoutConfig || window.vertexAddressValidationConfig || {};\n\n    return {\n        method: 'rest',\n        storeCode: config.storeCode,\n        version: 'V1',\n        serviceUrl: ':method/:storeCode/:version',\n\n        /**\n         * @param {String} url\n         * @param {Object} params\n         * @return {*}\n         */\n        createUrl: function (url, params) {\n            var completeUrl = this.serviceUrl + url;\n            return this.bindParams(completeUrl, params);\n        },\n\n        /**\n         * @param {String} url\n         * @param {Object} params\n         * @return {*}\n         */\n        bindParams: function (url, params) {\n            var urlParts;\n\n            params.method = this.method;\n            params.storeCode = this.storeCode;\n            params.version = this.version;\n\n            urlParts = url.split('/');\n            urlParts = urlParts.filter(Boolean);\n\n            $.each(urlParts, function (key, part) {\n                part = part.replace(':', '');\n\n                if (params[part] !== undefined) {\n                    urlParts[key] = params[part];\n                }\n            });\n\n            return urlParts.join('/');\n        }\n    };\n});\n"}
}});