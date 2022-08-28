require.config({"config": {
        "jsbuild":{"Magento_InventoryConfigurableProductFrontendUi/js/configurable.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'jquery',\n    'configurableVariationQty',\n    'jquery-ui-modules/widget'\n], function ($, configurableVariationQty) {\n    'use strict';\n\n    return function (configurable) {\n        $.widget('mage.configurable', configurable, {\n\n            /** @inheritdoc */\n            _configureElement: function (element) {\n                var salesChannel = this.options.spConfig.channel,\n                    salesChannelCode = this.options.spConfig.salesChannelCode,\n                    productVariationsSku = this.options.spConfig.sku;\n\n                this._super(element);\n                configurableVariationQty(productVariationsSku[this.simpleProduct], salesChannel, salesChannelCode);\n            }\n        });\n\n        return $.mage.configurable;\n    };\n});\n"}
}});
