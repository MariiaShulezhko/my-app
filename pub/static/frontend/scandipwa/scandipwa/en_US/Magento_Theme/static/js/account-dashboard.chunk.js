(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["account-dashboard"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.component.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.component.js ***!
  \********************************************************************************************************************/
/*! exports provided: MyAccountCustomerTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCustomerTable", function() { return MyAccountCustomerTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/KeyValueTable */ "./node_modules/@scandipwa/scandipwa/src/component/KeyValueTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.component.js";

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



/** #namespace Component/MyAccountCustomerTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountCustomerTable = Mosaic.middleware((_class = class MyAccountCustomerTable_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  get dataPairArray() {
    const {
      customer
    } = this.props;
    return [{
      key: 'firstname',
      label: __('First name'),
      source: customer
    }, {
      key: 'lastname',
      label: __('Last name'),
      source: customer
    }, {
      key: 'taxvat',
      label: __('Tax/VAT Number'),
      source: customer
    }, {
      key: 'email',
      label: __('Email'),
      source: customer
    }];
  }

  renderActions() {
    const {
      handleOnEditInformation,
      handleOnEditPassword
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        isHollow: true
      },
      onClick: handleOnEditInformation,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __('Edit details')), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        isHollow: true,
        isWithoutBorder: true
      },
      onClick: handleOnEditPassword,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __('Change password')));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountCustomerTable",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, this.renderTable(), this.renderActions());
  }

}, _class.propTypes = {
  handleOnEditInformation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleOnEditPassword: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__["CustomerType"].isRequired
}, _class), "Component/MyAccountCustomerTable/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountCustomerTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.container.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.container.js ***!
  \********************************************************************************************************************/
/*! exports provided: MyAccountCustomerTableContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCustomerTableContainer", function() { return MyAccountCustomerTableContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountCustomerTable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyAccountCustomerTable.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.container.js";

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







/** #namespace Component/MyAccountCustomerTable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountCustomerTableContainer = Mosaic.middleware((_class = class MyAccountCustomerTableContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      handleOnEditPassword: this.handleOnEditPassword.bind(this),
      handleOnEditInformation: this.handleOnEditInformation.bind(this)
    };
  }

  containerProps() {
    const {
      customer,
      title
    } = this.props;
    return {
      customer,
      title
    };
  }

  handleOnEditPassword() {
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_4__["default"].push({
      pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_INFORMATION_EDIT_URL"]),
      state: {
        editPassword: true
      }
    });
  }

  handleOnEditInformation() {
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_4__["default"].push({
      pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_INFORMATION_EDIT_URL"])
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountCustomerTable_component__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__["CustomerType"].isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, _class.defaultProps = {
  title: ''
}, _class), "Component/MyAccountCustomerTable/Container");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountCustomerTableContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountCustomerTable_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountCustomerTable.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/MyAccountCustomerTable.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountCustomerTable_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.component.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.component.js ***!
  \************************************************************************************************************/
/*! exports provided: MyAccountDashboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDashboard", function() { return MyAccountDashboard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountAddressTable */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountCustomerTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MyAccountCustomerTable */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCustomerTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _MyAccountDashboard_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyAccountDashboard.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.style.scss");
/* harmony import */ var _MyAccountDashboard_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MyAccountDashboard_style__WEBPACK_IMPORTED_MODULE_8__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.component.js";

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









/** #namespace Component/MyAccountDashboard/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountDashboard = Mosaic.middleware((_class = class MyAccountDashboard_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderNoDefaultAddressConfigured(name) {
    return /*#__PURE__*/_checkBEM(React, "div", {
      key: name,
      block: "MyAccountDashboard",
      elem: "DefaultAddress",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      block: "MyAccountDashboard",
      elem: "Info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __('No %s address configured.', name)), this.renderLinkToAddressBook());
  }

  renderLinkToAddressBook() {
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "MyAccountDashboard",
      elem: "Info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: `${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_6__["ACCOUNT_URL"]}/${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__["ADDRESS_BOOK"]}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __('Go to "Address Book", to configure them!')));
  }

  renderDefaultAddressTable(isBilling) {
    const {
      getDefaultAddress
    } = this.props;
    const name = isBilling ? __('billing') : __('shipping');
    const address = getDefaultAddress(isBilling);

    if (!address) {
      return this.renderNoDefaultAddressConfigured(name);
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      key: name,
      block: "MyAccountDashboard",
      elem: "DefaultAddress",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      address: address,
      title: __('Default %s address', name),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }));
  }

  renderAddressBlockTitle() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountDashboard",
      elem: "BlockTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __('Address Book')), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: `${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_6__["ACCOUNT_URL"]}/${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__["ADDRESS_BOOK"]}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __('Manage Addresses')));
  }

  renderNoAddresses() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, this.renderAddressBlockTitle(), /*#__PURE__*/_checkBEM(React, "p", {
      block: "MyAccountDashboard",
      elem: "Info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __('You have no configured addresses.')), this.renderLinkToAddressBook());
  }

  renderDefaultAddressTables() {
    const {
      customer: {
        addresses = []
      }
    } = this.props;

    if (!addresses.length) {
      return this.renderNoAddresses();
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountDashboard",
      elem: "Addresses",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, this.renderAddressBlockTitle(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountDashboard",
      elem: "AddressesWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, this.renderDefaultAddressTable(), this.renderDefaultAddressTable(true)));
  }

  renderCustomerTable() {
    const {
      customer
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountDashboard",
      elem: "CustomerData",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountDashboard",
      elem: "BlockTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }, __('Account Information'))), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountCustomerTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      customer: customer,
      title: __('My profile'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }));
  }

  render() {
    const {
      customer
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountDashboard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isLoading: !Object.keys(customer).length,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }), this.renderCustomerTable(), this.renderDefaultAddressTables());
  }

}, _class.propTypes = {
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__["CustomerType"].isRequired,
  getDefaultAddress: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/MyAccountDashboard/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountDashboard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.container.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.container.js ***!
  \************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountDashboardContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDashboardContainer", function() { return MyAccountDashboardContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _MyAccountDashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyAccountDashboard.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.container.js";

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




/** #namespace Component/MyAccountDashboard/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    customer: state.MyAccountReducer.customer
  };
}, "Component/MyAccountDashboard/Container/mapStateToProps");
/** #namespace Component/MyAccountDashboard/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountDashboard/Container/mapDispatchToProps");
/** #namespace Component/MyAccountDashboard/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountDashboardContainer = Mosaic.middleware((_class = class MyAccountDashboardContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      getDefaultAddress: this.getDefaultAddress.bind(this)
    };
  }

  containerProps() {
    const {
      customer
    } = this.props;
    return {
      customer
    };
  }

  getDefaultAddress(isBilling) {
    const {
      customer: {
        addresses = []
      }
    } = this.props;
    const key = isBilling ? 'default_billing' : 'default_shipping';
    return addresses.find(function (_ref) {
      let {
        [key]: defaultAddress
      } = _ref;
      return defaultAddress;
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountDashboard_component__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__["CustomerType"].isRequired
}, _class), "Component/MyAccountDashboard/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountDashboardContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountDashboard_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountDashboard.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDashboard/MyAccountDashboard.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountDashboard_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ })

}]);
//# sourceMappingURL=account-dashboard.chunk.js.map