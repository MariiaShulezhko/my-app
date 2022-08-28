require.config({"config": {
        "jsbuild":{"Magento_Persistent/js/view/additional-welcome.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mage/translate',\n    'Magento_Customer/js/customer-data'\n], function ($, $t, customerData) {\n    'use strict';\n\n    return {\n        /**\n         * Init.\n         */\n        init: function () {\n            var persistent = customerData.get('persistent');\n\n            if (persistent().fullname === undefined) {\n                customerData.get('persistent').subscribe(this.replacePersistentWelcome);\n            } else {\n                this.replacePersistentWelcome();\n            }\n        },\n\n        /**\n         * Replace welcome message for customer with persistent cookie.\n         */\n        replacePersistentWelcome: function () {\n            var persistent = customerData.get('persistent'),\n                welcomeElems;\n\n            if (persistent().fullname !== undefined) {\n                welcomeElems = $('li.greet.welcome > span.not-logged-in');\n\n                if (welcomeElems.length) {\n                    $(welcomeElems).each(function () {\n                        var html = $t('Welcome, %1!').replace('%1', persistent().fullname);\n\n                        $(this).attr('data-bind', html);\n                        $(this).html(html);\n                    });\n                    $(welcomeElems).append(' <span><a ' + window.notYouLink + '>' + $t('Not you?') + '</a>');\n                }\n            }\n        },\n\n        /**\n         * @constructor\n         */\n        'Magento_Persistent/js/view/additional-welcome': function () {\n            this.init();\n        }\n    };\n});\n"}
}});
