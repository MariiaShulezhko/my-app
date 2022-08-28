require.config({"config": {
        "jsbuild":{"Dotdigitalgroup_Sms/js/telephoneValidatorAddress.js":"define([\n    'jquery',\n    'intlTelInput'\n], function ($, intlTelInput) {\n    'use strict';\n\n    return function () {\n\n        const errorMap = ['Invalid telephone number', 'Invalid country code', 'Telephone number is too short', 'Telephone number is too long', 'Invalid telephone number'];\n\n        let validatorObj = {\n            /**\n             * @param {String} value\n             */\n            validate: function (value) {\n                let countryCodeClass = $('.iti__selected-flag .iti__flag').attr('class');\n                countryCodeClass = countryCodeClass.split(' ')[1];\n\n                if (countryCodeClass === undefined) {\n                    $.validator.messages['validate-phone-number'] = errorMap[1];\n\n                    return false;\n                }\n\n                let countryCode = countryCodeClass.split('__')[1];\n                let isValid = intlTelInputUtils.isValidNumber(value, countryCode);\n\n                if (!isValid) {\n                    $.validator.messages['validate-phone-number'] = errorMap[\n                        intlTelInputUtils.getValidationError(value, countryCode)\n                        ];\n                }\n\n                return isValid;\n            }\n        }\n\n        $.validator.addMethod(\n            'validate-phone-number',\n            validatorObj.validate,\n            $.validator.messages['validate-phone-number']\n        );\n    };\n});\n"}
}});
