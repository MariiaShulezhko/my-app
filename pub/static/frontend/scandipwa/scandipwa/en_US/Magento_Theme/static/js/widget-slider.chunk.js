(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["widget-slider"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.component.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.component.js ***!
  \**********************************************************************************************/
/*! exports provided: ChevronIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronIcon", function() { return ChevronIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Direction_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/type/Direction.type */ "./node_modules/@scandipwa/scandipwa/src/type/Direction.type.js");
/* harmony import */ var _ChevronIcon_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChevronIcon.config */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config.js");
/* harmony import */ var _ChevronIcon_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChevronIcon.style */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.style.scss");
/* harmony import */ var _ChevronIcon_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ChevronIcon_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.component.js";

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




/** #namespace Component/ChevronIcon/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ChevronIcon = Mosaic.middleware((_class = class ChevronIcon_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  render() {
    const {
      direction
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "svg", {
      block: "ChevronIcon",
      mods: {
        direction
      },
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "path", {
      d: "M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  direction: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Direction_type__WEBPACK_IMPORTED_MODULE_1__["DirectionType"]
}, _class.defaultProps = {
  direction: _ChevronIcon_config__WEBPACK_IMPORTED_MODULE_2__["RIGHT"]
}, _class), "Component/ChevronIcon/Component");
/* harmony default export */ __webpack_exports__["default"] = (ChevronIcon);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config.js ***!
  \*******************************************************************************************/
/*! exports provided: LEFT, RIGHT, TOP, BOTTOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP", function() { return TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOTTOM", function() { return BOTTOM; });
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
const LEFT = 'left';
const RIGHT = 'right';
const TOP = 'top';
const BOTTOM = 'bottom';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChevronIcon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChevronIcon.component */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ChevronIcon_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Draggable/Draggable.component.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Draggable/Draggable.component.js ***!
  \******************************************************************************************/
/*! exports provided: Draggable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Draggable_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Draggable.style */ "./node_modules/@scandipwa/scandipwa/src/component/Draggable/Draggable.style.scss");
/* harmony import */ var _Draggable_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Draggable_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Draggable/Draggable.component.js";

/* eslint-disable react/no-unused-state */

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





/** #namespace Component/Draggable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Draggable = Mosaic.middleware((_class = class Draggable_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isDragging: false,
      originalX: 0,
      translateX: 0,
      lastTranslateX: 0,
      originalY: 0,
      translateY: 0,
      lastTranslateY: 0
    };
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const {
      shiftX,
      shiftY
    } = props;
    const {
      lastTranslateX,
      lastTranslateY
    } = state;

    if (shiftX !== lastTranslateX || shiftY !== lastTranslateY) {
      return {
        lastTranslateX: shiftX,
        lastTranslateY: shiftY
      };
    }

    return null;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleTouchEnd);
  }

  handleTouchStart(_ref) {
    let {
      touches
    } = _ref;
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleTouchEnd);

    if (touches.length === 1) {
      this.handleDragStart(touches[0]);
    }
  }

  handleMouseDown(event) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    event.preventDefault();
    this.handleDragStart(event);
  }

  handleTouchMove(_ref2) {
    let {
      touches
    } = _ref2;

    if (touches.length === 1) {
      this.handleMouseMove(touches[0]);
    }
  }

  handleMouseMove(_ref3) {
    var _this = this;

    let {
      clientX,
      clientY
    } = _ref3;
    const {
      isDragging
    } = this.state;
    const {
      shiftX,
      shiftY
    } = this.props;

    if (!isDragging) {
      return;
    }

    this.setState(function (_ref4) {
      let {
        originalX,
        originalY
      } = _ref4;
      return {
        translateX: clientX - originalX + shiftX,
        translateY: clientY - originalY + shiftY
      };
    }, function () {
      const {
        onDrag
      } = _this.props;

      if (onDrag) {
        onDrag({ ..._this.state,
          clientX,
          clientY
        });
      }
    });
  }

  handleTouchEnd() {
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleTouchEnd);
    this.handleDragEnd();
  }

  handleMouseUp() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
    this.handleDragEnd();
  }

  handleClick(event) {
    var _this2 = this;

    const {
      onClick
    } = this.props;

    if (onClick) {
      onClick(this.state, function (newState) {
        return _this2.setState({ ...newState,
          isDragging: false,
          translateX: 0,
          translateY: 0
        });
      }, event);
    }
  }

  handleDragStart(_ref5) {
    let {
      clientX,
      clientY
    } = _ref5;
    const {
      onDragStart
    } = this.props;

    if (onDragStart) {
      onDragStart();
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    });
  }

  handleDragEnd() {
    var _this3 = this;

    const {
      onDragEnd
    } = this.props;
    onDragEnd(this.state, function (newState) {
      return _this3.setState({ ...newState,
        isDragging: false,
        translateX: 0,
        translateY: 0
      });
    }); // TO STAY WHERE RELEASED
    // originalX: 0,
    // lastTranslateX: translateX,
    // originalY: 0,
    // lastTranslateY: translateY,
    // TO RETURN INTO INITIAL
    // originalX: 0,
    // lastTranslateX: 0
    // originalY: 0,
    // lastTranslateY: 0
  }

  render() {
    const {
      children,
      handleFocus,
      handleKey,
      draggableRef,
      mix
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Draggable",
      mix: mix,
      ref: draggableRef,
      onMouseDown: this.handleMouseDown,
      onTouchStart: this.handleTouchStart,
      onClick: this.handleClick,
      onContextMenu: this.handleClick,
      onKeyDown: handleKey,
      onFocus: handleFocus,
      tabIndex: 0,
      role: "button",
      "aria-label": "Draggable area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, children);
  }

}, _class.propTypes = {
  shiftX: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  shiftY: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  handleFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  handleKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onDrag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"].isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["MixType"],
  draggableRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["RefType"]
}, _class.defaultProps = {
  shiftX: 0,
  shiftY: 0,
  onDragStart: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  onDragEnd: function (state, callback) {
    const {
      translateX,
      translateY
    } = state;
    callback({
      originalX: 0,
      originalY: 0,
      shiftX: translateX,
      shiftY: translateY
    });
  },
  onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  onDrag: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  handleFocus: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  handleKey: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  draggableRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  mix: {}
}, _class), "Component/Draggable/Component");
/* harmony default export */ __webpack_exports__["default"] = (Draggable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Draggable/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Draggable/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Draggable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draggable.component */ "./node_modules/@scandipwa/scandipwa/src/component/Draggable/Draggable.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Draggable_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.component.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.component.js ***!
  \************************************************************************************/
/*! exports provided: Slider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ChevronIcon */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ChevronIcon/ChevronIcon.config */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Draggable */ "./node_modules/@scandipwa/scandipwa/src/component/Draggable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS_CSS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/CSS/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/CSS.js");
/* harmony import */ var _Slider_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Slider.config */ "./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.config.js");
/* harmony import */ var _Slider_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Slider.style */ "./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.style.scss");
/* harmony import */ var _Slider_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Slider_style__WEBPACK_IMPORTED_MODULE_11__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.component.js";

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












/**
 * Slider component
 * @class Slider
 * #namespace Component/Slider/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Slider = Mosaic.middleware((_class = class Slider_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.sliderWidth = 0;
    this.draggableRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.sliderRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.handleDragStart = this.handleInteraction.bind(this, this.handleDragStart);
    this.handleDrag = this.handleInteraction.bind(this, this.handleDrag);
    this.handleDragEnd = this.handleInteraction.bind(this, this.handleDragEnd);
    this.renderCrumb = this.renderCrumb.bind(this);
    this.renderCounter = this.renderCounter.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  __construct(props) {
    super.__construct(props);

    const {
      activeImage
    } = this.props;
    this.state = {
      prevActiveImage: activeImage
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      activeImage,
      children
    } = props;
    const {
      prevActiveImage
    } = state;

    if (prevActiveImage !== activeImage && children.length !== 1) {
      return {
        prevActiveImage: activeImage
      };
    }

    return null;
  }

  componentDidMount() {
    var _this = this;

    this.addWindowResizeWatcher();

    if (!this.getIsSlider()) {
      return;
    }

    const sliderChildren = this.draggableRef.current.children;
    const sliderWidth = this.draggableRef.current.offsetWidth;
    this.sliderWidth = sliderWidth;

    if (!sliderChildren || !sliderChildren[0]) {
      return;
    }

    const sliderRef = this.getSliderRef();
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(sliderRef, 'sliderOpacity', '0'); // delay setting carousel translate to avoid wrong calculations be made during transition

    setTimeout(function () {
      _this.setStyleVariablesOnMount();
    }, 0);
    const target = sliderChildren[0].querySelector('img') || sliderChildren[0];

    target.onload = function () {
      const height = target.offsetHeight;
      const sliderHeight = `${height}px`;
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(sliderRef, 'slider-height', sliderHeight);
    };

    setTimeout(function () {
      const height = target.offsetHeight;
      const sliderHeight = `${height}px`;

      if (height !== 0) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(sliderRef, 'slider-height', sliderHeight);
      }
    }, _Slider_config__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_DURATION"]);
    setTimeout(function () {
      return _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(sliderRef, 'sliderOpacity', '1');
    }, 0);
  }

  componentDidUpdate(prevProps) {
    const {
      activeImage: prevActiveImage
    } = prevProps;
    const {
      activeImage
    } = this.props;

    if (activeImage !== prevActiveImage && this.getIsSlider()) {
      const newTranslate = -activeImage * this.getSlideWidth() * this.getDir();
      this.setAnimationSpeedStyle(Math.abs((prevActiveImage - activeImage) * _Slider_config__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_DURATION"]));
      this.setTranlateXStyle(newTranslate);
    }
  }

  getDir() {
    const {
      isVertical
    } = this.props;

    if (!isVertical && Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS_CSS__WEBPACK_IMPORTED_MODULE_9__["isRtl"])()) {
      return -1;
    }

    return 1;
  }

  addWindowResizeWatcher() {
    var _this2 = this;

    window.addEventListener('resize', function () {
      const {
        activeImage
      } = _this2.props;

      const newTranslate = -activeImage * _this2.getSlideWidth() * _this2.getDir();

      _this2.setTranlateXStyle(newTranslate); // Removed animation to avoid image movement while changing window width.


      _this2.setAnimationSpeedStyle(0);

      const delay = 500;
      setTimeout(function () {
        _this2.setAnimationSpeedStyle();
      }, delay);
    });
  }

  setStyleVariablesOnMount() {
    const {
      sliderHeight,
      isHeightTransitionDisabledOnMount,
      activeImage
    } = this.props;
    const sliderRef = this.getSliderRef();

    if (isHeightTransitionDisabledOnMount) {
      const transitionSpeed = isHeightTransitionDisabledOnMount ? 0 : `${_Slider_config__WEBPACK_IMPORTED_MODULE_10__["HEIGHT_TRANSITION_SPEED_ON_MOUNT"]}ms`;
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(sliderRef, 'height-transition-speed', transitionSpeed);
    }

    if (sliderHeight) {
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(sliderRef, 'slider-height', sliderHeight);
    }

    const newTranslate = -activeImage * this.getSlideWidth() * this.getDir();
    this.setTranlateXStyle(newTranslate);
  }

  setTranlateXStyle(translate) {
    const {
      isVertical
    } = this.props;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(this.draggableRef, isVertical ? 'translateY' : 'translateX', `${translate}px`);
  }

  setAnimationSpeedStyle() {
    let animationDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Slider_config__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_DURATION"];
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_8__["default"].setVariable(this.draggableRef, 'animation-speed', `${animationDuration}ms`);
  }

  getIsSlider() {
    const {
      children
    } = this.props;
    return children.length > 0;
  }

  getSlideWidth() {
    const {
      isVertical
    } = this.props;
    const {
      offsetWidth = 0,
      offsetHeight = 0
    } = this.draggableRef.current || {};
    return isVertical ? offsetHeight : offsetWidth;
  }

  getSliderRef() {
    const {
      sliderRef
    } = this.props;
    return sliderRef || this.sliderRef;
  }

  onClickChangeSlide(state, slideSize, lastTranslate, fullSliderSize) {
    const {
      originalX
    } = state;
    const {
      prevActiveImage: prevActiveSlider
    } = this.state;
    const {
      onActiveImageChange,
      device,
      onClick
    } = this.props;

    if (onClick) {
      onClick();
      return -prevActiveSlider;
    }

    const fullSliderPoss = Math.round(fullSliderSize / slideSize);
    const elementPositionInDOM = this.draggableRef.current.getBoundingClientRect().x;
    const sliderPosition = -prevActiveSlider;
    const realElementPositionInDOM = elementPositionInDOM - lastTranslate;
    const mousePositionInElement = originalX - realElementPositionInDOM;

    if (device.isMobile) {
      return sliderPosition;
    }

    if (slideSize / 2 < mousePositionInElement && -fullSliderPoss < sliderPosition) {
      const activeSlide = sliderPosition - 1;
      onActiveImageChange(-activeSlide);
      return activeSlide;
    }

    if (slideSize / 2 > mousePositionInElement && lastTranslate) {
      const activeSlide = sliderPosition + 1;
      onActiveImageChange(-activeSlide);
      return activeSlide;
    }

    return sliderPosition;
  }

  getFullSliderWidth() {
    const {
      isVertical
    } = this.props;
    const {
      scrollWidth: fullSliderWidth,
      scrollHeight
    } = this.draggableRef.current;
    const width = isVertical ? scrollHeight : fullSliderWidth;
    return width - this.getSlideWidth();
  }

  calculateNextSlide(state) {
    const {
      isVertical
    } = this.props;
    const {
      translateX,
      translateY,
      lastTranslateX,
      lastTranslateY
    } = state;
    const lastTranslate = isVertical ? lastTranslateY : lastTranslateX;
    const translate = isVertical ? translateY : translateX;
    const {
      onActiveImageChange
    } = this.props;
    const slideSize = this.getSlideWidth();
    const fullSliderSize = this.getFullSliderWidth();
    const dir = this.getDir();
    const activeSlidePosition = translate / slideSize;
    const activeSlidePercent = Math.abs(activeSlidePosition % 1);
    const isSlideBack = dir === 1 ? translate > lastTranslate : translate < lastTranslate;

    if (!translate) {
      return this.onClickChangeSlide(state, slideSize, lastTranslate, fullSliderSize);
    }

    if (dir === 1 && translate >= 0 || dir === -1 && translate < 0) {
      onActiveImageChange(0);
      return 0;
    }

    if (dir === 1 && translate < -fullSliderSize || dir === -1 && translate > fullSliderSize) {
      const activeSlide = Math.round(fullSliderSize / (-slideSize * dir));
      onActiveImageChange(-activeSlide);
      return activeSlide;
    }

    if (isSlideBack && activeSlidePercent < 1 - _Slider_config__WEBPACK_IMPORTED_MODULE_10__["ACTIVE_SLIDE_PERCENT"]) {
      const activeSlide = Math[dir === 1 ? 'ceil' : 'floor'](activeSlidePosition);
      onActiveImageChange(-activeSlide);
      return activeSlide;
    }

    if (!isSlideBack && activeSlidePercent > _Slider_config__WEBPACK_IMPORTED_MODULE_10__["ACTIVE_SLIDE_PERCENT"]) {
      const activeSlide = Math[dir === 1 ? 'floor' : 'ceil'](activeSlidePosition);
      onActiveImageChange(-activeSlide);
      return activeSlide;
    }

    const activeSlide = Math.round(activeSlidePosition);
    onActiveImageChange(-activeSlide);
    return activeSlide;
  }

  handleDragStart() {
    this.setAnimationSpeedStyle(0);
  }

  handleDrag(state) {
    const {
      isVertical
    } = this.props;
    const {
      translateX,
      translateY
    } = state;
    const translate = isVertical ? translateY : translateX;
    const fullSliderSize = this.getFullSliderWidth();
    const dir = this.getDir();
    const canDrag = dir === 1 ? translate < 0 && translate > -fullSliderSize : translate > 0 && translate < fullSliderSize;

    if (canDrag) {
      this.setTranlateXStyle(translate);
    }
  }

  handleDragEnd(state, callback) {
    const {
      isVertical
    } = this.props;
    const activeSlide = this.calculateNextSlide(state);
    const slideSize = this.getSlideWidth();
    const newTranslate = activeSlide * slideSize;
    this.setAnimationSpeedStyle();
    this.setTranlateXStyle(newTranslate);

    if (isVertical) {
      callback({
        originalY: newTranslate,
        lastTranslateY: newTranslate
      });
      return;
    }

    callback({
      originalX: newTranslate,
      lastTranslateX: newTranslate
    });
  }

  handleClick(state, callback, e) {
    if (e.type === 'contextmenu') {
      this.handleDragEnd(state, callback);
    }
  }

  handleInteraction(callback) {
    const {
      isInteractionDisabled
    } = this.props;

    if (isInteractionDisabled || !callback) {
      return;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callback.call(this, ...args);
  }

  changeActiveImage(activeImage) {
    const {
      onActiveImageChange
    } = this.props;
    onActiveImageChange(activeImage);
  }

  goPrev() {
    const {
      activeImage
    } = this.props;

    if (activeImage > 0) {
      this.changeActiveImage(activeImage - 1);
    }
  }

  goNext() {
    const {
      activeImage,
      children
    } = this.props;
    const nextImage = activeImage + 1;

    if (nextImage < children.length) {
      this.changeActiveImage(nextImage);
    }
  }

  renderCounter() {
    const {
      children,
      showCounter,
      activeImage
    } = this.props;

    if (!showCounter || children.length <= 1) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Slider",
      elem: "Counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 13
      }
    }, activeImage + 1, "/", children.length);
  }

  renderCrumbs() {
    const {
      children,
      showCrumbs
    } = this.props;

    if (!showCrumbs || children.length <= 1) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Slider",
      elem: "Crumbs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 13
      }
    }, react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, this.renderCrumb));
  }

  renderCrumb(_, i) {
    var _this3 = this;

    const {
      activeImage
    } = this.props;
    const isActive = i === Math.abs(-activeImage);
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "Slider",
      elem: "Image",
      mods: {
        type: 'single'
      } // eslint-disable-next-line react/jsx-no-bind
      ,
      onClick: function () {
        return _this3.changeActiveImage(i);
      },
      "aria-label": __('Slide crumb'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "Slider",
      elem: "Crumb",
      mods: {
        isActive
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 17
      }
    }));
  }

  renderArrows() {
    const {
      showArrows,
      activeImage,
      children
    } = this.props;
    const nextIsDisabled = activeImage + 1 === children.length;
    const prevIsDisabled = activeImage === 0;

    if (!showArrows) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "button", {
      block: "Slider",
      elem: "Arrow",
      mods: {
        isPrev: true,
        isDisabled: prevIsDisabled
      },
      "aria-label": __('Previous'),
      onClick: this.goPrev,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      direction: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_3__["LEFT"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 21
      }
    })), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Slider",
      elem: "Arrow",
      mods: {
        isNext: true,
        isDisabled: nextIsDisabled
      },
      "aria-label": __('Next'),
      onClick: this.goNext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      direction: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_3__["RIGHT"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 21
      }
    })));
  }

  renderSliderContent() {
    const {
      activeImage,
      children,
      isVertical
    } = this.props;
    const dir = this.getDir();

    if (!this.getIsSlider()) {
      return children;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Draggable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mix: {
        block: 'Slider',
        elem: 'Wrapper',
        mods: {
          isVertical
        }
      },
      draggableRef: this.draggableRef,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      onDrag: this.handleDrag,
      onClick: this.handleClick,
      shiftX: -activeImage * this.getSlideWidth() * dir,
      shiftY: -activeImage * this.getSlideWidth(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 13
      }
    }, children);
  }

  render() {
    const {
      mix
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "Slider",
      mix: mix,
      ref: this.getSliderRef(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 17
      }
    }, this.renderSliderContent(), this.renderCrumbs(), this.renderCounter()), this.renderArrows());
  }

}, _class.propTypes = {
  showCrumbs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showArrows: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showCounter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  activeImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  onActiveImageChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__["MixType"],
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__["ChildrenType"].isRequired,
  isInteractionDisabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__["DeviceType"].isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isVertical: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isHeightTransitionDisabledOnMount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  sliderHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  sliderRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__["RefType"]
}, _class.defaultProps = {
  activeImage: 0,
  onActiveImageChange: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_7__["noopFn"],
  showCrumbs: false,
  showArrows: false,
  showCounter: false,
  isInteractionDisabled: false,
  mix: {},
  onClick: null,
  isVertical: false,
  isHeightTransitionDisabledOnMount: false,
  sliderHeight: null,
  sliderRef: null
}, _class), "Component/Slider/Component");
/* harmony default export */ __webpack_exports__["default"] = (Slider);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.config.js ***!
  \*********************************************************************************/
/*! exports provided: ANIMATION_DURATION, HEIGHT_TRANSITION_SPEED_ON_MOUNT, ACTIVE_SLIDE_PERCENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function() { return ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT_TRANSITION_SPEED_ON_MOUNT", function() { return HEIGHT_TRANSITION_SPEED_ON_MOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_SLIDE_PERCENT", function() { return ACTIVE_SLIDE_PERCENT; });
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
const ANIMATION_DURATION = 300;
const HEIGHT_TRANSITION_SPEED_ON_MOUNT = 300;
const ACTIVE_SLIDE_PERCENT = 0.1;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.container.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.container.js ***!
  \************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.component */ "./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.component.js");
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


/** #namespace Component/Slider/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    device: state.ConfigReducer.device
  };
}, "Component/Slider/Container/mapStateToProps");
/** #namespace Component/Slider/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/Slider/Container/mapDispatchToProps"); // eslint-disable-next-line @scandipwa/scandipwa-guidelines/always-both-mappings

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
})(_Slider_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Slider/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Slider/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.container */ "./node_modules/@scandipwa/scandipwa/src/component/Slider/Slider.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Slider_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.component.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.component.js ***!
  \************************************************************************************************/
/*! exports provided: SliderWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderWidget", function() { return SliderWidget; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Html */ "./node_modules/@scandipwa/scandipwa/src/component/Html/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Image */ "./node_modules/@scandipwa/scandipwa/src/component/Image/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Slider */ "./node_modules/@scandipwa/scandipwa/src/component/Slider/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SliderWidget_SliderWidget_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/SliderWidget/SliderWidget.config */ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Request */ "./node_modules/@scandipwa/scandipwa/src/util/Request/index.js");
/* harmony import */ var _SliderWidget_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SliderWidget.style */ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.style.scss");
/* harmony import */ var _SliderWidget_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SliderWidget_style__WEBPACK_IMPORTED_MODULE_8__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.component.js";

/* eslint-disable react/no-array-index-key */

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









/**
 * Homepage slider
 * @class SliderWidget
 * #namespace Component/SliderWidget/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const SliderWidget = Mosaic.middleware((_class = class SliderWidget_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      activeImage: 0,
      carouselDirection: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SliderWidget_SliderWidget_config__WEBPACK_IMPORTED_MODULE_5__["DIRECTION_RIGHT"]
    };
    this.onActiveImageChange = this.onActiveImageChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      slider: {
        slideSpeed,
        slides
      }
    } = this.props;
    const {
      slider: {
        slideSpeed: prevSlideSpeed
      }
    } = prevProps;
    const {
      activeImage
    } = this.state;
    const {
      activeImage: prevActiveImage
    } = prevState;

    if (!slideSpeed) {
      return;
    }

    if (slideSpeed !== prevSlideSpeed && slides.length !== 1) {
      this.changeSlideDebounced = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_7__["debounce"])(this.changeSlide.bind(this), slideSpeed);
      this.changeSlideDebounced();
    }

    if (prevActiveImage !== activeImage) {
      this.changeSlideDebounced();
    }
  }

  changeSlide() {
    const imageToShow = this.getImageToShow();
    this.onActiveImageChange(imageToShow);
  }

  onActiveImageChange(activeImage) {
    this.setState({
      activeImage
    });
    this.changeDirection(activeImage);
  }

  changeDirection(activeImage) {
    const {
      slider: {
        slides
      }
    } = this.props;

    if (activeImage === 0) {
      this.setState({
        carouselDirection: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SliderWidget_SliderWidget_config__WEBPACK_IMPORTED_MODULE_5__["DIRECTION_RIGHT"]
      });
    }

    if (activeImage === slides.length - 1) {
      this.setState({
        carouselDirection: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SliderWidget_SliderWidget_config__WEBPACK_IMPORTED_MODULE_5__["DIRECTION_LEFT"]
      });
    }
  }

  getImageToShow() {
    const {
      activeImage,
      carouselDirection
    } = this.state;
    return carouselDirection === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SliderWidget_SliderWidget_config__WEBPACK_IMPORTED_MODULE_5__["DIRECTION_RIGHT"] ? activeImage + 1 : activeImage - 1;
  }

  getSlideImage(slide) {
    const {
      desktop_image,
      mobile_image
    } = slide;
    const {
      device
    } = this.props;

    if (device.isMobile && mobile_image) {
      return `/${mobile_image}`;
    }

    if (!desktop_image) {
      return '';
    }

    return `/${desktop_image}`;
  }

  renderSlide(slide, i) {
    const {
      slide_text,
      isPlaceholder,
      title: block
    } = slide;
    return /*#__PURE__*/_checkBEM(React, "figure", {
      block: "SliderWidget",
      elem: "Figure",
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
      mix: {
        block: 'SliderWidget',
        elem: 'FigureImage'
      },
      ratio: "custom",
      src: this.getSlideImage(slide),
      isPlaceholder: isPlaceholder,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "figcaption", {
      block: "SliderWidget",
      elem: "Figcaption",
      mix: {
        block
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: slide_text || '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    })));
  }

  render() {
    const {
      activeImage
    } = this.state;
    const {
      slider: {
        slides,
        title: block
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mix: {
        block: 'SliderWidget',
        mix: {
          block
        }
      },
      showCrumbs: true,
      activeImage: activeImage,
      onActiveImageChange: this.onActiveImageChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }
    }, slides.map(this.renderSlide.bind(this)));
  }

}, _class.propTypes = {
  slider: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    slideSpeed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    slides: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      desktop_image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      mobile_image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      slide_text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      isPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
    }))
  }),
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__["DeviceType"].isRequired
}, _class.defaultProps = {
  slider: [{}]
}, _class), "Component/SliderWidget/Component");
/* harmony default export */ __webpack_exports__["default"] = (SliderWidget);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.config.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.config.js ***!
  \*********************************************************************************************/
/*! exports provided: DIRECTION_RIGHT, DIRECTION_LEFT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_RIGHT", function() { return DIRECTION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_LEFT", function() { return DIRECTION_LEFT; });
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
const DIRECTION_RIGHT = 'right';
const DIRECTION_LEFT = 'left';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.container.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.container.js ***!
  \************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, SliderWidgetContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderWidgetContainer", function() { return SliderWidgetContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_Slider_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/query/Slider.query */ "./node_modules/@scandipwa/scandipwa/src/query/Slider.query.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_DataContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Request/DataContainer */ "./node_modules/@scandipwa/scandipwa/src/util/Request/DataContainer.js");
/* harmony import */ var _SliderWidget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SliderWidget.component */ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.container.js";

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






/** #namespace Component/SliderWidget/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    device: state.ConfigReducer.device,
    isOffline: state.OfflineReducer.isOffline
  };
}, "Component/SliderWidget/Container/mapStateToProps");
/** #namespace Component/SliderWidget/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showNotification: function (type, title, error) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__["showNotification"])(type, title, error));
    }
  };
}, "Component/SliderWidget/Container/mapDispatchToProps");
/** #namespace Component/SliderWidget/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const SliderWidgetContainer = Mosaic.middleware((_class = class SliderWidgetContainer_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_DataContainer__WEBPACK_IMPORTED_MODULE_4__["default"]) {
  constructor() {
    super(...arguments);
    this.state = {
      slider: {
        slideSpeed: 0,
        slides: [{
          image: '',
          slide_text: '',
          isPlaceholder: true
        }]
      }
    };
  }

  __construct(props) {
    const {
      sliderId
    } = props;

    super.__construct(props, `SliderWidgetContainer-${sliderId}`);
  }

  componentDidMount() {
    this.requestSlider();
  }

  componentDidUpdate(prevProps) {
    const {
      sliderId
    } = this.props;
    const {
      sliderId: pSliderId
    } = prevProps;

    if (sliderId !== pSliderId) {
      this.requestSlider();
    }
  }

  containerProps() {
    const {
      device
    } = this.props;
    const {
      slider
    } = this.state;
    return {
      device,
      slider
    };
  }

  requestSlider() {
    var _this = this;

    const {
      sliderId,
      showNotification,
      isOffline
    } = this.props;
    this.fetchData([_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_Slider_query__WEBPACK_IMPORTED_MODULE_2__["default"].getQuery({
      sliderId
    })], function (_ref) {
      let {
        slider
      } = _ref;
      return _this.setState({
        slider
      });
    }, function (e) {
      return showNotification('error', __('Error fetching Slider!'), e);
    }, isOffline);
  }

  _getGalleryPictures() {
    const {
      gallery
    } = this.state;
    return gallery;
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _SliderWidget_component__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  sliderId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isOffline: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/SliderWidget/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SliderWidgetContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SliderWidget_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderWidget.container */ "./node_modules/@scandipwa/scandipwa/src/component/SliderWidget/SliderWidget.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SliderWidget_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/query/Slider.query.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/query/Slider.query.js ***!
  \*********************************************************************/
/*! exports provided: SliderQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderQuery", function() { return SliderQuery; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/util/Query */ "./node_modules/@scandipwa/scandipwa/src/util/Query/index.js");
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

/**
 * Slider Query
 * @class Slider
 * #namespace Query/Slider/Query */

const SliderQuery = Mosaic.middleware(class SliderQuery_ extends Mosaic.Extensible() {
  getQuery(options) {
    const {
      sliderId
    } = options;
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('scandiwebSlider').addArgument('id', 'ID!', sliderId).addFieldList(this._getSliderFields()).setAlias('slider');
  }

  _getSliderFields() {
    return [this._getSlidesField(), this._getSlideSpeedField(), 'slider_id', 'title'];
  }

  _getSlideFields() {
    return ['slide_text', 'slide_id', 'mobile_image', 'desktop_image', 'title', 'is_active'];
  }

  _getSlidesField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('slides').addFieldList(this._getSlideFields());
  }

  _getSlideSpeedField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('slide_speed').setAlias('slideSpeed');
  }

}, "Query/Slider/Query");
/* harmony default export */ __webpack_exports__["default"] = (new SliderQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/route/CategoryPage/CategoryPage.config.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/route/CategoryPage/CategoryPage.config.js ***!
  \*****************************************************************************************/
/*! exports provided: LOADING_TIME, DISPLAY_MODE_PRODUCTS, DISPLAY_MODE_CMS_BLOCK, DISPLAY_MODE_BOTH, LAYOUT_KEY, GRID_LAYOUT, LIST_LAYOUT, SORT_DIRECTION_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_TIME", function() { return LOADING_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_MODE_PRODUCTS", function() { return DISPLAY_MODE_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_MODE_CMS_BLOCK", function() { return DISPLAY_MODE_CMS_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_MODE_BOTH", function() { return DISPLAY_MODE_BOTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_KEY", function() { return LAYOUT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_LAYOUT", function() { return GRID_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_LAYOUT", function() { return LIST_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_DIRECTION_TYPE", function() { return SORT_DIRECTION_TYPE; });
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
const LOADING_TIME = 500;
const DISPLAY_MODE_PRODUCTS = 'PRODUCTS';
const DISPLAY_MODE_CMS_BLOCK = 'PAGE';
const DISPLAY_MODE_BOTH = 'PRODUCTS_AND_PAGE';
const LAYOUT_KEY = 'layout';
const GRID_LAYOUT = 'grid';
const LIST_LAYOUT = 'list';
const SORT_DIRECTION_TYPE = {
  asc: 'ASC',
  desc: 'DESC'
};

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/type/Direction.type.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/type/Direction.type.js ***!
  \**********************************************************************/
/*! exports provided: DirectionType, SortDirectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionType", function() { return DirectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirectionType", function() { return SortDirectionType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/ChevronIcon/ChevronIcon.config */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_CategoryPage_CategoryPage_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/route/CategoryPage/CategoryPage.config */ "./node_modules/@scandipwa/scandipwa/src/route/CategoryPage/CategoryPage.config.js");
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



const DirectionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_1__["RIGHT"], _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_1__["LEFT"], _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_1__["TOP"], _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_1__["BOTTOM"]]);
const SortDirectionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_c = Object.values(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_CategoryPage_CategoryPage_config__WEBPACK_IMPORTED_MODULE_2__["SORT_DIRECTION_TYPE"]));
_c2 = SortDirectionType;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "SortDirectionType$PropTypes.oneOf");
__webpack_require__.$Refresh$.register(_c2, "SortDirectionType");

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/CSS/CSS.js":
/*!***************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/CSS/CSS.js ***!
  \***************************************************************/
/*! exports provided: CSS, getElementHeight, getFixedElementHeight, isRtl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS", function() { return CSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementHeight", function() { return getElementHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFixedElementHeight", function() { return getFixedElementHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return isRtl; });
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

/**
 * Set of helpers related to CSS
 * @class CSS
 * #namespace Util/CSS
 */
const CSS = Mosaic.middleware(class CSS_ extends Mosaic.Extensible() {
  /**
   * Change CSS custom property in referenced node scope
   * @static
   * @param  {HTMLElement} ref React reference to an HTML element (node).
   * @param  {String} name CSS variable name (without `--`).
   * @param  {String} value CSS variable value.
   * @return {void}
   * @memberof CSS
   */
  static setVariable(ref, name, value) {
    if (ref && ref.current) {
      ref.current.style.setProperty(`--${name}`, value);
    }
  }

}, "Util/CSS");
/** #namespace Util/CSS/getElementHeight */

const getElementHeight = Mosaic.middleware(function (id) {
  return Array.from(document.getElementsByClassName(id)).reduce(function (acc, item) {
    const {
      offsetHeight
    } = item;
    return acc + offsetHeight;
  }, 0);
}, "Util/CSS/getElementHeight");
/** #namespace Util/CSS/getFixedElementHeight */

const getFixedElementHeight = Mosaic.middleware(function () {
  const top = getElementHeight('FixedElement-Top');
  const bottom = getElementHeight('FixedElement-Bottom');
  return {
    total: top + bottom,
    top,
    bottom
  };
}, "Util/CSS/getFixedElementHeight");
/** #namespace Util/CSS/isRtl */

const isRtl = Mosaic.middleware(function () {
  return document.documentElement.getAttribute('dir') === 'rtl';
}, "Util/CSS/isRtl");
/* harmony default export */ __webpack_exports__["default"] = (CSS);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js ***!
  \*****************************************************************/
/*! exports provided: default, getFixedElementHeight, getElementHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/CSS.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CSS__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFixedElementHeight", function() { return _CSS__WEBPACK_IMPORTED_MODULE_0__["getFixedElementHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementHeight", function() { return _CSS__WEBPACK_IMPORTED_MODULE_0__["getElementHeight"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Request/DataContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Request/DataContainer.js ***!
  \*****************************************************************************/
/*! exports provided: DataContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContainer", function() { return DataContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/util/Promise */ "./node_modules/@scandipwa/scandipwa/src/util/Promise/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Query */ "./node_modules/@scandipwa/scandipwa/src/util/Query/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Request */ "./node_modules/@scandipwa/scandipwa/src/util/Request/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_Hash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Request/Hash */ "./node_modules/@scandipwa/scandipwa/src/util/Request/Hash.js");
/* harmony import */ var _QueryDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QueryDispatcher */ "./node_modules/@scandipwa/scandipwa/src/util/Request/QueryDispatcher.js");
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







/** #namespace Util/Request/DataContainer */

const DataContainer = Mosaic.middleware(class DataContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  __construct(props, dataModelName) {
    let isShouldListenForBroadcast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let cacheTTL = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _QueryDispatcher__WEBPACK_IMPORTED_MODULE_6__["ONE_MONTH_IN_SECONDS"];

    super.__construct(props);

    this.dataModelName = dataModelName;
    this.isShouldListenForBroadcast = isShouldListenForBroadcast;
    this.cacheTTL = cacheTTL;
    this.promise = null;
  }

  componentWillUnmount() {
    if (this.promise) {
      this.promise.cancel();
    }
  }

  fetchData(rawQueries) {
    let onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_1__["noopFn"];
    let onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_1__["noopFn"];
    let takeFromWindowCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    const preparedQuery = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_3__["prepareQuery"])(rawQueries);
    const {
      query,
      variables
    } = preparedQuery;
    const queryHash = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_Hash__WEBPACK_IMPORTED_MODULE_5__["hash"])(query + JSON.stringify(variables));

    if (!window.dataCache) {
      window.dataCache = {};
    }

    if (takeFromWindowCache && window.dataCache[queryHash]) {
      onSuccess(window.dataCache[queryHash]);
      return;
    }

    this.promise = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Promise__WEBPACK_IMPORTED_MODULE_2__["makeCancelable"])(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_4__["executeGet"])(preparedQuery, this.dataModelName, this.cacheTTL));
    this.promise.promise.then(
    /** #namespace Util/Request/DataContainer/DataContainer/fetchData/then */
    Mosaic.middleware(function (response) {
      window.dataCache[queryHash] = response;
      onSuccess(response);
    }, "Util/Request/DataContainer/DataContainer/fetchData/then"),
    /** #namespace Util/Request/DataContainer/DataContainer/fetchData/then/onError/catch */
    Mosaic.middleware(function (err) {
      return onError(err);
    }, "Util/Request/DataContainer/DataContainer/fetchData/then/onError/catch"));

    if (this.isShouldListenForBroadcast) {
      Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_4__["listenForBroadCast"])(this.dataModelName).then(
      /** @namespace Util/Request/DataContainer/DataContainer/fetchData/listenForBroadCast/then/onSuccess */
      onSuccess);
    }
  }

}, "Util/Request/DataContainer");
/* harmony default export */ __webpack_exports__["default"] = (DataContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ })

}]);
//# sourceMappingURL=widget-slider.chunk.js.map