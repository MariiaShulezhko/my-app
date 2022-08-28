require.config({"config": {
        "jsbuild":{"Magento_CheckoutAgreements/js/model/agreement-validator.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mage/validation'\n], function ($) {\n    'use strict';\n\n    var checkoutConfig = window.checkoutConfig,\n        agreementsConfig = checkoutConfig ? checkoutConfig.checkoutAgreements : {},\n        agreementsInputPath = '.payment-method._active div.checkout-agreements input';\n\n    return {\n        /**\n         * Validate checkout agreements\n         *\n         * @returns {Boolean}\n         */\n        validate: function (hideError) {\n            var isValid = true;\n\n            if (!agreementsConfig.isEnabled || $(agreementsInputPath).length === 0) {\n                return true;\n            }\n\n            $(agreementsInputPath).each(function (index, element) {\n                if (!$.validator.validateSingleElement(element, {\n                    errorElement: 'div',\n                    hideError: hideError || false\n                })) {\n                    isValid = false;\n                }\n            });\n\n            return isValid;\n        }\n    };\n});\n"}
}});
