require.config({"config": {
        "jsbuild":{"Magento_ReCaptchaFrontendUi/js/reCaptcha.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* global grecaptcha */\ndefine(\n    [\n        'uiComponent',\n        'jquery',\n        'ko',\n        'underscore',\n        'Magento_ReCaptchaFrontendUi/js/registry',\n        'Magento_ReCaptchaFrontendUi/js/reCaptchaScriptLoader',\n        'Magento_ReCaptchaFrontendUi/js/nonInlineReCaptchaRenderer'\n    ], function (Component, $, ko, _, registry, reCaptchaLoader, nonInlineReCaptchaRenderer) {\n        'use strict';\n\n        return Component.extend({\n\n            defaults: {\n                template: 'Magento_ReCaptchaFrontendUi/reCaptcha',\n                reCaptchaId: 'recaptcha'\n            },\n\n            /**\n             * @inheritdoc\n             */\n            initialize: function () {\n                this._super();\n                this._loadApi();\n            },\n\n            /**\n             * Loads recaptchaapi API and triggers event, when loaded\n             * @private\n             */\n            _loadApi: function () {\n                if (this._isApiRegistered !== undefined) {\n                    if (this._isApiRegistered === true) {\n                        $(window).trigger('recaptchaapiready');\n                    }\n\n                    return;\n                }\n                this._isApiRegistered = false;\n\n                // global function\n                window.globalOnRecaptchaOnLoadCallback = function () {\n                    this._isApiRegistered = true;\n                    $(window).trigger('recaptchaapiready');\n                }.bind(this);\n\n                reCaptchaLoader.addReCaptchaScriptTag();\n            },\n\n            /**\n             * Checking that reCAPTCHA is invisible type\n             * @returns {Boolean}\n             */\n            getIsInvisibleRecaptcha: function () {\n                return this.settings.invisible;\n            },\n\n            /**\n             * reCAPTCHA callback\n             * @param {String} token\n             */\n            reCaptchaCallback: function (token) {\n                if (this.getIsInvisibleRecaptcha()) {\n                    this.tokenField.value = token;\n                    this.$parentForm.submit();\n                }\n            },\n\n            /**\n             * Initialize reCAPTCHA after first rendering\n             */\n            initCaptcha: function () {\n                var $parentForm,\n                    $wrapper,\n                    $reCaptcha,\n                    widgetId,\n                    parameters;\n\n                if (this.captchaInitialized) {\n                    return;\n                }\n\n                this.captchaInitialized = true;\n\n                /*\n                 * Workaround for data-bind issue:\n                 * We cannot use data-bind to link a dynamic id to our component\n                 * See:\n                 * https://stackoverflow.com/questions/46657573/recaptcha-the-bind-parameter-must-be-an-element-or-id\n                 *\n                 * We create a wrapper element with a wrapping id and we inject the real ID with jQuery.\n                 * In this way we have no data-bind attribute at all in our reCAPTCHA div\n                 */\n                $wrapper = $('#' + this.getReCaptchaId() + '-wrapper');\n                $reCaptcha = $wrapper.find('.g-recaptcha');\n                $reCaptcha.attr('id', this.getReCaptchaId());\n\n                $parentForm = $wrapper.parents('form');\n\n                parameters = _.extend(\n                    {\n                        'callback': function (token) { // jscs:ignore jsDoc\n                            this.reCaptchaCallback(token);\n                            this.validateReCaptcha(true);\n                        }.bind(this),\n                        'expired-callback': function () {\n                            this.validateReCaptcha(false);\n                        }.bind(this)\n                    },\n                    this.settings.rendering\n                );\n\n                if (parameters.size === 'invisible' && parameters.badge !== 'inline') {\n                    nonInlineReCaptchaRenderer.add($reCaptcha, parameters);\n                }\n\n                // eslint-disable-next-line no-undef\n                widgetId = grecaptcha.render(this.getReCaptchaId(), parameters);\n                this.initParentForm($parentForm, widgetId);\n\n                registry.ids.push(this.getReCaptchaId());\n                registry.captchaList.push(widgetId);\n                registry.tokenFields.push(this.tokenField);\n\n            },\n\n            /**\n             * Initialize parent form.\n             *\n             * @param {Object} parentForm\n             * @param {String} widgetId\n             */\n            initParentForm: function (parentForm, widgetId) {\n                var listeners;\n\n                if (this.getIsInvisibleRecaptcha() && parentForm.length > 0) {\n                    parentForm.submit(function (event) {\n                        if (!this.tokenField.value) {\n                            // eslint-disable-next-line no-undef\n                            grecaptcha.execute(widgetId);\n                            event.preventDefault(event);\n                            event.stopImmediatePropagation();\n                        }\n                    }.bind(this));\n\n                    // Move our (last) handler topmost. We need this to avoid submit bindings with ko.\n                    listeners = $._data(parentForm[0], 'events').submit;\n                    listeners.unshift(listeners.pop());\n\n                    // Create a virtual token field\n                    this.tokenField = $('<input type=\"text\" name=\"token\" style=\"display: none\" />')[0];\n                    this.$parentForm = parentForm;\n                    parentForm.append(this.tokenField);\n                } else {\n                    this.tokenField = null;\n                }\n            },\n\n            /**\n             * Validates reCAPTCHA\n             * @param {*} state\n             * @returns {jQuery}\n             */\n            validateReCaptcha: function (state) {\n                if (!this.getIsInvisibleRecaptcha()) {\n                    return $(document).find('input[type=checkbox].required-captcha').prop('checked', state);\n                }\n            },\n\n            /**\n             * Render reCAPTCHA\n             */\n            renderReCaptcha: function () {\n                if (window.grecaptcha && window.grecaptcha.render) { // Check if reCAPTCHA is already loaded\n                    this.initCaptcha();\n                } else { // Wait for reCAPTCHA to be loaded\n                    $(window).on('recaptchaapiready', function () {\n                        this.initCaptcha();\n                    }.bind(this));\n                }\n            },\n\n            /**\n             * Get reCAPTCHA ID\n             * @returns {String}\n             */\n            getReCaptchaId: function () {\n                return this.reCaptchaId;\n            }\n        });\n    });\n"}
}});
