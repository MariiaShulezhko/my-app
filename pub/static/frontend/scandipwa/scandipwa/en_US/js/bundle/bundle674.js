require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/model/customer/address-resolver.js":"/**\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine([\n    'jquery',\n    'underscore'\n], function ($, _) {\n    'use strict';\n\n    return {\n        addressFieldsForValidation: ['city', 'postcode', 'street'],\n        responseAddressData: {},\n        formAddressData: {},\n\n        /**\n         * Will check if the response is different, same or invalid\n         *\n         * @param {Object} responseAddressData\n         * @param {Object} formAddressData\n         * @returns {Boolean|Array}\n         */\n        resolveAddressDifference: function (responseAddressData, formAddressData) {\n            var differences = [],\n                valid = [];\n\n            this.responseAddressData = responseAddressData;\n            this.formAddressData = formAddressData;\n\n            if (this.invalidErrorResponse(responseAddressData)) {\n                return [];\n            }\n\n            _.each(this.addressFieldsForValidation, function (v, i) {\n                var responseValue, value, name, isComplex,\n                    complexValues = [],\n                    isDifferent = false;\n\n                isComplex = _.isObject(formAddressData[v]) || _.isArray(formAddressData[v]);\n\n                if (responseAddressData[v] !== formAddressData[v]) {\n                    if (isComplex) {\n                        _.each(formAddressData[v], function (val, index) {\n                            if (val && responseAddressData[v][index] && val !== responseAddressData[v][index]) {\n                                complexValues[index] = responseAddressData[v][index];\n                                isDifferent = true;\n                            }\n                        });\n                    }\n\n                    if (!isDifferent && isComplex) {\n                        valid.push(v);\n                    }\n\n                    responseValue = responseAddressData[v];\n                    if (complexValues.length) {\n                        responseValue = complexValues.join(', ');\n                    }\n\n                    if (!complexValues.length && _.isArray(responseValue) || responseValue === null) {\n                        return;\n                    }\n\n                    value = responseValue.substr(0, 1).toUpperCase() + responseValue.substr(1);\n                    name = v.substr(0, 1).toUpperCase() + v.substr(1);\n                    differences.push({\n                        value: value,\n                        name: name\n                    });\n\n                    return;\n                }\n                valid[i] = v;\n            });\n\n            if (valid.length === this.addressFieldsForValidation.length && _.isEmpty(differences)) {\n                return true;\n            }\n            return differences;\n        },\n\n        /**\n         * Updates form inputs with the values from the API response\n         *\n         * @returns {*}\n         */\n        resolveAddressUpdate: function () {\n            var responseAddressData = this.responseAddressData,\n                formAddressData = this.formAddressData,\n                self = this;\n\n            _.each(this.addressFieldsForValidation, function (v) {\n                var fieldValue = responseAddressData[v],\n                    linesObj = {};\n\n                if (_.isObject(formAddressData[v])) {\n                    _.each(formAddressData[v], function (val, i) {\n                        if (fieldValue[i]) {\n                            linesObj[i] = fieldValue[i];\n                            self.updateFields({name: v, key: i}, fieldValue[i]);\n\n                            return;\n                        }\n                        linesObj[i] = val;\n                    });\n                    formAddressData[v] = linesObj;\n                    return;\n                }\n\n                formAddressData[v] = fieldValue;\n                self.updateFields({name: v}, fieldValue);\n            });\n\n            return formAddressData;\n        },\n\n        /**\n         * Update validated fields\n         *\n         * @param {Object} element\n         * @param {String} value\n         */\n        updateFields: function (element, value) {\n            if (element.key !== undefined) {\n                $('input[name=\"' + element.name + '[]\"]').eq(element.key).val(value).trigger('change');\n            } else {\n                $('input[name=\"' + element.name + '\"]').val(value).trigger('change');\n            }\n        },\n\n        /**\n         * Will check if the api response found a address\n         *\n         * @param {Object} responseData\n         * @returns {Boolean}\n         */\n        invalidErrorResponse: function (responseData) {\n            _.each(this.addressFieldsForValidation, function (v) {\n                if (_.isArray(responseData[v]) && responseData[v][0] === '') {\n                    return true;\n                }\n\n                if (responseData[v] === null) {\n                    return true;\n                }\n            });\n            return false;\n        }\n    };\n});\n"}
}});
