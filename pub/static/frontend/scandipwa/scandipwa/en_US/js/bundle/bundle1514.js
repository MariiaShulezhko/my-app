require.config({"config": {
        "text":{"Magento_Tax/template/checkout/summary/subtotal.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<!-- ko if: isBothPricesDisplayed() -->\n<tr class=\"totals sub excl\">\n    <th class=\"mark\" scope=\"row\">\n        <span data-bind=\"i18n: title\"></span>\n        <span data-bind=\"i18n: excludingTaxMessage\"></span>\n    </th>\n    <td class=\"amount\">\n        <span class=\"price\" data-bind=\"text: getValue(), attr: {'data-th': excludingTaxMessage}\"></span>\n    </td>\n</tr>\n<tr class=\"totals sub incl\">\n    <th class=\"mark\" scope=\"row\">\n        <span data-bind=\"i18n: title\"></span>\n        <span data-bind=\"i18n: includingTaxMessage\"></span>\n    </th>\n    <td class=\"amount\">\n        <span class=\"price\" data-bind=\"text: getValueInclTax(), attr: {'data-th': includingTaxMessage}\"></span>\n    </td>\n</tr>\n<!-- /ko -->\n<!-- ko if: !isBothPricesDisplayed() && isIncludingTaxDisplayed() -->\n<tr class=\"totals sub\">\n    <th data-bind=\"i18n: title\" class=\"mark\" scope=\"row\"></th>\n    <td class=\"amount\">\n        <span class=\"price\" data-bind=\"text: getValueInclTax(), attr: {'data-th': title}\"></span>\n    </td>\n</tr>\n<!-- /ko -->\n<!-- ko if: !isBothPricesDisplayed() && !isIncludingTaxDisplayed() -->\n<tr class=\"totals sub\">\n    <th data-bind=\"i18n: title\" class=\"mark\" scope=\"row\"></th>\n    <td class=\"amount\">\n        <span class=\"price\" data-bind=\"text: getValue(), attr: {'data-th': title}\"></span>\n    </td>\n</tr>\n<!-- /ko -->\n"}
}});