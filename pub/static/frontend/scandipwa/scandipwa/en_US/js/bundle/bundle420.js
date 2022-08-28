require.config({"config": {
        "jsbuild":{"Magento_Paypal/js/view/payment/method-renderer/in-context/checkout-express.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'jquery',\n    'Magento_Paypal/js/view/payment/method-renderer/paypal-express-abstract',\n    'Magento_Paypal/js/in-context/express-checkout-wrapper',\n    'Magento_Paypal/js/action/set-payment-method',\n    'Magento_Checkout/js/model/payment/additional-validators',\n    'Magento_Ui/js/model/messageList',\n    'Magento_Ui/js/lib/view/utils/async'\n], function ($, Component, Wrapper, setPaymentMethod, additionalValidators, messageList) {\n    'use strict';\n\n    return Component.extend(Wrapper).extend({\n        defaults: {\n            template: 'Magento_Paypal/payment/paypal-express-in-context',\n            validationElements: 'input'\n        },\n\n        /**\n         * Listens element on change and validate it.\n         *\n         * @param {HTMLElement} context\n         */\n        initListeners: function (context) {\n            $.async(this.validationElements, context, function (element) {\n                $(element).on('change', function () {\n                    this.validate();\n                }.bind(this));\n            }.bind(this));\n        },\n\n        /**\n         *  Validates Smart Buttons\n         */\n        validate: function () {\n            this._super();\n\n            if (this.actions) {\n                additionalValidators.validate(true) ? this.actions.enable() : this.actions.disable();\n            }\n        },\n\n        /** @inheritdoc */\n        beforePayment: function (resolve, reject) {\n            var promise = $.Deferred();\n\n            setPaymentMethod(this.messageContainer).done(function () {\n                return promise.resolve();\n            }).fail(function (response) {\n                var error;\n\n                try {\n                    error = JSON.parse(response.responseText);\n                } catch (exception) {\n                    error = this.paymentActionError;\n                }\n\n                this.addError(error);\n\n                return reject(new Error(error));\n            }.bind(this));\n\n            return promise;\n        },\n\n        /**\n         * Populate client config with all required data\n         *\n         * @return {Object}\n         */\n        prepareClientConfig: function () {\n            this._super();\n            this.clientConfig.quoteId = window.checkoutConfig.quoteData['entity_id'];\n            this.clientConfig.customerId = window.customerData.id;\n            this.clientConfig.button = 0;\n\n            return this.clientConfig;\n        },\n\n        /**\n         * Adding logic to be triggered onClick action for smart buttons component\n         */\n        onClick: function () {\n            additionalValidators.validate();\n        },\n\n        /**\n         * Adds error message\n         *\n         * @param {String} message\n         */\n        addError: function (message) {\n            messageList.addErrorMessage({\n                message: message\n            });\n        },\n\n        /**\n         * After payment execute\n         *\n         * @param {Object} res\n         * @param {Function} resolve\n         * @param {Function} reject\n         *\n         * @return {*}\n         */\n        afterPayment: function (res, resolve, reject) {\n            if (res.success) {\n                return resolve(res.token);\n            }\n\n            this.addError(res['error_message']);\n\n            return reject(new Error(res['error_message']));\n        },\n\n        /**\n         * After onAuthorize execute\n         *\n         * @param {Object} res\n         * @param {Function} resolve\n         * @param {Function} reject\n         * @param {Object} actions\n         *\n         * @return {*}\n         */\n        afterOnAuthorize: function (res, resolve, reject, actions) {\n            if (res.success) {\n                resolve();\n\n                return actions.redirect(res.redirectUrl);\n            }\n\n            this.addError(res['error_message']);\n\n            return reject(new Error(res['error_message']));\n        }\n    });\n});\n"}
}});
