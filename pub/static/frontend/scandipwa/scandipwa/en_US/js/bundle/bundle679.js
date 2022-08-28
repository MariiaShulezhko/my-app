require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/view/customer/address-validation.js":"/**\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine([\n    'jquery',\n    'ko',\n    'uiRegistry',\n    'uiComponent',\n    'Vertex_AddressValidation/js/validation-messages',\n    'Vertex_AddressValidation/js/action/address-validation-request',\n    'Vertex_AddressValidation/js/model/customer/address-resolver',\n    'Vertex_AddressValidation/js/view/validation-message',\n    'Vertex_AddressValidation/js/view/customer/address-form',\n    'Vertex_AddressValidation/js/model/difference-determiner',\n    'Vertex_AddressValidation/uiRegistry!addressValidationMessage'\n], function (\n    $,\n    ko,\n    registry,\n    Component,\n    validationMessages,\n    addressValidationRequest,\n    addressResolver,\n    message,\n    addressForm,\n    differenceDeterminer,\n    addressValidationMessage\n) {\n    'use strict';\n\n    var config = window.vertexAddressValidationConfig || {};\n\n    return Component.extend({\n        message: null,\n        formAddressData: null,\n        isAddressValid: false,\n        updateAddress: false,\n        addressResolver: addressResolver,\n        correctAddress: null,\n\n        initialize: function () {\n            this._super();\n\n            this.message = addressValidationMessage;\n            addressForm.formUpdated.extend({notify: 'always'}).subscribe(this.addressUpdated.bind(this));\n\n            return this;\n        },\n\n        /**\n         * Reset validation after address update\n         */\n        addressUpdated: function () {\n            addressForm.renameSubmitButton(config.validateButtonText);\n            addressForm.hideSaveAsIsButton();\n            this.isAddressValid = false;\n            this.updateAddress = false;\n            this.message.clear();\n            this.message.showSuccessMessage = false;\n        },\n\n        /**\n         * Triggers a request to the address validation builder and adds the response\n         *\n         * @param {Object} formAddressData\n         * @returns {Object}\n         */\n        addressValidation: function (formAddressData) {\n            var deferred = $.Deferred();\n\n            if (this.isAddressValid || !this.validateCountry()) {\n                if (this.updateAddress) {\n                    this.updateVertexAddress();\n                }\n                return deferred.resolve();\n            }\n\n            this.formAddressData = formAddressData;\n            addressForm.startLoader();\n\n            addressValidationRequest(formAddressData)\n                .done(function (response) {\n                    this.isAddressValid = true;\n                    this.correctAddress = response;\n                    if (this.handleAddressDifferenceResponse(response) === true) {\n                        deferred.resolve();\n                    } else {\n                        addressForm.stopLoader();\n                    }\n                }.bind(this)).fail(function () {\n                deferred.reject();\n            }).fail(function () {\n                addressForm.stopLoader();\n            });\n\n            return deferred;\n        },\n\n        /**\n         * Check if country is used in validation\n         *\n         * @returns {boolean}\n         */\n        validateCountry: function () {\n            var countryCode = addressForm.getFieldByName('country_id').val();\n\n            return countryCode !== undefined\n                ? config.countryValidation.includes(countryCode)\n                : true;\n        },\n\n        /**\n         * Get the message with the differences\n         *\n         * @param {?CleanAddress} response\n         */\n        handleAddressDifferenceResponse: function (response) {\n            if (response === null || !Object.keys(response).length) {\n                addressForm.renameSubmitButton(config.saveAsIsButtonText);\n                this.message.setWarningMessage(validationMessages.noAddressFound);\n                return;\n            }\n\n            const differences = differenceDeterminer(this.formAddressData, response);\n\n            if (differences.length === 0 && config.showSuccessMessage) {\n                this.message.showSuccessMessage = true;\n                return true;\n            } else if (differences.length > 0) {\n                this.updateAddress = true;\n                addressForm.renameSubmitButton(config.updateButtonText);\n                addressForm.showSaveAsIsButton();\n                this.message.setWarningMessage(validationMessages.changesFound, differences, response);\n            } else {\n                return true;\n            }\n        },\n\n        /**\n         * Get the update message\n         */\n        updateVertexAddress: function () {\n            addressForm.updateAddress(differenceDeterminer(this.formAddressData, this.correctAddress));\n            this.message.setSuccessMessage(validationMessages.addressUpdated);\n\n            if (config.showSuccessMessage) {\n                this.message.showSuccessMessage = true;\n            }\n        }\n    });\n});\n"}
}});
