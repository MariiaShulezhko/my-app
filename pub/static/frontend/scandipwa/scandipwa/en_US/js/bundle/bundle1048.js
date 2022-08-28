require.config({"config": {
        "jsbuild":{"Vertex_Tax/js/form/element/custom-option-flex-field-select.js":"/*\n * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/\n * @author     Mediotype                     https://www.mediotype.com/\n */\n\ndefine(['underscore', 'Magento_Ui/js/form/element/select'], function (_, Select) {\n    'use strict';\n\n    return Select.extend({\n        /**\n         * Overwrites the parent's filter to allow for checking if a value is\n         * in an array and for allowing the value of \"unmapped\" through all\n         * filters\n         *\n         * @param {String} value\n         * @param {String} field\n         */\n        filter: function (value, field) {\n            var source = this.initialOptions,\n                result;\n\n            field = field || this.filterBy.field;\n\n            result = _.filter(source, function (item) {\n                return Array.isArray(item[field]) && item[field].includes(value) ||\n                    item[field] === value ||\n                    item.value === '' ||\n                    item.value === 'unmapped';\n            });\n\n            this.setOptions(result);\n        }\n    });\n});\n"}
}});
