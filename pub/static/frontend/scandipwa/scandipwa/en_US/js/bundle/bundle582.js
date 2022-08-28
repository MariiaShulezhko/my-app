require.config({"config": {
        "jsbuild":{"Magento_Customer/js/model/authentication-popup.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'Magento_Ui/js/modal/modal'\n], function ($, modal) {\n    'use strict';\n\n    return {\n        modalWindow: null,\n\n        /**\n         * Create popUp window for provided element\n         *\n         * @param {HTMLElement} element\n         */\n        createPopUp: function (element) {\n            var options = {\n                'type': 'popup',\n                'modalClass': 'popup-authentication',\n                'focus': '[name=username]',\n                'responsive': true,\n                'innerScroll': true,\n                'trigger': '.proceed-to-checkout',\n                'buttons': []\n            };\n\n            this.modalWindow = element;\n            modal(options, $(this.modalWindow));\n        },\n\n        /** Show login popup window */\n        showModal: function () {\n            $(this.modalWindow).modal('openModal').trigger('contentUpdated');\n        }\n    };\n});\n"}
}});
