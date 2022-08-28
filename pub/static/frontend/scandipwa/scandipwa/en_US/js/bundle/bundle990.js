require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/view/payment/method-renderer/cc-form.js":"/**\n * Copyright 2013-2017 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n/*browser:true*/\n/*global define*/\ndefine(\n    [\n        'underscore',\n        'jquery',\n        'Magento_Payment/js/view/payment/cc-form',\n        'Magento_Checkout/js/model/quote',\n        'PayPal_Braintree/js/view/payment/adapter',\n        'mage/translate',\n        'PayPal_Braintree/js/validator',\n        'PayPal_Braintree/js/view/payment/validator-handler',\n        'Magento_Checkout/js/model/full-screen-loader'\n    ],\n    function (\n        _,\n        $,\n        Component,\n        quote,\n        braintree,\n        $t,\n        validator,\n        validatorManager,\n        fullScreenLoader\n    ) {\n        'use strict';\n\n        return Component.extend({\n            defaults: {\n                active: false,\n                braintreeClient: null,\n                braintreeDeviceData: null,\n                paymentMethodNonce: null,\n                lastBillingAddress: null,\n                validatorManager: validatorManager,\n                code: 'braintree',\n                isProcessing: false,\n\n                /**\n                 * Additional payment data\n                 *\n                 * {Object}\n                 */\n                additionalData: {},\n\n                /**\n                 * Braintree client configuration\n                 *\n                 * {Object}\n                 */\n                clientConfig: {\n                    dataCollector: {\n                        kount: true\n                    },\n\n                    onReady: function (context) {\n                        context.setupHostedFields();\n                    },\n\n                    /**\n                     * Triggers on payment nonce receive\n                     * @param {Object} response\n                     */\n                    onPaymentMethodReceived: function (response) {\n                        this.handleNonce(response);\n                        this.isProcessing = false;\n                    },\n\n                    /**\n                     * Allow a new nonce to be generated\n                     */\n                    onPaymentMethodError: function() {\n                        this.isProcessing = false;\n                    },\n\n                    /**\n                     * Device data initialization\n                     * @param {String} deviceData\n                     */\n                    onDeviceDataRecieved: function (deviceData) {\n                        this.additionalData['device_data'] = deviceData;\n                    },\n\n                    /**\n                     * After Braintree instance initialization\n                     */\n                    onInstanceReady: function () {},\n\n                    /**\n                     * Triggers on any Braintree error\n                     * @param {Object} response\n                     */\n                    onError: function (response) {\n                        this.isProcessing = false;\n                        braintree.showError($t('Payment ' + this.getTitle() + ' can\\'t be initialized'));\n                        throw response.message;\n                    },\n\n                    /**\n                     * Triggers when customer click \"Cancel\"\n                     */\n                    onCancelled: function () {\n                        this.paymentMethodNonce = null;\n                        this.isProcessing = false;\n                    }\n                },\n                imports: {\n                    onActiveChange: 'active'\n                }\n            },\n\n            /**\n             * Set list of observable attributes\n             *\n             * @returns {exports.initObservable}\n             */\n            initObservable: function () {\n                validator.setConfig(window.checkoutConfig.payment[this.getCode()]);\n                this._super()\n                    .observe(['active']);\n                this.validatorManager.initialize();\n                this.initClientConfig();\n\n                return this;\n            },\n\n            /**\n             * Get payment name\n             *\n             * @returns {String}\n             */\n            getCode: function () {\n                return this.code;\n            },\n\n            /**\n             * Check if payment is active\n             *\n             * @returns {Boolean}\n             */\n            isActive: function () {\n                var active = this.getCode() === this.isChecked();\n\n                this.active(active);\n\n                return active;\n            },\n\n            /**\n             * Triggers when payment method change\n             * @param {Boolean} isActive\n             */\n            onActiveChange: function (isActive) {\n                if (!isActive) {\n                    return;\n                }\n\n                this.initBraintree();\n            },\n\n            /**\n             * Init config\n             */\n            initClientConfig: function () {\n                // Advanced fraud tools settings\n                if (this.hasFraudProtection()) {\n                    this.clientConfig = _.extend(this.clientConfig, this.kountConfig());\n                }\n\n                _.each(this.clientConfig, function (fn, name) {\n                    if (typeof fn === 'function') {\n                        this.clientConfig[name] = fn.bind(this);\n                    }\n                }, this);\n            },\n\n            /**\n             * Init Braintree configuration\n             */\n            initBraintree: function () {\n                var intervalId = setInterval(function () {\n                    // stop loader when frame will be loaded\n                    if ($('#braintree-hosted-field-number').length) {\n                        clearInterval(intervalId);\n                        fullScreenLoader.stopLoader(true);\n                    }\n                }, 500);\n\n                if (braintree.checkout) {\n                    braintree.checkout.teardown(function () {\n                        braintree.checkout = null;\n                    });\n                }\n\n                fullScreenLoader.startLoader();\n                braintree.setConfig(this.clientConfig);\n                braintree.setup();\n            },\n\n            /**\n             * @returns {Object}\n             */\n            kountConfig: function () {\n                var config = {\n                    dataCollector: {\n                        kount: {\n                            environment: this.getEnvironment()\n                        }\n                    },\n\n                    /**\n                     * Device data initialization\n                     *\n                     * @param {Object} checkout\n                     */\n                    onReady: function (context) {\n                        this.additionalData['device_data'] = context.deviceData;\n                        context.setupHostedFields();\n                    }\n                };\n\n                if (this.getKountMerchantId()) {\n                    config.dataCollector.kount.merchantId = this.getKountMerchantId();\n                }\n\n                return config;\n            },\n\n            /**\n             * Get full selector name\n             *\n             * @param {String} field\n             * @returns {String}\n             */\n            getSelector: function (field) {\n                return '#' + this.getCode() + '_' + field;\n            },\n\n            /**\n             * Get list of available CC types\n             *\n             * @returns {Object}\n             */\n            getCcAvailableTypes: function () {\n                var availableTypes = validator.getAvailableCardTypes(),\n                    billingAddress = quote.billingAddress(),\n                    billingCountryId;\n\n                this.lastBillingAddress = quote.shippingAddress();\n\n                if (!billingAddress) {\n                    billingAddress = this.lastBillingAddress;\n                }\n\n                billingCountryId = billingAddress.countryId;\n\n                if (billingCountryId && validator.getCountrySpecificCardTypes(billingCountryId)) {\n                    return validator.collectTypes(\n                        availableTypes,\n                        validator.getCountrySpecificCardTypes(billingCountryId)\n                    );\n                }\n\n                return availableTypes;\n            },\n\n            /**\n             * @returns {Boolean}\n             */\n            hasFraudProtection: function () {\n                return window.checkoutConfig.payment[this.getCode()].hasFraudProtection;\n            },\n\n            /**\n             * @returns {String}\n             */\n            getEnvironment: function () {\n                return window.checkoutConfig.payment[this.getCode()].environment;\n            },\n\n            /**\n             * @returns {String}\n             */\n            getKountMerchantId: function () {\n                return window.checkoutConfig.payment[this.getCode()].kountMerchantId;\n            },\n\n            /**\n             * Get data\n             *\n             * @returns {Object}\n             */\n            getData: function () {\n                var data = {\n                    'method': this.getCode(),\n                    'additional_data': {\n                        'payment_method_nonce': this.paymentMethodNonce\n                    }\n                };\n\n                data['additional_data'] = _.extend(data['additional_data'], this.additionalData);\n\n                return data;\n            },\n\n            /**\n             * Set payment nonce\n             * @param {String} paymentMethodNonce\n             */\n            setPaymentMethodNonce: function (paymentMethodNonce) {\n                this.paymentMethodNonce = paymentMethodNonce;\n            },\n\n            /**\n             * Prepare data to place order\n             * @param {Object} data\n             */\n            handleNonce: function (data) {\n                var self = this;\n\n                this.setPaymentMethodNonce(data.nonce);\n\n                // place order on success validation\n                self.validatorManager.validate(self, function () {\n                    return self.placeOrder('parent');\n                }, function() {\n                    self.isProcessing = false;\n                    self.paymentMethodNonce = null;\n                });\n            },\n\n            /**\n             * Action to place order\n             * @param {String} key\n             */\n            placeOrder: function (key) {\n                if (key) {\n                    return this._super();\n                }\n\n                if (this.isProcessing) {\n                    return false;\n                } else {\n                    this.isProcessing = true;\n                }\n\n                braintree.tokenizeHostedFields();\n                return false;\n            },\n\n            /**\n             * Get payment icons\n             * @param {String} type\n             * @returns {Boolean}\n             */\n            getIcons: function (type) {\n                return window.checkoutConfig.payment.braintree.icons.hasOwnProperty(type) ?\n                    window.checkoutConfig.payment.braintree.icons[type]\n                    : false;\n            },\n        });\n    }\n);\n"}
}});
