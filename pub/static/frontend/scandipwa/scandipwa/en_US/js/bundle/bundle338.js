require.config({"config": {
        "jsbuild":{"mage/edit-trigger.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @deprecated since version 2.2.0\n */\ndefine([\n    'jquery',\n    'mage/template',\n    'jquery-ui-modules/widget'\n], function ($, mageTemplate) {\n    'use strict';\n\n    var editTriggerPrototype;\n\n    $.widget('mage.editTrigger', {\n        options: {\n            img: '',\n            alt: '[TR]',\n            template: '#translate-inline-icon',\n            zIndex: 2000,\n            editSelector: '[data-translate]',\n            delay: 2000,\n            offsetTop: -3,\n            singleElement: true\n        },\n\n        /**\n         * editTriger creation\n         * @protected\n         */\n        _create: function () {\n            this.tmpl = mageTemplate(this.options.template);\n            this._initTrigger();\n            this._bind();\n        },\n\n        /**\n         * @return {Object}\n         * @private\n         */\n        _getCss: function () {\n            return {\n                position: 'absolute',\n                cursor: 'pointer',\n                display: 'none',\n                'z-index': this.options.zIndex\n            };\n        },\n\n        /**\n         * @param {*} appendTo\n         * @return {*|jQuery}\n         * @private\n         */\n        _createTrigger: function (appendTo) {\n            var tmpl = this.tmpl({\n                data: this.options\n            });\n\n            return $(tmpl)\n                .css(this._getCss())\n                .data('role', 'edit-trigger-element')\n                .appendTo(appendTo);\n        },\n\n        /**\n         * @private\n         */\n        _initTrigger: function () {\n            this.trigger = this._createTrigger($('body'));\n        },\n\n        /**\n         * Bind on mousemove event\n         * @protected\n         */\n        _bind: function () {\n            this.trigger.on('click.' + this.widgetName, $.proxy(this._onClick, this));\n            this.element.on('mousemove.' + this.widgetName, $.proxy(this._onMouseMove, this));\n        },\n\n        /**\n         * Show editTriger\n         */\n        show: function () {\n            if (this.trigger.is(':hidden')) {\n                this.trigger.show();\n            }\n        },\n\n        /**\n         * Hide editTriger\n         */\n        hide: function () {\n            this.currentTarget = null;\n\n            if (this.trigger && this.trigger.is(':visible')) {\n                this.trigger.hide();\n            }\n        },\n\n        /**\n         * Set editTriger position\n         * @protected\n         */\n        _setPosition: function (el) {\n            var offset = el.offset();\n\n            this.trigger.css({\n                top: offset.top + el.outerHeight() + this.options.offsetTop,\n                left: offset.left\n            });\n        },\n\n        /**\n         * Show/hide trigger on mouse move.\n         *\n         * @param {jQuery.Event} e\n         * @protected\n         */\n        _onMouseMove: function (e) {\n            var target = $(e.target),\n                inner = target.find(this.options.editSelector);\n\n            if ($(e.target).is('button') && inner.length) {\n                target = inner;\n            } else if (!target.is(this.trigger) && !target.is(this.options.editSelector)) {\n                target = target.parents(this.options.editSelector).first();\n            }\n\n            if (target.length) {\n                if (!target.is(this.trigger)) {\n                    this._setPosition(target);\n                    this.currentTarget = target;\n                }\n                this.show();\n            } else {\n                this.hide();\n            }\n        },\n\n        /**\n         * Trigger event \"edit\" on element for translate.\n         *\n         * @param {jQuery.Event} e\n         * @protected\n         */\n        _onClick: function (e) {\n            e.preventDefault();\n            e.stopImmediatePropagation();\n            $(this.currentTarget).trigger('edit.' + this.widgetName);\n            this.hide(true);\n        },\n\n        /**\n         * Destroy editTriger\n         */\n        destroy: function () {\n            this.trigger.remove();\n            this.element.off('.' + this.widgetName);\n\n            return $.Widget.prototype.destroy.call(this);\n        }\n    });\n\n    /**\n     * Extention for widget editTrigger - hide trigger with delay\n     */\n    editTriggerPrototype = $.mage.editTrigger.prototype;\n\n    $.widget('mage.editTrigger', $.extend({}, editTriggerPrototype, {\n        /**\n         * Added clear timeout on trigger show\n         */\n        show: function () {\n            editTriggerPrototype.show.apply(this, arguments);\n\n            if (this.options.delay) {\n                this._clearTimer();\n            }\n        },\n\n        /**\n         * Added setTimeout on trigger hide\n         */\n        hide: function (immediate) {\n            if (!immediate && this.options.delay) {\n                if (!this.timer) {\n                    this.timer = setTimeout($.proxy(function () {\n                        editTriggerPrototype.hide.apply(this, arguments);\n                        this._clearTimer();\n                    }, this), this.options.delay);\n                }\n            } else {\n                editTriggerPrototype.hide.apply(this, arguments);\n            }\n        },\n\n        /**\n         * Clear timer\n         * @protected\n         */\n        _clearTimer: function () {\n            if (this.timer) {\n                clearTimeout(this.timer);\n                this.timer = null;\n            }\n        }\n    }));\n\n    return $.mage.editTrigger;\n});\n"}
}});
