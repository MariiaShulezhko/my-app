require.config({"config": {
        "jsbuild":{"Magento_Ui/js/form/element/region.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'underscore',\n    'uiRegistry',\n    './select',\n    'Magento_Checkout/js/model/default-post-code-resolver'\n], function (_, registry, Select, defaultPostCodeResolver) {\n    'use strict';\n\n    return Select.extend({\n        defaults: {\n            skipValidation: false,\n            imports: {\n                countryOptions: '${ $.parentName }.country_id:indexedOptions',\n                update: '${ $.parentName }.country_id:value'\n            }\n        },\n\n        /**\n         * {@inheritdoc}\n         */\n        initialize: function () {\n            var option;\n\n            this._super();\n\n            option = _.find(this.countryOptions, function (row) {\n                return row['is_default'] === true;\n            });\n            this.hideRegion(option);\n\n            return this;\n        },\n\n        /**\n         * Method called every time country selector's value gets changed.\n         * Updates all validations and requirements for certain country.\n         * @param {String} value - Selected country ID.\n         */\n        update: function (value) {\n            var isRegionRequired,\n                option;\n\n            if (!value) {\n                return;\n            }\n\n            option = _.isObject(this.countryOptions) && this.countryOptions[value];\n\n            if (!option) {\n                return;\n            }\n\n            this.hideRegion(option);\n\n            defaultPostCodeResolver.setUseDefaultPostCode(!option['is_zipcode_optional']);\n\n            isRegionRequired = !this.skipValidation && !!option['is_region_required'];\n\n            if (!isRegionRequired) {\n                this.error(false);\n            }\n\n            this.required(isRegionRequired);\n            this.validation['required-entry'] = isRegionRequired;\n\n            registry.get(this.customName, function (input) {\n                input.required(isRegionRequired);\n                input.validation['required-entry'] = isRegionRequired;\n                input.validation['validate-not-number-first'] = !this.options().length;\n            }.bind(this));\n        },\n\n        /**\n         * Hide select and corresponding text input field if region must not be shown for selected country.\n         *\n         * @private\n         * @param {Object}option\n         */\n        hideRegion: function (option) {\n            if (!option || option['is_region_visible'] !== false) {\n                return;\n            }\n\n            this.setVisible(false);\n\n            if (this.customEntry) {\n                this.toggleInput(false);\n            }\n        }\n    });\n});\n"}
}});
