require.config({"config": {
        "jsbuild":{"Dotdigitalgroup_Email/js/roiCode.js":"define(['jquery', 'dmmpt'], function ($) {\n    'use strict';\n\n    /**\n     * ROI\n     * @param {Array} items\n     * @param {Float} total\n     */\n    function init(items, total) {\n        var fLen = items.length,\n            i = 0;\n\n        for (i; i < fLen; i++) {\n            window._dmTrack('product', items[i]);\n        }\n        window._dmTrack('CheckOutAmount', total);\n        window._dmCallHandler();\n    }\n\n    /**\n     * Export/return tracking code init\n     * @param {Object} roiCode\n     */\n    return function (roiCode) {\n        $(document).ready(function () {\n            init(roiCode.items, roiCode.total);\n        });\n    };\n});\n\n"}
}});