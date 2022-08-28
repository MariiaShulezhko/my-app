(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["checkout-success"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutSuccess/CheckoutSuccess.component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutSuccess/CheckoutSuccess.component.js ***!
  \******************************************************************************************************/
/*! exports provided: CheckoutSuccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutSuccess", function() { return CheckoutSuccess; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _CheckoutSuccess_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutSuccess.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutSuccess/CheckoutSuccess.style.scss");
/* harmony import */ var _CheckoutSuccess_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CheckoutSuccess_style__WEBPACK_IMPORTED_MODULE_7__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutSuccess/CheckoutSuccess.component.js";

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








/** #namespace Component/CheckoutSuccess/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutSuccess = Mosaic.middleware((_class = class CheckoutSuccess_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderButtons() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutSuccess",
      elem: "ButtonWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      block: "Button",
      mix: {
        block: 'CheckoutSuccess',
        elem: 'ContinueButton'
      },
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __('Continue shopping')));
  }

  renderCreateAccountButton() {
    const {
      isEmailAvailable,
      email,
      firstName,
      lastName,
      orderID
    } = this.props;

    if (!isEmailAvailable || Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_5__["isSignedIn"])()) {
      return null;
    }

    sessionStorage.setItem(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_ID"], orderID);
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutRegistrationLink",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __('You can track your order status by creating an account.')), /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, `${__('Email address')}: ${email}`), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: {
        pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_6__["appendWithStoreCode"])(`${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_REGISTRATION_URL"]}`),
        state: {
          firstName,
          lastName,
          email,
          orderID
        }
      },
      block: "Button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __('Create account')));
  }

  render() {
    const {
      orderID
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutSuccess",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __('Your order # is: %s', orderID)), /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, __('We`ll email you an order confirmation with details and tracking info.')), this.renderButtons(), this.renderCreateAccountButton());
  }

}, _class.propTypes = {
  orderID: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isEmailAvailable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  firstName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  lastName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/CheckoutSuccess/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutSuccess);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutSuccess/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutSuccess/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutSuccess_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutSuccess.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutSuccess/CheckoutSuccess.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutSuccess_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js ***!
  \*************************************************************************************************/
/*! exports provided: ORDER_ITEMS, ORDER_INVOICES, ORDER_SHIPMENTS, ORDER_REFUNDS, ORDER_ID, ORDER_ACTION_LABELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_ITEMS", function() { return ORDER_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_INVOICES", function() { return ORDER_INVOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_SHIPMENTS", function() { return ORDER_SHIPMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_REFUNDS", function() { return ORDER_REFUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_ID", function() { return ORDER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_ACTION_LABELS", function() { return ORDER_ACTION_LABELS; });
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
const ORDER_ITEMS = 'Items';
const ORDER_INVOICES = 'Invoice';
const ORDER_SHIPMENTS = 'Shipment';
const ORDER_REFUNDS = 'Refund';
const ORDER_ID = 'ORDER_ID';
const ORDER_ACTION_LABELS = {
  [ORDER_INVOICES]: {
    print: __('Print Invoice'),
    printUrl: '/sales/order/printInvoice/invoice_id',
    printAll: __('Print All Invoices'),
    printAllUrl: '/sales/order/printInvoice/order_id'
  },
  [ORDER_SHIPMENTS]: {
    print: __('Print Shipment'),
    printUrl: '/sales/order/printShipment/shipment_id',
    printAll: __('Print All Shipments'),
    printAllUrl: '/sales/order/printShipment/order_id'
  },
  [ORDER_REFUNDS]: {
    print: __('Print Refund'),
    printUrl: '/sales/order/printCreditmemo/creditmemo_id',
    printAll: __('Print All Refunds'),
    printAllUrl: '/sales/order/printCreditmemo/order_id'
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ })

}]);
//# sourceMappingURL=checkout-success.chunk.js.map