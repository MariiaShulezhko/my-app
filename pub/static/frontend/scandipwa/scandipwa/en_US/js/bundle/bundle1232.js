require.config({"config": {
        "jsbuild":{"Dotdigitalgroup_Sms/js/setAdditionalParams.js":"define([\n    'underscore',\n    'mageUtils',\n    'uiLayout',\n    'uiElement',\n    'Magento_Ui/js/lib/validation/validator'\n], function (_, utils, layout, Element, validator) {\n    'use strict';\n\n    var mixin = {\n        /**\n         *\n         */\n        validate: function () {\n            if (this.elementTmpl === 'Dotdigitalgroup_Sms/form/element/telephone') {\n                this.validationParams = {\n                    uid: this.uid\n                };\n            }\n            this._super();\n        }\n    };\n\n    return function (target) {\n        return target.extend(mixin);\n    };\n});\n"}
}});
