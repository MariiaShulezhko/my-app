require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/model/payment-service.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'underscore',\n    'Magento_Checkout/js/model/quote',\n    'Magento_Checkout/js/model/payment/method-list',\n    'Magento_Checkout/js/action/select-payment-method'\n], function (_, quote, methodList, selectPaymentMethod) {\n    'use strict';\n\n    /**\n    * Free method filter\n    * @param {Object} paymentMethod\n    * @return {Boolean}\n    */\n    var isFreePaymentMethod = function (paymentMethod) {\n            return paymentMethod.method === 'free';\n        },\n\n        /**\n         * Grabs the grand total from quote\n         * @return {Number}\n         */\n        getGrandTotal = function () {\n            return quote.totals()['grand_total'];\n        };\n\n    return {\n        isFreeAvailable: false,\n\n        /**\n         * Populate the list of payment methods\n         * @param {Array} methods\n         */\n        setPaymentMethods: function (methods) {\n            var freeMethod,\n                filteredMethods,\n                methodIsAvailable,\n                methodNames;\n\n            freeMethod = _.find(methods, isFreePaymentMethod);\n            this.isFreeAvailable = !!freeMethod;\n\n            if (freeMethod && getGrandTotal() <= 0) {\n                methods.splice(0, methods.length, freeMethod);\n                selectPaymentMethod(freeMethod);\n            }\n\n            filteredMethods = _.without(methods, freeMethod);\n\n            if (filteredMethods.length === 1) {\n                selectPaymentMethod(filteredMethods[0]);\n            } else if (quote.paymentMethod()) {\n                methodIsAvailable = methods.some(function (item) {\n                    return item.method === quote.paymentMethod().method;\n                });\n                //Unset selected payment method if not available\n                if (!methodIsAvailable) {\n                    selectPaymentMethod(null);\n                }\n            }\n\n            /**\n             * Overwrite methods with existing methods to preserve ko array references.\n             * This prevent ko from re-rendering those methods.\n             */\n            methodNames = _.pluck(methods, 'method');\n            _.map(methodList(), function (existingMethod) {\n                var existingMethodIndex = methodNames.indexOf(existingMethod.method);\n\n                if (existingMethodIndex !== -1) {\n                    methods[existingMethodIndex] = existingMethod;\n                }\n            });\n\n            methodList(methods);\n        },\n\n        /**\n         * Get the list of available payment methods.\n         * @return {Array}\n         */\n        getAvailablePaymentMethods: function () {\n            var allMethods = methodList().slice(),\n                grandTotalOverZero = getGrandTotal() > 0;\n\n            if (!this.isFreeAvailable) {\n                return allMethods;\n            }\n\n            if (grandTotalOverZero) {\n                return _.reject(allMethods, isFreePaymentMethod);\n            }\n\n            return _.filter(allMethods, isFreePaymentMethod);\n        }\n    };\n});\n"}
}});
