(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["account-newsletter"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.component.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.component.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: MyAccountNewsletterSubscription, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountNewsletterSubscription", function() { return MyAccountNewsletterSubscription; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/FieldForm */ "./node_modules/@scandipwa/scandipwa/src/component/FieldForm/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _MyAccountNewsletterSubscription_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyAccountNewsletterSubscription.style.scss */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.style.scss");
/* harmony import */ var _MyAccountNewsletterSubscription_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MyAccountNewsletterSubscription_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.component.js";

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





/** #namespace Component/MyAccountNewsletterSubscription/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountNewsletterSubscription = Mosaic.middleware((_class = class MyAccountNewsletterSubscription_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldForm__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  get fieldMap() {
    const {
      setSubscriptionStatus,
      isSubscriptionSelected
    } = this.props;
    return [{
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["FIELD_TYPE"].checkbox,
      attr: {
        name: 'isSubscribed',
        defaultChecked: isSubscriptionSelected
      },
      events: {
        onChange: setSubscriptionStatus
      },
      label: __('General subscription')
    }];
  }

  renderFormBody() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "FieldForm",
      elem: "Fields",
      mix: {
        block: 'MyAccountNewsletterSubscription'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, super.renderFormBody());
  }

  getFormProps() {
    const {
      onCustomerSave,
      onError
    } = this.props;
    return {
      onSubmit: onCustomerSave,
      onError,
      returnAsObject: true
    };
  }

  renderActions() {
    return /*#__PURE__*/_checkBEM(React, "button", {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["FIELD_TYPE"].submit,
      block: "Button",
      mix: {
        block: 'MyAccountNewsletterSubscription',
        elem: 'Button'
      },
      "aria-label": __('Submit'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __('Save changes'));
  }

}, _class.propTypes = {
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_3__["CustomerType"].isRequired,
  onCustomerSave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSubscriptionSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountNewsletterSubscription/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountNewsletterSubscription);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.container.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.container.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountNewsletterSubscriptionContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountNewsletterSubscriptionContainer", function() { return MyAccountNewsletterSubscriptionContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_MyAccount_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/query/MyAccount.query */ "./node_modules/@scandipwa/scandipwa/src/query/MyAccount.query.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/MyAccount/MyAccount.action */ "./node_modules/@scandipwa/scandipwa/src/store/MyAccount/MyAccount.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_dispatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/store/MyAccount/MyAccount.dispatcher */ "./node_modules/@scandipwa/scandipwa/src/store/MyAccount/MyAccount.dispatcher.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_BrowserDatabase_BrowserDatabase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/BrowserDatabase/BrowserDatabase */ "./node_modules/@scandipwa/scandipwa/src/util/BrowserDatabase/BrowserDatabase.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/util/Request */ "./node_modules/@scandipwa/scandipwa/src/util/Request/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_QueryDispatcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/util/Request/QueryDispatcher */ "./node_modules/@scandipwa/scandipwa/src/util/Request/QueryDispatcher.js");
/* harmony import */ var _MyAccountNewsletterSubscription_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MyAccountNewsletterSubscription.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.container.js";

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














/** #namespace Component/MyAccountNewsletterSubscription/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    customer: state.MyAccountReducer.customer,
    newsletterConfirmStatus: state.ConfigReducer.newsletter_subscription_confirm
  };
}, "Component/MyAccountNewsletterSubscription/Container/mapStateToProps");
/** #namespace Component/MyAccountNewsletterSubscription/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    updateCustomer: function (customer) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_action__WEBPACK_IMPORTED_MODULE_6__["updateCustomerDetails"])(customer));
    },
    showErrorNotification: function (error) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_8__["showNotification"])('error', Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_12__["getErrorMessage"])(error)));
    },
    showSuccessNotification: function (message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_8__["showNotification"])('success', message));
    }
  };
}, "Component/MyAccountNewsletterSubscription/Container/mapDispatchToProps");
/** #namespace Component/MyAccountNewsletterSubscription/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountNewsletterSubscriptionContainer = Mosaic.middleware((_class = class MyAccountNewsletterSubscriptionContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onError: this.onError,
      setSubscriptionStatus: this.setSubscriptionStatus.bind(this),
      onCustomerSave: this.onCustomerSave.bind(this)
    };
  }

  __construct(props) {
    const {
      customer,
      customer: {
        is_subscribed
      } = {}
    } = props;

    super.__construct(props);

    this.state = {
      isLoading: Object.keys(customer).length === 0,
      isSubscriptionSelected: is_subscribed || false
    };
  }

  componentDidUpdate(prevProps) {
    const {
      customer: prevCustomer
    } = prevProps;
    const {
      customer,
      customer: {
        is_subscribed
      } = {}
    } = this.props;

    if (Object.keys(prevCustomer).length === 0 && Object.keys(customer).length !== 0) {
      this.setState({
        isSubscriptionSelected: is_subscribed,
        isLoading: false
      });
    }
  }

  containerProps() {
    const {
      customer
    } = this.props;
    const {
      isSubscriptionSelected
    } = this.state;
    return {
      customer,
      isSubscriptionSelected
    };
  }

  setSubscriptionStatus() {
    this.setState(function (state) {
      return {
        isSubscriptionSelected: !state.isSubscriptionSelected
      };
    });
  }

  showSubscriptionUpdateNotification(isSubscribed, wasSubscribed) {
    const {
      showSuccessNotification,
      newsletterConfirmStatus
    } = this.props;
    const {
      isSubscriptionSelected
    } = this.state;

    if (!isSubscribed && wasSubscribed) {
      showSuccessNotification(__('We have removed your newsletter subscription.'));
    } else if (isSubscribed && !newsletterConfirmStatus && !wasSubscribed) {
      showSuccessNotification(__('We have saved your subscription'));
    } else if (!isSubscribed && newsletterConfirmStatus && isSubscriptionSelected) {
      showSuccessNotification(__('A subscription confirmation email has been sent!'));
    } else {
      showSuccessNotification(__('We have updated your subscription.'));
    }
  }

  onError() {
    const {
      showErrorNotification
    } = this.props;
    this.setState({
      isLoading: false
    }, function () {
      showErrorNotification(__('We are experiencing issues, please try again later'));
    });
  }

  onCustomerSave(form, fields) {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        updateCustomer,
        customer: {
          is_subscribed: wasSubscribed
        }
      } = _this.props;
      const {
        isSubscribed: {
          value = false
        }
      } = fields;
      const customer = {
        is_subscribed: value
      };
      const mutation = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_MyAccount_query__WEBPACK_IMPORTED_MODULE_5__["default"].getUpdateInformationMutation(customer);

      if (!Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__["isSignedIn"])()) {
        return;
      }

      _this.setState({
        isLoading: true
      });

      try {
        const {
          updateCustomerV2: {
            customer
          }
        } = yield Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_12__["fetchMutation"])(mutation);
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_BrowserDatabase_BrowserDatabase__WEBPACK_IMPORTED_MODULE_11__["default"].setItem(customer, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_dispatcher__WEBPACK_IMPORTED_MODULE_7__["CUSTOMER"], _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request_QueryDispatcher__WEBPACK_IMPORTED_MODULE_13__["ONE_MONTH_IN_SECONDS"]);
        const {
          is_subscribed
        } = customer;

        _this.setState({
          isLoading: false
        }, function () {
          updateCustomer(customer);

          _this.showSubscriptionUpdateNotification(is_subscribed, wasSubscribed);
        });
      } catch (e) {
        _this.onError(e);
      }
    })();
  }

  render() {
    const {
      isLoading
    } = this.state;
    return /*#__PURE__*/_checkBEM(react__WEBPACK_IMPORTED_MODULE_2___default.a, react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/_checkBEM(react__WEBPACK_IMPORTED_MODULE_2___default.a, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(react__WEBPACK_IMPORTED_MODULE_2___default.a, _MyAccountNewsletterSubscription_component__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    })));
  }

}, _class.propTypes = {
  customer: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_9__["CustomerType"].isRequired,
  updateCustomer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showErrorNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showSuccessNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  newsletterConfirmStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
}, _class), "Component/MyAccountNewsletterSubscription/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountNewsletterSubscriptionContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountNewsletterSubscription_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountNewsletterSubscription.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountNewsletterSubscription/MyAccountNewsletterSubscription.container.js");
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

/* harmony default export */ __webpack_exports__["default"] = (_MyAccountNewsletterSubscription_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=account-newsletter.chunk.js.map