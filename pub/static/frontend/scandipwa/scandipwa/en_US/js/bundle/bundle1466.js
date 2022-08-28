require.config({"config": {
        "text":{"Magento_Checkout/template/shipping-information/address-renderer/default.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<if args=\"visible()\">\n    <text args=\"address().prefix\"/> <text args=\"address().firstname\"/> <text args=\"address().middlename\"/>\n    <text args=\"address().lastname\"/> <text args=\"address().suffix\"/><br/>\n    <text args=\"_.values(address().street).join(', ')\"/><br/>\n    <text args=\"address().city \"/>, <span text=\"address().region\"></span> <text args=\"address().postcode\"/><br/>\n    <text args=\"getCountryName(address().countryId)\"/><br/>\n    <a if=\"address().telephone\" attr=\"'href': 'tel:' + address().telephone\" text=\"address().telephone\"></a><br/>\n\n    <each args=\"data: address().customAttributes, as: 'element'\">\n        <text args=\"$parent.getCustomAttributeLabel(element)\"/>\n        <br/>\n    </each>\n</if>\n"}
}});
