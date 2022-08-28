require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/paypal/credit/calculator.js":"define([\n    'underscore',\n    'uiComponent',\n    'jquery'\n], function (_, Component, $) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            template: \"PayPal_Braintree/credit/calculator\",\n            displaySummary: true, // \"From X per month\"\n            displayInterestDetails: false, // Display the more in-depth summary of interest rates\n            instalmentsFrom: 0,\n            currentInstalment: {\n                term: 0,\n                monthlyPayment: 0,\n                apr: 0,\n                cost: 0,\n                costIncInterest: 0\n            },\n            endpoint: null,\n            instalments: [],\n            visible: false,\n            merchantName: ''\n        },\n\n        initObservable: function () {\n            this._super();\n            if (this.instalments.length > 0) {\n                this.currentInstalment = this.instalments[0];\n                this.instalmentsFrom = this.instalments[this.instalments.length-1].monthlyPayment;\n                this.visible = true;\n            } else {\n                this.loadInstalments();\n            }\n\n            this.observe(['instalments', 'currentInstalment', 'instalmentsFrom', 'visible']);\n            return this;\n        },\n\n        isCurrentInstalment: function (term) {\n            return (this.currentInstalment().term === term);\n        },\n\n        setCurrentInstalment: function (instalment) {\n            this.currentInstalment(instalment);\n        },\n\n        loadInstalments: function () {\n            if (!this.endpoint) {\n                return false;\n            }\n\n            var self = this;\n            require(['Magento_Checkout/js/model/quote', 'jquery'], function (quote, $) {\n                if (typeof quote.totals().base_grand_total === 'undefined') {\n                    return false;\n                }\n\n                $.getJSON(self.endpoint, {amount: quote.totals().base_grand_total}, function (response) {\n                    self.instalments(response);\n                    self.setCurrentInstalment(response[0]);\n                    self.visible(true);\n                });\n            });\n        }\n    });\n});\n"}
}});
