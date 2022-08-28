require.config({"config": {
        "jsbuild":{"mage/backend/jstree-mixin.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    return function () {\n        $.jstree._themes = require.s.contexts._.config.baseUrl + 'jquery/jstree/themes/';\n    };\n});\n"}
}});
