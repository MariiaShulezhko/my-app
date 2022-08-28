require.config({"config": {
        "jsbuild":{"Magento_Paypal/js/view/review/actions/iframe.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @deprecated since version 2.2.0\n */\ndefine([\n    'uiComponent',\n    'Magento_Paypal/js/model/iframe'\n], function (Component, iframe) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            template: 'Magento_Paypal/review/actions/iframe'\n        },\n\n        /**\n         * @return {*}\n         */\n        getCode: function () {\n            return this.index;\n        },\n\n        /**\n         * @return {String}\n         */\n        getActionUrl: function () {\n            return this.isInAction() ? window.checkoutConfig.payment.paypalIframe.actionUrl[this.getCode()] : '';\n        },\n\n        /**\n         * @return {Boolean}\n         */\n        afterSave: function () {\n            iframe.setIsInAction(true);\n\n            return false;\n        },\n\n        /**\n         * @return {*}\n         */\n        isInAction: function () {\n            return iframe.getIsInAction()();\n        },\n\n        /**\n         * @param {Object} context\n         * @return {Function}\n         */\n        placeOrder: function (context) {\n            return context.placeOrder.bind(context, this.afterSave);\n        }\n    });\n});\n"}
}});