require.config({"config": {
        "jsbuild":{"Magento_Ups/js/model/shipping-rates-validator.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mageUtils',\n    'Magento_Ups/js/model/shipping-rates-validation-rules',\n    'mage/translate'\n], function ($, utils, validationRules, $t) {\n    'use strict';\n\n    return {\n        validationErrors: [],\n\n        /**\n         * @param {Object} address\n         * @return {Boolean}\n         */\n        validate: function (address) {\n            var self = this;\n\n            this.validationErrors = [];\n            $.each(validationRules.getRules(), function (field, rule) {\n                var message;\n\n                if (rule.required && utils.isEmpty(address[field])) {\n                    message = $t('Field ') + field + $t(' is required.');\n                    self.validationErrors.push(message);\n                }\n            });\n\n            return !this.validationErrors.length;\n        }\n    };\n});\n"}
}});
