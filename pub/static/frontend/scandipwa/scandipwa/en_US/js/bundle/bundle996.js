require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/applepay/implementations/core-checkout/method-applepay.js":"define(\n    ['uiComponent', 'Magento_Checkout/js/model/payment/renderer-list'],\n    function (Component, rendererList) {\n        'use strict';\n\n        rendererList.push(\n            {\n                type: 'braintree_applepay',\n                component: 'PayPal_Braintree/js/applepay/implementations/core-checkout/method-renderer/applepay'\n            }\n        );\n\n        return Component.extend({});\n    }\n);"}
}});
