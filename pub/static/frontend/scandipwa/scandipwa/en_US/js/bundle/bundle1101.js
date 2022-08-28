require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/model/full-screen-loader.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'rjsResolver'\n], function ($, resolver) {\n    'use strict';\n\n    var containerId = '#checkout';\n\n    return {\n\n        /**\n         * Start full page loader action\n         */\n        startLoader: function () {\n            $(containerId).trigger('processStart');\n        },\n\n        /**\n         * Stop full page loader action\n         *\n         * @param {Boolean} [forceStop]\n         */\n        stopLoader: function (forceStop) {\n            var $elem = $(containerId),\n                stop = $elem.trigger.bind($elem, 'processStop');\n\n            forceStop ? stop() : resolver(stop);\n        }\n    };\n});\n"}
}});