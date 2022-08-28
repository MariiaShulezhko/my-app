require.config({"config": {
        "jsbuild":{"jquery/fileUploader/vendor/blueimp-load-image/js/load-image-orientation.js":"/*\n * JavaScript Load Image Orientation\n * https://github.com/blueimp/JavaScript-Load-Image\n *\n * Copyright 2013, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n */\n\n/*\nExif orientation values to correctly display the letter F:\n\n    1             2\n  \u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\n  \u2588\u2588                \u2588\u2588\n  \u2588\u2588\u2588\u2588            \u2588\u2588\u2588\u2588\n  \u2588\u2588                \u2588\u2588\n  \u2588\u2588                \u2588\u2588\n\n    3             4\n      \u2588\u2588        \u2588\u2588\n      \u2588\u2588        \u2588\u2588\n    \u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\n      \u2588\u2588        \u2588\u2588\n  \u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588\n\n    5             6\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\n\u2588\u2588  \u2588\u2588        \u2588\u2588  \u2588\u2588\n\u2588\u2588            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\n    7             8\n        \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n    \u2588\u2588  \u2588\u2588        \u2588\u2588  \u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588            \u2588\u2588\n\n*/\n\n/* global define, module, require */\n\n;(function (factory) {\n  'use strict'\n  if (typeof define === 'function' && define.amd) {\n    // Register as an anonymous AMD module:\n    define(['jquery/fileUploader/vendor/blueimp-load-image/js/load-image', 'jquery/fileUploader/vendor/blueimp-load-image/js/load-image-scale', 'jquery/fileUploader/vendor/blueimp-load-image/js/load-image-meta'], factory)\n  } else if (typeof module === 'object' && module.exports) {\n    factory(\n      require('jquery/fileUploader/vendor/blueimp-load-image/js/load-image'),\n      require('jquery/fileUploader/vendor/blueimp-load-image/js/load-image-scale'),\n      require('jquery/fileUploader/vendor/blueimp-load-image/js/load-image-meta')\n    )\n  } else {\n    // Browser globals:\n    factory(window.loadImage)\n  }\n})(function (loadImage) {\n  'use strict'\n\n  var originalTransform = loadImage.transform\n  var originalRequiresCanvas = loadImage.requiresCanvas\n  var originalRequiresMetaData = loadImage.requiresMetaData\n  var originalTransformCoordinates = loadImage.transformCoordinates\n  var originalGetTransformedOptions = loadImage.getTransformedOptions\n\n  ;(function ($) {\n    // Guard for non-browser environments (e.g. server-side rendering):\n    if (!$.global.document) return\n    // black+white 3x2 JPEG, with the following meta information set:\n    // - EXIF Orientation: 6 (Rotated 90\u00b0 CCW)\n    // Image data layout (B=black, F=white):\n    // BFF\n    // BBB\n    var testImageURL =\n      'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +\n      'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +\n      'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +\n      'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAIAAwMBEQACEQEDEQH/x' +\n      'ABRAAEAAAAAAAAAAAAAAAAAAAAKEAEBAQADAQEAAAAAAAAAAAAGBQQDCAkCBwEBAAAAAAA' +\n      'AAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AG8T9NfSMEVMhQ' +\n      'voP3fFiRZ+MTHDifa/95OFSZU5OzRzxkyejv8ciEfhSceSXGjS8eSdLnZc2HDm4M3BxcXw' +\n      'H/9k='\n    var img = document.createElement('img')\n    img.onload = function () {\n      // Check if the browser supports automatic image orientation:\n      $.orientation = img.width === 2 && img.height === 3\n      if ($.orientation) {\n        var canvas = $.createCanvas(1, 1, true)\n        var ctx = canvas.getContext('2d')\n        ctx.drawImage(img, 1, 1, 1, 1, 0, 0, 1, 1)\n        // Check if the source image coordinates (sX, sY, sWidth, sHeight) are\n        // correctly applied to the auto-orientated image, which should result\n        // in a white opaque pixel (e.g. in Safari).\n        // Browsers that show a transparent pixel (e.g. Chromium) fail to crop\n        // auto-oriented images correctly and require a workaround, e.g.\n        // drawing the complete source image to an intermediate canvas first.\n        // See https://bugs.chromium.org/p/chromium/issues/detail?id=1074354\n        $.orientationCropBug =\n          ctx.getImageData(0, 0, 1, 1).data.toString() !== '255,255,255,255'\n      }\n    }\n    img.src = testImageURL\n  })(loadImage)\n\n  /**\n   * Determines if the orientation requires a canvas element.\n   *\n   * @param {object} [options] Options object\n   * @param {boolean} [withMetaData] Is metadata required for orientation\n   * @returns {boolean} Returns true if orientation requires canvas/meta\n   */\n  function requiresCanvasOrientation(options, withMetaData) {\n    var orientation = options && options.orientation\n    return (\n      // Exif orientation for browsers without automatic image orientation:\n      (orientation === true && !loadImage.orientation) ||\n      // Orientation reset for browsers with automatic image orientation:\n      (orientation === 1 && loadImage.orientation) ||\n      // Orientation to defined value, requires meta for orientation reset only:\n      ((!withMetaData || loadImage.orientation) &&\n        orientation > 1 &&\n        orientation < 9)\n    )\n  }\n\n  /**\n   * Determines if the image requires an orientation change.\n   *\n   * @param {number} [orientation] Defined orientation value\n   * @param {number} [autoOrientation] Auto-orientation based on Exif data\n   * @returns {boolean} Returns true if an orientation change is required\n   */\n  function requiresOrientationChange(orientation, autoOrientation) {\n    return (\n      orientation !== autoOrientation &&\n      ((orientation === 1 && autoOrientation > 1 && autoOrientation < 9) ||\n        (orientation > 1 && orientation < 9))\n    )\n  }\n\n  /**\n   * Determines orientation combinations that require a rotation by 180\u00b0.\n   *\n   * The following is a list of combinations that return true:\n   *\n   * 2 (flip) => 5 (rot90,flip), 7 (rot90,flip), 6 (rot90), 8 (rot90)\n   * 4 (flip) => 5 (rot90,flip), 7 (rot90,flip), 6 (rot90), 8 (rot90)\n   *\n   * 5 (rot90,flip) => 2 (flip), 4 (flip), 6 (rot90), 8 (rot90)\n   * 7 (rot90,flip) => 2 (flip), 4 (flip), 6 (rot90), 8 (rot90)\n   *\n   * 6 (rot90) => 2 (flip), 4 (flip), 5 (rot90,flip), 7 (rot90,flip)\n   * 8 (rot90) => 2 (flip), 4 (flip), 5 (rot90,flip), 7 (rot90,flip)\n   *\n   * @param {number} [orientation] Defined orientation value\n   * @param {number} [autoOrientation] Auto-orientation based on Exif data\n   * @returns {boolean} Returns true if rotation by 180\u00b0 is required\n   */\n  function requiresRot180(orientation, autoOrientation) {\n    if (autoOrientation > 1 && autoOrientation < 9) {\n      switch (orientation) {\n        case 2:\n        case 4:\n          return autoOrientation > 4\n        case 5:\n        case 7:\n          return autoOrientation % 2 === 0\n        case 6:\n        case 8:\n          return (\n            autoOrientation === 2 ||\n            autoOrientation === 4 ||\n            autoOrientation === 5 ||\n            autoOrientation === 7\n          )\n      }\n    }\n    return false\n  }\n\n  // Determines if the target image should be a canvas element:\n  loadImage.requiresCanvas = function (options) {\n    return (\n      requiresCanvasOrientation(options) ||\n      originalRequiresCanvas.call(loadImage, options)\n    )\n  }\n\n  // Determines if metadata should be loaded automatically:\n  loadImage.requiresMetaData = function (options) {\n    return (\n      requiresCanvasOrientation(options, true) ||\n      originalRequiresMetaData.call(loadImage, options)\n    )\n  }\n\n  loadImage.transform = function (img, options, callback, file, data) {\n    originalTransform.call(\n      loadImage,\n      img,\n      options,\n      function (img, data) {\n        if (data) {\n          var autoOrientation =\n            loadImage.orientation && data.exif && data.exif.get('Orientation')\n          if (autoOrientation > 4 && autoOrientation < 9) {\n            // Automatic image orientation switched image dimensions\n            var originalWidth = data.originalWidth\n            var originalHeight = data.originalHeight\n            data.originalWidth = originalHeight\n            data.originalHeight = originalWidth\n          }\n        }\n        callback(img, data)\n      },\n      file,\n      data\n    )\n  }\n\n  // Transforms coordinate and dimension options\n  // based on the given orientation option:\n  loadImage.getTransformedOptions = function (img, opts, data) {\n    var options = originalGetTransformedOptions.call(loadImage, img, opts)\n    var exifOrientation = data.exif && data.exif.get('Orientation')\n    var orientation = options.orientation\n    var autoOrientation = loadImage.orientation && exifOrientation\n    if (orientation === true) orientation = exifOrientation\n    if (!requiresOrientationChange(orientation, autoOrientation)) {\n      return options\n    }\n    var top = options.top\n    var right = options.right\n    var bottom = options.bottom\n    var left = options.left\n    var newOptions = {}\n    for (var i in options) {\n      if (Object.prototype.hasOwnProperty.call(options, i)) {\n        newOptions[i] = options[i]\n      }\n    }\n    newOptions.orientation = orientation\n    if (\n      (orientation > 4 && !(autoOrientation > 4)) ||\n      (orientation < 5 && autoOrientation > 4)\n    ) {\n      // Image dimensions and target dimensions are switched\n      newOptions.maxWidth = options.maxHeight\n      newOptions.maxHeight = options.maxWidth\n      newOptions.minWidth = options.minHeight\n      newOptions.minHeight = options.minWidth\n      newOptions.sourceWidth = options.sourceHeight\n      newOptions.sourceHeight = options.sourceWidth\n    }\n    if (autoOrientation > 1) {\n      // Browsers which correctly apply source image coordinates to\n      // auto-oriented images\n      switch (autoOrientation) {\n        case 2:\n          // Horizontal flip\n          right = options.left\n          left = options.right\n          break\n        case 3:\n          // 180\u00b0 Rotate CCW\n          top = options.bottom\n          right = options.left\n          bottom = options.top\n          left = options.right\n          break\n        case 4:\n          // Vertical flip\n          top = options.bottom\n          bottom = options.top\n          break\n        case 5:\n          // Horizontal flip + 90\u00b0 Rotate CCW\n          top = options.left\n          right = options.bottom\n          bottom = options.right\n          left = options.top\n          break\n        case 6:\n          // 90\u00b0 Rotate CCW\n          top = options.left\n          right = options.top\n          bottom = options.right\n          left = options.bottom\n          break\n        case 7:\n          // Vertical flip + 90\u00b0 Rotate CCW\n          top = options.right\n          right = options.top\n          bottom = options.left\n          left = options.bottom\n          break\n        case 8:\n          // 90\u00b0 Rotate CW\n          top = options.right\n          right = options.bottom\n          bottom = options.left\n          left = options.top\n          break\n      }\n      // Some orientation combinations require additional rotation by 180\u00b0:\n      if (requiresRot180(orientation, autoOrientation)) {\n        var tmpTop = top\n        var tmpRight = right\n        top = bottom\n        right = left\n        bottom = tmpTop\n        left = tmpRight\n      }\n    }\n    newOptions.top = top\n    newOptions.right = right\n    newOptions.bottom = bottom\n    newOptions.left = left\n    // Account for defined browser orientation:\n    switch (orientation) {\n      case 2:\n        // Horizontal flip\n        newOptions.right = left\n        newOptions.left = right\n        break\n      case 3:\n        // 180\u00b0 Rotate CCW\n        newOptions.top = bottom\n        newOptions.right = left\n        newOptions.bottom = top\n        newOptions.left = right\n        break\n      case 4:\n        // Vertical flip\n        newOptions.top = bottom\n        newOptions.bottom = top\n        break\n      case 5:\n        // Vertical flip + 90\u00b0 Rotate CW\n        newOptions.top = left\n        newOptions.right = bottom\n        newOptions.bottom = right\n        newOptions.left = top\n        break\n      case 6:\n        // 90\u00b0 Rotate CW\n        newOptions.top = right\n        newOptions.right = bottom\n        newOptions.bottom = left\n        newOptions.left = top\n        break\n      case 7:\n        // Horizontal flip + 90\u00b0 Rotate CW\n        newOptions.top = right\n        newOptions.right = top\n        newOptions.bottom = left\n        newOptions.left = bottom\n        break\n      case 8:\n        // 90\u00b0 Rotate CCW\n        newOptions.top = left\n        newOptions.right = top\n        newOptions.bottom = right\n        newOptions.left = bottom\n        break\n    }\n    return newOptions\n  }\n\n  // Transform image orientation based on the given EXIF orientation option:\n  loadImage.transformCoordinates = function (canvas, options, data) {\n    originalTransformCoordinates.call(loadImage, canvas, options, data)\n    var orientation = options.orientation\n    var autoOrientation =\n      loadImage.orientation && data.exif && data.exif.get('Orientation')\n    if (!requiresOrientationChange(orientation, autoOrientation)) {\n      return\n    }\n    var ctx = canvas.getContext('2d')\n    var width = canvas.width\n    var height = canvas.height\n    var sourceWidth = width\n    var sourceHeight = height\n    if (\n      (orientation > 4 && !(autoOrientation > 4)) ||\n      (orientation < 5 && autoOrientation > 4)\n    ) {\n      // Image dimensions and target dimensions are switched\n      canvas.width = height\n      canvas.height = width\n    }\n    if (orientation > 4) {\n      // Destination and source dimensions are switched\n      sourceWidth = height\n      sourceHeight = width\n    }\n    // Reset automatic browser orientation:\n    switch (autoOrientation) {\n      case 2:\n        // Horizontal flip\n        ctx.translate(sourceWidth, 0)\n        ctx.scale(-1, 1)\n        break\n      case 3:\n        // 180\u00b0 Rotate CCW\n        ctx.translate(sourceWidth, sourceHeight)\n        ctx.rotate(Math.PI)\n        break\n      case 4:\n        // Vertical flip\n        ctx.translate(0, sourceHeight)\n        ctx.scale(1, -1)\n        break\n      case 5:\n        // Horizontal flip + 90\u00b0 Rotate CCW\n        ctx.rotate(-0.5 * Math.PI)\n        ctx.scale(-1, 1)\n        break\n      case 6:\n        // 90\u00b0 Rotate CCW\n        ctx.rotate(-0.5 * Math.PI)\n        ctx.translate(-sourceWidth, 0)\n        break\n      case 7:\n        // Vertical flip + 90\u00b0 Rotate CCW\n        ctx.rotate(-0.5 * Math.PI)\n        ctx.translate(-sourceWidth, sourceHeight)\n        ctx.scale(1, -1)\n        break\n      case 8:\n        // 90\u00b0 Rotate CW\n        ctx.rotate(0.5 * Math.PI)\n        ctx.translate(0, -sourceHeight)\n        break\n    }\n    // Some orientation combinations require additional rotation by 180\u00b0:\n    if (requiresRot180(orientation, autoOrientation)) {\n      ctx.translate(sourceWidth, sourceHeight)\n      ctx.rotate(Math.PI)\n    }\n    switch (orientation) {\n      case 2:\n        // Horizontal flip\n        ctx.translate(width, 0)\n        ctx.scale(-1, 1)\n        break\n      case 3:\n        // 180\u00b0 Rotate CCW\n        ctx.translate(width, height)\n        ctx.rotate(Math.PI)\n        break\n      case 4:\n        // Vertical flip\n        ctx.translate(0, height)\n        ctx.scale(1, -1)\n        break\n      case 5:\n        // Vertical flip + 90\u00b0 Rotate CW\n        ctx.rotate(0.5 * Math.PI)\n        ctx.scale(1, -1)\n        break\n      case 6:\n        // 90\u00b0 Rotate CW\n        ctx.rotate(0.5 * Math.PI)\n        ctx.translate(0, -height)\n        break\n      case 7:\n        // Horizontal flip + 90\u00b0 Rotate CW\n        ctx.rotate(0.5 * Math.PI)\n        ctx.translate(width, -height)\n        ctx.scale(-1, 1)\n        break\n      case 8:\n        // 90\u00b0 Rotate CCW\n        ctx.rotate(-0.5 * Math.PI)\n        ctx.translate(-width, 0)\n        break\n    }\n  }\n})\n"}
}});
