require.config({"config": {
        "jsbuild":{"Amazon_Payment/js/view/payment/list.js":"define([\n    'jquery',\n    'underscore',\n    'ko',\n    'Magento_Checkout/js/view/payment/list',\n    'Magento_Checkout/js/model/payment/method-list',\n    'Magento_Checkout/js/model/checkout-data-resolver',\n    'Magento_Checkout/js/model/address-converter',\n    'Magento_Checkout/js/model/quote',\n    'Amazon_Payment/js/action/populate-shipping-address',\n    'Amazon_Payment/js/model/storage'\n\n], function (\n    $,\n    _,\n    ko,\n    Component,\n    paymentMethods,\n    checkoutDataResolver,\n    addressConverter,\n    quote,\n    populateShippingAddress,\n    amazonStorage\n) {\n    'use strict';\n\n    var self;\n\n    return Component.extend({\n        /**\n         * Initialize view.\n         *\n         * @returns {Component} Chainable.\n         */\n        initialize: function () {\n\n            self = this;\n            amazonStorage.isAmazonAccountLoggedIn.subscribe(function (value) {\n                if (!value) {\n                    this._reloadPaymentMethods();\n                }\n            }, this);\n\n            this._hidePaymentMethodsOnLoad(); //hide methods on load\n\n            //subscribe to payment methods to remove other payment methods from render list\n            paymentMethods.subscribe(function (changes) {\n                checkoutDataResolver.resolvePaymentMethod();\n                //remove renderer for \"deleted\" payment methods\n                _.each(changes, function (change) {\n                    if (this._shouldRemovePaymentMethod(change.value.method)) {\n                        this.removeRenderer(change.value.method);\n                        change.status = 'deleted';\n                    }\n                }, this);\n            }, this, 'arrayChange');\n\n            this._setupDeclineHandler();\n            this._super();\n\n            return this;\n        },\n\n        /**\n         * Check if a payment method is applicable with Amazon Pay\n         * @param {String} method\n         * @returns {Boolean}\n         * @private\n         */\n        _shouldRemovePaymentMethod: function (method) {\n            return amazonStorage.isAmazonAccountLoggedIn() && method !== 'amazon_payment' && method !== 'free';\n        },\n\n        /**\n         * handle decline codes\n         * @private\n         */\n        _setupDeclineHandler: function () {\n            amazonStorage.amazonDeclineCode.subscribe(function (declined) {\n                switch (declined) {\n                    //hard decline\n                    case 4273:\n                        //populate shipping form\n                        populateShippingAddress();\n                        amazonStorage.amazonlogOut();\n                        this._reloadPaymentMethods();\n                        amazonStorage.amazonDeclineCode(false);\n                        break;\n                    //soft decline\n                    case 7638:\n                        amazonStorage.isPlaceOrderDisabled(true);\n                        this._reInitializeAmazonWalletWidget();\n                        this._hideEditableOptions();\n                        amazonStorage.amazonDeclineCode(false);\n                        break;\n                    default:\n                        amazonStorage.amazonDeclineCode(false);\n                        break;\n                }\n            }, this);\n        },\n\n        /**\n         * When payment methods exist on load hook into widget render to remove when widget has rendered\n         * @private\n         */\n        _hidePaymentMethodsOnLoad: function () {\n            if (paymentMethods().length > 0) {\n                //if the payment methods are already set\n                $(document).on('rendered', '#amazon_payment', function () {\n                    _.each(paymentMethods(), function (payment) {\n                        if (this._shouldRemovePaymentMethod(payment.method)) {\n                            this.removeRenderer(payment.method);\n                        }\n                    }, self);\n                });\n            }\n        },\n\n        /**\n         * reload payment methods on decline\n         * @private\n         */\n        _reloadPaymentMethods: function () {\n            _.each(paymentMethods(), function (paymentMethodData) {\n                if (paymentMethodData.method === 'amazon_payment' && !amazonStorage.isAmazonAccountLoggedIn()) {\n                    this.removeRenderer(paymentMethodData.method);\n                } else {\n                    this.createRenderer(paymentMethodData);\n                }\n            }, this);\n        },\n\n        /**\n         * re-intialises Amazon wallet widget\n         * @private\n         */\n        _reInitializeAmazonWalletWidget: function () {\n            var child = this.getChild('amazon_payment');\n\n            if (child) {\n                child.renderPaymentWidget();\n            }\n        },\n\n        /**\n         * hides editable content and links to prevent unexptect behaviour\n         * @private\n         */\n        _hideEditableOptions: function () {\n            $('.payment-option.discount-code', '#payment').remove();\n            $('.action-edit', '.shipping-information').remove();\n            $('.opc-progress-bar-item._complete', '.opc-progress-bar').addClass('lock-step');\n        }\n    });\n});\n"}
}});
