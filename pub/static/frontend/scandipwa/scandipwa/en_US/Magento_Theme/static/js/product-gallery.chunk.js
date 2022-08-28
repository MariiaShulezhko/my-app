(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["product-gallery"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.component.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.component.js ***!
  \****************************************************************************************************/
/*! exports provided: CarouselScroll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselScroll", function() { return CarouselScroll; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CarouselScroll/CarouselScroll.config */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScrollArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CarouselScrollArrow */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScrollItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/CarouselScrollItem */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS_CSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/CSS/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/CSS.js");
/* harmony import */ var _CarouselScroll_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CarouselScroll.style */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.style.scss");
/* harmony import */ var _CarouselScroll_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CarouselScroll_style__WEBPACK_IMPORTED_MODULE_9__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.component.js";

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










/** #namespace Component/CarouselScroll/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CarouselScroll = Mosaic.middleware((_class = class CarouselScroll_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      activeItemId: 0,
      firstCarouselItemId: 0
    };
    this.itemRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.carouselRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {
      showedItemCount
    } = this.props;
    const margin = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_2__["CAROUSEL_ITEM_GAP"];
    const width = this.getCarouselWidth(showedItemCount);
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__["default"].setVariable(this.carouselRef, 'carousel-scroll-gap', `${margin}px`);
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__["default"].setVariable(this.carouselRef, 'carousel-width', width);
  }

  componentDidUpdate(prevProps) {
    const {
      children: {
        length: prevChildrenLength
      },
      showedItemCount: prevShowedItemCount
    } = prevProps;
    const {
      activeItemId,
      children: {
        length: childrenLength
      },
      showedItemCount
    } = this.props;
    const {
      activeItemId: prevActiveItemId
    } = this.state;

    if (prevChildrenLength !== childrenLength) {
      this.handleReset();
      return;
    }

    if (activeItemId !== null && activeItemId !== prevActiveItemId) {
      this.handleChange(activeItemId);
    }

    if (prevShowedItemCount !== showedItemCount) {
      const width = this.getCarouselWidth(showedItemCount);
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__["default"].setVariable(this.carouselRef, 'carousel-width', width);
      this.updateFirstSlide();
    }
  }

  updateFirstSlide() {
    const {
      firstCarouselItemId
    } = this.state;
    const maxId = this.getMaxFirstItemId();

    if (firstCarouselItemId > maxId) {
      this.setTranslate(maxId);
      this.setState({
        firstCarouselItemId: maxId
      });
    }
  }

  getCarouselWidth(showedItemCount) {
    const margin = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_2__["CAROUSEL_ITEM_GAP"];
    const {
      offsetWidth: cardWidth
    } = this.itemRef.current;
    return `${(margin + cardWidth) * showedItemCount - margin}px`;
  }

  getNextTranslate(nextId) {
    const {
      offsetWidth
    } = this.itemRef.current;
    const multiplier = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS_CSS__WEBPACK_IMPORTED_MODULE_8__["isRtl"])() ? nextId : -nextId;
    return `${multiplier * (offsetWidth + _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_2__["CAROUSEL_ITEM_GAP"])}px`;
  }

  setTranslate(nextId) {
    const translate = this.getNextTranslate(nextId);
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__["default"].setVariable(this.carouselRef, 'translateX', translate);
  }

  getMaxFirstItemId() {
    const {
      children: {
        length: childrenLength
      },
      showedItemCount
    } = this.props;
    return Math.max(childrenLength - showedItemCount, 0);
  }

  getNewCarouselItemId(isNextArrow) {
    const {
      showedItemCount
    } = this.props;
    const {
      firstCarouselItemId: prevFirstCarouselItemId
    } = this.state;
    const scrollStep = Math.ceil(showedItemCount / 2);
    return isNextArrow ? Math.min(prevFirstCarouselItemId + scrollStep, this.getMaxFirstItemId()) : Math.max(prevFirstCarouselItemId - scrollStep, 0);
  }

  handleArrowClick(isNextArrow) {
    const firstCarouselItemId = this.getNewCarouselItemId(isNextArrow);
    this.setTranslate(firstCarouselItemId);
    this.setState({
      firstCarouselItemId
    });
  }

  handleChange(nextId) {
    const {
      onChange,
      showedItemCount
    } = this.props;
    const {
      firstCarouselItemId
    } = this.state;
    onChange(nextId);
    this.setState({
      activeItemId: nextId
    });

    if (nextId < firstCarouselItemId || nextId >= firstCarouselItemId + showedItemCount) {
      const newId = Math.min(this.getMaxFirstItemId(), nextId);
      this.setTranslate(newId);
      this.setState({
        firstCarouselItemId: newId
      });
    }
  }

  handleReset() {
    const {
      onChange
    } = this.props;
    const activeItemId = 0;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__["default"].setVariable(this.carouselRef, 'translateX', 0);
    onChange(activeItemId);
    this.setState({
      activeItemId
    });
  }

  renderArrow() {
    let isNextArrow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const {
      showArrow,
      children: {
        length: childrenLength
      },
      showedItemCount
    } = this.props;
    const {
      firstCarouselItemId
    } = this.state;

    if (!showArrow || childrenLength <= showedItemCount) {
      return null;
    } // render hidden arrow to avoid carousel jumping on error hide/appear


    const isInvisible = !isNextArrow && firstCarouselItemId === 0 || isNextArrow && firstCarouselItemId >= this.getMaxFirstItemId();
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScrollArrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isNextArrow: isNextArrow,
      onClick: this.handleArrowClick,
      isInvisible: isInvisible,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }
    });
  }

  renderContentItem(child, key) {
    const {
      activeItemId
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScrollItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: key,
      position: key,
      onClick: this.handleChange,
      itemRef: this.itemRef,
      isActive: key === activeItemId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }
    }, child);
  }

  renderContent() {
    const {
      children,
      isImageZoomPopupActive
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CarouselScroll",
      elem: "ContentWrapper",
      mods: {
        isImageZoomPopupActive
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CarouselScroll",
      elem: "Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, children.map(this.renderContentItem.bind(this))));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CarouselScroll",
      ref: this.carouselRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 13
      }
    }, this.renderArrow(), this.renderContent(), this.renderArrow(true));
  }

}, _class.propTypes = {
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__["ChildrenType"].isRequired,
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showedItemCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  activeItemId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  isImageZoomPopupActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  showArrow: true,
  showedItemCount: 1,
  onChange: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_6__["noopFn"],
  activeItemId: null,
  isImageZoomPopupActive: false
}, _class), "Component/CarouselScroll/Component");
/* harmony default export */ __webpack_exports__["default"] = (CarouselScroll);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.config.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.config.js ***!
  \*************************************************************************************************/
/*! exports provided: CAROUSEL_ITEM_GAP, CAROUSEL_ITEM_WIDTH, ARROW_SAFE_AREA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAROUSEL_ITEM_GAP", function() { return CAROUSEL_ITEM_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAROUSEL_ITEM_WIDTH", function() { return CAROUSEL_ITEM_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_SAFE_AREA", function() { return ARROW_SAFE_AREA; });
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
const CAROUSEL_ITEM_GAP = 18;
const CAROUSEL_ITEM_WIDTH = 55;
const ARROW_SAFE_AREA = 25;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselScroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselScroll.component */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CarouselScroll_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.component.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: CarouselScrollArrow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselScrollArrow", function() { return CarouselScrollArrow; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ChevronIcon */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _CarouselScrollArrow_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CarouselScrollArrow.style */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.style.scss");
/* harmony import */ var _CarouselScrollArrow_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CarouselScrollArrow_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.component.js";

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






/** #namespace Component/CarouselScrollArrow/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CarouselScrollArrow = Mosaic.middleware((_class = class CarouselScrollArrow_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      mods,
      onClick
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "CarouselScrollArrow",
      mods: mods,
      onClick: onClick,
      "aria-label": "Arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  mods: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["ModsType"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
}, _class.defaultProps = {
  mods: {},
  onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__["noopFn"]
}, _class), "Component/CarouselScrollArrow/Component");
/* harmony default export */ __webpack_exports__["default"] = (CarouselScrollArrow);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.container.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.container.js ***!
  \**************************************************************************************************************/
/*! exports provided: CarouselScrollArrowContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselScrollArrowContainer", function() { return CarouselScrollArrowContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CarouselScrollArrow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselScrollArrow.component */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.container.js";

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



/** #namespace Component/CarouselScrollArrow/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CarouselScrollArrowContainer = Mosaic.middleware((_class = class CarouselScrollArrowContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onClick: this.onClick.bind(this)
    };
  }

  containerProps() {
    const {
      isNextArrow,
      isInvisible
    } = this.props;
    return {
      mods: {
        isNextArrow,
        isInvisible
      }
    };
  }

  onClick() {
    const {
      onClick,
      isNextArrow
    } = this.props;
    onClick(isNextArrow);
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CarouselScrollArrow_component__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  isNextArrow: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isInvisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/CarouselScrollArrow/Container");
/* harmony default export */ __webpack_exports__["default"] = (CarouselScrollArrowContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselScrollArrow_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselScrollArrow.container */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollArrow/CarouselScrollArrow.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CarouselScrollArrow_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.component.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.component.js ***!
  \************************************************************************************************************/
/*! exports provided: CarouselScrollItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselScrollItem", function() { return CarouselScrollItem; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _CarouselScrollItem_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselScrollItem.style */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.style.scss");
/* harmony import */ var _CarouselScrollItem_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CarouselScrollItem_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.component.js";

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




/** #namespace Component/CarouselScrollItem/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CarouselScrollItem = Mosaic.middleware((_class = class CarouselScrollItem_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      isActive,
      itemRef,
      onClick,
      children
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      role: "button",
      tabIndex: 0,
      block: "CarouselScrollItem",
      mods: {
        isActive
      },
      ref: itemRef,
      onClick: onClick,
      onKeyDown: onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, children);
  }

}, _class.propTypes = {
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  itemRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["RefType"].isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"].isRequired
}, _class), "Component/CarouselScrollItem/Component");
/* harmony default export */ __webpack_exports__["default"] = (CarouselScrollItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.container.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.container.js ***!
  \************************************************************************************************************/
/*! exports provided: CarouselScrollItemContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselScrollItemContainer", function() { return CarouselScrollItemContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _CarouselScrollItem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselScrollItem.component */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.container.js";

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





/** #namespace Component/CarouselScrollItem/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CarouselScrollItemContainer = Mosaic.middleware((_class = class CarouselScrollItemContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onClick: this.onClick.bind(this)
    };
  }

  containerProps() {
    const {
      isActive,
      itemRef,
      children
    } = this.props;
    return {
      isActive,
      itemRef,
      children
    };
  }

  onClick() {
    const {
      onClick,
      position
    } = this.props;
    onClick(position);
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CarouselScrollItem_component__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  itemRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["RefType"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"],
  position: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
}, _class.defaultProps = {
  isActive: false,
  itemRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  children: []
}, _class), "Component/CarouselScrollItem/Container");
/* harmony default export */ __webpack_exports__["default"] = (CarouselScrollItemContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselScrollItem_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselScrollItem.container */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScrollItem/CarouselScrollItem.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CarouselScrollItem_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.component.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.component.js ***!
  \****************************************************************************************************/
/*! exports provided: ImageZoomPopup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageZoomPopup", function() { return ImageZoomPopup; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_TranslateOnCursorMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/TranslateOnCursorMove */ "./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _ImageZoomPopup_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageZoomPopup.style */ "./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.style.scss");
/* harmony import */ var _ImageZoomPopup_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ImageZoomPopup_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.component.js";

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





/** #namespace Component/ImageZoomPopup/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ImageZoomPopup = Mosaic.middleware((_class = class ImageZoomPopup_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      children,
      activeImageId
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ImageZoomPopup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_TranslateOnCursorMove__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeImageId: activeImageId,
      itemSelector: ".ProductGallery-SliderImage, .VideoThumbnail",
      targetSelector: ".Image-Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, children));
  }

}, _class.propTypes = {
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["ChildrenType"].isRequired,
  activeImageId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
}, _class), "Component/ImageZoomPopup/Component");
/* harmony default export */ __webpack_exports__["default"] = (ImageZoomPopup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.container.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.container.js ***!
  \****************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, ImageZoomPopupContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageZoomPopupContainer", function() { return ImageZoomPopupContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Popup */ "./node_modules/@scandipwa/scandipwa/src/component/Popup/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/store/Overlay/Overlay.action */ "./node_modules/@scandipwa/scandipwa/src/store/Overlay/Overlay.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Popup/Popup.action */ "./node_modules/@scandipwa/scandipwa/src/store/Popup/Popup.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _ImageZoomPopup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageZoomPopup.component */ "./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.container.js";

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









/** #namespace Component/ImageZoomPopup/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/ImageZoomPopup/Container/mapStateToProps");
/** #namespace Component/ImageZoomPopup/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showPopup: function (id, payload) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_5__["showPopup"])(id, payload));
    },
    hideActiveOverlay: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_4__["hideActiveOverlay"])());
    }
  };
}, "Component/ImageZoomPopup/Container/mapDispatchToProps");
/** #namespace Component/ImageZoomPopup/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ImageZoomPopupContainer = Mosaic.middleware((_class = class ImageZoomPopupContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  componentDidUpdate(prevProps) {
    const {
      isActive: prevIsActive,
      popupId
    } = prevProps;
    const {
      isActive,
      showPopup
    } = this.props;

    if (prevIsActive !== isActive && isActive) {
      showPopup(popupId, {});
    }
  }

  containerProps() {
    const {
      children,
      activeImageId
    } = this.props;
    return {
      children,
      activeImageId
    };
  }

  render() {
    const {
      isActive,
      children,
      mix,
      popupId,
      isMobile,
      onClose
    } = this.props;

    if (!isActive || isMobile) {
      return children;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: popupId,
      clickOutside: false,
      mix: {
        block: 'ImageZoomPopup',
        mix
      },
      contentMix: {
        block: 'ImageZoomPopup',
        elem: 'PopupContent'
      },
      onClose: onClose,
      onHide: onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _ImageZoomPopup_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    })));
  }

}, _class.propTypes = {
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__["ChildrenType"].isRequired,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  hideActiveOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  popupId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  activeImageId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__["MixType"]
}, _class.defaultProps = {
  onClose: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_7__["noopFn"],
  mix: {}
}, _class), "Component/ImageZoomPopup/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ImageZoomPopupContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageZoomPopup_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageZoomPopup.container */ "./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/ImageZoomPopup.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ImageZoomPopup_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Popup/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Popup/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.container */ "./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popup_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.component.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.component.js ***!
  \****************************************************************************************************/
/*! exports provided: ProductGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGallery", function() { return ProductGallery; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.es.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/CarouselScroll */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/CarouselScroll/CarouselScroll.config */ "./node_modules/@scandipwa/scandipwa/src/component/CarouselScroll/CarouselScroll.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/Image */ "./node_modules/@scandipwa/scandipwa/src/component/Image/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGalleryBaseImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/component/ProductGalleryBaseImage */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGalleryThumbnailImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/component/ProductGalleryThumbnailImage */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/component/Slider */ "./node_modules/@scandipwa/scandipwa/src/component/Slider/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_VideoPopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/component/VideoPopup */ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_VideoThumbnail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/component/VideoThumbnail */ "./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _ProductGallery_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProductGallery.config */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.config.js");
/* harmony import */ var _ProductGallery_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ProductGallery.style */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.style.scss");
/* harmony import */ var _ProductGallery_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ProductGallery_style__WEBPACK_IMPORTED_MODULE_16__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.component.js";

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
 * Product gallery
 * @class ProductGallery
 * #namespace Component/ProductGallery/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductGallery = Mosaic.middleware((_class = class ProductGallery_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.maxScale = _ProductGallery_config__WEBPACK_IMPORTED_MODULE_15__["MAX_ZOOM_SCALE"];
    this.imageRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.galleryRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.state = {
      scrollEnabled: true,
      slidesCount: 7,
      prevZoom: false
    };
    this.handleSliderClick = this.handleSliderClick.bind(this);
    this.calculateGallerySize = this._calculateGallerySize.bind(this);
    this.onWheel = this.onWheel.bind(this);
  }

  __construct(props, context) {
    super.__construct(props, context);

    this.renderSlide = this.renderSlide.bind(this);
  }

  componentDidMount() {
    this.updateSharedDestinationElement();
    window.addEventListener('resize', this.calculateGallerySize);
  }

  componentDidUpdate(prevProps) {
    var _sliderRef$current;

    const {
      productId,
      location: {
        pathname
      },
      sliderRef,
      isImageZoomPopupActive
    } = this.props;
    const {
      productId: prevProductId,
      location: {
        pathname: prevPathname
      }
    } = prevProps;
    const {
      prevZoom
    } = this.state;

    if (productId !== prevProductId) {
      this.updateSharedDestinationElement();
    }

    if ((sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.draggableRef) && pathname !== prevPathname) {
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_14__["default"].setVariable(sliderRef.current.draggableRef, 'animation-speed', 0);
    }

    if (isImageZoomPopupActive !== prevZoom) {
      this.handleZoomChange(isImageZoomPopupActive);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateGallerySize);
  }

  handleZoomChange(prevZoom) {
    setTimeout(this.calculateGallerySize, 0);
    this.setState({
      prevZoom
    });
  }

  _calculateGallerySize() {
    const {
      isMobile
    } = this.props;
    const ref = this.galleryRef.current;

    if (!ref || isMobile) {
      return;
    }

    const {
      width
    } = ref.getBoundingClientRect();
    const slidesCount = Math.floor((width - _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_5__["ARROW_SAFE_AREA"] * 2) / (_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_5__["CAROUSEL_ITEM_WIDTH"] + _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll_CarouselScroll_config__WEBPACK_IMPORTED_MODULE_5__["CAROUSEL_ITEM_GAP"]));
    this.setState({
      slidesCount
    });
  }

  handleSliderClick() {
    const {
      handleImageZoomPopupActiveChange,
      gallery,
      activeImage
    } = this.props;
    const {
      media_type
    } = gallery[activeImage];

    if (media_type === _ProductGallery_config__WEBPACK_IMPORTED_MODULE_15__["VIDEO_TYPE"]) {
      return;
    }

    handleImageZoomPopupActiveChange(true);
  }

  updateSharedDestinationElement() {
    const {
      registerSharedElementDestination
    } = this.props;
    registerSharedElementDestination(this.imageRef);
  }

  renderAdditionalPicture(media) {
    let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGalleryThumbnailImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: index,
      media: media,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    });
  }
  /**
   * Renders a video thumbnail which opens popup player on click/tap
   * @param media
   * @param index
   * @returns {*}
   * @private
   */


  renderVideo(media, index) {
    const {
      isImageZoomPopupActive,
      handleImageZoomPopupActiveChange
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_VideoThumbnail__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: index,
      media: media,
      isVideoZoomed: isImageZoomPopupActive,
      onZoomedVideoClick: handleImageZoomPopupActiveChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    });
  }

  renderPlaceholder(index) {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      ratio: "custom",
      mix: {
        block: 'ProductGallery',
        elem: 'SliderImage',
        mods: {
          isPlaceholder: true
        }
      },
      isPlaceholder: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    });
  }

  stopScrolling() {
    var _this = this;

    this.setState({
      scrollEnabled: false
    });
    this.timeout = setTimeout(function () {
      _this.setState({
        scrollEnabled: true
      });

      _this.timeout = null; // 20 ms is time give to scroll down, usually that is enough
      // eslint-disable-next-line no-magic-numbers
    }, 20);
  }

  onWheel(zoomState) {
    const {
      scale
    } = zoomState;

    if (this.timeout) {
      return;
    }

    if (scale === 1 || scale === _ProductGallery_config__WEBPACK_IMPORTED_MODULE_15__["MAX_ZOOM_SCALE"]) {
      this.stopScrolling();
    }
  }
  /**
   * Renders a product image to be displayed in the gallery
   * @param mediaData
   * @param index
   * @returns {*}
   * @private
   */


  renderImage(mediaData, index) {
    var _this2 = this;

    const {
      isZoomEnabled,
      handleZoomChange,
      disableZoom,
      isMobile,
      isImageZoomPopupActive,
      showLoader
    } = this.props;
    const {
      scrollEnabled
    } = this.state;

    if (!isMobile) {
      const {
        base: {
          url: baseSrc
        } = {},
        large: {
          url: largeSrc
        } = {}
      } = mediaData;
      const style = isImageZoomPopupActive ? {
        height: 'auto'
      } : {};
      const src = isImageZoomPopupActive ? largeSrc || baseSrc : baseSrc;
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: index,
        src: src,
        ratio: "custom",
        mix: {
          block: 'ProductGallery',
          elem: 'SliderImage',
          mods: {
            isPlaceholder: !src
          }
        },
        isPlaceholder: !src,
        style: style,
        showIsLoading: showLoader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 17
        }
      });
    }

    return /*#__PURE__*/_checkBEM(React, react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__["TransformWrapper"], {
      key: index,
      onZoomChange: handleZoomChange,
      onWheelStart: this.onWheelStart,
      onWheel: this.onWheel,
      wheel: {
        limitsOnWheel: true,
        disabled: !scrollEnabled
      } //   doubleClick={ { mode: 'reset' } }
      ,
      pan: {
        disabled: !isZoomEnabled,
        limitToWrapperBounds: true,
        velocity: false
      },
      options: {
        limitToBounds: true,
        minScale: 1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 13
      }
    }, function (_ref) {
      let {
        scale,
        previousScale,
        resetTransform,
        setTransform
      } = _ref;

      if (scale === 1 && previousScale !== 1) {
        resetTransform();
      }

      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGalleryBaseImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        setTransform: setTransform,
        index: index,
        mediaData: mediaData,
        scale: scale,
        previousScale: previousScale,
        disableZoom: disableZoom,
        isZoomEnabled: isZoomEnabled,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 25
        }
      });
    });
  }
  /**
   * Checks for the type of the slide and renders it accordingly
   * @param media
   * @param index
   * @returns {null|*}
   */


  renderSlide(media, index) {
    const {
      media_type
    } = media;

    switch (media_type) {
      case _ProductGallery_config__WEBPACK_IMPORTED_MODULE_15__["IMAGE_TYPE"]:
        return this.renderImage(media, index);

      case _ProductGallery_config__WEBPACK_IMPORTED_MODULE_15__["VIDEO_TYPE"]:
        return this.renderVideo(media, index);

      case _ProductGallery_config__WEBPACK_IMPORTED_MODULE_15__["PLACEHOLDER_TYPE"]:
        return this.renderPlaceholder(index);

      default:
        return null;
    }
  }

  renderAdditionalPictures() {
    const {
      gallery,
      isImageZoomPopupActive,
      activeImage,
      onActiveImageChange,
      isWithEmptySwitcher
    } = this.props;
    const {
      slidesCount
    } = this.state;

    if (gallery.length === 1) {
      return /*#__PURE__*/_checkBEM(React, "div", {
        block: "ProductGallery",
        elem: "Additional",
        mods: {
          isWithEmptySwitcher
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 20
        }
      });
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ProductGallery",
      elem: "Additional",
      mods: {
        isImageZoomPopupActive
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CarouselScroll__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeItemId: activeImage,
      onChange: onActiveImageChange,
      showedItemCount: slidesCount,
      isImageZoomPopupActive: isImageZoomPopupActive,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 17
      }
    }, gallery.map(this.renderAdditionalPicture.bind(this))));
  }

  getImageUrl() {
    const {
      gallery: [{
        thumbnail: {
          url = ''
        } = {}
      }] = []
    } = this.props;
    return url;
  }

  renderSlider() {
    const {
      gallery,
      activeImage,
      isZoomEnabled,
      onActiveImageChange,
      isImageZoomPopupActive,
      sliderRef,
      isMobile
    } = this.props;
    const mods = {
      isImageZoomPopupActive,
      isZoomInCursor: !isImageZoomPopupActive
    };
    const isMoreThanOnePhoto = gallery.length > 1;
    return /*#__PURE__*/_checkBEM(React, "div", {
      ref: this.imageRef,
      block: "ProductGallery",
      elem: "SliderWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "image",
      content: this.getImageUrl(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sliderRef: sliderRef,
      mix: {
        block: 'ProductGallery',
        elem: 'Slider',
        mods
      },
      showCounter: isMobile,
      showArrows: !isMobile && isMoreThanOnePhoto,
      activeImage: activeImage,
      onActiveImageChange: onActiveImageChange,
      isInteractionDisabled: isZoomEnabled,
      onClick: this.handleSliderClick,
      sliderHeight: isImageZoomPopupActive ? '100%' : 0,
      isHeightTransitionDisabledOnMount: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 17
      }
    }, gallery.map(this.renderSlide)));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ProductGallery",
      ref: this.galleryRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 13
      }
    }, this.renderSlider(), this.renderAdditionalPictures(), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_VideoPopup__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  gallery: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    isPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    alt: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    media_type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired,
  productId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  isZoomEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  activeImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  onActiveImageChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleZoomChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  registerSharedElementDestination: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  disableZoom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  location: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_13__["LocationType"].isRequired,
  sliderRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_12__["RefType"].isRequired,
  handleImageZoomPopupActiveChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isImageZoomPopupActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isWithEmptySwitcher: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  showLoader: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class.defaultProps = {
  productId: 0
}, _class), "Component/ProductGallery/Component");
/* harmony default export */ __webpack_exports__["default"] = (_c = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ProductGallery));

var _c;

__webpack_require__.$Refresh$.register(_c, "%default%");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.config.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.config.js ***!
  \*************************************************************************************************/
/*! exports provided: MAX_ZOOM_SCALE, IMAGE_TYPE, VIDEO_TYPE, PLACEHOLDER_TYPE, THUMBNAIL_KEY, AMOUNT_OF_PLACEHOLDERS, PRODUCT_GALERY_POPUP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ZOOM_SCALE", function() { return MAX_ZOOM_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_TYPE", function() { return IMAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_TYPE", function() { return VIDEO_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_TYPE", function() { return PLACEHOLDER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THUMBNAIL_KEY", function() { return THUMBNAIL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_OF_PLACEHOLDERS", function() { return AMOUNT_OF_PLACEHOLDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_GALERY_POPUP_ID", function() { return PRODUCT_GALERY_POPUP_ID; });
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
const MAX_ZOOM_SCALE = 8;
const IMAGE_TYPE = 'image';
const VIDEO_TYPE = 'external-video';
const PLACEHOLDER_TYPE = 'placeholder';
const THUMBNAIL_KEY = 'small_image';
const AMOUNT_OF_PLACEHOLDERS = 0;
const PRODUCT_GALERY_POPUP_ID = 'ProductGalleryPopup';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.container.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.container.js ***!
  \****************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, ProductGalleryContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGalleryContainer", function() { return ProductGalleryContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ImageZoomPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/ImageZoomPopup */ "./node_modules/@scandipwa/scandipwa/src/component/ImageZoomPopup/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Product_Product_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Product/Product.config */ "./node_modules/@scandipwa/scandipwa/src/component/Product/Product.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SharedTransition_SharedTransition_unstated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/SharedTransition/SharedTransition.unstated */ "./node_modules/@scandipwa/scandipwa/src/component/SharedTransition/SharedTransition.unstated.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cache_Cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Cache/Cache */ "./node_modules/@scandipwa/scandipwa/src/util/Cache/Cache.js");
/* harmony import */ var _ProductGallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductGallery.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.component.js");
/* harmony import */ var _ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductGallery.config */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.container.js";

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











/** #namespace Component/ProductGallery/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/ProductGallery/Container/mapStateToProps");
/** #namespace Component/ProductGallery/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/ProductGallery/Container/mapDispatchToProps");
/** #namespace Component/ProductGallery/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductGalleryContainer = Mosaic.middleware((_class = class ProductGalleryContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.sliderRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.containerFunctions = {
      onActiveImageChange: this.onActiveImageChange.bind(this),
      handleZoomChange: this.handleZoomChange.bind(this),
      disableZoom: this.disableZoom.bind(this),
      handleImageZoomPopupActiveChange: this.handleImageZoomPopupActiveChange.bind(this)
    };
    this.handleImageZoomPopupClose = this.handleImageZoomPopupClose.bind(this);
  }

  __construct(props) {
    super.__construct(props);

    const {
      product: {
        id
      } = {}
    } = props;
    this.state = {
      activeImage: this.getBaseImage(),
      isZoomEnabled: false,
      prevProdId: id,
      isImageZoomPopupActive: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      product: {
        id
      }
    } = props;
    const {
      prevProdId,
      activeImage
    } = state;

    if (prevProdId === id) {
      return null;
    }

    return {
      prevProdId: id,
      activeImage
    };
  }

  componentDidMount() {
    this.cacheImages();
  }

  componentDidUpdate(prevProps) {
    const {
      product: {
        media_gallery_entries: mediaGallery = []
      },
      isZoomEnabled,
      areDetailsLoaded
    } = this.props;
    const {
      product: {
        media_gallery_entries: prevMediaGallery = []
      },
      isZoomEnabled: prevZoomEnabled
    } = prevProps;

    if (mediaGallery !== prevMediaGallery || isZoomEnabled !== prevZoomEnabled) {
      this.onActiveImageChange(this.getBaseImage());

      if (areDetailsLoaded && mediaGallery.length > 0) {
        this.cacheImages();
      }
    }
  }

  cacheImages() {
    const {
      product: {
        type_id: type,
        variants = []
      }
    } = this.props;

    if (type !== _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Product_Product_config__WEBPACK_IMPORTED_MODULE_5__["default"].configurable) {
      return;
    }

    const urls = [];
    variants.forEach(function (_ref) {
      let {
        media_gallery_entries: mediaGallery = []
      } = _ref;

      if (mediaGallery.length > 0) {
        const {
          base: {
            url
          } = {}
        } = mediaGallery[0];
        urls.push(url);
      }
    });
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cache_Cache__WEBPACK_IMPORTED_MODULE_8__["cacheImages"])(urls);
  }

  handleImageZoomPopupActiveChange(isImageZoomPopupActive) {
    const {
      isMobile
    } = this.props;

    if (isMobile) {
      return;
    }

    this.setState({
      isImageZoomPopupActive
    });
  }

  onActiveImageChange(activeImage) {
    this.setState({
      activeImage: Math.abs(activeImage),
      isZoomEnabled: false
    });
  }

  getBaseImage() {
    const {
      product: {
        media_gallery_entries: mediaGallery = []
      }
    } = this.props;
    const baseImage = mediaGallery.find(function (value) {
      return value.types.includes(_ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["IMAGE_TYPE"]);
    });
    const {
      position = 0
    } = baseImage || {};

    if (!mediaGallery.length) {
      return 0;
    }

    const positionsArray = mediaGallery.reduce(function (acc, item) {
      const {
        position
      } = item;
      acc.push(position);
      return acc;
    }, []).sort(function (a, b) {
      return a - b;
    });
    const returnValue = positionsArray.findIndex(function (value) {
      return value === position;
    });

    if (returnValue === -1) {
      return 0;
    }

    return returnValue;
  }

  getGalleryPictures() {
    const {
      areDetailsLoaded,
      product: {
        media_gallery_entries: mediaGallery = [],
        [_ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["THUMBNAIL_KEY"]]: {
          url: thumbnailUrl
        } = {},
        [_ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["IMAGE_TYPE"]]: {
          url: imageTypeUrl
        } = {},
        name
      }
    } = this.props;
    const url = imageTypeUrl || thumbnailUrl;

    if (mediaGallery.length) {
      return mediaGallery.filter(function (_ref2) {
        let {
          disabled
        } = _ref2;
        return !disabled;
      }).sort(function (a, b) {
        return a.position - b.position;
      });
    }

    if (!url) {
      return Array(_ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["AMOUNT_OF_PLACEHOLDERS"] + 1).fill({
        media_type: 'placeholder'
      });
    }

    const placeholders = !areDetailsLoaded ? Array(_ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["AMOUNT_OF_PLACEHOLDERS"]).fill({
      media_type: 'placeholder'
    }) : [];
    return [{
      thumbnail: {
        url
      },
      base: {
        url
      },
      id: _ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["THUMBNAIL_KEY"],
      label: name,
      media_type: _ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["IMAGE_TYPE"]
    }, ...placeholders];
  }

  containerProps() {
    const {
      activeImage,
      isZoomEnabled,
      isImageZoomPopupActive
    } = this.state;
    const {
      product: {
        id
      },
      isMobile,
      isWithEmptySwitcher,
      showLoader
    } = this.props;
    return {
      gallery: this.getGalleryPictures(),
      productName: this._getProductName(),
      activeImage,
      isZoomEnabled,
      productId: id,
      isMobile,
      isImageZoomPopupActive,
      sliderRef: this.sliderRef,
      isWithEmptySwitcher,
      showLoader
    };
  }
  /**
   * Returns the name of the product this gallery if for
   * @private
   */


  _getProductName() {
    const {
      product: {
        name = ''
      }
    } = this.props;
    return name;
  }

  disableZoom() {
    document.documentElement.classList.remove('overscrollPrevented');
    this.setState({
      isZoomEnabled: false
    });
  }

  handleZoomChange(args) {
    const {
      isZoomEnabled
    } = this.state;

    if (args.scale !== 1) {
      if (isZoomEnabled) {
        return;
      }

      document.documentElement.classList.add('overscrollPrevented');
      this.setState({
        isZoomEnabled: true
      });
    }
  }

  handleImageZoomPopupClose() {
    this.handleImageZoomPopupActiveChange(false);
  }

  render() {
    var _this = this;

    const {
      isImageZoomPopupActive,
      activeImage
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ImageZoomPopup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isActive: isImageZoomPopupActive,
      onClose: this.handleImageZoomPopupClose,
      activeImageId: activeImage,
      popupId: _ProductGallery_config__WEBPACK_IMPORTED_MODULE_10__["PRODUCT_GALERY_POPUP_ID"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, unstated__WEBPACK_IMPORTED_MODULE_3__["Subscribe"], {
      to: [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SharedTransition_SharedTransition_unstated__WEBPACK_IMPORTED_MODULE_6__["default"]],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }
    }, function (_ref3) {
      let {
        registerSharedElementDestination
      } = _ref3;
      return /*#__PURE__*/_checkBEM(React, _ProductGallery_component__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
        registerSharedElementDestination: registerSharedElementDestination
      }, _this.containerProps(), _this.containerFunctions, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }
      }));
    }));
  }

}, _class.propTypes = {
  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_7__["ProductType"].isRequired,
  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isZoomEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showLoader: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // Renders empty image switcher, so that when changing active product, transaction
  // between images is not jumping, when parent has multiple images, but child only one
  isWithEmptySwitcher: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  areDetailsLoaded: false,
  isZoomEnabled: false,
  isWithEmptySwitcher: false,
  showLoader: false
}, _class), "Component/ProductGallery/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ProductGalleryContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductGallery_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductGallery.container */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductGallery_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.component.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.component.js ***!
  \**********************************************************************************************************************/
/*! exports provided: ProductGalleryBaseImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGalleryBaseImage", function() { return ProductGalleryBaseImage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.es.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Image */ "./node_modules/@scandipwa/scandipwa/src/component/Image/index.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.component.js";

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




/** #namespace Component/ProductGalleryBaseImage/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductGalleryBaseImage = Mosaic.middleware((_class = class ProductGalleryBaseImage_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      src,
      alt
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__["TransformComponent"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: src,
      ratio: "custom",
      mix: {
        block: 'ProductGallery',
        elem: 'SliderImage',
        mods: {
          isPlaceholder: !src
        }
      },
      isPlaceholder: !src,
      alt: alt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "img", {
      style: {
        display: 'none'
      },
      alt: alt,
      src: src,
      itemProp: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/ProductGalleryBaseImage/Component");
/* harmony default export */ __webpack_exports__["default"] = (ProductGalleryBaseImage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.config.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.config.js ***!
  \*******************************************************************************************************************/
/*! exports provided: TRANSFORMATION_DELAY, TRANSFORMATION_SPEED, INITIAL_SCALE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMATION_DELAY", function() { return TRANSFORMATION_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMATION_SPEED", function() { return TRANSFORMATION_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_SCALE", function() { return INITIAL_SCALE; });
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
const TRANSFORMATION_DELAY = 0;
const TRANSFORMATION_SPEED = 0;
const INITIAL_SCALE = 1;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.container.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.container.js ***!
  \**********************************************************************************************************************/
/*! exports provided: ProductGalleryBaseImageContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGalleryBaseImageContainer", function() { return ProductGalleryBaseImageContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media_Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Media/Media */ "./node_modules/@scandipwa/scandipwa/src/util/Media/Media.js");
/* harmony import */ var _ProductGalleryBaseImage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductGalleryBaseImage.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.component.js");
/* harmony import */ var _ProductGalleryBaseImage_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductGalleryBaseImage.config */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.container.js";

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







/** #namespace Component/ProductGalleryBaseImage/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductGalleryBaseImageContainer = Mosaic.middleware((_class = class ProductGalleryBaseImageContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["Component"]) {
  shouldComponentUpdate(nextProps) {
    const {
      scale,
      mediaData: {
        id
      }
    } = this.props;
    const {
      scale: nextScale,
      mediaData: {
        id: nextId
      }
    } = nextProps;

    if (scale !== nextScale || id !== nextId) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps) {
    const {
      scale,
      previousScale,
      disableZoom,
      location: {
        pathname
      },
      setTransform
    } = this.props;
    const {
      location: {
        pathname: prevPathname
      }
    } = prevProps;

    if (pathname !== prevPathname && scale !== _ProductGalleryBaseImage_config__WEBPACK_IMPORTED_MODULE_6__["INITIAL_SCALE"]) {
      setTimeout(function () {
        return setTransform(null, null, _ProductGalleryBaseImage_config__WEBPACK_IMPORTED_MODULE_6__["INITIAL_SCALE"], _ProductGalleryBaseImage_config__WEBPACK_IMPORTED_MODULE_6__["TRANSFORMATION_SPEED"]);
      }, _ProductGalleryBaseImage_config__WEBPACK_IMPORTED_MODULE_6__["TRANSFORMATION_DELAY"]);
    }

    if (scale === 1 && previousScale !== 1) {
      disableZoom();
    }
  }

  containerProps() {
    return {
      alt: this._getAlt(),
      src: this._getSrc()
    };
  }

  _getAlt() {
    const {
      mediaData: {
        label
      } = {}
    } = this.props;
    return label || '';
  }

  _getSrc() {
    const {
      mediaData: {
        file,
        base: {
          url: baseUrl
        } = {}
      },
      isZoomEnabled
    } = this.props;

    if (!isZoomEnabled) {
      return baseUrl || Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media_Media__WEBPACK_IMPORTED_MODULE_4__["default"])(file, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media_Media__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_MEDIA"]);
    }

    return file ? Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media_Media__WEBPACK_IMPORTED_MODULE_4__["default"])(file, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media_Media__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_MEDIA"]) : baseUrl;
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _ProductGalleryBaseImage_component__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  disableZoom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  previousScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  mediaData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    file: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    base: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    })
  }).isRequired,
  isZoomEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  setTransform: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  location: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_3__["LocationType"].isRequired
}, _class), "Component/ProductGalleryBaseImage/Container");
/* harmony default export */ __webpack_exports__["default"] = (_c = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ProductGalleryBaseImageContainer));

var _c;

__webpack_require__.$Refresh$.register(_c, "%default%");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductGalleryBaseImage_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductGalleryBaseImage.container */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryBaseImage/ProductGalleryBaseImage.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductGalleryBaseImage_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/ProductGalleryThumbnailImage.component.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/ProductGalleryThumbnailImage.component.js ***!
  \********************************************************************************************************************************/
/*! exports provided: ProductGalleryThumbnailImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGalleryThumbnailImage", function() { return ProductGalleryThumbnailImage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Image */ "./node_modules/@scandipwa/scandipwa/src/component/Image/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGallery_ProductGallery_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ProductGallery/ProductGallery.config */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGallery/ProductGallery.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Media */ "./node_modules/@scandipwa/scandipwa/src/util/Media/index.js");
/* harmony import */ var _ProductGalleryThumbnailImage_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductGalleryThumbnailImage.style */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/ProductGalleryThumbnailImage.style.scss");
/* harmony import */ var _ProductGalleryThumbnailImage_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductGalleryThumbnailImage_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/ProductGalleryThumbnailImage.component.js";

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






/** #namespace Component/ProductGalleryThumbnailImage/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductGalleryThumbnailImage = Mosaic.middleware((_class = class ProductGalleryThumbnailImage_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderMedia() {
    const {
      media: {
        media_type
      }
    } = this.props;

    switch (media_type) {
      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGallery_ProductGallery_config__WEBPACK_IMPORTED_MODULE_3__["VIDEO_TYPE"]:
        return this.renderVideo();

      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGallery_ProductGallery_config__WEBPACK_IMPORTED_MODULE_3__["IMAGE_TYPE"]:
        return this.renderImage();

      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGallery_ProductGallery_config__WEBPACK_IMPORTED_MODULE_3__["PLACEHOLDER_TYPE"]:
        return this.renderPlaceholder();

      default:
        return null;
    }
  }

  renderPlaceholder() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ratio: "custom",
      mix: {
        block: 'ProductGalleryThumbnailImage'
      },
      isPlaceholder: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    });
  }

  renderVideo() {
    const {
      media: {
        thumbnail: {
          url
        },
        label
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ratio: "custom",
      src: url,
      alt: label,
      mix: {
        block: 'ProductGalleryThumbnailImage'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    });
  }

  renderImage() {
    const {
      media: {
        label: alt,
        file,
        thumbnail: {
          url: thumbnailUrl
        } = {},
        id
      }
    } = this.props;

    if (id === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductGallery_ProductGallery_config__WEBPACK_IMPORTED_MODULE_3__["THUMBNAIL_KEY"]) {
      return this.renderPlaceholder();
    }

    const src = thumbnailUrl || Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media__WEBPACK_IMPORTED_MODULE_4__["default"])(file, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_MEDIA"]);
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      src: src,
      alt: alt,
      ratio: "custom",
      mix: {
        block: 'ProductGalleryThumbnailImage'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ProductGalleryThumbnailImage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, this.renderMedia());
  }

}, _class.propTypes = {
  media: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    file: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    media_type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
    thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    })
  }).isRequired
}, _class), "Component/ProductGalleryThumbnailImage/Component");
/* harmony default export */ __webpack_exports__["default"] = (ProductGalleryThumbnailImage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductGalleryThumbnailImage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductGalleryThumbnailImage.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductGalleryThumbnailImage/ProductGalleryThumbnailImage.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductGalleryThumbnailImage_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.component.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.component.js ***!
  \******************************************************************************************************************/
/*! exports provided: TranslateOnCursorMove, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateOnCursorMove", function() { return TranslateOnCursorMove; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _TranslateOnCursorMove_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TranslateOnCursorMove.style */ "./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.style.scss");
/* harmony import */ var _TranslateOnCursorMove_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TranslateOnCursorMove_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.component.js";

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





/** #namespace Component/TranslateOnCursorMove/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const TranslateOnCursorMove = Mosaic.middleware((_class = class TranslateOnCursorMove_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.ref = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.handleLoad = this.handleLoad.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleLoad);
  }

  componentDidUpdate(prevProps) {
    const {
      activeImageId
    } = this.props;
    const {
      activeImageId: prevActiveImageId
    } = prevProps;

    if (activeImageId !== prevActiveImageId) {
      this.handleLoad();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleLoad);
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_3__["default"].setVariable(this.ref, 'translateYOnCursorMove', '0');
  }

  handleLoad() {
    var _targets$activeImageI;

    const {
      activeImageId,
      itemSelector,
      targetSelector
    } = this.props;
    const targets = this.ref.current.querySelectorAll(itemSelector);
    const target = targets === null || targets === void 0 ? void 0 : (_targets$activeImageI = targets[activeImageId]) === null || _targets$activeImageI === void 0 ? void 0 : _targets$activeImageI.querySelector(targetSelector);

    if (!target) {
      return;
    }

    const innerHeight = target.getBoundingClientRect().height;
    const {
      height: wrapperHeight
    } = this.ref.current.getBoundingClientRect();
    const translate = (wrapperHeight - innerHeight) / 2; // style set directly (not via `setVariable`) as different translate Y values have to be applied at the same time
    // (as 2 slider images are shown simultaneously when navigating to next/previous image)

    target.style.transform = `translateY(${translate}px)`;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_3__["default"].setVariable(this.ref, 'imageOpacity', '1');
  }

  handleMouseMove(_ref) {
    var _this$ref$current$que, _this$ref$current$que2;

    let {
      pageY: wrapperPageY
    } = _ref;
    const {
      activeImageId,
      itemSelector,
      targetSelector
    } = this.props; // Space from top and bottom to shrink mouse move watch area

    const paddingY = 90;
    const target = (_this$ref$current$que = this.ref.current.querySelectorAll(itemSelector)) === null || _this$ref$current$que === void 0 ? void 0 : (_this$ref$current$que2 = _this$ref$current$que[activeImageId]) === null || _this$ref$current$que2 === void 0 ? void 0 : _this$ref$current$que2.querySelector(targetSelector);

    if (!target) {
      return;
    }

    const innerHeight = target.getBoundingClientRect().height;
    const {
      height: wrapperHeight,
      top
    } = this.ref.current.getBoundingClientRect();
    const pageY = wrapperPageY - top; // When mouse is reached top or bottom

    if (wrapperPageY < paddingY + top || wrapperPageY > wrapperHeight + top - paddingY) {
      return;
    }

    const ratio = (innerHeight - wrapperHeight) / (wrapperHeight - paddingY * 2);
    const translate = (pageY - paddingY) * ratio;

    if (innerHeight <= wrapperHeight) {
      return;
    }

    target.style.transform = `translateY(-${translate}px)`;
  }

  render() {
    const {
      children,
      isMobile
    } = this.props;

    if (isMobile) {
      return children;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "TranslateOnCursorMove",
      onLoad: this.handleLoad,
      onMouseMove: this.handleMouseMove,
      ref: this.ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, children);
  }

}, _class.propTypes = {
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"].isRequired,
  activeImageId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  itemSelector: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  targetSelector: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class.defaultProps = {}, _class), "Component/TranslateOnCursorMove/Component");
/* harmony default export */ __webpack_exports__["default"] = (TranslateOnCursorMove);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.container.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.container.js ***!
  \******************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TranslateOnCursorMove_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TranslateOnCursorMove.component */ "./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.component.js");
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


/** #namespace Component/TranslateOnCursorMove/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/TranslateOnCursorMove/Container/mapStateToProps");
/** #namespace Component/TranslateOnCursorMove/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/TranslateOnCursorMove/Container/mapDispatchToProps"); // eslint-disable-next-line @scandipwa/scandipwa-guidelines/always-both-mappings

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_TranslateOnCursorMove_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TranslateOnCursorMove_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TranslateOnCursorMove.container */ "./node_modules/@scandipwa/scandipwa/src/component/TranslateOnCursorMove/TranslateOnCursorMove.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TranslateOnCursorMove_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.component.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.component.js ***!
  \********************************************************************************************/
/*! exports provided: VideoPopup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPopup", function() { return VideoPopup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/Popup */ "./node_modules/@scandipwa/scandipwa/src/component/Popup/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Promise */ "./node_modules/@scandipwa/scandipwa/src/util/Promise/index.js");
/* harmony import */ var _VideoPopup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VideoPopup.config */ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.config.js");
/* harmony import */ var _VideoPopup_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoPopup.style */ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.style.scss");
/* harmony import */ var _VideoPopup_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_VideoPopup_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.component.js";

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






/**
 * A popup capable of displaying a video
 * @class VideoPopup
 * #namespace Component/VideoPopup/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const VideoPopup = Mosaic.middleware((_class = class VideoPopup_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  componentDidMount() {
    var _this = this;

    this.loadVimeoLibrary();
    this.loadYouTubeLibrary();
    Promise.all([this.vimeoPromise, this.youTubePromise]).then(
    /** #namespace Component/VideoPopup/Component/VideoPopup/componentDidMount/all/then */
    Mosaic.middleware(function () {
      return _this.forceUpdate();
    }, "Component/VideoPopup/Component/VideoPopup/componentDidMount/all/then"));
  }

  componentWillUnmount() {
    if (this.youTubePromise) {
      this.youTubePromise.cancel();
    }

    if (this.vimeoPromise) {
      this.vimeoPromise.cancel();
    }
  }
  /**
   * Renders a video provided by Vimeo
   * @param videoId
   * @returns {*}
   * @private
   */


  _renderVimeoVideo(videoId) {
    const Vimeo = this.vimeoComponent;

    if (!Vimeo) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, Vimeo, {
      videoId: videoId,
      autoplay: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    });
  }
  /**
   * Renders a video provided by Youtube
   * @param videoId
   * @returns {*}
   * @private
   */


  _renderYoutubeVideo(videoId) {
    const YouTube = this.youTubeComponent;

    if (!YouTube) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, YouTube, {
      videoId: videoId,
      containerClassName: "VideoPopup-YouTubeContainer" // eslint-disable-next-line react/forbid-component-props
      ,
      className: "VideoPopup-YouTube",
      opts: {
        playerVars: {
          autoplay: 1
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    });
  }

  loadVimeoLibrary() {
    var _this2 = this;

    this.vimeoPromise = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Promise__WEBPACK_IMPORTED_MODULE_3__["makeCancelable"])(__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-vimeo */ "./node_modules/react-vimeo/lib/Vimeo.js", 7)));
    this.vimeoPromise.promise.then(
    /** #namespace Component/VideoPopup/Component/VideoPopup/loadVimeoLibrary/then */
    Mosaic.middleware(function (_ref) {
      let {
        default: vimeo
      } = _ref;
      _this2.vimeoComponent = vimeo;
    }, "Component/VideoPopup/Component/VideoPopup/loadVimeoLibrary/then"));
  }

  loadYouTubeLibrary() {
    var _this3 = this;

    this.youTubePromise = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Promise__WEBPACK_IMPORTED_MODULE_3__["makeCancelable"])(__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js")));
    this.youTubePromise.promise.then(
    /** #namespace Component/VideoPopup/Component/VideoPopup/loadYouTubeLibrary/then */
    Mosaic.middleware(function (_ref2) {
      let {
        default: youTube
      } = _ref2;
      _this3.youTubeComponent = youTube;
    }, "Component/VideoPopup/Component/VideoPopup/loadYouTubeLibrary/then"));
  }
  /**
   * Parses the video URL and renders the video accordingly
   * @returns {null|*}
   * @private
   */


  _renderVideoContent() {
    const {
      payload: {
        media: {
          video_content: {
            video_url
          } = {}
        } = {}
      }
    } = this.props;

    if (!video_url) {
      return null;
    }

    const [, vimeoId] = _VideoPopup_config__WEBPACK_IMPORTED_MODULE_4__["VIMEO_FORMAT"].exec(video_url) || [];

    if (vimeoId) {
      return this._renderVimeoVideo(vimeoId);
    }

    const [, youtubeId] = _VideoPopup_config__WEBPACK_IMPORTED_MODULE_4__["YOUTUBE_FORMAT"].exec(video_url);

    if (youtubeId) {
      return this._renderYoutubeVideo(youtubeId);
    }

    return null;
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Popup__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: _VideoPopup_config__WEBPACK_IMPORTED_MODULE_4__["VIDEO_POPUP_ID"],
      mix: {
        block: 'VideoPopup'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "VideoPopup",
      elem: "VideoPlayer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "VideoPopup",
      elem: "PlayerContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, this._renderVideoContent())));
  }

}, _class.propTypes = {
  payload: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__["MediaItemType"].isRequired
}, _class), "Component/VideoPopup/Component");
/* harmony default export */ __webpack_exports__["default"] = (VideoPopup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.config.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.config.js ***!
  \*****************************************************************************************/
/*! exports provided: VIDEO_POPUP_ID, VIMEO_FORMAT, YOUTUBE_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_POPUP_ID", function() { return VIDEO_POPUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIMEO_FORMAT", function() { return VIMEO_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_FORMAT", function() { return YOUTUBE_FORMAT; });
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
const VIDEO_POPUP_ID = 'VIDEO_POPUP_ID';
/**
 * An expression that checks for vimeo URLs described in https://developer.vimeo.com/api/oembed/videos#table-1 and matches the video id
 * @type {RegExp}
 */

const VIMEO_FORMAT = new RegExp('(?:https?//)?vimeo.com[\\w/]*/(\\d+)$');
const YOUTUBE_FORMAT = new RegExp('(?:https?//)?www.youtube.com/watch\\?v=([\\w\\-]+)');

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.container.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.container.js ***!
  \********************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _VideoPopup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPopup.component */ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.component.js");
/* harmony import */ var _VideoPopup_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPopup.config */ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.config.js");
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



/** #namespace Component/VideoPopup/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    payload: state.PopupReducer.popupPayload[_VideoPopup_config__WEBPACK_IMPORTED_MODULE_2__["VIDEO_POPUP_ID"]] || {}
  };
}, "Component/VideoPopup/Container/mapStateToProps");
/** #namespace Component/VideoPopup/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/VideoPopup/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_VideoPopup_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPopup_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPopup.container */ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _VideoPopup_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.component.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.component.js ***!
  \****************************************************************************************************/
/*! exports provided: VideoThumbnail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoThumbnail", function() { return VideoThumbnail; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Image/Image.container */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.container.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _VideoThumbnail_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VideoThumbnail.style */ "./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.style.scss");
/* harmony import */ var _VideoThumbnail_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_VideoThumbnail_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.component.js";

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





/**
 * VideoThumbnail component
 * @class VideoThumbnail
 * #namespace Component/VideoThumbnail/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const VideoThumbnail = Mosaic.middleware((_class = class VideoThumbnail_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  /**
   * Renders an icon indicating that the video can be played
   */
  renderPlayIcon() {
    return /*#__PURE__*/_checkBEM(React, "span", {
      block: "VideoThumbnail",
      elem: "PlayIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __('Play video'));
  }

  render() {
    const {
      media: {
        thumbnail: {
          url
        },
        video_content: {
          video_title
        }
      },
      onPlayClick
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "VideoThumbnail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "VideoThumbnail",
      elem: "Button",
      onClick: onPlayClick,
      title: __('Play video %s', video_title),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      src: url,
      ratio: "custom",
      mix: {
        block: 'VideoThumbnail',
        elem: 'Thumbnail',
        mods: {
          isPlaceholder: !url
        }
      },
      isPlaceholder: !url,
      alt: video_title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }), this.renderPlayIcon()));
  }

}, _class.propTypes = {
  media: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_3__["MediaItemType"].isRequired,
  onPlayClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/VideoThumbnail/Component");
/* harmony default export */ __webpack_exports__["default"] = (VideoThumbnail);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.container.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.container.js ***!
  \****************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, VideoThumbnailContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoThumbnailContainer", function() { return VideoThumbnailContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_VideoPopup_VideoPopup_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/VideoPopup/VideoPopup.config */ "./node_modules/@scandipwa/scandipwa/src/component/VideoPopup/VideoPopup.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/store/Overlay/Overlay.action */ "./node_modules/@scandipwa/scandipwa/src/store/Overlay/Overlay.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Popup/Popup.action */ "./node_modules/@scandipwa/scandipwa/src/store/Popup/Popup.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _VideoThumbnail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VideoThumbnail.component */ "./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.container.js";

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








/** #namespace Component/VideoThumbnail/Container/mapStateToProps
 */

const mapStateToProps = Mosaic.middleware(function () {
  return {};
}, "Component/VideoThumbnail/Container/mapStateToProps");
/** #namespace Component/VideoThumbnail/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showPopup: function (payload) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_5__["showPopup"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_VideoPopup_VideoPopup_config__WEBPACK_IMPORTED_MODULE_3__["VIDEO_POPUP_ID"], payload));
    },
    hideActivePopup: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_4__["hideActivePopup"])());
    }
  };
}, "Component/VideoThumbnail/Container/mapDispatchToProps");
/**
 * @class VideoThumbnailContainer
 * #namespace Component/VideoThumbnail/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const VideoThumbnailContainer = Mosaic.middleware((_class = class VideoThumbnailContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onPlayClick: this.onPlayClick.bind(this)
    };
  }

  /**
   * Handles events that occur when the user clicks or taps on a video thumbnail.
   * Displays a popup with the corresponding video.
   * @param event
   * @private
   */
  onPlayClick(event) {
    const {
      media,
      media: {
        video_content: {
          video_title
        } = {}
      } = {},
      showPopup,
      isVideoZoomed,
      onZoomedVideoClick
    } = this.props;
    event.preventDefault();

    if (isVideoZoomed) {
      onZoomedVideoClick();
    }

    setTimeout(function () {
      showPopup({
        media,
        title: video_title
      });
    }, 0);
  }

  render() {
    const {
      media
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _VideoThumbnail_component__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
      media: media
    }, this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  media: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_6__["MediaItemType"].isRequired,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isVideoZoomed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  hideActivePopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onZoomedVideoClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/VideoThumbnail/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(VideoThumbnailContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoThumbnail_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoThumbnail.container */ "./node_modules/@scandipwa/scandipwa/src/component/VideoThumbnail/VideoThumbnail.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _VideoThumbnail_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Media/Media.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Media/Media.js ***!
  \*******************************************************************/
/*! exports provided: WYSIWYG_MEDIA, CATEGORY_MEDIA, PRODUCT_MEDIA, LOGO_MEDIA, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WYSIWYG_MEDIA", function() { return WYSIWYG_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_MEDIA", function() { return CATEGORY_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_MEDIA", function() { return PRODUCT_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO_MEDIA", function() { return LOGO_MEDIA; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/util/Store */ "./node_modules/@scandipwa/scandipwa/src/util/Store/index.js");
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

const WYSIWYG_MEDIA = 'wysiwyg/';
const CATEGORY_MEDIA = 'catalog/category/';
const PRODUCT_MEDIA = 'catalog/product';
const LOGO_MEDIA = 'logo/';
/* harmony default export */ __webpack_exports__["default"] = (function (src) {
  let subPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let isMediaPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // If isMediaPath is passed return local media path
  const {
    ConfigReducer: {
      secure_base_media_url,
      base_url
    }
  } = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store__WEBPACK_IMPORTED_MODULE_0__["default"])().getState();
  const baseUrl = isMediaPath ? secure_base_media_url || '/media/' : base_url;
  return `${baseUrl}${subPath}${src}`;
});

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Media/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Media/index.js ***!
  \*******************************************************************/
/*! exports provided: default, WYSIWYG_MEDIA, PRODUCT_MEDIA, CATEGORY_MEDIA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./node_modules/@scandipwa/scandipwa/src/util/Media/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WYSIWYG_MEDIA", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["WYSIWYG_MEDIA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_MEDIA", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_MEDIA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_MEDIA", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["CATEGORY_MEDIA"]; });

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

/***/ "./node_modules/react-zoom-pan-pinch/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/react-zoom-pan-pinch/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: TransformComponent, TransformWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformComponent", function() { return TransformComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformWrapper", function() { return TransformWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var initialState = {
    wrapperComponent: null,
    contentComponent: null,
    previousScale: 1,
    scale: 1,
    positionX: 0,
    positionY: 0,
    options: {
        disabled: false,
        transformEnabled: true,
        minPositionX: null,
        maxPositionX: null,
        minPositionY: null,
        maxPositionY: null,
        minScale: 1,
        maxScale: 8,
        limitToBounds: true,
        limitToWrapper: false,
        centerContent: true,
        wrapperClass: "",
        contentClass: "",
    },
    wheel: {
        disabled: false,
        step: 5,
        wheelEnabled: true,
        touchPadEnabled: true,
        limitsOnWheel: false,
    },
    pan: {
        disabled: false,
        panAnimationType: "linear",
        lockAxisX: false,
        lockAxisY: false,
        velocity: true,
        velocityEqualToMove: true,
        velocitySensitivity: 2,
        velocityActiveScale: 1,
        velocityMinSpeed: 1,
        velocityBaseTime: 1600,
        velocityAnimationType: "easeOutQuart",
        padding: true,
        paddingSize: 30,
        panReturnAnimationTime: 400,
        panReturnAnimationType: "easeOut",
        disableOnTarget: [],
    },
    pinch: {
        disabled: false,
    },
    zoomIn: {
        disabled: false,
        step: 20,
        animation: true,
        animationType: "easeOut",
        animationTime: 200,
    },
    zoomOut: {
        disabled: false,
        step: 20,
        animation: true,
        animationType: "easeOut",
        animationTime: 200,
    },
    doubleClick: {
        disabled: false,
        step: 20,
        mode: "zoomIn",
        animation: true,
        animationType: "easeOut",
        animationTime: 200,
    },
    reset: {
        disabled: false,
        animation: true,
        animationType: "easeOut",
        animationTime: 200,
    },
    scalePadding: {
        disabled: false,
        size: 0.2,
        animationTime: 200,
        animationType: "easeOut",
    },
};

/**
 * Rounds number to given decimal
 * eg. roundNumber(2.34343, 1) => 2.3
 */
var roundNumber = function (num, decimal) {
    return Number(num.toFixed(decimal));
};
/**
 * Checks if value is number, if not it returns default value
 * 1# eg. checkIsNumber(2, 30) => 2
 * 2# eg. checkIsNumber(null, 30) => 30
 */
var checkIsNumber = function (num, defaultValue) {
    return typeof num === "number" ? num : defaultValue;
};
/**
 * Keeps value between given bounds, used for limiting view to given boundaries
 * 1# eg. boundLimiter(2, 0, 3, true) => 2
 * 2# eg. boundLimiter(4, 0, 3, true) => 3
 * 3# eg. boundLimiter(-2, 0, 3, true) => 0
 * 4# eg. boundLimiter(10, 0, 3, false) => 10
 */
var boundLimiter = function (value, minBound, maxBound, isActive) {
    if (!isActive)
        return roundNumber(value, 2);
    if (value < minBound)
        return roundNumber(minBound, 2);
    if (value > maxBound)
        return roundNumber(maxBound, 2);
    return roundNumber(value, 2);
};
/**
 * Calculate bounding area of zoomed/panned element
 */
var calculateBoundingArea = function (wrapperWidth, newContentWidth, diffWidth, wrapperHeight, newContentHeight, diffHeight, limitToWrapper) {
    var scaleWidthFactor = wrapperWidth > newContentWidth
        ? diffWidth * (limitToWrapper ? 1 : 0.5)
        : 0;
    var scaleHeightFactor = wrapperHeight > newContentHeight
        ? diffHeight * (limitToWrapper ? 1 : 0.5)
        : 0;
    var minPositionX = wrapperWidth - newContentWidth - scaleWidthFactor;
    var maxPositionX = scaleWidthFactor;
    var minPositionY = wrapperHeight - newContentHeight - scaleHeightFactor;
    var maxPositionY = scaleHeightFactor;
    return { minPositionX: minPositionX, maxPositionX: maxPositionX, minPositionY: minPositionY, maxPositionY: maxPositionY };
};
/**
 * Returns distance between two points x,y
 */
var getDistance = function (firstPoint, secondPoint) {
    return Math.sqrt(Math.pow(firstPoint.pageX - secondPoint.pageX, 2) +
        Math.pow(firstPoint.pageY - secondPoint.pageY, 2));
};
/**
 * Delete undefined values from object keys
 * Used for deleting empty props
 */
var deleteUndefinedProps = function (value) {
    var newObject = __assign({}, value);
    Object.keys(newObject).forEach(function (key) { return newObject[key] === undefined && delete newObject[key]; });
    return newObject;
};
/**
 * Fire callback if it's function
 */
var handleCallback = function (callback, props) {
    if (callback && typeof callback === "function") {
        callback(props);
    }
};
var handleWheelStop = function (previousEvent, event, stateProvider) {
    var scale = stateProvider.scale, _a = stateProvider.options, maxScale = _a.maxScale, minScale = _a.minScale;
    if (!previousEvent)
        return false;
    if (scale < maxScale || scale > minScale)
        return true;
    if (Math.sign(previousEvent.deltaY) !== Math.sign(event.deltaY))
        return true;
    if (previousEvent.deltaY > 0 && previousEvent.deltaY < event.deltaY)
        return true;
    if (previousEvent.deltaY < 0 && previousEvent.deltaY > event.deltaY)
        return true;
    if (Math.sign(previousEvent.deltaY) !== Math.sign(event.deltaY))
        return true;
    return false;
};
var mergeProps = function (initialState, dynamicProps) {
    return Object.keys(initialState).reduce(function (acc, curr) {
        if (typeof dynamicProps[curr] === "object" && dynamicProps[curr] !== null) {
            acc[curr] = __assign(__assign({}, initialState[curr]), dynamicProps[curr]);
        }
        else {
            acc[curr] =
                dynamicProps[curr] === undefined
                    ? initialState[curr]
                    : dynamicProps[curr];
        }
        return acc;
    }, {});
};
function getWindowScaleY(wrapper) {
    if (!wrapper)
        return 0;
    return window.innerHeight / wrapper.offsetHeight;
}
function getWindowScaleX(wrapper) {
    if (!wrapper)
        return 0;
    return window.innerWidth / wrapper.offsetWidth;
}

/**
 * Functions should return denominator of the target value, which is the next animation step.
 * t is a value from 0 to 1, reflecting the percentage of animation status.
 */
var easeOut = function (t) {
    return -Math.cos(t * Math.PI) / 2 + 0.5;
};
// linear
var linear = function (t) {
    return t;
};
// accelerating from zero velocity
var easeInQuad = function (t) {
    return t * t;
};
// decelerating to zero velocity
var easeOutQuad = function (t) {
    return t * (2 - t);
};
// acceleration until halfway, then deceleration
var easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
// accelerating from zero velocity
var easeInCubic = function (t) {
    return t * t * t;
};
// decelerating to zero velocity
var easeOutCubic = function (t) {
    return --t * t * t + 1;
};
// acceleration until halfway, then deceleration
var easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
// accelerating from zero velocity
var easeInQuart = function (t) {
    return t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuart = function (t) {
    return 1 - --t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuart = function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
// accelerating from zero velocity
var easeInQuint = function (t) {
    return t * t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuint = function (t) {
    return 1 + --t * t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuint = function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};
var availableAnimations = {
    easeOut: easeOut,
    linear: linear,
    easeInQuad: easeInQuad,
    easeOutQuad: easeOutQuad,
    easeInOutQuad: easeInOutQuad,
    easeInCubic: easeInCubic,
    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint,
};

function handleDisableAnimation() {
    if (!this.mounted)
        return;
    if (this.animation) {
        cancelAnimationFrame(this.animation);
    }
    this.animate = false;
    this.animation = false;
    this.velocity = false;
}
function animate(animationName, animationTime, callback) {
    var _this = this;
    if (!this.mounted)
        return;
    var startTime = new Date().getTime();
    var lastStep = 1;
    // if another animation is active
    handleDisableAnimation.call(this);
    // new animation
    this.animation = function () {
        if (!_this.animation || !_this.mounted)
            return;
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / animationTime;
        var animationType = availableAnimations[animationName];
        var step = animationType(animationProgress);
        if (frameTime >= animationTime) {
            callback(lastStep);
            _this.animation = null;
        }
        else {
            callback(step);
            requestAnimationFrame(_this.animation);
        }
    };
    requestAnimationFrame(this.animation);
}
function animateComponent(_a) {
    var _this = this;
    var targetState = _a.targetState, speed = _a.speed, type = _a.type;
    var _b = this.stateProvider, scale = _b.scale, positionX = _b.positionX, positionY = _b.positionY;
    var scaleDiff = targetState.scale - scale;
    var positionXDiff = targetState.positionX - positionX;
    var positionYDiff = targetState.positionY - positionY;
    if (speed === 0) {
        this.stateProvider.previousScale = this.stateProvider.scale;
        this.stateProvider.scale = targetState.scale;
        this.stateProvider.positionX = targetState.positionX;
        this.stateProvider.positionY = targetState.positionY;
        this.applyTransformation();
    }
    else {
        // animation start timestamp
        animate.call(this, type, speed, function (step) {
            _this.stateProvider.previousScale = _this.stateProvider.scale;
            _this.stateProvider.scale = scale + scaleDiff * step;
            _this.stateProvider.positionX = positionX + positionXDiff * step;
            _this.stateProvider.positionY = positionY + positionYDiff * step;
            // apply animation changes
            _this.applyTransformation();
        });
    }
}

function checkZoomBounds(zoom, minScale, maxScale, zoomPadding, enablePadding) {
    var scalePadding = enablePadding ? zoomPadding : 0;
    var minScaleWithPadding = minScale - scalePadding;
    if (!isNaN(maxScale) && zoom >= maxScale)
        return maxScale;
    if (!isNaN(minScale) && zoom <= minScaleWithPadding)
        return minScaleWithPadding;
    return zoom;
}
function checkPositionBounds(positionX, positionY, bounds, limitToBounds, paddingValue, wrapperComponent) {
    var minPositionX = bounds.minPositionX, minPositionY = bounds.minPositionY, maxPositionX = bounds.maxPositionX, maxPositionY = bounds.maxPositionY;
    var paddingX = wrapperComponent
        ? (paddingValue * wrapperComponent.offsetWidth) / 100
        : 0;
    var paddingY = wrapperComponent
        ? (paddingValue * wrapperComponent.offsetHeight) / 100
        : 0;
    var x = boundLimiter(positionX, minPositionX - paddingX, maxPositionX + paddingX, limitToBounds);
    var y = boundLimiter(positionY, minPositionY - paddingY, maxPositionY + paddingY, limitToBounds);
    return { x: x, y: y };
}
function getDelta(event, customDelta) {
    var deltaY = event ? (event.deltaY < 0 ? 1 : -1) : 0;
    var delta = checkIsNumber(customDelta, deltaY);
    return delta;
}
function wheelMousePosition(event, contentComponent, scale) {
    var contentRect = contentComponent.getBoundingClientRect();
    // mouse position x, y over wrapper component
    var mouseX = (event.clientX - contentRect.left) / scale;
    var mouseY = (event.clientY - contentRect.top) / scale;
    if (isNaN(mouseX) || isNaN(mouseY))
        console.error("No mouse or touch offset found");
    return {
        mouseX: mouseX,
        mouseY: mouseY,
    };
}
function getComponentsSizes(wrapperComponent, contentComponent, newScale) {
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var contentWidth = contentComponent.offsetWidth;
    var contentHeight = contentComponent.offsetHeight;
    var newContentWidth = contentWidth * newScale;
    var newContentHeight = contentHeight * newScale;
    var newDiffWidth = wrapperWidth - newContentWidth;
    var newDiffHeight = wrapperHeight - newContentHeight;
    return {
        wrapperWidth: wrapperWidth,
        wrapperHeight: wrapperHeight,
        newContentWidth: newContentWidth,
        newDiffWidth: newDiffWidth,
        newContentHeight: newContentHeight,
        newDiffHeight: newDiffHeight,
    };
}
function handleCalculatePositions(mouseX, mouseY, newScale, bounds, limitToBounds) {
    var _a = this.stateProvider, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY, transformEnabled = _a.options.transformEnabled;
    var scaleDifference = newScale - scale;
    if (typeof mouseX !== "number" || typeof mouseY !== "number")
        return console.error("Mouse X and Y position were not provided!");
    if (!transformEnabled)
        return { newPositionX: positionX, newPositionY: positionY };
    var calculatedPositionX = positionX - mouseX * scaleDifference;
    var calculatedPositionY = positionY - mouseY * scaleDifference;
    // do not limit to bounds when there is padding animation,
    // it causes animation strange behaviour
    var newPositions = checkPositionBounds(calculatedPositionX, calculatedPositionY, bounds, limitToBounds, 0, null);
    return newPositions;
}

function getClientPosition(event) {
    var touches = event.touches;
    // Mobile points
    if (touches && touches.length === 1) {
        return { clientX: touches[0].clientX, clientY: touches[0].clientY };
    }
    // Desktop points
    if (!touches) {
        return { clientX: event.clientX, clientY: event.clientY };
    }
    return null;
}
function handlePanning(event) {
    var _a = this.stateProvider, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY, _b = _a.options, limitToBounds = _b.limitToBounds, minScale = _b.minScale, _c = _a.pan, lockAxisX = _c.lockAxisX, lockAxisY = _c.lockAxisY, padding = _c.padding, paddingSize = _c.paddingSize, wrapperComponent = _a.wrapperComponent;
    if (!this.startCoords)
        return;
    var _d = this.startCoords, x = _d.x, y = _d.y;
    var positions = getClientPosition(event);
    if (!positions)
        return console.error("Cannot find mouse client positions");
    var clientX = positions.clientX, clientY = positions.clientY;
    // Get Position
    var mouseX = clientX - x;
    var mouseY = clientY - y;
    var newPositionX = lockAxisX ? positionX : mouseX;
    var newPositionY = lockAxisY ? positionY : mouseY;
    // padding
    var paddingValue = padding && scale >= minScale ? paddingSize : 0;
    // If position didn't change
    if (newPositionX === positionX && newPositionY === positionY)
        return;
    var calculatedPosition = checkPositionBounds(newPositionX, newPositionY, this.bounds, limitToBounds, paddingValue, wrapperComponent);
    // Save panned position
    handlePaddingAnimation.call(this, calculatedPosition.x, calculatedPosition.y);
}
function handlePanningAnimation() {
    var _a = this.stateProvider, scale = _a.scale, minScale = _a.options.minScale, _b = _a.pan, disabled = _b.disabled, padding = _b.padding, panReturnAnimationTime = _b.panReturnAnimationTime, panReturnAnimationType = _b.panReturnAnimationType;
    var isDisabled = disabled || scale < minScale || !padding;
    if (isDisabled)
        return;
    var targetState = handlePanToBounds.call(this);
    animateComponent.call(this, {
        targetState: targetState,
        speed: panReturnAnimationTime,
        type: panReturnAnimationType,
    });
}
function handlePanToBounds() {
    var _a = this.stateProvider, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale, _b = _a.options, disabled = _b.disabled, limitToBounds = _b.limitToBounds, limitToWrapper = _b.limitToWrapper;
    var wrapperComponent = this.state.wrapperComponent;
    if (disabled)
        return;
    var _c = this.bounds, maxPositionX = _c.maxPositionX, minPositionX = _c.minPositionX, maxPositionY = _c.maxPositionY, minPositionY = _c.minPositionY;
    var xChanged = positionX > maxPositionX || positionX < minPositionX;
    var yChanged = positionY > maxPositionY || positionY < minPositionY;
    var mouseX = positionX > maxPositionX
        ? wrapperComponent.offsetWidth
        : this.stateProvider.minPositionX || 0;
    var mouseY = positionY > maxPositionY
        ? wrapperComponent.offsetHeight
        : this.stateProvider.minPositionY || 0;
    var mousePosX = mouseX;
    var mousePosY = mouseY;
    var _d = handleCalculatePositions.call(this, mousePosX, mousePosY, scale, this.bounds, limitToBounds || limitToWrapper), x = _d.x, y = _d.y;
    return {
        scale: scale,
        positionX: xChanged ? x : positionX,
        positionY: yChanged ? y : positionY,
    };
}
function handlePaddingAnimation(positionX, positionY) {
    var padding = this.stateProvider.pan.padding;
    if (!padding)
        return;
    this.stateProvider.positionX = positionX;
    this.stateProvider.positionY = positionY;
    this.applyTransformation();
}

function handleCalculateZoom(delta, step, disablePadding, getTarget, isBtnFunction) {
    var _a = this.stateProvider, scale = _a.scale, _b = _a.options, maxScale = _b.maxScale, minScale = _b.minScale, _c = _a.scalePadding, size = _c.size, disabled = _c.disabled, wrapperComponent = _a.wrapperComponent;
    var targetScale = null;
    if (isBtnFunction) {
        var scaleFactor = window.innerWidth * 0.0001;
        var zoomFactor = delta < 0 ? 30 : 20;
        targetScale =
            scale + (step - step * scaleFactor) * delta * (scale / zoomFactor);
    }
    else {
        var wrapperToWindowScale = 2 - window.innerWidth / wrapperComponent.offsetWidth;
        var scaleFactor = Math.max(0.2, Math.min(0.99, wrapperToWindowScale));
        var zoomFactor = 20;
        targetScale =
            scale + step * delta * ((scale - scale * scaleFactor) / zoomFactor);
    }
    if (getTarget)
        return targetScale;
    var paddingEnabled = disablePadding ? false : !disabled;
    var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, paddingEnabled);
    return newScale;
}
function handleCalculateBounds(newScale, limitToWrapper) {
    var _a = this.stateProvider, wrapperComponent = _a.wrapperComponent, contentComponent = _a.contentComponent;
    var _b = getComponentsSizes(wrapperComponent, contentComponent, newScale), wrapperWidth = _b.wrapperWidth, wrapperHeight = _b.wrapperHeight, newContentWidth = _b.newContentWidth, newDiffWidth = _b.newDiffWidth, newContentHeight = _b.newContentHeight, newDiffHeight = _b.newDiffHeight;
    var bounds = calculateBoundingArea(wrapperWidth, newContentWidth, newDiffWidth, wrapperHeight, newContentHeight, newDiffHeight, limitToWrapper);
    // Save bounds
    this.bounds = bounds;
    return bounds;
}
/**
 * Wheel zoom event
 */
function handleWheelZoom(event) {
    var _a = this.stateProvider, scale = _a.scale, contentComponent = _a.contentComponent, limitToBounds = _a.options.limitToBounds, _b = _a.scalePadding, size = _b.size, disabled = _b.disabled, _c = _a.wheel, step = _c.step, limitsOnWheel = _c.limitsOnWheel;
    event.preventDefault();
    event.stopPropagation();
    var delta = getDelta(event, null);
    var newScale = handleCalculateZoom.call(this, delta, step, !event.ctrlKey);
    // if scale not change
    if (scale === newScale)
        return;
    var bounds = handleCalculateBounds.call(this, newScale, !limitsOnWheel);
    var _d = wheelMousePosition(event, contentComponent, scale), mouseX = _d.mouseX, mouseY = _d.mouseY;
    var isLimitedToBounds = limitToBounds && (disabled || size === 0 || limitsOnWheel);
    var _e = handleCalculatePositions.call(this, mouseX, mouseY, newScale, bounds, isLimitedToBounds), x = _e.x, y = _e.y;
    this.bounds = bounds;
    this.stateProvider.previousScale = scale;
    this.stateProvider.scale = newScale;
    this.stateProvider.positionX = x;
    this.stateProvider.positionY = y;
    this.applyTransformation();
}
/**
 * Zoom for animations
 */
function handleZoomToPoint(isDisabled, scale, mouseX, mouseY, event) {
    var _a = this.stateProvider, contentComponent = _a.contentComponent, _b = _a.options, disabled = _b.disabled, minScale = _b.minScale, maxScale = _b.maxScale, limitToBounds = _b.limitToBounds, limitToWrapper = _b.limitToWrapper;
    if (disabled || isDisabled)
        return;
    var newScale = checkZoomBounds(roundNumber(scale, 2), minScale, maxScale, null, null);
    var bounds = handleCalculateBounds.call(this, newScale, limitToWrapper);
    var mousePosX = mouseX;
    var mousePosY = mouseY;
    // if event is present - use it's mouse position
    if (event) {
        var mousePosition = wheelMousePosition(event, contentComponent, scale);
        mousePosX = mousePosition.mouseX;
        mousePosY = mousePosition.mouseY;
    }
    var _c = handleCalculatePositions.call(this, mousePosX, mousePosY, newScale, bounds, limitToBounds), x = _c.x, y = _c.y;
    return { scale: newScale, positionX: x, positionY: y };
}
function handlePaddingAnimation$1() {
    var _a = this.stateProvider, scale = _a.scale, wrapperComponent = _a.wrapperComponent, _b = _a.options, minScale = _b.minScale, limitToBounds = _b.limitToBounds, _c = _a.scalePadding, disabled = _c.disabled, animationTime = _c.animationTime, animationType = _c.animationType;
    var isDisabled = disabled || scale >= minScale;
    if (scale >= 1 || limitToBounds) {
        // fire fit to bounds animation
        handlePanningAnimation.call(this);
    }
    if (isDisabled)
        return;
    var mouseX = wrapperComponent.offsetWidth / 2;
    var mouseY = wrapperComponent.offsetHeight / 2;
    var targetState = handleZoomToPoint.call(this, false, minScale, mouseX, mouseY, null);
    animateComponent.call(this, {
        targetState: targetState,
        speed: animationTime,
        type: animationType,
    });
}
/**
 * Button zoom events
 */
function handleDoubleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    var _a = this.stateProvider, contentComponent = _a.contentComponent, scale = _a.scale, _b = _a.doubleClick, disabled = _b.disabled, mode = _b.mode, step = _b.step, animationTime = _b.animationTime, animationType = _b.animationType;
    if (mode === "reset") {
        return resetTransformations.call(this, event, animationTime);
    }
    var delta = mode === "zoomOut" ? -1 : 1;
    var newScale = handleCalculateZoom.call(this, delta, step, undefined, undefined, true);
    var _c = wheelMousePosition(event, contentComponent, scale), mouseX = _c.mouseX, mouseY = _c.mouseY;
    var targetState = handleZoomToPoint.call(this, disabled, newScale, mouseX, mouseY);
    if (targetState.scale === scale)
        return;
    var targetScale = handleCalculateZoom.call(this, delta, step, true, undefined, true);
    var time = getButtonAnimationTime(targetScale, newScale, animationTime);
    animateComponent.call(this, {
        targetState: targetState,
        speed: time,
        type: animationType,
    });
}
function handleZoomControls(customDelta, customStep) {
    var _a = this.stateProvider, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY, wrapperComponent = _a.wrapperComponent, zoomIn = _a.zoomIn, zoomOut = _a.zoomOut;
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var mouseX = (wrapperWidth / 2 - positionX) / scale;
    var mouseY = (wrapperHeight / 2 - positionY) / scale;
    var newScale = handleCalculateZoom.call(this, customDelta, customStep, undefined, undefined, true);
    var isZoomIn = newScale > scale;
    var animationSpeed = isZoomIn
        ? zoomIn.animationTime
        : zoomOut.animationTime;
    var animationType = isZoomIn ? zoomIn.animationType : zoomOut.animationType;
    var isDisabled = isZoomIn ? zoomIn.disabled : zoomOut.disabled;
    var targetState = handleZoomToPoint.call(this, isDisabled, newScale, mouseX, mouseY);
    if (targetState.scale === scale)
        return;
    var targetScale = handleCalculateZoom.call(this, customDelta, customStep, true, undefined, true);
    var time = getButtonAnimationTime(targetScale, newScale, animationSpeed);
    animateComponent.call(this, {
        targetState: targetState,
        speed: time,
        type: animationType,
    });
}
function resetTransformations(animationSpeed) {
    var _a = this.props.defaultValues, defaultScale = _a.defaultScale, defaultPositionX = _a.defaultPositionX, defaultPositionY = _a.defaultPositionY;
    var _b = this.stateProvider, scale = _b.scale, positionX = _b.positionX, positionY = _b.positionY, reset = _b.reset, _c = _b.options, disabled = _c.disabled, limitToBounds = _c.limitToBounds, centerContent = _c.centerContent, limitToWrapper = _c.limitToWrapper;
    if (disabled || reset.disabled)
        return;
    if (scale === defaultScale &&
        positionX === defaultPositionX &&
        positionY === defaultPositionY)
        return;
    var speed = typeof animationSpeed === "number" ? animationSpeed : reset.animationTime;
    var targetScale = checkIsNumber(defaultScale, initialState.scale);
    var newPositionX = checkIsNumber(defaultPositionX, initialState.positionX);
    var newPositionY = checkIsNumber(defaultPositionY, initialState.positionY);
    if ((limitToBounds && !limitToWrapper) || centerContent) {
        var bounds = handleCalculateBounds.call(this, targetScale, limitToWrapper);
        newPositionX = bounds.minPositionX;
        newPositionY = bounds.minPositionY;
    }
    var targetState = {
        scale: targetScale,
        positionX: newPositionX,
        positionY: newPositionY,
    };
    animateComponent.call(this, {
        targetState: targetState,
        speed: speed,
        type: reset.animationType,
    });
}
function getButtonAnimationTime(targetScale, newScale, time) {
    return time * (newScale / targetScale);
}

function round(number, decimal) {
    var roundNumber = Math.pow(10, decimal);
    return Math.round(number * roundNumber) / roundNumber;
}
function getCurrentDistance(event) {
    return getDistance(event.touches[0], event.touches[1]);
}
function checkIfInfinite(number) {
    return number === Infinity || number === -Infinity;
}
function calculatePinchZoom(currentDistance, pinchStartDistance) {
    var _a = this.stateProvider, _b = _a.options, minScale = _b.minScale, maxScale = _b.maxScale, _c = _a.scalePadding, size = _c.size, disabled = _c.disabled;
    if (typeof pinchStartDistance !== "number" ||
        typeof currentDistance !== "number")
        return console.error("Pinch touches distance was not provided");
    if (currentDistance < 0)
        return;
    var touchProportion = currentDistance / pinchStartDistance;
    var scaleDifference = touchProportion * this.pinchStartScale;
    return checkZoomBounds(roundNumber(scaleDifference, 2), minScale, maxScale, size, !disabled);
}
function calculateMidpoint(event, scale, contentComponent) {
    var contentRect = contentComponent.getBoundingClientRect();
    var touches = event.touches;
    var firstPointX = round(touches[0].clientX - contentRect.left, 5);
    var firstPointY = round(touches[0].clientY - contentRect.top, 5);
    var secondPointX = round(touches[1].clientX - contentRect.left, 5);
    var secondPointY = round(touches[1].clientY - contentRect.top, 5);
    return {
        mouseX: (firstPointX + secondPointX) / 2 / scale,
        mouseY: (firstPointY + secondPointY) / 2 / scale,
    };
}
function handleZoomPinch(event) {
    var _a = this.stateProvider, scale = _a.scale, _b = _a.options, limitToBounds = _b.limitToBounds, limitToWrapper = _b.limitToWrapper, _c = _a.scalePadding, disabled = _c.disabled, size = _c.size, limitsOnWheel = _a.wheel.limitsOnWheel, pinch = _a.pinch;
    var contentComponent = this.state.contentComponent;
    if (pinch.disabled || this.stateProvider.options.disabled)
        return;
    if (event.cancelable) {
        event.preventDefault();
        event.stopPropagation();
    }
    // if one finger starts from outside of wrapper
    if (this.pinchStartDistance === null)
        return;
    // Position transformation
    var _d = calculateMidpoint(event, scale, contentComponent), mouseX = _d.mouseX, mouseY = _d.mouseY;
    // if touches goes off of the wrapper element
    if (checkIfInfinite(mouseX) || checkIfInfinite(mouseY))
        return;
    var currentDistance = getCurrentDistance(event);
    var newScale = calculatePinchZoom.call(this, currentDistance, this.pinchStartDistance);
    if (checkIfInfinite(newScale) || newScale === scale)
        return;
    // Get new element sizes to calculate bounds
    var bounds = handleCalculateBounds.call(this, newScale, limitToWrapper);
    // Calculate transformations
    var isLimitedToBounds = limitToBounds && (disabled || size === 0 || limitsOnWheel);
    var _e = handleCalculatePositions.call(this, mouseX, mouseY, newScale, bounds, isLimitedToBounds), x = _e.x, y = _e.y;
    this.lastDistance = currentDistance;
    this.stateProvider.positionX = x;
    this.stateProvider.positionY = y;
    this.stateProvider.scale = newScale;
    this.stateProvider.previousScale = scale;
    // update component transformation
    this.applyTransformation();
}

var throttleTime = 30;
function velocityTimeSpeed(speed, animationTime) {
    var velocityEqualToMove = this.stateProvider.pan.velocityEqualToMove;
    if (velocityEqualToMove) {
        return animationTime - animationTime / Math.max(1, speed);
    }
    return animationTime;
}
function handleEnableVelocity() {
    this.setState({ startAnimation: false });
}
function handleFireVelocity() {
    this.setState({ startAnimation: true });
}
function animateVelocity() {
    var _this = this;
    var _a = this.stateProvider, positionX = _a.positionX, positionY = _a.positionY, limitToBounds = _a.options.limitToBounds, _b = _a.pan, velocityBaseTime = _b.velocityBaseTime, lockAxisX = _b.lockAxisX, lockAxisY = _b.lockAxisY, velocityAnimationType = _b.velocityAnimationType, panReturnAnimationTime = _b.panReturnAnimationTime, panReturnAnimationType = _b.panReturnAnimationType, padding = _b.padding, paddingSize = _b.paddingSize, wrapperComponent = _a.wrapperComponent;
    if (!this.mounted)
        return;
    if (!this.velocity || !this.bounds)
        return handleDisableAnimation.call(this);
    var _c = this.bounds, maxPositionX = _c.maxPositionX, minPositionX = _c.minPositionX, maxPositionY = _c.maxPositionY, minPositionY = _c.minPositionY;
    var _d = this.velocity, velocityX = _d.velocityX, velocityY = _d.velocityY, velocity = _d.velocity;
    var animationTime = velocityTimeSpeed.call(this, velocity, velocityBaseTime);
    if (!animationTime) {
        handlePanningAnimation.call(this);
        return;
    }
    var targetX = velocityX;
    var targetY = velocityY;
    // pan return animation
    var newAnimationTime = animationTime > panReturnAnimationTime
        ? animationTime
        : panReturnAnimationTime;
    var paddingValue = padding ? paddingSize : 0;
    var paddingX = wrapperComponent
        ? (paddingValue * wrapperComponent.offsetWidth) / 100
        : 0;
    var paddingY = wrapperComponent
        ? (paddingValue * wrapperComponent.offsetHeight) / 100
        : 0;
    var maxTargetX = maxPositionX + paddingX;
    var minTargetX = minPositionX - paddingX;
    var maxTargetY = maxPositionY + paddingY;
    var minTargetY = minPositionY - paddingY;
    var startPosition = checkPositionBounds(positionX, positionY, this.bounds, limitToBounds, paddingValue, wrapperComponent);
    var startTime = new Date().getTime();
    // animation start timestamp
    animate.call(this, velocityAnimationType, newAnimationTime, function (step) {
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / panReturnAnimationTime;
        var returnAnimation = availableAnimations[panReturnAnimationType];
        var customReturnStep = returnAnimation(animationProgress);
        if (frameTime > panReturnAnimationTime ||
            customReturnStep > 1 ||
            customReturnStep === Infinity ||
            customReturnStep === -Infinity)
            customReturnStep = 1;
        var currentPositionX = getPosition(lockAxisX, targetX, step, customReturnStep, minPositionX, maxPositionX, limitToBounds, positionX, startPosition.x, minTargetX, maxTargetX);
        var currentPositionY = getPosition(lockAxisY, targetY, step, customReturnStep, minPositionY, maxPositionY, limitToBounds, positionY, startPosition.y, minTargetY, maxTargetY);
        if (positionX !== currentPositionX || positionY !== currentPositionY) {
            // Save panned position
            _this.stateProvider.positionX = currentPositionX;
            _this.stateProvider.positionY = currentPositionY;
            // apply animation changes
            _this.applyTransformation();
        }
    });
}
function calculateVelocityStart(event) {
    var _this = this;
    var _a = this.stateProvider, scale = _a.scale, disabled = _a.options.disabled, _b = _a.pan, velocity = _b.velocity, velocitySensitivity = _b.velocitySensitivity, velocityActiveScale = _b.velocityActiveScale, velocityMinSpeed = _b.velocityMinSpeed, wrapperComponent = _a.wrapperComponent;
    if (!velocity || velocityActiveScale >= scale || disabled)
        return;
    handleEnableVelocity.call(this);
    var now = Date.now();
    if (this.lastMousePosition) {
        var position_1 = getClientPosition(event);
        if (!position_1)
            return console.error("No mouse or touch position detected");
        var clientX = position_1.clientX, clientY = position_1.clientY;
        var distanceX = clientX - this.lastMousePosition.clientX;
        var distanceY = clientY - this.lastMousePosition.clientY;
        var interval = now - this.velocityTime;
        var wrapperToWindowScaleX = 2 - wrapperComponent.offsetWidth / window.innerWidth;
        var wrapperToWindowScaleY = 2 - wrapperComponent.offsetHeight / window.innerHeight;
        var scaledX = 20 * Math.max(velocityMinSpeed, Math.min(2, wrapperToWindowScaleX));
        var scaledY = 20 * Math.max(velocityMinSpeed, Math.min(2, wrapperToWindowScaleY));
        var velocityX = (distanceX / interval) * velocitySensitivity * scale * scaledX;
        var velocityY = (distanceY / interval) * velocitySensitivity * scale * scaledY;
        var speed = distanceX * distanceX + distanceY * distanceY;
        var velocity_1 = (Math.sqrt(speed) / interval) * velocitySensitivity;
        if (this.velocity && velocity_1 < this.velocity.velocity && this.throttle)
            return;
        this.velocity = { velocityX: velocityX, velocityY: velocityY, velocity: velocity_1 };
        // throttling
        if (this.throttle)
            clearTimeout(this.throttle);
        this.throttle = setTimeout(function () {
            if (_this.mounted)
                _this.throttle = false;
        }, throttleTime);
    }
    var position = getClientPosition(event);
    this.lastMousePosition = position;
    this.velocityTime = now;
}
function getPosition(isLocked, target, step, panReturnStep, minBound, maxBound, limitToBounds, offset, startPosition, minTarget, maxTarget) {
    if (limitToBounds) {
        if (startPosition > minBound && offset > maxBound) {
            var newPosition = startPosition - (startPosition - maxBound) * panReturnStep;
            if (newPosition > maxTarget)
                return maxTarget;
            if (newPosition < maxBound)
                return maxBound;
            return newPosition;
        }
        if (startPosition < minBound && offset < minBound) {
            var newPosition = startPosition - (startPosition - minBound) * panReturnStep;
            if (newPosition < minTarget)
                return minTarget;
            if (newPosition > minBound)
                return minBound;
            return newPosition;
        }
    }
    if (isLocked)
        return startPosition;
    var offsetPosition = offset + target * step;
    return boundLimiter(offsetPosition, minBound, maxBound, limitToBounds);
}

// We want to make event listeners non-passive, and to do so have to check
function makePassiveEventOption(passive) {
    return  passive;
}

var propsList = [
    "previousScale",
    "scale",
    "positionX",
    "positionY",
    "defaultPositionX",
    "defaultPositionY",
    "defaultScale",
    "onWheelStart",
    "onWheel",
    "onWheelStop",
    "onPanningStart",
    "onPanning",
    "onPanningStop",
    "onPinchingStart",
    "onPinching",
    "onPinchingStop",
    "onZoomChange",
    "options",
    "wheel",
    "scalePadding",
    "pan",
    "pinch",
    "zoomIn",
    "zoomOut",
    "doubleClick",
    "reset",
];
var getValidPropsFromObject = function (props) {
    return Object.keys(props).reduce(function (acc, key) {
        if (propsList.includes(key)) {
            acc[key] = props[key];
        }
        return acc;
    }, {});
};

var Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var wheelStopEventTimer = null;
var wheelStopEventTime = 180;
var wheelAnimationTimer = null;
var wheelAnimationTime = 100;
var StateProvider = /** @class */ (function (_super) {
    __extends(StateProvider, _super);
    function StateProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mounted = true;
        _this.state = {
            wrapperComponent: undefined,
            contentComponent: undefined,
        };
        _this.stateProvider = __assign(__assign(__assign(__assign({}, initialState), mergeProps(initialState, _this.props.dynamicValues)), _this.props.defaultValues), { previousScale: _this.props.dynamicValues.scale ||
                _this.props.defaultValues.scale ||
                initialState.scale });
        _this.windowToWrapperScaleX = 0;
        _this.windowToWrapperScaleY = 0;
        // panning helpers
        _this.startCoords = null;
        _this.isDown = false;
        // pinch helpers
        _this.pinchStartDistance = null;
        _this.lastDistance = null;
        _this.pinchStartScale = null;
        _this.distance = null;
        _this.bounds = null;
        // velocity helpers
        _this.velocityTime = null;
        _this.lastMousePosition = null;
        _this.velocity = null;
        _this.offsetX = null;
        _this.offsetY = null;
        _this.throttle = false;
        // wheel helpers
        _this.previousWheelEvent = null;
        _this.lastScale = null;
        // animations helpers
        _this.animate = null;
        _this.animation = null;
        _this.maxBounds = null;
        //////////
        // Wheel
        //////////
        _this.handleWheel = function (event) {
            var _a = _this.stateProvider, scale = _a.scale, _b = _a.wheel, disabled = _b.disabled, wheelEnabled = _b.wheelEnabled, touchPadEnabled = _b.touchPadEnabled;
            var _c = _this.props, onWheelStart = _c.onWheelStart, onWheel = _c.onWheel, onWheelStop = _c.onWheelStop;
            var _d = _this.state, wrapperComponent = _d.wrapperComponent, contentComponent = _d.contentComponent;
            if (_this.isDown ||
                disabled ||
                _this.stateProvider.options.disabled ||
                !wrapperComponent ||
                !contentComponent)
                return;
            // ctrlKey detects if touchpad execute wheel or pinch gesture
            if (!wheelEnabled && !event.ctrlKey)
                return;
            if (!touchPadEnabled && event.ctrlKey)
                return;
            // Wheel start event
            if (!wheelStopEventTimer) {
                _this.lastScale = scale;
                handleDisableAnimation.call(_this);
                handleCallback(onWheelStart, _this.getCallbackProps());
            }
            // Wheel event
            handleWheelZoom.call(_this, event);
            handleCallback(onWheel, _this.getCallbackProps());
            _this.applyTransformation(null, null, null);
            _this.previousWheelEvent = event;
            // Wheel stop event
            if (handleWheelStop(_this.previousWheelEvent, event, _this.stateProvider)) {
                clearTimeout(wheelStopEventTimer);
                wheelStopEventTimer = setTimeout(function () {
                    if (!_this.mounted)
                        return;
                    handleCallback(onWheelStop, _this.getCallbackProps());
                    wheelStopEventTimer = null;
                }, wheelStopEventTime);
            }
            // cancel animation
            _this.animate = false;
            // fire animation
            _this.lastScale = _this.stateProvider.scale;
            clearTimeout(wheelAnimationTimer);
            wheelAnimationTimer = setTimeout(function () {
                if (!_this.mounted)
                    return;
                handlePaddingAnimation$1.call(_this, event);
            }, wheelAnimationTime);
        };
        //////////
        // Panning
        //////////
        _this.checkPanningTarget = function (event) {
            var disableOnTarget = _this.stateProvider.pan.disableOnTarget;
            return (disableOnTarget
                .map(function (tag) { return tag.toUpperCase(); })
                .includes(event.target.tagName) ||
                disableOnTarget.find(function (element) {
                    return event.target.classList.value.includes(element);
                }));
        };
        _this.checkIsPanningActive = function (event) {
            var disabled = _this.stateProvider.pan.disabled;
            var _a = _this.state, wrapperComponent = _a.wrapperComponent, contentComponent = _a.contentComponent;
            return (!_this.isDown ||
                disabled ||
                _this.stateProvider.options.disabled ||
                (event.touches &&
                    (event.touches.length !== 1 ||
                        Math.abs(_this.startCoords.x - event.touches[0].clientX) < 1 ||
                        Math.abs(_this.startCoords.y - event.touches[0].clientY) < 1)) ||
                !wrapperComponent ||
                !contentComponent);
        };
        _this.handleSetUpPanning = function (x, y) {
            var _a = _this.stateProvider, positionX = _a.positionX, positionY = _a.positionY;
            _this.isDown = true;
            _this.startCoords = { x: x - positionX, y: y - positionY };
            handleCallback(_this.props.onPanningStart, _this.getCallbackProps());
        };
        _this.handleStartPanning = function (event) {
            var _a = _this.stateProvider, wrapperComponent = _a.wrapperComponent, scale = _a.scale, _b = _a.options, minScale = _b.minScale, maxScale = _b.maxScale, limitToWrapper = _b.limitToWrapper, disabled = _a.pan.disabled;
            var target = event.target, touches = event.touches;
            if (disabled ||
                _this.stateProvider.options.disabled ||
                (wrapperComponent && !wrapperComponent.contains(target)) ||
                _this.checkPanningTarget(event) ||
                scale < minScale ||
                scale > maxScale)
                return;
            handleDisableAnimation.call(_this);
            _this.bounds = handleCalculateBounds.call(_this, scale, limitToWrapper);
            // Mobile points
            if (touches && touches.length === 1) {
                _this.handleSetUpPanning(touches[0].clientX, touches[0].clientY);
            }
            // Desktop points
            if (!touches) {
                _this.handleSetUpPanning(event.clientX, event.clientY);
            }
        };
        _this.handlePanning = function (event) {
            if (_this.isDown)
                event.preventDefault();
            if (_this.checkIsPanningActive(event))
                return;
            event.stopPropagation();
            calculateVelocityStart.call(_this, event);
            handlePanning.call(_this, event);
            handleCallback(_this.props.onPanning, _this.getCallbackProps());
        };
        _this.handleStopPanning = function () {
            if (_this.isDown) {
                _this.isDown = false;
                _this.animate = false;
                _this.animation = false;
                handleFireVelocity.call(_this);
                handleCallback(_this.props.onPanningStop, _this.getCallbackProps());
                var _a = _this.stateProvider, velocity = _a.pan.velocity, scale = _a.scale;
                // start velocity animation
                if (_this.velocity && velocity && scale > 1) {
                    animateVelocity.call(_this);
                }
                else {
                    // fire fit to bounds animation
                    handlePanningAnimation.call(_this);
                }
            }
        };
        //////////
        // Pinch
        //////////
        _this.handlePinchStart = function (event) {
            var scale = _this.stateProvider.scale;
            event.preventDefault();
            event.stopPropagation();
            handleDisableAnimation.call(_this);
            var distance = getDistance(event.touches[0], event.touches[1]);
            _this.pinchStartDistance = distance;
            _this.lastDistance = distance;
            _this.pinchStartScale = scale;
            _this.isDown = false;
            handleCallback(_this.props.onPinchingStart, _this.getCallbackProps());
        };
        _this.handlePinch = function (event) {
            _this.isDown = false;
            handleZoomPinch.call(_this, event);
            handleCallback(_this.props.onPinching, _this.getCallbackProps());
        };
        _this.handlePinchStop = function () {
            if (typeof _this.pinchStartScale === "number") {
                _this.isDown = false;
                _this.velocity = null;
                _this.lastDistance = null;
                _this.pinchStartScale = null;
                _this.pinchStartDistance = null;
                handlePaddingAnimation$1.call(_this);
                handleCallback(_this.props.onPinchingStop, _this.getCallbackProps());
            }
        };
        //////////
        // Touch Events
        //////////
        _this.handleTouchStart = function (event) {
            var _a = _this.stateProvider, wrapperComponent = _a.wrapperComponent, contentComponent = _a.contentComponent, scale = _a.scale, _b = _a.options, disabled = _b.disabled, minScale = _b.minScale;
            var touches = event.touches;
            if (disabled || !wrapperComponent || !contentComponent || scale < minScale)
                return;
            handleDisableAnimation.call(_this);
            if (touches && touches.length === 1)
                return _this.handleStartPanning(event);
            if (touches && touches.length === 2)
                return _this.handlePinchStart(event);
        };
        _this.handleTouch = function (event) {
            var _a = _this.stateProvider, pan = _a.pan, pinch = _a.pinch, options = _a.options;
            if (options.disabled)
                return;
            if (!pan.disabled && event.touches.length === 1)
                return _this.handlePanning(event);
            if (!pinch.disabled && event.touches.length === 2)
                return _this.handlePinch(event);
        };
        _this.handleTouchStop = function () {
            _this.handleStopPanning();
            _this.handlePinchStop();
        };
        //////////
        // Controls
        //////////
        _this.zoomIn = function (event) {
            var _a = _this.stateProvider, _b = _a.zoomIn, disabled = _b.disabled, step = _b.step, options = _a.options;
            var _c = _this.state, wrapperComponent = _c.wrapperComponent, contentComponent = _c.contentComponent;
            if (!event)
                throw Error("Zoom in function requires event prop");
            if (disabled || options.disabled || !wrapperComponent || !contentComponent)
                return;
            handleZoomControls.call(_this, 1, step);
        };
        _this.zoomOut = function (event) {
            var _a = _this.stateProvider, _b = _a.zoomOut, disabled = _b.disabled, step = _b.step, options = _a.options;
            var _c = _this.state, wrapperComponent = _c.wrapperComponent, contentComponent = _c.contentComponent;
            if (!event)
                throw Error("Zoom out function requires event prop");
            if (disabled || options.disabled || !wrapperComponent || !contentComponent)
                return;
            handleZoomControls.call(_this, -1, step);
        };
        _this.handleDbClick = function (event) {
            var _a = _this.stateProvider, options = _a.options, _b = _a.doubleClick, disabled = _b.disabled, step = _b.step;
            var _c = _this.state, wrapperComponent = _c.wrapperComponent, contentComponent = _c.contentComponent;
            if (!event)
                throw Error("Double click function requires event prop");
            if (disabled || options.disabled || !wrapperComponent || !contentComponent)
                return;
            handleDoubleClick.call(_this, event, 1, step);
        };
        _this.setScale = function (newScale, speed, type) {
            if (speed === void 0) { speed = 200; }
            if (type === void 0) { type = "easeOut"; }
            var _a = _this.stateProvider, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale, disabled = _a.options.disabled;
            var _b = _this.state, wrapperComponent = _b.wrapperComponent, contentComponent = _b.contentComponent;
            if (disabled || !wrapperComponent || !contentComponent)
                return;
            var targetState = {
                positionX: positionX,
                positionY: positionY,
                scale: isNaN(newScale) ? scale : newScale,
            };
            animateComponent.call(_this, {
                targetState: targetState,
                speed: speed,
                type: type,
            });
        };
        _this.setPositionX = function (newPosX, speed, type) {
            if (speed === void 0) { speed = 200; }
            if (type === void 0) { type = "easeOut"; }
            var _a = _this.stateProvider, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale, _b = _a.options, disabled = _b.disabled, transformEnabled = _b.transformEnabled;
            var _c = _this.state, wrapperComponent = _c.wrapperComponent, contentComponent = _c.contentComponent;
            if (disabled || !transformEnabled || !wrapperComponent || !contentComponent)
                return;
            var targetState = {
                positionX: isNaN(newPosX) ? positionX : newPosX,
                positionY: positionY,
                scale: scale,
            };
            animateComponent.call(_this, {
                targetState: targetState,
                speed: speed,
                type: type,
            });
        };
        _this.setPositionY = function (newPosY, speed, type) {
            if (speed === void 0) { speed = 200; }
            if (type === void 0) { type = "easeOut"; }
            var _a = _this.stateProvider, positionX = _a.positionX, scale = _a.scale, positionY = _a.positionY, _b = _a.options, disabled = _b.disabled, transformEnabled = _b.transformEnabled;
            var _c = _this.state, wrapperComponent = _c.wrapperComponent, contentComponent = _c.contentComponent;
            if (disabled || !transformEnabled || !wrapperComponent || !contentComponent)
                return;
            var targetState = {
                positionX: positionX,
                positionY: isNaN(newPosY) ? positionY : newPosY,
                scale: scale,
            };
            animateComponent.call(_this, {
                targetState: targetState,
                speed: speed,
                type: type,
            });
        };
        _this.setTransform = function (newPosX, newPosY, newScale, speed, type) {
            if (speed === void 0) { speed = 200; }
            if (type === void 0) { type = "easeOut"; }
            var _a = _this.stateProvider, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale, _b = _a.options, disabled = _b.disabled, transformEnabled = _b.transformEnabled;
            var _c = _this.state, wrapperComponent = _c.wrapperComponent, contentComponent = _c.contentComponent;
            if (disabled || !transformEnabled || !wrapperComponent || !contentComponent)
                return;
            var targetState = {
                positionX: isNaN(newPosX) ? positionX : newPosX,
                positionY: isNaN(newPosY) ? positionY : newPosY,
                scale: isNaN(newScale) ? scale : newScale,
            };
            animateComponent.call(_this, {
                targetState: targetState,
                speed: speed,
                type: type,
            });
        };
        _this.resetTransform = function () {
            var _a = _this.stateProvider.options, disabled = _a.disabled, transformEnabled = _a.transformEnabled;
            if (disabled || !transformEnabled)
                return;
            resetTransformations.call(_this);
        };
        _this.setDefaultState = function () {
            _this.animation = null;
            _this.stateProvider = __assign(__assign(__assign({}, _this.stateProvider), { scale: initialState.scale, positionX: initialState.positionX, positionY: initialState.positionY }), _this.props.defaultValues);
            _this.forceUpdate();
        };
        //////////
        // Setters
        //////////
        _this.setWrapperComponent = function (wrapperComponent) {
            _this.setState({ wrapperComponent: wrapperComponent });
        };
        _this.setContentComponent = function (contentComponent) {
            _this.setState({ contentComponent: contentComponent }, function () {
                var _a = _this.stateProvider, wrapperComponent = _a.wrapperComponent, _b = _a.options, centerContent = _b.centerContent, limitToBounds = _b.limitToBounds, limitToWrapper = _b.limitToWrapper, scale = _a.scale;
                var _c = _this.props.defaultValues, positionX = _c.positionX, positionY = _c.positionY;
                if ((limitToBounds && !limitToWrapper) ||
                    (centerContent && !positionX && !positionY)) {
                    var transform = "translate(25%, 25%) scale(" + scale + ")";
                    contentComponent.style.transform = transform;
                    contentComponent.style.WebkitTransform = transform;
                    // force update to inject state to the context
                    _this.forceUpdate();
                    var startTime_1 = new Date().getTime();
                    var maxTimeWait_1 = 2000;
                    var interval_1 = setInterval(function () {
                        if (wrapperComponent.offsetWidth) {
                            var bounds = handleCalculateBounds.call(_this, scale, false);
                            _this.stateProvider.positionX = bounds.minPositionX;
                            _this.stateProvider.positionY = bounds.minPositionY;
                            _this.applyTransformation(null, null, null);
                            clearInterval(interval_1);
                            interval_1 = null;
                        }
                        else if (new Date().getTime() - startTime_1 > maxTimeWait_1) {
                            clearInterval(interval_1);
                            interval_1 = null;
                        }
                    }, 20);
                }
                else {
                    _this.applyTransformation(null, null, null);
                }
            });
        };
        _this.applyTransformation = function (newScale, posX, posY) {
            if (!_this.mounted)
                return;
            var contentComponent = _this.state.contentComponent;
            var onZoomChange = _this.props.onZoomChange;
            var _a = _this.stateProvider, previousScale = _a.previousScale, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
            if (!contentComponent)
                return console.error("There is no content component");
            var transform = "translate(" + (posX || positionX) + "px, " + (posY ||
                positionY) + "px) scale(" + (newScale || scale) + ")";
            contentComponent.style.transform = transform;
            contentComponent.style.WebkitTransform = transform;
            // force update to inject state to the context
            _this.forceUpdate();
            if (onZoomChange && previousScale !== scale) {
                handleCallback(onZoomChange, _this.getCallbackProps());
            }
        };
        //////////
        // Props
        //////////
        _this.getCallbackProps = function () { return getValidPropsFromObject(_this.stateProvider); };
        return _this;
    }
    StateProvider.prototype.componentDidMount = function () {
        var passiveOption = makePassiveEventOption(false);
        // Panning on window to allow panning when mouse is out of wrapper
        window.addEventListener("mousedown", this.handleStartPanning, passiveOption);
        window.addEventListener("mousemove", this.handlePanning, passiveOption);
        window.addEventListener("mouseup", this.handleStopPanning, passiveOption);
    };
    StateProvider.prototype.componentWillUnmount = function () {
        var passiveOption = makePassiveEventOption(false);
        window.removeEventListener("mousedown", this.handleStartPanning, passiveOption);
        window.removeEventListener("mousemove", this.handlePanning, passiveOption);
        window.removeEventListener("mouseup", this.handleStopPanning, passiveOption);
        handleDisableAnimation.call(this);
    };
    StateProvider.prototype.componentDidUpdate = function (oldProps, oldState) {
        var _a = this.state, wrapperComponent = _a.wrapperComponent, contentComponent = _a.contentComponent;
        var dynamicValues = this.props.dynamicValues;
        if (!oldState.contentComponent && contentComponent) {
            this.stateProvider.contentComponent = contentComponent;
        }
        if (!oldState.wrapperComponent &&
            wrapperComponent &&
            wrapperComponent !== undefined) {
            this.stateProvider.wrapperComponent = wrapperComponent;
            this.windowToWrapperScaleX = getWindowScaleX(wrapperComponent);
            this.windowToWrapperScaleY = getWindowScaleY(wrapperComponent);
            // Zooming events on wrapper
            var passiveOption = makePassiveEventOption(false);
            wrapperComponent.addEventListener("wheel", this.handleWheel, passiveOption);
            wrapperComponent.addEventListener("dblclick", this.handleDbClick, passiveOption);
            wrapperComponent.addEventListener("touchstart", this.handleTouchStart, passiveOption);
            wrapperComponent.addEventListener("touchmove", this.handleTouch, passiveOption);
            wrapperComponent.addEventListener("touchend", this.handleTouchStop, passiveOption);
        }
        // set bound for animations
        if ((wrapperComponent && contentComponent) ||
            oldProps.dynamicValues !== dynamicValues) {
            this.maxBounds = handleCalculateBounds.call(this, this.stateProvider.scale, this.stateProvider.options.limitToWrapper);
        }
        // must be at the end of the update function, updates
        if (oldProps.dynamicValues && oldProps.dynamicValues !== dynamicValues) {
            this.animation = null;
            this.stateProvider = __assign(__assign({}, this.stateProvider), mergeProps(this.stateProvider, dynamicValues));
            this.applyTransformation(null, null, null);
        }
    };
    StateProvider.prototype.render = function () {
        var _a = this.state, wrapperComponent = _a.wrapperComponent, contentComponent = _a.contentComponent;
        /**
         * Context provider value
         */
        var value = {
            loaded: Boolean(wrapperComponent && contentComponent),
            state: this.getCallbackProps(),
            dispatch: {
                setScale: this.setScale,
                setPositionX: this.setPositionX,
                setPositionY: this.setPositionY,
                zoomIn: this.zoomIn,
                zoomOut: this.zoomOut,
                setTransform: this.setTransform,
                resetTransform: this.resetTransform,
                setDefaultState: this.setDefaultState,
            },
            nodes: {
                setWrapperComponent: this.setWrapperComponent,
                setContentComponent: this.setContentComponent,
            },
        };
        var children = this.props.children;
        var content = typeof children === "function"
            ? children(__assign(__assign({}, value.state), value.dispatch))
            : children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, { value: value }, content);
    };
    return StateProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var TransformWrapper = function (_a) {
    var children = _a.children, defaultPositionX = _a.defaultPositionX, defaultPositionY = _a.defaultPositionY, defaultScale = _a.defaultScale, onWheelStart = _a.onWheelStart, onWheel = _a.onWheel, onWheelStop = _a.onWheelStop, onPanningStart = _a.onPanningStart, onPanning = _a.onPanning, onPanningStop = _a.onPanningStop, onPinchingStart = _a.onPinchingStart, onPinching = _a.onPinching, onPinchingStop = _a.onPinchingStop, onZoomChange = _a.onZoomChange, rest = __rest(_a, ["children", "defaultPositionX", "defaultPositionY", "defaultScale", "onWheelStart", "onWheel", "onWheelStop", "onPanningStart", "onPanning", "onPanningStop", "onPinchingStart", "onPinching", "onPinchingStop", "onZoomChange"]);
    var props = __assign({}, rest);
    if (props.options && props.options.limitToWrapper) {
        props.options.limitToBounds = true;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StateProvider, { defaultValues: deleteUndefinedProps({
            positionX: defaultPositionX,
            positionY: defaultPositionY,
            scale: defaultScale,
        }), dynamicValues: deleteUndefinedProps(getValidPropsFromObject(props)), onWheelStart: onWheelStart, onWheel: onWheel, onWheelStop: onWheelStop, onPanningStart: onPanningStart, onPanning: onPanning, onPanningStop: onPanningStop, onPinchingStart: onPinchingStart, onPinching: onPinching, onPinchingStop: onPinchingStop, onZoomChange: onZoomChange }, children));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".TransformComponent-module_container__3NwNd {\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.TransformComponent-module_content__TZU5O {\n  display: flex;\n  flex-wrap: wrap;\n  width: fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.TransformComponent-module_content__TZU5O img {\n  pointer-events: none;\n}\n";
var styles = {"container":"TransformComponent-module_container__3NwNd","content":"TransformComponent-module_content__TZU5O"};
styleInject(css);

var TransformComponent = /** @class */ (function (_super) {
    __extends(TransformComponent, _super);
    function TransformComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapperRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        _this.contentRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        return _this;
    }
    TransformComponent.prototype.componentDidMount = function () {
        var nodes = this.context.nodes;
        nodes.setWrapperComponent(this.wrapperRef.current);
        nodes.setContentComponent(this.contentRef.current);
    };
    TransformComponent.prototype.render = function () {
        var children = this.props.children;
        var _a = this.context.state, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale, _b = _a.options, wrapperClass = _b.wrapperClass, contentClass = _b.contentClass;
        var style = {
            WebkitTransform: "translate(" + positionX + "px, " + positionY + "px) scale(" + scale + ")",
            transform: "translate(" + positionX + "px, " + positionY + "px) scale(" + scale + ")",
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: this.wrapperRef, className: "react-transform-component " + styles.container + " " + wrapperClass },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: this.contentRef, className: "react-transform-element " + styles.content + " " + contentClass, style: style }, children)));
    };
    return TransformComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
TransformComponent.contextType = Context;


//# sourceMappingURL=index.es.js.map


/***/ })

}]);
//# sourceMappingURL=product-gallery.chunk.js.map