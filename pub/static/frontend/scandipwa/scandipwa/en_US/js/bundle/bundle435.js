require.config({"config": {
        "jsbuild":{"Magento_InventoryInStorePickupFrontend/js/model/pickup-locations-service.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'knockout',\n    'Magento_InventoryInStorePickupFrontend/js/model/resource-url-manager',\n    'mage/storage',\n    'Magento_Customer/js/customer-data',\n    'Magento_Checkout/js/checkout-data',\n    'Magento_Checkout/js/model/address-converter',\n    'Magento_Checkout/js/action/select-shipping-address',\n    'underscore',\n    'mage/translate',\n    'mage/url'\n], function (\n    $,\n    ko,\n    resourceUrlManager,\n    storage,\n    customerData,\n    checkoutData,\n    addressConverter,\n    selectShippingAddressAction,\n    _,\n    $t,\n    url\n) {\n    'use strict';\n\n    var websiteCode = window.checkoutConfig.websiteCode,\n        countryData = customerData.get('directory-data');\n\n    return {\n        isLoading: ko.observable(false),\n        selectedLocation: ko.observable(null),\n        locationsCache: [],\n\n        /**\n         * Get shipping rates for specified address.\n         *\n         * @param {String} sourceCode\n         */\n        getLocation: function (sourceCode) {\n            var serviceUrl = resourceUrlManager.getUrlForPickupLocation(websiteCode, sourceCode);\n\n            this.isLoading(true);\n\n            return storage\n                .get(serviceUrl, {}, false)\n                .then(function (result) {\n                    var addresses = result.items || [],\n                        address = addresses[0] || {};\n\n                    return this.formatAddress(address);\n                }.bind(this))\n                .fail(function (response) {\n                    this.processError(response);\n\n                    return [];\n                }.bind(this))\n                .always(function () {\n                    this.isLoading(false);\n                }.bind(this));\n        },\n\n        /**\n         * Get nearby pickup locations based on given search criteria.\n         *\n         * @param {Object} searchCriteria - Search criteria object.\n         * @see Magento/InventoryInStorePickup/Model/SearchCriteria/GetNearbyLocationsCriteria.php\n         */\n        getNearbyLocations: function (searchCriteria) {\n            var self = this,\n                serviceUrl = resourceUrlManager.getUrlForNearbyPickupLocations(websiteCode, searchCriteria);\n\n            if (self.locationsCache[serviceUrl]) {\n                return $.Deferred().resolve(self.locationsCache[serviceUrl]).promise();\n            }\n\n            self.isLoading(true);\n\n            return storage\n                .get(serviceUrl, {}, false)\n                .then(function (result) {\n                    self.locationsCache[serviceUrl] = _.map(result.items, function (address) {\n                        return self.formatAddress(address);\n                    });\n\n                    return self.locationsCache[serviceUrl];\n                })\n                .fail(function (response) {\n                    self.processError(response);\n\n                    return [];\n                })\n                .always(function () {\n                    self.isLoading(false);\n                });\n        },\n\n        /**\n         * Select location for sipping.\n         *\n         * @param {Object} location\n         * @returns void\n         */\n        selectForShipping: function (location) {\n            var address = $.extend(\n                {},\n                addressConverter.formAddressDataToQuoteAddress({\n                    firstname: location.name,\n                    lastname: 'Store',\n                    street: location.street,\n                    city: location.city,\n                    postcode: location.postcode,\n                    'country_id': location['country_id'],\n                    telephone: location.telephone,\n                    'region_id': location['region_id'],\n                    'save_in_address_book': 0\n                }),\n                {\n                    /**\n                     * Is address can be used for billing\n                     *\n                     * @return {Boolean}\n                     */\n                    canUseForBilling: function () {\n                        return false;\n                    },\n\n                    /**\n                     * Returns address type\n                     *\n                     * @return {String}\n                     */\n                    getType: function () {\n                        return 'store-pickup-address';\n                    },\n                    'extension_attributes': {\n                        'pickup_location_code': location['pickup_location_code']\n                    }\n                }\n            );\n\n            this.selectedLocation(location);\n            selectShippingAddressAction(address);\n            checkoutData.setSelectedShippingAddress(address.getKey());\n        },\n\n        /**\n         * Formats address returned by REST endpoint to match checkout address field naming.\n         *\n         * @param {Object} address - Address object returned by REST endpoint.\n         */\n        formatAddress: function (address) {\n            return {\n                name: address.name,\n                description: address.description,\n                latitude: address.latitude,\n                longitude: address.longitude,\n                street: [address.street],\n                city: address.city,\n                postcode: address.postcode,\n                'country_id': address['country_id'],\n                country: this.getCountryName(address['country_id']),\n                telephone: address.phone,\n                'region_id': address['region_id'],\n                region: this.getRegionName(\n                    address['country_id'],\n                    address['region_id']\n                ),\n                'pickup_location_code': address['pickup_location_code']\n            };\n        },\n\n        /**\n         * Get country name by id.\n         *\n         * @param {*} countryId\n         * @return {String}\n         */\n        getCountryName: function (countryId) {\n            return countryData()[countryId] !== undefined ?\n                countryData()[countryId].name\n                : ''; //eslint-disable-line\n        },\n\n        /**\n         * Returns region name based on given country and region identifiers.\n         *\n         * @param {String} countryId - Country identifier.\n         * @param {String} regionId - Region identifier.\n         */\n        getRegionName: function (countryId, regionId) {\n            var regions = countryData()[countryId] ?\n                countryData()[countryId].regions\n                : null;\n\n            return regions && regions[regionId] ? regions[regionId].name : '';\n        },\n\n        /**\n         * Process response errors.\n         *\n         * @param {Object} response\n         * @returns void\n         */\n        processError: function (response) {\n            var expr = /([%])\\w+/g,\n                error;\n\n            if (response.status === 401) {\n                //eslint-disable-line eqeqeq\n                window.location.replace(url.build('customer/account/login/'));\n\n                return;\n            }\n\n            try {\n                error = JSON.parse(response.responseText);\n            } catch (exception) {\n                error = $t(\n                    'Something went wrong with your request. Please try again later.'\n                );\n            }\n\n            if (error.hasOwnProperty('parameters')) {\n                error = error.message.replace(expr, function (varName) {\n                    varName = varName.substr(1);\n\n                    if (error.parameters.hasOwnProperty(varName)) {\n                        return error.parameters[varName];\n                    }\n\n                    return error.parameters.shift();\n                });\n            }\n        }\n    };\n});\n"}
}});
