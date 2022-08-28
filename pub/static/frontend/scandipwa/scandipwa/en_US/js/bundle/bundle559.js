require.config({"config": {
        "jsbuild":{"Magento_Wishlist/js/add-to-wishlist.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'jquery-ui-modules/widget'\n], function ($) {\n    'use strict';\n\n    $.widget('mage.addToWishlist', {\n        options: {\n            bundleInfo: 'div.control [name^=bundle_option]',\n            configurableInfo: '.super-attribute-select',\n            groupedInfo: '#super-product-table input',\n            downloadableInfo: '#downloadable-links-list input',\n            customOptionsInfo: '.product-custom-option',\n            qtyInfo: '#qty',\n            actionElement: '[data-action=\"add-to-wishlist\"]',\n            productListWrapper: '.product-item-info',\n            productPageWrapper: '.product-info-main'\n        },\n\n        /** @inheritdoc */\n        _create: function () {\n            this._bind();\n        },\n\n        /**\n         * @private\n         */\n        _bind: function () {\n            var options = this.options,\n                dataUpdateFunc = '_updateWishlistData',\n                validateProductQty = '_validateWishlistQty',\n                changeCustomOption = 'change ' + options.customOptionsInfo,\n                changeQty = 'change ' + options.qtyInfo,\n                updateWishlist = 'click ' + options.actionElement,\n                events = {},\n                key;\n\n            if ('productType' in options) {\n                if (typeof options.productType === 'string') {\n                    options.productType = [options.productType];\n                }\n            } else {\n                options.productType = [];\n            }\n\n            events[changeCustomOption] = dataUpdateFunc;\n            events[changeQty] = dataUpdateFunc;\n            events[updateWishlist] = validateProductQty;\n\n            for (key in options.productType) {\n                if (options.productType.hasOwnProperty(key) && options.productType[key] + 'Info' in options) {\n                    events['change ' + options[options.productType[key] + 'Info']] = dataUpdateFunc;\n                }\n            }\n            this._on(events);\n        },\n\n        /**\n         * @param {jQuery.Event} event\n         * @private\n         */\n        _updateWishlistData: function (event) {\n            var dataToAdd = {},\n                isFileUploaded = false,\n                handleObjSelector = null,\n                self = this;\n\n            if (event.handleObj.selector == this.options.qtyInfo) { //eslint-disable-line eqeqeq\n                this._updateAddToWishlistButton({}, event);\n                event.stopPropagation();\n\n                return;\n            }\n\n            handleObjSelector = $(event.currentTarget).closest('form').find(event.handleObj.selector);\n\n            handleObjSelector.each(function (index, element) {\n                if ($(element).is('input[type=text]') ||\n                    $(element).is('input[type=email]') ||\n                    $(element).is('input[type=number]') ||\n                    $(element).is('input[type=hidden]') ||\n                    $(element).is('input[type=checkbox]:checked') ||\n                    $(element).is('input[type=radio]:checked') ||\n                    $(element).is('textarea') ||\n                    $('#' + element.id + ' option:selected').length\n                ) {\n                    if ($(element).data('selector') || $(element).attr('name')) {\n                        dataToAdd = $.extend({}, dataToAdd, self._getElementData(element));\n                    }\n\n                    return;\n                }\n\n                if ($(element).is('input[type=file]') && $(element).val()) {\n                    isFileUploaded = true;\n                }\n            });\n\n            if (isFileUploaded) {\n                this.bindFormSubmit();\n            }\n            this._updateAddToWishlistButton(dataToAdd, event);\n            event.stopPropagation();\n        },\n\n        /**\n         * @param {Object} dataToAdd\n         * @param {jQuery.Event} event\n         * @private\n         */\n        _updateAddToWishlistButton: function (dataToAdd, event) {\n            var self = this,\n                buttons = this._getAddToWishlistButton(event);\n\n            buttons.each(function (index, element) {\n                var params = $(element).data('post');\n\n                if (!params) {\n                    params = {\n                        'data': {}\n                    };\n                }\n\n                params.data = $.extend({}, params.data, dataToAdd, {\n                    'qty': $(self.options.qtyInfo).val()\n                });\n                $(element).data('post', params);\n            });\n        },\n\n        /**\n         * @param {jQuery.Event} event\n         * @private\n         */\n        _getAddToWishlistButton: function (event) {\n            var productListWrapper = $(event.currentTarget).closest(this.options.productListWrapper);\n\n            if (productListWrapper.length) {\n                return productListWrapper.find(this.options.actionElement);\n            }\n\n            return $(this.options.productPageWrapper).find(this.options.actionElement);\n        },\n\n        /**\n         * @param {Object} array1\n         * @param {Object} array2\n         * @return {Object}\n         * @private\n         * @deprecated\n         */\n        _arrayDiffByKeys: function (array1, array2) {\n            var result = {};\n\n            $.each(array1, function (key, value) {\n                if (key.indexOf('option') === -1) {\n                    return;\n                }\n\n                if (!array2[key]) {\n                    result[key] = value;\n                }\n            });\n\n            return result;\n        },\n\n        /**\n         * @param {HTMLElement} element\n         * @return {Object}\n         * @private\n         */\n        _getElementData: function (element) {\n            var data, elementName, elementValue;\n\n            element = $(element);\n            data = {};\n            elementName = element.data('selector') ? element.data('selector') : element.attr('name');\n            elementValue = element.val();\n\n            if (element.is('select[multiple]') && elementValue !== null) {\n                if (elementName.substr(elementName.length - 2) == '[]') { //eslint-disable-line eqeqeq\n                    elementName = elementName.substring(0, elementName.length - 2);\n                }\n                $.each(elementValue, function (key, option) {\n                    data[elementName + '[' + option + ']'] = option;\n                });\n            } else if (elementName.substr(elementName.length - 2) == '[]') { //eslint-disable-line eqeqeq, max-depth\n                elementName = elementName.substring(0, elementName.length - 2);\n\n                data[elementName + '[' + elementValue + ']'] = elementValue;\n            } else {\n                data[elementName] = elementValue;\n            }\n\n            return data;\n        },\n\n        /**\n         * @param {Object} params\n         * @param {Object} dataToAdd\n         * @private\n         * @deprecated\n         */\n        _removeExcessiveData: function (params, dataToAdd) {\n            var dataToRemove = this._arrayDiffByKeys(params.data, dataToAdd);\n\n            $.each(dataToRemove, function (key) {\n                delete params.data[key];\n            });\n        },\n\n        /**\n         * Bind form submit.\n         */\n        bindFormSubmit: function () {\n            var self = this;\n\n            $('[data-action=\"add-to-wishlist\"]').on('click', function (event) {\n                var element, params, form, action;\n\n                event.stopPropagation();\n                event.preventDefault();\n\n                element = $('input[type=file]' + self.options.customOptionsInfo);\n                params = $(event.currentTarget).data('post');\n                form = $(element).closest('form');\n                action = params.action;\n\n                if (params.data.id) {\n                    $('<input>', {\n                        type: 'hidden',\n                        name: 'id',\n                        value: params.data.id\n                    }).appendTo(form);\n                }\n\n                if (params.data.uenc) {\n                    action += 'uenc/' + params.data.uenc;\n                }\n\n                $(form).attr('action', action).submit();\n            });\n        },\n\n        /**\n         * Validate product quantity before updating Wish List\n         *\n         * @param {jQuery.Event} event\n         * @private\n         */\n        _validateWishlistQty: function (event) {\n            var element = $(this.options.qtyInfo);\n\n            if (!(element.validation() && element.validation('isValid'))) {\n                event.preventDefault();\n                event.stopPropagation();\n\n                return;\n            }\n        }\n    });\n\n    return $.mage.addToWishlist;\n});\n"}
}});
