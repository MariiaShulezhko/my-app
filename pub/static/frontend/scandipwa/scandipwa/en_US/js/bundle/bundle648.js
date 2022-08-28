require.config({"config": {
        "jsbuild":{"Magento_Downloadable/js/downloadable.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n/**\n * @api\n */\ndefine([\n    'jquery',\n    'jquery-ui-modules/widget',\n    'Magento_Catalog/js/price-box'\n], function ($) {\n    'use strict';\n\n    /**\n     * Downloadable widget\n     */\n    $.widget('mage.downloadable', {\n        options: {\n            priceHolderSelector: '.price-box'\n        },\n\n        /**\n         *  @inheritdoc\n         */\n        _create: function () {\n            var self = this;\n\n            this.element.find(this.options.linkElement).on('change', $.proxy(function () {\n                this._reloadPrice();\n            }, this));\n\n            this.element.find(this.options.allElements).on('change', function () {\n                if (this.checked) {\n                    $('label[for=\"' + this.id + '\"] > span').text($(this).attr('data-checked'));\n                    self.element.find(self.options.linkElement + ':not(:checked)').each(function () {\n                        $(this).trigger('click');\n                    });\n                } else {\n                    $('[for=\"' + this.id + '\"] > span').text($(this).attr('data-notchecked'));\n                    self.element.find(self.options.linkElement + ':checked').each(function () {\n                        $(this).trigger('click');\n                    });\n                }\n            });\n\n            this._reloadPrice();\n        },\n\n        /**\n         * Reload product price with selected link price included\n         * @private\n         */\n        _reloadPrice: function () {\n            var finalPrice = 0,\n                basePrice = 0;\n\n            this.element.find(this.options.linkElement + ':checked').each($.proxy(function (index, element) {\n                finalPrice += this.options.config.links[$(element).val()].finalPrice;\n                basePrice += this.options.config.links[$(element).val()].basePrice;\n            }, this));\n\n            $(this.options.priceHolderSelector).trigger('updatePrice', {\n                'prices': {\n                    'finalPrice': {\n                        'amount': finalPrice\n                    },\n                    'basePrice': {\n                        'amount': basePrice\n                    }\n                }\n            });\n\n            this.reloadAllCheckText();\n        },\n\n        /**\n         * Reload all-elements-checkbox's label\n         * @private\n         */\n        reloadAllCheckText: function () {\n            var allChecked = true,\n                allElementsCheck = $(this.options.allElements),\n                allElementsLabel = $('label[for=\"' + allElementsCheck.attr('id') + '\"] > span');\n\n            $(this.options.linkElement).each(function () {\n                if (!this.checked) {\n                    allChecked = false;\n                }\n            });\n\n            if (allChecked) {\n                allElementsLabel.text(allElementsCheck.attr('data-checked'));\n                allElementsCheck.prop('checked', true);\n            } else {\n                allElementsLabel.text(allElementsCheck.attr('data-notchecked'));\n                allElementsCheck.prop('checked', false);\n            }\n        }\n    });\n\n    return $.mage.downloadable;\n});\n"}
}});