require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/googlepay/implementations/core-checkout/method-googlepay.js":"define(\n    ['uiComponent', 'Magento_Checkout/js/model/payment/renderer-list'],\n    function (Component, rendererList) {\n        'use strict';\n\n        rendererList.push(\n            {\n                type: 'braintree_googlepay',\n                component: 'PayPal_Braintree/js/googlepay/implementations/core-checkout/method-renderer/googlepay'\n            }\n        );\n\n        return Component.extend({});\n    }\n);"}
}});
