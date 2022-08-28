require.config({"config": {
        "jsbuild":{"Magento_Ui/js/form/element/file-uploader.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\n/* global Base64 */\ndefine([\n    'jquery',\n    'underscore',\n    'mageUtils',\n    'Magento_Ui/js/modal/alert',\n    'Magento_Ui/js/lib/validation/validator',\n    'Magento_Ui/js/form/element/abstract',\n    'mage/backend/notification',\n    'mage/translate',\n    'jquery/file-uploader',\n    'mage/adminhtml/tools'\n], function ($, _, utils, uiAlert, validator, Element, notification, $t) {\n    'use strict';\n\n    return Element.extend({\n        defaults: {\n            value: [],\n            aggregatedErrors: [],\n            maxFileSize: false,\n            isMultipleFiles: false,\n            placeholderType: 'document', // 'image', 'video'\n            allowedExtensions: false,\n            previewTmpl: 'ui/form/element/uploader/preview',\n            dropZone: '[data-role=drop-zone]',\n            isLoading: false,\n            uploaderConfig: {\n                dataType: 'json',\n                sequentialUploads: true,\n                formData: {\n                    'form_key': window.FORM_KEY\n                }\n            },\n            tracks: {\n                isLoading: true\n            }\n        },\n\n        /**\n         * Initializes file uploader plugin on provided input element.\n         *\n         * @param {HTMLInputElement} fileInput\n         * @returns {FileUploader} Chainable.\n         */\n        initUploader: function (fileInput) {\n            this.$fileInput = fileInput;\n\n            _.extend(this.uploaderConfig, {\n                dropZone: $(fileInput).closest(this.dropZone),\n                change: this.onFilesChoosed.bind(this),\n                drop: this.onFilesChoosed.bind(this),\n                add: this.onBeforeFileUpload.bind(this),\n                fail: this.onFail.bind(this),\n                done: this.onFileUploaded.bind(this),\n                start: this.onLoadingStart.bind(this),\n                stop: this.onLoadingStop.bind(this)\n            });\n\n            $(fileInput).fileupload(this.uploaderConfig);\n\n            return this;\n        },\n\n        /**\n         * Defines initial value of the instance.\n         *\n         * @returns {FileUploader} Chainable.\n         */\n        setInitialValue: function () {\n            var value = this.getInitialValue();\n\n            value = value.map(this.processFile, this);\n\n            this.initialValue = value.slice();\n\n            this.value(value);\n            this.on('value', this.onUpdate.bind(this));\n            this.isUseDefault(this.disabled());\n\n            return this;\n        },\n\n        /**\n         * Empties files list.\n         *\n         * @returns {FileUploader} Chainable.\n         */\n        clear: function () {\n            this.value.removeAll();\n\n            return this;\n        },\n\n        /**\n         * Checks if files list contains any items.\n         *\n         * @returns {Boolean}\n         */\n        hasData: function () {\n            return !!this.value().length;\n        },\n\n        /**\n         * Resets files list to its' initial value.\n         *\n         * @returns {FileUploader}\n         */\n        reset: function () {\n            var value = this.initialValue.slice();\n\n            this.value(value);\n\n            return this;\n        },\n\n        /**\n         * Adds provided file to the files list.\n         *\n         * @param {Object} file\n         * @returns {FileUploader} Chainable.\n         */\n        addFile: function (file) {\n            file = this.processFile(file);\n\n            this.isMultipleFiles ?\n                this.value.push(file) :\n                this.value([file]);\n\n            return this;\n        },\n\n        /**\n         * Retrieves from the list file which matches\n         * search criteria implemented in itertor function.\n         *\n         * @param {Function} fn - Function that will be invoked\n         *      for each file in the list.\n         * @returns {Object}\n         */\n        getFile: function (fn) {\n            return _.find(this.value(), fn);\n        },\n\n        /**\n         * Removes provided file from thes files list.\n         *\n         * @param {Object} file\n         * @returns {FileUploader} Chainable.\n         */\n        removeFile: function (file) {\n            this.value.remove(file);\n\n            return this;\n        },\n\n        /**\n         * May perform modifications on the provided\n         * file object before adding it to the files list.\n         *\n         * @param {Object} file\n         * @returns {Object} Modified file object.\n         */\n        processFile: function (file) {\n            file.previewType = this.getFilePreviewType(file);\n\n            if (!file.id && file.name) {\n                file.id = Base64.mageEncode(file.name);\n            }\n\n            this.observe.call(file, true, [\n                'previewWidth',\n                'previewHeight'\n            ]);\n\n            return file;\n        },\n\n        /**\n         * Formats incoming bytes value to a readable format.\n         *\n         * @param {Number} bytes\n         * @returns {String}\n         */\n        formatSize: function (bytes) {\n            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'],\n                i;\n\n            if (bytes === 0) {\n                return '0 Byte';\n            }\n\n            i = window.parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));\n\n            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];\n        },\n\n        /**\n         * Returns path to the files' preview image.\n         *\n         * @param {Object} file\n         * @returns {String}\n         */\n        getFilePreview: function (file) {\n            return file.url;\n        },\n\n        /**\n         * Returns path to the file's preview template.\n         *\n         * @returns {String}\n         */\n        getPreviewTmpl: function () {\n            return this.previewTmpl;\n        },\n\n        /**\n         * Checks if provided file is allowed to be uploaded.\n         *\n         * @param {Object} file\n         * @returns {Object} Validation result.\n         */\n        isFileAllowed: function (file) {\n            var result;\n\n            _.every([\n                this.isExtensionAllowed(file),\n                this.isSizeExceeded(file)\n            ], function (value) {\n                result = value;\n\n                return value.passed;\n            });\n\n            return result;\n        },\n\n        /**\n         * Checks if extension of provided file is allowed.\n         *\n         * @param {Object} file - File to be checked.\n         * @returns {Boolean}\n         */\n        isExtensionAllowed: function (file) {\n            return validator('validate-file-type', file.name, this.allowedExtensions);\n        },\n\n        /**\n         * Get simplified file type.\n         *\n         * @param {Object} file - File to be checked.\n         * @returns {String}\n         */\n        getFilePreviewType: function (file) {\n            var type;\n\n            if (!file.type) {\n                return 'document';\n            }\n\n            type = file.type.split('/')[0];\n\n            return type !== 'image' && type !== 'video' ? 'document' : type;\n        },\n\n        /**\n         * Checks if size of provided file exceeds\n         * defined in configuration size limits.\n         *\n         * @param {Object} file - File to be checked.\n         * @returns {Boolean}\n         */\n        isSizeExceeded: function (file) {\n            return validator('validate-max-size', file.size, this.maxFileSize);\n        },\n\n        /**\n         * Displays provided error message.\n         *\n         * @param {String} msg\n         * @returns {FileUploader} Chainable.\n         */\n        notifyError: function (msg) {\n            var data = {\n                content: msg\n            };\n\n            if (this.isMultipleFiles) {\n                data.modalClass = '_image-box';\n            }\n\n            uiAlert(data);\n\n            return this;\n        },\n\n        /**\n         * Performs data type conversions.\n         *\n         * @param {*} value\n         * @returns {Array}\n         */\n        normalizeData: function (value) {\n            return utils.isEmpty(value) ? [] : value;\n        },\n\n        /**\n         * Checks if files list is different\n         * from its' initial value.\n         *\n         * @returns {Boolean}\n         */\n        hasChanged: function () {\n            var value = this.value(),\n                initial = this.initialValue;\n\n            return !utils.equalArrays(value, initial);\n        },\n\n        /**\n         * Handler which is invoked when files are choosed for upload.\n         * May be used for implementation of additional validation rules,\n         * e.g. total files and a total size rules.\n         *\n         * @param {Event} event - Event object.\n         * @param {Object} data - File data that will be uploaded.\n         */\n        onFilesChoosed: function (event, data) {\n            // no option exists in file uploader for restricting upload chains to single files\n            // this enforces that policy\n            if (!this.isMultipleFiles) {\n                data.files.splice(1);\n            }\n        },\n\n        /**\n         * Handler which is invoked prior to the start of a file upload.\n         *\n         * @param {Event} event - Event object.\n         * @param {Object} data - File data that will be uploaded.\n         */\n        onBeforeFileUpload: function (event, data) {\n            var file = data.files[0],\n                allowed = this.isFileAllowed(file),\n                target = $(event.target);\n\n            if (this.disabled()) {\n                this.notifyError($t('The file upload field is disabled.'));\n\n                return;\n            }\n\n            if (allowed.passed) {\n                target.on('fileuploadsend', function (eventBound, postData) {\n                    postData.data.append('param_name', this.paramName);\n                }.bind(data));\n\n                target.fileupload('process', data).done(function () {\n                    data.submit();\n                });\n            } else {\n                this.aggregateError(file.name, allowed.message);\n\n                // if all files in upload chain are invalid, stop callback is never called; this resolves promise\n                if (this.aggregatedErrors.length === data.originalFiles.length) {\n                    this.uploaderConfig.stop();\n                }\n            }\n        },\n\n        /**\n         * Add error message associated with filename for display when upload chain is complete\n         *\n         * @param {String} filename\n         * @param {String} message\n         */\n        aggregateError: function (filename, message) {\n            this.aggregatedErrors.push({\n                filename: filename,\n                message: message\n            });\n        },\n\n        /**\n         * @param {Event} event\n         * @param {Object} data\n         */\n        onFail: function (event, data) {\n            console.error(data.jqXHR.responseText);\n            console.error(data.jqXHR.status);\n        },\n\n        /**\n         * Handler of the file upload complete event.\n         *\n         * @param {Event} event\n         * @param {Object} data\n         */\n        onFileUploaded: function (event, data) {\n            var uploadedFilename = data.files[0].name,\n                file = data.result,\n                error = file.error;\n\n            error ?\n                this.aggregateError(uploadedFilename, error) :\n                this.addFile(file);\n        },\n\n        /**\n         * Load start event handler.\n         */\n        onLoadingStart: function () {\n            this.isLoading = true;\n        },\n\n        /**\n         * Load stop event handler.\n         */\n        onLoadingStop: function () {\n            var aggregatedErrorMessages = [];\n\n            this.isLoading = false;\n\n            if (!this.aggregatedErrors.length) {\n                return;\n            }\n\n            if (!this.isMultipleFiles) { // only single file upload occurred; use first file's error message\n                aggregatedErrorMessages.push(this.aggregatedErrors[0].message);\n            } else { // construct message from all aggregatedErrors\n                _.each(this.aggregatedErrors, function (error) {\n                    notification().add({\n                        error: true,\n                        message: '%s' + error.message, // %s to be used as placeholder for html injection\n\n                        /**\n                         * Adds constructed error notification to aggregatedErrorMessages\n                         *\n                         * @param {String} constructedMessage\n                         */\n                        insertMethod: function (constructedMessage) {\n                            var escapedFileName = $('<div>').text(error.filename).html(),\n                                errorMsgBodyHtml = '<strong>%s</strong> %s.<br>'\n                                    .replace('%s', escapedFileName)\n                                    .replace('%s', $t('was not uploaded'));\n\n                            // html is escaped in message body for notification widget; prepend unescaped html here\n                            constructedMessage = constructedMessage.replace('%s', errorMsgBodyHtml);\n\n                            aggregatedErrorMessages.push(constructedMessage);\n                        }\n                    });\n                });\n            }\n\n            this.notifyError(aggregatedErrorMessages.join(''));\n\n            // clear out aggregatedErrors array for this completed upload chain\n            this.aggregatedErrors = [];\n        },\n\n        /**\n         * Handler function which is supposed to be invoked when\n         * file input element has been rendered.\n         *\n         * @param {HTMLInputElement} fileInput\n         */\n        onElementRender: function (fileInput) {\n            this.initUploader(fileInput);\n        },\n\n        /**\n         * Handler of the preview image load event.\n         *\n         * @param {Object} file - File associated with an image.\n         * @param {Event} event\n         */\n        onPreviewLoad: function (file, event) {\n            var img = event.currentTarget;\n\n            file.previewWidth = img.naturalWidth;\n            file.previewHeight = img.naturalHeight;\n        },\n\n        /**\n         * Restore value to default\n         */\n        restoreToDefault: function () {\n            var defaultValue = utils.copy(this.default);\n\n            defaultValue.map(this.processFile, this);\n            this.value(defaultValue);\n        },\n\n        /**\n         * Update whether value differs from default value\n         */\n        setDifferedFromDefault: function () {\n            var value = utils.copy(this.value());\n\n            this.isDifferedFromDefault(!_.isEqual(value, this.default));\n        }\n    });\n});\n"}
}});