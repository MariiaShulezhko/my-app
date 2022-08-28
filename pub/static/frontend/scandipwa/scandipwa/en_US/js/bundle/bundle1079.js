require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/model/shipping-service.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'ko',\n    'Magento_Checkout/js/model/checkout-data-resolver'\n], function (ko, checkoutDataResolver) {\n    'use strict';\n\n    var shippingRates = ko.observableArray([]);\n\n    return {\n        isLoading: ko.observable(false),\n\n        /**\n         * Set shipping rates\n         *\n         * @param {*} ratesData\n         */\n        setShippingRates: function (ratesData) {\n            shippingRates(ratesData);\n            shippingRates.valueHasMutated();\n            checkoutDataResolver.resolveShippingRates(ratesData);\n        },\n\n        /**\n         * Get shipping rates\n         *\n         * @returns {*}\n         */\n        getShippingRates: function () {\n            return shippingRates;\n        }\n    };\n});\n"}
}});
