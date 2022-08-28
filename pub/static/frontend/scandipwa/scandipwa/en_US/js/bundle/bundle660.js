require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/billing-validation-mixin.js":"/**\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine([\n    'jquery',\n    'uiRegistry',\n    'Magento_Checkout/js/checkout-data'\n], function ($, registry, checkoutData) {\n    'use strict';\n\n    return function (Component) {\n        return Component.extend({\n            validationConfig: window.checkoutConfig.vertexAddressValidationConfig,\n            addressValidator: null,\n\n            /**\n             * @returns {Object}\n             */\n            initialize: function () {\n                let self = this;\n                this._super();\n\n                registry.get(\n                    'checkout.steps.billing-step.payment.payments-list' +\n                    '.before-place-order.billingAdditional' +\n                    '.address-validation-message.validator',\n                    function (validator) {\n                        this.addressValidator = validator;\n                    }.bind(this)\n                );\n\n                this.isAddressDetailsVisible.subscribe(function (isVisible) {\n                    self.addressDetailsVisibilityChanged(isVisible);\n                });\n\n                return this;\n            },\n\n            /**\n             * @returns {self}\n             */\n            updateAddress: function () {\n                this.registerAddressInvalidationTrigger();\n\n                var billingData = checkoutData.getBillingAddressFromData();\n\n                if (!this.validationConfig.isAddressValidationEnabled ||\n                    this.addressValidator.isAddressValid ||\n                    billingData === null ||\n                    this.selectedAddress() && !this.isAddressFormVisible() ||\n                    this.validationConfig.countryValidation.indexOf(billingData.country_id) === -1\n                ) {\n                    return this._super();\n                }\n\n                this.addressValidator.addressValidation().done(function () {\n                    if (!this.validationConfig.showValidationSuccessMessage) {\n                        return this.updateAddress();\n                    }\n                }.bind(this));\n            },\n\n            /**\n             * When called, register a single (mind the \"one\") address invalidation trigger,\n             * that sets the \"this.addressValidator.isAddressValid = false\" for any further billing address field change.\n             */\n            registerAddressInvalidationTrigger: function () {\n                let that = this;\n                $('fieldset')\n                    .find('[data-form=\"billing-new-address\"]')\n                    .one(\n                        'keyup change paste',\n                        'input[name^=\"street\"]' +\n                        ', input[name=\"postcode\"]' +\n                        ', input[name=\"city\"]' +\n                        ', input[name=\"country_id\"]' +\n                        ', select[name=\"region_id\"]',\n                        function () {\n                            that.addressValidator.isAddressValid = false;\n                        });\n            },\n\n            /**\n             * If the address details are visible, then remove the validation address warning message\n             *\n             * @param isVisible\n             */\n            addressDetailsVisibilityChanged: function (isVisible) {\n                let message = this.addressValidator.message;\n                if (isVisible && message.hasMessage() && message.message.type === 1) {\n                    message.clear();\n                }\n            }\n        });\n    };\n});\n"}
}});
