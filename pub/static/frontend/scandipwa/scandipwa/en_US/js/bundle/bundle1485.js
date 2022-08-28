require.config({"config": {
        "text":{"Magento_Checkout/template/summary/item/details.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n\n<!-- ko foreach: getRegion('before_details') -->\n    <!-- ko template: getTemplate() --><!-- /ko -->\n<!-- /ko -->\n<div class=\"product-item-details\">\n\n    <div class=\"product-item-inner\">\n        <div class=\"product-item-name-block\">\n            <strong class=\"product-item-name\" data-bind=\"html: getNameUnsanitizedHtml($parent)\"></strong>\n            <div class=\"details-qty\">\n                <span class=\"label\"><!-- ko i18n: 'Qty' --><!-- /ko --></span>\n                <span class=\"value\" data-bind=\"text: $parent.qty\"></span>\n            </div>\n        </div>\n        <!-- ko foreach: getRegion('after_details') -->\n            <!-- ko template: getTemplate() --><!-- /ko -->\n        <!-- /ko -->\n    </div>\n\n    <!-- ko if: (JSON.parse($parent.options).length > 0)-->\n    <div class=\"product options\" data-bind=\"mageInit: {'collapsible':{'openedState': 'active'}}\">\n        <span data-role=\"title\" class=\"toggle\"><!-- ko i18n: 'View Details' --><!-- /ko --></span>\n        <div data-role=\"content\" class=\"content\">\n            <strong class=\"subtitle\"><!-- ko i18n: 'Options Details' --><!-- /ko --></strong>\n            <dl class=\"item-options\">\n                <!--ko foreach: JSON.parse($parent.options)-->\n                <dt class=\"label\" data-bind=\"text: label\"></dt>\n                    <!-- ko if: ($data.full_view)-->\n                    <!-- ko with: {full_viewUnsanitizedHtml: $data.full_view}-->\n                    <dd class=\"values\" data-bind=\"html: full_viewUnsanitizedHtml\"></dd>\n                    <!-- /ko -->\n                    <!-- /ko -->\n                    <!-- ko ifnot: ($data.full_view)-->\n                    <!-- ko with: {valueUnsanitizedHtml: $data.value}-->\n                    <dd class=\"values\" data-bind=\"html: valueUnsanitizedHtml\"></dd>\n                    <!-- /ko -->\n                    <!-- /ko -->\n                <!-- /ko -->\n            </dl>\n        </div>\n    </div>\n    <!-- /ko -->\n</div>\n<!-- ko foreach: getRegion('item_message') -->\n    <!-- ko template: getTemplate() --><!-- /ko -->\n<!-- /ko -->\n"}
}});