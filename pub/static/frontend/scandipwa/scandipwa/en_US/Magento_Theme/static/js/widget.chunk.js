(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["widget"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/RenderWhenVisible.component.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/RenderWhenVisible.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: RenderWhenVisible, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderWhenVisible", function() { return RenderWhenVisible; });
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Browser */ "./node_modules/@scandipwa/scandipwa/src/util/Browser/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _RenderWhenVisible_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RenderWhenVisible.style */ "./node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/RenderWhenVisible.style.scss");
/* harmony import */ var _RenderWhenVisible_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_RenderWhenVisible_style__WEBPACK_IMPORTED_MODULE_7__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/RenderWhenVisible.component.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */








/** #namespace Component/RenderWhenVisible/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const RenderWhenVisible = Mosaic.middleware((_class = class RenderWhenVisible_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      wasVisible: false
    };
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
  }

  __construct(props) {
    super.__construct(props); // a hack to determine if the element is on screen or not immediately


    setTimeout(this.checkIsVisible, 0);
  }

  checkIsVisible() {
    if (!this.node) {
      return;
    }

    const rect = this.node.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
      this.setState({
        wasVisible: true
      });
    }
  }

  shouldRender() {
    const {
      wasVisible
    } = this.state;
    return !wasVisible && !Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_5__["isSSR"])() && !Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_5__["isCrawler"])();
  }

  handleVisibilityToggle(isVisible) {
    const {
      wasVisible
    } = this.state;

    if (!wasVisible && isVisible) {
      this.setState({
        wasVisible: true
      });
    }
  }

  renderFallback() {
    const {
      fallback
    } = this.props;
    const fallbackRender = fallback();

    if (fallbackRender) {
      return fallbackRender;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "RenderWhenVisible",
      elem: "Detector",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    });
  }

  renderVisibilitySensor() {
    return /*#__PURE__*/_checkBEM(React, react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["InView"], {
      onChange: this.handleVisibilityToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, this.renderFallback());
  }

  renderChildren() {
    const {
      children
    } = this.props;
    return children;
  }

  renderContent() {
    if (this.shouldRender()) {
      return this.renderVisibilitySensor();
    }

    return this.renderChildren();
  }

  render() {
    var _this = this;

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "RenderWhenVisible",
      ref: function (node) {
        _this.node = node;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, this.renderContent());
  }

}, _class.propTypes = {
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["ChildrenType"].isRequired,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}, _class.defaultProps = {
  fallback: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_6__["noopFn"]
}, _class), "Component/RenderWhenVisible/Component");
/* harmony default export */ __webpack_exports__["default"] = (RenderWhenVisible);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenderWhenVisible_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderWhenVisible.component */ "./node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/RenderWhenVisible.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RenderWhenVisible_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */


/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.component.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.component.js ***!
  \**************************************************************************************************/
/*! exports provided: ProductListWidget, NewProducts, HomeSlider, RecentlyViewedWidget, WidgetFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListWidget", function() { return ProductListWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProducts", function() { return NewProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSlider", function() { return HomeSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyViewedWidget", function() { return RecentlyViewedWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFactory", function() { return WidgetFactory; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_RenderWhenVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/RenderWhenVisible */ "./node_modules/@scandipwa/scandipwa/src/component/RenderWhenVisible/index.js");
/* harmony import */ var _WidgetFactory_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WidgetFactory.config */ "./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.config.js");
/* harmony import */ var _WidgetFactory_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WidgetFactory.style */ "./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.style.scss");
/* harmony import */ var _WidgetFactory_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WidgetFactory_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.component.js";

/* eslint-disable react/prop-types */

/* eslint-disable max-len */

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */





const ProductListWidget = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c = function () {
  return Promise.all(/*! import() | widget-product-list */[__webpack_require__.e("main_style"), __webpack_require__.e("products_style"), __webpack_require__.e("cart_style"), __webpack_require__.e("widget-product-list")]).then(__webpack_require__.bind(null, /*! ./src/component/ProductListWidget */ "./node_modules/@scandipwa/scandipwa/src/component/ProductListWidget/index.js"));
});
_c2 = ProductListWidget;
const NewProducts = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c3 = function () {
  return Promise.all(/*! import() | widget-new-product */[__webpack_require__.e("main_style"), __webpack_require__.e("products_style"), __webpack_require__.e("cart_style"), __webpack_require__.e("widget-new-product")]).then(__webpack_require__.bind(null, /*! ./src/component/NewProducts */ "./node_modules/@scandipwa/scandipwa/src/component/NewProducts/index.js"));
});
_c4 = NewProducts;
const HomeSlider = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c5 = function () {
  return Promise.all(/*! import() | widget-slider */[__webpack_require__.e("main_style"), __webpack_require__.e("widget_style"), __webpack_require__.e("widget-slider")]).then(__webpack_require__.bind(null, /*! ./src/component/SliderWidget */ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/index.js"));
});
_c6 = HomeSlider;
const RecentlyViewedWidget = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c7 = function () {
  return Promise.all(/*! import() | widget-recently-viewed */[__webpack_require__.e("main_style"), __webpack_require__.e("products_style"), __webpack_require__.e("cart_style"), __webpack_require__.e("widget_style"), __webpack_require__.e("widget-recently-viewed")]).then(__webpack_require__.bind(null, /*! ./src/component/RecentlyViewedWidget */ "./node_modules/@scandipwa/scandipwa/src/component/RecentlyViewedWidget/index.js"));
});
/** #namespace Component/WidgetFactory/Component */

_c8 = RecentlyViewedWidget;

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const WidgetFactory = Mosaic.middleware((_class = class WidgetFactory_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.renderMap = {
      [_WidgetFactory_config__WEBPACK_IMPORTED_MODULE_3__["SLIDER"]]: {
        component: HomeSlider,
        fallback: this.renderSliderFallback
      },
      [_WidgetFactory_config__WEBPACK_IMPORTED_MODULE_3__["NEW_PRODUCTS"]]: {
        component: NewProducts
      },
      [_WidgetFactory_config__WEBPACK_IMPORTED_MODULE_3__["CATALOG_PRODUCT_LIST"]]: {
        component: ProductListWidget
      },
      [_WidgetFactory_config__WEBPACK_IMPORTED_MODULE_3__["RECENTLY_VIEWED"]]: {
        component: RecentlyViewedWidget
      }
    };
  }

  renderSliderFallback() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "WidgetFactory",
      elem: "SliderPlaceholder",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    });
  }

  renderDefaultFallback() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 16
      }
    });
  }

  renderContent() {
    const {
      type,
      sliderId = null,
      displayType,
      productsCount,
      showPager,
      storeId,
      title,
      conditionsEncoded
    } = this.props;
    const {
      component: Widget,
      fallback
    } = this.renderMap[type] || {};

    if (Widget !== undefined) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_RenderWhenVisible__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fallback: fallback,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, /*#__PURE__*/_checkBEM(React, Widget, {
        sliderId: sliderId,
        displayType: displayType,
        productsCount: productsCount,
        showPager: showPager,
        storeId: storeId,
        title: title,
        conditionsEncoded: conditionsEncoded,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }));
    }

    return null;
  }

  renderFallback() {
    const {
      type
    } = this.props;
    const {
      fallback = this.renderDefaultFallback
    } = this.renderMap[type] || {};
    return fallback();
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
      fallback: this.renderFallback(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }, this.renderContent());
  }

}, _class.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/WidgetFactory/Component");
/* harmony default export */ __webpack_exports__["default"] = (WidgetFactory);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

__webpack_require__.$Refresh$.register(_c, "ProductListWidget$lazy");
__webpack_require__.$Refresh$.register(_c2, "ProductListWidget");
__webpack_require__.$Refresh$.register(_c3, "NewProducts$lazy");
__webpack_require__.$Refresh$.register(_c4, "NewProducts");
__webpack_require__.$Refresh$.register(_c5, "HomeSlider$lazy");
__webpack_require__.$Refresh$.register(_c6, "HomeSlider");
__webpack_require__.$Refresh$.register(_c7, "RecentlyViewedWidget$lazy");
__webpack_require__.$Refresh$.register(_c8, "RecentlyViewedWidget");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.config.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.config.js ***!
  \***********************************************************************************************/
/*! exports provided: SLIDER, NEW_PRODUCTS, CATALOG_PRODUCT_LIST, RECENTLY_VIEWED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDER", function() { return SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_PRODUCTS", function() { return NEW_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATALOG_PRODUCT_LIST", function() { return CATALOG_PRODUCT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECENTLY_VIEWED", function() { return RECENTLY_VIEWED; });
/* eslint-disable import/prefer-default-export */

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */
const SLIDER = 'Slider';
const NEW_PRODUCTS = 'NewProducts';
const CATALOG_PRODUCT_LIST = 'CatalogProductList';
const RECENTLY_VIEWED = 'RecentlyViewed';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WidgetFactory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetFactory.component */ "./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/WidgetFactory.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _WidgetFactory_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */


/***/ }),

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}

/**
 * Returns the embedding frame element, if any.
 * @param {!Document} doc
 * @return {!Element}
 */
function getFrameElement(doc) {
  try {
    return doc.defaultView && doc.defaultView.frameElement || null;
  } catch (e) {
    // Ignore the error.
    return null;
  }
}

/**
 * A local reference to the root document.
 */
var document = (function(startDoc) {
  var doc = startDoc;
  var frame = getFrameElement(doc);
  while (frame) {
    doc = frame.ownerDocument;
    frame = getFrameElement(doc);
  }
  return doc;
})(window.document);

/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];

/**
 * The signal updater for cross-origin intersection. When not null, it means
 * that the polyfill is configured to work in a cross-origin mode.
 * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */
var crossOriginUpdater = null;

/**
 * The current cross-origin intersection. Only used in the cross-origin mode.
 * @type {DOMRect|ClientRect}
 */
var crossOriginRect = null;


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = ensureDOMRect(entry.rootBounds);
  this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
  this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (
    options.root &&
    options.root.nodeType != 1 &&
    options.root.nodeType != 9
  ) {
    throw new Error('root must be a Document or Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');

  /** @private @const {!Array<!Document>} */
  this._monitoringDocuments = [];
  /** @private @const {!Array<function()>} */
  this._monitoringUnsubscribes = [];
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Sets up the polyfill in the cross-origin mode. The result is the
 * updater function that accepts two arguments: `boundingClientRect` and
 * `intersectionRect` - just as these fields would be available to the
 * parent via `IntersectionObserverEntry`. This function should be called
 * each time the iframe receives intersection information from the parent
 * window, e.g. via messaging.
 * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */
IntersectionObserver._setupCrossOriginUpdater = function() {
  if (!crossOriginUpdater) {
    /**
     * @param {DOMRect|ClientRect} boundingClientRect
     * @param {DOMRect|ClientRect} intersectionRect
     */
    crossOriginUpdater = function(boundingClientRect, intersectionRect) {
      if (!boundingClientRect || !intersectionRect) {
        crossOriginRect = getEmptyRect();
      } else {
        crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
      }
      registry.forEach(function(observer) {
        observer._checkForIntersections();
      });
    };
  }
  return crossOriginUpdater;
};


/**
 * Resets the cross-origin mode.
 */
IntersectionObserver._resetCrossOriginUpdater = function() {
  crossOriginUpdater = null;
  crossOriginRect = null;
};


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections(target.ownerDocument);
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {
        return item.element != target;
      });
  this._unmonitorIntersections(target.ownerDocument);
  if (this._observationTargets.length == 0) {
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorAllIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function(doc) {
  var win = doc.defaultView;
  if (!win) {
    // Already destroyed.
    return;
  }
  if (this._monitoringDocuments.indexOf(doc) != -1) {
    // Already monitoring.
    return;
  }

  // Private state for monitoring.
  var callback = this._checkForIntersections;
  var monitoringInterval = null;
  var domObserver = null;

  // If a poll interval is set, use polling instead of listening to
  // resize and scroll events or DOM mutations.
  if (this.POLL_INTERVAL) {
    monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
  } else {
    addEvent(win, 'resize', callback, true);
    addEvent(doc, 'scroll', callback, true);
    if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
      domObserver = new win.MutationObserver(callback);
      domObserver.observe(doc, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  }

  this._monitoringDocuments.push(doc);
  this._monitoringUnsubscribes.push(function() {
    // Get the window object again. When a friendly iframe is destroyed, it
    // will be null.
    var win = doc.defaultView;

    if (win) {
      if (monitoringInterval) {
        win.clearInterval(monitoringInterval);
      }
      removeEvent(win, 'resize', callback, true);
    }

    removeEvent(doc, 'scroll', callback, true);
    if (domObserver) {
      domObserver.disconnect();
    }
  });

  // Also monitor the parent.
  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;
  if (doc != rootDoc) {
    var frame = getFrameElement(doc);
    if (frame) {
      this._monitorIntersections(frame.ownerDocument);
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
  var index = this._monitoringDocuments.indexOf(doc);
  if (index == -1) {
    return;
  }

  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;

  // Check if any dependent targets are still remaining.
  var hasDependentTargets =
      this._observationTargets.some(function(item) {
        var itemDoc = item.element.ownerDocument;
        // Target is in this context.
        if (itemDoc == doc) {
          return true;
        }
        // Target is nested in this context.
        while (itemDoc && itemDoc != rootDoc) {
          var frame = getFrameElement(itemDoc);
          itemDoc = frame && frame.ownerDocument;
          if (itemDoc == doc) {
            return true;
          }
        }
        return false;
      });
  if (hasDependentTargets) {
    return;
  }

  // Unsubscribe.
  var unsubscribe = this._monitoringUnsubscribes[index];
  this._monitoringDocuments.splice(index, 1);
  this._monitoringUnsubscribes.splice(index, 1);
  unsubscribe();

  // Also unmonitor the parent.
  if (doc != rootDoc) {
    var frame = getFrameElement(doc);
    if (frame) {
      this._unmonitorIntersections(frame.ownerDocument);
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._unmonitorAllIntersections = function() {
  var unsubscribes = this._monitoringUnsubscribes.slice(0);
  this._monitoringDocuments.length = 0;
  this._monitoringUnsubscribes.length = 0;
  for (var i = 0; i < unsubscribes.length; i++) {
    unsubscribes[i]();
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  if (!this.root && crossOriginUpdater && !crossOriginRect) {
    // Cross origin monitoring, but no initial data available yet.
    return;
  }

  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, targetRect, rootRect);

    var rootBounds = null;
    if (!this._rootContainsTarget(target)) {
      rootBounds = getEmptyRect();
    } else if (!crossOriginUpdater || this.root) {
      rootBounds = rootRect;
    }

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootBounds,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} targetRect The bounding rect of the target.
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, targetRect, rootRect) {
  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot && parent) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return null;

    if (parent == this.root || parent.nodeType == /* DOCUMENT */ 9) {
      atRoot = true;
      if (parent == this.root || parent == document) {
        if (crossOriginUpdater && !this.root) {
          if (!crossOriginRect ||
              crossOriginRect.width == 0 && crossOriginRect.height == 0) {
            // A 0-size cross-origin intersection means no-intersection.
            parent = null;
            parentRect = null;
            intersectionRect = null;
          } else {
            parentRect = crossOriginRect;
          }
        } else {
          parentRect = rootRect;
        }
      } else {
        // Check if there's a frame that can be navigated to.
        var frame = getParentNode(parent);
        var frameRect = frame && getBoundingClientRect(frame);
        var frameIntersect =
            frame &&
            this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
        if (frameRect && frameIntersect) {
          parent = frame;
          parentRect = convertFromParentRect(frameRect, frameIntersect);
        } else {
          parent = null;
          intersectionRect = null;
        }
      }
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      var doc = parent.ownerDocument;
      if (parent != doc.body &&
          parent != doc.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);
    }
    if (!intersectionRect) break;
    parent = parent && getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {ClientRect} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root && !isDoc(this.root)) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var doc = isDoc(this.root) ? this.root : document;
    var html = doc.documentElement;
    var body = doc.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {DOMRect|ClientRect} rect The rect object to expand.
 * @return {ClientRect} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;
  return (
    containsDeep(rootDoc, target) &&
    (!this.root || rootDoc == target.ownerDocument)
  );
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detachEvent == 'function') {
    node.detachEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object|?ClientRect} The intersection rect or undefined if no
 *     intersection is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  } || null;
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {ClientRect} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}


/**
 * Ensure that the result has all of the necessary fields of the DOMRect.
 * Specifically this ensures that `x` and `y` fields are set.
 *
 * @param {?DOMRect|?ClientRect} rect
 * @return {?DOMRect}
 */
function ensureDOMRect(rect) {
  // A `DOMRect` object has `x` and `y` fields.
  if (!rect || 'x' in rect) {
    return rect;
  }
  // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
  // for internally calculated Rect objects. For the purposes of
  // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
  // for these fields.
  return {
    top: rect.top,
    y: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    right: rect.right,
    width: rect.width,
    height: rect.height
  };
}


/**
 * Inverts the intersection and bounding rect from the parent (frame) BCR to
 * the local BCR space.
 * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
 * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
 * @return {ClientRect} The local root bounding rect for the parent's children.
 */
function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
  var top = parentIntersectionRect.top - parentBoundingRect.top;
  var left = parentIntersectionRect.left - parentBoundingRect.left;
  return {
    top: top,
    left: left,
    height: parentIntersectionRect.height,
    width: parentIntersectionRect.width,
    bottom: top + parentIntersectionRect.height,
    right: left + parentIntersectionRect.width
  };
}


/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (node.nodeType == /* DOCUMENT */ 9 && node != document) {
    // If this node is a document node, look for the embedding frame.
    return getFrameElement(node);
  }

  // If the parent has element that is assigned through shadow root slot
  if (parent && parent.assignedSlot) {
    parent = parent.assignedSlot.parentNode
  }

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  return parent;
}

/**
 * Returns true if `node` is a Document.
 * @param {!Node} node
 * @returns {boolean}
 */
function isDoc(node) {
  return node && node.nodeType === 9;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());


/***/ }),

/***/ "./node_modules/react-intersection-observer/react-intersection-observer.m.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-intersection-observer/react-intersection-observer.m.js ***!
  \***********************************************************************************/
/*! exports provided: InView, default, defaultFallbackInView, observe, useInView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InView", function() { return InView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFallbackInView", function() { return defaultFallbackInView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInView", function() { return useInView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var observerMap = new Map();
var RootIds = new WeakMap();
var rootId = 0;
var unsupportedValue = undefined;
/**
 * What should be the default behavior if the IntersectionObserver is unsupported?
 * Ideally the polyfill has been loaded, you can have the following happen:
 * - `undefined`: Throw an error
 * - `true` or `false`: Set the `inView` value to this regardless of intersection state
 * **/

function defaultFallbackInView(inView) {
  unsupportedValue = inView;
}
/**
 * Generate a unique ID for the root element
 * @param root
 */

function getRootId(root) {
  if (!root) return '0';
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
/**
 * Convert the options to a string Id, based on the values.
 * Ensures we can reuse the same observer when observing elements with the same options.
 * @param options
 */


function optionsToId(options) {
  return Object.keys(options).sort().filter(function (key) {
    return options[key] !== undefined;
  }).map(function (key) {
    return key + "_" + (key === 'root' ? getRootId(options.root) : options[key]);
  }).toString();
}

function createObserver(options) {
  // Create a unique ID for this observer instance, based on the root, root margin and threshold.
  var id = optionsToId(options);
  var instance = observerMap.get(id);

  if (!instance) {
    // Create a map of elements this observer is going to observe. Each element has a list of callbacks that should be triggered, once it comes into view.
    var elements = new Map();
    var thresholds;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var _elements$get;

        // While it would be nice if you could just look at isIntersecting to determine if the component is inside the viewport, browsers can't agree on how to use it.
        // -Firefox ignores `threshold` when considering `isIntersecting`, so it will never be false again if `threshold` is > 0
        var inView = entry.isIntersecting && thresholds.some(function (threshold) {
          return entry.intersectionRatio >= threshold;
        }); // @ts-ignore support IntersectionObserver v2

        if (options.trackVisibility && typeof entry.isVisible === 'undefined') {
          // The browser doesn't support Intersection Observer v2, falling back to v1 behavior.
          // @ts-ignore
          entry.isVisible = inView;
        }

        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach(function (callback) {
          callback(inView, entry);
        });
      });
    }, options); // Ensure we have a valid thresholds array. If not, use the threshold from the options

    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id: id,
      observer: observer,
      elements: elements
    };
    observerMap.set(id, instance);
  }

  return instance;
}
/**
 * @param element - DOM Element to observe
 * @param callback - Callback function to trigger when intersection status changes
 * @param options - Intersection Observer options
 * @param fallbackInView - Fallback inView value.
 * @return Function - Cleanup function that should be triggered to unregister the observer
 */


function observe(element, callback, options, fallbackInView) {
  if (options === void 0) {
    options = {};
  }

  if (fallbackInView === void 0) {
    fallbackInView = unsupportedValue;
  }

  if (typeof window.IntersectionObserver === 'undefined' && fallbackInView !== undefined) {
    var bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === 'number' ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return function () {// Nothing to cleanup
    };
  } // An observer with the same options can be reused, so lets use this fact


  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements; // Register the callback listener for this element


  var callbacks = elements.get(element) || [];

  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }

  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    // Remove the callback from the callback list
    callbacks.splice(callbacks.indexOf(callback), 1);

    if (callbacks.length === 0) {
      // No more callback exists for element, so destroy it
      elements["delete"](element);
      observer.unobserve(element);
    }

    if (elements.size === 0) {
      // No more elements are being observer by this instance, so destroy it
      observer.disconnect();
      observerMap["delete"](id);
    }
  };
}

var _excluded = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

function isPlainChildren(props) {
  return typeof props.children !== 'function';
}
/**
 ## Render props

 To use the `<InView>` component, you pass it a function. It will be called
 whenever the state changes, with the new value of `inView`. In addition to the
 `inView` prop, children also receive a `ref` that should be set on the
 containing DOM element. This is the element that the IntersectionObserver will
 monitor.

 If you need it, you can also access the
 [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
 on `entry`, giving you access to all the details about the current intersection
 state.

 ```jsx
 import { InView } from 'react-intersection-observer';

 const Component = () => (
 <InView>
 {({ inView, ref, entry }) => (
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
    )}
 </InView>
 );

 export default Component;
 ```

 ## Plain children

 You can pass any element to the `<InView />`, and it will handle creating the
 wrapping DOM element. Add a handler to the `onChange` method, and control the
 state in your own component. Any extra props you add to `<InView>` will be
 passed to the HTML element, allowing you set the `className`, `style`, etc.

 ```jsx
 import { InView } from 'react-intersection-observer';

 const Component = () => (
 <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
 <h2>Plain children are always rendered. Use onChange to monitor state.</h2>
 </InView>
 );

 export default Component;
 ```
 */


var InView = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(InView, _React$Component);

  function InView(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.node = null;
    _this._unobserveCb = null;

    _this.handleNode = function (node) {
      if (_this.node) {
        // Clear the old observer, before we start observing a new element
        _this.unobserve();

        if (!node && !_this.props.triggerOnce && !_this.props.skip) {
          // Reset the state if we get a new node, and we aren't ignoring updates
          _this.setState({
            inView: !!_this.props.initialInView,
            entry: undefined
          });
        }
      }

      _this.node = node ? node : null;

      _this.observeNode();
    };

    _this.handleChange = function (inView, entry) {
      if (inView && _this.props.triggerOnce) {
        // If `triggerOnce` is true, we should stop observing the element.
        _this.unobserve();
      }

      if (!isPlainChildren(_this.props)) {
        // Store the current State, so we can pass it to the children in the next render update
        // There's no reason to update the state for plain children, since it's not used in the rendering.
        _this.setState({
          inView: inView,
          entry: entry
        });
      }

      if (_this.props.onChange) {
        // If the user is actively listening for onChange, always trigger it
        _this.props.onChange(inView, entry);
      }
    };

    _this.state = {
      inView: !!props.initialInView,
      entry: undefined
    };
    return _this;
  }

  var _proto = InView.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    // If a IntersectionObserver option changed, reinit the observer
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
      this.unobserve();
      this.observeNode();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unobserve();
    this.node = null;
  };

  _proto.observeNode = function observeNode() {
    if (!this.node || this.props.skip) return;
    var _this$props = this.props,
        threshold = _this$props.threshold,
        root = _this$props.root,
        rootMargin = _this$props.rootMargin,
        trackVisibility = _this$props.trackVisibility,
        delay = _this$props.delay,
        fallbackInView = _this$props.fallbackInView;
    this._unobserveCb = observe(this.node, this.handleChange, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin,
      // @ts-ignore
      trackVisibility: trackVisibility,
      // @ts-ignore
      delay: delay
    }, fallbackInView);
  };

  _proto.unobserve = function unobserve() {
    if (this._unobserveCb) {
      this._unobserveCb();

      this._unobserveCb = null;
    }
  };

  _proto.render = function render() {
    if (!isPlainChildren(this.props)) {
      var _this$state = this.state,
          inView = _this$state.inView,
          entry = _this$state.entry;
      return this.props.children({
        inView: inView,
        entry: entry,
        ref: this.handleNode
      });
    }

    var _this$props2 = this.props,
        children = _this$props2.children,
        as = _this$props2.as,
        props = _objectWithoutPropertiesLoose(_this$props2, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](as || 'div', _extends({
      ref: this.handleNode
    }, props), children);
  };

  return InView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
InView.displayName = 'InView';
InView.defaultProps = {
  threshold: 0,
  triggerOnce: false,
  initialInView: false
};

/**
 * React Hooks make it easy to monitor the `inView` state of your components. Call
 * the `useInView` hook with the (optional) [options](#options) you need. It will
 * return an array containing a `ref`, the `inView` status and the current
 * [`entry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).
 * Assign the `ref` to the DOM element you want to monitor, and the hook will
 * report the status.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import { useInView } from 'react-intersection-observer';
 *
 * const Component = () => {
 *   const { ref, inView, entry } = useInView({
 *       threshold: 0,
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       <h2>{`Header inside viewport ${inView}.`}</h2>
 *     </div>
 *   );
 * };
 * ```
 */

function useInView(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      threshold = _ref.threshold,
      delay = _ref.delay,
      trackVisibility = _ref.trackVisibility,
      rootMargin = _ref.rootMargin,
      root = _ref.root,
      triggerOnce = _ref.triggerOnce,
      skip = _ref.skip,
      initialInView = _ref.initialInView,
      fallbackInView = _ref.fallbackInView;

  var unobserve = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    inView: !!initialInView
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var setRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (node) {
    if (unobserve.current !== undefined) {
      unobserve.current();
      unobserve.current = undefined;
    } // Skip creating the observer


    if (skip) return;

    if (node) {
      unobserve.current = observe(node, function (inView, entry) {
        setState({
          inView: inView,
          entry: entry
        });

        if (entry.isIntersecting && triggerOnce && unobserve.current) {
          // If it should only trigger once, unobserve the element after it's inView
          unobserve.current();
          unobserve.current = undefined;
        }
      }, {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold,
        // @ts-ignore
        trackVisibility: trackVisibility,
        // @ts-ignore
        delay: delay
      }, fallbackInView);
    }
  }, // We break the rule here, because we aren't including the actual `threshold` variable
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [// If the threshold is an array, convert it to a string so it won't change between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  Array.isArray(threshold) ? threshold.toString() : threshold, root, rootMargin, triggerOnce, skip, trackVisibility, fallbackInView, delay]);
  /* eslint-disable-next-line */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!unobserve.current && state.entry && !triggerOnce && !skip) {
      // If we don't have a ref, then reset the state (unless the hook is set to only `triggerOnce` or `skip`)
      // This ensures we correctly reflect the current state - If you aren't observing anything, then nothing is inView
      setState({
        inView: !!initialInView
      });
    }
  });
  var result = [setRef, state.inView, state.entry]; // Support object destructuring, by adding the specific values.

  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}


//# sourceMappingURL=react-intersection-observer.m.js.map


/***/ })

}]);
//# sourceMappingURL=widget.chunk.js.map