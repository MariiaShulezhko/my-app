require.config({"config": {
        "jsbuild":{"Magento_Theme/js/cookie-status.js":"define([\n    'jquery',\n    'Magento_Ui/js/modal/modal',\n    'mage/translate'\n], function ($, modal) {\n    'use strict';\n\n    $.widget('mage.cookieStatus', {\n        options: {\n            type: 'popup',\n            responsive: true,\n            innerScroll: true,\n            autoOpen: true,\n            buttons: [{\n                text: $.mage.__('Close'),\n                class: 'cookie-status',\n\n                /**\n                 * Callback for click event\n                 */\n                click: function () {\n                    this.closeModal();\n                }\n            }]\n        },\n\n        /**\n         * Init object\n         * @private\n         */\n        _init: function () {\n\n            if (!navigator.cookieEnabled) {\n                modal(this.options, $('#cookie-status'));\n            }\n        }\n    });\n\n    return $.mage.cookieStatus;\n});\n"}
}});
