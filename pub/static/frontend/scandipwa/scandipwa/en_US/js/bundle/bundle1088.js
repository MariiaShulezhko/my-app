require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/model/shipping-rate-registry.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([], function () {\n    'use strict';\n\n    var cache = [];\n\n    return {\n        /**\n         * @param {String} addressKey\n         * @return {*}\n         */\n        get: function (addressKey) {\n            if (cache[addressKey]) {\n                return cache[addressKey];\n            }\n\n            return false;\n        },\n\n        /**\n         * @param {String} addressKey\n         * @param {*} data\n         */\n        set: function (addressKey, data) {\n            cache[addressKey] = data;\n        }\n    };\n});\n"}
}});
