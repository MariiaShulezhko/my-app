require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/shipping-address/list.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'underscore',\n    'ko',\n    'mageUtils',\n    'uiComponent',\n    'uiLayout',\n    'Magento_Customer/js/model/address-list'\n], function (_, ko, utils, Component, layout, addressList) {\n    'use strict';\n\n    var defaultRendererTemplate = {\n        parent: '${ $.$data.parentName }',\n        name: '${ $.$data.name }',\n        component: 'Magento_Checkout/js/view/shipping-address/address-renderer/default',\n        provider: 'checkoutProvider'\n    };\n\n    return Component.extend({\n        defaults: {\n            template: 'Magento_Checkout/shipping-address/list',\n            visible: addressList().length > 0,\n            rendererTemplates: []\n        },\n\n        /** @inheritdoc */\n        initialize: function () {\n            this._super()\n                .initChildren();\n\n            addressList.subscribe(function (changes) {\n                    var self = this;\n\n                    changes.forEach(function (change) {\n                        if (change.status === 'added') {\n                            self.createRendererComponent(change.value, change.index);\n                        }\n                    });\n                },\n                this,\n                'arrayChange'\n            );\n\n            return this;\n        },\n\n        /** @inheritdoc */\n        initConfig: function () {\n            this._super();\n            // the list of child components that are responsible for address rendering\n            this.rendererComponents = [];\n\n            return this;\n        },\n\n        /** @inheritdoc */\n        initChildren: function () {\n            _.each(addressList(), this.createRendererComponent, this);\n\n            return this;\n        },\n\n        /**\n         * Create new component that will render given address in the address list\n         *\n         * @param {Object} address\n         * @param {*} index\n         */\n        createRendererComponent: function (address, index) {\n            var rendererTemplate, templateData, rendererComponent;\n\n            if (index in this.rendererComponents) {\n                this.rendererComponents[index].address(address);\n            } else {\n                // rendererTemplates are provided via layout\n                rendererTemplate = address.getType() != undefined && this.rendererTemplates[address.getType()] != undefined ? //eslint-disable-line\n                    utils.extend({}, defaultRendererTemplate, this.rendererTemplates[address.getType()]) :\n                    defaultRendererTemplate;\n                templateData = {\n                    parentName: this.name,\n                    name: index\n                };\n                rendererComponent = utils.template(rendererTemplate, templateData);\n                utils.extend(rendererComponent, {\n                    address: ko.observable(address)\n                });\n                layout([rendererComponent]);\n                this.rendererComponents[index] = rendererComponent;\n            }\n        }\n    });\n});\n"}
}});