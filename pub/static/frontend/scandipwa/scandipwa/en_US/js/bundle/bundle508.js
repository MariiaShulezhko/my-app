require.config({"config": {
        "jsbuild":{"jquery/ui-modules/effect-bounce.js":"/*!\n * jQuery UI Effects Bounce - v1.10.4\n * http://jqueryui.com\n *\n * Copyright 2014 jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/bounce-effect/\n *\n * Depends:\n *\tjquery.ui.effect.js\n */\ndefine([\n    'jquery',\n    'jquery-ui-modules/effect'\n], function ($, undefined) {\n\n    $.effects.effect.bounce = function (o, done) {\n        var el = $(this),\n            props = [\"position\", \"top\", \"bottom\", \"left\", \"right\", \"height\", \"width\"],\n\n            // defaults:\n            mode = $.effects.setMode(el, o.mode || \"effect\"),\n            hide = mode === \"hide\",\n            show = mode === \"show\",\n            direction = o.direction || \"up\",\n            distance = o.distance,\n            times = o.times || 5,\n\n            // number of internal animations\n            anims = times * 2 + (show || hide ? 1 : 0),\n            speed = o.duration / anims,\n            easing = o.easing,\n\n            // utility:\n            ref = (direction === \"up\" || direction === \"down\") ? \"top\" : \"left\",\n            motion = (direction === \"up\" || direction === \"left\"),\n            i,\n            upAnim,\n            downAnim,\n\n            // we will need to re-assemble the queue to stack our animations in place\n            queue = el.queue(),\n            queuelen = queue.length;\n\n        // Avoid touching opacity to prevent clearType and PNG issues in IE\n        if (show || hide) {\n            props.push(\"opacity\");\n        }\n\n        $.effects.save(el, props);\n        el.show();\n        $.effects.createWrapper(el); // Create Wrapper\n\n        // default distance for the BIGGEST bounce is the outer Distance / 3\n        if (!distance) {\n            distance = el[ref === \"top\" ? \"outerHeight\" : \"outerWidth\"]() / 3;\n        }\n\n        if (show) {\n            downAnim = {opacity: 1};\n            downAnim[ref] = 0;\n\n            // if we are showing, force opacity 0 and set the initial position\n            // then do the \"first\" animation\n            el.css(\"opacity\", 0)\n                .css(ref, motion ? -distance * 2 : distance * 2)\n                .animate(downAnim, speed, easing);\n        }\n\n        // start at the smallest distance if we are hiding\n        if (hide) {\n            distance = distance / Math.pow(2, times - 1);\n        }\n\n        downAnim = {};\n        downAnim[ref] = 0;\n        // Bounces up/down/left/right then back to 0 -- times * 2 animations happen here\n        for (i = 0; i < times; i++) {\n            upAnim = {};\n            upAnim[ref] = (motion ? \"-=\" : \"+=\") + distance;\n\n            el.animate(upAnim, speed, easing)\n                .animate(downAnim, speed, easing);\n\n            distance = hide ? distance * 2 : distance / 2;\n        }\n\n        // Last Bounce when Hiding\n        if (hide) {\n            upAnim = {opacity: 0};\n            upAnim[ref] = (motion ? \"-=\" : \"+=\") + distance;\n\n            el.animate(upAnim, speed, easing);\n        }\n\n        el.queue(function () {\n            if (hide) {\n                el.hide();\n            }\n            $.effects.restore(el, props);\n            $.effects.removeWrapper(el);\n            done();\n        });\n\n        // inject all the animations we just queued to be first in line (after \"inprogress\")\n        if (queuelen > 1) {\n            queue.splice.apply(queue,\n                [1, 0].concat(queue.splice(queuelen, anims + 1)));\n        }\n        el.dequeue();\n\n    };\n\n});\n"}
}});