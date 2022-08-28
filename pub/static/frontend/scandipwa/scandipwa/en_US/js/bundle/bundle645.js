require.config({"config": {
        "jsbuild":{"Magento_GiftMessage/js/model/gift-options.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'underscore',\n    'ko'\n], function (_, ko) {\n    'use strict';\n\n    return {\n        options: ko.observableArray([]),\n\n        /**\n         * @param {Object} option\n         */\n        addOption: function (option) {\n            if (!this.options().hasOwnProperty(option.itemId)) {\n                this.options.push({\n                        id: option.itemId, value: option\n                    }\n                );\n            }\n        },\n\n        /**\n         * @param {*} itemId\n         * @return {*}\n         */\n        getOptionByItemId: function (itemId) {\n            var option = null;\n\n            _.each(this.options(), function (data) {\n                if (data.id === itemId) {\n                    option = data.value;\n\n                    return false;\n                }\n            });\n\n            return option;\n        }\n    };\n});\n"}
}});
