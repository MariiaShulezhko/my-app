require.config({"config": {
        "jsbuild":{"Magento_Ui/js/grid/editing/record.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'underscore',\n    'mageUtils',\n    'uiLayout',\n    'uiCollection'\n], function (_, utils, layout, Collection) {\n    'use strict';\n\n    return Collection.extend({\n        defaults: {\n            active: true,\n            hasChanges: false,\n            fields: [],\n            errorsCount: 0,\n            fieldTmpl: 'ui/grid/editing/field',\n            rowTmpl: 'ui/grid/editing/row',\n            templates: {\n                fields: {\n                    base: {\n                        parent: '${ $.$data.record.name }',\n                        name: '${ $.$data.column.index }',\n                        provider: '${ $.$data.record.name }',\n                        dataScope: 'data.${ $.$data.column.index }',\n                        imports: {\n                            disabled: '${ $.$data.record.parentName }:fields.${ $.$data.column.index }.disabled'\n                        },\n                        isEditor: true\n                    },\n                    text: {\n                        component: 'Magento_Ui/js/form/element/abstract',\n                        template: 'ui/form/element/input'\n                    },\n                    date: {\n                        component: 'Magento_Ui/js/form/element/date',\n                        template: 'ui/form/element/date',\n                        dateFormat: 'MMM d, y h:mm:ss a'\n                    },\n                    select: {\n                        component: 'Magento_Ui/js/form/element/select',\n                        template: 'ui/form/element/select',\n                        options: '${ JSON.stringify($.$data.column.options) }'\n                    }\n                }\n            },\n            ignoreTmpls: {\n                data: true\n            },\n            listens: {\n                elems: 'updateFields',\n                data: 'updateState'\n            },\n            imports: {\n                onColumnsUpdate: '${ $.columnsProvider }:elems'\n            },\n            modules: {\n                columns: '${ $.columnsProvider }',\n                editor: '${ $.editorProvider }'\n            }\n        },\n\n        /**\n         * Initializes record component.\n         *\n         * @returns {Record} Chainable.\n         */\n        initialize: function () {\n            _.bindAll(this, 'countErrors');\n            utils.limit(this, 'updateState', 10);\n\n            return this._super();\n        },\n\n        /**\n         * Initializes observable properties.\n         *\n         * @returns {Record} Chainable.\n         */\n        initObservable: function () {\n            this._super()\n                .track('errorsCount hasChanges')\n                .observe('active fields');\n\n            return this;\n        },\n\n        /**\n         * Adds listeners on a field.\n         *\n         * @returns {Record} Chainable.\n         */\n        initElement: function (field) {\n            field.on('error', this.countErrors);\n\n            return this._super();\n        },\n\n        /**\n         * Creates new instance of a field.\n         *\n         * @param {Column} column - Column instance which contains field definition.\n         * @returns {Record} Chainable.\n         */\n        initField: function (column) {\n            var field = this.buildField(column);\n\n            layout([field]);\n\n            return this;\n        },\n\n        /**\n         * Builds fields' configuration described in a provided column.\n         *\n         * @param {Column} column - Column instance which contains field definition.\n         * @returns {Object} Complete fields' configuration.\n         */\n        buildField: function (column) {\n            var fields = this.templates.fields,\n                field  = column.editor;\n\n            if (_.isObject(field) && field.editorType) {\n                field = utils.extend({}, fields[field.editorType], field);\n            } else if (_.isString(field)) {\n                field = fields[field];\n            }\n\n            field = utils.extend({}, fields.base, field);\n\n            return utils.template(field, {\n                record: this,\n                column: column\n            }, true, true);\n        },\n\n        /**\n         * Creates fields for the specified columns.\n         *\n         * @param {Array} columns - An array of column instances.\n         * @returns {Record} Chainable.\n         */\n        createFields: function (columns) {\n            columns.forEach(function (column) {\n                if (column.editor && !this.hasChild(column.index)) {\n                    this.initField(column);\n                }\n            }, this);\n\n            return this;\n        },\n\n        /**\n         * Returns instance of a column found by provided index.\n         *\n         * @param {String} index - Index of a column (e.g. 'title').\n         * @returns {Column}\n         */\n        getColumn: function (index) {\n            return this.columns().getChild(index);\n        },\n\n        /**\n         * Returns records' current data object.\n         *\n         * @returns {Object}\n         */\n        getData: function () {\n            return this.filterData(this.data);\n        },\n\n        /**\n         * Returns saved records' data. Data will be processed\n         * with a 'filterData' and 'normalizeData' methods.\n         *\n         * @returns {Object} Saved records' data.\n         */\n        getSavedData: function () {\n            var editor      = this.editor(),\n                savedData   = editor.getRowData(this.index);\n\n            savedData = this.filterData(savedData);\n\n            return this.normalizeData(savedData);\n        },\n\n        /**\n         * Replaces current records' data with the provided one.\n         *\n         * @param {Object} data - New records data.\n         * @param {Boolean} [partial=false] - Flag that defines whether\n         *      to completely replace current data or to extend it.\n         * @returns {Record} Chainable.\n         */\n        setData: function (data, partial) {\n            var currentData = partial ? this.data : {};\n\n            data = this.normalizeData(data);\n            data = utils.extend({}, currentData, data);\n\n            this.set('data', data)\n                .updateState();\n\n            return this;\n        },\n\n        /**\n         * Filters provided object extracting from it values\n         * that can be matched with an existing fields.\n         *\n         * @param {Object} data - Object to be processed.\n         * @returns {Object}\n         */\n        filterData: function (data) {\n            var fields = _.pluck(this.elems(), 'index');\n\n            _.each(this.preserveFields, function (enabled, field) {\n                if (enabled && !_.contains(fields, field)) {\n                    fields.push(field);\n                }\n            });\n\n            return _.pick(data, fields);\n        },\n\n        /**\n         * Parses values of a provided object with\n         * a 'normalizeData' method of a corresponding field.\n         *\n         * @param {Object} data - Data to be processed.\n         * @returns {Object}\n         */\n        normalizeData: function (data) {\n            var index;\n\n            this.elems.each(function (elem) {\n                index = elem.index;\n\n                if (data.hasOwnProperty(index)) {\n                    data[index] = elem.normalizeData(data[index]);\n                }\n            });\n\n            return data;\n        },\n\n        /**\n         * Clears values of all fields.\n         *\n         * @returns {Record} Chainable.\n         */\n        clear: function () {\n            this.elems.each('clear');\n\n            return this;\n        },\n\n        /**\n         * Validates all of the available fields.\n         *\n         * @returns {Array} An array with validation results.\n         */\n        validate: function () {\n            return this.elems.map('validate');\n        },\n\n        /**\n         * Checks if all fields are valid.\n         *\n         * @returns {Boolean}\n         */\n        isValid: function () {\n            return _.every(this.validate(), 'valid');\n        },\n\n        /**\n         * Counts total errors amount across all fields.\n         *\n         * @returns {Number}\n         */\n        countErrors: function () {\n            var errorsCount = this.elems.filter('error').length;\n\n            this.errorsCount = errorsCount;\n\n            return errorsCount;\n        },\n\n        /**\n         * Returns difference between current data and its'\n         * initial state, retrieved from the records collection.\n         *\n         * @returns {Object} Object with changes descriptions.\n         */\n        checkChanges: function () {\n            var savedData   = this.getSavedData(),\n                data        = this.normalizeData(this.getData());\n\n            return utils.compare(savedData, data);\n        },\n\n        /**\n         * Updates 'fields' array filling it with available editors\n         * or with column instances if associated field is not present.\n         *\n         * @returns {Record} Chainable.\n         */\n        updateFields: function () {\n            var fields;\n\n            fields = this.columns().elems.map(function (column) {\n                return this.getChild(column.index) || column;\n            }, this);\n\n            this.fields(fields);\n\n            return this;\n        },\n\n        /**\n         * Updates state of a 'hasChanges' property.\n         *\n         * @returns {Record} Chainable.\n         */\n        updateState: function () {\n            var diff = this.checkChanges(),\n                changed = {};\n\n            this.hasChanges = !diff.equal;\n            changed[this.index] = this.data;\n            this.editor().set('changed', [changed]);\n\n            return this;\n        },\n\n        /**\n         * Checks if provided column is an actions column.\n         *\n         * @param {Column} column - Column to be checked.\n         * @returns {Boolean}\n         */\n        isActionsColumn: function (column) {\n            return column.dataType === 'actions';\n        },\n\n        /**\n         * Listener of columns provider child array changes.\n         *\n         * @param {Array} columns - Modified child elements array.\n         */\n        onColumnsUpdate: function (columns) {\n            this.createFields(columns)\n                .updateFields();\n        }\n    });\n});\n"}
}});
