require.config({"config": {
        "jsbuild":{"mage/msie/file-reader.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    /**\n     * Init \"readAsBinaryString\" function for FileReader class.\n     * It need for IE11\n     * @param {Blob} fileData\n     */\n    var readAsBinaryStringIEFunc = function (fileData) {\n        var binary = '',\n            self = this,\n            reader = new FileReader();\n\n        /**\n         * Read file as binary string\n         */\n        reader.onload = function () {\n            var bytes, length, index;\n\n            /* eslint-disable no-undef */\n            bytes = new Uint8Array(reader.result);\n            /* eslint-enable */\n            length = bytes.length;\n\n            for (index = 0; index < length; index++) {\n                binary += String.fromCharCode(bytes[index]);\n            }\n            //self.result  - readonly so assign binary\n            self.content = binary;\n            $(self).trigger('onload');\n        };\n        reader.readAsArrayBuffer(fileData);\n    };\n\n    if (typeof FileReader.prototype.readAsBinaryString === 'undefined') {\n        FileReader.prototype.readAsBinaryString = readAsBinaryStringIEFunc;\n    }\n});\n"}
}});
