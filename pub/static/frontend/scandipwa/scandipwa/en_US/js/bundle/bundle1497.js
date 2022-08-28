require.config({"config": {
        "text":{"Magento_Catalog/template/product/price/minimal_price.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<if args=\"showMinimalPrice\">\n    <if args=\"useLinkForAsLowAs\">\n        <a attr=\"href: $row().url\"\n           class=\"minimal-price-link\"\n           html=\"getMinimalPrice($row())\"/>\n    </if>\n\n    <ifnot args=\"useLinkForAsLowAs\">\n        <span class=\"minimal-price-link\"\n              html=\"getMinimalPrice($row())\"/>\n    </ifnot>\n</if>\n"}
}});
