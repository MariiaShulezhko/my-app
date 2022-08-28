require.config({"config": {
        "jsbuild":{"Amazon_Payment/js/view/payment/amazon-pay.js":"define([\n    'uiComponent',\n    'Magento_Checkout/js/model/payment/renderer-list'\n\n], function (\n    Component,\n    rendererList\n) {\n    'use strict';\n\n    rendererList.push(\n        {\n            type: 'amazon_payment',\n            component: 'Amazon_Payment/js/view/payment/method-renderer/amazon-payment-widget'\n        }\n    );\n\n    /** Add view logic here if needed */\n    return Component.extend({});\n});\n"}
}});
