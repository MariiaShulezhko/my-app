require.config({"config": {
        "jsbuild":{"Dotdigitalgroup_Sms/js/internationalTelephoneInput.js":"define([\n    'jquery',\n    'intlTelInput'\n], function ($) {\n    'use strict';\n\n    return function (config, node) {\n        // initialise plugin\n        window.intlTelInput($(node)[0], config);\n    };\n});\n"}
}});
