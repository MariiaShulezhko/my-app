require.config({"config": {
        "jsbuild":{"mage/utils/main.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine(function (require) {\n    'use strict';\n\n    var utils = {},\n        _ = require('underscore');\n\n    return _.extend(\n        utils,\n        require('./arrays'),\n        require('./compare'),\n        require('./misc'),\n        require('./objects'),\n        require('./strings'),\n        require('./template')\n    );\n});\n"}
}});
