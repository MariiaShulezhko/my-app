(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["account-downloadable"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.component.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.component.js ***!
  \******************************************************************************************************************/
/*! exports provided: MyAccountDownloadableComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDownloadableComponent", function() { return MyAccountDownloadableComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountDownloadableTableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountDownloadableTableRow */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _MyAccountDownloadable_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyAccountDownloadable.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.config.js");
/* harmony import */ var _MyAccountDownloadable_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyAccountDownloadable.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.style.scss");
/* harmony import */ var _MyAccountDownloadable_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MyAccountDownloadable_style__WEBPACK_IMPORTED_MODULE_6__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.component.js";

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







/** #namespace Component/MyAccountDownloadable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountDownloadableComponent = Mosaic.middleware((_class = class MyAccountDownloadableComponent_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["Component"]) {
  shouldComponentUpdate(nextProps) {
    const {
      items
    } = this.props;
    const {
      items: nextItems
    } = nextProps;
    return items !== nextItems;
  }

  renderNoOrders() {
    return /*#__PURE__*/_checkBEM(React, "tr", {
      block: "MyAccountMyOrders",
      elem: "NoOrders",
      mix: {
        block: 'MyDownloadableOrders',
        elem: 'NoOrders'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "td", {
      colSpan: _MyAccountDownloadable_config__WEBPACK_IMPORTED_MODULE_5__["NUMBER_OF_COLUMNS_IN_DOWNLOADABLE_TABLE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __('You have not purchased any downloadable products yet.'))));
  }

  renderOrderHeadingRow() {
    return /*#__PURE__*/_checkBEM(React, "tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __('Order')), /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __('Date')), /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __('Title')), /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __('Status')), /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __('Remaining Downloads')));
  }

  renderTable() {
    return /*#__PURE__*/_checkBEM(React, "table", {
      block: "MyAccountMyOrders",
      elem: "Table",
      mix: {
        block: 'MyDownloadable'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, this.renderOrderHeadingRow()), /*#__PURE__*/_checkBEM(React, "tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, this.renderOrderRows()));
  }

  renderOrderRow(order) {
    const {
      id
    } = order;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountDownloadableTableRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      order: order,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    });
  }

  renderOrderRows() {
    var _this = this;

    const {
      items,
      isLoading
    } = this.props;

    if (!isLoading && !items.length) {
      return this.renderNoOrders();
    }

    const orders = items.length ? items : Array.from({
      length: 10
    }, function (_, id) {
      return {
        id
      };
    });
    return orders.reduceRight(function (acc, e) {
      return [...acc, _this.renderOrderRow(e)];
    }, []);
  }

  render() {
    const {
      isLoading
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountMyOrders",
      mix: {
        block: 'MyDownloadableOrders'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }), this.renderTable());
  }

}, _class.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["DownloadableType"]).isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountDownloadable/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountDownloadableComponent);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.config.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.config.js ***!
  \***************************************************************************************************************/
/*! exports provided: NUMBER_OF_COLUMNS_IN_DOWNLOADABLE_TABLE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_OF_COLUMNS_IN_DOWNLOADABLE_TABLE", function() { return NUMBER_OF_COLUMNS_IN_DOWNLOADABLE_TABLE; });
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
const NUMBER_OF_COLUMNS_IN_DOWNLOADABLE_TABLE = 5;
/* harmony default export */ __webpack_exports__["default"] = (NUMBER_OF_COLUMNS_IN_DOWNLOADABLE_TABLE);

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.container.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.container.js ***!
  \******************************************************************************************************************/
/*! exports provided: OrderDispatcher, mapStateToProps, mapDispatchToProps, MyAccountDownloadableContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDispatcher", function() { return OrderDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDownloadableContainer", function() { return MyAccountDownloadableContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_Order_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/query/Order.query */ "./node_modules/@scandipwa/scandipwa/src/query/Order.query.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Request */ "./node_modules/@scandipwa/scandipwa/src/util/Request/index.js");
/* harmony import */ var _MyAccountDownloadable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyAccountDownloadable.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.container.js";

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








const OrderDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ./src/store/Order/Order.dispatcher */ "./node_modules/@scandipwa/scandipwa/src/store/Order/Order.dispatcher.js"));
/** #namespace Component/MyAccountDownloadable/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    device: state.ConfigReducer.device
  };
}, "Component/MyAccountDownloadable/Container/mapStateToProps");
/** #namespace Component/MyAccountDownloadable/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showErrorNotification: function (message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])('error', message));
    },
    showSuccessNotification: function (message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])('success', message));
    }
  };
}, "Component/MyAccountDownloadable/Container/mapDispatchToProps");
/** #namespace Component/MyAccountDownloadable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountDownloadableContainer = Mosaic.middleware((_class = class MyAccountDownloadableContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      items: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.requestDownloadable();
  }

  containerProps() {
    const {
      device
    } = this.props;
    const {
      isLoading
    } = this.state;
    return {
      device,
      isLoading,
      items: this._prepareDownloadableProps()
    };
  }

  _prepareDownloadableProps() {
    const {
      items
    } = this.state;

    if (!(items === null || items === void 0 ? void 0 : items.length)) {
      return [];
    }

    return items.reduce(function (acc, item, index) {
      acc.push({
        id: index,
        order_id: item.order_id,
        order_increment_id: item.order_increment_id,
        status_label: item.status,
        created_at: item.date,
        download_url: item.download_url,
        downloads: item.remaining_downloads,
        title: item.title,
        link_title: item.link_title
      });
      return acc;
    }, []);
  }

  requestDownloadable() {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        showErrorNotification
      } = _this.props;

      _this.setState({
        isLoading: true
      });

      try {
        const {
          customerDownloadableProducts: {
            items = []
          } = {}
        } = yield Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_7__["fetchQuery"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_query_Order_query__WEBPACK_IMPORTED_MODULE_4__["default"].getDownloadableQuery());

        _this.setState({
          items,
          isLoading: false
        });
      } catch (e) {
        showErrorNotification(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_7__["getErrorMessage"])(e));

        _this.setState({
          isLoading: false
        });
      }
    })();
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountDownloadable_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__["DeviceType"].isRequired,
  showErrorNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showSuccessNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
}, _class), "Component/MyAccountDownloadable/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountDownloadableContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountDownloadable_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountDownloadable.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadable/MyAccountDownloadable.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountDownloadable_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.component.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.component.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: MyAccountDownloadableTableRowComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDownloadableTableRowComponent", function() { return MyAccountDownloadableTableRowComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountDownloadableTableRow_MyAccountDownloadableTableRow_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _MyAccountDownloadableTableRow_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyAccountDownloadableTableRow.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.style.scss");
/* harmony import */ var _MyAccountDownloadableTableRow_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MyAccountDownloadableTableRow_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.component.js";

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

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






/** #namespace Component/MyAccountDownloadableTableRow/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountDownloadableTableRowComponent = Mosaic.middleware((_class = class MyAccountDownloadableTableRowComponent_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderOrderIncrementId() {
    const {
      order: {
        order_increment_id
      },
      onOrderIdClick
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      onClick: onOrderIdClick,
      block: "MyAccountDownloadTableRow",
      elem: "OrderId",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, "#", order_increment_id);
  }

  renderLink() {
    const {
      order: {
        download_url,
        link_title,
        downloads,
        status_label
      },
      isOpenInNewTab
    } = this.props;

    if (!download_url || !downloads || status_label === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountDownloadableTableRow_MyAccountDownloadableTableRow_config__WEBPACK_IMPORTED_MODULE_3__["STATUS_EXPIRED"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: download_url,
      block: "MyAccountDownloadTableRow",
      elem: "DownloadLink",
      isOpenInNewTab: isOpenInNewTab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, link_title);
  }

  render() {
    const {
      order: {
        order_increment_id,
        downloads,
        created_at,
        title,
        status_label = ''
      } = {}
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "tr", {
      block: "MyAccountOrderTableRow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, order_increment_id ? this.renderOrderIncrementId() : ''), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, created_at), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, title, this.renderLink()), /*#__PURE__*/_checkBEM(React, "td", {
      block: "MyAccountDownloadTableRow",
      elem: "Status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, status_label), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, downloads));
  }

}, _class.propTypes = {
  order: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["DownloadableType"].isRequired,
  onOrderIdClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isOpenInNewTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountDownloadableTableRow/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountDownloadableTableRowComponent);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.config.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.config.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: STATUS_EXPIRED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_EXPIRED", function() { return STATUS_EXPIRED; });
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
const STATUS_EXPIRED = 'expired';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.container.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.container.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountDownloadableTableRowContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDownloadableTableRowContainer", function() { return MyAccountDownloadableTableRowContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountDownloadableTableRow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyAccountDownloadableTableRow.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.container.js";

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









/** #namespace Component/MyAccountDownloadableTableRow/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    device: state.ConfigReducer.device,
    isOpenInNewTab: state.ConfigReducer.downloadable_links_target_new_window
  };
}, "Component/MyAccountDownloadableTableRow/Container/mapStateToProps");
/** #namespace Component/MyAccountDownloadableTableRow/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountDownloadableTableRow/Container/mapDispatchToProps");
/** #namespace Component/MyAccountDownloadableTableRow/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountDownloadableTableRowContainer = Mosaic.middleware((_class = class MyAccountDownloadableTableRowContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onOrderIdClick: this.onOrderIdClick.bind(this)
    };
  }

  onOrderIdClick() {
    const {
      order: {
        order_id
      }
    } = this.props;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_6__["default"].push({
      pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_7__["appendWithStoreCode"])(`${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT_ORDER_URL"]}/${order_id}`)
    });
  }

  containerProps() {
    const {
      device,
      order,
      isOpenInNewTab
    } = this.props;
    return {
      order,
      device,
      isOpenInNewTab
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountDownloadableTableRow_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  order: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_5__["DownloadableType"].isRequired,
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].isRequired,
  isOpenInNewTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountDownloadableTableRow/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountDownloadableTableRowContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountDownloadableTableRow_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountDownloadableTableRow.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountDownloadableTableRow/MyAccountDownloadableTableRow.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountDownloadableTableRow_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/query/Order.query.js":
/*!********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/query/Order.query.js ***!
  \********************************************************************/
/*! exports provided: OrderQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderQuery", function() { return OrderQuery; });
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
 * Order Query
 * @class OrderQuery
 * #namespace Query/Order/Query */

const OrderQuery = Mosaic.middleware(class OrderQuery_ extends Mosaic.Extensible() {
  getReorder(incrementId) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('reorderItems').addArgument('orderNumber', 'String!', incrementId).addField(this._getReorderField());
  }

  getSubscribeToOrderStatus(incrementId) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('subscribeToOrderStatus').addArgument('orderNumber', 'String!', incrementId).addFieldList(this._getSubscribeToOrderStatusOutputFields());
  }

  getOrderListQuery(options) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('customer').addFieldList(this._getOrderListFields(options));
  }

  getOrderByInvoice(invoiceId) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('orderByInvoice').addArgument('invoiceId', 'Int!', invoiceId).addFieldList(this._getOrderItemsFields(true));
  }

  getOrderByShipment(shipmentId) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('orderByShipment').addArgument('shipmentId', 'Int!', shipmentId).addFieldList(this._getOrderItemsFields(true));
  }

  getOrderByRefund(refundId) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('orderByRefund').addArgument('refundId', 'Int!', refundId).addFieldList(this._getOrderItemsFields(true));
  }

  _getOrderListFields(options) {
    return [this._getOrdersField(options)];
  }

  _getOrdersField(options) {
    const {
      orderId,
      page = 1
    } = options || {};
    const ordersField = new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('orders');

    if (orderId) {
      return ordersField.addArgument('filter', 'CustomerOrdersFilterInput', {
        entity_id: {
          eq: orderId
        }
      }).addFieldList(this._getOrdersFields(true));
    }

    return ordersField.addArgument('currentPage', 'Int', page).addFieldList(this._getOrdersFields());
  }

  _getOrdersFields() {
    let isSingleOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return ['total_count', this._getOrderItemsField(isSingleOrder), this._getSearchResultPageInfoField()];
  }

  _getSearchResultPageInfoField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('page_info').addFieldList(this._getSearchResultPageInfoFields());
  }

  _getSearchResultPageInfoFields() {
    return ['current_page', 'page_size', 'total_pages'];
  }

  _getOrderItemsField(isSingleOrder) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getOrderItemsFields(isSingleOrder));
  }

  _getOrderItemsFields(isSingleOrder) {
    const basicFields = ['id', 'increment_id', 'order_date', 'status', 'can_reorder', 'rss_link', this._getOrderItemTotalField()];

    if (isSingleOrder) {
      return [...basicFields, ...this._getSingleOrderFields()];
    }

    return basicFields;
  }

  _getSingleOrderFields() {
    return ['carrier', this._getOrderShipmentsField(), this._getOrderItemsProductsField(), this._getOrderInvoicesField(), this._getOrderRefundsField(), this._getOrderShippingAddressField(), this._getOrderBillingAddressField(), this._getOrderPaymentMethodsField(), this._getOrderShippingMethodField(), this._getOrderCommentsField()];
  }

  _getOrderCommentsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('comments').addFieldList(this._getOrderCommentsFields());
  }

  _getOrderCommentsFields() {
    return ['timestamp', 'message'];
  }

  _getOrderItemTotalField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('total').addFieldList(this._getOrderItemTotalFields());
  }

  _getOrderItemTotalFields() {
    return [this._getOrderGrandTotalField(), this._getOrderDiscountsField(), this._getOrderBaseGrantTotalField(), this._getOrderSubtotalField(), this._getOrderTotalShippingField(), this._getOrderTotalTaxField(), this._getOrderShippingHandlingField(), this._getOrderTaxesField()];
  }

  _getOrderTaxesField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('taxes').addFieldList(this._getOrderTaxesFields());
  }

  _getOrderTaxesFields() {
    return ['rate', 'title', this._getOrderAmountField()];
  }

  _getOrderShippingHandlingField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('shipping_handling').addFieldList(this._getOrderShippingHandlingFields());
  }

  _getOrderShippingHandlingFields() {
    return [this._getOrderShippingAmountExclTaxField(), this._getOrderShippingAmountInclTaxField(), this._getOrderShippingDiscountsField(), this._getOrderShippingHandlingTotalField(), this._getOrderTaxesField()];
  }

  _getOrderShippingDiscountsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('discounts').addFieldList(this._getOrderShippingDiscountsFields());
  }

  _getOrderShippingDiscountsFields() {
    return [this._getOrderAmountField()];
  }

  _getOrderShippingAmountExclTaxField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('amount_excluding_tax').addFieldList(this._getOrderPriceFields());
  }

  _getOrderShippingAmountInclTaxField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('amount_including_tax').addFieldList(this._getOrderPriceFields());
  }

  _getOrderShippingHandlingTotalField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('total_amount').addFieldList(this._getOrderPriceFields());
  }

  _getOrderTotalTaxField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('total_tax').addFieldList(this._getOrderPriceFields());
  }

  _getOrderTotalShippingField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('total_shipping').addFieldList(this._getOrderPriceFields());
  }

  _getOrderBaseGrantTotalField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('base_grand_total').addFieldList(this._getOrderPriceFields());
  }

  _getOrderSubtotalField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('subtotal').addFieldList(this._getOrderPriceFields());
  }

  _getOrderGrandTotalField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('grand_total').addFieldList(this._getOrderPriceFields());
  }

  _getOrderPriceFields() {
    return ['value', 'currency'];
  }

  _getOrderShipmentsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('shipments').addFieldList(this._getOrderShipmentsFields());
  }

  _getOrderShipmentsFields() {
    return ['id', 'number', this._getOrderCommentsField(), this._getOrderShipmentTrackingField(), this._getShipmentsItemsProductsField()];
  }

  _getShipmentsItemsProductsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getShipmentsItemsProductsFields());
  }

  _getShipmentsItemsProductsFields() {
    return ['quantity_shipped', ...this._getBaseOrderItemProductsFields()];
  }

  _getOrderShipmentTrackingField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('tracking').addFieldList(this._getOrderShipmentTrackingFields());
  }

  _getOrderShipmentTrackingFields() {
    return ['carrier', 'number', 'title'];
  }

  _getOrderRefundsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('credit_memos').addFieldList(this._getOrderRefundsFields());
  }

  _getOrderRefundsFields() {
    return ['id', 'number', this._getOrderCommentsField(), this._getRefundsItemsProductsField(), this._getOrderItemTotalField()];
  }

  _getOrderDiscountsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('discounts').addFieldList(this._getOrderDiscountsFields());
  }

  _getOrderDiscountsFields() {
    return ['label', this._getOrderAmountField()];
  }

  _getOrderAmountField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('amount').addFieldList(this._getOrderPriceFields());
  }

  _getRefundsItemsProductsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getRefundsItemsProductsFields());
  }

  _getRefundsItemsProductsFields() {
    return ['quantity_refunded', ...this._getBaseOrderItemProductsFields(), this._getRefundsItemInformationField(), this._getOrderProductRowSubtotalField(), this._getOrderDiscountsField()];
  }

  _getRefundsItemInformationField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('order_item').addFieldList(this._getOrderItemProductsFields());
  }

  _getOrderInvoicesField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('invoices').addFieldList(this._getOrderInvoicesFields());
  }

  _getOrderInvoicesFields() {
    return ['id', 'number', this._getOrderCommentsField(), this._getInvoiceItemsProductsField(), this._getOrderItemTotalField()];
  }

  _getInvoiceItemsProductsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getInvoiceItemProductsFields());
  }

  _getInvoiceItemProductsFields() {
    return ['quantity_invoiced', this._getOrderProductRowSubtotalField(), ...this._getBaseOrderItemProductsFields()];
  }

  _getOrderItemsProductsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getOrderItemProductsFields());
  }

  _getOrderItemProductsFields() {
    return ['product_url_key', 'quantity_ordered', 'quantity_shipped', 'quantity_refunded', 'quantity_canceled', this._getOrderProductEnteredOptionsField(), this._getOrderProductSelectedOptionsField(), this._getOrderProductRowSubtotalField(), ...this._getBaseOrderItemProductsFields()];
  }

  _getBaseOrderItemProductsFields() {
    return ['product_name', 'product_sku', this._getOrderProductSalePriceField()];
  }

  _getOrderProductRowSubtotalField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('row_subtotal').addFieldList(this._getOrderPriceFields());
  }

  _getOrderProductRowSubtotalInclTaxField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('row_subtotal_incl_tax').addFieldList(this._getOrderPriceFields());
  }

  _getOrderProductEnteredOptionsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('entered_options').addFieldList(this._getOrderProductOptionsFields());
  }

  _getOrderProductSelectedOptionsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('selected_options').addFieldList(this._getOrderProductOptionsFields());
  }

  _getOrderProductOptionsFields() {
    return ['label', 'value', this._getOrderProductBundleOptionItemsField(), 'linkItems'];
  }

  _getOrderProductBundleOptionItemsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getOrderProductBundleOptionItemsFields());
  }

  _getOrderProductBundleOptionItemsFields() {
    return ['title', 'qty', 'price'];
  }

  _getOrderProductSalePriceField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('product_sale_price').addFieldList(this._getOrderPriceFields());
  }

  _getReorderField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('userInputErrors').addFieldList(this._getReorderFields());
  }

  _getReorderFields() {
    return ['code', 'message', 'path'];
  }

  _getOrderShippingAddressField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('shipping_address').addFieldList(this._getOrderAddressFields());
  }

  _getOrderBillingAddressField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('billing_address').addFieldList(this._getOrderAddressFields());
  }

  _getOrderAddressFields() {
    return ['city', 'country_id', 'firstname', 'lastname', 'postcode', 'region', 'region_id', 'telephone', 'vat_id', this._getOrderAddressStreetField()];
  }

  _getOrderAddressStreetField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('street');
  }

  _getOrderPaymentMethodsField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('payment_methods').addFieldList(this._getOrderPaymentMethodsFields());
  }

  _getOrderPaymentMethodsFields() {
    return ['name', 'type', 'purchase_number', this._getOrderPaymentMethodAdditionalField()];
  }

  _getOrderPaymentMethodAdditionalField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('additional_data').addFieldList(this._getOrderPaymentMethodAdditionalFields());
  }

  _getOrderPaymentMethodAdditionalFields() {
    return ['name', 'value'];
  }

  _getOrderShippingMethodField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('shipping_method');
  }

  getDownloadableQuery() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('customerDownloadableProducts').addField(this._getDownloadableField());
  }

  getOrderByIdQuery(orderId) {
    return this._getOrderByIdField(orderId);
  }

  linkOrderMutation(customerEmail) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('linkOrder').addArgument('customer_email', 'String!', customerEmail);
  }

  _getOrderByIdField(orderId) {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('Customer').addArgument('id', 'Int!', orderId).addFieldList(this._getOrderItemsFields());
  }

  _getDownloadableField() {
    return new _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('items').addFieldList(this._getDownloadableFields());
  }

  _getDownloadableFields() {
    return ['order_id', 'order_increment_id', 'date', 'status', 'download_url', 'link_title', 'remaining_downloads', 'title'];
  }

}, "Query/Order/Query");
/* harmony default export */ __webpack_exports__["default"] = (new OrderQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ })

}]);
//# sourceMappingURL=account-downloadable.chunk.js.map