require.config({"config": {
        "jsbuild":{"Magento_InventoryInStorePickupFrontend/js/model/resource-url-manager.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['jquery', 'Magento_Checkout/js/model/resource-url-manager'], function (\n    $,\n    resourceUrlManager\n) {\n    'use strict';\n\n    return {\n        /**\n         * Returns URL for REST API to fetch nearby pickup locations defined for given sales channel.\n         *\n         * @param {String} salesChannelCode - Code of the sales channel.\n         * @param {Object} searchCriteria\n         */\n        getUrlForNearbyPickupLocations: function (\n            salesChannelCode,\n            searchCriteria\n        ) {\n            var urls = {\n                    default: '/inventory/in-store-pickup/pickup-locations/'\n                },\n                criteria = {\n                    searchRequest: {\n                        scopeCode: salesChannelCode\n                    }\n                };\n\n            searchCriteria = {\n                searchRequest: searchCriteria\n            };\n\n            return (\n                resourceUrlManager.getUrl(urls, {}) +\n                '?' +\n                $.param($.extend(true, criteria, searchCriteria))\n            );\n        },\n\n        /**\n         * Returns URL for REST API to fetch all pickup locations defined for given sales channel.\n         *\n         * @param {String} salesChannelType - Type of the sales channel, e.g. website.\n         * @param {String} salesChannelCode - Code of the sales channel.\n         */\n        getUrlForPickupLocationsAssignedToSalesChannel: function (\n            salesChannelType,\n            salesChannelCode\n        ) {\n            var params = {\n                    salesChannelType: salesChannelType,\n                    salesChannelCode: salesChannelCode\n                },\n                urls = {\n                    default: '/inventory/in-store-pickup/pickup-locations-assigned-to-sales-channel/' +\n                        ':salesChannelType/:salesChannelCode'\n                };\n\n            return resourceUrlManager.getUrl(urls, params);\n        },\n\n        /**\n         * Returns URL for REST API to fetch pickup location with given code defined for given sales channel.\n         *\n         * @param {String} salesChannelCode - Code of the sales channel.\n         * @param {String} pickupLocationCode - Code of the pickup location.\n         */\n        getUrlForPickupLocation: function (\n            salesChannelCode,\n            pickupLocationCode\n        ) {\n            var urls = {\n                    default: '/inventory/in-store-pickup/pickup-locations/'\n                },\n                searchRequest = {\n                    searchRequest: {\n                        filters: {\n                            pickupLocationCode: {\n                                value: pickupLocationCode\n                            }\n                        },\n                        scopeCode: salesChannelCode\n                    }\n                };\n\n            return resourceUrlManager.getUrl(urls, {}) +\n                '?' +\n                $.param(searchRequest);\n        }\n    };\n});\n"}
}});
