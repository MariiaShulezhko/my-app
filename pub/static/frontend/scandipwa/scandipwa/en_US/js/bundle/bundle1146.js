require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/cart/shipping-estimation.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine(\n    [\n        'jquery',\n        'Magento_Ui/js/form/form',\n        'Magento_Checkout/js/action/select-shipping-address',\n        'Magento_Checkout/js/model/address-converter',\n        'Magento_Checkout/js/model/cart/estimate-service',\n        'Magento_Checkout/js/checkout-data',\n        'Magento_Checkout/js/model/shipping-rates-validator',\n        'uiRegistry',\n        'Magento_Checkout/js/model/quote',\n        'Magento_Checkout/js/model/checkout-data-resolver',\n        'Magento_Checkout/js/model/shipping-service',\n        'mage/validation'\n    ],\n    function (\n        $,\n        Component,\n        selectShippingAddress,\n        addressConverter,\n        estimateService,\n        checkoutData,\n        shippingRatesValidator,\n        registry,\n        quote,\n        checkoutDataResolver,\n        shippingService\n    ) {\n        'use strict';\n\n        return Component.extend({\n            defaults: {\n                template: 'Magento_Checkout/cart/shipping-estimation'\n            },\n            isVirtual: quote.isVirtual(),\n\n            /**\n             * @override\n             */\n            initialize: function () {\n                this._super();\n\n                // Prevent shipping methods showing none available whilst we resolve\n                shippingService.isLoading(true);\n\n                registry.async('checkoutProvider')(function (checkoutProvider) {\n                    var address, estimatedAddress;\n\n                    shippingService.isLoading(false);\n\n                    checkoutDataResolver.resolveEstimationAddress();\n                    address = quote.isVirtual() ? quote.billingAddress() : quote.shippingAddress();\n\n                    if (!address && quote.isVirtual()) {\n                        address = addressConverter.formAddressDataToQuoteAddress(\n                            checkoutData.getSelectedBillingAddress()\n                        );\n                    }\n\n                    if (address) {\n                        estimatedAddress = address.isEditable() ?\n                            addressConverter.quoteAddressToFormAddressData(address) :\n                            {\n                                // only the following fields must be used by estimation form data provider\n                                'country_id': address.countryId,\n                                region: address.region,\n                                'region_id': address.regionId,\n                                postcode: address.postcode\n                            };\n                        checkoutProvider.set(\n                            'shippingAddress',\n                            $.extend({}, checkoutProvider.get('shippingAddress'), estimatedAddress)\n                        );\n                    }\n\n                    if (!quote.isVirtual()) {\n                        checkoutProvider.on('shippingAddress', function (shippingAddressData) {\n                            //jscs:disable requireCamelCaseOrUpperCaseIdentifiers\n                            if (quote.shippingAddress().countryId !== shippingAddressData.country_id ||\n                                (shippingAddressData.postcode || shippingAddressData.region_id)\n                            ) {\n                                checkoutData.setShippingAddressFromData(shippingAddressData);\n                            }\n                            //jscs:enable requireCamelCaseOrUpperCaseIdentifiers\n                        });\n                    } else {\n                        checkoutProvider.on('shippingAddress', function (shippingAddressData) {\n                            checkoutData.setBillingAddressFromData(shippingAddressData);\n                        });\n                    }\n                });\n\n                return this;\n            },\n\n            /**\n             * @override\n             */\n            initElement: function (element) {\n                this._super();\n\n                if (element.index === 'address-fieldsets') {\n                    shippingRatesValidator.bindChangeHandlers(element.elems(), true, 500);\n                    element.elems.subscribe(function (elems) {\n                        shippingRatesValidator.doElementBinding(elems[elems.length - 1], true, 500);\n                    });\n                }\n\n                return this;\n            },\n\n            /**\n             * Returns shipping rates for address\n             * @returns void\n             */\n            getEstimationInfo: function () {\n                var addressData = null;\n\n                this.source.set('params.invalid', false);\n                this.source.trigger('shippingAddress.data.validate');\n\n                if (!this.source.get('params.invalid')) {\n                    addressData = this.source.get('shippingAddress');\n                    selectShippingAddress(addressConverter.formAddressDataToQuoteAddress(addressData));\n                }\n            }\n        });\n    }\n);\n"}
}});
