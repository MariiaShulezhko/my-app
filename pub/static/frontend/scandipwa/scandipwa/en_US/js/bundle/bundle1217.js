require.config({"config": {
        "jsbuild":{"Magento_Tax/js/view/checkout/summary/tax.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\n\ndefine([\n    'ko',\n    'Magento_Checkout/js/view/summary/abstract-total',\n    'Magento_Checkout/js/model/quote',\n    'Magento_Checkout/js/model/totals',\n    'mage/translate',\n    'underscore'\n], function (ko, Component, quote, totals, $t, _) {\n    'use strict';\n\n    var isTaxDisplayedInGrandTotal = window.checkoutConfig.includeTaxInGrandTotal,\n        isFullTaxSummaryDisplayed = window.checkoutConfig.isFullTaxSummaryDisplayed,\n        isZeroTaxDisplayed = window.checkoutConfig.isZeroTaxDisplayed,\n        taxAmount = 0,\n        rates = 0;\n\n    return Component.extend({\n        defaults: {\n            isTaxDisplayedInGrandTotal: isTaxDisplayedInGrandTotal,\n            notCalculatedMessage: $t('Not yet calculated'),\n            template: 'Magento_Tax/checkout/summary/tax'\n        },\n        totals: quote.getTotals(),\n        isFullTaxSummaryDisplayed: isFullTaxSummaryDisplayed,\n\n        /**\n         * @return {Boolean}\n         */\n        ifShowValue: function () {\n            if (this.isFullMode() && this.getPureValue() == 0) { //eslint-disable-line eqeqeq\n                return isZeroTaxDisplayed;\n            }\n\n            return true;\n        },\n\n        /**\n         * @return {Boolean}\n         */\n        ifShowDetails: function () {\n            if (!this.isFullMode()) {\n                return false;\n            }\n\n            return this.getPureValue() > 0 && isFullTaxSummaryDisplayed;\n        },\n\n        /**\n         * @return {Number}\n         */\n        getPureValue: function () {\n            var amount = 0,\n                taxTotal;\n\n            if (this.totals()) {\n                taxTotal = totals.getSegment('tax');\n\n                if (taxTotal) {\n                    amount = taxTotal.value;\n                }\n            }\n\n            return amount;\n        },\n\n        /**\n         * @return {*|Boolean}\n         */\n        isCalculated: function () {\n            return this.totals() && this.isFullMode() && totals.getSegment('tax') != null;\n        },\n\n        /**\n         * @return {*}\n         */\n        getValue: function () {\n            var amount;\n\n            if (!this.isCalculated()) {\n                return this.notCalculatedMessage;\n            }\n            amount = totals.getSegment('tax').value;\n\n            return this.getFormattedPrice(amount);\n        },\n\n        /**\n         * @param {*} amount\n         * @return {*|String}\n         */\n        formatPrice: function (amount) {\n            return this.getFormattedPrice(amount);\n        },\n\n        /**\n         * @param {*} parent\n         * @param {*} percentage\n         * @return {*|String}\n         */\n        getTaxAmount: function (parent, percentage) {\n            var totalPercentage = 0;\n\n            taxAmount = parent.amount;\n            rates = parent.rates;\n            _.each(rates, function (rate) {\n                totalPercentage += parseFloat(rate.percent);\n            });\n\n            return this.getFormattedPrice(this.getPercentAmount(taxAmount, totalPercentage, percentage));\n        },\n\n        /**\n         * @param {*} amount\n         * @param {*} totalPercentage\n         * @param {*} percentage\n         * @return {*|String}\n         */\n        getPercentAmount: function (amount, totalPercentage, percentage) {\n            return parseFloat(amount * percentage / totalPercentage);\n        },\n\n        /**\n         * @return {Array}\n         */\n        getDetails: function () {\n            var taxSegment = totals.getSegment('tax');\n\n            if (taxSegment && taxSegment['extension_attributes']) {\n                return taxSegment['extension_attributes']['tax_grandtotal_details'];\n            }\n\n            return [];\n        }\n    });\n});\n"}
}});