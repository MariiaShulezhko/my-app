require.config({"config": {
        "jsbuild":{"Klarna_Kp/js/view/payments.js":"/**\n * This file is part of the Klarna KP module\n *\n * (c) Klarna Bank AB (publ)\n *\n * For the full copyright and license information, please view the NOTICE\n * and LICENSE files that were distributed with this source code.\n */\ndefine(\n  [\n    'underscore',\n    'uiComponent',\n    'Magento_Checkout/js/model/payment/renderer-list',\n    'Klarna_Kp/js/model/config'\n  ],\n  function (_,\n            Component,\n            rendererList,\n            config) {\n    'use strict';\n    if (config.available_methods && _.isArray(config.available_methods)) {\n      config.available_methods.forEach(function (value) {\n        rendererList.push(value);\n      });\n    }\n    // Add view logic here if needed\n    return Component.extend({});\n  }\n);\n"}
}});
