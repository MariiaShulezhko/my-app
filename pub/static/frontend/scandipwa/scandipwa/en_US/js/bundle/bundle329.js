require.config({"config": {
        "jsbuild":{"mage/dialog.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @deprecated since version 2.2.0\n */\ndefine([\n    'jquery',\n    'jquery-ui-modules/dialog'\n], function ($) {\n    'use strict';\n\n    /**\n     * Dialog Widget - this widget is a wrapper for the jQuery UI Dialog\n     */\n    $.widget('mage.dialog', $.ui.dialog, {});\n\n    return $.mage.dialog;\n});\n"}
}});
