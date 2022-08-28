require.config({"config": {
        "jsbuild":{"Amazon_Payment/js/view/shipping-address/list.js":"define([\n    'Magento_Checkout/js/view/shipping-address/list',\n    'Magento_Customer/js/model/address-list',\n    'Amazon_Payment/js/model/storage',\n    'ko'\n], function (Component, addressList, amazonStorage, ko) {\n    'use strict';\n\n    return Component.extend({\n        /**\n         * Init address list\n         */\n        initObservable: function () {\n            this._super();\n            this.visible = ko.computed(function () {\n                return addressList().length > 0 && !amazonStorage.isAmazonAccountLoggedIn();\n            });\n\n            return this;\n        }\n    });\n});\n"}
}});