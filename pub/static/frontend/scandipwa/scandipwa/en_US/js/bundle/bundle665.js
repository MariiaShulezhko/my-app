require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/customer-validation-mixin.js":"/**\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine(['jquery'], function ($) {\n    'use strict';\n\n    const config = window.vertexAddressValidationConfig || {};\n\n    return function (addressValidation) {\n        if (!config.enabled) {\n            return addressValidation;\n        }\n\n        $.widget('mage.addressValidation', addressValidation, {\n            _vertexValidator: null,\n            _vertexForm: null,\n\n            /**\n             * Initialize widget\n             *\n             * @returns {*}\n             * @private\n             */\n            _create: function () {\n                var result = this._super(),\n                    button = $(this.options.selectors.button, this.element);\n\n                require([\n                    'Vertex_AddressValidation/js/view/customer/address-form',\n                    'Vertex_AddressValidation/js/view/customer/address-validation'\n                ], function (addressForm, addressValidator) {\n                    this._vertexValidator = addressValidator();\n                    this._vertexForm = addressForm;\n\n                    addressForm.initialize(this.element, button);\n                    addressForm.renameSubmitButton(config.validateButtonText);\n                }.bind(this));\n\n                this.element.data('validator').settings.submitHandler = function (form) {\n                    if (this._vertexForm && this._vertexForm.isSaveAsIs) {\n                        this._vertexForm.isSaveAsIs = false;\n                        return this.submitForm(form);\n                    }\n\n                    if (this._vertexValidator && this._vertexForm) {\n                        this._vertexValidator.addressValidation(this._vertexForm.getAddress()).done(this.submitForm.bind(this, form));\n                    }\n                }.bind(this);\n\n                return result;\n            },\n\n            /**\n             * Submit form\n             *\n             * @param {Object} form\n             */\n            submitForm: function (form) {\n                if (this._vertexForm) {\n                    this._vertexForm.disableSubmitButtons();\n                }\n                form.submit();\n            }\n        });\n        return $.mage.addressValidation;\n    };\n});\n"}
}});