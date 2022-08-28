require.config({"config": {
        "jsbuild":{"Magento_Tax/js/price/adjustment.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Ui/js/grid/columns/column',\n    'mage/translate'\n], function (Element, $t) {\n    'use strict';\n\n    return Element.extend({\n        defaults: {\n            bodyTmpl: 'Magento_Tax/price/adjustment',\n            taxPriceType: 'final_price',\n            taxPriceCssClass: 'price-including-tax',\n            bothPrices: 3,\n            inclTax: 2,\n            exclTax: 1,\n            modules: {\n                price: '${ $.parentName }'\n            },\n            listens: {\n                price: 'initializePriceAttributes'\n            }\n        },\n\n        /**\n         * {@inheritdoc}\n         */\n        initialize: function () {\n            this._super()\n                .initializePriceAttributes();\n\n            return this;\n        },\n\n        /**\n         * Update parent price.\n         *\n         * @returns {Object} Chainable.\n         */\n        initializePriceAttributes: function () {\n            if (this.displayBothPrices && this.price()) {\n                this.price().priceWrapperCssClasses = this.taxPriceCssClass;\n                this.price().priceWrapperAttr = {\n                    'data-label': $t('Incl. Tax')\n                };\n            }\n\n            return this;\n        },\n\n        /**\n         * Get price tax adjustment.\n         *\n         * @param {Object} row\n         * @return {HTMLElement} tax html\n         */\n        getTax: function (row) {\n            return row['price_info']['extension_attributes']['tax_adjustments']['formatted_prices'][this.taxPriceType];\n        },\n\n        /**\n         * Set price tax type.\n         *\n         * @param {String} priceType\n         * @return {Object}\n         */\n        setPriceType: function (priceType) {\n            this.taxPriceType = priceType;\n\n            return this;\n        },\n\n        /**\n         * Return whether display setting is to display\n         * both price including tax and price excluding tax.\n         *\n         * @return {Boolean}\n         */\n        displayBothPrices: function () {\n            return +this.source.data.displayTaxes === this.bothPrices;\n        },\n\n        /**\n         * Return whether display setting is to display price including tax.\n         *\n         * @return {Boolean}\n         */\n        displayPriceIncludeTax: function () {\n            return +this.source.data.displayTaxes === this.inclTax;\n        },\n\n        /**\n         * Return whether display setting is to display price excluding tax.\n         *\n         * @return {Boolean}\n         */\n        displayPriceExclTax: function () {\n            return +this.source.data.displayTaxes === this.exclTax;\n        }\n    });\n});\n"}
}});
