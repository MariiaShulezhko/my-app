require.config({"config": {
        "jsbuild":{"Magento_InventoryInStorePickupFrontend/js/view/form/element/email.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['jquery', 'Magento_Checkout/js/view/form/element/email'], function (\n    $,\n    Component\n) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            template:\n                'Magento_InventoryInStorePickupFrontend/form/element/email',\n            links: {\n                email:\n                    'checkout.steps.shipping-step.shippingAddress.customer-email:email'\n            }\n        }\n    });\n});\n"}
}});