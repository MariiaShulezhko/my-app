require.config({"config": {
        "jsbuild":{"Magento_OfflinePayments/js/view/payment/method-renderer/cashondelivery-method.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* @api */\ndefine([\n    'Magento_Checkout/js/view/payment/default'\n], function (Component) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            template: 'Magento_OfflinePayments/payment/cashondelivery'\n        },\n\n        /**\n         * Returns payment method instructions.\n         *\n         * @return {*}\n         */\n        getInstructions: function () {\n            return window.checkoutConfig.payment.instructions[this.item.method];\n        }\n    });\n});\n"}
}});
