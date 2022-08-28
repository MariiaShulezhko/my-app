require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/action/set-payment-information-extended.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'Magento_Checkout/js/model/quote',\n    'Magento_Checkout/js/model/url-builder',\n    'mage/storage',\n    'Magento_Checkout/js/model/error-processor',\n    'Magento_Customer/js/model/customer',\n    'Magento_Checkout/js/action/get-totals',\n    'Magento_Checkout/js/model/full-screen-loader',\n    'underscore',\n    'Magento_Checkout/js/model/payment/place-order-hooks'\n], function (quote, urlBuilder, storage, errorProcessor, customer, getTotalsAction, fullScreenLoader, _, hooks) {\n    'use strict';\n\n    /**\n     * Filter template data.\n     *\n     * @param {Object|Array} data\n     */\n    var filterTemplateData = function (data) {\n        return _.each(data, function (value, key, list) {\n            if (_.isArray(value) || _.isObject(value)) {\n                list[key] = filterTemplateData(value);\n            }\n\n            if (key === '__disableTmpl' || key === 'title') {\n                delete list[key];\n            }\n        });\n    };\n\n    return function (messageContainer, paymentData, skipBilling) {\n        var serviceUrl,\n            payload,\n            headers = {};\n\n        paymentData = filterTemplateData(paymentData);\n        skipBilling = skipBilling || false;\n        payload = {\n            cartId: quote.getQuoteId(),\n            paymentMethod: paymentData\n        };\n\n        /**\n         * Checkout for guest and registered customer.\n         */\n        if (!customer.isLoggedIn()) {\n            serviceUrl = urlBuilder.createUrl('/guest-carts/:cartId/set-payment-information', {\n                cartId: quote.getQuoteId()\n            });\n            payload.email = quote.guestEmail;\n        } else {\n            serviceUrl = urlBuilder.createUrl('/carts/mine/set-payment-information', {});\n        }\n\n        if (skipBilling === false) {\n            payload.billingAddress = quote.billingAddress();\n        }\n\n        fullScreenLoader.startLoader();\n\n        _.each(hooks.requestModifiers, function (modifier) {\n            modifier(headers, payload);\n        });\n\n        return storage.post(\n            serviceUrl, JSON.stringify(payload), true, 'application/json', headers\n        ).fail(\n            function (response) {\n                errorProcessor.process(response, messageContainer);\n            }\n        ).always(\n            function () {\n                fullScreenLoader.stopLoader();\n                _.each(hooks.afterRequestListeners, function (listener) {\n                    listener();\n                });\n            }\n        );\n    };\n});\n"}
}});
