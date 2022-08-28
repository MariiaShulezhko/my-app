require.config({"config": {
        "text":{"Magento_Tax/template/checkout/cart/totals/shipping.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<!-- ko if: isCalculated() && quoteIsVirtual == 0 -->\n    <!-- ko if: isBothPricesDisplayed() -->\n    <tr class=\"totals shipping excl\">\n        <th class=\"mark\" scope=\"row\">\n            <span class=\"label\" data-bind=\"text: title + ' ' + excludingTaxMessage\"></span>\n            <!-- ko if: haveToShowCoupon() -->\n                <span class=\"label description\" data-bind=\"text: getCouponDescription()\"></span>\n            <!-- /ko -->\n            <span class=\"value\" data-bind=\"text: getShippingMethodTitle()\"></span>\n        </th>\n        <td class=\"amount\">\n            <span class=\"price\"\n                  data-bind=\"text: getExcludingValue(), attr: {'data-th': excludingTaxMessage}\"></span>\n        </td>\n    </tr>\n    <tr class=\"totals shipping incl\">\n        <th class=\"mark\" scope=\"row\">\n            <span class=\"label\" data-bind=\"text: title + ' ' + includingTaxMessage\"></span>\n            <!-- ko if: haveToShowCoupon() -->\n                <span class=\"label description\" data-bind=\"text: getCouponDescription()\"></span>\n            <!-- /ko -->\n            <span class=\"value\" data-bind=\"text: getShippingMethodTitle()\"></span>\n        </th>\n        <td class=\"amount\">\n            <span class=\"price\"\n                  data-bind=\"text: getIncludingValue(), attr: {'data-th': title + ' ' + excludingTaxMessage}\"></span>\n        </td>\n    </tr>\n    <!-- /ko -->\n    <!-- ko if: isIncludingDisplayed() -->\n    <tr class=\"totals shipping incl\">\n        <th class=\"mark\" scope=\"row\">\n            <span class=\"label\" data-bind=\"i18n: title\"></span>\n            <!-- ko if: haveToShowCoupon() -->\n                <span class=\"label description\" data-bind=\"text: getCouponDescription()\"></span>\n            <!-- /ko -->\n            <span class=\"value\" data-bind=\"text: getShippingMethodTitle()\"></span>\n        </th>\n        <td class=\"amount\">\n            <span class=\"price\"\n                  data-bind=\"text: getIncludingValue(), attr: {'data-th': title}\"></span>\n        </td>\n    </tr>\n    <!-- /ko -->\n    <!-- ko if: isExcludingDisplayed() -->\n    <tr class=\"totals shipping excl\">\n        <th class=\"mark\" scope=\"row\">\n            <span class=\"label\" data-bind=\"i18n: title\"></span>\n            <!-- ko if: haveToShowCoupon() -->\n                <span class=\"label description\" data-bind=\"text: getCouponDescription()\"></span>\n            <!-- /ko -->\n            <span class=\"value\" data-bind=\"text: getShippingMethodTitle()\"></span>\n        </th>\n        <td class=\"amount\">\n            <span class=\"price\"\n                  data-bind=\"text: getValue(), attr: {'data-th': title}\"></span>\n        </td>\n    </tr>\n    <!-- /ko -->\n<!-- /ko -->\n"}
}});