require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/model/step-navigator-mixin.js":"define([\n    'mage/utils/wrapper',\n    'jquery'\n], function (wrapper, $) {\n    'use strict';\n\n    let mixin = {\n        handleHash: function (originalFn) {\n            var hashString = window.location.hash.replace('#', '');\n            return (hashString.includes('venmo')) ? false : originalFn();\n        }\n    };\n\n    return function (target) {\n        return wrapper.extend(target, mixin);\n    };\n});\n"}
}});
