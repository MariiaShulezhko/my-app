require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/configure/product-customer-data.js":"require([\n    'jquery',\n    'Magento_Customer/js/customer-data',\n    'underscore',\n    'domReady!'\n], function ($, customerData, _) {\n    'use strict';\n\n    var selectors = {\n        qtySelector: '#product_addtocart_form [name=\"qty\"]',\n        productIdSelector: '#product_addtocart_form [name=\"product\"]',\n        itemIdSelector: '#product_addtocart_form [name=\"item\"]'\n    },\n    cartData = customerData.get('cart'),\n    productId = $(selectors.productIdSelector).val(),\n    itemId = $(selectors.itemIdSelector).val(),\n    productQty,\n    productQtyInput,\n\n    /**\n    * Updates product's qty input value according to actual data\n    */\n    updateQty = function () {\n\n        if (productQty || productQty === 0) {\n            productQtyInput = productQtyInput || $(selectors.qtySelector);\n\n            if (productQtyInput && productQty.toString() !== productQtyInput.val()) {\n                productQtyInput.val(productQty);\n            }\n        }\n    },\n\n    /**\n    * Sets productQty according to cart data from customer-data\n    *\n    * @param {Object} data - cart data from customer-data\n    */\n    setProductQty = function (data) {\n        var product;\n\n        if (!(data && data.items && data.items.length && productId)) {\n            return;\n        }\n        product = _.find(data.items, function (item) {\n            if (item['item_id'] === itemId) {\n                return item['product_id'] === productId ||\n                    item['item_id'] === productId;\n            }\n        });\n\n        if (!product) {\n            return;\n        }\n        productQty = product.qty;\n    };\n\n    cartData.subscribe(function (updateCartData) {\n        setProductQty(updateCartData);\n        updateQty();\n    });\n\n    setProductQty(cartData());\n    updateQty();\n});\n"}
}});
