require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/summary/item/details/thumbnail.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['uiComponent'], function (Component) {\n    'use strict';\n\n    var imageData = window.checkoutConfig.imageData;\n\n    return Component.extend({\n        defaults: {\n            template: 'Magento_Checkout/summary/item/details/thumbnail'\n        },\n        displayArea: 'before_details',\n        imageData: imageData,\n\n        /**\n         * @param {Object} item\n         * @return {Array}\n         */\n        getImageItem: function (item) {\n            if (this.imageData[item['item_id']]) {\n                return this.imageData[item['item_id']];\n            }\n\n            return [];\n        },\n\n        /**\n         * @param {Object} item\n         * @return {null}\n         */\n        getSrc: function (item) {\n            if (this.imageData[item['item_id']]) {\n                return this.imageData[item['item_id']].src;\n            }\n\n            return null;\n        },\n\n        /**\n         * @param {Object} item\n         * @return {null}\n         */\n        getWidth: function (item) {\n            if (this.imageData[item['item_id']]) {\n                return this.imageData[item['item_id']].width;\n            }\n\n            return null;\n        },\n\n        /**\n         * @param {Object} item\n         * @return {null}\n         */\n        getHeight: function (item) {\n            if (this.imageData[item['item_id']]) {\n                return this.imageData[item['item_id']].height;\n            }\n\n            return null;\n        },\n\n        /**\n         * @param {Object} item\n         * @return {null}\n         */\n        getAlt: function (item) {\n            if (this.imageData[item['item_id']]) {\n                return this.imageData[item['item_id']].alt;\n            }\n\n            return null;\n        }\n    });\n});\n"}
}});
