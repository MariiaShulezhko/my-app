require.config({"config": {
        "jsbuild":{"Amazon_Payment/js/view/payment/amazonlogin.js":"define(\n    [\n        'uiComponent',\n        'Magento_Checkout/js/model/payment/renderer-list'\n    ],\n    function (\n        Component,\n        rendererList\n    ) {\n        'use strict';\n        rendererList.push(\n            {\n                type: 'amazonlogin',\n                component: 'Amazon_Payment/js/view/payment/method-renderer/amazonlogin'\n            }\n        );\n\n    // Add view logic here if needed\n\n        return Component.extend({});\n    }\n);\n"}
}});
