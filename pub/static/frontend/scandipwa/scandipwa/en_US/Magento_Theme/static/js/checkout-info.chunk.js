(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["checkout-info"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.component.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.component.js ***!
  \********************************************************************************************/
/*! exports provided: CartCoupon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCoupon", function() { return CartCoupon; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Form */ "./node_modules/@scandipwa/scandipwa/src/component/Form/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _CartCoupon_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CartCoupon.style */ "./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.style.scss");
/* harmony import */ var _CartCoupon_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CartCoupon_style__WEBPACK_IMPORTED_MODULE_7__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.component.js";

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








/** #namespace Component/CartCoupon/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartCoupon = Mosaic.middleware((_class = class CartCoupon_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      enteredCouponCode: ''
    };
    this.handleCouponCodeChange = this.handleCouponCodeChange.bind(this);
    this.handleApplyCoupon = this.handleApplyCoupon.bind(this);
    this.handleRemoveCoupon = this.handleRemoveCoupon.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      isIncorrectCoupon: prevIsIncorrectCoupon = false
    } = prevProps;
    const {
      isIncorrectCoupon = false,
      resetIsIncorrectCoupon
    } = this.props;

    if (isIncorrectCoupon && prevIsIncorrectCoupon !== isIncorrectCoupon) {
      this.toggleIsFieldWithError(isIncorrectCoupon);
      resetIsIncorrectCoupon();
    }
  }

  toggleIsFieldWithError(value) {
    this.setState({
      isFieldWithError: value
    });
  }

  handleCouponCodeChange(event, field) {
    const {
      value = ''
    } = field;
    this.setState({
      enteredCouponCode: value,
      isFieldWithError: false
    });
  }

  handleApplyCoupon() {
    const {
      handleApplyCouponToCart
    } = this.props;
    const {
      enteredCouponCode
    } = this.state;
    handleApplyCouponToCart(enteredCouponCode);
  }

  handleRemoveCoupon() {
    const {
      handleRemoveCouponFromCart
    } = this.props;
    handleRemoveCouponFromCart(); // We need to reset input field. If we do it in applyCouponCode,
    // then it will disappear if code is incorrect. We want to avoid it

    this.setState({
      enteredCouponCode: ''
    });
  }

  handleFormSubmit() {
    const {
      couponCode
    } = this.props;

    if (couponCode) {
      this.handleRemoveCoupon();
      return;
    }

    this.handleApplyCoupon();
  }

  renderApplyCoupon() {
    const {
      enteredCouponCode,
      isFieldWithError
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartCoupon",
      elem: "Input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].text,
      attr: {
        id: 'couponCode',
        name: 'couponCode',
        defaultValue: enteredCouponCode,
        placeholder: __('Your discount code'),
        'aria-label': __('Your discount code')
      },
      events: {
        onChange: this.handleCouponCodeChange
      },
      validateOn: ['onChange'],
      mix: {
        mods: {
          hasError: isFieldWithError
        },
        block: 'Field'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    })), /*#__PURE__*/_checkBEM(React, "button", {
      block: "CartCoupon",
      elem: "Button",
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].button,
      mods: {
        isHollow: true
      },
      disabled: !enteredCouponCode,
      onClick: this.handleApplyCoupon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __('Submit')));
  }

  renderRemoveCoupon() {
    const {
      couponCode
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartCoupon",
      elem: "Message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      block: "CartCoupon",
      elem: "MessageText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    }, __('Applied coupon code: '), /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }, couponCode.toUpperCase()))), /*#__PURE__*/_checkBEM(React, "button", {
      block: "CartCoupon",
      elem: "Button",
      type: "button",
      mix: {
        block: 'Button'
      },
      onClick: this.handleRemoveCoupon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, __('Remove Coupon')));
  }

  renderTitle() {
    const {
      title
    } = this.props;

    if (!title) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "h3", {
      block: "CartCoupon",
      elem: "Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }, title);
  }

  render() {
    const {
      isLoading,
      couponCode,
      mix
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartCoupon",
      mix: mix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSubmit: this.handleFormSubmit,
      returnAsObject: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 21
      }
    }), this.renderTitle(), couponCode ? this.renderRemoveCoupon() : this.renderApplyCoupon()));
  }

}, _class.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  couponCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  handleApplyCouponToCart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleRemoveCouponFromCart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__["MixType"].isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isIncorrectCoupon: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  resetIsIncorrectCoupon: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class.defaultProps = {
  couponCode: ''
}, _class), "Component/CartCoupon/Component");
/* harmony default export */ __webpack_exports__["default"] = (CartCoupon);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.container.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.container.js ***!
  \********************************************************************************************/
/*! exports provided: CartDispatcher, mapStateToProps, mapDispatchToProps, CartCouponContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDispatcher", function() { return CartDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCouponContainer", function() { return CartCouponContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _CartCoupon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CartCoupon.component */ "./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.container.js";

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






const CartDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ./src/store/Cart/Cart.dispatcher */ "./node_modules/@scandipwa/scandipwa/src/store/Cart/Cart.dispatcher.js"));
/** #namespace Component/CartCoupon/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function () {
  return {};
}, "Component/CartCoupon/Container/mapStateToProps");
/** #namespace Component/CartCoupon/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    applyCouponToCart: function (couponCode) {
      return CartDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.applyCouponToCart(dispatch, couponCode);
      });
    },
    removeCouponFromCart: function () {
      return CartDispatcher.then(function (_ref2) {
        let {
          default: dispatcher
        } = _ref2;
        return dispatcher.removeCouponFromCart(dispatch);
      });
    }
  };
}, "Component/CartCoupon/Container/mapDispatchToProps");
/** #namespace Component/CartCoupon/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartCouponContainer = Mosaic.middleware((_class = class CartCouponContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isLoading: false,
      isIncorrectCoupon: false
    };
    this.containerFunctions = {
      handleApplyCouponToCart: this.handleApplyCouponToCart.bind(this),
      handleRemoveCouponFromCart: this.handleRemoveCouponFromCart.bind(this),
      resetIsIncorrectCoupon: this.resetIsIncorrectCoupon.bind(this)
    };
  }

  containerProps() {
    const {
      isLoading,
      isIncorrectCoupon
    } = this.state;
    const {
      couponCode,
      mix,
      title
    } = this.props;
    return {
      isLoading,
      isIncorrectCoupon,
      couponCode,
      mix,
      title
    };
  }

  resetIsIncorrectCoupon() {
    this.setState({
      isIncorrectCoupon: false
    });
  }

  handleApplyCouponToCart(couponCode) {
    var _this = this;

    const {
      applyCouponToCart,
      onCouponCodeUpdate
    } = this.props;
    this.setState({
      isLoading: true
    });
    applyCouponToCart(couponCode).then(
    /** #namespace Component/CartCoupon/Container/CartCouponContainer/handleApplyCouponToCart/then/finally/applyCouponToCart/then */
    Mosaic.middleware(function (success) {
      onCouponCodeUpdate();

      _this.setState({
        isIncorrectCoupon: !success
      });
    }, "Component/CartCoupon/Container/CartCouponContainer/handleApplyCouponToCart/then/finally/applyCouponToCart/then")).finally(
    /** #namespace Component/CartCoupon/Container/CartCouponContainer/handleApplyCouponToCart/then/finally */
    Mosaic.middleware(function () {
      return _this.setState({
        isLoading: false
      });
    }, "Component/CartCoupon/Container/CartCouponContainer/handleApplyCouponToCart/then/finally"));
  }

  handleRemoveCouponFromCart() {
    var _this2 = this;

    const {
      removeCouponFromCart,
      onCouponCodeUpdate
    } = this.props;
    this.setState({
      isLoading: true
    });
    removeCouponFromCart().then(
    /** #namespace Component/CartCoupon/Container/CartCouponContainer/handleRemoveCouponFromCart/then/finally/removeCouponFromCart/then/onCouponCodeUpdate */
    Mosaic.middleware(function () {
      return onCouponCodeUpdate();
    }, "Component/CartCoupon/Container/CartCouponContainer/handleRemoveCouponFromCart/then/finally/removeCouponFromCart/then/onCouponCodeUpdate")).finally(
    /** #namespace Component/CartCoupon/Container/CartCouponContainer/handleRemoveCouponFromCart/then/finally */
    Mosaic.middleware(function () {
      return _this2.setState({
        isLoading: false
      });
    }, "Component/CartCoupon/Container/CartCouponContainer/handleRemoveCouponFromCart/then/finally"));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CartCoupon_component__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  couponCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  applyCouponToCart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  removeCouponFromCart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCouponCodeUpdate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["MixType"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, _class.defaultProps = {
  couponCode: '',
  onCouponCodeUpdate: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__["noopFn"],
  mix: {},
  title: ''
}, _class), "Component/CartCoupon/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CartCouponContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartCoupon_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartCoupon.container */ "./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/CartCoupon.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CartCoupon_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.component.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.component.js ***!
  \****************************************************************************************/
/*! exports provided: CartItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CartItemPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CartItemPrice */ "./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CloseIcon */ "./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/Image */ "./node_modules/@scandipwa/scandipwa/src/component/Image/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/util/Validator/Config */ "./node_modules/@scandipwa/scandipwa/src/util/Validator/Config.js");
/* harmony import */ var _CartItem_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CartItem.style */ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.style.scss");
/* harmony import */ var _CartItem_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_CartItem_style__WEBPACK_IMPORTED_MODULE_13__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.component.js";

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
 * Cart and CartOverlay item
 * @class CartItem
 * #namespace Component/CartItem/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartItem = Mosaic.middleware((_class = class CartItem_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.renderProductOption = this._renderProductOption.bind(this);
  }

  renderProductConfigurations() {
    const {
      optionsLabels
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Options",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, optionsLabels.join(', '));
  }

  renderWrapperContent() {
    const {
      isEditing,
      isMobileLayout
    } = this.props;

    if (isMobileLayout) {
      return this.renderMobileContent();
    }

    return isEditing ? this.renderDesktopContent() : this.renderDesktopSummary();
  }

  renderDesktopSummary() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Wrapper",
      mods: {
        isSummary: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, this.renderImage(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "CartItemRows",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ProductInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, this.renderTitle(), this.renderProductPrice()), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ProductActions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, this.renderQuantity())));
  }

  renderTitle() {
    const {
      isMobileLayout
    } = this.props;
    const {
      item: {
        customizable_options,
        bundle_options,
        links
      } = {}
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Title",
      mods: {
        isMobileLayout
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, this.renderProductName(), this.renderOutOfStockMessage(), this.renderProductConfigurations(), this.renderProductOptions(customizable_options), this.renderProductBundleOptions(bundle_options), this.renderProductLinks(links));
  }

  renderMobileContent() {
    const {
      isMobileLayout,
      isProductInStock
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Wrapper",
      mods: {
        isMobileLayout,
        isProductOutOfStock: !isProductInStock
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, this.renderImage(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "CartItemRows",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ProductInfo",
      mods: {
        isMobileLayout
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, this.renderTitle(), this.renderDeleteButton()), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ProductActions",
      mods: {
        isMobileLayout
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, this.renderQuantityChangeField(), this.renderProductPrice())));
  }

  renderDesktopContent() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Wrapper",
      mods: {
        isCart: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ProductInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, this.renderImage(), this.renderTitle()), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ProductActions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, this.renderQuantityChangeField(), this.renderDeleteButton()), this.renderProductPrice());
  }

  renderContent() {
    const {
      linkTo = {},
      isProductInStock,
      isMobile
    } = this.props;

    if (!isProductInStock || Object.keys(linkTo).length === 0 || isMobile) {
      // If product is out of stock, or link is not set
      return /*#__PURE__*/_checkBEM(React, "span", {
        block: "CartItem",
        elem: "Link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 17
        }
      }, this.renderWrapperContent());
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
      to: linkTo,
      block: "CartItem",
      elem: "Link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, this.renderWrapperContent());
  }

  renderProductOptionLabel(option) {
    const {
      label,
      title,
      values = []
    } = option;

    if (Array.isArray(values) && values.length > 0) {
      return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }
      }, `${label}: `), /*#__PURE__*/_checkBEM(React, "span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }
      }, values.map(function (_ref) {
        let {
          label,
          value
        } = _ref;
        return label || value;
      }).join(', ')));
    }

    return label || title;
  }

  renderBundleProductOptionValue(value, index) {
    const {
      label,
      quantity,
      price,
      id
    } = value;
    const {
      currency_code: currencyCode
    } = this.props;
    const formattedPrice = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_11__["formatPrice"])(price, currencyCode);
    return /*#__PURE__*/_checkBEM(React, "div", {
      key: `${id}-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, `${quantity} x ${label} `, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }
    }, formattedPrice));
  }

  renderBundleProductOptionLabel(option) {
    const {
      label,
      values = []
    } = option;

    if (values.length === 0) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "BundleGroupTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, `${label}:`)), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "BundleGroupValues",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, values.map(this.renderBundleProductOptionValue.bind(this))));
  }

  renderProductBundleOption(option) {
    const {
      id
    } = option;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Option",
      mods: {
        isBundle: true
      },
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }
    }, this.renderBundleProductOptionLabel(option));
  }

  renderProductBundleOptions() {
    let itemOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!itemOptions.length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Options",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 13
      }
    }, itemOptions.map(this.renderProductBundleOption.bind(this)));
  }

  _renderProductOption(option) {
    const {
      id
    } = option;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Option",
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }
    }, this.renderProductOptionLabel(option));
  }

  renderProductOptions() {
    let itemOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!itemOptions.length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "Options",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 13
      }
    }, itemOptions.map(this.renderProductOption));
  }

  renderProductLinks() {
    let itemOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!itemOptions.length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ItemLinksWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      block: "CartItem",
      elem: "ItemLinks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 21
      }
    }, __('Links:'))), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "ItemOptionsWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }
    }, itemOptions.map(this.renderProductOption)));
  }

  renderProductName() {
    const {
      item: {
        product: {
          name
        }
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "CartItem",
      elem: "Heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 13
      }
    }, name);
  }

  renderProductPrice() {
    const {
      currency_code,
      item: {
        prices: {
          row_total: {
            value: row_total = 0
          } = {},
          row_total_including_tax: {
            value: row_total_incl_tax = 0
          } = {}
        } = {}
      },
      isCartOverlay,
      isMobileLayout
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CartItemPrice__WEBPACK_IMPORTED_MODULE_2__["default"], {
      row_total: Number(row_total || 0).toFixed(2),
      row_total_incl_tax: row_total_incl_tax,
      currency_code: currency_code,
      mix: {
        block: 'CartItem',
        elem: 'Price',
        mods: {
          isCartOverlay,
          isMobileLayout
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 13
      }
    });
  }

  renderOutOfStockMessage() {
    const {
      isProductInStock
    } = this.props;

    if (isProductInStock) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "CartItem",
      elem: "OutOfStock",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 13
      }
    }, __('Product is out of stock'));
  }

  quantityClickHandler(e) {
    e.preventDefault();
  }

  renderQuantityChangeField() {
    const {
      item: {
        sku,
        quantity,
        product: {
          stock_item: {
            qty_increments: qtyIncrement = 1
          } = {}
        } = {}
      } = {},
      minSaleQuantity,
      maxSaleQuantity,
      handleChangeQuantity,
      isProductInStock,
      isCartOverlay
    } = this.props;

    if (!isProductInStock) {
      return /*#__PURE__*/_checkBEM(React, "div", {
        block: "CartItem",
        elem: "QuantityWrapper",
        mods: {
          isPlaceholder: true
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 20
        }
      });
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      elem: "QuantityWrapper",
      mods: {
        isCartOverlay
      },
      onClick: this.quantityClickHandler,
      onKeyDown: this.quantityClickHandler,
      role: "button",
      tabIndex: "-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "item_qty",
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_5__["default"].numberWithControls,
      attr: {
        id: `${sku}_item_qty`,
        name: `${sku}_item_qty`,
        defaultValue: quantity,
        min: minSaleQuantity,
        max: maxSaleQuantity,
        step: qtyIncrement
      },
      value: quantity,
      events: {
        onChange: handleChangeQuantity
      },
      validationRule: {
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_12__["VALIDATION_INPUT_TYPE"].numeric,
        range: {
          min: minSaleQuantity,
          max: maxSaleQuantity
        }
      },
      validateOn: ['onChange'],
      mix: {
        block: 'CartItem',
        elem: 'Qty'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }
    }));
  }

  renderDeleteButton() {
    const {
      handleRemoveItem,
      isMobileLayout
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "CartItem",
      id: "RemoveItem",
      name: "RemoveItem",
      elem: "Delete",
      mods: {
        isMobileLayout
      },
      "aria-label": "Remove item from cart",
      onClick: handleRemoveItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CloseIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "span", {
      block: "CartItem",
      elem: "DeleteButtonText",
      mods: {
        isMobileLayout
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 17
      }
    }, __('Delete')));
  }

  renderImageElement() {
    const {
      item: {
        product: {
          name
        }
      },
      thumbnail,
      isProductInStock,
      isMobileLayout
    } = this.props;
    const isNotAvailable = !isProductInStock;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: thumbnail,
      mix: {
        block: 'CartItem',
        elem: 'Picture',
        mods: {
          isNotAvailable,
          isMobileLayout
        }
      },
      ratio: "custom",
      alt: `Product ${name} thumbnail.`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 13
      }
    }), /*#__PURE__*/_checkBEM(React, "img", {
      style: {
        display: 'none'
      },
      alt: name,
      src: thumbnail,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 17
      }
    }));
  }

  renderImage() {
    const {
      linkTo,
      isMobile
    } = this.props;

    if (isMobile) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        to: linkTo,
        block: "CartItem",
        elem: "Link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 17
        }
      }, this.renderImageElement());
    }

    return this.renderImageElement();
  }

  renderQuantity() {
    const {
      item: {
        quantity
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "CartItem",
      elem: "Quantity",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 13
      }
    }, __('Quantity: %s', quantity));
  }

  renderLoader() {
    const {
      showLoader,
      isLoading
    } = this.props;

    if (!showLoader) {
      return false;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 13
      }
    });
  }

  render() {
    const {
      isEditing,
      isCartOverlay
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartItem",
      mods: {
        isEditing,
        isCartOverlay
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 13
      }
    }, this.renderLoader(), this.renderContent());
  }

}, _class.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  item: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_9__["CartItemType"].isRequired,
  currency_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isEditing: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isCartOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  handleRemoveItem: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  minSaleQuantity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  maxSaleQuantity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  handleChangeQuantity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  linkTo: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_10__["LinkType"].isRequired,
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isProductInStock: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  optionsLabels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  isMobileLayout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showLoader: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  isCartOverlay: false,
  isMobileLayout: false,
  showLoader: true
}, _class), "Component/CartItem/Component");
/* harmony default export */ __webpack_exports__["default"] = (CartItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.container.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.container.js ***!
  \****************************************************************************************/
/*! exports provided: CartDispatcher, mapStateToProps, mapDispatchToProps, CartItemContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDispatcher", function() { return CartDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemContainer", function() { return CartItemContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Product_Product_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Product/Product.config */ "./node_modules/@scandipwa/scandipwa/src/component/Product/Product.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SwipeToDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/SwipeToDelete */ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product_Extract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Product/Extract */ "./node_modules/@scandipwa/scandipwa/src/util/Product/Extract.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Promise */ "./node_modules/@scandipwa/scandipwa/src/util/Promise/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _CartItem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CartItem.component */ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.container.js";

/* eslint-disable no-unreachable */

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











const CartDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ./src/store/Cart/Cart.dispatcher */ "./node_modules/@scandipwa/scandipwa/src/store/Cart/Cart.dispatcher.js"));
/** #namespace Component/CartItem/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile,
    cartId: state.CartReducer.id
  };
}, "Component/CartItem/Container/mapStateToProps");
/** #namespace Component/CartItem/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    addProduct: function (options) {
      return CartDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.addProductToCart(dispatch, options);
      });
    },
    changeItemQty: function (options) {
      return CartDispatcher.then(function (_ref2) {
        let {
          default: dispatcher
        } = _ref2;
        return dispatcher.changeItemQty(dispatch, options);
      });
    },
    removeProduct: function (options) {
      return CartDispatcher.then(function (_ref3) {
        let {
          default: dispatcher
        } = _ref3;
        return dispatcher.removeProductFromCart(dispatch, options);
      });
    },
    updateCrossSellProducts: function (items) {
      return CartDispatcher.then(function (_ref4) {
        let {
          default: dispatcher
        } = _ref4;
        return dispatcher.updateCrossSellProducts(items, dispatch);
      });
    },
    showNotification: function (type, title, error) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__["showNotification"])(type, title, error));
    }
  };
}, "Component/CartItem/Container/mapDispatchToProps");
/** #namespace Component/CartItem/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartItemContainer = Mosaic.middleware((_class = class CartItemContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isLoading: false
    };
    this.handlers = [];
    this.setStateNotLoading = this.setStateNotLoading.bind(this);
    this.renderRightSideContent = this.renderRightSideContent.bind(this);
    this.handleRemoveItemOnSwipe = this.handleRemoveItemOnSwipe.bind(this);
    this.containerFunctions = {
      handleChangeQuantity: this.handleChangeQuantity.bind(this),
      handleRemoveItem: this.handleRemoveItem.bind(this),
      getCurrentProduct: this.getCurrentProduct.bind(this),
      getProductVariant: this.getProductVariant.bind(this)
    };
  }

  componentDidMount() {
    this.setStateNotLoading();
  }

  componentWillUnmount() {
    this.notifyAboutLoadingStateChange(false);

    if (this.handlers.length) {
      [].forEach.call(this.handlers, function (cancelablePromise) {
        return cancelablePromise.cancel();
      });
    }
  }

  productIsInStock() {
    const {
      item: {
        product
      }
    } = this.props;
    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product_Extract__WEBPACK_IMPORTED_MODULE_8__["getProductInStock"])(product);
  }
  /**
   * @returns {Product}
   */


  getCurrentProduct() {
    const {
      item: {
        product
      }
    } = this.props;

    const variantIndex = this._getVariantIndex();

    return variantIndex < 0 ? product : product.variants[variantIndex];
  }

  setStateNotLoading() {
    this.notifyAboutLoadingStateChange(false);
    this.setState({
      isLoading: false
    });
  }

  containerProps() {
    const {
      item,
      currency_code,
      isEditing,
      isCartOverlay,
      isMobile,
      showLoader
    } = this.props;
    const {
      isLoading
    } = this.state;
    return {
      item,
      currency_code,
      isEditing,
      isCartOverlay,
      isMobile,
      isLoading,
      showLoader,
      linkTo: this._getProductLinkTo(),
      thumbnail: this._getProductThumbnail(),
      minSaleQuantity: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product_Extract__WEBPACK_IMPORTED_MODULE_8__["getMinQuantity"])(this.getCurrentProduct()),
      maxSaleQuantity: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product_Extract__WEBPACK_IMPORTED_MODULE_8__["getMaxQuantity"])(this.getCurrentProduct()),
      isProductInStock: this.productIsInStock(),
      optionsLabels: this.getConfigurableOptionsLabels(),
      isMobileLayout: this.getIsMobileLayout()
    };
  }
  /**
   * Handle item quantity change. Check that value is <1
   * @return {void}
   * @param quantity
   */


  handleChangeQuantity(quantity) {
    var _this = this;

    this.setState({
      isLoading: true
    }, function () {
      const {
        changeItemQty,
        item: {
          id,
          quantity: itemQuantity = 1
        },
        cartId
      } = _this.props;

      if (quantity === itemQuantity) {
        _this.setState({
          isLoading: false
        });

        return;
      }

      _this.hideLoaderAfterPromise(changeItemQty({
        uid: btoa(id),
        quantity,
        cartId
      }));
    });
    this.notifyAboutLoadingStateChange(true);
  }
  /**
   * @return {void}
   */


  handleRemoveItem(e) {
    this.handleRemoveItemOnSwipe(e);
    this.notifyAboutLoadingStateChange(true);
  }

  handleRemoveItemOnSwipe(e) {
    var _this2 = this;

    if (e) {
      e.preventDefault();
    }

    this.setState({
      isLoading: true
    }, function () {
      _this2.hideLoaderAfterPromise(_this2.removeProductAndUpdateCrossSell());
    });
  }

  getIsMobileLayout() {
    // "isMobileLayout" check is required to render mobile content in some additional cases
    // where screen width exceeds 810px (e.g. CartOverlay)
    const {
      isMobile,
      isCartOverlay
    } = this.props;
    return isMobile || isCartOverlay;
  }

  removeProductAndUpdateCrossSell() {
    var _this3 = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        removeProduct,
        updateCrossSellProducts,
        updateCrossSellsOnRemove,
        item: {
          id
        }
      } = _this3.props;
      const result = yield removeProduct(id);

      if (result && updateCrossSellsOnRemove) {
        yield updateCrossSellProducts(result.items);
      }

      return result;
    })();
  }
  /**
   * @param {Promise}
   * @returns {cancelablePromise}
   */


  registerCancelablePromise(promise) {
    const cancelablePromise = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Promise__WEBPACK_IMPORTED_MODULE_9__["makeCancelable"])(promise);
    this.handlers.push(cancelablePromise);
    return cancelablePromise;
  }
  /**
   * @param {Promise} promise
   * @returns {void}
   */


  hideLoaderAfterPromise(promise) {
    this.registerCancelablePromise(promise).promise.then(this.setStateNotLoading, this.setStateNotLoading);
  }

  getProductVariant() {
    const {
      item: {
        product: {
          variants = []
        }
      }
    } = this.props;
    return variants[this._getVariantIndex()];
  }
  /**
   * @returns {Int}
   */


  _getVariantIndex() {
    const {
      item: {
        sku: itemSku,
        product: {
          variants = []
        } = {}
      }
    } = this.props;
    return variants.findIndex(function (_ref5) {
      let {
        sku
      } = _ref5;
      return sku === itemSku || itemSku.includes(sku);
    });
  }
  /**
   * Get link to product page
   * @param url_key Url to product
   * @return {{pathname: String, state Object}} Pathname and product state
   */


  _getProductLinkTo() {
    const {
      item: {
        product,
        product: {
          type_id,
          configurable_options,
          parent,
          url
        } = {}
      } = {}
    } = this.props;

    if (type_id !== _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Product_Product_config__WEBPACK_IMPORTED_MODULE_4__["default"].configurable) {
      return {
        pathname: url,
        state: {
          product
        }
      };
    }

    const variant = this.getProductVariant();

    if (!variant) {
      return {};
    }

    const {
      attributes
    } = variant;
    const parameters = Object.entries(attributes).reduce(function (parameters, _ref6) {
      let [code, {
        attribute_value
      }] = _ref6;

      if (Object.keys(configurable_options).includes(code)) {
        return { ...parameters,
          [code]: attribute_value
        };
      }

      return parameters;
    }, {});
    const stateProduct = parent || product;
    return {
      pathname: url,
      state: {
        product: stateProduct
      },
      search: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_10__["objectToUri"])(parameters)
    };
  }

  _getProductThumbnail() {
    const product = this.getCurrentProduct();
    const {
      thumbnail: {
        url: thumbnail
      } = {}
    } = product;
    return thumbnail || '';
  }

  getConfigurableOptionsLabels() {
    const {
      item: {
        configurable_options = [],
        product: {
          variants
        } = {}
      } = {}
    } = this.props;

    if (!variants || !configurable_options) {
      return [];
    }

    return configurable_options.map(function (_ref7) {
      let {
        value_label
      } = _ref7;
      return value_label;
    });
  }

  notifyAboutLoadingStateChange(isLoading) {
    const {
      onCartItemLoading
    } = this.props;

    if (onCartItemLoading) {
      onCartItemLoading(isLoading);
    }
  }

  renderRightSideContent() {
    const {
      handleRemoveItem
    } = this.containerFunctions;
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "CartItem",
      elem: "SwipeToDeleteRightSide",
      onClick: handleRemoveItem,
      "aria-label": __('Remove'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 13
      }
    }, __('Delete'));
  }

  render() {
    const {
      isLoading
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_SwipeToDelete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      renderRightSideContent: this.renderRightSideContent,
      onAheadOfDragItemRemoveThreshold: this.handleRemoveItemOnSwipe,
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _CartItem_component__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 17
      }
    })));
  }

}, _class.propTypes = {
  item: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_7__["CartItemType"].isRequired,
  currency_code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  changeItemQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  removeProduct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  updateCrossSellProducts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  updateCrossSellsOnRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isCartOverlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isEditing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cartId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onCartItemLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}, _class.defaultProps = {
  updateCrossSellsOnRemove: false,
  isCartOverlay: false,
  isEditing: false,
  cartId: '',
  onCartItemLoading: null,
  showLoader: true
}, _class), "Component/CartItem/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(CartItemContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartItem/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartItem_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItem.container */ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/CartItem.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CartItem_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.component.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.component.js ***!
  \**************************************************************************************************/
/*! exports provided: CartItemPrice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemPrice", function() { return CartItemPrice; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.component.js";

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




/** #namespace Component/CartItemPrice/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartItemPrice = Mosaic.middleware((_class = class CartItemPrice_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderPrice() {
    const {
      price,
      currency_code
    } = this.props;
    const value = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__["roundPrice"])(price);
    return /*#__PURE__*/_checkBEM(React, "span", {
      "aria-label": __('Current product price'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "data", {
      value: value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(price, currency_code)));
  }

  renderSubPrice() {
    const {
      subPrice,
      currency_code
    } = this.props;

    if (!subPrice) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "span", {
      "aria-label": __('Current product price excl. tax'),
      block: "ProductPrice",
      elem: "SubPrice",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, __('Excl. tax: %s', Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(subPrice, currency_code)));
  }

  render() {
    const {
      mix
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "ProductPrice",
      "aria-label": __('Product Price'),
      mix: mix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, this.renderPrice(), this.renderSubPrice());
  }

}, _class.propTypes = {
  price: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  subPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  currency_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["MixType"].isRequired
}, _class.defaultProps = {
  subPrice: null
}, _class), "Component/CartItemPrice/Component");
/* harmony default export */ __webpack_exports__["default"] = (CartItemPrice);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.container.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.container.js ***!
  \**************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, CartItemPriceContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemPriceContainer", function() { return CartItemPriceContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Cart */ "./node_modules/@scandipwa/scandipwa/src/util/Cart/index.js");
/* harmony import */ var _CartItemPrice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CartItemPrice.component */ "./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.container.js";

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






/** #namespace Component/CartItemPrice/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    getCartItemPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_4__["getCartItemPrice"])(state),
    getCartItemSubPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_4__["getCartItemSubPrice"])(state)
  };
}, "Component/CartItemPrice/Container/mapStateToProps");
/** #namespace Component/CartItemPrice/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/CartItemPrice/Container/mapDispatchToProps");
/** #namespace Component/CartItemPrice/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartItemPriceContainer = Mosaic.middleware((_class = class CartItemPriceContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      getCartItemPrice,
      getCartItemSubPrice,
      currency_code,
      mix,
      ...rest
    } = this.props;
    return {
      currency_code,
      mix,
      price: getCartItemPrice(rest),
      subPrice: getCartItemSubPrice(rest)
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CartItemPrice_component__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  getCartItemPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getCartItemSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  currency_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["MixType"].isRequired
}, _class), "Component/CartItemPrice/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CartItemPriceContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartItemPrice_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItemPrice.container */ "./node_modules/@scandipwa/scandipwa/src/component/CartItemPrice/CartItemPrice.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CartItemPrice_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.component.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.component.js ***!
  \****************************************************************************************************************/
/*! exports provided: CartCoupon, CheckoutOrderSummary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCoupon", function() { return CartCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOrderSummary", function() { return CheckoutOrderSummary; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CartItem */ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutOrderSummaryPriceLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CheckoutOrderSummaryPriceLine */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummaryPriceLine/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/ExpandableContent */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Checkout.type */ "./node_modules/@scandipwa/scandipwa/src/type/Checkout.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/type/Config.type */ "./node_modules/@scandipwa/scandipwa/src/type/Config.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Cart */ "./node_modules/@scandipwa/scandipwa/src/util/Cart/index.js");
/* harmony import */ var _route_Checkout_Checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../route/Checkout/Checkout.component */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.component.js");
/* harmony import */ var _CheckoutOrderSummary_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CheckoutOrderSummary.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.style.scss");
/* harmony import */ var _CheckoutOrderSummary_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_CheckoutOrderSummary_style__WEBPACK_IMPORTED_MODULE_13__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.component.js";

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














const CartCoupon = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c = function () {
  return Promise.all(/*! import() | checkout-info */[__webpack_require__.e("main_style"), __webpack_require__.e("checkout_style"), __webpack_require__.e("cart_style"), __webpack_require__.e("checkout-info")]).then(__webpack_require__.bind(null, /*! ./src/component/CartCoupon */ "./node_modules/@scandipwa/scandipwa/src/component/CartCoupon/index.js"));
});
/**
 * Checkout Order Summary component
 * #namespace Component/CheckoutOrderSummary/Component
 */

_c2 = CartCoupon;

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutOrderSummary = Mosaic.middleware((_class = class CheckoutOrderSummary_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderPriceLine(price, title, mods) {
    const {
      totals: {
        prices: {
          quote_currency_code = null
        } = {}
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutOrderSummaryPriceLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
      price: price,
      currency: quote_currency_code,
      title: title,
      mods: mods,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    });
  }

  renderItem(item) {
    const {
      totals: {
        prices: {
          quote_currency_code = null
        } = {}
      }
    } = this.props;
    const {
      item_id
    } = item;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CartItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item_id,
      item: item,
      currency_code: quote_currency_code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    });
  }

  renderDiscount() {
    const {
      totals: {
        prices: {
          applied_rule_ids,
          coupon_code,
          discount
        } = {}
      }
    } = this.props;

    if (!applied_rule_ids) {
      return null;
    }

    const {
      amount: {
        value: discount_amount = 0
      } = {}
    } = discount || {};
    const label = coupon_code ? __('Coupon code discount') : __('Discount');
    const discountAmount = -Math.abs(discount_amount);
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutOrderSummaryPriceLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
      price: discountAmount,
      title: label,
      coupon_code: coupon_code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    });
  }

  renderMobileDiscount(coupon_code) {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "ExpandableContent",
      elem: "Heading",
      mix: {
        block: 'CheckoutOrderSummary',
        elem: 'ExpandableContentHeading'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, __('Have a discount code?')), /*#__PURE__*/_checkBEM(React, CartCoupon, {
      couponCode: coupon_code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }));
  }

  renderDiscountCode() {
    const {
      totals: {
        prices: {
          coupon_code = ''
        } = {},
        items = []
      },
      checkoutStep,
      isMobile
    } = this.props;

    if (!items || items.length < 1 || checkoutStep !== _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["BILLING_STEP"]) {
      return null;
    }

    if (isMobile) {
      return this.renderMobileDiscount(coupon_code);
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: __('Have a discount code?'),
      mix: {
        block: 'CheckoutOrderSummary',
        elem: 'Discount'
      },
      isArrow: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, CartCoupon, {
      couponCode: coupon_code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    }));
  }

  renderItems() {
    const {
      showItems,
      totals: {
        total_quantity,
        items = []
      }
    } = this.props;

    if (!showItems) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "ItemsInCart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_11__["getItemsCountLabel"])(total_quantity)), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "OrderItems",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "CartItemList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }
    }, items.map(this.renderItem.bind(this)))));
  }

  renderHeading() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "Header",
      mix: {
        block: 'CheckoutPage',
        elem: 'Heading',
        mods: {
          hasDivider: true
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, __('Summary')));
  }

  renderSubTotal() {
    var _cartSubtotal$toFixed, _cartSubtotalSubPrice;

    const {
      totals: {
        prices: {
          quote_currency_code = null
        } = {}
      },
      cartSubtotal,
      cartSubtotalSubPrice
    } = this.props;

    const title = __('Subtotal');

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutOrderSummaryPriceLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
      price: (_cartSubtotal$toFixed = cartSubtotal === null || cartSubtotal === void 0 ? void 0 : cartSubtotal.toFixed(2)) !== null && _cartSubtotal$toFixed !== void 0 ? _cartSubtotal$toFixed : 0,
      currency: quote_currency_code,
      title: title,
      subPrice: (_cartSubtotalSubPrice = cartSubtotalSubPrice === null || cartSubtotalSubPrice === void 0 ? void 0 : cartSubtotalSubPrice.toFixed(2)) !== null && _cartSubtotalSubPrice !== void 0 ? _cartSubtotalSubPrice : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }
    });
  }

  getShippingLabel() {
    const {
      checkoutStep
    } = this.props;

    if (checkoutStep === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["BILLING_STEP"]) {
      return __('Shipping');
    }

    return __('Estimated Shipping');
  }

  renderShipping() {
    const {
      totals: {
        prices: {
          quote_currency_code = null
        } = {}
      },
      cartShippingPrice,
      cartShippingSubPrice
    } = this.props;
    const title = this.getShippingLabel();
    const mods = {
      divider: true
    };

    if (!cartShippingSubPrice) {
      return this.renderPriceLine(cartShippingPrice, title, mods);
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutOrderSummaryPriceLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
      price: cartShippingPrice,
      currency: quote_currency_code,
      title: title,
      mods: mods,
      subPrice: cartShippingSubPrice,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 13
      }
    });
  }

  renderOrderTotal() {
    const {
      totals: {
        prices: {
          grand_total: {
            value: grand_total = 0
          } = {},
          quote_currency_code = null
        } = {}
      },
      cartTotalSubPrice
    } = this.props;

    const title = __('Order total');

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutOrderSummaryPriceLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
      price: Number(grand_total || 0).toFixed(2),
      currency: quote_currency_code,
      title: title,
      subPrice: Number(cartTotalSubPrice || 0).toFixed(2),
      mods: {
        isTotal: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 13
      }
    });
  }

  renderTaxFullSummary() {
    var _this = this;

    const {
      totals: {
        prices: {
          applied_taxes = []
        } = {}
      },
      cartDisplayConfig: {
        display_full_tax_summary
      } = {}
    } = this.props;

    if (!display_full_tax_summary || !applied_taxes.length) {
      return null;
    }

    return applied_taxes.map(function (_ref, i) {
      let {
        label,
        percent
      } = _ref;
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _checkBEM(React, "div", {
          block: "CheckoutOrderSummary",
          elem: "AppendedContent",
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 17
          }
        }, `${label} (${percent}%)`)
      );
    });
  }

  renderTax() {
    var _this2 = this;

    const {
      totals: {
        prices: {
          applied_taxes = [],
          quote_currency_code = null
        } = {},
        total_quantity
      },
      cartDisplayConfig: {
        display_full_tax_summary,
        display_zero_tax_subtotal
      } = {}
    } = this.props;
    return applied_taxes.map(function (_ref2) {
      let {
        amount: {
          value: tax_amount = 0
        } = {}
      } = _ref2;

      if (!quote_currency_code || !tax_amount && !display_zero_tax_subtotal) {
        return null;
      }

      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutOrderSummaryPriceLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
        price: tax_amount.toFixed(2) // since we display tax even if value is 0
        ,
        currency: quote_currency_code,
        itemsQty: total_quantity,
        title: __('Tax'),
        mods: {
          withAppendedContent: display_full_tax_summary
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 17
        }
      }, _this2.renderTaxFullSummary());
    });
  }

  renderTotals() {
    const {
      children,
      totals: {
        items = []
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "OrderTotals",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 17
      }
    }, this.renderSubTotal(), this.renderDiscount(), this.renderShipping(), this.renderTax(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "ButtonWrapper",
      mods: {
        isEmpty: items.length < 1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 21
      }
    }, this.renderOrderTotal(), children)));
  }

  renderCmsBlock() {
    const {
      checkoutStep
    } = this.props;
    const isBilling = checkoutStep === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["BILLING_STEP"];

    if (checkoutStep === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["DETAILS_STEP"]) {
      return null;
    }

    const {
      checkout_content: {
        [isBilling ? 'checkout_billing_cms' : 'checkout_shipping_cms']: promo
      } = {}
    } = window.contentConfiguration;

    if (!promo) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "CmsBlock",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _route_Checkout_Checkout_component__WEBPACK_IMPORTED_MODULE_12__["CmsBlock"], {
      identifier: promo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }
    }));
  }

  renderExpandableContent() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: __('Summary'),
      mix: {
        block: 'CheckoutOrderSummary',
        elem: 'ExpandableContent'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 13
      }
    }, this.renderItems(), this.renderTotals(), this.renderDiscountCode(), this.renderCmsBlock());
  }

  renderContent() {
    const {
      isExpandable
    } = this.props;

    if (isExpandable) {
      return this.renderExpandableContent();
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderHeading(), this.renderItems(), this.renderTotals());
  }

  render() {
    const {
      isLoading
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "article", {
      block: "CheckoutOrderSummary",
      "aria-label": "Order Summary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 17
      }
    }), this.renderContent());
  }

}, _class.propTypes = {
  totals: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__["TotalsType"],
  checkoutStep: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_7__["CheckoutStepType"],
  isExpandable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  cartDisplayConfig: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_9__["CartConfigType"].isRequired,
  cartShippingPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cartShippingSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cartSubtotal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cartSubtotalSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cartTotalSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  showItems: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_8__["ChildrenType"],
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class.defaultProps = {
  totals: {},
  isLoading: false,
  isExpandable: false,
  cartShippingPrice: 0,
  cartShippingSubPrice: null,
  cartTotalSubPrice: null,
  cartSubtotal: null,
  cartSubtotalSubPrice: null,
  showItems: true,
  children: [],
  checkoutStep: null
}, _class), "Component/CheckoutOrderSummary/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutOrderSummary);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CartCoupon$lazy");
__webpack_require__.$Refresh$.register(_c2, "CartCoupon");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.container.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.container.js ***!
  \****************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/util/Cart */ "./node_modules/@scandipwa/scandipwa/src/util/Cart/index.js");
/* harmony import */ var _CheckoutOrderSummary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutOrderSummary.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.component.js");
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



/** #namespace Component/CheckoutOrderSummary/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    cartDisplayConfig: state.ConfigReducer.cartDisplayConfig,
    cartSubtotal: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["getCartSubtotal"])(state),
    cartSubtotalSubPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["getCartSubtotalSubPrice"])(state),
    cartShippingPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["getCartShippingPrice"])(state),
    cartShippingSubPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["getCartShippingSubPrice"])(state),
    cartTotalSubPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["getCartTotalSubPrice"])(state),
    isLoading: state.CartReducer.isLoading,
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/CheckoutOrderSummary/Container/mapStateToProps");
/** #namespace Component/CheckoutOrderSummary/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/CheckoutOrderSummary/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_CheckoutOrderSummary_component__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutOrderSummary_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutOrderSummary.container */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummary/CheckoutOrderSummary.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutOrderSummary_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummaryPriceLine/CheckoutOrderSummaryPriceLine.component.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummaryPriceLine/CheckoutOrderSummaryPriceLine.component.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: CheckoutOrderSummaryPriceLine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutOrderSummaryPriceLine", function() { return CheckoutOrderSummaryPriceLine; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummaryPriceLine/CheckoutOrderSummaryPriceLine.component.js";

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




/** #namespace Component/CheckoutOrderSummaryPriceLine/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutOrderSummaryPriceLine = Mosaic.middleware((_class = class CheckoutOrderSummaryPriceLine_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderPrice() {
    const {
      price,
      currency
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(price, currency));
  }

  renderSubPrice() {
    const {
      subPrice,
      currency
    } = this.props;

    if (!subPrice) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, __('Excl. tax: %s', Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(subPrice, currency)));
  }

  renderTitle() {
    const {
      title
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "CheckoutOrderSummary",
      elem: "Text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, title, this.renderCoupon());
  }

  renderCoupon() {
    const {
      coupon_code
    } = this.props;

    if (!coupon_code) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, ` ${coupon_code.toUpperCase()}:`);
  }

  render() {
    const {
      price,
      mods,
      children,
      itemsQty
    } = this.props;

    if (!itemsQty && !price) {
      return null;
    }

    if (price === 0 && !itemsQty) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "li", {
      block: "CheckoutOrderSummary",
      elem: "SummaryItem",
      mods: mods,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, this.renderTitle(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutOrderSummary",
      elem: "Price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, this.renderPrice()), this.renderSubPrice()), children);
  }

}, _class.propTypes = {
  price: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]).isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  itemsQty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  coupon_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  mods: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ModsType"],
  subPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"]
}, _class.defaultProps = {
  itemsQty: 0,
  mods: {},
  subPrice: null,
  children: [],
  coupon_code: '',
  currency: 'USD'
}, _class), "Component/CheckoutOrderSummaryPriceLine/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutOrderSummaryPriceLine);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummaryPriceLine/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummaryPriceLine/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutOrderSummaryPriceLine_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutOrderSummaryPriceLine.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutOrderSummaryPriceLine/CheckoutOrderSummaryPriceLine.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutOrderSummaryPriceLine_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/CloseIcon.component.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/CloseIcon.component.js ***!
  \******************************************************************************************/
/*! exports provided: CloseIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CloseIcon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseIcon.style */ "./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/CloseIcon.style.scss");
/* harmony import */ var _CloseIcon_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CloseIcon_style__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CloseIcon/CloseIcon.component.js";

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


/** #namespace Component/CloseIcon/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CloseIcon = Mosaic.middleware(class CloseIcon_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  render() {
    return /*#__PURE__*/_checkBEM(React, "svg", {
      block: "CloseIcon",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "path", {
      d: "M16.192 6.34399L11.949 10.586L7.707 6.34399L6.293 7.75799L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }));
  }

}, "Component/CloseIcon/Component");
/* harmony default export */ __webpack_exports__["default"] = (CloseIcon);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CloseIcon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloseIcon.component */ "./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/CloseIcon.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CloseIcon_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.component.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.component.js ***!
  \****************************************************************************************/
/*! exports provided: CmsBlock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsBlock", function() { return CmsBlock; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Html */ "./node_modules/@scandipwa/scandipwa/src/component/Html/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _CmsBlock_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CmsBlock.style */ "./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.style.scss");
/* harmony import */ var _CmsBlock_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CmsBlock_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.component.js";

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
 * Cms Block
 * @class CmsBlock
 * #namespace Component/CmsBlock/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CmsBlock = Mosaic.middleware((_class = class CmsBlock_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderPlaceholder() {
    const {
      children
    } = this.props;

    if (children.length) {
      return children;
    }

    return null;
  }

  render() {
    const {
      cmsBlock: {
        identifier,
        content,
        disabled
      },
      blockType
    } = this.props;

    if (disabled) {
      return null;
    }

    if (identifier === undefined) {
      return this.renderPlaceholder();
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CmsBlock",
      elem: "Wrapper",
      mods: {
        type: blockType
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  cmsBlock: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    identifier: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
  }),
  blockType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["ChildrenType"]
}, _class.defaultProps = {
  cmsBlock: {},
  children: [],
  blockType: ''
}, _class), "Component/CmsBlock/Component");
/* harmony default export */ __webpack_exports__["default"] = (CmsBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.container.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.container.js ***!
  \****************************************************************************************/
/*! exports provided: CmsBlockContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsBlockContainer", function() { return CmsBlockContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_CmsBlock_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/query/CmsBlock.query */ "./node_modules/@scandipwa/scandipwa/src/query/CmsBlock.query.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_DataContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/util/Request/DataContainer */ "./node_modules/@scandipwa/scandipwa/src/util/Request/DataContainer.js");
/* harmony import */ var _CmsBlock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CmsBlock.component */ "./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.container.js";

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




/** #namespace Component/CmsBlock/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CmsBlockContainer = Mosaic.middleware((_class = class CmsBlockContainer_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_DataContainer__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor() {
    super(...arguments);
    this.state = {
      cmsBlock: {}
    };
  }

  __construct(props) {
    super.__construct(props, 'CmsBlockContainer');
  }

  containerProps() {
    const {
      blockType
    } = this.props;
    const {
      cmsBlock
    } = this.state;
    return {
      cmsBlock,
      blockType
    };
  }

  componentDidMount() {
    this._getCmsBlock();
  }

  componentDidUpdate(prevProps) {
    const {
      identifier
    } = this.props;
    const {
      identifier: prevIdentifier
    } = prevProps;

    if (identifier !== prevIdentifier) {
      this._getCmsBlock();
    }
  }

  _getCmsBlock() {
    var _this = this;

    const {
      identifier
    } = this.props;
    this.fetchData([_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_CmsBlock_query__WEBPACK_IMPORTED_MODULE_1__["default"].getQuery({
      identifiers: [identifier]
    })], function (_ref) {
      let {
        cmsBlocks: {
          items
        }
      } = _ref;

      if (!items.length) {
        return;
      }

      _this.setState({
        cmsBlock: items[0]
      });
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CmsBlock_component__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  identifier: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/CmsBlock/Container");
/* harmony default export */ __webpack_exports__["default"] = (CmsBlockContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CmsBlock_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CmsBlock.container */ "./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/CmsBlock.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CmsBlock_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.component.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: ExpandableContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableContent", function() { return ExpandableContent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_AddIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/AddIcon */ "./node_modules/@scandipwa/scandipwa/src/component/AddIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ChevronIcon */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/ChevronIcon/ChevronIcon.config */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MinusIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MinusIcon */ "./node_modules/@scandipwa/scandipwa/src/component/MinusIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/TextPlaceholder */ "./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Browser */ "./node_modules/@scandipwa/scandipwa/src/util/Browser/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _ExpandableContent_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ExpandableContent.style */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.style.scss");
/* harmony import */ var _ExpandableContent_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ExpandableContent_style__WEBPACK_IMPORTED_MODULE_11__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.component.js";

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












/** #namespace Component/ExpandableContent/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ExpandableContent = Mosaic.middleware((_class = class ExpandableContent_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.expandableContentRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  __construct(props) {
    super.__construct(props);

    const {
      isContentExpanded
    } = this.props;
    const isForceExpanded = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_9__["isSSR"])() || Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_9__["isCrawler"])();
    this.state = {
      isContentExpanded: isForceExpanded || isContentExpanded,
      // eslint-disable-next-line react/no-unused-state
      prevIsContentExpanded: isContentExpanded
    };
  }

  static getDerivedStateFromProps(_ref, _ref2) {
    let {
      isContentExpanded
    } = _ref;
    let {
      prevIsContentExpanded
    } = _ref2;

    if (isContentExpanded !== prevIsContentExpanded) {
      return {
        prevIsContentExpanded: isContentExpanded,
        isContentExpanded
      };
    }

    return null;
  }

  scrollToExpandedContent() {
    const {
      isContentExpanded
    } = this.state;
    const elem = this.expandableContentRef && this.expandableContentRef.current;

    if (isContentExpanded && !elem) {
      return;
    }

    const elemToWindowTopDist = elem.getBoundingClientRect().top;
    const windowToPageTopDist = document.body.getBoundingClientRect().top;
    const topToElemDistance = elemToWindowTopDist - windowToPageTopDist;
    const {
      total: totalFixedElementHeight,
      bottom: bottomFixedElementHeight
    } = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_10__["getFixedElementHeight"])();
    const elemMaxOffsetHeight = screen.height > elem.offsetHeight + bottomFixedElementHeight ? elem.offsetHeight : screen.height - totalFixedElementHeight;
    const scrollTo = topToElemDistance - (screen.height - bottomFixedElementHeight - elemMaxOffsetHeight); // checking if button is in a view-port

    if (-windowToPageTopDist >= scrollTo) {
      return;
    }

    window.scrollTo({
      behavior: 'smooth',
      top: scrollTo
    });
  }

  toggleExpand() {
    var _this = this;

    const {
      onClick
    } = this.props;

    if (onClick) {
      onClick();
      return;
    }

    this.setState(function (_ref3) {
      let {
        isContentExpanded
      } = _ref3;
      return {
        isContentExpanded: !isContentExpanded
      };
    }, function () {
      return _this.scrollToExpandedContent();
    });
  }

  renderButton() {
    const {
      isContentExpanded
    } = this.state;
    const {
      heading,
      mix
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      role: "button",
      tabIndex: 0,
      block: "ExpandableContent",
      elem: "Button",
      mods: {
        isContentExpanded
      },
      mix: { ...mix,
        elem: 'ExpandableContentButton'
      },
      onClick: this.toggleExpand,
      onKeyDown: this.toggleExpand,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "ExpandableContent",
      elem: "Heading",
      mix: { ...mix,
        elem: 'ExpandableContentHeading'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, typeof heading === 'string' ? /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: heading,
      length: "medium",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }) : heading), this.renderButtonIcon());
  }

  renderButtonIcon() {
    const {
      isContentExpanded
    } = this.state;
    const {
      isArrow,
      device: {
        isMobile
      }
    } = this.props;

    if (!isMobile) {
      return null;
    }

    if (isArrow) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        direction: isContentExpanded ? _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_4__["TOP"] : _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_4__["BOTTOM"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 20
        }
      });
    }

    return this.renderTogglePlusMinus();
  }

  renderTogglePlusMinus() {
    const {
      isContentExpanded
    } = this.state;

    if (isContentExpanded) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MinusIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 20
        }
      });
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_AddIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 16
      }
    });
  }

  renderContent() {
    const {
      children,
      mix
    } = this.props;
    const {
      isContentExpanded
    } = this.state;
    const mods = {
      isContentExpanded
    };
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ExpandableContent",
      elem: "Content",
      mods: mods,
      mix: { ...mix,
        elem: 'ExpandableContentContent',
        mods
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, children);
  }

  render() {
    const {
      mix,
      mods
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "article", {
      block: "ExpandableContent",
      mix: mix,
      mods: mods,
      ref: this.expandableContentRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, this.renderButton(), this.renderContent());
  }

}, _class.propTypes = {
  isContentExpanded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isArrow: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__["ChildrenType"],
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__["MixType"].isRequired,
  mods: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__["ModsType"],
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_8__["DeviceType"].isRequired,
  onClick: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === null) {
      return;
    }

    if (typeof propValue === 'function') {
      return;
    }

    throw new Error(`${componentName} only accepts null or string`);
  }
}, _class.defaultProps = {
  heading: '',
  isContentExpanded: false,
  onClick: null,
  children: [],
  isArrow: false,
  mods: {}
}, _class), "Component/ExpandableContent/Component");
/* harmony default export */ __webpack_exports__["default"] = (ExpandableContent);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.container.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.container.js ***!
  \**********************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ExpandableContent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandableContent.component */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.component.js");
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


/** #namespace Component/ExpandableContent/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    device: state.ConfigReducer.device
  };
}, "Component/ExpandableContent/Container/mapStateToProps");
/** #namespace Component/ExpandableContent/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/ExpandableContent/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ExpandableContent_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpandableContent_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableContent.container */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/ExpandableContent.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ExpandableContent_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Html/Html.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Html/Html.component.js ***!
  \********************************************************************************/
/*! exports provided: WidgetFactory, Html, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFactory", function() { return WidgetFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser/lib/attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
/* harmony import */ var html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser_lib_dom_to_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser/lib/dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js");
/* harmony import */ var html_react_parser_lib_dom_to_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser_lib_dom_to_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Image */ "./node_modules/@scandipwa/scandipwa/src/component/Image/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader_Loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/component/Loader/Loader.component */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/Loader.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_Hash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Request/Hash */ "./node_modules/@scandipwa/scandipwa/src/util/Request/Hash.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Html/Html.component.js";

/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */

/* eslint-disable react/jsx-no-useless-fragment */

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

/* eslint-disable consistent-return */
// Disabled due `domToReact` internal logic









const WidgetFactory = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(_c = function () {
  return Promise.all(/*! import() | widget */[__webpack_require__.e("main_style"), __webpack_require__.e("widget_style"), __webpack_require__.e("widget")]).then(__webpack_require__.bind(null, /*! ./src/component/WidgetFactory */ "./node_modules/@scandipwa/scandipwa/src/component/WidgetFactory/index.js"));
});
/**
 * Html content parser
 * Component converts HTML strings to React components
 * @class Html
 * #namespace Component/Html/Component
 */

_c2 = WidgetFactory;

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Html = Mosaic.middleware((_class = class Html_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]) {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.createdOutsideElements = {};
    this.rules = [{
      query: {
        name: ['widget']
      },
      replace: this.replaceWidget
    }, {
      query: {
        name: ['a']
      },
      replace: this.replaceLinks
    }, {
      query: {
        name: ['img']
      },
      replace: this.replaceImages
    }, {
      query: {
        name: ['input']
      },
      replace: this.replaceInput
    }, {
      query: {
        name: ['script']
      },
      replace: this.replaceScript
    }, {
      query: {
        name: ['style']
      },
      replace: this.replaceStyle
    }, {
      query: {
        name: ['table']
      },
      replace: this.wrapTable
    }];
    this.parserOptions = {
      replace: function (domNode) {
        const {
          data,
          name: domName,
          attribs: domAttrs
        } = domNode; // Let's remove empty text nodes

        if (data && !data.replace(/\u21b5/g, '').replace(/\s/g, '').length) {
          return /*#__PURE__*/_checkBEM(React, React.Fragment, null);
        }

        const rule = _this.rules.find(function (rule) {
          const {
            query: {
              name,
              attribs
            }
          } = rule;

          if (name && domName && name.indexOf(domName) !== -1) {
            return true;
          }

          if (attribs && domAttrs) {
            // eslint-disable-next-line fp/no-loops, fp/no-let
            for (let i = 0; i < attribs.length; i++) {
              const attrib = attribs[i];

              if (typeof attrib === 'object') {
                const queryAttrib = Object.keys(attrib)[0];

                if (Object.prototype.hasOwnProperty.call(domAttrs, queryAttrib)) {
                  return domAttrs[queryAttrib].match(Object.values(attrib)[0]);
                }
              } else if (Object.prototype.hasOwnProperty.call(domAttrs, attrib)) {
                return true;
              }
            }
          }

          return false;
        });

        if (rule) {
          const {
            replace
          } = rule;
          return replace.call(_this, domNode);
        }
      }
    };
  }

  attributesToProps(attribs) {
    const toCamelCase = function (string) {
      return string.replace(/_[a-z]/g, function (match) {
        return match.substr(1).toUpperCase();
      });
    };

    const convertPropertiesToValidFormat = function (properties) {
      return Object.entries(properties).reduce(function (validProps, _ref) {
        let [key, value] = _ref;

        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(value)) {
          return { ...validProps,
            [toCamelCase(key)]: +value
          };
        }

        return { ...validProps,
          [toCamelCase(key)]: value
        };
      }, {});
    };

    const properties = convertPropertiesToValidFormat(attribs);
    return html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1___default()(properties);
  }

  scrollToTopFunction() {
    document.documentElement.scrollIntoView();
  }
  /**
   * Replace links to native React Router links
   * @param  {{ attribs: Object, children: Array }}
   * @return {void|JSX} Return JSX if link is allowed to be replaced
   * @memberof Html
   */


  replaceLinks(_ref2) {
    let {
      attribs,
      children
    } = _ref2;
    const {
      href,
      ...attrs
    } = attribs;

    if (href) {
      const isAbsoluteUrl = function (value) {
        return new RegExp('^(?:[a-z]+:)?//', 'i').test(value);
      };

      const isSpecialLink = function (value) {
        return new RegExp('^(sms|tel|mailto):', 'i').test(value);
      };

      if (!isAbsoluteUrl(href) && !isSpecialLink(href)) {
        return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({
          onClick: this.scrollToTopFunction
        }, html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1___default()({ ...attrs,
          to: href
        }), {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }
        }), html_react_parser_lib_dom_to_react__WEBPACK_IMPORTED_MODULE_2___default()(children, this.parserOptions));
      }
    }
  }
  /**
   * Replace img to React Images
   * @param  {{ attribs: Object }}
   * @return {void|JSX} Return JSX with image
   * @memberof Html
   */


  replaceImages(_ref3) {
    let {
      attribs
    } = _ref3;
    const attributes = html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1___default()(attribs);

    if (attribs.src) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, attributes, {
        isPlain: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 20
        }
      }));
    }
  }
  /**
   * Replace input.
   * @param  {{ attribs: Object }}
   * @return {void|JSX} Return JSX with image
   * @memberof Html
   */


  replaceInput(_ref4) {
    let {
      attribs
    } = _ref4;
    return /*#__PURE__*/_checkBEM(React, "input", Object.assign({}, html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1___default()(attribs), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 16
      }
    }));
  }
  /**
   * Wrap table in container
   *
   * @param attribs
   * @param children
   * @returns {*}
   */


  wrapTable(_ref5) {
    let {
      attribs,
      children
    } = _ref5;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Table",
      elem: "Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "table", Object.assign({}, html_react_parser_lib_attributes_to_props__WEBPACK_IMPORTED_MODULE_1___default()(attribs), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }
    }), html_react_parser_lib_dom_to_react__WEBPACK_IMPORTED_MODULE_2___default()(children, this.parserOptions)));
  }
  /**
   * Insert corresponding widget
   *
   * @param {{ attribs: Object }} { attribs }
   * @returns {null|JSX} Return Widget
   * @memberof Html
   */


  replaceWidget(_ref6) {
    let {
      attribs
    } = _ref6;
    return /*#__PURE__*/_checkBEM(React, react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
      fallback: /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader_Loader_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isLoading: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 34
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, WidgetFactory, Object.assign({}, this.attributesToProps(attribs), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }
    })));
  }

  replaceStyle(elem) {
    const {
      children
    } = elem;
    const elemHash = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_Hash__WEBPACK_IMPORTED_MODULE_8__["hash"])(children[0].data);

    if (this.createdOutsideElements[elemHash]) {
      return /*#__PURE__*/_checkBEM(React, React.Fragment, null);
    }

    const style = document.createElement('style');

    if (children && children[0]) {
      style.appendChild(document.createTextNode(children[0].data));
    }

    document.head.appendChild(style);
    this.createdOutsideElements[elemHash] = true;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null);
  }

  replaceScript(elem) {
    const {
      attribs,
      children
    } = elem;
    const {
      src = ''
    } = attribs;
    const scriptContent = children[0] ? children[0].data : '';
    const elemHash = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_Hash__WEBPACK_IMPORTED_MODULE_8__["hash"])(src + scriptContent);

    if (this.createdOutsideElements[elemHash]) {
      return /*#__PURE__*/_checkBEM(React, React.Fragment, null);
    }

    const script = document.createElement('script');
    Object.entries(attribs).forEach(function (_ref7) {
      let [attr, value] = _ref7;
      return script.setAttribute(attr, value);
    });

    if (children && children[0]) {
      script.appendChild(document.createTextNode(children[0].data));
    }

    if (!Number.isNaN(Number(script))) {
      document.head.appendChild(script);
    }

    this.createdOutsideElements[elemHash] = true;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null);
  }

  render() {
    const {
      content
    } = this.props;
    return html_react_parser__WEBPACK_IMPORTED_MODULE_0___default()(content, this.parserOptions);
  }

}, _class.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
}, _class), "Component/Html/Component");
/* harmony default export */ __webpack_exports__["default"] = (Html);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "WidgetFactory$lazy");
__webpack_require__.$Refresh$.register(_c2, "WidgetFactory");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Html/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Html/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Html_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Html.component */ "./node_modules/@scandipwa/scandipwa/src/component/Html/Html.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Html_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.component.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Image/Image.component.js ***!
  \**********************************************************************************/
/*! exports provided: Image, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Image_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Image.config */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.config.js");
/* harmony import */ var _Image_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image.style */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.style.scss");
/* harmony import */ var _Image_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Image_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Image/Image.component.js";

/* eslint-disable react/no-did-update-set-state */

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
 * Image component
 * Images are loaded only when they appear in a viewport
 * @class Image
 * #namespace Component/Image/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Image = Mosaic.middleware((_class = class Image_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.image = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.state = {
      imageStatus: _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADING"]
    };
    this.renderMap = {
      [_Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_NOT_FOUND"]]: this.renderImageNotFound.bind(this),
      [_Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_NOT_SPECIFIED"]]: this.renderImageNotSpecified.bind(this),
      [_Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADING"]]: this.renderLoadedImage.bind(this),
      [_Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADED"]]: this.renderLoadedImage.bind(this)
    };
    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    this.onImageChange();
  }

  componentDidUpdate(prevProps) {
    const {
      src: prevSrc
    } = prevProps;
    const {
      src
    } = this.props;

    if (src !== prevSrc) {
      this.onImageChange();
    }
  }

  onImageChange() {
    const {
      src,
      isCached,
      onImageLoad
    } = this.props;

    if (!src) {
      return this.setState({
        imageStatus: _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_NOT_SPECIFIED"]
      });
    }

    if (isCached) {
      onImageLoad();
      return this.setState({
        imageStatus: _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADED"]
      });
    }

    return this.setState({
      imageStatus: _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADING"]
    });
  }

  onError() {
    this.setState({
      imageStatus: _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_NOT_FOUND"]
    });
  }

  onLoad() {
    const {
      onImageLoad
    } = this.props;
    onImageLoad();
    this.setState({
      imageStatus: _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADED"]
    });
  }

  renderImageNotFound() {
    if (navigator.onLine) {
      return /*#__PURE__*/_checkBEM(React, "span", {
        block: "Image",
        elem: "Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }, __('Image not found'));
    }

    return /*#__PURE__*/_checkBEM(React, "span", {
      block: "Image",
      elem: "Content",
      mods: {
        isOffline: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 16
      }
    });
  }

  renderStyledImage() {
    const {
      alt,
      src,
      style,
      title
    } = this.props;
    const {
      imageStatus
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, "img", {
      block: "Image",
      elem: "Image",
      src: src || '',
      alt: alt,
      mods: {
        isLoading: imageStatus === _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADING"]
      },
      style: style,
      title: title,
      onLoad: this.onLoad,
      onError: this.onError,
      loading: "lazy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    });
  }

  renderPlainImage() {
    const {
      alt,
      src,
      style,
      title,
      className
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "img", {
      block: className,
      src: src || '',
      alt: alt,
      style: style,
      title: title,
      onLoad: this.onLoad,
      onError: this.onError,
      loading: "lazy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    });
  }

  renderImageNotSpecified() {
    return /*#__PURE__*/_checkBEM(React, "span", {
      block: "Image",
      elem: "Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, __('Image not specified'));
  }

  renderLoadedImage() {
    const {
      isPlain
    } = this.props;

    if (isPlain) {
      return this.renderPlainImage();
    }

    return this.renderStyledImage();
  }

  renderImage() {
    const {
      isPlaceholder
    } = this.props;
    const {
      imageStatus
    } = this.state;

    if (isPlaceholder) {
      return null;
    }

    const render = this.renderMap[imageStatus];

    if (!render) {
      return null;
    }

    return render();
  }

  renderLoader() {
    const {
      showIsLoading
    } = this.props;
    const {
      imageStatus
    } = this.state;

    if (imageStatus !== _Image_config__WEBPACK_IMPORTED_MODULE_4__["IMAGE_LOADING"] || !showIsLoading) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Image",
      elem: "Loader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 13
      }
    });
  }

  render() {
    const {
      ratio,
      mix,
      isPlaceholder,
      wrapperSize,
      src,
      imageRef,
      className,
      isPlain
    } = this.props;
    const {
      imageStatus
    } = this.state; // render image as is: without additional container and additional styles

    if (isPlain) {
      return this.renderImage();
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Image",
      ref: imageRef,
      mods: {
        ratio,
        imageStatus: imageStatus.toLowerCase(),
        isPlaceholder,
        hasSrc: !!src
      },
      mix: mix,
      style: wrapperSize // eslint-disable-next-line react/forbid-dom-props
      ,
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 13
      }
    }, this.renderImage(), this.renderLoader());
  }

}, _class.propTypes = {
  isPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  src: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }),
  alt: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  ratio: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['4x3', '16x9', 'square', 'custom']),
  wrapperSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }),
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["MixType"],
  imageRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["RefType"],
  isPlain: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isCached: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onImageLoad: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  showIsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  src: '',
  alt: '',
  wrapperSize: {},
  style: {},
  title: null,
  isPlain: false,
  isPlaceholder: false,
  isCached: false,
  className: '',
  ratio: 'square',
  mix: {},
  showIsLoading: false,
  imageRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"],
  onImageLoad: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"]
}, _class), "Component/Image/Component");
/* harmony default export */ __webpack_exports__["default"] = (Image);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Image/Image.config.js ***!
  \*******************************************************************************/
/*! exports provided: IMAGE_LOADING, IMAGE_LOADED, IMAGE_NOT_FOUND, IMAGE_NOT_SPECIFIED, IMAGE_HUNDRED_PERCENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_LOADING", function() { return IMAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_LOADED", function() { return IMAGE_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_NOT_FOUND", function() { return IMAGE_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_NOT_SPECIFIED", function() { return IMAGE_NOT_SPECIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_HUNDRED_PERCENT", function() { return IMAGE_HUNDRED_PERCENT; });
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
const IMAGE_LOADING = 'IMAGE_LOADING';
const IMAGE_LOADED = 'IMAGE_LOADED';
const IMAGE_NOT_FOUND = 'IMAGE_NOT_FOUND';
const IMAGE_NOT_SPECIFIED = 'IMAGE_NOT_SPECIFIED';
const IMAGE_HUNDRED_PERCENT = '100%';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.container.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Image/Image.container.js ***!
  \**********************************************************************************/
/*! exports provided: ImageContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Image/Image.config */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image.component */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Image/Image.container.js";

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






/** #namespace Component/Image/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ImageContainer = Mosaic.middleware((_class = class ImageContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      isPlaceholder,
      src,
      title,
      alt,
      ratio,
      mix,
      imageRef,
      isPlain,
      showIsLoading,
      onImageLoad
    } = this.props;
    return {
      style: this._getStyle(),
      wrapperSize: this._getWrapperSize(),
      isPlaceholder,
      src,
      title,
      alt,
      className: this._getCorrectClassNames(),
      ratio,
      mix,
      imageRef,
      isPlain,
      showIsLoading,
      isCached: this._isCached(),
      onImageLoad
    };
  }

  _isCached() {
    const {
      showIsLoading,
      src
    } = this.props;

    if (!showIsLoading) {
      return false;
    }

    if (window.prefetchedImages && window.prefetchedImages[src] && window.prefetchedImages[src].complete) {
      return true;
    }

    const img = document.createElement('img');
    img.src = src;

    if (img.complete) {
      return true;
    }

    return false;
  }

  _parseSize(size) {
    const trimmedSize = size.trim();

    if (!trimmedSize) {
      return _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__["IMAGE_HUNDRED_PERCENT"];
    }

    const PX_LENGTH = -2;
    const PERCENT_LENGTH = -1;

    if (trimmedSize.slice(PX_LENGTH) === 'px' || trimmedSize.slice(PERCENT_LENGTH) === '%') {
      return trimmedSize;
    }

    return `${trimmedSize}px`;
  }

  _getCorrectClassNames() {
    const {
      width,
      height,
      className
    } = this.props;
    const trueMap = [this._parseSize(height) === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__["IMAGE_HUNDRED_PERCENT"], this._parseSize(width) === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__["IMAGE_HUNDRED_PERCENT"]];
    const classMap = ['Image-WidthFull', 'Image-HeightFull'];
    const classes = classMap.filter(function (_, index) {
      return trueMap[index];
    });
    return [className, ...classes].join(' ');
  }

  _getCorrectSize() {
    const {
      width,
      height
    } = this.props;

    const correctHeight = this._parseSize(height);

    const correctWidth = this._parseSize(width);

    if (correctHeight === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__["IMAGE_HUNDRED_PERCENT"] && correctWidth === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__["IMAGE_HUNDRED_PERCENT"]) {
      return {};
    }

    if (correctHeight === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__["IMAGE_HUNDRED_PERCENT"] && correctWidth) {
      return {
        width: correctWidth
      };
    }

    if (correctHeight && correctWidth === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_2__["IMAGE_HUNDRED_PERCENT"]) {
      return {
        height: correctHeight
      };
    }

    return {
      width: correctWidth,
      height: correctHeight
    };
  }

  _getStyle() {
    const {
      style
    } = this.props;
    return { ...this._getCorrectSize(),
      ...style
    };
  }

  _getWrapperSize() {
    const size = this._getCorrectSize();

    const {
      height,
      width
    } = size;

    if (!height || height.slice(-1) === '%' && (!width || width.slice(-1) === '%')) {
      return {};
    }

    return height.slice(-1) !== '%' ? {
      paddingBottom: height
    } : {
      paddingBottom: width
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Image_component__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  isPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  src: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool])),
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  ratio: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['4x3', '16x9', 'square', 'custom']),
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["MixType"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  imageRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["RefType"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  isPlain: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showIsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onImageLoad: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
}, _class.defaultProps = {
  src: '',
  alt: '',
  ratio: 'square',
  mix: {},
  height: '',
  width: '',
  isPlaceholder: false,
  style: {},
  title: null,
  className: '',
  imageRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__["noopFn"],
  isPlain: false,
  showIsLoading: false,
  onImageLoad: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__["noopFn"]
}, _class), "Component/Image/Container");
/* harmony default export */ __webpack_exports__["default"] = (ImageContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Image/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Image/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.container */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Image_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Link/Link.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Link/Link.component.js ***!
  \********************************************************************************/
/*! exports provided: Link, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var rebem_classname__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebem-classname */ "./node_modules/rebem-classname/build/index.js");
/* harmony import */ var rebem_classname__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebem_classname__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Link/Link.component.js";

/* eslint-disable react/forbid-elements */

/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */

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







/** #namespace Component/Link/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Link = Mosaic.middleware((_class = class Link_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  scrollToElement(e) {
    const {
      to: cssIdentifier,
      onClick
    } = this.props;
    const elem = document.querySelector(cssIdentifier !== '#' ? cssIdentifier : 'body');
    event.preventDefault();
    window.scrollTo({
      top: elem.offsetTop,
      behavior: 'smooth'
    });
    elem.focus();
    onClick(e);
  }

  renderRelativePathLink() {
    const {
      isOpenInNewTab,
      children,
      to,
      ...props
    } = this.props;

    if (isOpenInNewTab) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        _checkBEM(React, "a", Object.assign({}, props, {
          onClick: this.scrollToElement,
          href: to,
          rel: "noopener noreferrer",
          target: "_blank",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }
        }), children)
      );
    }

    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      _checkBEM(React, "a", Object.assign({}, props, {
        onClick: this.scrollToElement,
        href: to,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }), children)
    );
  }

  renderAbsolutePathLink(classNameConverted) {
    const {
      isOpenInNewTab,
      children,
      to,
      bemProps,
      ...props
    } = this.props;

    if (isOpenInNewTab) {
      return /*#__PURE__*/_checkBEM(React, "a", Object.assign({}, props, {
        href: to // eslint-disable-next-line react/forbid-dom-props
        ,
        className: classNameConverted,
        rel: "noopener noreferrer",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }), children);
    }

    return /*#__PURE__*/_checkBEM(React, "a", Object.assign({}, props, {
      href: to // eslint-disable-next-line react/forbid-dom-props
      ,
      className: classNameConverted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }), children);
  }

  render() {
    const {
      className,
      bemProps,
      children,
      to,
      isOpenInNewTab,
      ...props
    } = this.props;

    if (!to) {
      return /*#__PURE__*/_checkBEM(React, "div", Object.assign({}, props, bemProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }), children);
    }

    if (/^#/.test(to)) {
      return this.renderRelativePathLink();
    }

    const classNameConverted = `${className} ${Object(rebem_classname__WEBPACK_IMPORTED_MODULE_3__["stringify"])(bemProps)}`;

    if (/^https?:\/\//.test(to) || isOpenInNewTab) {
      return this.renderAbsolutePathLink(classNameConverted);
    }

    return /*#__PURE__*/_checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], Object.assign({}, props, {
      to: to // eslint-disable-next-line react/forbid-component-props
      ,
      className: classNameConverted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }), children);
  }

}, _class.propTypes = {
  to: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_5__["LinkType"].isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  bemProps: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["MixType"],
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["ChildrenType"].isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isOpenInNewTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  bemProps: {},
  className: '',
  onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_6__["noopFn"],
  isOpenInNewTab: false
}, _class), "Component/Link/Component");
/* harmony default export */ __webpack_exports__["default"] = (Link);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Link/Link.container.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Link/Link.container.js ***!
  \********************************************************************************/
/*! exports provided: NoMatchDispatcher, mapStateToProps, mapDispatchToProps, LinkContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMatchDispatcher", function() { return NoMatchDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkContainer", function() { return LinkContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _Link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Link.component */ "./node_modules/@scandipwa/scandipwa/src/component/Link/Link.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Link/Link.container.js";

/* eslint-disable react/prop-types */

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







const NoMatchDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ./src/store/NoMatch/NoMatch.dispatcher */ "./node_modules/@scandipwa/scandipwa/src/store/NoMatch/NoMatch.dispatcher.js"));
/** #namespace Component/Link/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    baseLinkUrl: state.ConfigReducer.base_link_url || ''
  };
}, "Component/Link/Container/mapStateToProps");
/** #namespace Component/Link/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    updateNoMatch: function (options) {
      return NoMatchDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.updateNoMatch(dispatch, options);
      });
    }
  };
}, "Component/Link/Container/mapDispatchToProps");
/** #namespace Component/Link/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const LinkContainer = Mosaic.middleware((_class = class LinkContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onClick: this.onClick.bind(this)
    };
  }

  containerProps() {
    const {
      block,
      elem,
      mods,
      mix,
      baseLinkUrl,
      // remove this prop
      dispatch,
      // remove this prop
      updateNoMatch,
      ...restProps
    } = this.props;
    return { ...restProps,
      to: this.getTo(),
      bemProps: {
        block,
        elem,
        mods,
        mix
      }
    };
  }

  getTo() {
    const {
      to: toProp
    } = this.props; // fix null, undefined and empty links

    const to = toProp || '/';

    if (typeof to === 'string') {
      // in case this URL is absolute, do not append store
      if (/^https?:\/\//.test(to)) {
        return to;
      }

      return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__["appendWithStoreCode"])(to);
    }

    const pathname = to.pathname || '/';
    return { ...to,
      pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__["appendWithStoreCode"])(pathname)
    };
  } // Resets no match state on redirect


  onClick(e) {
    const {
      updateNoMatch,
      onClick
    } = this.props;
    updateNoMatch(false);

    if (onClick) {
      onClick(e);
    }
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Link_component__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  baseLinkUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  updateNoMatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  to: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_3__["LinkType"].isRequired
}, _class.defaultProps = {
  onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__["noopFn"]
}, _class), "Component/Link/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(LinkContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Link/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link.container */ "./node_modules/@scandipwa/scandipwa/src/component/Link/Link.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Link_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.component.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.component.js ***!
  \**************************************************************************************************/
/*! exports provided: SwipeToDelete, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDelete", function() { return SwipeToDelete; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Draggable */ "./node_modules/@scandipwa/scandipwa/src/component/Draggable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS_CSS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/CSS/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/CSS.js");
/* harmony import */ var _SwipeToDelete_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwipeToDelete.style */ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.style.scss");
/* harmony import */ var _SwipeToDelete_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SwipeToDelete_style__WEBPACK_IMPORTED_MODULE_7__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.component.js";

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








/** #namespace Component/SwipeToDelete/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const SwipeToDelete = Mosaic.middleware((_class = class SwipeToDelete_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isRightSideOpen: false,
      isAheadRemoveItemThreshold: false
    };
    this.draggableRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    // Sets default style
    this.setTranslateXStyle(0);
    this.setRightSideContentWidth();
    this.setDraggableWidth();
    this.setDraggableRemoveThreshold();
  }

  setRightSideContentWidth() {
    const {
      dragRightOpenThreshold
    } = this.props;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_5__["default"].setVariable(this.draggableRef, 'right-side-content-width', `${dragRightOpenThreshold}px`);
  }

  setTranslateXStyle(translate) {
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_5__["default"].setVariable(this.draggableRef, 'translateX', `${translate}px`);
  }

  setDraggableWidth() {
    const {
      draggableRef
    } = this;
    const {
      width
    } = draggableRef.current.getBoundingClientRect();
    this.draggableWidth = width;
  }

  setDraggableRemoveThreshold() {
    const {
      draggableWidth
    } = this;
    const {
      dragRightOpenThreshold,
      dragItemRemoveThreshold
    } = this.props;
    this.draggableRemoveThreshold = draggableWidth * dragItemRemoveThreshold - dragRightOpenThreshold;
  }

  setAnimationSpeedStyle(specAnimationDuration) {
    const {
      animationDuration
    } = this.props;
    const duration = specAnimationDuration === undefined ? animationDuration : specAnimationDuration;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_5__["default"].setVariable(this.draggableRef, 'animation-speed', `${duration}ms`);
  }

  handleDragStart() {
    // Remove animation when drag starts
    this.setAnimationSpeedStyle(0);
  }

  handleDrag(_ref) {
    let {
      translateX: translate
    } = _ref;
    const {
      dragRightOpenThreshold
    } = this.props;
    const {
      isRightSideOpen,
      isAheadRemoveItemThreshold
    } = this.state;
    const {
      draggableRemoveThreshold
    } = this;
    const translateX = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS_CSS__WEBPACK_IMPORTED_MODULE_6__["isRtl"])() ? -translate : translate;
    const nextIsAheadRemoveItemThreshold = Math.abs(translateX) > draggableRemoveThreshold;

    if (isAheadRemoveItemThreshold !== nextIsAheadRemoveItemThreshold) {
      this.setState({
        isAheadRemoveItemThreshold: nextIsAheadRemoveItemThreshold
      });
    } // When dragging to left from current start point, going negative translateX


    if (translateX <= 0) {
      const translate = isRightSideOpen // Add (remove to have minus value) opened content width, to have full -translateX value
      ? translateX - dragRightOpenThreshold : translateX;
      this.setTranslateXStyle(translate);
      return;
    } // When dragging to right from current start point, going positive translateX


    if (translateX > 0) {
      // When translate goes out of screen
      if (!isRightSideOpen || isRightSideOpen && translateX - dragRightOpenThreshold > 0) {
        this.setTranslateXStyle(0);
        return;
      } // When content is opened and dragging to right side


      if (translateX - dragRightOpenThreshold < 0 && isRightSideOpen) {
        // Add (remove to have minus value) opened content width, to have full -translateX value
        this.setTranslateXStyle(translateX - dragRightOpenThreshold);
      }
    }
  }

  handleDragEnd(_ref2) {
    let {
      translateX: translate
    } = _ref2;
    const {
      dragRightOpenThreshold,
      dragRightOpenTriggerThreshold,
      onAheadOfDragItemRemoveThreshold,
      animationDurationOnRemove
    } = this.props;
    const {
      isAheadRemoveItemThreshold
    } = this.state;
    const {
      draggableWidth
    } = this;
    const translateX = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS_CSS__WEBPACK_IMPORTED_MODULE_6__["isRtl"])() ? -translate : translate;
    const shouldOpen = translateX <= -dragRightOpenTriggerThreshold;

    if (isAheadRemoveItemThreshold) {
      // swipe to the end
      this.setAnimationSpeedStyle(animationDurationOnRemove);
      this.setTranslateXStyle(-draggableWidth);
      onAheadOfDragItemRemoveThreshold();
      return;
    }

    this.setAnimationSpeedStyle();
    this.setState({
      isRightSideOpen: shouldOpen
    });

    if (!shouldOpen) {
      this.setTranslateXStyle(0);
      return;
    }

    this.setTranslateXStyle(-dragRightOpenThreshold);
  }

  renderRightSideContent() {
    const {
      renderRightSideContent
    } = this.props;
    const {
      isAheadRemoveItemThreshold
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "SwipeToDelete",
      elem: "RightSideContentWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "SwipeToDelete",
      elem: "RightSideContent",
      mods: {
        isAheadRemoveItemThreshold
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, renderRightSideContent()));
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  renderChildren() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "SwipeToDelete",
      role: "button",
      tabIndex: "0",
      onMouseDown: this.stopPropagation,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, children), this.renderRightSideContent());
  }

  render() {
    const {
      topElemMix,
      isLoading
    } = this.props;
    const {
      isAheadRemoveItemThreshold
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Draggable__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onDrag: this.handleDrag,
      draggableRef: this.draggableRef,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      mix: topElemMix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isLoading: isLoading && isAheadRemoveItemThreshold,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }
    }), this.renderChildren());
  }

}, _class.propTypes = {
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["ChildrenType"].isRequired,
  dragRightOpenTriggerThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  dragRightOpenThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  dragItemRemoveThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  animationDuration: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  animationDurationOnRemove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  renderRightSideContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  topElemMix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["MixType"].isRequired,
  onAheadOfDragItemRemoveThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/SwipeToDelete/Component");
/* harmony default export */ __webpack_exports__["default"] = (SwipeToDelete);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.config.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.config.js ***!
  \***********************************************************************************************/
/*! exports provided: DRAG_RIGHT_OPEN_THRESHOLD, DRAG_RIGHT_OPEN_TRIGGER_THRESHOLD, DRAG_ITEM_REMOVE_THRESHOLD, ANIMATION_DURATION, ANIMATION_DURATION_ON_REMOVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_RIGHT_OPEN_THRESHOLD", function() { return DRAG_RIGHT_OPEN_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_RIGHT_OPEN_TRIGGER_THRESHOLD", function() { return DRAG_RIGHT_OPEN_TRIGGER_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_ITEM_REMOVE_THRESHOLD", function() { return DRAG_ITEM_REMOVE_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function() { return ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION_ON_REMOVE", function() { return ANIMATION_DURATION_ON_REMOVE; });
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
// Width of opened right side
const DRAG_RIGHT_OPEN_THRESHOLD = 80; // Threshold after we open right side

const DRAG_RIGHT_OPEN_TRIGGER_THRESHOLD = DRAG_RIGHT_OPEN_THRESHOLD / 2; // Threshold after we remove item on touchend as percentage of item width

const DRAG_ITEM_REMOVE_THRESHOLD = 0.8;
const ANIMATION_DURATION = 300;
const ANIMATION_DURATION_ON_REMOVE = 180;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.container.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.container.js ***!
  \**************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, SwipeToDeleteContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDeleteContainer", function() { return SwipeToDeleteContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _SwipeToDelete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwipeToDelete.component */ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.component.js");
/* harmony import */ var _SwipeToDelete_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwipeToDelete.config */ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.container.js";

/* eslint-disable react/prop-types */

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







/** #namespace Component/SwipeToDelete/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/SwipeToDelete/Container/mapStateToProps");
/** #namespace Component/SwipeToDelete/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/SwipeToDelete/Container/mapDispatchToProps");
/** #namespace Component/SwipeToDelete/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const SwipeToDeleteContainer = Mosaic.middleware((_class = class SwipeToDeleteContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      animationDuration,
      animationDurationOnRemove,
      children,
      dragItemRemoveThreshold,
      dragRightOpenThreshold,
      dragRightOpenTriggerThreshold,
      isLoading,
      onAheadOfDragItemRemoveThreshold,
      renderRightSideConte,
      renderRightSideContent
    } = this.props;
    return {
      animationDuration,
      animationDurationOnRemove,
      children,
      dragItemRemoveThreshold,
      dragRightOpenThreshold,
      dragRightOpenTriggerThreshold,
      isLoading,
      onAheadOfDragItemRemoveThreshold,
      renderRightSideConte,
      renderRightSideContent
    };
  }

  render() {
    const {
      isMobile,
      children
    } = this.props;

    if (!isMobile) {
      return children;
    }

    return /*#__PURE__*/_checkBEM(React, _SwipeToDelete_component__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["ChildrenType"].isRequired,
  dragRightOpenTriggerThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  dragRightOpenThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  dragItemRemoveThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  animationDuration: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  animationDurationOnRemove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  renderRightSideContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  topElemMix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["MixType"],
  onAheadOfDragItemRemoveThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  // Threshold after we open right side
  dragRightOpenTriggerThreshold: _SwipeToDelete_config__WEBPACK_IMPORTED_MODULE_6__["DRAG_RIGHT_OPEN_TRIGGER_THRESHOLD"],
  // Width of opened right side
  dragRightOpenThreshold: _SwipeToDelete_config__WEBPACK_IMPORTED_MODULE_6__["DRAG_RIGHT_OPEN_THRESHOLD"],
  // Threshold after we remove item on touchend as percentage of item width
  dragItemRemoveThreshold: _SwipeToDelete_config__WEBPACK_IMPORTED_MODULE_6__["DRAG_ITEM_REMOVE_THRESHOLD"],
  animationDuration: _SwipeToDelete_config__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_DURATION"],
  animationDurationOnRemove: _SwipeToDelete_config__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_DURATION_ON_REMOVE"],
  renderRightSideContent: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__["noopFn"],
  topElemMix: {},
  onAheadOfDragItemRemoveThreshold: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_4__["noopFn"],
  isLoading: false
}, _class), "Component/SwipeToDelete/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(SwipeToDeleteContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwipeToDelete_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwipeToDelete.container */ "./node_modules/@scandipwa/scandipwa/src/component/SwipeToDelete/SwipeToDelete.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SwipeToDelete_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/TextPlaceholder.component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/TextPlaceholder.component.js ***!
  \******************************************************************************************************/
/*! exports provided: TextPlaceholder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPlaceholder", function() { return TextPlaceholder; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _TextPlaceholder_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextPlaceholder.style */ "./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/TextPlaceholder.style.scss");
/* harmony import */ var _TextPlaceholder_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextPlaceholder_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/TextPlaceholder.component.js";

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
 * Text placeholder
 * @class TextPlaceholder
 * #namespace Component/TextPlaceholder/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const TextPlaceholder = Mosaic.middleware((_class = class TextPlaceholder_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      content,
      length,
      mix
    } = this.props;

    if (content) {
      return content;
    }

    return /*#__PURE__*/_checkBEM(React, "span", {
      mix: mix,
      block: "TextPlaceholder",
      mods: {
        length
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 16
      }
    });
  }

}, _class.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  length: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['block', 'short', 'medium', 'long', 'paragraph', 'custom']),
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["MixType"]
}, _class.defaultProps = {
  content: '',
  length: 'short',
  mix: {}
}, _class), "Component/TextPlaceholder/Component");
/* harmony default export */ __webpack_exports__["default"] = (TextPlaceholder);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextPlaceholder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextPlaceholder.component */ "./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/TextPlaceholder.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextPlaceholder_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/query/CmsBlock.query.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/query/CmsBlock.query.js ***!
  \***********************************************************************/
/*! exports provided: CmsBlockQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsBlockQuery", function() { return CmsBlockQuery; });
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
 * CMS Blocks Query
 * @class CmsBlocksQuery
 * #namespace Query/CmsBlock/Query */

const CmsBlockQuery = Mosaic.middleware(class CmsBlockQuery_ extends Mosaic.Extensible() {
  /**
   * get CMS Block query
   * @param  {{identifier: String, title: String, content: String}} options A object containing different aspects of query, each item can be omitted
   * @return {Field} CMS Block query
   * @memberof CmsBlocksQuery
   */
  getQuery(_ref) {
    let {
      identifiers
    } = _ref;

    if (!identifiers) {
      throw new Error('Missing argument `options`');
    }

    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('cmsBlocks').addArgument('identifiers', '[String]', identifiers).addField(this._getItemsField()).setAlias('cmsBlocks');
  }

  _getItemFields() {
    return ['title', 'content', 'identifier', 'disabled'];
  }

  _getItemsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getItemFields());
  }

}, "Query/CmsBlock/Query");
/* harmony default export */ __webpack_exports__["default"] = (new CmsBlockQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/type/Config.type.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/type/Config.type.js ***!
  \*******************************************************************/
/*! exports provided: RegionType, CountriesType, CartConfigType, StoreItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionType", function() { return RegionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesType", function() { return CountriesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartConfigType", function() { return CartConfigType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreItemType", function() { return StoreItemType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/util/Cart */ "./node_modules/@scandipwa/scandipwa/src/util/Cart/index.js");
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


const RegionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const CountriesType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  available_regions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(RegionType)
}));
const CartConfigType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  display_tax_in_price: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object.values(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["DISPLAY_CART_TAX_IN_PRICE"])),
  display_tax_in_subtotal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object.values(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["DISPLAY_CART_TAX_IN_SUBTOTAL"])),
  display_tax_in_shipping_amount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object.values(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_1__["DISPLAY_CART_TAX_IN_SHIPPING"])),
  include_tax_in_order_total: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  display_full_tax_summary: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  display_zero_tax_subtotal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});
const StoreItemType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  storeUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  storeLinkUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

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

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * SVG elements are case-sensitive.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
 */
var CASE_SENSITIVE_TAG_NAMES = [
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussainBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'linearGradient',
  'radialGradient',
  'textPath'
];

module.exports = {
  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES
};


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/domparser.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/domparser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/utilities.js");

// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
var HEAD_TAG_REGEX = /<head.*>/i;
var BODY_TAG_REGEX = /<body.*>/i;
// http://www.w3.org/TR/html/syntax.html#void-elements
var VOID_ELEMENTS_REGEX = /<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi;

// detect IE browser
var isIE9 = utilities.isIE(9);
var isIE = isIE9 || utilities.isIE();

// falls back to `parseFromString` if `createHTMLDocument` cannot be used
var parseFromDocument = function () {
  throw new Error(
    'This browser does not support `document.implementation.createHTMLDocument`'
  );
};

var parseFromString = function () {
  throw new Error(
    'This browser does not support `DOMParser.prototype.parseFromString`'
  );
};

/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof window.DOMParser === 'function') {
  var domParser = new window.DOMParser();

  // IE9 does not support 'text/html' MIME type
  // https://msdn.microsoft.com/en-us/library/ff975278(v=vs.85).aspx
  var mimeType = isIE9 ? 'text/xml' : 'text/html';

  /**
   * Creates an HTML document using `DOMParser.parseFromString`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromString = function (html, tagName) {
    if (tagName) {
      html = '<' + tagName + '>' + html + '</' + tagName + '>';
    }

    // because IE9 only supports MIME type 'text/xml', void elements need to be self-closed
    if (isIE9) {
      html = html.replace(VOID_ELEMENTS_REGEX, '<$1$2$3/>');
    }

    return domParser.parseFromString(html, mimeType);
  };

  parseFromDocument = parseFromString;
}

/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (document.implementation) {
  // title parameter is required in IE
  // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
  var doc = document.implementation.createHTMLDocument(
    isIE ? 'html-dom-parser' : undefined
  );

  /**
   * Use HTML document created by `document.implementation.createHTMLDocument`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromDocument = function (html, tagName) {
    if (tagName) {
      doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
      return doc;
    }

    try {
      doc.documentElement.innerHTML = html;
      return doc;
      // fallback when certain elements in `documentElement` are read-only (IE9)
    } catch (err) {
      if (parseFromString) {
        return parseFromString(html);
      }
    }
  };
}

/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = document.createElement('template');
var parseFromTemplate;

if (template.content) {
  /**
   * Uses a template element (content fragment) to parse HTML.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList}
   */
  parseFromTemplate = function (html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {string} html - The HTML string.
 * @return {NodeList|Array}
 */
function domparser(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }

  var doc;
  var element;
  var elements;

  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);

      // the created document may come with filler head/body elements,
      // so make sure to remove them if they don't actually exist
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(HEAD)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(BODY)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      return doc.getElementsByTagName(HTML);

    case HEAD:
    case BODY:
      elements = parseFromDocument(html).getElementsByTagName(firstTagName);

      // if there's a sibling element, then return both elements
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;

    // low-level tag or text
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }

      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
        .childNodes;
  }
}

module.exports = domparser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/html-to-dom-client.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/html-to-dom-client.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var domparser = __webpack_require__(/*! ./domparser */ "./node_modules/html-dom-parser/lib/domparser.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/utilities.js");

var formatDOM = utilities.formatDOM;
var isIE9 = utilities.isIE(9);

var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML and reformats DOM nodes output.
 *
 * @param  {String} html - The HTML string.
 * @return {Array}       - The formatted DOM nodes.
 */
function parseDOM(html) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!html) {
    return [];
  }

  // match directive
  var match = html.match(DIRECTIVE_REGEX);
  var directive;

  if (match && match[1]) {
    directive = match[1];

    // remove directive in IE9 because DOMParser uses
    // MIME type 'text/xml' instead of 'text/html'
    if (isIE9) {
      html = html.replace(match[0], '');
    }
  }

  return formatDOM(domparser(html), null, directive);
}

module.exports = parseDOM;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/utilities.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/utilities.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CASE_SENSITIVE_TAG_NAMES = __webpack_require__(/*! ./constants */ "./node_modules/html-dom-parser/lib/constants.js").CASE_SENSITIVE_TAG_NAMES;

var caseSensitiveTagNamesMap = {};
var tagName;
for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}

/**
 * Gets case-sensitive tag name.
 *
 * @param  {String}           tagName - The lowercase tag name.
 * @return {String|undefined}
 */
function getCaseSensitiveTagName(tagName) {
  return caseSensitiveTagNamesMap[tagName];
}

/**
 * Formats DOM attributes to a hash map.
 *
 * @param  {NamedNodeMap} attributes - The list of attributes.
 * @return {Object}                  - A map of attribute name to value.
 */
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  // `NamedNodeMap` is array-like
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
}

/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param  {String} tagName - The lowercase tag name.
 * @return {String}         - The formatted tag name.
 */
function formatTagName(tagName) {
  tagName = tagName.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName;
}

/**
 * Formats the browser DOM nodes to mimic the output of `htmlparser2.parseDOM()`.
 *
 * @param  {NodeList} nodes        - The DOM nodes.
 * @param  {Object}   [parentObj]  - The formatted parent node.
 * @param  {String}   [directive]  - The directive.
 * @return {Object[]}              - The formatted DOM object.
 */
function formatDOM(nodes, parentObj, directive) {
  parentObj = parentObj || null;

  var result = [];
  var node;
  var prevNode;
  var nodeObj;

  // `NodeList` is array-like
  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];
    // reset
    nodeObj = {
      next: null,
      prev: result[i - 1] || null,
      parent: parentObj
    };

    // set the next node for the previous node (if applicable)
    prevNode = result[i - 1];
    if (prevNode) {
      prevNode.next = nodeObj;
    }

    // set the node name if it's not "#text" or "#comment"
    // e.g., "div"
    if (node.nodeName[0] !== '#') {
      nodeObj.name = formatTagName(node.nodeName);
      // also, nodes of type "tag" have "attribs"
      nodeObj.attribs = {}; // default
      if (node.attributes && node.attributes.length) {
        nodeObj.attribs = formatAttributes(node.attributes);
      }
    }

    // set the node type
    // e.g., "tag"
    switch (node.nodeType) {
      // 1 = element
      case 1:
        if (nodeObj.name === 'script' || nodeObj.name === 'style') {
          nodeObj.type = nodeObj.name;
        } else {
          nodeObj.type = 'tag';
        }
        // recursively format the children
        nodeObj.children = formatDOM(node.childNodes, nodeObj);
        break;
      // 2 = attribute
      // 3 = text
      case 3:
        nodeObj.type = 'text';
        nodeObj.data = node.nodeValue;
        break;
      // 8 = comment
      case 8:
        nodeObj.type = 'comment';
        nodeObj.data = node.nodeValue;
        break;
    }

    result.push(nodeObj);
  }

  if (directive) {
    result.unshift({
      name: directive.substring(0, directive.indexOf(' ')).toLowerCase(),
      data: directive,
      type: 'directive',
      next: result[0] ? result[0] : null,
      prev: null,
      parent: parentObj
    });

    if (result[1]) {
      result[1].prev = result[0];
    }
  }

  return result;
}

/**
 * Detects IE with or without version.
 *
 * @param  {Number}  [version] - The IE version to detect.
 * @return {Boolean}           - Whether IE or the version has been detected.
 */
function isIE(version) {
  if (version) {
    return document.documentMode === version;
  }
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

module.exports = {
  formatAttributes: formatAttributes,
  formatDOM: formatDOM,
  isIE: isIE
};


/***/ }),

/***/ "./node_modules/html-react-parser/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-react-parser/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var domToReact = __webpack_require__(/*! ./lib/dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js");
var htmlToDOM = __webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/html-to-dom-client.js");

// decode HTML entities by default for `htmlparser2`
var domParserOptions = { decodeEntities: true, lowerCaseAttributeNames: false };

/**
 * Converts HTML string to React elements.
 *
 * @param  {String}   html                    - HTML string.
 * @param  {Object}   [options]               - Parser options.
 * @param  {Object}   [options.htmlparser2]   - htmlparser2 options.
 * @param  {Object}   [options.library]       - Library for React, Preact, etc.
 * @param  {Function} [options.replace]       - Replace method.
 * @return {JSX.Element|JSX.Element[]|String} - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (html === '') {
    return [];
  }
  options = options || {};
  return domToReact(
    htmlToDOM(html, options.htmlparser2 || domParserOptions),
    options
  );
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;

// support CommonJS and ES Modules
module.exports = HTMLReactParser;
module.exports.default = HTMLReactParser;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/attributes-to-props.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var reactProperty = __webpack_require__(/*! react-property */ "./node_modules/react-property/index.js");
var styleToObject = __webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

var camelCase = utilities.camelCase;

var htmlProperties = reactProperty.html;
var svgProperties = reactProperty.svg;
var isCustomAttribute = reactProperty.isCustomAttribute;

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param  {Object} [attributes={}] - The HTML/SVG DOM attributes.
 * @return {Object}                 - The React props.
 */
function attributesToProps(attributes) {
  attributes = attributes || {};

  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var property;
  var props = {};

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];

    // ARIA (aria-*) or custom data (data-*) attribute
    if (isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }

    // convert HTML attribute to React prop
    attributeNameLowerCased = attributeName.toLowerCase();
    if (hasOwnProperty.call(htmlProperties, attributeNameLowerCased)) {
      property = htmlProperties[attributeNameLowerCased];
      props[property.propertyName] =
        property.hasBooleanValue ||
        (property.hasOverloadedBooleanValue && !attributeValue)
          ? true
          : attributeValue;
      continue;
    }

    // convert SVG attribute to React prop
    if (hasOwnProperty.call(svgProperties, attributeName)) {
      property = svgProperties[attributeName];
      props[property.propertyName] = attributeValue;
      continue;
    }

    // preserve custom attribute if React >=16
    if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }

  // convert inline style to object
  if (attributes.style != null) {
    props.style = cssToJs(attributes.style);
  }

  return props;
}

/**
 * Converts inline CSS style to POJO (Plain Old JavaScript Object).
 *
 * @param  {String} style - The inline CSS style.
 * @return {Object}       - The style object.
 */
function cssToJs(style) {
  var styleObject = {};

  if (style) {
    styleToObject(style, function (property, value) {
      // skip CSS comment
      if (property && value) {
        styleObject[camelCase(property)] = value;
      }
    });
  }

  return styleObject;
}

module.exports = attributesToProps;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
/*!************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/dom-to-react.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var attributesToProps = __webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

/**
 * Converts DOM nodes to React elements.
 *
 * @param {DomElement[]} nodes - The DOM nodes.
 * @param {Object} [options={}] - The additional options.
 * @param {Function} [options.replace] - The replacer.
 * @param {Object} [options.library] - The library (React, Preact, etc.).
 * @return {String|ReactElement|ReactElement[]}
 */
function domToReact(nodes, options) {
  options = options || {};

  var React = options.library || __webpack_require__(/*! react */ "./node_modules/react/index.js");
  var cloneElement = React.cloneElement;
  var createElement = React.createElement;
  var isValidElement = React.isValidElement;

  var result = [];
  var node;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var data;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];

    // replace with custom React element (if present)
    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }
        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      // if trim option is enabled, skip whitespace text nodes
      if (trim) {
        data = node.data.trim();
        if (data) {
          result.push(node.data);
        }
      } else {
        result.push(node.data);
      }
      continue;
    }

    props = node.attribs;
    if (!shouldPassAttributesUnaltered(node)) {
      props = attributesToProps(node.attribs);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }
        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact(node.children, options);
        }
        break;

      // skip all other cases (e.g., comment)
      default:
        continue;
    }

    // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys
    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

/**
 * Determines whether attributes should be altered or not.
 *
 * @param {React.ReactElement} node
 * @return {Boolean}
 */
function shouldPassAttributesUnaltered(node) {
  return (
    utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
    node.type === 'tag' &&
    utilities.isCustomComponent(node.name, node.attribs)
  );
}

module.exports = domToReact;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-react-parser/lib/utilities.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var hyphenPatternRegex = /-([a-z])/g;
var CUSTOM_PROPERTY_OR_NO_HYPHEN_REGEX = /^--[a-zA-Z0-9-]+$|^[^-]+$/;

/**
 * Converts a string to camelCase.
 *
 * @param  {String} string - The string.
 * @return {String}
 */
function camelCase(string) {
  if (typeof string !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  // custom property or no hyphen found
  if (CUSTOM_PROPERTY_OR_NO_HYPHEN_REGEX.test(string)) {
    return string;
  }

  // convert to camelCase
  return string
    .toLowerCase()
    .replace(hyphenPatternRegex, function (_, character) {
      return character.toUpperCase();
    });
}

/**
 * Swap key with value in an object.
 *
 * @param  {Object}   obj        - The object.
 * @param  {Function} [override] - The override method.
 * @return {Object}              - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {Object} props   - The props being passed to the element.
 * @return {boolean}
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

/**
 * @constant {Boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  camelCase: camelCase,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent
};


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./node_modules/react-property/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-property/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var HTMLDOMPropertyConfig = __webpack_require__(/*! ./lib/HTMLDOMPropertyConfig */ "./node_modules/react-property/lib/HTMLDOMPropertyConfig.js");
var SVGDOMPropertyConfig = __webpack_require__(/*! ./lib/SVGDOMPropertyConfig */ "./node_modules/react-property/lib/SVGDOMPropertyConfig.js");
var injection = __webpack_require__(/*! ./lib/injection */ "./node_modules/react-property/lib/injection.js");

var MUST_USE_PROPERTY = injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = injection.HAS_OVERLOADED_BOOLEAN_VALUE;

/**
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L14-L16
 *
 * @param  {Number}  value
 * @param  {Number}  bitmask
 * @return {Boolean}
 */
function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

/**
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L57
 *
 * @param {Object}  domPropertyConfig - HTMLDOMPropertyConfig or SVGDOMPropertyConfig
 * @param {Object}  config            - The object to be mutated
 * @param {Boolean} isSVG             - Whether the injected config is HTML or SVG (it assumes the default is HTML)
 */
function injectDOMPropertyConfig(domPropertyConfig, config, isSVG) {
  var Properties = domPropertyConfig.Properties;
  var DOMAttributeNames = domPropertyConfig.DOMAttributeNames;
  var attributeName;
  var propertyName;
  var propConfig;

  for (propertyName in Properties) {
    attributeName =
      DOMAttributeNames[propertyName] ||
      (isSVG ? propertyName : propertyName.toLowerCase());
    propConfig = Properties[propertyName];

    config[attributeName] = {
      attributeName: attributeName,
      propertyName: propertyName,
      mustUseProperty: checkMask(propConfig, MUST_USE_PROPERTY),
      hasBooleanValue: checkMask(propConfig, HAS_BOOLEAN_VALUE),
      hasNumericValue: checkMask(propConfig, HAS_NUMERIC_VALUE),
      hasPositiveNumericValue: checkMask(
        propConfig,
        HAS_POSITIVE_NUMERIC_VALUE
      ),
      hasOverloadedBooleanValue: checkMask(
        propConfig,
        HAS_OVERLOADED_BOOLEAN_VALUE
      )
    };
  }
}

/**
 * HTML properties config.
 *
 * @type {Object}
 */
var html = {};
injectDOMPropertyConfig(HTMLDOMPropertyConfig, html);

/**
 * SVG properties config.
 *
 * @type {Object}
 */
var svg = {};
injectDOMPropertyConfig(SVGDOMPropertyConfig, svg, true);

/**
 * HTML and SVG properties config.
 *
 * @type {Object}
 */
var properties = {};
injectDOMPropertyConfig(HTMLDOMPropertyConfig, properties);
injectDOMPropertyConfig(SVGDOMPropertyConfig, properties, true);

var ATTRIBUTE_NAME_START_CHAR =
  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR =
  ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

module.exports = {
  html: html,
  svg: svg,
  properties: properties,

  /**
   * Checks whether a property name is a custom attribute.
   *
   * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
   *
   * @param {String}
   * @return {Boolean}
   */
  isCustomAttribute: RegExp.prototype.test.bind(
    new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
  )
};


/***/ }),

/***/ "./node_modules/react-property/lib/HTMLDOMPropertyConfig.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-property/lib/HTMLDOMPropertyConfig.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  Properties: {
    autoFocus: 4,
    accept: 0,
    acceptCharset: 0,
    accessKey: 0,
    action: 0,
    allowFullScreen: 4,
    allowTransparency: 0,
    alt: 0,
    as: 0,
    async: 4,
    autoComplete: 0,
    autoPlay: 4,
    capture: 4,
    cellPadding: 0,
    cellSpacing: 0,
    charSet: 0,
    challenge: 0,
    checked: 5,
    cite: 0,
    classID: 0,
    className: 0,
    cols: 24,
    colSpan: 0,
    content: 0,
    contentEditable: 0,
    contextMenu: 0,
    controls: 4,
    controlsList: 0,
    coords: 0,
    crossOrigin: 0,
    data: 0,
    dateTime: 0,
    default: 4,
    defer: 4,
    dir: 0,
    disabled: 4,
    download: 32,
    draggable: 0,
    encType: 0,
    form: 0,
    formAction: 0,
    formEncType: 0,
    formMethod: 0,
    formNoValidate: 4,
    formTarget: 0,
    frameBorder: 0,
    headers: 0,
    height: 0,
    hidden: 4,
    high: 0,
    href: 0,
    hrefLang: 0,
    htmlFor: 0,
    httpEquiv: 0,
    icon: 0,
    id: 0,
    inputMode: 0,
    integrity: 0,
    is: 0,
    keyParams: 0,
    keyType: 0,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: 4,
    low: 0,
    manifest: 0,
    marginHeight: 0,
    marginWidth: 0,
    max: 0,
    maxLength: 0,
    media: 0,
    mediaGroup: 0,
    method: 0,
    min: 0,
    minLength: 0,
    multiple: 5,
    muted: 5,
    name: 0,
    nonce: 0,
    noValidate: 4,
    open: 4,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: 4,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 0,
    readOnly: 4,
    referrerPolicy: 0,
    rel: 0,
    required: 4,
    reversed: 4,
    role: 0,
    rows: 24,
    rowSpan: 8,
    sandbox: 0,
    scope: 0,
    scoped: 4,
    scrolling: 0,
    seamless: 4,
    selected: 5,
    shape: 0,
    size: 24,
    sizes: 0,
    span: 24,
    spellCheck: 0,
    src: 0,
    srcDoc: 0,
    srcLang: 0,
    srcSet: 0,
    start: 8,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 0,
    target: 0,
    title: 0,
    type: 0,
    useMap: 0,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,
    about: 0,
    datatype: 0,
    inlist: 0,
    prefix: 0,
    property: 0,
    resource: 0,
    typeof: 0,
    vocab: 0,
    autoCapitalize: 0,
    autoCorrect: 0,
    autoSave: 0,
    color: 0,
    itemProp: 0,
    itemScope: 4,
    itemType: 0,
    itemID: 0,
    itemRef: 0,
    results: 0,
    security: 0,
    unselectable: 0
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  }
};


/***/ }),

/***/ "./node_modules/react-property/lib/SVGDOMPropertyConfig.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-property/lib/SVGDOMPropertyConfig.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  Properties: {
    accentHeight: 0,
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 0,
    allowReorder: 0,
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 0,
    ascent: 0,
    attributeName: 0,
    attributeType: 0,
    autoReverse: 0,
    azimuth: 0,
    baseFrequency: 0,
    baseProfile: 0,
    baselineShift: 0,
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 0,
    capHeight: 0,
    clip: 0,
    clipPath: 0,
    clipRule: 0,
    clipPathUnits: 0,
    colorInterpolation: 0,
    colorInterpolationFilters: 0,
    colorProfile: 0,
    colorRendering: 0,
    contentScriptType: 0,
    contentStyleType: 0,
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 0,
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 0,
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 0,
    elevation: 0,
    enableBackground: 0,
    end: 0,
    exponent: 0,
    externalResourcesRequired: 0,
    fill: 0,
    fillOpacity: 0,
    fillRule: 0,
    filter: 0,
    filterRes: 0,
    filterUnits: 0,
    floodColor: 0,
    floodOpacity: 0,
    focusable: 0,
    fontFamily: 0,
    fontSize: 0,
    fontSizeAdjust: 0,
    fontStretch: 0,
    fontStyle: 0,
    fontVariant: 0,
    fontWeight: 0,
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 0,
    glyphOrientationHorizontal: 0,
    glyphOrientationVertical: 0,
    glyphRef: 0,
    gradientTransform: 0,
    gradientUnits: 0,
    hanging: 0,
    horizAdvX: 0,
    horizOriginX: 0,
    ideographic: 0,
    imageRendering: 0,
    in: 0,
    in2: 0,
    intercept: 0,
    k: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    kernelMatrix: 0,
    kernelUnitLength: 0,
    kerning: 0,
    keyPoints: 0,
    keySplines: 0,
    keyTimes: 0,
    lengthAdjust: 0,
    letterSpacing: 0,
    lightingColor: 0,
    limitingConeAngle: 0,
    local: 0,
    markerEnd: 0,
    markerMid: 0,
    markerStart: 0,
    markerHeight: 0,
    markerUnits: 0,
    markerWidth: 0,
    mask: 0,
    maskContentUnits: 0,
    maskUnits: 0,
    mathematical: 0,
    mode: 0,
    numOctaves: 0,
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 0,
    overlineThickness: 0,
    paintOrder: 0,
    panose1: 0,
    pathLength: 0,
    patternContentUnits: 0,
    patternTransform: 0,
    patternUnits: 0,
    pointerEvents: 0,
    points: 0,
    pointsAtX: 0,
    pointsAtY: 0,
    pointsAtZ: 0,
    preserveAlpha: 0,
    preserveAspectRatio: 0,
    primitiveUnits: 0,
    r: 0,
    radius: 0,
    refX: 0,
    refY: 0,
    renderingIntent: 0,
    repeatCount: 0,
    repeatDur: 0,
    requiredExtensions: 0,
    requiredFeatures: 0,
    restart: 0,
    result: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    seed: 0,
    shapeRendering: 0,
    slope: 0,
    spacing: 0,
    specularConstant: 0,
    specularExponent: 0,
    speed: 0,
    spreadMethod: 0,
    startOffset: 0,
    stdDeviation: 0,
    stemh: 0,
    stemv: 0,
    stitchTiles: 0,
    stopColor: 0,
    stopOpacity: 0,
    strikethroughPosition: 0,
    strikethroughThickness: 0,
    string: 0,
    stroke: 0,
    strokeDasharray: 0,
    strokeDashoffset: 0,
    strokeLinecap: 0,
    strokeLinejoin: 0,
    strokeMiterlimit: 0,
    strokeOpacity: 0,
    strokeWidth: 0,
    surfaceScale: 0,
    systemLanguage: 0,
    tableValues: 0,
    targetX: 0,
    targetY: 0,
    textAnchor: 0,
    textDecoration: 0,
    textRendering: 0,
    textLength: 0,
    to: 0,
    transform: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 0,
    underlineThickness: 0,
    unicode: 0,
    unicodeBidi: 0,
    unicodeRange: 0,
    unitsPerEm: 0,
    vAlphabetic: 0,
    vHanging: 0,
    vIdeographic: 0,
    vMathematical: 0,
    values: 0,
    vectorEffect: 0,
    version: 0,
    vertAdvY: 0,
    vertOriginX: 0,
    vertOriginY: 0,
    viewBox: 0,
    viewTarget: 0,
    visibility: 0,
    widths: 0,
    wordSpacing: 0,
    writingMode: 0,
    x: 0,
    xHeight: 0,
    x1: 0,
    x2: 0,
    xChannelSelector: 0,
    xlinkActuate: 0,
    xlinkArcrole: 0,
    xlinkHref: 0,
    xlinkRole: 0,
    xlinkShow: 0,
    xlinkTitle: 0,
    xlinkType: 0,
    xmlBase: 0,
    xmlns: 0,
    xmlnsXlink: 0,
    xmlLang: 0,
    xmlSpace: 0,
    y: 0,
    y1: 0,
    y2: 0,
    yChannelSelector: 0,
    z: 0,
    zoomAndPan: 0
  },
  DOMAttributeNames: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlnsXlink: 'xmlns:xlink',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space'
  }
};


/***/ }),

/***/ "./node_modules/react-property/lib/injection.js":
/*!******************************************************!*\
  !*** ./node_modules/react-property/lib/injection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  MUST_USE_PROPERTY: 1,
  HAS_BOOLEAN_VALUE: 4,
  HAS_NUMERIC_VALUE: 8,
  HAS_POSITIVE_NUMERIC_VALUE: 24,
  HAS_OVERLOADED_BOOLEAN_VALUE: 32
};


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ })

}]);
//# sourceMappingURL=checkout-info.chunk.js.map