require.config({"config": {
        "jsbuild":{"Magento_Ui/js/block-loader.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'ko',\n    'jquery',\n    'Magento_Ui/js/lib/knockout/template/loader',\n    'mage/template'\n], function (ko, $, templateLoader, template) {\n    'use strict';\n\n    var blockLoaderTemplatePath = 'ui/block-loader',\n        blockContentLoadingClass = '_block-content-loading',\n        blockLoader,\n        blockLoaderClass,\n        blockLoaderElement = $.Deferred(),\n        loaderImageHref = $.Deferred();\n\n    templateLoader.loadTemplate(blockLoaderTemplatePath).done(function (blockLoaderTemplate) {\n        loaderImageHref.done(function (loaderHref) {\n            blockLoader = template($.trim(blockLoaderTemplate), {\n                loaderImageHref: loaderHref\n            });\n            blockLoader = $(blockLoader);\n            blockLoaderClass = '.' + blockLoader.attr('class');\n            blockLoaderElement.resolve();\n        });\n    });\n\n    /**\n     * Helper function to check if blockContentLoading class should be applied.\n     * @param {Object} element\n     * @returns {Boolean}\n     */\n    function isLoadingClassRequired(element) {\n        var position = element.css('position');\n\n        if (position === 'absolute' || position === 'fixed') {\n            return false;\n        }\n\n        return true;\n    }\n\n    /**\n     * Add loader to block.\n     * @param {Object} element\n     */\n    function addBlockLoader(element) {\n        element.find(':focus').blur();\n        element.find('input:disabled, select:disabled').addClass('_disabled');\n        element.find('input, select').prop('disabled', true);\n\n        if (isLoadingClassRequired(element)) {\n            element.addClass(blockContentLoadingClass);\n        }\n        element.append(blockLoader.clone());\n    }\n\n    /**\n     * Remove loader from block.\n     * @param {Object} element\n     */\n    function removeBlockLoader(element) {\n        if (!element.has(blockLoaderClass).length) {\n            return;\n        }\n        element.find(blockLoaderClass).remove();\n        element.find('input:not(\"._disabled\"), select:not(\"._disabled\")').prop('disabled', false);\n        element.find('input:disabled, select:disabled').removeClass('_disabled');\n        element.removeClass(blockContentLoadingClass);\n    }\n\n    return function (loaderHref) {\n        loaderImageHref.resolve(loaderHref);\n        ko.bindingHandlers.blockLoader = {\n            /**\n             * Process loader for block\n             * @param {String} element\n             * @param {Boolean} displayBlockLoader\n             */\n            update: function (element, displayBlockLoader) {\n                element = $(element);\n\n                if (ko.unwrap(displayBlockLoader())) {\n                    blockLoaderElement.done(addBlockLoader(element));\n                } else {\n                    blockLoaderElement.done(removeBlockLoader(element));\n                }\n            }\n        };\n    };\n});\n"}
}});