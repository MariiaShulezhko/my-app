(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["account-orders"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.component.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: MyAccountMyOrders, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountMyOrders", function() { return MyAccountMyOrders; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountOrderTableRow */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Pagination */ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _MyAccountMyOrders_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyAccountMyOrders.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.style.scss");
/* harmony import */ var _MyAccountMyOrders_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MyAccountMyOrders_style__WEBPACK_IMPORTED_MODULE_7__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.component.js";

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








/** #namespace Component/MyAccountMyOrders/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountMyOrders = Mosaic.middleware((_class = class MyAccountMyOrders_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["Component"]) {
  shouldComponentUpdate(nextProps) {
    const {
      device,
      orderList,
      isLoading
    } = this.props;
    const {
      device: nextDevice,
      orderList: nextOrderList,
      isLoading: nextIsLoading
    } = nextProps;
    return device !== nextDevice || orderList !== nextOrderList || isLoading !== nextIsLoading;
  }

  renderNoOrders() {
    const {
      device
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "tr", {
      block: "MyAccountMyOrders",
      elem: "NoOrders",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "td", {
      colSpan: device.isMobile ? 3 : 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __('You have no orders.')));
  }

  renderOrderHeadingRow() {
    return /*#__PURE__*/_checkBEM(React, "tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __('Order')), /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __('Date')), /*#__PURE__*/_checkBEM(React, "th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __('Status')), /*#__PURE__*/_checkBEM(React, "th", {
      block: "hidden-mobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __('Total')));
  }

  renderTable() {
    return /*#__PURE__*/_checkBEM(React, "table", {
      block: "MyAccountMyOrders",
      elem: "Table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, this.renderOrderHeadingRow()), /*#__PURE__*/_checkBEM(React, "tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, this.renderOrderRows()));
  }

  renderOrderRow(order) {
    const {
      id,
      base_order_info: {
        id: defaultId
      } = {}
    } = order;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTableRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id || defaultId,
      order: order,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    });
  }

  renderOrderRows() {
    var _this = this;

    const {
      orderList: {
        items = []
      },
      isLoading
    } = this.props;

    if (!isLoading && !items.length) {
      return this.renderNoOrders();
    }

    const orders = items.length ? items : Array.from({
      length: 10
    }, function (_, id) {
      return {
        base_order_info: {
          id
        }
      };
    });
    return orders.reduceRight(function (acc, e) {
      return [...acc, _this.renderOrderRow(e)];
    }, []);
  }

  renderPagination() {
    const {
      isLoading,
      orderList: {
        pageInfo: {
          total_pages = 0
        } = {}
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isLoading: isLoading,
      totalPages: total_pages,
      mix: {
        block: 'MyAccountMyOrders',
        elem: 'Pagination'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    });
  }

  render() {
    const {
      isLoading
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountMyOrders",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }), this.renderTable(), this.renderPagination());
  }

}, _class.propTypes = {
  orderList: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__["OrdersListType"].isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].isRequired
}, _class), "Component/MyAccountMyOrders/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountMyOrders);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.container.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.container.js ***!
  \**********************************************************************************************************/
/*! exports provided: OrderDispatcher, mapStateToProps, mapDispatchToProps, MyAccountMyOrdersContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDispatcher", function() { return OrderDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountMyOrdersContainer", function() { return MyAccountMyOrdersContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Browser */ "./node_modules/@scandipwa/scandipwa/src/util/Browser/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountMyOrders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyAccountMyOrders.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.container.js";

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
/** #namespace Component/MyAccountMyOrders/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    orderList: state.OrderReducer.orderList,
    isLoading: state.OrderReducer.isLoading,
    device: state.ConfigReducer.device
  };
}, "Component/MyAccountMyOrders/Container/mapStateToProps");
/** #namespace Component/MyAccountMyOrders/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    getOrderList: function (page) {
      return OrderDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.requestOrders(dispatch, page);
      });
    }
  };
}, "Component/MyAccountMyOrders/Container/mapDispatchToProps");
/** #namespace Component/MyAccountMyOrders/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountMyOrdersContainer = Mosaic.middleware((_class = class MyAccountMyOrdersContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  componentDidMount() {
    const {
      getOrderList
    } = this.props;
    getOrderList(this._getPageFromUrl());
  }

  componentDidUpdate(prevProps) {
    const {
      getOrderList
    } = this.props;
    const {
      location: prevLocation
    } = prevProps;

    const prevPage = this._getPageFromUrl(prevLocation);

    const currentPage = this._getPageFromUrl();

    if (currentPage !== prevPage) {
      getOrderList(this._getPageFromUrl());
      Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_7__["scrollToTop"])();
    }
  }

  containerProps() {
    const {
      orderList,
      isLoading,
      device
    } = this.props;
    return {
      orderList,
      isLoading,
      device
    };
  }

  _getPageFromUrl(url) {
    const {
      location: currentLocation
    } = this.props;
    const location = url || currentLocation;
    return +(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_8__["getQueryParam"])('page', location) || 1);
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountMyOrders_component__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  getOrderList: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  orderList: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_5__["OrdersListType"].isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].isRequired,
  location: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_6__["LocationType"].isRequired
}, _class), "Component/MyAccountMyOrders/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountMyOrdersContainer)));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountMyOrders_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountMyOrders.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountMyOrders/MyAccountMyOrders.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountMyOrders_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.component.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.component.js ***!
  \********************************************************************************************************************/
/*! exports provided: MyAccountOrderTableRow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderTableRow", function() { return MyAccountOrderTableRow; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
/* harmony import */ var _MyAccountOrderTableRow_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyAccountOrderTableRow.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.style.scss");
/* harmony import */ var _MyAccountOrderTableRow_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderTableRow_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.component.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-tdeme
 * @link https://gitdub.com/scandipwa/base-tdeme
 */





/** #namespace Component/MyAccountOrderTableRow/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderTableRow = Mosaic.middleware((_class = class MyAccountOrderTableRow_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      order: {
        created_at,
        status,
        increment_id,
        total: {
          grand_total: {
            value,
            currency
          } = {}
        } = {}
      },
      onViewClick
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "tr", {
      onClick: onViewClick,
      block: "MyAccountOrderTableRow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, increment_id ? `#${increment_id}` : ''), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, created_at), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, status), /*#__PURE__*/_checkBEM(React, "td", {
      block: "hidden-mobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, value ? Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(value, currency) : ''));
  }

}, _class.propTypes = {
  order: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_2__["OrderType"].isRequired,
  onViewClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/MyAccountOrderTableRow/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderTableRow);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.container.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.container.js ***!
  \********************************************************************************************************************/
/*! exports provided: mapDispatchToProps, mapStateToProps, MyAccountOrderTableRowContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderTableRowContainer", function() { return MyAccountOrderTableRowContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountOrderTableRow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyAccountOrderTableRow.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.container.js";

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








/** #namespace Component/MyAccountOrderTableRow/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountOrderTableRow/Container/mapDispatchToProps");
/** #namespace Component/MyAccountOrderTableRow/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    device: state.ConfigReducer.device
  };
}, "Component/MyAccountOrderTableRow/Container/mapStateToProps");
/** #namespace Component/MyAccountOrderTableRow/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderTableRowContainer = Mosaic.middleware((_class = class MyAccountOrderTableRowContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onViewClick: this.onViewClick.bind(this)
    };
  }

  onViewClick() {
    const {
      order: {
        id
      }
    } = this.props;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_5__["default"].push({
      pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_6__["appendWithStoreCode"])(`${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT_ORDER_URL"]}/${id}`)
    });
  }

  containerProps() {
    const {
      display_tax_in_shipping_amount,
      order
    } = this.props;
    return {
      display_tax_in_shipping_amount,
      order
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOrderTableRow_component__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  order: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OrderType"].isRequired,
  display_tax_in_shipping_amount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, _class.defaultProps = {
  display_tax_in_shipping_amount: ''
}, _class), "Component/MyAccountOrderTableRow/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountOrderTableRowContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderTableRow_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderTableRow.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTableRow/MyAccountOrderTableRow.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderTableRow_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.component.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.component.js ***!
  \********************************************************************************************/
/*! exports provided: Pagination, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ChevronIcon */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ChevronIcon/ChevronIcon.config */ "./node_modules/@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_PaginationLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/PaginationLink */ "./node_modules/@scandipwa/scandipwa/src/component/PaginationLink/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/TextPlaceholder */ "./node_modules/@scandipwa/scandipwa/src/component/TextPlaceholder/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Manipulations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Manipulations */ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/index.js");
/* harmony import */ var _Pagination_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pagination.style */ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.style.scss");
/* harmony import */ var _Pagination_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Pagination_style__WEBPACK_IMPORTED_MODULE_8__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.component.js";

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









/** #namespace Component/Pagination/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Pagination = Mosaic.middleware((_class = class Pagination_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderPreviousPageLink() {
    const {
      anchorTextPrevious,
      currentPage,
      totalPages,
      paginationFrame
    } = this.props;
    /*
    1. hide 'Previous' button if current page is the first page
    2. hide 'Previous' button if total number of pages doesn't exceed total number of pages to display
    (i.e. all pages are already shown)
     */

    if (currentPage <= 1 || paginationFrame >= totalPages) {
      return /*#__PURE__*/_checkBEM(React, "li", {
        block: "Pagination",
        elem: "ListItem",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      });
    }

    return this.renderPageLink(currentPage - 1, __('Previous page'), anchorTextPrevious || this.renderPageIcon());
  }

  renderPageLinks() {
    var _this = this;

    const {
      currentPage,
      firstFramePage,
      lastFramePage
    } = this.props;
    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Manipulations__WEBPACK_IMPORTED_MODULE_7__["range"])(firstFramePage, lastFramePage).map(function (page) {
      return _this.renderPageLink(page, __('Page %s', page), page.toString(), page === currentPage);
    });
  }

  renderPageIcon() {
    let isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      direction: isNext ? _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_3__["RIGHT"] : _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ChevronIcon_ChevronIcon_config__WEBPACK_IMPORTED_MODULE_3__["LEFT"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    });
  }

  renderNextPageLink() {
    const {
      anchorTextNext,
      currentPage,
      totalPages,
      paginationFrame
    } = this.props;
    /*
    1. hide 'Next' button if current page is the last page
    2. hide 'Next' button if total number of pages doesn't exceed total number of pages to display
    (i.e. all pages are already shown)
     */

    if (currentPage > totalPages - 1 || paginationFrame >= totalPages) {
      return /*#__PURE__*/_checkBEM(React, "li", {
        block: "Pagination",
        elem: "ListItem",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      });
    }

    return this.renderPageLink(currentPage + 1, __('Next page'), anchorTextNext || this.renderPageIcon(true));
  }

  renderPageLink(pageNumber, label, children) {
    let isCurrent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const {
      pathname,
      getSearchQuery
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "li", {
      key: pageNumber,
      block: "Pagination",
      elem: "ListItem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_PaginationLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: label,
      url_path: pathname,
      isCurrent: isCurrent,
      pageNumber: pageNumber,
      getSearchQueryForPage: getSearchQuery,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, children));
  }

  renderFirstPageLink() {
    const {
      shouldRenderJumps,
      firstFramePage
    } = this.props;

    if (!shouldRenderJumps || firstFramePage === 1) {
      return null;
    }

    return this.renderPageLink(1, __('Page %s', 1), '1');
  }

  renderLastPageLink() {
    const {
      totalPages,
      shouldRenderJumps,
      lastFramePage
    } = this.props;

    if (!shouldRenderJumps || lastFramePage === totalPages) {
      return null;
    }

    return this.renderPageLink(totalPages, __('Page %s', totalPages), totalPages.toString());
  } // displayed as '...' by default


  renderPreviousJump() {
    const {
      prevPageJump,
      shouldRenderPreviousJump
    } = this.props;

    if (!shouldRenderPreviousJump) {
      return null;
    }

    return this.renderPageLink(prevPageJump, __('Page %s', prevPageJump), '...');
  } // displayed as '...' by default


  renderNextJump() {
    const {
      nextPageJump,
      shouldRenderNextJump
    } = this.props;

    if (!shouldRenderNextJump) {
      return null;
    }

    return this.renderPageLink(nextPageJump, __('Page %s', nextPageJump), '...');
  }

  renderPlaceholder() {
    var _this2 = this;

    return /*#__PURE__*/_checkBEM(React, "ul", {
      block: "Pagination",
      mods: {
        isLoading: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }
    }, Array.from({
      length: 4
    }, function (_, i) {
      return /*#__PURE__*/_checkBEM(React, "li", {
        key: i,
        block: "Pagination",
        elem: "ListItem",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }
      }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
        length: "block",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 25
        }
      }));
    }));
  }

  render() {
    const {
      isLoading,
      totalPages,
      id,
      mix
    } = this.props;

    if (totalPages === 1) {
      // do not show pagination, if there are less then one page
      return /*#__PURE__*/_checkBEM(React, "ul", {
        block: "Pagination",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 20
        }
      });
    }

    if (isLoading) {
      return this.renderPlaceholder();
    }

    return /*#__PURE__*/_checkBEM(React, "nav", {
      "aria-label": __('List navigation'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "ul", {
      block: "Pagination",
      id: id,
      mix: mix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }
    }, this.renderPreviousPageLink(), this.renderFirstPageLink(), this.renderPreviousJump(), this.renderPageLinks(), this.renderNextJump(), this.renderLastPageLink(), this.renderNextPageLink()));
  }

}, _class.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  getSearchQuery: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  anchorTextPrevious: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  anchorTextNext: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  firstFramePage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  lastFramePage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  prevPageJump: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  nextPageJump: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  shouldRenderNextJump: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  shouldRenderPreviousJump: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  shouldRenderJumps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  paginationFrame: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_6__["MixType"].isRequired
}, _class), "Component/Pagination/Component");
/* harmony default export */ __webpack_exports__["default"] = (Pagination);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.config.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.config.js ***!
  \*****************************************************************************************/
/*! exports provided: UTMOST_PAGES_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTMOST_PAGES_COUNT", function() { return UTMOST_PAGES_COUNT; });
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
const UTMOST_PAGES_COUNT = 2;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.container.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.container.js ***!
  \********************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, PaginationContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationContainer", function() { return PaginationContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Pagination_Pagination_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Pagination/Pagination.config */ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _Pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pagination.component */ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.container.js";

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









/** #namespace Component/Pagination/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    paginationFrame: state.ConfigReducer.pagination_frame,
    paginationFrameSkip: state.ConfigReducer.pagination_frame_skip,
    anchorTextPrevious: state.ConfigReducer.anchor_text_for_previous,
    anchorTextNext: state.ConfigReducer.anchor_text_for_next
  };
}, "Component/Pagination/Container/mapStateToProps");
/** #namespace Component/Pagination/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/Pagination/Container/mapDispatchToProps");
/** #namespace Component/Pagination/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const PaginationContainer = Mosaic.middleware((_class = class PaginationContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      getSearchQuery: this.getSearchQuery.bind(this)
    };
  }

  getSearchQuery(pageNumber) {
    const {
      history,
      location
    } = this.props;
    const page = pageNumber !== 1 ? pageNumber : '';
    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_7__["generateQuery"])({
      page
    }, location, history);
  }

  containerProps() {
    const {
      anchorTextNext,
      anchorTextPrevious,
      id,
      isLoading,
      paginationFrame,
      totalPages,
      location: {
        pathname
      },
      mix
    } = this.props;
    return {
      anchorTextNext,
      anchorTextPrevious,
      id,
      isLoading,
      paginationFrame,
      pathname,
      totalPages,
      mix,
      currentPage: this._getCurrentPage(),
      prevPageJump: this._getPrevPageJump(),
      nextPageJump: this._getNextPageJump(),
      firstFramePage: this._getFirstFramePage(),
      lastFramePage: this._getLastFramePage(),
      shouldRenderNextJump: this._shouldRenderNextJump(),
      shouldRenderPreviousJump: this._shouldRenderPreviousJump(),
      shouldRenderJumps: this._shouldRenderJumps()
    };
  }

  _getCurrentPage() {
    const {
      location
    } = this.props;
    return +(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_7__["getQueryParam"])('page', location) || 1);
  } // e.g. 5 for pagination like 1 ... 5 6 7 ... 14


  _getFirstFramePage() {
    const {
      paginationFrame,
      totalPages
    } = this.props;
    const maxFirstPage = this._getCurrentPage() - Math.ceil(paginationFrame / 2) + 1;
    const minFirstPage = totalPages - paginationFrame + 1;
    return Math.max(1, Math.min(maxFirstPage, minFirstPage));
  } // e.g. 7 for pagination like 1 ... 5 6 7 ... 14


  _getLastFramePage() {
    const {
      paginationFrame,
      totalPages
    } = this.props;
    return Math.min(totalPages, this._getFirstFramePage() + paginationFrame - 1);
  } // i.e. what page you go to on click on first '...'


  _getPrevPageJump() {
    const {
      paginationFrameSkip
    } = this.props;
    return Math.max(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Pagination_Pagination_config__WEBPACK_IMPORTED_MODULE_4__["UTMOST_PAGES_COUNT"], this._getFirstFramePage() - paginationFrameSkip);
  } // i.e. what page you go to on click on second '...'


  _getNextPageJump() {
    const {
      paginationFrameSkip,
      totalPages
    } = this.props;
    return Math.min(totalPages - 1, this._getLastFramePage() + paginationFrameSkip);
  }

  _shouldRenderJumps() {
    const {
      paginationFrameSkip
    } = this.props;
    return !(!paginationFrameSkip || paginationFrameSkip < 2);
  }

  _shouldRenderNextJump() {
    const {
      totalPages
    } = this.props;

    if (!this._shouldRenderJumps()) {
      return false;
    }

    return totalPages - this._getLastFramePage() >= _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Pagination_Pagination_config__WEBPACK_IMPORTED_MODULE_4__["UTMOST_PAGES_COUNT"];
  }

  _shouldRenderPreviousJump() {
    if (!this._shouldRenderJumps()) {
      return false;
    }

    return this._getFirstFramePage() > _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Pagination_Pagination_config__WEBPACK_IMPORTED_MODULE_4__["UTMOST_PAGES_COUNT"];
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Pagination_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  history: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_6__["HistoryType"].isRequired,
  location: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_6__["LocationType"].isRequired,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  paginationFrame: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  paginationFrameSkip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  anchorTextPrevious: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  anchorTextNext: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_5__["MixType"]
}, _class.defaultProps = {
  isLoading: false,
  paginationFrame: 5,
  paginationFrameSkip: null,
  anchorTextPrevious: '',
  anchorTextNext: '',
  id: '',
  mix: {}
}, _class), "Component/Pagination/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PaginationContainer)));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Pagination/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.container */ "./node_modules/@scandipwa/scandipwa/src/component/Pagination/Pagination.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Pagination_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/PaginationLink/PaginationLink.component.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/PaginationLink/PaginationLink.component.js ***!
  \****************************************************************************************************/
/*! exports provided: PaginationLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationLink", function() { return PaginationLink; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _PaginationLink_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaginationLink.style */ "./node_modules/@scandipwa/scandipwa/src/component/PaginationLink/PaginationLink.style.scss");
/* harmony import */ var _PaginationLink_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PaginationLink_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/PaginationLink/PaginationLink.component.js";

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





/** #namespace Component/PaginationLink/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const PaginationLink = Mosaic.middleware((_class = class PaginationLink_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  getSearchQueryForPage() {
    const {
      getSearchQueryForPage,
      pageNumber
    } = this.props;
    return getSearchQueryForPage(pageNumber);
  }

  render() {
    const {
      label,
      url_path: pathname,
      isCurrent,
      children
    } = this.props;
    const search = this.getSearchQueryForPage();
    const {
      state = {}
    } = history.state || {};
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: {
        search,
        pathname,
        state
      },
      "aria-label": label,
      block: "PaginationLink",
      mods: {
        isCurrent,
        isArrow: typeof children !== 'string'
      },
      "aria-current": isCurrent ? 'page' : 'false',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, children);
  }

}, _class.propTypes = {
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["ChildrenType"],
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isCurrent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  url_path: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  pageNumber: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  getSearchQueryForPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class.defaultProps = {
  children: []
}, _class), "Component/PaginationLink/Component");
/* harmony default export */ __webpack_exports__["default"] = (PaginationLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/PaginationLink/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/PaginationLink/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationLink_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationLink.component */ "./node_modules/@scandipwa/scandipwa/src/component/PaginationLink/PaginationLink.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PaginationLink_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Array.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Array.js ***!
  \***************************************************************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
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

/** #namespace Util/Manipulations/Array/range */
const range = Mosaic.middleware(function (start, end) {
  const length = end - start + 1;
  return Array.from({
    length
  }, function (_, i) {
    return start + i;
  });
}, "Util/Manipulations/Array/range");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Manipulations/index.js ***!
  \***************************************************************************/
/*! exports provided: range, MILLISECONDS_PER_MINUTE, convertStringToDate, getTimeInCurrentTimezone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _Array__WEBPACK_IMPORTED_MODULE_0__["range"]; });

/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Date */ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_PER_MINUTE", function() { return _Date__WEBPACK_IMPORTED_MODULE_1__["MILLISECONDS_PER_MINUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertStringToDate", function() { return _Date__WEBPACK_IMPORTED_MODULE_1__["convertStringToDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimeInCurrentTimezone", function() { return _Date__WEBPACK_IMPORTED_MODULE_1__["getTimeInCurrentTimezone"]; });

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



/***/ })

}]);
//# sourceMappingURL=account-orders.chunk.js.map