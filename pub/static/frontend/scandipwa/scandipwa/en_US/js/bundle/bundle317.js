require.config({"config": {
        "jsbuild":{"mage/sticky.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'jquery-ui-modules/widget'\n], function ($) {\n    'use strict';\n\n    $.widget('mage.sticky', {\n        options: {\n            /**\n             * Element selector, who's height will be used to restrict the\n             * maximum offsetTop position of the stuck element.\n             * Default uses document body.\n             * @type {String}\n             */\n            container: '',\n\n            /**\n             * Spacing in pixels above the stuck element\n             * @type {Number|Function} Number or Function that will return a Number\n             */\n            spacingTop: 0,\n\n            /**\n             * Allows postponing sticking, until element will go out of the\n             * screen for the number of pixels.\n             * @type {Number|Function} Number or Function that will return a Number\n             */\n            stickAfter: 0,\n\n            /**\n             * CSS class for active sticky state\n             * @type {String}\n             */\n            stickyClass: '_sticky'\n        },\n\n        /**\n         * Retrieve option value\n         * @param  {String} option\n         * @return {*}\n         * @private\n         */\n        _getOptionValue: function (option) {\n            var value = this.options[option] || 0;\n\n            if (typeof value === 'function') {\n                value = this.options[option]();\n            }\n\n            return value;\n        },\n\n        /**\n         * Bind handlers to scroll event\n         * @private\n         */\n        _create: function () {\n            $(window).on({\n                'scroll': $.proxy(this._stick, this),\n                'resize': $.proxy(this.reset, this)\n            });\n\n            this.element.on('dimensionsChanged', $.proxy(this.reset, this));\n\n            this.reset();\n\n            // Application of the workaround for IE11 and Edge\n            this.normalizeIE11AndEdgeScroll();\n        },\n\n        /**\n         * float Block on windowScroll\n         * @private\n         */\n        _stick: function () {\n            var offset,\n                isStatic,\n                stuck,\n                stickAfter;\n\n            isStatic = this.element.css('position') === 'static';\n\n            if (!isStatic && this.element.is(':visible')) {\n                offset = $(document).scrollTop() -\n                    this.parentOffset +\n                    this._getOptionValue('spacingTop');\n\n                offset = Math.max(0, Math.min(offset, this.maxOffset));\n\n                stuck = this.element.hasClass(this.options.stickyClass);\n                stickAfter = this._getOptionValue('stickAfter');\n\n                if (offset && !stuck && offset < stickAfter) {\n                    offset = 0;\n                }\n\n                this.element\n                    .toggleClass(this.options.stickyClass, offset > 0)\n                    .css('top', offset);\n            }\n        },\n\n        /**\n         * Defines maximum offset value of the element.\n         * @private\n         */\n        _calculateDimens: function () {\n            var $parent         = this.element.parent(),\n                topMargin       = parseInt(this.element.css('margin-top'), 10),\n                parentHeight    = $parent.height() - topMargin,\n                height          = this.element.innerHeight(),\n                maxScroll       = document.body.offsetHeight - window.innerHeight;\n\n            if (this.options.container.length > 0) {\n                maxScroll = $(this.options.container).height();\n            }\n\n            this.parentOffset   = $parent.offset().top + topMargin;\n            this.maxOffset      = maxScroll - this.parentOffset;\n\n            if (this.maxOffset + height >= parentHeight) {\n                this.maxOffset = parentHeight - height;\n            }\n\n            return this;\n        },\n\n        /**\n         * Facade method that places sticky element where it should be.\n         */\n        reset: function () {\n            this._calculateDimens()\n                ._stick();\n        },\n\n        /**\n         * Workaround for IE11 and Edge that solves the IE known rendering issue\n         * that prevents sticky element from jumpy movement on scrolling the page.\n         *\n         * Alternatively, undesired jumpy movement can be eliminated by changing the setting in IE:\n         * Settings > Internet options > Advanced tab > inside 'Browsing' item > set 'Use smooth scrolling' to False\n         */\n        normalizeIE11AndEdgeScroll: function () {\n            if (navigator.userAgent.match(/Trident.*rv[ :]*11\\.|Edge\\//)) {\n                document.body.addEventListener('mousewheel', function () {\n                    event.preventDefault();\n                    window.scrollTo(0, window.pageYOffset - event.wheelDelta);\n                });\n            }\n        }\n    });\n\n    return $.mage.sticky;\n});\n"}
}});