require.config({"config": {
        "jsbuild":{"Dotdigitalgroup_Email/js/newsletterPreferences.js":"require([\n    'jquery',\n    'mage/calendar',\n    'domReady!'\n    ], function ($) {\n    'use strict';\n\n    var li = $('li a[href*=\"newsletter/manage\"]').first();\n\n    $('.date-field').each(function () {\n        $(this).calendar({\n            showTime: false\n        });\n    });\n\n    li.parent().addClass('current');\n    li.replaceWith('<strong>' + li.text() + '</strong>');\n});\n"}
}});
