require.config({"config": {
        "jsbuild":{"Klarna_Kp/js/action/set-payment-method-action.js":"define(\n    [\n        'jquery',\n        'Klarna_Kp/js/model/config'\n    ],\n    function ($, config) {\n        'use strict';\n        return function (messageContainer) {\n          $.mage.redirect(config.redirect_url);\n        };\n    }\n);\n"}
}});
