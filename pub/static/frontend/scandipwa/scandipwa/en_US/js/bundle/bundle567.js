require.config({"config": {
        "jsbuild":{"Magento_Customer/js/password-strength-indicator.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'Magento_Customer/js/zxcvbn',\n    'mage/translate',\n    'mage/validation'\n], function ($, zxcvbn, $t) {\n    'use strict';\n\n    $.widget('mage.passwordStrengthIndicator', {\n        options: {\n            cache: {},\n            passwordSelector: '[type=password]',\n            passwordStrengthMeterSelector: '[data-role=password-strength-meter]',\n            passwordStrengthMeterLabelSelector: '[data-role=password-strength-meter-label]',\n            formSelector: 'form',\n            emailSelector: 'input[type=\"email\"]'\n        },\n\n        /**\n         * Widget initialization\n         * @private\n         */\n        _create: function () {\n            this.options.cache.input = $(this.options.passwordSelector, this.element);\n            this.options.cache.meter = $(this.options.passwordStrengthMeterSelector, this.element);\n            this.options.cache.label = $(this.options.passwordStrengthMeterLabelSelector, this.element);\n\n            // We need to look outside the module for backward compatibility, since someone can already use the module.\n            // @todo Narrow this selector in 2.3 so it doesn't accidentally finds the email field from the\n            // newsletter email field or any other \"email\" field.\n            this.options.cache.email = $(this.options.formSelector).find(this.options.emailSelector);\n            this._bind();\n        },\n\n        /**\n         * Event binding, will monitor change, keyup and paste events.\n         * @private\n         */\n        _bind: function () {\n            this._on(this.options.cache.input, {\n                'change': this._calculateStrength,\n                'keyup': this._calculateStrength,\n                'paste': this._calculateStrength\n            });\n\n            if (this.options.cache.email.length) {\n                this._on(this.options.cache.email, {\n                    'change': this._calculateStrength,\n                    'keyup': this._calculateStrength,\n                    'paste': this._calculateStrength\n                });\n            }\n        },\n\n        /**\n         * Calculate password strength\n         * @private\n         */\n        _calculateStrength: function () {\n            var password = this._getPassword(),\n                isEmpty = password.length === 0,\n                zxcvbnScore,\n                displayScore,\n                isValid;\n\n            // Display score is based on combination of whether password is empty, valid, and zxcvbn strength\n            if (isEmpty) {\n                displayScore = 0;\n            } else {\n                this.options.cache.input.rules('add', {\n                    'password-not-equal-to-user-name': this.options.cache.email.val()\n                });\n\n                // We should only perform this check in case there is an email field on screen\n                if (this.options.cache.email.length &&\n                    password.toLowerCase() === this.options.cache.email.val().toLowerCase()) {\n                    displayScore = 1;\n                } else {\n                    isValid = $.validator.validateSingleElement(this.options.cache.input);\n                    zxcvbnScore = zxcvbn(password).score;\n                    displayScore = isValid && zxcvbnScore > 0 ? zxcvbnScore : 1;\n                }\n            }\n\n            // Update label\n            this._displayStrength(displayScore);\n        },\n\n        /**\n         * Display strength\n         * @param {Number} displayScore\n         * @private\n         */\n        _displayStrength: function (displayScore) {\n            var strengthLabel = '',\n                className;\n\n            switch (displayScore) {\n                case 0:\n                    strengthLabel = $t('No Password');\n                    className = 'password-none';\n                    break;\n\n                case 1:\n                    strengthLabel = $t('Weak');\n                    className = 'password-weak';\n                    break;\n\n                case 2:\n                    strengthLabel = $t('Medium');\n                    className = 'password-medium';\n                    break;\n\n                case 3:\n                    strengthLabel = $t('Strong');\n                    className = 'password-strong';\n                    break;\n\n                case 4:\n                    strengthLabel = $t('Very Strong');\n                    className = 'password-very-strong';\n                    break;\n            }\n\n            this.options.cache.meter\n                .removeClass()\n                .addClass(className);\n            this.options.cache.label.text(strengthLabel);\n        },\n\n        /**\n         * Get password value\n         * @returns {*}\n         * @private\n         */\n        _getPassword: function () {\n            return this.options.cache.input.val();\n        }\n    });\n\n    return $.mage.passwordStrengthIndicator;\n});\n"}
}});