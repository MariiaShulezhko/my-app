require.config({"config": {
        "jsbuild":{"mage/app/config.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @deprecated since version 2.2.0\n */\n/* eslint-disable strict */\ndefine([], function () {\n    return {\n        /**\n         * Get base url.\n         */\n        getBaseUrl: function () {\n            return this.values.baseUrl;\n        },\n\n        /**\n         * Get form key.\n         */\n        getFormKey: function () {\n            return this.values.formKey;\n        }\n    };\n});\n"}
}});
