require.config({"config": {
        "text":{"Magento_Checkout/template/summary/item/details/thumbnail.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<span class=\"product-image-container\"\n      data-bind=\"attr: {'style': 'height: ' + getHeight($parents[1])/2 + 'px; width: ' + getWidth($parents[1])/2 + 'px;' }\">\n    <span class=\"product-image-wrapper\">\n        <img\n            data-bind=\"attr: {'src': getSrc($parents[1]), 'width': getWidth($parents[1]), 'height': getHeight($parents[1]), 'alt': getAlt($parents[1]), 'title': getAlt($parents[1]) }\"/>\n    </span>\n</span>\n"}
}});
