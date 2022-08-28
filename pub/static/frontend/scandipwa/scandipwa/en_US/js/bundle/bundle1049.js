require.config({"config": {
        "jsbuild":{"Vertex_Tax/js/model/customer-country-validation.js":"/**\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine([\n    'jquery',\n    'Vertex_Tax/js/form/depend-field-checker',\n    'jquery/validate',\n    'mage/translate'\n], function ($, dependFieldChecker) {\n    'use strict';\n\n    /**\n     * Validates if customer added a VAT number, then selecting a Country is required.\n     */\n    return function (config) {\n        $.validator.addMethod(\n            \"vertex-customer-country\",\n            function (value, element, dependField) {\n                return dependFieldChecker.validateValues(dependField, value);\n            },\n            $.mage.__(\"Please select a Country.\")\n        );\n    }\n});\n"}
}});
