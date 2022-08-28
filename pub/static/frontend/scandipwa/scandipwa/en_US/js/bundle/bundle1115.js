require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/model/cart/estimate-service.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Checkout/js/model/quote',\n    'Magento_Checkout/js/model/shipping-rate-processor/new-address',\n    'Magento_Checkout/js/model/cart/totals-processor/default',\n    'Magento_Checkout/js/model/shipping-service',\n    'Magento_Checkout/js/model/cart/cache',\n    'Magento_Customer/js/customer-data'\n], function (quote, defaultProcessor, totalsDefaultProvider, shippingService, cartCache, customerData) {\n    'use strict';\n\n    var rateProcessors = {},\n        totalsProcessors = {},\n\n        /**\n         * Estimate totals for shipping address and update shipping rates.\n         */\n        estimateTotalsAndUpdateRates = function () {\n            var type = quote.shippingAddress().getType();\n\n            if (\n                quote.isVirtual() ||\n                window.checkoutConfig.activeCarriers && window.checkoutConfig.activeCarriers.length === 0\n            ) {\n                // update totals block when estimated address was set\n                totalsProcessors['default'] = totalsDefaultProvider;\n                totalsProcessors[type] ?\n                    totalsProcessors[type].estimateTotals(quote.shippingAddress()) :\n                    totalsProcessors['default'].estimateTotals(quote.shippingAddress());\n            } else {\n                // check if user data not changed -> load rates from cache\n                if (!cartCache.isChanged('address', quote.shippingAddress()) &&\n                    !cartCache.isChanged('cartVersion', customerData.get('cart')()['data_id']) &&\n                    cartCache.get('rates')\n                ) {\n                    shippingService.setShippingRates(cartCache.get('rates'));\n\n                    return;\n                }\n\n                // update rates list when estimated address was set\n                rateProcessors['default'] = defaultProcessor;\n                rateProcessors[type] ?\n                    rateProcessors[type].getRates(quote.shippingAddress()) :\n                    rateProcessors['default'].getRates(quote.shippingAddress());\n\n                // save rates to cache after load\n                shippingService.getShippingRates().subscribe(function (rates) {\n                    cartCache.set('rates', rates);\n                });\n            }\n        },\n\n        /**\n         * Estimate totals for shipping address.\n         */\n        estimateTotalsShipping = function () {\n            totalsDefaultProvider.estimateTotals(quote.shippingAddress());\n        },\n\n        /**\n         * Estimate totals for billing address.\n         */\n        estimateTotalsBilling = function () {\n            var type = quote.billingAddress().getType();\n\n            if (quote.isVirtual()) {\n                // update totals block when estimated address was set\n                totalsProcessors['default'] = totalsDefaultProvider;\n                totalsProcessors[type] ?\n                    totalsProcessors[type].estimateTotals(quote.billingAddress()) :\n                    totalsProcessors['default'].estimateTotals(quote.billingAddress());\n            }\n        };\n\n    quote.shippingAddress.subscribe(estimateTotalsAndUpdateRates);\n    quote.shippingMethod.subscribe(estimateTotalsShipping);\n    quote.billingAddress.subscribe(estimateTotalsBilling);\n});\n"}
}});