require.config({"config": {
        "jsbuild":{"Magento_Ui/js/lib/knockout/bindings/simple-checked.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'ko',\n    '../template/renderer'\n], function (ko, renderer) {\n    'use strict';\n\n    ko.bindingHandlers.simpleChecked = {\n        'after': ['attr'],\n\n        /**\n         * Implements same functionality as a standard 'simpleChecked' binding,\n         * but with a difference that it wont' change values array if\n         * value of DOM element changes.\n         */\n        init: function (element, valueAccessor) {\n            var isCheckbox = element.type === 'checkbox',\n                isRadio = element.type === 'radio',\n                updateView,\n                updateModel;\n\n            if (!isCheckbox && !isRadio) {\n                return;\n            }\n\n            /**\n             * Updates checked observable\n             */\n            updateModel = function () {\n                var  modelValue = ko.dependencyDetection.ignore(valueAccessor),\n                    isChecked = element.checked;\n\n                if (ko.computedContext.isInitial()) {\n                    return;\n                }\n\n                if (modelValue.peek() === isChecked) {\n                    return;\n                }\n\n                if (isRadio && !isChecked) {\n                    return;\n                }\n\n                modelValue(isChecked);\n            };\n\n            /**\n             * Updates checkbox state\n             */\n            updateView = function () {\n                var modelValue = ko.utils.unwrapObservable(valueAccessor());\n\n                element.checked = !!modelValue;\n            };\n\n            ko.utils.registerEventHandler(element, 'change', updateModel);\n\n            ko.computed(updateModel, null, {\n                disposeWhenNodeIsRemoved: element\n            });\n            ko.computed(updateView, null, {\n                disposeWhenNodeIsRemoved: element\n            });\n        }\n    };\n\n    ko.expressionRewriting._twoWayBindings.simpleChecked = true;\n\n    renderer.addAttribute('simpleChecked');\n    renderer.addAttribute('simple-checked', {\n        binding: 'simpleChecked'\n    });\n});\n"}
}});
