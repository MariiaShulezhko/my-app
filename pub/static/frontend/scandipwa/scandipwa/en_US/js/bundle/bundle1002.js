require.config({"config": {
        "jsbuild":{"Magento_Payment/js/transparent.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* @api */\ndefine([\n    'jquery',\n    'mage/template',\n    'Magento_Ui/js/modal/alert',\n    'jquery-ui-modules/widget',\n    'Magento_Payment/js/model/credit-card-validation/validator',\n    'Magento_Checkout/js/model/full-screen-loader'\n], function ($, mageTemplate, alert, ui, validator, fullScreenLoader) {\n    'use strict';\n\n    $.widget('mage.transparent', {\n        options: {\n            context: null,\n            placeOrderSelector: '[data-role=\"review-save\"]',\n            paymentFormSelector: '#co-payment-form',\n            updateSelectorPrefix: '#checkout-',\n            updateSelectorSuffix: '-load',\n            hiddenFormTmpl:\n                '<form target=\"<%= data.target %>\" action=\"<%= data.action %>\" method=\"POST\" ' +\n                'hidden enctype=\"application/x-www-form-urlencoded\" class=\"no-display\">' +\n                    '<% _.each(data.inputs, function(val, key){ %>' +\n                    '<input value=\"<%= val %>\" name=\"<%= key %>\" type=\"hidden\">' +\n                    '<% }); %>' +\n                '</form>',\n            reviewAgreementForm: '#checkout-agreements',\n            cgiUrl: null,\n            orderSaveUrl: null,\n            controller: null,\n            gateway: null,\n            dateDelim: null,\n            cardFieldsMap: null,\n            expireYearLength: 2\n        },\n\n        /**\n         * {Function}\n         * @private\n         */\n        _create: function () {\n            this.hiddenFormTmpl = mageTemplate(this.options.hiddenFormTmpl);\n\n            if (this.options.context) {\n                this.options.context.setPlaceOrderHandler($.proxy(this._orderSave, this));\n                this.options.context.setValidateHandler($.proxy(this._validateHandler, this));\n            } else {\n                $(this.options.placeOrderSelector)\n                    .off('click')\n                    .on('click', $.proxy(this._placeOrderHandler, this));\n            }\n\n            this.element.validation();\n            $('[data-container=\"' + this.options.gateway + '-cc-number\"]').on('focusout', function () {\n                $(this).valid();\n            });\n        },\n\n        /**\n         * handler for credit card validation\n         * @return {Boolean}\n         * @private\n         */\n        _validateHandler: function () {\n            return this.element.validation && this.element.validation('isValid');\n        },\n\n        /**\n         * handler for Place Order button to call gateway for credit card validation\n         * @return {Boolean}\n         * @private\n         */\n        _placeOrderHandler: function () {\n            if (this._validateHandler()) {\n                this._orderSave();\n            }\n\n            return false;\n        },\n\n        /**\n         * Save order and generate post data for gateway call\n         * @private\n         */\n        _orderSave: function () {\n            var postData = $(this.options.paymentFormSelector).serialize();\n\n            if ($(this.options.reviewAgreementForm).length) {\n                postData += '&' + $(this.options.reviewAgreementForm).serialize();\n            }\n            postData += '&controller=' + this.options.controller;\n            postData += '&cc_type=' + this.element.find(\n                '[data-container=\"' + this.options.gateway + '-cc-type\"]'\n            ).val();\n\n            return $.ajax({\n                url: this.options.orderSaveUrl,\n                type: 'post',\n                context: this,\n                data: postData,\n                dataType: 'json',\n\n                /**\n                 * {Function}\n                 */\n                beforeSend: function () {\n                    fullScreenLoader.startLoader();\n                },\n\n                /**\n                 * {Function}\n                 */\n                success: function (response) {\n                    var preparedData,\n                        msg,\n\n                        /**\n                         * {Function}\n                         */\n                        alertActionHandler = function () {\n                            // default action\n                        };\n\n                    if (response.success && response[this.options.gateway]) {\n                        preparedData = this._preparePaymentData(\n                            response[this.options.gateway].fields,\n                            this.options.cardFieldsMap\n                        );\n                        this._postPaymentToGateway(preparedData);\n                    } else {\n                        fullScreenLoader.stopLoader(true);\n\n                        msg = response['error_messages'];\n\n                        if (this.options.context) {\n                            this.options.context.clearTimeout().fail();\n                            alertActionHandler = this.options.context.alertActionHandler;\n                        }\n\n                        if (typeof msg === 'object') {\n                            msg = msg.join('\\n');\n                        }\n\n                        if (msg) {\n                            alert(\n                                {\n                                    content: msg,\n                                    actions: {\n\n                                        /**\n                                         * {Function}\n                                         */\n                                        always: alertActionHandler\n                                    }\n                                }\n                            );\n                        }\n                    }\n                }.bind(this)\n            });\n        },\n\n        /**\n         * Post data to gateway for credit card validation\n         * @param {Object} data\n         * @private\n         */\n        _postPaymentToGateway: function (data) {\n            var tmpl,\n                iframeSelector = '[data-container=\"' + this.options.gateway + '-transparent-iframe\"]';\n\n            tmpl = this.hiddenFormTmpl({\n                data: {\n                    target: $(iframeSelector).attr('name'),\n                    action: this.options.cgiUrl,\n                    inputs: data\n                }\n            });\n            $(tmpl).appendTo($(iframeSelector)).submit();\n        },\n\n        /**\n         * Add credit card fields to post data for gateway\n         * @param {Object} data\n         * @param {Object} ccfields\n         * @private\n         */\n        _preparePaymentData: function (data, ccfields) {\n            var preparedata;\n\n            if (this.element.find('[data-container=\"' + this.options.gateway + '-cc-cvv\"]').length) {\n                data[ccfields.cccvv] = this.element.find(\n                    '[data-container=\"' + this.options.gateway + '-cc-cvv\"]'\n                ).val();\n            }\n            preparedata = this._prepareExpDate();\n            data[ccfields.ccexpdate] = preparedata.month + this.options.dateDelim + preparedata.year;\n            data[ccfields.ccnum] = this.element.find(\n                '[data-container=\"' + this.options.gateway + '-cc-number\"]'\n            ).val();\n\n            return data;\n        },\n\n        /**\n         * Grab Month and Year into one\n         * @returns {Object}\n         * @private\n         */\n        _prepareExpDate: function () {\n            var year = this.element.find('[data-container=\"' + this.options.gateway + '-cc-year\"]').val(),\n                month = parseInt(\n                    this.element.find('[data-container=\"' + this.options.gateway + '-cc-month\"]').val(),\n                    10\n                );\n\n            if (year.length > this.options.expireYearLength) {\n                year = year.substring(year.length - this.options.expireYearLength);\n            }\n\n            if (month < 10) {\n                month = '0' + month;\n            }\n\n            return {\n                month: month, year: year\n            };\n        }\n    });\n\n    return $.mage.transparent;\n});\n"}
}});
