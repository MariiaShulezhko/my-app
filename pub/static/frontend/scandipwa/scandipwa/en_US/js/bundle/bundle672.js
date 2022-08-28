require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/model/checkout/shipping/address-resolver.js":"/**\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine([\n    'jquery',\n    'uiRegistry',\n    'Magento_Customer/js/model/address-list',\n    'Vertex_AddressValidation/js/model/customer/address-resolver',\n    'Magento_Checkout/js/action/create-shipping-address',\n    'Magento_Checkout/js/checkout-data'\n], function ($, registry, addressList, addressResolver, createShippingAddress, checkoutData) {\n    'use strict';\n\n    addressResolver = $.extend({}, addressResolver, {\n        checkoutProvider: registry.get('checkoutProvider'),\n\n        updateFields: function (element, value) {\n            var addressData = $.extend({}, this.checkoutProvider.get('shippingAddress'));\n\n            if (element.name === 'street') {\n                // Just updating the addressData element doesn't seem to work on street inputs\n                const streetInputs = $('.form-shipping-address input[name^=\"street[\"]');\n                streetInputs.val('');\n                for(let index = 0, length = addressData[element.name].length;index < length;++index) {\n                    addressData[element.name][index] = typeof value[index] !== 'undefined' ? value[index] : '';\n                    $(streetInputs[index])\n                        .val(addressData[element.name][index]);\n                }\n            } else {\n                addressData[element.name] = value;\n            }\n\n            this.checkoutProvider.set('shippingAddress', addressData);\n            this.checkoutProvider.trigger('shippingAddress', addressData);\n\n            // Update address list containers\n            createShippingAddress(addressData);\n            checkoutData.setNewCustomerShippingAddress($.extend(true, {}, addressData));\n        }\n    });\n    return addressResolver;\n});\n"}
}});