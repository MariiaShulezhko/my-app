require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/view/validation-message.js":"define([\n    'ko',\n    'uiComponent',\n    'Vertex_AddressValidation/js/model/address-difference-template-renderer',\n    'Vertex_AddressValidation/js/validation-messages'\n], function (ko, Component, differenceRenderer, validationMessages) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            template: 'Vertex_AddressValidation/validation-message',\n            cleanseAddressTemplate: 'Vertex_AddressValidation/template/validation-result.html',\n            showSuccessMessage: false,\n            message: {},\n            address: null,\n            hasMessage: false,\n            tracks: {\n                showSuccessMessage: true,\n                message: true\n            }\n        },\n\n        templateRenderer: null,\n\n        initialize: function () {\n            this._super();\n            this.templateRenderer = new differenceRenderer(this.cleanseAddressTemplate);\n            return this;\n        },\n\n        /**\n         * Initializes observable properties.\n         *\n         * @returns {Model} Chainable.\n         */\n        initObservable: function () {\n            this.address = ko.observable();\n\n            this.hasMessage = ko.pureComputed(function() {\n                return this._objectHasEntries(this.message);\n            }.bind(this));\n\n            this.renderedTemplate = ko.pureComputed(function () {\n                const templateVariables = {\n                    message: {\n                        text: this.message.text,\n                        differences: this.message.differences\n                    },\n                    address: this.address()\n                };\n\n                for (let index = 0,length = this.message.differences.length;index < length;++index) {\n                    if (this.message.differences[index].type === 'street') {\n                        templateVariables.warning = validationMessages.streetAddressUpdateWarning;\n                        break;\n                    }\n                }\n\n                return this.templateRenderer.render(templateVariables);\n            }.bind(this));\n\n            return this._super();\n        },\n\n\n        /**\n         * Sets a success message\n         *\n         * @param {String} text\n         * @param {Object} differences\n         */\n        setSuccessMessage: function (text, differences) {\n            this.setMessage(0, 'message success', text, differences || []);\n        },\n\n        /**\n         * Sets a warning message\n         *\n         * @param {String} text\n         * @param {Object} differences\n         * @param {CleanAddress} address\n         */\n        setWarningMessage: function (text, differences, address) {\n            this.address(address || {});\n            this.setMessage(1, 'message warning', text, differences || []);\n        },\n\n        /**\n         * Sets a message\n         *\n         * @param {Integer} type\n         * @param {String} cssClass\n         * @param {String} text\n         * @param {Object} differences\n         */\n        setMessage: function (type, cssClass, text, differences) {\n            this.message = {\n                type: type,\n                text: text,\n                class: cssClass || '',\n                differences: differences || []\n            };\n        },\n\n        /**\n         * Returns if message exists\n         *\n         * @returns {Boolean}\n         */\n        hasMessage: function () {\n            return ko.computed(function () {\n                return this._objectHasEntries(this.message);\n            }.bind(this));\n        },\n\n        /**\n         * Returns message\n         *\n         * {Object}\n         */\n        clear: function () {\n            this.message = {};\n        },\n\n        /**\n         * Return whether or not the object has any entries\n         *\n         * Object.entries is not supported by IE11 or Opera Mini.\n         * Writing a quick method to serve the same purpose was easier than\n         * importing a shim.\n         *\n         * @param {Object} object\n         * @returns {boolean}\n         * @private\n         */\n        _objectHasEntries: function(object) {\n            if (typeof Object.entries !== 'undefined') {\n                return Object.entries(object).length !== 0;\n            }\n            for (let key in object) {\n                if (object.hasOwnProperty(key)) {\n                    return true;\n                }\n            }\n        },\n    });\n});\n"}
}});
