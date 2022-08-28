require.config({"config": {
        "text":{"Magento_Bundle/template/product/price/minimal_price.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<if args=\"getMinimalPriceAmount($row()) < getMaximumPriceAmount($row())\">\n    <span class=\"price-container\"\n          css=\"getAdjustmentCssClasses($row())\">\n        <span if=\"label\"\n              class=\"price-label\"\n              text=\"label\"/>\n\n        <span class=\"price-wrapper\"\n              css=\"priceWrapperCssClasses\"\n              attr=\"priceWrapperAttr\"\n              data-price-amount=\"\"\n              data-price-type=\"\"\n              html=\"getMinimalPrice($row())\"/>\n\n        <each args=\"data: getAdjustments(), as: '$adj'\">\n                <render args=\"$adj.getBody()\"/>\n        </each>\n    </span>\n</if>\n"}
}});
require.config({
    bundles: {
        'mage/requirejs/static': [
            'jsbuild',
            'buildTools',
            'text',
            'statistician'
        ]
    },
    deps: [
        'jsbuild'
    ]
});
