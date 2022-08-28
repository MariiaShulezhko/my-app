require.config({"config": {
        "jsbuild":{"Magento_Tax/js/view/checkout/summary/grand-total.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\n\ndefine([\n    'Magento_Checkout/js/view/summary/abstract-total',\n    'Magento_Checkout/js/model/quote',\n    'Magento_Catalog/js/price-utils',\n    'Magento_Checkout/js/model/totals'\n], function (Component, quote, priceUtils, totals) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            isFullTaxSummaryDisplayed: window.checkoutConfig.isFullTaxSummaryDisplayed || false,\n            template: 'Magento_Tax/checkout/summary/grand-total'\n        },\n        totals: quote.getTotals(),\n        isTaxDisplayedInGrandTotal: window.checkoutConfig.includeTaxInGrandTotal || false,\n\n        /**\n         * @return {*}\n         */\n        isDisplayed: function () {\n            return this.isFullMode();\n        },\n\n        /**\n         * @return {*|String}\n         */\n        getValue: function () {\n            var price = 0;\n\n            if (this.totals()) {\n                price = totals.getSegment('grand_total').value;\n            }\n\n            return this.getFormattedPrice(price);\n        },\n\n        /**\n         * @return {*|String}\n         */\n        getBaseValue: function () {\n            var price = 0;\n\n            if (this.totals()) {\n                price = this.totals()['base_grand_total'];\n            }\n\n            return priceUtils.formatPrice(price, quote.getBasePriceFormat());\n        },\n\n        /**\n         * @return {*}\n         */\n        getGrandTotalExclTax: function () {\n            var total = this.totals();\n\n            if (!total) {\n                return 0;\n            }\n\n            return this.getFormattedPrice(total['grand_total']);\n        },\n\n        /**\n         * @return {Boolean}\n         */\n        isBaseGrandTotalDisplayNeeded: function () {\n            var total = this.totals();\n\n            if (!total) {\n                return false;\n            }\n\n            return total['base_currency_code'] != total['quote_currency_code']; //eslint-disable-line eqeqeq\n        }\n    });\n});\n"}
}});
