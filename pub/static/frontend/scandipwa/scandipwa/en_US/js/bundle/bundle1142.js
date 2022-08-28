require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/checkout/minicart/subtotal/totals.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'ko',\n    'uiComponent',\n    'Magento_Customer/js/customer-data'\n], function (ko, Component, customerData) {\n    'use strict';\n\n    return Component.extend({\n        displaySubtotal: ko.observable(true),\n\n        /**\n         * @override\n         */\n        initialize: function () {\n            this._super();\n            this.cart = customerData.get('cart');\n        }\n    });\n});\n"}
}});
