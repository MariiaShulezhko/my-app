(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["checkout-billing"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.component.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: CheckoutAddressBook, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressBook", function() { return CheckoutAddressBook; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutAddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CheckoutAddressForm */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutAddressTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CheckoutAddressTable */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Address */ "./node_modules/@scandipwa/scandipwa/src/util/Address/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _CheckoutAddressBook_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CheckoutAddressBook.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.style.scss");
/* harmony import */ var _CheckoutAddressBook_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_CheckoutAddressBook_style__WEBPACK_IMPORTED_MODULE_11__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.component.js";

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












/** #namespace Component/CheckoutAddressBook/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutAddressBook = Mosaic.middleware((_class = class CheckoutAddressBook_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isCustomAddressExpanded: false
    };
    this.renderAddress = this.renderAddress.bind(this);
    this.expandCustomAddress = this.expandCustomAddress.bind(this);
  }

  static getDerivedStateFromProps(props) {
    const {
      is_virtual,
      selectedAddressId,
      customer: {
        addresses = []
      }
    } = props;

    if (addresses.length === 0) {
      return {
        isCustomAddressExpanded: true
      };
    }

    if (selectedAddressId === 0) {
      return is_virtual ? {
        isCustomAddressExpanded: true
      } : null;
    }

    return {
      isCustomAddressExpanded: false
    };
  }

  expandCustomAddress() {
    const {
      onAddressSelect
    } = this.props;
    this.setState({
      isCustomAddressExpanded: true
    });
    onAddressSelect({});
  }

  renderNoAddresses() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __('You have no configured addresses.')), /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      to: `${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__["ACCOUNT_URL"]}/${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_8__["ADDRESS_BOOK"]}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, __('Go to Address Book to configure them!'))));
  }

  renderLoading() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isLoading: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    });
  }

  renderAddress(address, index) {
    const {
      onAddressSelect,
      selectedAddressId
    } = this.props;
    const addressNumber = index + 1;
    const {
      id
    } = address;
    const postfix = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_9__["getDefaultAddressLabel"])(address);
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutAddressTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: onAddressSelect,
      isSelected: selectedAddressId === id,
      title: __('Address #%s%s', addressNumber, postfix),
      address: address,
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    });
  }

  renderAddressList() {
    const {
      customer: {
        addresses
      }
    } = this.props;

    if (!addresses) {
      return this.renderLoading();
    }

    if (!addresses.length) {
      return this.renderNoAddresses();
    }

    return addresses.map(this.renderAddress);
  }

  renderHeading() {
    const {
      isBilling
    } = this.props;

    if (isBilling) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "h2", {
      block: "Checkout",
      elem: "Heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, __('Shipping address'));
  }

  renderCustomAddress() {
    const {
      isBilling,
      onShippingEstimationFieldsChange,
      isSubmitted
    } = this.props;
    const formPortalId = isBilling ? _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["BILLING_STEP"] : _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["SHIPPING_STEP"];
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutAddressForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onShippingEstimationFieldsChange: onShippingEstimationFieldsChange,
      address: {},
      id: formPortalId,
      isSubmitted: isSubmitted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    });
  }

  renderOptionalCustomAddress() {
    const {
      isCustomAddressExpanded
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutAddressBook",
      elem: "CustomAddressWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "CheckoutAddressBook",
      elem: "Button",
      mods: {
        isCustomAddressExpanded
      },
      mix: {
        block: 'Button',
        mods: {
          isHollow: true
        }
      },
      type: "button",
      onClick: this.expandCustomAddress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, __('Use custom address')), isCustomAddressExpanded && this.renderCustomAddress());
  }

  renderSignedInContent() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutAddressBook",
      elem: "Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }
    }, this.renderAddressList()), this.renderOptionalCustomAddress());
  }

  renderGuestContent() {
    return this.renderCustomAddress();
  }

  renderContent() {
    if (Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__["isSignedIn"])()) {
      return this.renderSignedInContent();
    }

    return this.renderGuestContent();
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutAddressBook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, this.renderHeading(), this.renderContent());
  }

}, _class.propTypes = {
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_8__["CustomerType"].isRequired,
  onAddressSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedAddressId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  isBilling: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isSubmitted: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  is_virtual: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/CheckoutAddressBook/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutAddressBook);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.container.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.container.js ***!
  \**************************************************************************************************************/
/*! exports provided: MyAccountDispatcher, mapStateToProps, mapDispatchToProps, CheckoutAddressBookContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressBookContainer", function() { return CheckoutAddressBookContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _CheckoutAddressBook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckoutAddressBook.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.container.js";

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







const MyAccountDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ./src/store/MyAccount/MyAccount.dispatcher */ "./node_modules/@scandipwa/scandipwa/src/store/MyAccount/MyAccount.dispatcher.js"));
/** #namespace Component/CheckoutAddressBook/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    customer: state.MyAccountReducer.customer
  };
}, "Component/CheckoutAddressBook/Container/mapStateToProps");
/** #namespace Component/CheckoutAddressBook/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    requestCustomerData: function () {
      return MyAccountDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.requestCustomerData(dispatch);
      });
    }
  };
}, "Component/CheckoutAddressBook/Container/mapDispatchToProps");
/** #namespace Component/CheckoutAddressBook/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutAddressBookContainer = Mosaic.middleware((_class = class CheckoutAddressBookContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onAddressSelect: this.onAddressSelect.bind(this)
    };
  }

  static _getDefaultAddressId(props) {
    const {
      customer,
      isBilling
    } = props;
    const defaultKey = isBilling ? 'default_billing' : 'default_shipping';
    const {
      [defaultKey]: defaultAddressId,
      addresses
    } = customer;

    if (defaultAddressId) {
      return +defaultAddressId;
    }

    if (addresses && addresses.length) {
      return addresses[0].id;
    }

    return 0;
  }

  __construct(props) {
    super.__construct(props);

    const {
      requestCustomerData,
      customer,
      onAddressSelect
    } = props;

    if (Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_4__["isSignedIn"])() && !Object.keys(customer).length) {
      requestCustomerData();
    }

    const defaultAddressId = CheckoutAddressBookContainer._getDefaultAddressId(props);

    if (defaultAddressId) {
      onAddressSelect(defaultAddressId);
      this.estimateShipping(defaultAddressId);
    }

    this.state = {
      prevDefaultAddressId: defaultAddressId,
      selectedAddressId: defaultAddressId
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      prevDefaultAddressId
    } = state;

    const defaultAddressId = CheckoutAddressBookContainer._getDefaultAddressId(props);

    if (defaultAddressId !== prevDefaultAddressId) {
      return {
        selectedAddressId: defaultAddressId,
        prevDefaultAddressId: defaultAddressId
      };
    }

    return null;
  }

  componentDidUpdate(_, prevState) {
    const {
      onAddressSelect,
      requestCustomerData,
      customer
    } = this.props;
    const {
      selectedAddressId: prevSelectedAddressId
    } = prevState;
    const {
      selectedAddressId
    } = this.state;

    if (Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_4__["isSignedIn"])() && !Object.keys(customer).length) {
      requestCustomerData();
    }

    if (selectedAddressId !== prevSelectedAddressId) {
      onAddressSelect(selectedAddressId);
      this.estimateShipping(selectedAddressId);
    }
  }

  containerProps() {
    const {
      customer,
      onShippingEstimationFieldsChange,
      isBilling,
      isSubmitted,
      is_virtual
    } = this.props;
    const {
      selectedAddressId
    } = this.state;
    return {
      customer,
      onShippingEstimationFieldsChange,
      isBilling,
      selectedAddressId,
      isSubmitted,
      is_virtual
    };
  }

  onAddressSelect(address) {
    const {
      id = 0
    } = address;
    this.setState({
      selectedAddressId: id
    });
  }

  estimateShipping(addressId) {
    const {
      onShippingEstimationFieldsChange,
      customer: {
        addresses = []
      }
    } = this.props;
    const address = addresses.find(function (_ref2) {
      let {
        id
      } = _ref2;
      return id === addressId;
    });

    if (!address) {
      return;
    }

    const {
      city,
      country_id,
      postcode,
      region: {
        region_id,
        region
      } = {}
    } = address;

    if (!country_id) {
      return;
    }

    onShippingEstimationFieldsChange({
      city,
      country_id,
      region_id,
      region,
      postcode
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CheckoutAddressBook_component__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  requestCustomerData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onAddressSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__["CustomerType"].isRequired,
  isBilling: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isSubmitted: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  is_virtual: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  isBilling: false,
  onAddressSelect: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_5__["noopFn"],
  onShippingEstimationFieldsChange: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_5__["noopFn"],
  isSubmitted: false,
  is_virtual: false
}, _class), "Component/CheckoutAddressBook/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutAddressBookContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutAddressBook_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutAddressBook.container */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/CheckoutAddressBook.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutAddressBook_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.component.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: CheckoutAddressForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressForm", function() { return CheckoutAddressForm; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/MyAccountAddressForm/MyAccountAddressForm.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Form/Transform */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.component.js";

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




/** #namespace Component/CheckoutAddressForm/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutAddressForm = Mosaic.middleware((_class = class CheckoutAddressForm_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  constructor() {
    super(...arguments);
    this.lastRequest = null;
    this.onAddressChange = this.onAddressChange.bind(this);
  }

  componentDidMount() {
    const {
      address: {
        countryId,
        regionId,
        region,
        city,
        postcode
      },
      defaultCountry,
      onShippingEstimationFieldsChange
    } = this.props;
    onShippingEstimationFieldsChange({
      country_id: countryId || defaultCountry,
      region_id: regionId !== '' ? regionId : null,
      region,
      city,
      postcode
    });
  }

  get fieldMap() {
    const fieldMap = super.fieldMap;
    const addressGroup = fieldMap.find(function (_ref) {
      let {
        name
      } = _ref;
      return name === 'addressGroup';
    });

    if (addressGroup) {
      addressGroup.events = {
        // Updates shipping methods on address blurt
        onBlur: this.onAddressChange,
        // Updates shipping methods on start
        onLoad: this.onAddressChange
      };
    }

    fieldMap.splice(0, 2);
    return fieldMap;
  }

  onAddressChange(event, data) {
    const {
      fields = {}
    } = data;
    const {
      country_id,
      region_id: regionId,
      region_string: region,
      city,
      postcode
    } = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_3__["default"])(fields);
    const {
      onShippingEstimationFieldsChange
    } = this.props;
    const request = {
      country_id,
      region_id: regionId !== '' ? regionId : null,
      region,
      city,
      postcode
    }; // If request hasn't changed, then ignore.

    if (JSON.stringify(request) === JSON.stringify(this.lastRequest)) {
      return;
    }

    onShippingEstimationFieldsChange(request); // Caches last request

    this.lastRequest = request;
  }

  renderActions() {
    return null;
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutAddressForm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, this.renderFormBody());
  }

}, _class.propTypes = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_1__["default"].propTypes,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
}, _class.defaultProps = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_1__["default"].defaultProps,
  onShippingEstimationFieldsChange: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_2__["noopFn"]
}, _class), "Component/CheckoutAddressForm/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutAddressForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.container.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.container.js ***!
  \**************************************************************************************************************/
/*! exports provided: CheckoutAddressFormContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressFormContainer", function() { return CheckoutAddressFormContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/MyAccountAddressForm/MyAccountAddressForm.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.container.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _CheckoutAddressForm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutAddressForm.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.component.js");
var _Mosaic$Extensible,
    _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.container.js";

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





/** #namespace Component/CheckoutAddressForm/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutAddressFormContainer = Mosaic.middleware((_class = class CheckoutAddressFormContainer_ extends (_Mosaic$Extensible = Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_container__WEBPACK_IMPORTED_MODULE_2__["MyAccountAddressFormContainer"])) {
  containerProps() {
    const {
      onShippingEstimationFieldsChange
    } = this.props;
    return {
      onShippingEstimationFieldsChange,
      ...super.containerProps()
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CheckoutAddressForm_component__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = { ..._Mosaic$Extensible.propTypes,
  onShippingEstimationFieldsChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
}, _class.defaultProps = {
  onSave: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_3__["noopFn"]
}, _class), "Component/CheckoutAddressForm/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_container__WEBPACK_IMPORTED_MODULE_2__["mapStateToProps"], _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressForm_MyAccountAddressForm_container__WEBPACK_IMPORTED_MODULE_2__["mapDispatchToProps"])(CheckoutAddressFormContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutAddressForm_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutAddressForm.container */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressForm/CheckoutAddressForm.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutAddressForm_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.component.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.component.js ***!
  \****************************************************************************************************************/
/*! exports provided: CheckoutAddressTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressTable", function() { return CheckoutAddressTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/MyAccountAddressTable/MyAccountAddressTable.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.component.js");
/* harmony import */ var _CheckoutAddressTable_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutAddressTable.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.style.scss");
/* harmony import */ var _CheckoutAddressTable_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CheckoutAddressTable_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.component.js";

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




/** #namespace Component/CheckoutAddressTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutAddressTable = Mosaic.middleware((_class = class CheckoutAddressTable_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor() {
    super(...arguments);
    this.onAddressClick = this.onAddressClick.bind(this);
  }

  onAddressClick() {
    const {
      address,
      onClick
    } = this.props;
    onClick(address);
  }

  renderTable() {
    const {
      isSelected
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "CheckoutAddressTable",
      elem: "Button",
      type: "button",
      mods: {
        isSelected
      },
      onClick: this.onAddressClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, super.renderTable());
  }

  render() {
    const {
      countries
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutAddressTable",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isLoading: !countries.length,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), this.renderTable());
  }

}, _class.propTypes = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__["default"].propTypes,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class.defaultProps = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_2__["default"].defaultProps,
  isSelected: false
}, _class), "Component/CheckoutAddressTable/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutAddressTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.container.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.container.js ***!
  \****************************************************************************************************************/
/*! exports provided: CheckoutAddressTableContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressTableContainer", function() { return CheckoutAddressTableContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/MyAccountAddressTable/MyAccountAddressTable.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.container.js");
/* harmony import */ var _CheckoutAddressTable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutAddressTable.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.component.js");
var _Mosaic$Extensible,
    _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.container.js";

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




/** #namespace Component/CheckoutAddressTable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutAddressTableContainer = Mosaic.middleware((_class = class CheckoutAddressTableContainer_ extends (_Mosaic$Extensible = Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_2__["MyAccountAddressTableContainer"])) {
  containerProps() {
    const {
      isSelected,
      onClick
    } = this.props;
    return {
      isSelected,
      onClick,
      ...super.containerProps()
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CheckoutAddressTable_component__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = { ..._Mosaic$Extensible.propTypes,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/CheckoutAddressTable/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_2__["mapStateToProps"], _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable_MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_2__["mapDispatchToProps"])(CheckoutAddressTableContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutAddressTable_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutAddressTable.container */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressTable/CheckoutAddressTable.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutAddressTable_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.component.js ***!
  \******************************************************************************************************/
/*! exports provided: CheckoutBilling, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutBilling", function() { return CheckoutBilling; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutAddressBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CheckoutAddressBook */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutAddressBook/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutPayments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CheckoutPayments */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutTermsAndConditionsPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/CheckoutTermsAndConditionsPopup */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/component/Form */ "./node_modules/@scandipwa/scandipwa/src/component/Form/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_StoreInPickUp_StoreInPickUp_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/component/StoreInPickUp/StoreInPickUp.config */ "./node_modules/@scandipwa/scandipwa/src/component/StoreInPickUp/StoreInPickUp.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/type/Checkout.type */ "./node_modules/@scandipwa/scandipwa/src/type/Checkout.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
/* harmony import */ var _CheckoutBilling_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CheckoutBilling.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.style.scss");
/* harmony import */ var _CheckoutBilling_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_CheckoutBilling_style__WEBPACK_IMPORTED_MODULE_14__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.component.js";

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















/** #namespace Component/CheckoutBilling/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutBilling = Mosaic.middleware((_class = class CheckoutBilling_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isOrderButtonVisible: true,
      isOrderButtonEnabled: true,
      isTACAccepted: false
    };
    this.setOrderButtonEnableStatus = this.setOrderButtonEnableStatus.bind(this);
    this.setTACAccepted = this.setTACAccepted.bind(this);
    this.handleShowPopup = this.handleShowPopup.bind(this);
  }

  componentDidMount() {
    const {
      termsAreEnabled
    } = this.props;

    if (!termsAreEnabled) {
      this.setState({
        isOrderButtonEnabled: true
      });
    }
  }

  setOrderButtonVisibility(isOrderButtonVisible) {
    this.setState({
      isOrderButtonVisible
    });
  }

  setOrderButtonEnableStatus(isOrderButtonEnabled) {
    this.setState({
      isOrderButtonEnabled
    });
  }

  setTACAccepted() {
    this.setState(function (_ref) {
      let {
        isTACAccepted: oldIsTACAccepted
      } = _ref;
      return {
        isTACAccepted: !oldIsTACAccepted
      };
    });
  }

  handleShowPopup(e) {
    const {
      showPopup
    } = this.props;
    e.preventDefault();
    showPopup();
  }

  renderTAC() {
    const {
      termsAreEnabled,
      termsAndConditions
    } = this.props;
    const {
      checkbox_text = __('I agree to terms and conditions')
    } = termsAndConditions[0] || {};
    const {
      isTACAccepted
    } = this.state;

    if (!termsAreEnabled) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutBilling",
      elem: "TermsAndConditions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "label", {
      block: "CheckoutBilling",
      elem: "TACLabel",
      htmlFor: "termsAndConditions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_6__["default"].checkbox,
      attr: {
        id: 'termsAndConditions',
        name: 'termsAndConditions',
        value: 'termsAndConditions',
        checked: isTACAccepted
      },
      events: {
        onChange: this.setTACAccepted
      },
      mix: {
        block: 'CheckoutBilling',
        elem: 'TermsAndConditions-Checkbox'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }), /*#__PURE__*/_checkBEM(React, "div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 20
      }
    }, `${checkbox_text} - `, /*#__PURE__*/_checkBEM(React, "button", {
      block: "CheckoutBilling",
      elem: "TACLink",
      onClick: this.handleShowPopup,
      type: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 25
      }
    }, __('read more')))));
  }

  renderOrderTotalExlTax() {
    const {
      cartTotalSubPrice,
      totals: {
        prices: {
          quote_currency_code = null
        } = {}
      }
    } = this.props;

    if (!cartTotalSubPrice) {
      return null;
    }

    const orderTotalExlTax = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_13__["formatPrice"])(cartTotalSubPrice, quote_currency_code);
    return /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }, `${__('Excl. tax:')} ${orderTotalExlTax}`);
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
      }
    } = this.props;
    const orderTotal = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_13__["formatPrice"])(grand_total, quote_currency_code);
    return /*#__PURE__*/_checkBEM(React, "dl", {
      block: "Checkout",
      elem: "OrderTotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "dt", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, __('Order total:')), /*#__PURE__*/_checkBEM(React, "dd", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }, orderTotal, this.renderOrderTotalExlTax()));
  }

  renderActions() {
    const {
      paymentMethod
    } = this.props;
    const {
      isOrderButtonVisible,
      isOrderButtonEnabled,
      isTACAccepted
    } = this.state;
    const {
      termsAreEnabled
    } = this.props;

    if (!isOrderButtonVisible) {
      return null;
    } // if terms and conditions are enabled, validate for acceptance


    const isDisabled = termsAreEnabled ? !isOrderButtonEnabled || !isTACAccepted || !paymentMethod : !isOrderButtonEnabled;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Checkout",
      elem: "StickyButtonWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    }, this.renderOrderTotal(), /*#__PURE__*/_checkBEM(React, "button", {
      type: "submit",
      block: "Button",
      disabled: isDisabled,
      mix: {
        block: 'CheckoutBilling',
        elem: 'Button'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }
    }, __('Complete order')));
  }

  renderAddressBook() {
    const {
      onAddressSelect,
      isSameAsShipping,
      totals: {
        is_virtual
      }
    } = this.props;

    if (isSameAsShipping && !is_virtual) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutAddressBook__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onAddressSelect: onAddressSelect,
      isBilling: true,
      is_virtual: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 13
      }
    });
  }

  renderSameAsShippingCheckbox() {
    const {
      isSameAsShipping,
      onSameAsShippingChange,
      totals: {
        is_virtual
      },
      selectedShippingMethod
    } = this.props;

    if (is_virtual) {
      return null;
    }

    if (selectedShippingMethod === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_StoreInPickUp_StoreInPickUp_config__WEBPACK_IMPORTED_MODULE_8__["STORE_IN_PICK_UP_METHOD_CODE"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_6__["default"].checkbox,
      attr: {
        id: 'sameAsShippingAddress',
        name: 'sameAsShippingAddress',
        value: 'sameAsShippingAddress',
        checked: isSameAsShipping
      },
      events: {
        onChange: onSameAsShippingChange
      },
      mix: {
        block: 'CheckoutBilling',
        elem: 'Checkbox'
      },
      label: __('My billing and shipping are the same'),
      onChange: onSameAsShippingChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 13
      }
    });
  }

  renderHeading() {
    return /*#__PURE__*/_checkBEM(React, "h2", {
      block: "Checkout",
      elem: "Heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 13
      }
    }, __('Billing address'));
  }

  renderAddresses() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderHeading(), this.renderSameAsShippingCheckbox(), this.renderAddressBook());
  }

  renderPayments() {
    const {
      paymentMethods,
      onPaymentMethodSelect,
      setLoading,
      setDetailsStep,
      shippingAddress
    } = this.props;

    if (!paymentMethods.length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutPayments__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setLoading: setLoading,
      setDetailsStep: setDetailsStep,
      paymentMethods: paymentMethods,
      onPaymentMethodSelect: onPaymentMethodSelect,
      setOrderButtonVisibility: this.setOrderButtonVisibility,
      billingAddress: shippingAddress,
      setOrderButtonEnableStatus: this.setOrderButtonEnableStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 13
      }
    });
  }

  renderPopup() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutTermsAndConditionsPopup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 16
      }
    });
  }

  render() {
    const {
      onBillingSuccess,
      onBillingError
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attr: {
        id: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_9__["BILLING_STEP"]
      },
      mix: {
        block: 'CheckoutBilling'
      },
      onSubmit: onBillingSuccess,
      onError: onBillingError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 13
      }
    }, this.renderAddresses(), this.renderPayments(), this.renderTAC(), this.renderActions(), this.renderPopup());
  }

}, _class.propTypes = {
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setDetailsStep: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSameAsShipping: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  termsAreEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onSameAsShippingChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onPaymentMethodSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onBillingSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onBillingError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onAddressSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_11__["PaymentMethodsType"].isRequired,
  totals: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_12__["TotalsType"].isRequired,
  cartTotalSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  shippingAddress: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_10__["Addresstype"].isRequired,
  termsAndConditions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    checkbox_text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired,
  selectedShippingMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  paymentMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, _class.defaultProps = {
  cartTotalSubPrice: null,
  paymentMethod: ''
}, _class), "Component/CheckoutBilling/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutBilling);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.container.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.container.js ***!
  \******************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, CheckoutBillingContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutBillingContainer", function() { return CheckoutBillingContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutPayments_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CheckoutPayments/CheckoutPayments.config */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutTermsAndConditionsPopup_CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_StoreInPickUp_StoreInPickUp_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/StoreInPickUp/StoreInPickUp.config */ "./node_modules/@scandipwa/scandipwa/src/component/StoreInPickUp/StoreInPickUp.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/store/Popup/Popup.action */ "./node_modules/@scandipwa/scandipwa/src/store/Popup/Popup.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/type/Checkout.type */ "./node_modules/@scandipwa/scandipwa/src/type/Checkout.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Address */ "./node_modules/@scandipwa/scandipwa/src/util/Address/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/util/Cart */ "./node_modules/@scandipwa/scandipwa/src/util/Cart/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/util/Form/Form */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Form.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/util/Form/Transform */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js");
/* harmony import */ var _CheckoutBilling_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CheckoutBilling.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.container.js";

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
















/** #namespace Component/CheckoutBilling/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    customer: state.MyAccountReducer.customer,
    totals: state.CartReducer.cartTotals,
    termsAreEnabled: state.ConfigReducer.terms_are_enabled,
    termsAndConditions: state.ConfigReducer.checkoutAgreements,
    addressLinesQty: state.ConfigReducer.address_lines_quantity,
    cartTotalSubPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_12__["getCartTotalSubPrice"])(state),
    newShippingId: state.CheckoutReducer.shippingFields.id,
    newShippingStreet: state.CheckoutReducer.shippingFields.street
  };
}, "Component/CheckoutBilling/Container/mapStateToProps");
/** #namespace Component/CheckoutBilling/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showErrorNotification: function (message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__["showNotification"])('error', message));
    },
    showPopup: function (payload) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_7__["showPopup"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutTermsAndConditionsPopup_CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__["TERMS_AND_CONDITIONS_POPUP_ID"], payload));
    }
  };
}, "Component/CheckoutBilling/Container/mapDispatchToProps");
/** #namespace Component/CheckoutBilling/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutBillingContainer = Mosaic.middleware((_class = class CheckoutBillingContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onBillingSuccess: this.onBillingSuccess.bind(this),
      onBillingError: this.onBillingError.bind(this),
      onAddressSelect: this.onAddressSelect.bind(this),
      onSameAsShippingChange: this.onSameAsShippingChange.bind(this),
      onPaymentMethodSelect: this.onPaymentMethodSelect.bind(this),
      showPopup: this.showPopup.bind(this)
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      paymentMethod,
      prevPaymentMethods
    } = state;
    const {
      paymentMethods
    } = props;

    if (!prevPaymentMethods.length && !paymentMethod) {
      const [method] = paymentMethods;
      const {
        code: paymentMethod
      } = method || {};
      return {
        prevPaymentMethods: paymentMethods,
        paymentMethod
      };
    }

    return null;
  }

  __construct(props) {
    super.__construct(props);

    const {
      paymentMethods
    } = props;
    this.state = {
      isSameAsShipping: false,
      isMounted: false,
      selectedCustomerAddressId: 0,
      prevPaymentMethods: paymentMethods,
      paymentMethod: ''
    };
  }

  componentDidUpdate(prevState) {
    const {
      customer: {
        default_billing,
        default_shipping
      },
      newShippingId
    } = this.props;
    const {
      isMounted,
      isSameAsShipping: currIsSameAsShipping
    } = this.state;
    const {
      prevIsSameAsShipping
    } = prevState;
    const isSameAsShipping = this.isSameShippingAddress({
      default_billing,
      default_shipping
    }); // default billing & shipping are undefined on initial mount
    // wait until they become assigned to real values
    // then check for isSameAsShipping condition

    if (!isMounted && default_billing) {
      this.setState({
        isSameAsShipping,
        isMounted: true
      });
    }

    if (prevIsSameAsShipping !== currIsSameAsShipping && currIsSameAsShipping) {
      this.onAddressSelect( // if the user selected a shipping address different from default
      newShippingId > 0 ? newShippingId : default_shipping);
    }
  }

  containerProps() {
    const {
      cartTotalSubPrice,
      paymentMethods,
      selectedShippingMethod,
      setDetailsStep,
      setLoading,
      shippingAddress,
      termsAndConditions,
      termsAreEnabled,
      totals
    } = this.props;
    const {
      isSameAsShipping,
      paymentMethod
    } = this.state;
    return {
      cartTotalSubPrice,
      paymentMethods,
      isSameAsShipping,
      selectedShippingMethod,
      setDetailsStep,
      setLoading,
      shippingAddress,
      termsAndConditions,
      termsAreEnabled,
      totals,
      paymentMethod
    };
  }

  isSameShippingAddress(_ref) {
    let {
      default_shipping,
      default_billing
    } = _ref;
    const {
      totals: {
        is_virtual
      },
      selectedShippingMethod,
      newShippingId
    } = this.props;

    if (is_virtual) {
      return false;
    }

    if (selectedShippingMethod === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_StoreInPickUp_StoreInPickUp_config__WEBPACK_IMPORTED_MODULE_5__["STORE_IN_PICK_UP_METHOD_CODE"]) {
      return false;
    } // if the user selected a shipping address different from default


    if (newShippingId > 0) {
      return newShippingId === parseInt(default_billing, 10);
    } // otherwise use the default values


    return default_shipping === default_billing;
  }

  onAddressSelect(id) {
    this.setState({
      selectedCustomerAddressId: id
    });
  }

  onSameAsShippingChange() {
    this.setState(function (_ref2) {
      let {
        isSameAsShipping
      } = _ref2;
      return {
        isSameAsShipping: !isSameAsShipping
      };
    });
  }

  onPaymentMethodSelect(code) {
    this.setState({
      paymentMethod: code
    });
  }

  onBillingError(_, fields, validation) {
    const {
      onChangeEmailRequired
    } = this.props;
    onChangeEmailRequired();
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Form__WEBPACK_IMPORTED_MODULE_13__["default"])(fields, validation);
  }

  onBillingSuccess(form, fields, asyncData) {
    const {
      savePaymentInformation,
      onChangeEmailRequired
    } = this.props;
    const extractedFields = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_14__["default"])(fields);

    const address = this._getAddress(extractedFields);

    const paymentMethod = this._getPaymentData(extractedFields, asyncData);

    onChangeEmailRequired();
    savePaymentInformation({
      billing_address: address,
      paymentMethod
    });
  }

  showPopup() {
    const {
      showPopup,
      termsAndConditions
    } = this.props;
    const {
      name: title = __('Terms and Conditions'),
      content: text = __('There are no Terms and Conditions configured.')
    } = termsAndConditions[0] || {};
    return showPopup({
      title,
      text
    });
  }

  _getPaymentData(fields, asyncData) {
    const {
      paymentMethod: code
    } = this.state;

    switch (code) {
      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutPayments_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_3__["KLARNA"]:
        const [{
          authorization_token
        }] = asyncData;
        return {
          code,
          additional_data: {
            authorization_token
          }
        };

      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutPayments_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_3__["PURCHASE_ORDER"]:
        const {
          purchaseOrderNumber
        } = fields;
        return {
          code,
          purchase_order_number: purchaseOrderNumber
        };

      default:
        return {
          code
        };
    }
  }

  getBillingSameAsShipping() {
    const {
      selectedShippingMethod,
      shippingAddress
    } = this.props;

    if (selectedShippingMethod === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_StoreInPickUp_StoreInPickUp_config__WEBPACK_IMPORTED_MODULE_5__["STORE_IN_PICK_UP_METHOD_CODE"]) {
      const {
        extension_attributes,
        ...billingAddress
      } = shippingAddress;
      return billingAddress;
    }

    return shippingAddress;
  }

  _getAddress(fields) {
    const {
      addressLinesQty
    } = this.props;
    const {
      isSameAsShipping,
      selectedCustomerAddressId
    } = this.state;
    const formFields = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_11__["getFormFields"])(fields, addressLinesQty);

    if (isSameAsShipping) {
      return this.getBillingSameAsShipping();
    }

    if (!selectedCustomerAddressId) {
      const joinedStreetAddressFields = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_11__["setAddressesInFormObject"])(formFields, addressLinesQty, 'street_');
      return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_11__["trimCheckoutAddress"])(joinedStreetAddressFields);
    }

    const {
      customer: {
        addresses
      }
    } = this.props;
    const address = addresses.find(function (_ref3) {
      let {
        id
      } = _ref3;
      return id === selectedCustomerAddressId;
    });
    return { ...Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_11__["trimCheckoutCustomerAddress"])(address),
      save_in_address_book: false
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CheckoutBilling_component__WEBPACK_IMPORTED_MODULE_15__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  showErrorNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_9__["PaymentMethodsType"].isRequired,
  savePaymentInformation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  shippingAddress: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_8__["Addresstype"].isRequired,
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_8__["CustomerType"].isRequired,
  totals: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__["TotalsType"].isRequired,
  addressLinesQty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  termsAndConditions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    checkbox_text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired,
  selectedShippingMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  cartTotalSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  setDetailsStep: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  termsAreEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  newShippingId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  newShippingStreet: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  onChangeEmailRequired: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class.defaultProps = {
  newShippingId: 0,
  termsAreEnabled: false,
  cartTotalSubPrice: null
}, _class), "Component/CheckoutBilling/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutBillingContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutBilling_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutBilling.container */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutBilling/CheckoutBilling.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutBilling_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/CheckoutPayment.component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/CheckoutPayment.component.js ***!
  \******************************************************************************************************/
/*! exports provided: CheckoutPayment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPayment", function() { return CheckoutPayment; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Checkout.type */ "./node_modules/@scandipwa/scandipwa/src/type/Checkout.type.js");
/* harmony import */ var _CheckoutPayment_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckoutPayment.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/CheckoutPayment.style.scss");
/* harmony import */ var _CheckoutPayment_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CheckoutPayment_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/CheckoutPayment.component.js";

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






/** #namespace Component/CheckoutPayment/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutPayment = Mosaic.middleware((_class = class CheckoutPayment_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      onClick,
      method
    } = this.props;
    onClick(method);
  }

  render() {
    const {
      isSelected,
      method: {
        title
      }
    } = this.props; // disable checkbox in order to skip direct clicks on checkbox and handle clicks on entire button instead

    return /*#__PURE__*/_checkBEM(React, "li", {
      block: "CheckoutPayment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "CheckoutPayment",
      mods: {
        isSelected
      },
      elem: "Button",
      type: "button",
      onClick: this.onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].checkbox,
      attr: {
        id: `option-${title}`,
        name: `option-${title}`,
        checked: isSelected
      },
      label: title,
      isDisabled: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    })));
  }

}, _class.propTypes = {
  method: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_4__["PaymentMethodType"].isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  isSelected: false
}, _class), "Component/CheckoutPayment/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutPayment);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutPayment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutPayment.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/CheckoutPayment.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutPayment_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.component.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.component.js ***!
  \********************************************************************************************************/
/*! exports provided: CheckoutPayments, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPayments", function() { return CheckoutPayments; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutPayment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CheckoutPayment */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayment/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Klarna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Klarna */ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_NotSupportedPayment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/NotSupportedPayment */ "./node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_PurchaseOrder_PurchaseOrder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/PurchaseOrder/PurchaseOrder.component */ "./node_modules/@scandipwa/scandipwa/src/component/PurchaseOrder/PurchaseOrder.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Checkout.type */ "./node_modules/@scandipwa/scandipwa/src/type/Checkout.type.js");
/* harmony import */ var _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CheckoutPayments.config */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.config.js");
/* harmony import */ var _CheckoutPayments_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckoutPayments.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.style.scss");
/* harmony import */ var _CheckoutPayments_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CheckoutPayments_style__WEBPACK_IMPORTED_MODULE_9__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.component.js";

/* eslint-disable no-console */

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










/** #namespace Component/CheckoutPayments/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutPayments = Mosaic.middleware((_class = class CheckoutPayments_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.paymentRenderMap = {
      [_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA"]]: this.renderKlarnaPayment.bind(this),
      [_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_8__["PURCHASE_ORDER"]]: this.renderPurchaseOrderPayment.bind(this)
    };
    this.state = {
      hasError: false
    };
    this.renderPayment = this.renderPayment.bind(this);
  }

  componentDidCatch(error, info) {
    const {
      showError,
      setOrderButtonEnableStatus
    } = this.props;
    console.groupCollapsed('Suppressed error log:');
    console.error(error.toString(), info.toString());
    console.groupEnd();
    this.setState({
      hasError: true
    }, function () {
      setOrderButtonEnableStatus(false);
      showError(`${error} Please try again later`);
    });
  }

  renderKlarnaPayment() {
    const {
      setOrderButtonEnableStatus
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Klarna__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setOrderButtonEnableStatus: setOrderButtonEnableStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 16
      }
    });
  }

  renderPurchaseOrderPayment() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_PurchaseOrder_PurchaseOrder_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrder"], {
      id: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_6__["BILLING_STEP"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 16
      }
    });
  }

  renderNotSupported() {
    const {
      setOrderButtonEnableStatus
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_NotSupportedPayment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      disableButton: setOrderButtonEnableStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 16
      }
    });
  }

  renderPayment(method) {
    const {
      selectPaymentMethod,
      selectedPaymentCode
    } = this.props;
    const {
      code
    } = method;
    const isSelected = selectedPaymentCode === code;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CheckoutPayment__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: code,
      isSelected: isSelected,
      method: method,
      onClick: selectPaymentMethod,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    });
  }

  renderPayments() {
    const {
      paymentMethods
    } = this.props;
    return paymentMethods.map(this.renderPayment);
  }

  renderSelectedPayment() {
    const {
      selectedPaymentCode
    } = this.props;
    const render = this.paymentRenderMap[selectedPaymentCode];

    if (!render) {
      return null;
    }

    return render();
  }

  renderHeading() {
    return /*#__PURE__*/_checkBEM(React, "h2", {
      block: "Checkout",
      elem: "Heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, __('Payment method'));
  }

  renderContent() {
    const {
      hasError
    } = this.state;

    if (hasError) {
      return /*#__PURE__*/_checkBEM(React, "p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, __('The error occurred during initializing payment methods. Please try again later!'));
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderHeading(), /*#__PURE__*/_checkBEM(React, "ul", {
      block: "CheckoutPayments",
      elem: "Methods",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, this.renderPayments()), this.renderSelectedPayment());
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CheckoutPayments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, this.renderContent());
  }

}, _class.propTypes = {
  showError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectPaymentMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_7__["PaymentMethodsType"].isRequired,
  setOrderButtonEnableStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedPaymentCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  billingAddress: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    city: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    company: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    country_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    firstname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    lastname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    postcode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    region_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    region: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    street: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
    telephone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }).isRequired
}, _class), "Component/CheckoutPayments/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutPayments);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.config.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.config.js ***!
  \*****************************************************************************************************/
/*! exports provided: KLARNA, CHECK_MONEY, PAYPAL_EXPRESS, PAYPAL_EXPRESS_CREDIT, PURCHASE_ORDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLARNA", function() { return KLARNA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_MONEY", function() { return CHECK_MONEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYPAL_EXPRESS", function() { return PAYPAL_EXPRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYPAL_EXPRESS_CREDIT", function() { return PAYPAL_EXPRESS_CREDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_ORDER", function() { return PURCHASE_ORDER; });
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
const KLARNA = 'klarna_kp';
const CHECK_MONEY = 'checkmo';
const PAYPAL_EXPRESS = 'paypal_express';
const PAYPAL_EXPRESS_CREDIT = 'paypal_express_bml';
const PURCHASE_ORDER = 'purchaseorder';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.container.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.container.js ***!
  \********************************************************************************************************/
/*! exports provided: mapDispatchToProps, mapStateToProps, CheckoutPaymentsContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPaymentsContainer", function() { return CheckoutPaymentsContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Klarna_Klarna_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Klarna/Klarna.container */ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.container.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Checkout.type */ "./node_modules/@scandipwa/scandipwa/src/type/Checkout.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _CheckoutPayments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckoutPayments.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.component.js");
/* harmony import */ var _CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckoutPayments.config */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.container.js";

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











/** #namespace Component/CheckoutPayments/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showError: function (message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])('error', message));
    }
  };
}, "Component/CheckoutPayments/Container/mapDispatchToProps");
/** #namespace Component/CheckoutPayments/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    totals: state.CartReducer.cartTotals,
    email: state.CheckoutReducer.email
  };
}, "Component/CheckoutPayments/Container/mapStateToProps");
/** #namespace Component/CheckoutPayments/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutPaymentsContainer = Mosaic.middleware((_class = class CheckoutPaymentsContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      selectPaymentMethod: this.selectPaymentMethod.bind(this)
    };
    this.state = {
      selectedPaymentCode: ''
    };
    this.dataMap = {
      [_CheckoutPayments_config__WEBPACK_IMPORTED_MODULE_10__["KLARNA"]]: this.getKlarnaData.bind(this)
    };
  }

  __construct(props) {
    super.__construct(props);
  }

  componentDidMount() {
    if (window.formPortalCollector) {
      window.formPortalCollector.subscribe(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__["BILLING_STEP"], this.collectAdditionalData, 'CheckoutPaymentsContainer');
    }
  }

  componentWillUnmount() {
    if (window.formPortalCollector) {
      window.formPortalCollector.unsubscribe(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__["BILLING_STEP"], 'CheckoutPaymentsContainer');
    }
  }

  containerProps() {
    const {
      billingAddress,
      paymentMethods,
      setOrderButtonEnableStatus,
      showError
    } = this.props;
    const {
      selectedPaymentCode
    } = this.state;
    return {
      billingAddress,
      paymentMethods,
      selectedPaymentCode,
      setOrderButtonEnableStatus,
      showError
    };
  }

  getKlarnaData() {
    return {
      asyncData: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Klarna_Klarna_container__WEBPACK_IMPORTED_MODULE_3__["KlarnaContainer"].authorize()
    };
  }

  collectAdditionalData() {
    const {
      selectedPaymentCode
    } = this.state;
    const additionalDataGetter = this.dataMap[selectedPaymentCode];

    if (!additionalDataGetter) {
      return {};
    }

    return additionalDataGetter();
  }

  selectPaymentMethod(_ref) {
    let {
      code
    } = _ref;
    const {
      onPaymentMethodSelect,
      setOrderButtonEnableStatus
    } = this.props;
    this.setState({
      selectedPaymentCode: code
    });
    onPaymentMethodSelect(code);
    setOrderButtonEnableStatus(true);
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CheckoutPayments_component__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  onPaymentMethodSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setOrderButtonEnableStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  paymentMethods: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Checkout_type__WEBPACK_IMPORTED_MODULE_7__["PaymentMethodsType"].isRequired,
  totals: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_8__["TotalsType"].isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  billingAddress: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_6__["Addresstype"].isRequired,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/CheckoutPayments/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutPaymentsContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutPayments_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutPayments.container */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutPayments/CheckoutPayments.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutPayments_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.component.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.component.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: CheckoutTermsAndConditionsPopup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutTermsAndConditionsPopup", function() { return CheckoutTermsAndConditionsPopup; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Html */ "./node_modules/@scandipwa/scandipwa/src/component/Html/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Popup */ "./node_modules/@scandipwa/scandipwa/src/component/Popup/index.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.config */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.style */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.style.scss");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CheckoutTermsAndConditionsPopup_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.component.js";

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






/** #namespace Component/CheckoutTermsAndConditionsPopup/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutTermsAndConditionsPopup = Mosaic.middleware((_class = class CheckoutTermsAndConditionsPopup_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderContent() {
    const {
      payload: {
        text = 'No text was passed'
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: _CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__["TERMS_AND_CONDITIONS_POPUP_ID"],
      clickOutside: false,
      mix: {
        block: 'CheckoutTermsAndConditionsPopup'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, this.renderContent());
  }

}, _class.propTypes = {
  payload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }).isRequired
}, _class), "Component/CheckoutTermsAndConditionsPopup/Component");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutTermsAndConditionsPopup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: TERMS_AND_CONDITIONS_POPUP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMS_AND_CONDITIONS_POPUP_ID", function() { return TERMS_AND_CONDITIONS_POPUP_ID; });
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
const TERMS_AND_CONDITIONS_POPUP_ID = 'CheckoutTermsAndConditionsPopup';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.container.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.container.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, CheckoutTermsAndConditionsPopupContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutTermsAndConditionsPopupContainer", function() { return CheckoutTermsAndConditionsPopupContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.component */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.component.js");
/* harmony import */ var _CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.config */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.container.js";

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





/** #namespace Component/CheckoutTermsAndConditionsPopup/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    payload: state.PopupReducer.popupPayload[_CheckoutTermsAndConditionsPopup_config__WEBPACK_IMPORTED_MODULE_4__["TERMS_AND_CONDITIONS_POPUP_ID"]] || {}
  };
}, "Component/CheckoutTermsAndConditionsPopup/Container/mapStateToProps");
/** #namespace Component/CheckoutTermsAndConditionsPopup/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/CheckoutTermsAndConditionsPopup/Container/mapDispatchToProps");
/** #namespace Component/CheckoutTermsAndConditionsPopup/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CheckoutTermsAndConditionsPopupContainer = Mosaic.middleware((_class = class CheckoutTermsAndConditionsPopupContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      payload
    } = this.props;
    return {
      payload
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CheckoutTermsAndConditionsPopup_component__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  payload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })
}, _class.defaultProps = {
  payload: {
    text: ''
  }
}, _class), "Component/CheckoutTermsAndConditionsPopup/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CheckoutTermsAndConditionsPopupContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutTermsAndConditionsPopup_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutTermsAndConditionsPopup.container */ "./node_modules/@scandipwa/scandipwa/src/component/CheckoutTermsAndConditionsPopup/CheckoutTermsAndConditionsPopup.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CheckoutTermsAndConditionsPopup_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/KeyValueTable.component.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/KeyValueTable.component.js ***!
  \**************************************************************************************************/
/*! exports provided: KeyValueTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueTable", function() { return KeyValueTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_RadioButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/RadioButtonIcon */ "./node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/index.js");
/* harmony import */ var _KeyValueTable_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyValueTable.style */ "./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/KeyValueTable.style.scss");
/* harmony import */ var _KeyValueTable_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_KeyValueTable_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/KeyValueTable.component.js";

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




/** #namespace Component/KeyValueTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const KeyValueTable = Mosaic.middleware((_class = class KeyValueTable_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  get dataPairArray() {
    return [
      /**
       * {
       *     key: 'id',
       *     label': 'Identifier',
       *     source: customer
       * }
       */
    ];
  }

  getValueFromSource(_ref) {
    let {
      key,
      source
    } = _ref;
    const {
      [key]: value
    } = source;
    return Array.isArray(value) ? value.join(', ') : value;
  }

  renderTableRow(data) {
    const {
      key,
      label
    } = data;
    const value = this.getValueFromSource(data);

    if (!value) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "tr", {
      key: key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, label), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, value));
  }

  renderHeading() {
    const {
      title,
      isSelected
    } = this.props;

    if (!title) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "th", {
      block: "KeyValueTable",
      elem: "Heading",
      colSpan: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, title, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_RadioButtonIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isActive: isSelected,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    })));
  }

  renderTable() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "KeyValueTable",
      elem: "Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "table", {
      block: "KeyValueTable",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, this.renderHeading()), /*#__PURE__*/_checkBEM(React, "tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, this.dataPairArray.map(this.renderTableRow.bind(this)))));
  }

  render() {
    return this.renderTable();
  }

}, _class.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  title: '',
  isSelected: false
}, _class), "Component/KeyValueTable/Component");
/* harmony default export */ __webpack_exports__["default"] = (KeyValueTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeyValueTable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyValueTable.component */ "./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/KeyValueTable.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _KeyValueTable_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.component.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.component.js ***!
  \************************************************************************************/
/*! exports provided: CartDispatcher, Klarna, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDispatcher", function() { return CartDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Klarna", function() { return Klarna; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_Klarna_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/query/Klarna.query */ "./node_modules/@scandipwa/scandipwa/src/query/Klarna.query.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Cart */ "./node_modules/@scandipwa/scandipwa/src/util/Cart/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Request */ "./node_modules/@scandipwa/scandipwa/src/util/Request/index.js");
/* harmony import */ var _Klarna_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Klarna.config */ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.config.js");
/* harmony import */ var _Klarna_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Klarna.style */ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.style.scss");
/* harmony import */ var _Klarna_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Klarna_style__WEBPACK_IMPORTED_MODULE_9__);


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.component.js";

/* eslint-disable no-console */

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
/** #namespace Component/Klarna/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Klarna = Mosaic.middleware((_class = class Klarna_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isLoading: true,
      canShowPaymentSelector: true,
      paymentIsShown: false
    };
  }

  componentWillUnmount() {
    const {
      paymentIsShown
    } = this.state;

    if (paymentIsShown) {
      const klarnaDOM = document.getElementById(_Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_PAYMENTS_DEVICE_RECOGNITION_ID"]);

      if (klarnaDOM) {
        klarnaDOM.remove();
      }
    }
  }

  initiateKlarna() {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        showError,
        setOrderButtonEnableStatus
      } = _this.props;
      const cart_id = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_6__["getCartId"])();

      try {
        setOrderButtonEnableStatus(false);
        const {
          klarnaToken: client_token
        } = yield Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_7__["fetchMutation"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_Klarna_query__WEBPACK_IMPORTED_MODULE_4__["default"].getCreateKlarnaTokenMutation(!Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_5__["isSignedIn"])() ? {
          cart_id
        } : {}));
        window.Klarna.Payments.init({
          client_token
        });
        window.Klarna.Payments.load({
          container: `#${_Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_PAYMENTS_CONTAINER_ID"]}`,
          payment_method_category: localStorage.getItem('kl_pm')
        });
        setOrderButtonEnableStatus(true);
      } catch (err) {
        console.groupCollapsed('Suppressed error log:');
        console.error(err);
        console.groupEnd();
        showError(__('Error initializing Klarna payment method.'));
      }

      _this.setState({
        isLoading: false
      });
    })();
  }

  renderScript() {
    window.klarnaAsyncCallback = this.initiateKlarna.bind(this);
    const script = document.getElementById(_Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_SCRIPT_ID"]);

    if (script) {
      script.parentNode.removeChild(script);
    }

    const klarnaScript = document.createElement('script');
    klarnaScript.setAttribute('id', _Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_SCRIPT_ID"]);
    klarnaScript.setAttribute('src', 'https://x.klarnacdn.net/kp/lib/v1/api.js');
    klarnaScript.async = true;
    document.head.appendChild(klarnaScript);
    this.setState({
      paymentIsShown: true
    });
  }

  loadPaymentMethod(method) {
    this.setState({
      isLoading: true,
      canShowPaymentSelector: false
    });
    localStorage.setItem('kl_pm', method);
    this.renderScript();
  }

  loadPaymentMethodPayLater() {
    this.loadPaymentMethod('pay_later');
  }

  loadPaymentMethodPayNow() {
    this.loadPaymentMethod('pay_now');
  }

  loadPaymentMethodPayOverTime() {
    this.loadPaymentMethod('pay_over_time');
  }

  renderPaymentSelector() {
    const {
      canShowPaymentSelector
    } = this.state;

    if (!canShowPaymentSelector) {
      return null;
    }

    const {
      setOrderButtonEnableStatus
    } = this.props;
    this.setState({
      isLoading: false
    });
    setOrderButtonEnableStatus(false);
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Klarna-PaymentSelector",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      onClick: this.loadPaymentMethodPayLater,
      block: "Button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __('Pay later')), /*#__PURE__*/_checkBEM(React, "button", {
      onClick: this.loadPaymentMethodPayNow,
      block: "Button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, __('Pay now')), /*#__PURE__*/_checkBEM(React, "button", {
      onClick: this.loadPaymentMethodPayOverTime,
      block: "Button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, __('Pay over time')));
  }

  render() {
    const {
      isLoading
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Klarna",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }), this.renderPaymentSelector(), /*#__PURE__*/_checkBEM(React, "div", {
      id: _Klarna_config__WEBPACK_IMPORTED_MODULE_8__["KLARNA_PAYMENTS_CONTAINER_ID"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  showError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setOrderButtonEnableStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
}, _class), "Component/Klarna/Component");
/* harmony default export */ __webpack_exports__["default"] = (Klarna);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.config.js ***!
  \*********************************************************************************/
/*! exports provided: KLARNA_SCRIPT_ID, KLARNA_PAYMENTS_CONTAINER_ID, KLARNA_PAYMENTS_DEVICE_RECOGNITION_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLARNA_SCRIPT_ID", function() { return KLARNA_SCRIPT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLARNA_PAYMENTS_CONTAINER_ID", function() { return KLARNA_PAYMENTS_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KLARNA_PAYMENTS_DEVICE_RECOGNITION_ID", function() { return KLARNA_PAYMENTS_DEVICE_RECOGNITION_ID; });
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
const KLARNA_SCRIPT_ID = 'klarna_script';
const KLARNA_PAYMENTS_CONTAINER_ID = 'klarna-payments-container';
const KLARNA_PAYMENTS_DEVICE_RECOGNITION_ID = 'klarna-payments-device-recognition';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.container.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.container.js ***!
  \************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, KlarnaContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlarnaContainer", function() { return KlarnaContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Klarna_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Klarna.component */ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.container.js";

/* eslint-disable no-undef */

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





/** #namespace Component/Klarna/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function () {
  return {};
}, "Component/Klarna/Container/mapStateToProps");
/** #namespace Component/Klarna/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showError: function (message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__["showNotification"])('error', message));
    }
  };
}, "Component/Klarna/Container/mapDispatchToProps");
/** #namespace Component/Klarna/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const KlarnaContainer = Mosaic.middleware((_class = class KlarnaContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  static authorize() {
    return new Promise(function (resolve, reject) {
      window.Klarna.Payments.authorize({
        payment_method_category: localStorage.getItem('kl_pm')
      }, {}, function (res) {
        const {
          error,
          approved,
          authorization_token
        } = res;

        if (!approved) {
          reject(error);
        }

        resolve({
          authorization_token
        });
      });
    });
  }

  containerProps() {
    const {
      showError,
      setOrderButtonEnableStatus
    } = this.props;
    return {
      showError,
      setOrderButtonEnableStatus
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Klarna_component__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 16
      }
    }));
  }

}, _class.propTypes = {
  showError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setOrderButtonEnableStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/Klarna/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(KlarnaContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Klarna/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Klarna_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Klarna.container */ "./node_modules/@scandipwa/scandipwa/src/component/Klarna/Klarna.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Klarna_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.component.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.component.js ***!
  \****************************************************************************************************************/
/*! exports provided: MyAccountAddressForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountAddressForm", function() { return MyAccountAddressForm; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/FieldForm */ "./node_modules/@scandipwa/scandipwa/src/component/FieldForm/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Config.type */ "./node_modules/@scandipwa/scandipwa/src/type/Config.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Address */ "./node_modules/@scandipwa/scandipwa/src/util/Address/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Form/Transform */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js");
/* harmony import */ var _MyAccountAddressForm_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyAccountAddressForm.form */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.form.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.component.js";

/* eslint-disable spaced-comment */

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








/** #namespace Component/MyAccountAddressForm/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountAddressForm = Mosaic.middleware((_class = class MyAccountAddressForm_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldForm__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  //#region GETTERS
  get fieldMap() {
    const {
      address,
      countries,
      addressLinesQty,
      regionDisplayAll,
      showVatNumber,
      defaultCountry,
      availableRegions,
      isStateRequired,
      countryId,
      currentRegion,
      currentCity,
      currentRegionId,
      currentZipcode,
      onCountryChange,
      onZipcodeChange,
      onCityChange,
      onRegionChange,
      onRegionIdChange
    } = this.props;
    return Object(_MyAccountAddressForm_form__WEBPACK_IMPORTED_MODULE_7__["default"])({
      address,
      countries,
      addressLinesQty,
      regionDisplayAll,
      showVatNumber,
      defaultCountry,
      availableRegions,
      isStateRequired,
      countryId,
      currentRegion,
      currentCity,
      currentRegionId,
      currentZipcode,
      ...address
    }, {
      onCountryChange,
      onZipcodeChange,
      onCityChange,
      onRegionChange,
      onRegionIdChange
    });
  }

  getFormProps() {
    return {
      onSubmit: this.onSubmit.bind(this)
    };
  }
  /**
   * Creates / Updates address from entered data
   * @param form
   * @param fields
   */


  onSubmit(form, fields) {
    const {
      onSave,
      addressLinesQty
    } = this.props;
    const newAddress = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_6__["default"])(fields); // Joins streets into one variable

    if (addressLinesQty > 1) {
      newAddress.street = []; // eslint-disable-next-line fp/no-loops,fp/no-let

      for (let i = 0; i < addressLinesQty; i++) {
        if (newAddress[`street_${i}`]) {
          newAddress.street.push(newAddress[`street_${i}`]);
        }
      }
    } // Fixes region variable format


    const {
      region_id = 0,
      region_string: region
    } = newAddress;
    newAddress.region = {
      region_id: +region_id,
      region
    }; // Filters out non-required options and save address

    onSave(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_5__["trimCustomerAddress"])(newAddress));
  } //#region RENDERERS


  renderActions() {
    return /*#__PURE__*/_checkBEM(React, "button", {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["default"].submit,
      block: "Button",
      mix: {
        block: 'MyAccount',
        elem: 'Button'
      },
      mods: {
        isHollow: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, __('Save address'));
  } //#endregion


}, _class.propTypes = {
  address: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__["Addresstype"].isRequired,
  countries: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_4__["CountriesType"].isRequired,
  defaultCountry: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  addressLinesQty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  showVatNumber: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  regionDisplayAll: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onCountryChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onZipcodeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCityChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onRegionChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onRegionIdChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  countryId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isStateRequired: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  currentCity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  currentRegion: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  currentZipcode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  currentRegionId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}, _class.defaultProps = {
  currentZipcode: null,
  currentCity: null,
  currentRegion: null,
  currentRegionId: null,
  isStateRequired: false
}, _class), "Component/MyAccountAddressForm/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountAddressForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.config.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.config.js ***!
  \*************************************************************************************************************/
/*! exports provided: UPDATE_ZIPCODE_FREQUENCY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ZIPCODE_FREQUENCY", function() { return UPDATE_ZIPCODE_FREQUENCY; });
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
const UPDATE_ZIPCODE_FREQUENCY = 500;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.container.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.container.js ***!
  \****************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountAddressFormContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, PureComponent, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountAddressFormContainer", function() { return MyAccountAddressFormContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Config.type */ "./node_modules/@scandipwa/scandipwa/src/type/Config.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Address */ "./node_modules/@scandipwa/scandipwa/src/util/Address/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Request */ "./node_modules/@scandipwa/scandipwa/src/util/Request/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store_Transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Store/Transform */ "./node_modules/@scandipwa/scandipwa/src/util/Store/Transform.js");
/* harmony import */ var _MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyAccountAddressForm.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.component.js");
/* harmony import */ var _MyAccountAddressForm_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyAccountAddressForm.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.config.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.container.js";

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









/** #namespace Component/MyAccountAddressForm/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    countries: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store_Transform__WEBPACK_IMPORTED_MODULE_7__["default"])(state.ConfigReducer.countries || []),
    defaultCountry: state.ConfigReducer.default_country,
    addressLinesQty: state.ConfigReducer.address_lines_quantity,
    showVatNumber: state.ConfigReducer.show_vat_number_on_storefront,
    regionDisplayAll: state.ConfigReducer.region_display_all
  };
}, "Component/MyAccountAddressForm/Container/mapStateToProps");
/** #namespace Component/MyAccountAddressForm/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountAddressForm/Container/mapDispatchToProps");
/** #namespace Component/MyAccountAddressForm/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountAddressFormContainer = Mosaic.middleware((_class = class MyAccountAddressFormContainer_ extends Mosaic.Extensible(PureComponent) {
  constructor() {
    var _this$getCountry, _this$getCountry2;

    super(...arguments);
    this.state = {
      countryId: ((_this$getCountry = this.getCountry()) === null || _this$getCountry === void 0 ? void 0 : _this$getCountry.value) || 'US',
      availableRegions: this.getAvailableRegions() || [],
      isStateRequired: !!((_this$getCountry2 = this.getCountry()) === null || _this$getCountry2 === void 0 ? void 0 : _this$getCountry2.is_state_required),
      currentCity: this.getCurrentAddress().city,
      currentRegion: this.getCurrentAddress().region,
      currentZipcode: this.getCurrentAddress().postcode,
      currentRegionId: this.getCurrentAddress().regionId
    };
    this.containerFunctions = {
      onCountryChange: this.onCountryChange.bind(this),
      onZipcodeChange: this.onZipcodeChange.bind(this),
      onCityChange: this.onCityChange.bind(this),
      onRegionChange: this.onRegionChange.bind(this),
      onRegionIdChange: this.onRegionIdChange.bind(this)
    };
  }

  containerProps() {
    const {
      address,
      countries,
      defaultCountry,
      addressLinesQty,
      showVatNumber,
      regionDisplayAll,
      onSave
    } = this.props;
    const {
      countryId,
      availableRegions,
      isStateRequired,
      currentCity,
      currentRegion,
      currentZipcode,
      currentRegionId
    } = this.state;
    return {
      address,
      countries,
      defaultCountry,
      addressLinesQty,
      showVatNumber,
      regionDisplayAll,
      countryId,
      availableRegions,
      isStateRequired,
      onSave,
      currentCity,
      currentRegion,
      currentZipcode,
      currentRegionId
    };
  } // #region GETTERS


  getCountry() {
    let countryId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    const {
      countries,
      defaultCountry,
      address: {
        country_id: countryIdAddress
      } = {}
    } = this.props;
    const countryIdFixed = countryId || countryIdAddress || defaultCountry;
    return countries.find(function (_ref) {
      let {
        value
      } = _ref;
      return value === countryIdFixed;
    });
  }

  getCurrentAddress() {
    const {
      address,
      address: {
        id: addressId
      }
    } = this.props;

    if (!addressId) {
      return {
        region: '',
        regionId: 1,
        zipCode: '',
        city: ''
      };
    }

    const {
      region: {
        region,
        region_id: regionId
      },
      postcode,
      city
    } = address;
    return {
      region,
      regionId,
      postcode,
      city
    };
  }
  /**
   * Returns available regions based on country and zip
   * @param countryId
   * @param zipCode
   * @returns {Promise<[*, *]|null[]|*>}
   */


  getAvailableRegions() {
    let countryId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let zipCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const {
      countries,
      defaultCountry
    } = this.props;
    const {
      value: currCountryId = defaultCountry
    } = this.getCountry(countryId) || {};
    return !zipCode ? Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_5__["getAvailableRegions"])(currCountryId, countries) : this.handleSetCityAndRegionDependingOnZipcode(countryId, zipCode);
  } // #endregion
  // #region EVENTS


  onCityChange(field) {
    this.setState({
      currentCity: field.target.value
    });
  }

  onRegionChange(field) {
    this.setState({
      currentRegion: field.target.value
    });
  }

  onRegionIdChange(field) {
    this.setState({
      currentRegionId: field
    });
  }

  onCountryChange(field, e) {
    // Handles auto fill
    const fieldValue = typeof field === 'object' ? e.value : field;
    const {
      currentZipcode
    } = this.state;
    const {
      countries
    } = this.props;
    const country = countries.find(function (_ref2) {
      let {
        value
      } = _ref2;
      return value === fieldValue;
    });

    if (!country) {
      this.setState({
        currentRegion: '',
        currentRegionId: 1,
        countryId: '',
        availableRegions: []
      });
      return;
    }

    const {
      available_regions: availableRegions = [],
      is_state_required: isStateRequired = true,
      value: countryId
    } = country;
    this.getAvailableRegions(countryId, currentZipcode);
    this.setState({
      availableRegions,
      isStateRequired: isStateRequired || false,
      countryId,
      currentRegionId: 1,
      currentRegion: ''
    });
  }

  onZipcodeChange(event, field) {
    const {
      value: zipCode = ''
    } = field || {};
    const {
      countryId
    } = this.state;
    this.setState({
      currentZipcode: zipCode
    });
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_6__["debounce"])(this.getAvailableRegions(countryId, zipCode), _MyAccountAddressForm_config__WEBPACK_IMPORTED_MODULE_9__["UPDATE_ZIPCODE_FREQUENCY"]);
  }

  handleSetCityAndRegionDependingOnZipcode(countryId, zipCode) {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        availableRegions = []
      } = _this.state;
      const cityAndRegion = yield Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_5__["getCityAndRegionFromZipcode"])(countryId, zipCode);

      if (!cityAndRegion) {
        return;
      }

      const {
        city,
        region
      } = cityAndRegion;

      if (availableRegions && availableRegions.length) {
        _this.setState({
          currentCity: city,
          currentRegionId: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_5__["getRegionIdFromAvailableRegions"])(availableRegions, cityAndRegion),
          currentRegion: ''
        });
      } else {
        _this.setState({
          currentCity: city,
          currentRegion: region,
          currentRegionId: 1
        });
      }
    })();
  } // #endregion


  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountAddressForm_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  address: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__["Addresstype"].isRequired,
  countries: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_4__["CountriesType"].isRequired,
  defaultCountry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  addressLinesQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  showVatNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  regionDisplayAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
}, _class.defaultProps = {
  defaultCountry: 'US'
}, _class), "Component/MyAccountAddressForm/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountAddressFormContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")["PureComponent"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.form.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressForm/MyAccountAddressForm.form.js ***!
  \***********************************************************************************************************/
/*! exports provided: getStreetFields, getRegionFields, getVatFields, myAccountAddressForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreetFields", function() { return getStreetFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegionFields", function() { return getRegionFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVatFields", function() { return getVatFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAccountAddressForm", function() { return myAccountAddressForm; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/util/Validator/Config */ "./node_modules/@scandipwa/scandipwa/src/util/Validator/Config.js");
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
 * Returns fields for street
 * @param props
 * @returns {[{addRequiredTag: boolean, validateOn: string[], validationRule: {isRequired: boolean}, label: *, type: string, attr: {defaultValue: (*|string), name: string, placeholder: *}}]|*[]}
 * #namespace Component/MyAccountAddressForm/Form/getStreetFields */

const getStreetFields = Mosaic.middleware(function (props) {
  const {
    addressLinesQty = 1,
    address: {
      street = []
    }
  } = props;

  if (addressLinesQty === 1) {
    return [{
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
      label: __('Street address'),
      attr: {
        name: 'street',
        defaultValue: street[0] || '',
        placeholder: __('Your street address')
      },
      addRequiredTag: true,
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true
      }
    }];
  }

  const streets = []; // eslint-disable-next-line fp/no-loops, fp/no-let

  for (let i = 0; i < addressLinesQty; i++) {
    streets.push({
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
      label: __('Street address line %s', i + 1),
      attr: {
        name: `street_${i}`,
        defaultValue: street[i] || '',
        placeholder: __('Your street address line %s', i + 1)
      },
      addRequiredTag: i === 0,
      validateOn: i === 0 ? ['onChange'] : [],
      validationRule: {
        isRequired: i === 0
      }
    });
  }

  return streets;
}, "Component/MyAccountAddressForm/Form/getStreetFields");
/**
 * Returns region fields
 * @param props
 * @param events
 * @returns {[{addRequiredTag: boolean, validateOn: (string[]|*[]), validationRule: {isRequired}, options, label: *, type: string, attr: {defaultValue: number, name: string, selectPlaceholder: *}}]|*[]|[{validateOn: (string[]|*[]), validationRule: {isRequired}, label: *, type: string, attr: {defaultValue, name: string, id: string, placeholder: *}}]}
 * #namespace Component/MyAccountAddressForm/Form/getRegionFields
 */

const getRegionFields = Mosaic.middleware(function (props, events) {
  const {
    currentRegion,
    currentRegionId,
    regionDisplayAll,
    availableRegions,
    isStateRequired
  } = props;
  const {
    onRegionChange,
    onRegionIdChange
  } = events;

  if (!regionDisplayAll && !isStateRequired) {
    return [];
  }

  if (!availableRegions || !availableRegions.length) {
    return [{
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
      label: __('State / Province'),
      attr: {
        id: 'address-region-id',
        name: 'region_string',
        value: currentRegion,
        placeholder: __('Your state / province')
      },
      events: {
        onChange: onRegionChange
      },
      addRequiredTag: isStateRequired,
      validateOn: isStateRequired ? ['onChange'] : [],
      validationRule: {
        isRequired: isStateRequired
      }
    }];
  }

  return [{
    type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].select,
    label: __('State / Province'),
    attr: {
      name: 'region_id',
      value: currentRegionId,
      selectPlaceholder: __('Select region...')
    },
    events: {
      onChange: onRegionIdChange
    },
    options: availableRegions.map(function (_ref) {
      let {
        id,
        name
      } = _ref;
      return {
        id,
        label: name,
        value: id
      };
    }),
    addRequiredTag: isStateRequired,
    validateOn: isStateRequired ? ['onChange'] : [],
    validationRule: {
      isRequired: isStateRequired
    }
  }];
}, "Component/MyAccountAddressForm/Form/getRegionFields");
/**
 * Returns VAT fields
 * @param props
 * @returns {*[]|[{label: *, type: string, attr: {defaultValue: string, name: string}}]}
 * #namespace Component/MyAccountAddressForm/Form/getVatFields */

const getVatFields = Mosaic.middleware(function (props) {
  const {
    showVatNumber,
    vat_id: vatID = ''
  } = props;

  if (!showVatNumber) {
    return [];
  }

  return [{
    type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
    label: __('VAT Number'),
    attr: {
      placeholder: __('Your VAT number'),
      name: 'vat_id',
      defaultValue: vatID
    },
    addRequiredTag: false,
    validateOn: ['onChange'],
    validationRule: {
      isRequired: false
    }
  }];
}, "Component/MyAccountAddressForm/Form/getVatFields");
/**
 * Returns address form fields
 * @param props
 * @param events
 * @returns {[{label: *, type: string, attr: {defaultChecked, name: string}}, {label: *, type: string, attr: {defaultChecked, name: string}}, {addRequiredTag: boolean, validateOn: string[], validationRule: {isRequired: boolean}, label: *, type: string, attr: {defaultValue: string, name: string, placeholder: *}}, {addRequiredTag: boolean, validateOn: string[], validationRule: {isRequired: boolean}, label: *, type: string, attr: {defaultValue: string, name: string, placeholder: *}}, {mods: {street: boolean, multipleFields: boolean, oddAddresses: boolean}, name: string, fields: ({addRequiredTag: boolean, validateOn: string[], validationRule: {isRequired: boolean}, label: *, type: string, attr: {defaultValue: (*|string), name: string, placeholder: *}}[]|*[])}, null, ...*[]|{label: *, type: string, attr: {defaultValue: string, name: string}}[], null]}
 * #namespace Component/MyAccountAddressForm/Form/myAccountAddressForm */

const myAccountAddressForm = Mosaic.middleware(function (props) {
  let events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    default_billing: defaultBilling,
    default_shipping: defaultShipping,
    countryId,
    firstname = '',
    lastname = '',
    city = '',
    countries = [],
    postcode: zipcode = '',
    telephone = '',
    addressLinesQty = 1
  } = props;
  const {
    onCountryChange,
    onZipcodeChange,
    onCityChange
  } = events || {};
  return [{
    type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].checkbox,
    label: __('This is default Billing Address'),
    attr: {
      name: 'default_billing',
      defaultChecked: defaultBilling
    }
  }, {
    type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].checkbox,
    label: __('This is default Shipping Address'),
    attr: {
      name: 'default_shipping',
      defaultChecked: defaultShipping
    }
  }, {
    type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
    label: __('First name'),
    attr: {
      name: 'firstname',
      defaultValue: firstname,
      placeholder: __('Your first name')
    },
    addRequiredTag: true,
    validateOn: ['onChange'],
    validationRule: {
      isRequired: true
    }
  }, {
    type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
    label: __('Last name'),
    attr: {
      name: 'lastname',
      defaultValue: lastname,
      placeholder: __('Your last name')
    },
    addRequiredTag: true,
    validateOn: ['onChange'],
    validationRule: {
      isRequired: true
    }
  }, {
    name: 'streetGroup',
    mods: {
      street: true,
      multipleFields: addressLinesQty > 0,
      oddAddresses: addressLinesQty % 2 === 1
    },
    fields: getStreetFields(props)
  }, {
    name: 'addressGroup',
    mods: {
      address: true
    },
    fields: [{
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].select,
      label: __('Country'),
      attr: {
        id: 'address-country-id',
        name: 'country_id',
        defaultValue: countryId,
        selectPlaceholder: __('Select country...')
      },
      events: {
        onChange: onCountryChange
      },
      options: countries,
      addRequiredTag: true,
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true
      }
    }, ...getRegionFields(props, events), {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
      label: __('Zip / Postal code'),
      attr: {
        name: 'postcode',
        defaultValue: zipcode,
        placeholder: __('Your zip / postal code')
      },
      events: {
        onChange: onZipcodeChange
      },
      addRequiredTag: true,
      validateOn: ['onChange', 'onBlur'],
      validationRule: {
        isRequired: true
      }
    }, {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].text,
      label: __('City'),
      attr: {
        name: 'city',
        defaultValue: city,
        placeholder: __('Your city')
      },
      events: {
        onChange: onCityChange
      },
      addRequiredTag: true,
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true
      }
    }]
  }, ...getVatFields(props), {
    type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_0__["default"].tel,
    label: __('Phone number'),
    attr: {
      name: 'telephone',
      defaultValue: telephone,
      placeholder: __('Your phone number')
    },
    addRequiredTag: true,
    validateOn: ['onChange'],
    validationRule: {
      inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_1__["VALIDATION_INPUT_TYPE"].phone,
      isRequired: true
    }
  }];
}, "Component/MyAccountAddressForm/Form/myAccountAddressForm");
/* harmony default export */ __webpack_exports__["default"] = (myAccountAddressForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressPopup/MyAccountAddressPopup.config.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressPopup/MyAccountAddressPopup.config.js ***!
  \***************************************************************************************************************/
/*! exports provided: ADDRESS_POPUP_ID, EDIT_ADDRESS, DELETE_ADDRESS, ADD_ADDRESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_POPUP_ID", function() { return ADDRESS_POPUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_ADDRESS", function() { return EDIT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ADDRESS", function() { return DELETE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ADDRESS", function() { return ADD_ADDRESS; });
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
const ADDRESS_POPUP_ID = 'MyAccountAddressPopup';
const EDIT_ADDRESS = 'EDIT_ADDRESS';
const DELETE_ADDRESS = 'DELETE_ADDRESS';
const ADD_ADDRESS = 'ADD_ADDRESS';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.component.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.component.js ***!
  \******************************************************************************************************************/
/*! exports provided: MyAccountAddressTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountAddressTable", function() { return MyAccountAddressTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/KeyValueTable */ "./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _MyAccountAddressTable_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyAccountAddressTable.table */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.table.js");
/* harmony import */ var _MyAccountAddressTable_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyAccountAddressTable.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.style.scss");
/* harmony import */ var _MyAccountAddressTable_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MyAccountAddressTable_style__WEBPACK_IMPORTED_MODULE_6__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.component.js";

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







/** #namespace Component/MyAccountAddressTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountAddressTable = Mosaic.middleware((_class = class MyAccountAddressTable_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  get dataPairArray() {
    return Object(_MyAccountAddressTable_table__WEBPACK_IMPORTED_MODULE_5__["getAddressTablePairArray"])(this.props);
  }

  renderActions() {
    const {
      onEditClick,
      onDeleteClick,
      showActions,
      address: {
        default_billing,
        default_shipping
      }
    } = this.props;
    const isDeleteAllowed = default_shipping || default_billing;

    if (!showActions) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      onClick: onEditClick,
      mods: {
        isHollow: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __('Edit address')), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        isHollow: true,
        isWithoutBorder: true
      },
      onClick: onDeleteClick,
      disabled: isDeleteAllowed,
      title: isDeleteAllowed ? __('Can not delete - address is set as default.') : 'Delete this address',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __('Delete')));
  }

  render() {
    const {
      countries,
      mix
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountAddressTable",
      mix: mix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isLoading: !countries.length,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }), this.renderTable(), this.renderActions());
  }

}, _class.propTypes = {
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["MixType"].isRequired,
  address: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__["Addresstype"].isRequired,
  showActions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onEditClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onDeleteClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  countries: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    available_regions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
    }))
  })).isRequired
}, _class), "Component/MyAccountAddressTable/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountAddressTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.container.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.container.js ***!
  \******************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountAddressTableContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountAddressTableContainer", function() { return MyAccountAddressTableContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountAddressPopup/MyAccountAddressPopup.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressPopup/MyAccountAddressPopup.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/store/Popup/Popup.action */ "./node_modules/@scandipwa/scandipwa/src/store/Popup/Popup.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Config.type */ "./node_modules/@scandipwa/scandipwa/src/type/Config.type.js");
/* harmony import */ var _MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyAccountAddressTable.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.container.js";

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









/** #namespace Component/MyAccountAddressTable/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    countries: state.ConfigReducer.countries
  };
}, "Component/MyAccountAddressTable/Container/mapStateToProps");
/** #namespace Component/MyAccountAddressTable/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showEditPopup: function (payload) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_4__["showPopup"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__["ADDRESS_POPUP_ID"], payload));
    }
  };
}, "Component/MyAccountAddressTable/Container/mapDispatchToProps");
/** #namespace Component/MyAccountAddressTable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountAddressTableContainer = Mosaic.middleware((_class = class MyAccountAddressTableContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onEditClick: this.onEditClick.bind(this),
      onDeleteClick: this.onDeleteClick.bind(this)
    };
  }

  containerProps() {
    const {
      address,
      countries,
      mix,
      showActions,
      title
    } = this.props;
    return {
      address,
      countries,
      mix,
      showActions,
      title
    };
  }

  onEditClick() {
    const {
      showEditPopup,
      address
    } = this.props;
    showEditPopup({
      action: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__["EDIT_ADDRESS"],
      title: __('Edit address'),
      address
    });
  }

  onDeleteClick() {
    const {
      showEditPopup,
      address
    } = this.props;
    showEditPopup({
      action: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__["DELETE_ADDRESS"],
      title: __('Confirm delete'),
      address
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__["MixType"],
  address: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_5__["Addresstype"].isRequired,
  showEditPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  countries: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Config_type__WEBPACK_IMPORTED_MODULE_7__["CountriesType"].isRequired,
  showActions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, _class.defaultProps = {
  showActions: false,
  mix: {},
  title: ''
}, _class), "Component/MyAccountAddressTable/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountAddressTableContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.table.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.table.js ***!
  \**************************************************************************************************************/
/*! exports provided: getAddressTablePairArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressTablePairArray", function() { return getAddressTablePairArray; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/util/Address */ "./node_modules/@scandipwa/scandipwa/src/util/Address/index.js");
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

/** #namespace Component/MyAccountAddressTable/Table/getAddressTablePairArray */

const getAddressTablePairArray = Mosaic.middleware(function (props) {
  const {
    address,
    countries
  } = props;
  const regionData = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Address__WEBPACK_IMPORTED_MODULE_0__["getFormattedRegion"])(address, countries);
  const constructRegion = regionData.region ? `${address.city}, ${regionData.region}, ${address.postcode}` : `${address.city},  ${address.postcode}`;
  return [{
    key: 'firstname',
    label: __('First name'),
    source: address
  }, {
    key: 'lastname',
    label: __('Last name'),
    source: address
  }, {
    key: 'street',
    label: __('Street'),
    source: address
  }, {
    key: 'region',
    label: __('Region'),
    source: {
      region: constructRegion
    }
  }, {
    key: 'country',
    label: __('Country'),
    source: regionData
  }, {
    key: 'telephone',
    label: __('Phone number'),
    source: address
  }];
}, "Component/MyAccountAddressTable/Table/getAddressTablePairArray");
/* harmony default export */ __webpack_exports__["default"] = (getAddressTablePairArray);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/NotSupportedPayment.component.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/NotSupportedPayment.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: NotSupportedPayment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSupportedPayment", function() { return NotSupportedPayment; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NotSupportedPayment_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotSupportedPayment.style */ "./node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/NotSupportedPayment.style.scss");
/* harmony import */ var _NotSupportedPayment_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NotSupportedPayment_style__WEBPACK_IMPORTED_MODULE_2__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/NotSupportedPayment.component.js";

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



/** #namespace Component/NotSupportedPayment/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const NotSupportedPayment = Mosaic.middleware((_class = class NotSupportedPayment_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  componentDidMount() {
    const {
      disableButton
    } = this.props;
    disableButton();
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "NotSupportedPayment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, __('This payment method is not supported yet.')));
  }

}, _class.propTypes = {
  disableButton: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/NotSupportedPayment/Component");
/* harmony default export */ __webpack_exports__["default"] = (NotSupportedPayment);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotSupportedPayment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotSupportedPayment.component */ "./node_modules/@scandipwa/scandipwa/src/component/NotSupportedPayment/NotSupportedPayment.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotSupportedPayment_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.component.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.component.js ***!
  \************************************************************************************************/
/*! exports provided: Notification, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Html */ "./node_modules/@scandipwa/scandipwa/src/component/Html/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_NotificationList_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/NotificationList.type */ "./node_modules/@scandipwa/scandipwa/src/type/NotificationList.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _Notification_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Notification.config */ "./node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.config.js");
/* harmony import */ var _Notification_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notification.style */ "./node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.style.scss");
/* harmony import */ var _Notification_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Notification_style__WEBPACK_IMPORTED_MODULE_6__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.component.js";

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
 * Notification block
 * @class Notification
 * #namespace Component/Notification/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Notification = Mosaic.middleware((_class = class Notification_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isNotificationVisible: true
    };
    this.notification = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.hideNotification = this.hideNotification.bind(this);
  }

  componentDidMount() {
    var _this = this;

    const {
      notification: {
        msgType
      },
      lifeTime
    } = this.props; // Make sure error notification stays a little longer

    if (msgType.toLowerCase() === _Notification_config__WEBPACK_IMPORTED_MODULE_5__["ERROR_TYPE"]) {
      this.hideTimeout = setTimeout(function () {
        return _this.hideNotification();
      }, lifeTime || _Notification_config__WEBPACK_IMPORTED_MODULE_5__["ERROR_NOTIFICATION_LIFETIME"]);
    } else {
      this.hideTimeout = setTimeout(function () {
        return _this.hideNotification();
      }, lifeTime || _Notification_config__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_LIFETIME"]);
    }

    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_4__["default"].setVariable(this.notification, 'animation-duration', `${_Notification_config__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_DURATION"]}ms`);
  }

  componentWillUnmount() {
    // clear started timeouts, to assure we are not changing state of unmounted component
    clearTimeout(this.hideTimeout);
    clearTimeout(this.CSSHideTimeout);
  }
  /**
   * Remove notification from screen
   * @return {void
   */


  hideNotification() {
    const {
      onHideNotification,
      notificationId
    } = this.props;
    this.setState({
      isNotificationVisible: false
    }); // give CSS time to animate

    this.CSSHideTimeout = setTimeout(function () {
      onHideNotification(notificationId);
    }, _Notification_config__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_DURATION"]);
  }

  renderDebug() {
    const {
      notification: {
        msgDebug
      }
    } = this.props;

    if (!msgDebug) {
      return null;
    }

    if (false) {} // eslint-disable-next-line no-console


    console.warn(msgDebug); // so we know what was in notification

    return /*#__PURE__*/_checkBEM(React, "pre", {
      block: "Notification",
      elem: "Debug",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, JSON.stringify(msgDebug));
  }

  render() {
    const {
      notification,
      id
    } = this.props;
    const {
      isNotificationVisible
    } = this.state;
    const {
      msgText,
      msgType
    } = notification;
    const mods = {
      type: msgType.toLowerCase(),
      is: isNotificationVisible ? 'opening' : 'closing'
    };
    const message = msgText.value || msgText;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Notification",
      mods: mods,
      ref: this.notification,
      id: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "Notification",
      elem: "Button",
      onClick: this.hideNotification,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, " Close "), /*#__PURE__*/_checkBEM(React, "p", {
      block: "Notification",
      elem: "Text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: message,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    })), this.renderDebug());
  }

}, _class.propTypes = {
  notificationId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  notification: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_NotificationList_type__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].isRequired,
  onHideNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  lifeTime: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, _class.defaultProps = {
  lifeTime: 0,
  id: ''
}, _class), "Component/Notification/Component");
/* harmony default export */ __webpack_exports__["default"] = (Notification);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.config.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.config.js ***!
  \*********************************************************************************************/
/*! exports provided: ANIMATION_DURATION, NOTIFICATION_LIFETIME, ERROR_NOTIFICATION_LIFETIME, ERROR_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function() { return ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_LIFETIME", function() { return NOTIFICATION_LIFETIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_NOTIFICATION_LIFETIME", function() { return ERROR_NOTIFICATION_LIFETIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
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
// controls CSS animation speed
const ANIMATION_DURATION = 400;
const NOTIFICATION_LIFETIME = 1500;
const ERROR_NOTIFICATION_LIFETIME = 2500;
const ERROR_TYPE = 'error';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Notification/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Notification/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.component */ "./node_modules/@scandipwa/scandipwa/src/component/Notification/Notification.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Notification_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.component.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.component.js ***!
  \********************************************************************************************************/
/*! exports provided: NotificationList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationList", function() { return NotificationList; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Notification */ "./node_modules/@scandipwa/scandipwa/src/component/Notification/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_NotificationList_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/NotificationList.type */ "./node_modules/@scandipwa/scandipwa/src/type/NotificationList.type.js");
/* harmony import */ var _NotificationList_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationList.style */ "./node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.style.scss");
/* harmony import */ var _NotificationList_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NotificationList_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.component.js";

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
 * Notification List
 * @class NotificationList
 * #namespace Component/NotificationList/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const NotificationList = Mosaic.middleware((_class = class NotificationList_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    var _this = this;

    const {
      onHideNotification,
      notifications
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "NotificationList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, Object.keys(notifications).map(function (id) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: id,
        notificationId: id,
        notification: notifications[id],
        onHideNotification: onHideNotification,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      });
    }));
  }

}, _class.propTypes = {
  notifications: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_NotificationList_type__WEBPACK_IMPORTED_MODULE_3__["NotificationListType"].isRequired,
  onHideNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/NotificationList/Component");
/* harmony default export */ __webpack_exports__["default"] = (NotificationList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.container.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.container.js ***!
  \********************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/store/Notification/Notification.reducer */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.reducer.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_DynamicReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/DynamicReducer */ "./node_modules/@scandipwa/scandipwa/src/util/DynamicReducer/index.js");
/* harmony import */ var _NotificationList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationList.component */ "./node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.component.js");
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





/** #namespace Component/NotificationList/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    notifications: state.NotificationReducer.notifications
  };
}, "Component/NotificationList/Container/mapStateToProps");
/** #namespace Component/NotificationList/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    onHideNotification: function (id) {
      dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_1__["hideNotification"])(id));
    }
  };
}, "Component/NotificationList/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_DynamicReducer__WEBPACK_IMPORTED_MODULE_3__["withReducers"])({
  NotificationReducer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
})(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_NotificationList_component__WEBPACK_IMPORTED_MODULE_4__["default"])));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/NotificationList/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/NotificationList/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationList_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationList.container */ "./node_modules/@scandipwa/scandipwa/src/component/NotificationList/NotificationList.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotificationList_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.component.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.component.js ***!
  \**************************************************************************************/
/*! exports provided: Overlay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Browser */ "./node_modules/@scandipwa/scandipwa/src/util/Browser/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Overlay_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Overlay.style */ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.style.scss");
/* harmony import */ var _Overlay_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Overlay_style__WEBPACK_IMPORTED_MODULE_6__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.component.js";

/* eslint-disable react/no-unused-prop-types */

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







/** #namespace Component/Overlay/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Overlay = Mosaic.middleware((_class = class Overlay_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.overlayRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
  }

  componentDidUpdate(prevProps) {
    const prevWasVisible = this.getIsVisible(prevProps);
    const isVisible = this.getIsVisible();

    if (isVisible && !prevWasVisible) {
      this.onVisible();
    }

    if (!isVisible && prevWasVisible) {
      this.onHide();
    }
  }

  onVisible() {
    const {
      onVisible,
      isStatic,
      isMobile
    } = this.props;

    if (isStatic) {
      return;
    }

    if (isMobile) {
      this.freezeScroll();
    }

    this.overlayRef.current.focus();
    onVisible();
  }

  onHide() {
    const {
      onHide,
      isStatic,
      isMobile
    } = this.props;

    if (isStatic) {
      return;
    }

    if (isMobile) {
      this.unfreezeScroll();
    }

    onHide();
  }

  getIsVisible() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    const {
      id,
      activeOverlay,
      isStatic
    } = props;
    return isStatic || id === activeOverlay;
  }

  freezeScroll() {
    this.YoffsetWhenScrollDisabled = window.pageYOffset || document.body.scrollTop;
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_4__["toggleScroll"])(false);
    document.body.style.marginTop = `${-this.YoffsetWhenScrollDisabled}px`;
  }

  unfreezeScroll() {
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_4__["toggleScroll"])(true);
    document.body.style.marginTop = 0;
    window.scrollTo(0, this.YoffsetWhenScrollDisabled);
  }

  renderInMobilePortal(content) {
    const {
      isStatic,
      isRenderInPortal,
      isMobile
    } = this.props;

    if (!isStatic && isMobile && isRenderInPortal) {
      return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(content, document.body);
    }

    return content;
  }

  render() {
    const {
      children,
      mix,
      areOtherOverlaysOpen,
      isStatic
    } = this.props;
    const isVisible = this.getIsVisible();
    return this.renderInMobilePortal( /*#__PURE__*/_checkBEM(React, "div", {
      block: "Overlay",
      ref: this.overlayRef,
      mods: {
        isVisible,
        isStatic,
        isInstant: areOtherOverlaysOpen
      },
      mix: { ...mix,
        mods: { ...mix.mods,
          isVisible
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, children && children));
  }

}, _class.propTypes = {
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["MixType"],
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  activeOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  areOtherOverlaysOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isStatic: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isRenderInPortal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["ChildrenType"],
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class.defaultProps = {
  mix: {},
  children: [],
  onVisible: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_5__["noopFn"],
  isStatic: false,
  onHide: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_5__["noopFn"],
  isRenderInPortal: true
}, _class), "Component/Overlay/Component");
/* harmony default export */ __webpack_exports__["default"] = (Overlay);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.component.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.component.js ***!
  \**********************************************************************************/
/*! exports provided: Popup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ClickOutside */ "./node_modules/@scandipwa/scandipwa/src/component/ClickOutside/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CloseIcon */ "./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_NotificationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/NotificationList */ "./node_modules/@scandipwa/scandipwa/src/component/NotificationList/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay_Overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Overlay/Overlay.component */ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Popup_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Popup.config */ "./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.config.js");
/* harmony import */ var _Popup_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Popup.style */ "./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.style.scss");
/* harmony import */ var _Popup_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Popup_style__WEBPACK_IMPORTED_MODULE_8__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.component.js";

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









/** #namespace Component/Popup/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Popup = Mosaic.middleware((_class = class Popup_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay_Overlay_component__WEBPACK_IMPORTED_MODULE_5__["default"]) {
  constructor() {
    super(...arguments);
    this.hidePopUp = this.hidePopUp.bind(this);
    this.hidePopupAndGoBack = this.hidePopupAndGoBack.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentDidUpdate(prevProps) {
    const {
      shouldPopupClose,
      resetHideActivePopup
    } = this.props;
    const {
      shouldPopupClose: prevShouldPopupClose
    } = prevProps;

    if (shouldPopupClose && shouldPopupClose !== prevShouldPopupClose) {
      this.hidePopUp();
      resetHideActivePopup();
    }

    super.componentDidUpdate(prevProps);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  onVisible() {
    const {
      onVisible
    } = this.props;
    this.freezeScroll();
    this.overlayRef.current.focus();
    window.addEventListener('popstate', this.hidePopUp);
    window.history.pushState({
      popupOpen: true
    }, '', `${location.pathname}${location.search}${location.hash}`);
    onVisible();
  }

  onHide() {
    const {
      onHide
    } = this.props;
    window.removeEventListener('popstate', this.hidePopUp);
    this.unfreezeScroll();
    onHide();
  }

  hidePopUp() {
    const {
      hideActiveOverlay,
      goToPreviousNavigationState,
      onClose
    } = this.props;
    const isVisible = this.getIsVisible();

    if (isVisible) {
      this.unfreezeScroll();
      hideActiveOverlay();
      goToPreviousNavigationState();
      onClose();
    }
  }

  hidePopupAndGoBack() {
    this.hidePopUp();
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_6__["default"].goBack();
  } // Same with click outside


  handleClickOutside() {
    const {
      clickOutside,
      isMobile
    } = this.props;

    if (!clickOutside) {
      return;
    }

    if (isMobile) {
      return;
    }

    this.hidePopupAndGoBack();
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case _Popup_config__WEBPACK_IMPORTED_MODULE_7__["ESCAPE_KEY"]:
        this.hidePopupAndGoBack();
        break;

      default:
        break;
    }
  }

  renderTitle() {
    const {
      title
    } = this.props;

    if (!title) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "h3", {
      block: "Popup",
      elem: "Heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, title);
  }

  renderCloseButton() {
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "Popup",
      elem: "CloseBtn",
      "aria-label": __('Close'),
      onClick: this.hidePopupAndGoBack,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CloseIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }));
  }

  renderNotifications() {
    const {
      isMobile
    } = this.props;

    if (!isMobile) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_NotificationList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 16
      }
    });
  }

  renderContent() {
    const {
      children,
      contentMix
    } = this.props;
    const isVisible = this.getIsVisible();

    if (!isVisible) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: this.handleClickOutside,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "Popup",
      elem: "Content",
      mix: contentMix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "header", {
      block: "Popup",
      elem: "Header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }
    }, this.renderTitle(), this.renderCloseButton()), this.renderNotifications(), children));
  }

  render() {
    const {
      mix,
      areOtherOverlaysOpen
    } = this.props;
    const isVisible = this.getIsVisible();
    return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/_checkBEM(React, "div", {
      ref: this.overlayRef,
      block: "Popup",
      mods: {
        isVisible,
        isInstant: areOtherOverlaysOpen
      },
      mix: { ...mix,
        mods: { ...mix.mods,
          isVisible
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }, this.renderContent()), document.body);
  }

}, _class.propTypes = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay_Overlay_component__WEBPACK_IMPORTED_MODULE_5__["default"].propTypes,
  clickOutside: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, _class.defaultProps = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay_Overlay_component__WEBPACK_IMPORTED_MODULE_5__["default"].defaultProps,
  clickOutside: true,
  title: ''
}, _class), "Component/Popup/Component");
/* harmony default export */ __webpack_exports__["default"] = (Popup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.config.js ***!
  \*******************************************************************************/
/*! exports provided: ESCAPE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE_KEY", function() { return ESCAPE_KEY; });
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
const ESCAPE_KEY = 27;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.container.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.container.js ***!
  \**********************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, PopupContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupContainer", function() { return PopupContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Header/Header.config */ "./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.action */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.reducer */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.reducer.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Overlay/Overlay.action */ "./node_modules/@scandipwa/scandipwa/src/store/Overlay/Overlay.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Popup.component */ "./node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Popup/Popup.container.js";

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










/** #namespace Component/Popup/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    activeOverlay: state.OverlayReducer.activeOverlay,
    areOtherOverlaysOpen: state.OverlayReducer.areOtherOverlaysOpen,
    shouldPopupClose: state.PopupReducer.shouldPopupClose,
    payload: state.PopupReducer.popupPayload,
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/Popup/Container/mapStateToProps");
/** #namespace Component/Popup/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    hideActiveOverlay: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_6__["hideActiveOverlay"])());
    },
    resetHideActivePopup: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_6__["hideActivePopup"])(false));
    },
    changeHeaderState: function (state) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_4__["changeNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_5__["TOP_NAVIGATION_TYPE"], state));
    },
    goToPreviousNavigationState: function (state) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_4__["goToPreviousNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_5__["TOP_NAVIGATION_TYPE"], state));
    }
  };
}, "Component/Popup/Container/mapDispatchToProps");
/** #namespace Component/Popup/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const PopupContainer = Mosaic.middleware((_class = class PopupContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onVisible: this.onVisible.bind(this)
    };
  }

  onVisible() {
    const {
      changeHeaderState,
      onVisible
    } = this.props;
    changeHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["POPUP"],
      title: this._getPopupTitle(),
      onCloseClick: function () {
        history.back();
      }
    });
    onVisible();
  }

  containerProps() {
    const {
      activeOverlay,
      areOtherOverlaysOpen,
      changeHeaderState,
      children,
      id,
      isMobile,
      isStatic,
      mix,
      contentMix,
      onClose,
      onHide,
      onVisible,
      shouldPopupClose,
      hideActiveOverlay,
      resetHideActivePopup,
      goToPreviousNavigationState
    } = this.props;
    return {
      activeOverlay,
      areOtherOverlaysOpen,
      changeHeaderState,
      children,
      id,
      isMobile,
      isStatic,
      mix,
      contentMix,
      shouldPopupClose,
      onClose,
      onHide,
      onVisible,
      hideActiveOverlay,
      resetHideActivePopup,
      goToPreviousNavigationState,
      title: this._getPopupTitle()
    };
  }

  _getPopupTitle() {
    const {
      payload,
      activeOverlay
    } = this.props;
    const {
      title
    } = payload[activeOverlay] || {};
    return title;
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Popup_component__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__["MixType"],
  contentMix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__["MixType"],
  payload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired,
  activeOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  goToPreviousNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  areOtherOverlaysOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  changeHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isStatic: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_7__["ChildrenType"],
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  shouldPopupClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  hideActiveOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  resetHideActivePopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class.defaultProps = {
  onVisible: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_8__["noopFn"],
  onClose: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_8__["noopFn"],
  onHide: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_8__["noopFn"],
  mix: {},
  contentMix: {},
  children: [],
  isStatic: false
}, _class), "Component/Popup/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PopupContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/PurchaseOrder/PurchaseOrder.component.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/PurchaseOrder/PurchaseOrder.component.js ***!
  \**************************************************************************************************/
/*! exports provided: PurchaseOrder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrder", function() { return PurchaseOrder; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/FieldGroup */ "./node_modules/@scandipwa/scandipwa/src/component/FieldGroup/index.js");
/* harmony import */ var _PurchaseOrder_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PurchaseOrder.style */ "./node_modules/@scandipwa/scandipwa/src/component/PurchaseOrder/PurchaseOrder.style.scss");
/* harmony import */ var _PurchaseOrder_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PurchaseOrder_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/PurchaseOrder/PurchaseOrder.component.js";

/* eslint-disable no-console */

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






/** #namespace Component/PurchaseOrder/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const PurchaseOrder = Mosaic.middleware((_class = class PurchaseOrder_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      id
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attr: {
        id,
        name: 'PurchaseOrder'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].text,
      attr: {
        id: 'purchaseOrderNumber',
        name: 'purchaseOrderNumber',
        placeholder: __('Purchase Order Number'),
        'aria-label': __('Purchase Order Number')
      },
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true
      },
      addRequiredTag: true,
      mix: {
        block: 'PurchaseOrderNumber',
        elem: 'Input'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/PurchaseOrder/Component");
/* harmony default export */ __webpack_exports__["default"] = (PurchaseOrder);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/RadioButtonIcon.component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/RadioButtonIcon.component.js ***!
  \******************************************************************************************************/
/*! exports provided: RadioButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return RadioButton; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RadioButtonIcon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadioButtonIcon.style */ "./node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/RadioButtonIcon.style.scss");
/* harmony import */ var _RadioButtonIcon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RadioButtonIcon_style__WEBPACK_IMPORTED_MODULE_2__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/RadioButtonIcon.component.js";

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



/** #namespace Component/RadioButtonIcon/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const RadioButton = Mosaic.middleware((_class = class RadioButton_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      isActive
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "svg", {
      block: "RadioButtonIcon",
      mods: {
        isActive
      },
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "path", {
      block: "RadioButtonIcon",
      elem: "Circle",
      d: "M7.24805 0.654297C3.38905 0.654297 0.248047 3.7953 0.248047 7.6543C0.248047 11.5133 3.38905 14.6543 7.24805 14.6543C11.107 14.6543 14.248 11.5133 14.248 7.6543C14.248 3.7953 11.107 0.654297 7.24805 0.654297ZM7.24805 12.6543C4.49105 12.6543 2.24805 10.4113 2.24805 7.6543C2.24805 4.8973 4.49105 2.6543 7.24805 2.6543C10.005 2.6543 12.248 4.8973 12.248 7.6543C12.248 10.4113 10.005 12.6543 7.24805 12.6543Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "path", {
      block: "RadioButtonIcon",
      elem: "Dot",
      d: "M7.24805 4.6543C5.62105 4.6543 4.24805 6.0273 4.24805 7.6543C4.24805 9.2813 5.62105 10.6543 7.24805 10.6543C8.87505 10.6543 10.248 9.2813 10.248 7.6543C10.248 6.0273 8.87505 4.6543 7.24805 4.6543Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  isActive: false
}, _class), "Component/RadioButtonIcon/Component");
/* harmony default export */ __webpack_exports__["default"] = (RadioButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioButtonIcon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioButtonIcon.component */ "./node_modules/@scandipwa/scandipwa/src/component/RadioButtonIcon/RadioButtonIcon.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RadioButtonIcon_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/StoreInPickUp/StoreInPickUp.config.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/StoreInPickUp/StoreInPickUp.config.js ***!
  \***********************************************************************************************/
/*! exports provided: STORE_IN_PICK_UP_METHOD_CODE, STORE_IN_PICK_UP_ATTRIBUTE_CODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_IN_PICK_UP_METHOD_CODE", function() { return STORE_IN_PICK_UP_METHOD_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_IN_PICK_UP_ATTRIBUTE_CODE", function() { return STORE_IN_PICK_UP_ATTRIBUTE_CODE; });
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
const STORE_IN_PICK_UP_METHOD_CODE = 'pickup';
const STORE_IN_PICK_UP_ATTRIBUTE_CODE = 'pickup_location_code';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/query/Klarna.query.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/query/Klarna.query.js ***!
  \*********************************************************************/
/*! exports provided: KlarnaQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlarnaQuery", function() { return KlarnaQuery; });
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

/** #namespace Query/Klarna/Query */

const KlarnaQuery = Mosaic.middleware(class KlarnaQuery_ extends Mosaic.Extensible() {
  getCreateKlarnaTokenMutation(input) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('createKlarnaToken').addArgument('input', 'KlarnaTokenInput!', input).setAlias('klarnaToken');
  }

}, "Query/Klarna/Query");
/* harmony default export */ __webpack_exports__["default"] = (new KlarnaQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.reducer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.reducer.js ***!
  \******************************************************************************************/
/*! exports provided: getInitialState, NotificationReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return getInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationReducer", function() { return NotificationReducer; });
/* harmony import */ var _Notification_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
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

/** #namespace Store/Notification/Reducer/getInitialState */

const getInitialState = Mosaic.middleware(function () {
  return {
    notifications: {}
  };
}, "Store/Notification/Reducer/getInitialState");
/** #namespace Store/Notification/Reducer/NotificationReducer */

const NotificationReducer = Mosaic.middleware(_c = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getInitialState();
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const notifications = { ...state.notifications
  };

  switch (action.type) {
    case _Notification_action__WEBPACK_IMPORTED_MODULE_0__["SHOW_NOTIFICATION"]:
      const {
        msgType,
        msgText,
        msgDebug
      } = action;
      notifications[Date.now()] = {
        msgType,
        msgText,
        msgDebug
      };
      return { ...state,
        notifications
      };

    case _Notification_action__WEBPACK_IMPORTED_MODULE_0__["HIDE_NOTIFICATION"]:
      const {
        [action.id]: id,
        ...shownNotifications
      } = notifications;
      return { ...state,
        notifications: shownNotifications
      };

    default:
      return state;
  }
}, "Store/Notification/Reducer/NotificationReducer");
_c2 = NotificationReducer;
/* harmony default export */ __webpack_exports__["default"] = (NotificationReducer);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "NotificationReducer$");
__webpack_require__.$Refresh$.register(_c2, "NotificationReducer");
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

/***/ "./node_modules/@scandipwa/scandipwa/src/type/NotificationList.type.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/type/NotificationList.type.js ***!
  \*****************************************************************************/
/*! exports provided: NotificationType, NotificationListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListType", function() { return NotificationListType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
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

const NotificationType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  msgText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  msgType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  msgDebug: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    extensions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      category: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    }),
    locations: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      line: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      column: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
    })),
    path: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
  }))
});
const NotificationListType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(NotificationType);
_c = NotificationListType;

var _c;

__webpack_require__.$Refresh$.register(_c, "NotificationListType");

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Address/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Address/index.js ***!
  \*********************************************************************/
/*! exports provided: trimCustomerAddress, trimCheckoutCustomerAddress, trimCheckoutAddress, removeEmptyStreets, setAddressesInFormObject, getFormFields, getCityAndRegionFromZipcode, getDefaultAddressLabel, getAvailableRegions, getFormattedRegion, getRegionIdFromAvailableRegions, getRegionIdOfRegionName, checkIfStoreIncluded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimCustomerAddress", function() { return trimCustomerAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimCheckoutCustomerAddress", function() { return trimCheckoutCustomerAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimCheckoutAddress", function() { return trimCheckoutAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEmptyStreets", function() { return removeEmptyStreets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddressesInFormObject", function() { return setAddressesInFormObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormFields", function() { return getFormFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCityAndRegionFromZipcode", function() { return getCityAndRegionFromZipcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultAddressLabel", function() { return getDefaultAddressLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableRegions", function() { return getAvailableRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedRegion", function() { return getFormattedRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegionIdFromAvailableRegions", function() { return getRegionIdFromAvailableRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegionIdOfRegionName", function() { return getRegionIdOfRegionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfStoreIncluded", function() { return checkIfStoreIncluded; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/util/Store */ "./node_modules/@scandipwa/scandipwa/src/util/Store/index.js");


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

/** #namespace Util/Address/Index/trimCustomerAddress */

const trimCustomerAddress = Mosaic.middleware(function (customerAddress) {
  const {
    default_shipping = false,
    default_billing = false,
    company = null,
    city = '',
    country_id = 1,
    firstname = '',
    lastname = '',
    middlename = '',
    postcode = '',
    street = [''],
    telephone = '',
    region: {
      region_code = null,
      region = null,
      region_id = 1
    } = {},
    prefix = '',
    suffix = '',
    vat_id = null
  } = customerAddress;
  return {
    company,
    default_shipping,
    default_billing,
    city,
    country_id,
    firstname,
    lastname,
    middlename,
    postcode,
    street,
    telephone,
    region: {
      region_code,
      region,
      region_id
    },
    prefix,
    suffix,
    vat_id
  };
}, "Util/Address/Index/trimCustomerAddress");
/** #namespace Util/Address/Index/trimCheckoutCustomerAddress */

const trimCheckoutCustomerAddress = Mosaic.middleware(function (customerAddress) {
  const {
    company = null,
    city = '',
    country_id = 1,
    firstname = '',
    lastname = '',
    postcode = '',
    street = [''],
    telephone = '',
    region: {
      region_code = null,
      region = null,
      region_id = 1
    } = {},
    vat_id = null
  } = customerAddress;
  return {
    company,
    city,
    country_id,
    firstname,
    lastname,
    postcode,
    street,
    telephone,
    region,
    region_id,
    region_code,
    vat_id
  };
}, "Util/Address/Index/trimCheckoutCustomerAddress");
/** #namespace Util/Address/Index/trimCheckoutAddress */

const trimCheckoutAddress = Mosaic.middleware(function (customerAddress) {
  const {
    company = null,
    city = '',
    country_id = 1,
    firstname = '',
    lastname = '',
    postcode = '',
    street = [''],
    telephone = '',
    region_string = '',
    region_id = 0,
    region_code = null,
    vat_id = null
  } = customerAddress;
  return {
    company,
    city,
    country_id,
    firstname,
    lastname,
    postcode,
    street,
    telephone,
    region: region_string,
    region_id: region_id === '' ? 0 : region_id,
    region_code,
    vat_id
  };
}, "Util/Address/Index/trimCheckoutAddress");
/**
 * Removes null values from address.street
 * @param street
 * @returns {*}
 * #namespace Util/Address/Index/removeEmptyStreets
 */

const removeEmptyStreets = Mosaic.middleware(function (street) {
  return Array.isArray(street) ? street.filter(function (line) {
    return line;
  }) : street;
}, "Util/Address/Index/removeEmptyStreets");
/** transforming "street[index]" entries into a single "street" object
    for checkout/billing/myAccoutAddress form fields object */

/** #namespace Util/Address/Index/setAddressesInFormObject */

const setAddressesInFormObject = Mosaic.middleware(function (fields, numberOfLines) {
  let prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'street';
  const addressKeys = new Array(numberOfLines).fill('').map(function (_, index) {
    return `${prefix}${index}`;
  });
  const addressValues = addressKeys.map(function (key) {
    return fields[key];
  }); // removing street related fields from the form object

  const newFields = Object.keys(fields).filter(function (key) {
    return !addressKeys.includes(key);
  }).reduce(function (acc, key) {
    acc[key] = fields[key];
    return acc;
  }, {}); // setting single street entry to the form object

  newFields.street = removeEmptyStreets(addressValues);
  return newFields;
}, "Util/Address/Index/setAddressesInFormObject"); // get Form Fields object depending on addressLinesQty

/** #namespace Util/Address/Index/getFormFields */

const getFormFields = Mosaic.middleware(function (fields, addressLinesQty) {
  if (addressLinesQty === 1) {
    return fields;
  }

  return setAddressesInFormObject(fields, addressLinesQty);
}, "Util/Address/Index/getFormFields");
/** #namespace Util/Address/Index/getCityAndRegionFromZipcode */

const getCityAndRegionFromZipcode = Mosaic.middleware( /*#__PURE__*/function () {
  var _ref = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (countryId, value) {
    const response = yield fetch(`https://api.zippopotam.us/${countryId}/${value}`);
    const data = yield response.json();
    return data && Object.entries(data).length > 0 ? {
      city: data.places[0]['place name'],
      region: data.places[0].state,
      regionAbbr: data.places[0]['state abbreviation']
    } : null;
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(), "Util/Address/Index/getCityAndRegionFromZipcode");
/** #namespace Util/Address/Index/getDefaultAddressLabel */

const getDefaultAddressLabel = Mosaic.middleware(function (address) {
  const {
    default_billing,
    default_shipping
  } = address;

  if (!default_billing && !default_shipping) {
    return '';
  }

  if (default_billing && default_shipping) {
    return __(' (default shipping & billing)');
  }

  if (default_billing) {
    return __(' (default billing address)');
  }

  return __(' (default shipping address)');
}, "Util/Address/Index/getDefaultAddressLabel");
/** #namespace Util/Address/Index/getAvailableRegions */

const getAvailableRegions = Mosaic.middleware(function (country_id, countries) {
  const country = countries.find(function (_ref2) {
    let {
      id
    } = _ref2;
    return id === country_id;
  }) || {};
  const {
    available_regions
  } = country; // need to handle null value

  return available_regions || [];
}, "Util/Address/Index/getAvailableRegions");
/** #namespace Util/Address/Index/getFormattedRegion */

const getFormattedRegion = Mosaic.middleware(function (address, countries) {
  const {
    country_id,
    region: regionData
  } = address;

  if (!regionData) {
    return {};
  }

  const country = countries.find(function (_ref3) {
    let {
      id
    } = _ref3;
    return id === country_id;
  });

  if (!country) {
    return {};
  }

  const {
    label,
    available_regions
  } = country;

  if (typeof regionData === 'string') {
    return {
      country: label,
      region: regionData
    };
  }

  const regions = available_regions || [];
  const {
    region_id,
    region
  } = regionData;
  const {
    name
  } = regions.find(function (_ref4) {
    let {
      id
    } = _ref4;
    return id === region_id;
  }) || {
    name: region
  };
  return {
    country: label,
    region: name
  };
}, "Util/Address/Index/getFormattedRegion");
/** #namespace Util/Address/Index/getRegionIdFromAvailableRegions */

const getRegionIdFromAvailableRegions = Mosaic.middleware(function (availableRegions, cityAndRegion) {
  const {
    region,
    regionAbbr
  } = cityAndRegion;
  const {
    id: regionId = 1
  } = availableRegions.find(function (_ref5) {
    let {
      name,
      code
    } = _ref5;
    return name === region || code === regionAbbr;
  }) || {};
  return regionId;
}, "Util/Address/Index/getRegionIdFromAvailableRegions");
/** #namespace Util/Address/Index/getRegionIdOfRegionName */

const getRegionIdOfRegionName = Mosaic.middleware(function (countryId, region) {
  const countries = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store__WEBPACK_IMPORTED_MODULE_1__["default"])().getState().ConfigReducer.countries || [];
  const availableRegions = getAvailableRegions(countryId, countries) || [];
  const {
    id: regionId = 0
  } = availableRegions.find(function (_ref6) {
    let {
      name
    } = _ref6;
    return name === region;
  }) || {};
  return regionId;
}, "Util/Address/Index/getRegionIdOfRegionName");
/** #namespace Util/Address/Index/checkIfStoreIncluded */

const checkIfStoreIncluded = Mosaic.middleware(function (stores, selectedStore) {
  const selectedStoreInString = JSON.stringify(selectedStore);
  return stores.find(function (store) {
    return JSON.stringify(store) === selectedStoreInString;
  });
}, "Util/Address/Index/checkIfStoreIncluded");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

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

/***/ "./node_modules/@scandipwa/scandipwa/src/util/DynamicReducer/Helper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/DynamicReducer/Helper.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectToReducers; });
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
 * @param store
 * @param reducers
 */
function injectToReducers(store, reducers) {
  Object.keys(reducers).forEach(function (key) {
    if (!Reflect.has(store.asyncReducers, key)) {
      // eslint-disable-next-line no-param-reassign
      store.asyncReducers[key] = reducers[key];
      store.injectReducer(key, reducers[key]);
    }
  });
}

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/DynamicReducer/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/DynamicReducer/index.js ***!
  \****************************************************************************/
/*! exports provided: withReducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReducers", function() { return withReducers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_DynamicReducer_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/util/DynamicReducer/Helper */ "./node_modules/@scandipwa/scandipwa/src/util/DynamicReducer/Helper.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/util/Store */ "./node_modules/@scandipwa/scandipwa/src/util/Store/index.js");
var _this = undefined,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/util/DynamicReducer/index.js";

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



/** #namespace Util/DynamicReducer/Index/withReducers */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const withReducers = Mosaic.middleware(function (reducers) {
  return function (WrappedComponent) {
    const injectAndExecute = function (props) {
      Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_DynamicReducer_Helper__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Store__WEBPACK_IMPORTED_MODULE_2__["default"])(), reducers); // eslint-disable-next-line @scandipwa/scandipwa-guidelines/jsx-no-props-destruction

      return /*#__PURE__*/_checkBEM(react__WEBPACK_IMPORTED_MODULE_0___default.a, WrappedComponent, Object.assign({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 16
        }
      }));
    };

    return injectAndExecute;
  };
}, "Util/DynamicReducer/Index/withReducers");
/* harmony default export */ __webpack_exports__["default"] = ({
  withReducers
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Store/Transform.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Store/Transform.js ***!
  \***********************************************************************/
/*! exports provided: transformCountriesToOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformCountriesToOptions", function() { return transformCountriesToOptions; });
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
 * Transforms countries list into select options
 * @param countries
 * #namespace Util/Store/Transform/transformCountriesToOptions
 */
const transformCountriesToOptions = Mosaic.middleware(function (countries) {
  const options = countries.map(function (country) {
    const {
      id
    } = country;
    return {
      value: id,
      name: id,
      ...country
    };
  });
  const filtered = options.filter(function (_ref) {
    let {
      label
    } = _ref;
    return label;
  });
  const sorted = filtered.sort(function (_ref2, _ref3) {
    let {
      label
    } = _ref2;
    let {
      label: labelCompare
    } = _ref3;
    return label.localeCompare(labelCompare);
  });
  return sorted;
}, "Util/Store/Transform/transformCountriesToOptions");
/* harmony default export */ __webpack_exports__["default"] = (transformCountriesToOptions);
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
//# sourceMappingURL=checkout-billing.chunk.js.map