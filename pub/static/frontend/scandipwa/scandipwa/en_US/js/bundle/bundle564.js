require.config({"config": {
        "jsbuild":{"Magento_Cookie/js/jquery.storageapi.extended.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'jquery/jquery.cookie',\n    'jquery/jquery.storageapi.min'\n], function ($) {\n    'use strict';\n\n    /**\n     *\n     * @param {Object} storage\n     * @private\n     */\n    function _extend(storage) {\n        $.extend(storage, {\n            _secure: window.cookiesConfig ? window.cookiesConfig.secure : false,\n            _samesite: window.cookiesConfig ? window.cookiesConfig.samesite : 'lax',\n\n            /**\n             * Set value under name\n             * @param {String} name\n             * @param {String} value\n             * @param {Object} [options]\n             */\n            setItem: function (name, value, options) {\n                var _default = {\n                    expires: this._expires,\n                    path: this._path,\n                    domain: this._domain,\n                    secure: this._secure,\n                    samesite: this._samesite\n                };\n\n                $.cookie(this._prefix + name, value, $.extend(_default, options || {}));\n            },\n\n            /**\n             * Set default options\n             * @param {Object} c\n             * @returns {storage}\n             */\n            setConf: function (c) {\n                if (c.path) {\n                    this._path = c.path;\n                }\n\n                if (c.domain) {\n                    this._domain = c.domain;\n                }\n\n                if (c.expires) {\n                    this._expires = c.expires;\n                }\n\n                if (typeof c.secure !== 'undefined') {\n                    this._secure = c.secure;\n                }\n\n                if (typeof c.samesite !== 'undefined') {\n                    this._samesite = c.samesite;\n                }\n\n                return this;\n            }\n        });\n    }\n\n    if (window.cookieStorage) {\n        _extend(window.cookieStorage);\n    }\n});\n"}
}});
