require.config({"config": {
        "jsbuild":{"Magento_Ui/js/form/client.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'underscore',\n    'mageUtils',\n    'uiClass'\n], function ($, _, utils, Class) {\n    'use strict';\n\n    /**\n     * Before save validate request.\n     *\n     * @param {Object} data\n     * @param {String} url\n     * @param {String} selectorPrefix\n     * @param {String} messagesClass\n     * @returns {*}\n     */\n    function beforeSave(data, url, selectorPrefix, messagesClass) {\n        var save = $.Deferred();\n\n        data = utils.serialize(utils.filterFormData(data));\n        data['form_key'] = window.FORM_KEY;\n\n        if (!url || url === 'undefined') {\n            return save.resolve();\n        }\n\n        $('body').trigger('processStart');\n\n        $.ajax({\n            url: url,\n            data: data,\n\n            /**\n             * Success callback.\n             * @param {Object} resp\n             * @returns {Boolean}\n             */\n            success: function (resp) {\n                if (!resp.error) {\n                    save.resolve();\n\n                    return true;\n                }\n\n                $('body').notification('clear');\n                $.each(resp.messages || [resp.message] || [], function (key, message) {\n                    $('body').notification('add', {\n                        error: resp.error,\n                        message: message,\n\n                        /**\n                         * Insert method.\n                         *\n                         * @param {String} msg\n                         */\n                        insertMethod: function (msg) {\n                            var $wrapper = $('<div/>').addClass(messagesClass).html(msg);\n\n                            $('.page-main-actions', selectorPrefix).after($wrapper);\n                            $('html, body').animate({\n                                scrollTop: $('.page-main-actions', selectorPrefix).offset().top\n                            });\n                        }\n                    });\n                });\n            },\n\n            /**\n             * Complete callback.\n             */\n            complete: function () {\n                $('body').trigger('processStop');\n            }\n        });\n\n        return save.promise();\n    }\n\n    return Class.extend({\n\n        /**\n         * Assembles data and submits it using 'utils.submit' method\n         */\n        save: function (data, options) {\n            var url = this.urls.beforeSave,\n                save = this._save.bind(this, data, options);\n\n            beforeSave(data, url, this.selectorPrefix, this.messagesClass).then(save);\n\n            return this;\n        },\n\n        /**\n         * Save data.\n         *\n         * @param {Object} data\n         * @param {Object} options\n         * @returns {Object}\n         * @private\n         */\n        _save: function (data, options) {\n            var url = this.urls.save;\n\n            $('body').trigger('processStart');\n            options = options || {};\n\n            if (!options.redirect) {\n                url += 'back/edit';\n            }\n\n            if (options.ajaxSave) {\n                utils.ajaxSubmit({\n                    url: url,\n                    data: data\n                }, options);\n\n                $('body').trigger('processStop');\n\n                return this;\n            }\n\n            utils.submit({\n                url: url,\n                data: data\n            }, options.attributes);\n\n            return this;\n        }\n    });\n});\n"}
}});