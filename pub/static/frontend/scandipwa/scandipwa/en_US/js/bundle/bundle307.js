require.config({"config": {
        "jsbuild":{"Magento_Ui/js/grid/columns/expandable.js":"/**\n * Copyright \u00a9 2016 Magento. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    './column',\n    'underscore'\n], function (Column, _) {\n    'use strict';\n\n    return Column.extend({\n        defaults: {\n            bodyTmpl: 'ui/grid/cells/expandable',\n            tooltipTmpl: 'ui/grid/cells/expandable/content',\n            visibeItemsLimit: 5,\n            tooltipTitle: ''\n        },\n\n        /**\n         * Gets label from full options array.\n         *\n         * @param {Object} record - Record object.\n         * @returns {String}\n         */\n        getFullLabel: function (record) {\n            return this.getLabelsArray(record).join(', ');\n        },\n\n        /**\n         * Gets label from options array limited by 'visibeItemsLimit'.\n         *\n         * @param {Object} record - Record object.\n         * @returns {String}\n         */\n        getShortLabel: function (record) {\n            return this.getLabelsArray(record).slice(0, this.visibeItemsLimit).join(', ');\n        },\n\n        /**\n         * Extracts array of labels associated with provided values and sort it alphabetically.\n         *\n         * @param {Object} record - Record object.\n         * @returns {Array}\n         */\n        getLabelsArray: function (record) {\n            var values = this.getLabel(record),\n                options = this.options || [],\n                labels = [];\n\n            if (_.isString(values)) {\n                values = values.split(',');\n            }\n\n            if (!Array.isArray(values)) {\n                values = [values];\n            }\n\n            values = values.map(function (value) {\n                return value + '';\n            });\n\n            options = this.flatOptions(options);\n\n            options.forEach(function (item) {\n                if (_.contains(values, item.value + '')) {\n                    labels.push(item.label);\n                }\n            });\n\n            return labels.sort(\n                function (labelFirst, labelSecond) {\n                    return labelFirst.toLowerCase().localeCompare(labelSecond.toLowerCase());\n                }\n            );\n        },\n\n        /**\n         * Transformation tree options structure to liner array.\n         *\n         * @param {Array} options\n         * @returns {Array}\n         */\n        flatOptions: function (options) {\n            var self = this;\n\n            return options.reduce(function (opts, option) {\n                if (_.isArray(option.value)) {\n                    opts = opts.concat(self.flatOptions(option.value));\n                } else {\n                    opts.push(option);\n                }\n\n                return opts;\n            }, []);\n        },\n\n        /**\n         * Checks if amount of options is more than limit value.\n         *\n         * @param {Object} record - Data to be preprocessed.\n         * @returns {Boolean}\n         */\n        isExpandable: function (record) {\n            return this.getLabel(record).length > this.visibeItemsLimit;\n        }\n    });\n});\n"}
}});