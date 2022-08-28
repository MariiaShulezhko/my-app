require.config({"config": {
        "jsbuild":{"Magento_CheckoutAgreements/js/model/place-order-mixin.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mage/utils/wrapper',\n    'Magento_CheckoutAgreements/js/model/agreements-assigner'\n], function ($, wrapper, agreementsAssigner) {\n    'use strict';\n\n    return function (placeOrderAction) {\n\n        /** Override default place order action and add agreement_ids to request */\n        return wrapper.wrap(placeOrderAction, function (originalAction, paymentData, messageContainer) {\n            agreementsAssigner(paymentData);\n\n            return originalAction(paymentData, messageContainer);\n        });\n    };\n});\n"}
}});
