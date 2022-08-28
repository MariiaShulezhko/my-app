require.config({"config": {
        "text":{"Magento_Ui/templates/form/field.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"field\" data-bind=\"visible: visible, attr: {'name': element.dataScope}, css: additionalClasses\">\n\n    <label class=\"label\" data-bind=\"attr: { for: element.uid }\"><!-- ko if: element.label --><span translate=\"element.label\"></span><!-- /ko --></label>\n\n    <div class=\"control\" data-bind=\"css: {'_with-tooltip': element.tooltip}\">\n        <!-- ko ifnot: element.hasAddons() -->\n            <!-- ko template: element.elementTmpl --><!-- /ko -->\n        <!-- /ko -->\n\n        <!-- ko if: element.hasAddons() -->\n            <div class=\"control-addon\">\n                <!-- ko template: element.elementTmpl --><!-- /ko -->\n\n                <!-- ko if: element.addbefore -->\n                    <label class=\"addon-prefix\" data-bind=\"attr: { for: element.uid }\"><span data-bind=\"text: element.addbefore\"></span></label>\n                <!-- /ko -->\n\n                <!-- ko if: element.addafter -->\n                    <label class=\"addon-suffix\" data-bind=\"attr: { for: element.uid }\"><span data-bind=\"text: element.addafter\"></span></label>\n                <!-- /ko -->\n            </div>\n        <!-- /ko -->\n\n        <!-- ko if: element.tooltip -->\n            <!-- ko template: element.tooltipTpl --><!-- /ko -->\n        <!-- /ko -->\n\n        <!-- ko if: element.notice -->\n            <div class=\"field-note\" data-bind=\"attr: { id: element.noticeId }\">\n                <span data-bind=\"text: element.notice\"/>\n            </div>\n        <!-- /ko -->\n\n        <!-- ko if: element.error() -->\n            <div class=\"field-error\" data-bind=\"attr: { id: element.errorId }\" generated=\"true\">\n                <span data-bind=\"text: element.error\"/>\n            </div>\n        <!-- /ko -->\n\n        <!-- ko if: element.warn() -->\n            <div role=\"alert\" class=\"message warning\" data-bind=\"attr: { id: element.warningId }\" generated=\"true\">\n                <span data-bind=\"text: element.warn\"/>\n            </div>\n        <!-- /ko -->\n    </div>\n</div>\n<!-- /ko -->\n"}
}});
