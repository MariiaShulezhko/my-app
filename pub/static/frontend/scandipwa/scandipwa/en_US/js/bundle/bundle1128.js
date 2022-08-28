require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/beforePlaceOrder.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @deprecated since version 2.2.0\n */\ndefine(['uiComponent'], function (Component) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            displayArea: 'beforePlaceOrder'\n        }\n    });\n});\n"}
}});
