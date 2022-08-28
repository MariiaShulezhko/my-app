require.config({"config": {
        "jsbuild":{"Vertex_AddressValidation/js/action/build-quote-address.js":"/*\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine([], function () {\n    'use strict';\n\n    /**\n     * Convert a Cleansed Address to a Magento Quote Address object\n     *\n     * @param {CleanAddress} address\n     * @returns {Object} quoteAddress\n     */\n    return function (address) {\n        return {\n            street: address.street_address,\n            city: address.city,\n            region: address.region_name,\n            region_id: address.region_id,\n            postcode: address.postal_code,\n            country_id: address.country_code\n        }\n    }\n})\n"}
}});
