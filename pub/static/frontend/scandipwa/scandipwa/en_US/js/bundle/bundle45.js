require.config({"config": {
        "jsbuild":{"Magento_Theme/js/theme.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mage/smart-keyboard-handler',\n    'mage/mage',\n    'mage/ie-class-fixer',\n    'domReady!'\n], function ($, keyboardHandler) {\n    'use strict';\n\n    $('.cart-summary').mage('sticky', {\n        container: '#maincontent'\n    });\n\n    $('.panel.header > .header.links').clone().appendTo('#store\\\\.links');\n\n    keyboardHandler.apply();\n});\n"}
}});
