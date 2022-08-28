require.config({"config": {
        "jsbuild":{"mage/layout.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @deprecated since version 2.2.0\n */\n/* eslint-disable strict */\ndefine(['underscore'], function (_) {\n    return {\n        /**\n         * @param {Object} config\n         */\n        build: function (config) {\n            var types = _.map(_.flatten(config), function (item) {\n                return item.type;\n            });\n\n            require(types, function () {});\n        }\n    };\n});\n"}
}});
