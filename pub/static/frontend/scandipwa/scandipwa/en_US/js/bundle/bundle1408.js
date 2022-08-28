require.config({"config": {
        "text":{"Magento_OfflinePayments/template/payment/banktransfer.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n -->\n<div class=\"payment-method\" data-bind=\"css: {'_active': (getCode() == isChecked())}\">\n    <div class=\"payment-method-title field choice\">\n        <input type=\"radio\"\n               name=\"payment[method]\"\n               class=\"radio\"\n               data-bind=\"attr: {'id': getCode()}, value: getCode(), checked: isChecked, click: selectPaymentMethod, visible: isRadioButtonVisible()\" />\n        <label data-bind=\"attr: {'for': getCode()}\" class=\"label\"><span data-bind=\"text: getTitle()\"></span></label>\n    </div>\n\n    <div class=\"payment-method-content\">\n        <!-- ko foreach: getRegion('messages') -->\n        <!-- ko template: getTemplate() --><!-- /ko -->\n        <!--/ko-->\n        <div class=\"payment-method-billing-address\">\n            <!-- ko foreach: $parent.getRegion(getBillingAddressFormName()) -->\n            <!-- ko template: getTemplate() --><!-- /ko -->\n            <!--/ko-->\n        </div>\n        <p data-bind=\"html: getInstructions()\"></p>\n        <div class=\"checkout-agreements-block\">\n            <!-- ko foreach: $parent.getRegion('before-place-order') -->\n                <!-- ko template: getTemplate() --><!-- /ko -->\n            <!--/ko-->\n        </div>\n        <div class=\"actions-toolbar\">\n            <div class=\"primary\">\n                <button class=\"action primary checkout\"\n                        type=\"submit\"\n                        data-bind=\"\n                        click: placeOrder,\n                        attr: {'title': $t('Place Order')},\n                        enable: (getCode() == isChecked()),\n                        css: {disabled: !isPlaceOrderActionAllowed()}\n                        \"\n                        disabled>\n                    <span data-bind=\"i18n: 'Place Order'\"></span>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n"}
}});
