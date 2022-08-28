require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/paypal/product-page.js":"define(\n    ['PayPal_Braintree/js/paypal/button', 'jquery'],\n    function (button, $) {\n        'use strict';\n\n        return button.extend({\n\n            defaults: {\n                label: 'buynow',\n                branding: true,\n            },\n\n            /**\n             * The validation on the add-to-cart form is done after the PayPal window has opened.\n             * This is because the validate method exposed by the PP Button requires an event to disable/enable the button.\n             * We can't fire an event due to the way the mage.validation widget works and we can't do something gross like\n             * an interval because the validation() method shows the error messages and focuses the user's input on the\n             * first erroring input field.\n             * @param payload\n             * @returns {*}\n             */\n            beforeSubmit: function (payload) {\n                var form = $(\"#product_addtocart_form\");\n\n                if (!(form.validation() && form.validation('isValid'))) {\n                    return false;\n                }\n\n                payload.additionalData = form.serialize();\n\n                return payload;\n            }\n        });\n    }\n);"}
}});
