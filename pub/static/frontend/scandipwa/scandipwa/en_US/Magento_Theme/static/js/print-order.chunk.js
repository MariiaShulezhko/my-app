(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["print-order"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/DateSelect/DateSelect.config.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/DateSelect/DateSelect.config.js ***!
  \*****************************************************************************************/
/*! exports provided: AMPM_FORMAT, DEFAULT_MONTH_DAYS, MONTHS_COUNT, MINUTES_COUNT, HOURS_12H_COUNT, HOURS_24H_COUNT, FIELD_NAME_ATTR, FIELD_TYPE_ATTR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMPM_FORMAT", function() { return AMPM_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MONTH_DAYS", function() { return DEFAULT_MONTH_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS_COUNT", function() { return MONTHS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTES_COUNT", function() { return MINUTES_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_12H_COUNT", function() { return HOURS_12H_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_24H_COUNT", function() { return HOURS_24H_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_NAME_ATTR", function() { return FIELD_NAME_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_ATTR", function() { return FIELD_TYPE_ATTR; });
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
const AMPM_FORMAT = {
  AM: __('AM'),
  PM: __('PM')
};
const DEFAULT_MONTH_DAYS = 31;
const MONTHS_COUNT = 12;
const MINUTES_COUNT = 60;
const HOURS_12H_COUNT = 12;
const HOURS_24H_COUNT = 24;
const FIELD_NAME_ATTR = 'data-field';
const FIELD_TYPE_ATTR = 'data-type';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js ***!
  \*******************************************************************************/
/*! exports provided: FIELD_TYPE, FIELD_RADIO_NONE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE", function() { return FIELD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_RADIO_NONE", function() { return FIELD_RADIO_NONE; });
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
const FIELD_TYPE = {
  email: 'email',
  text: 'text',
  numberWithControls: 'numberWithControls',
  number: 'number',
  radio: 'radio',
  checkbox: 'checkbox',
  textarea: 'textarea',
  password: 'password',
  select: 'select',
  file: 'file',
  multi: 'multi',
  date: 'date',
  time: 'time',
  tel: 'tel',
  dateTime: 'datetime-local',
  submit: 'submit',
  button: 'button'
};
const FIELD_RADIO_NONE = 'none';
/* harmony default export */ __webpack_exports__["default"] = (FIELD_TYPE);

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/FieldDate/FieldDate.config.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/FieldDate/FieldDate.config.js ***!
  \***************************************************************************************/
/*! exports provided: FIELD_DATE_TYPE, TIME_FORMAT, DATE_FIELDS_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_DATE_TYPE", function() { return FIELD_DATE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FORMAT", function() { return TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FIELDS_COUNT", function() { return DATE_FIELDS_COUNT; });
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
const FIELD_DATE_TYPE = {
  date: 'date',
  dateTime: 'dateTime',
  time: 'time'
};
const TIME_FORMAT = {
  H12: '12h',
  H24: '24h'
};
const DATE_FIELDS_COUNT = 3;

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js ***!
  \*********************************************************************************/
/*! exports provided: PDP, POPUP, CATEGORY, CUSTOMER_ACCOUNT, CUSTOMER_SUB_ACCOUNT, CUSTOMER_ACCOUNT_PAGE, CUSTOMER_WISHLIST, CUSTOMER_ORDER, HOME_PAGE, MENU, MENU_SUBCATEGORY, SEARCH, FILTER, CART, CART_OVERLAY, CART_EDITING, CHECKOUT, CHECKOUT_SUCCESS, CHECKOUT_ACCOUNT, CMS_PAGE, MY_ACCOUNT, NO_MATCH, CONTACT_US, PRODUCT_COMPARE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDP", function() { return PDP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP", function() { return POPUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_ACCOUNT", function() { return CUSTOMER_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_SUB_ACCOUNT", function() { return CUSTOMER_SUB_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_ACCOUNT_PAGE", function() { return CUSTOMER_ACCOUNT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_WISHLIST", function() { return CUSTOMER_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_ORDER", function() { return CUSTOMER_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_SUBCATEGORY", function() { return MENU_SUBCATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER", function() { return FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_OVERLAY", function() { return CART_OVERLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_EDITING", function() { return CART_EDITING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT", function() { return CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_SUCCESS", function() { return CHECKOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_ACCOUNT", function() { return CHECKOUT_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMS_PAGE", function() { return CMS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_ACCOUNT", function() { return MY_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_MATCH", function() { return NO_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT_US", function() { return CONTACT_US; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_COMPARE", function() { return PRODUCT_COMPARE; });
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
const PDP = 'pdp';
const POPUP = 'popup';
const CATEGORY = 'category';
const CUSTOMER_ACCOUNT = 'customer_account';
const CUSTOMER_SUB_ACCOUNT = 'customer_sub_account';
const CUSTOMER_ACCOUNT_PAGE = 'customer_account_page';
const CUSTOMER_WISHLIST = 'wishlist';
const CUSTOMER_ORDER = 'customer_order';
const HOME_PAGE = 'home';
const MENU = 'menu';
const MENU_SUBCATEGORY = 'menu_subcategory';
const SEARCH = 'search';
const FILTER = 'filter';
const CART = 'cart';
const CART_OVERLAY = 'cart_overlay';
const CART_EDITING = 'cart_editing';
const CHECKOUT = 'checkout';
const CHECKOUT_SUCCESS = 'checkout_success';
const CHECKOUT_ACCOUNT = 'checkout_account';
const CMS_PAGE = 'cms-page';
const MY_ACCOUNT = 'my-account';
const NO_MATCH = 'no-match';
const CONTACT_US = 'contact-us';
const PRODUCT_COMPARE = 'product-compare';

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.component.js ***!
  \********************************************************************************/
/*! exports provided: Logo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/component/Image/Image.component */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/Image/Image.config */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_style_icons_logos_mainLogo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/style/icons/logos/mainLogo.svg */ "./node_modules/@scandipwa/scandipwa/src/style/icons/logos/mainLogo.svg");
/* harmony import */ var _Logo_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.style */ "./node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.style.scss");
/* harmony import */ var _Logo_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Logo_style__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.component.js";

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




/** #namespace Component/Logo/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Logo = Mosaic.middleware(class Logo_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_component__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  renderPlaceholderLogo() {
    const {
      onImageLoad
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Logo",
      elem: "Placeholder",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_component__WEBPACK_IMPORTED_MODULE_0__["default"], {
      src: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_style_icons_logos_mainLogo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "LogoPlaceholder",
      ratio: "custom",
      onImageLoad: onImageLoad,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }));
  }

  renderImage() {
    const {
      imageStatus
    } = this.state;
    const {
      src
    } = this.props;

    if (!src) {
      return this.renderPlaceholderLogo();
    }

    switch (imageStatus) {
      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_1__["IMAGE_NOT_FOUND"]:
      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_config__WEBPACK_IMPORTED_MODULE_1__["IMAGE_NOT_SPECIFIED"]:
        return this.renderPlaceholderLogo();

      default:
        return super.renderImage();
    }
  }

  render() {
    const {
      imageStatus
    } = this.state;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Image",
      mods: {
        imageStatus
      },
      mix: {
        block: 'Logo'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, this.renderImage());
  }

}, "Component/Logo/Component");
/* harmony default export */ __webpack_exports__["default"] = (Logo);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.container.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.container.js ***!
  \********************************************************************************/
/*! exports provided: LogoContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return LogoContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/component/Image/Image.container */ "./node_modules/@scandipwa/scandipwa/src/component/Image/Image.container.js");
/* harmony import */ var _Logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.component */ "./node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.component.js");
var _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.container.js";

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


/** #namespace Component/Logo/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const LogoContainer = Mosaic.middleware(class LogoContainer_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Image_Image_container__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  render() {
    return /*#__PURE__*/_checkBEM(React, _Logo_component__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }));
  }

}, "Component/Logo/Container");
/* harmony default export */ __webpack_exports__["default"] = (LogoContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Logo/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Logo/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.container */ "./node_modules/@scandipwa/scandipwa/src/component/Logo/Logo.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Logo_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountAddressTable.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/MyAccountAddressTable.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountAddressTable_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.component.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.component.js ***!
  \****************************************************************************************************/
/*! exports provided: MyAccountOrder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrder", function() { return MyAccountOrder; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountOrderInformation */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderItemsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MyAccountOrderItemsTable */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/MyAccountOrderTabs */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Manipulations_Date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/Manipulations/Date */ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Date.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _MyAccountOrder_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MyAccountOrder.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.style.scss");
/* harmony import */ var _MyAccountOrder_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrder_style__WEBPACK_IMPORTED_MODULE_13__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.component.js";

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














/** #namespace Component/MyAccountOrder/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrder = Mosaic.middleware((_class = class MyAccountOrder_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.renderMap = {
      renderOrderItemsTable: this.renderOrderItemsTable.bind(this)
    };
    this.tabMap = {
      [_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_ITEMS"]]: {
        tabName: _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_ITEMS"],
        title: __('Items Ordered'),
        shouldTabRender: function () {
          const {
            order
          } = _this.props;
          return order;
        },
        render: function () {
          const {
            order: {
              items = [],
              increment_id
            }
          } = _this.props;
          const renderArray = [{
            items,
            number: increment_id
          }];
          const {
            renderOrderItemsTable
          } = _this.renderMap;
          return renderArray.map(renderOrderItemsTable);
        }
      },
      [_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_INVOICES"]]: {
        tabName: _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_INVOICES"],
        title: __('Invoices'),
        shouldTabRender: function () {
          const {
            order: {
              invoices = []
            }
          } = _this.props;
          return invoices.length;
        },
        render: function () {
          const {
            order: {
              invoices = []
            }
          } = _this.props;
          const {
            renderOrderItemsTable
          } = _this.renderMap;
          return invoices.map(renderOrderItemsTable);
        }
      },
      [_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_SHIPMENTS"]]: {
        tabName: _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_SHIPMENTS"],
        title: __('Order Shipments'),
        shouldTabRender: function () {
          const {
            order: {
              shipments = []
            }
          } = _this.props;
          return shipments.length;
        },
        render: function () {
          const {
            order: {
              shipments = []
            }
          } = _this.props;
          const {
            renderOrderItemsTable
          } = _this.renderMap;
          return shipments.map(renderOrderItemsTable);
        }
      },
      [_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_REFUNDS"]]: {
        tabName: _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_REFUNDS"],
        title: __('Refunds'),
        shouldTabRender: function () {
          const {
            order: {
              credit_memos = []
            }
          } = _this.props;
          return credit_memos.length;
        },
        render: function () {
          const {
            order: {
              credit_memos = []
            }
          } = _this.props;
          const {
            renderOrderItemsTable
          } = _this.renderMap;
          return credit_memos.map(renderOrderItemsTable);
        }
      }
    };
  }

  shouldTabsRender() {
    return Object.values(this.tabMap).filter(function (_ref) {
      let {
        shouldTabRender
      } = _ref;
      return shouldTabRender();
    });
  }

  renderOrderItemsTable(items, index) {
    const {
      activeTab,
      order: {
        total: orderTotal,
        items: allOrderItems,
        id
      }
    } = this.props;
    const {
      total: itemsTotal,
      id: itemId
    } = items;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderItemsTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: `${activeTab}-${id}-${index}`,
      activeTab: activeTab,
      items: items,
      allOrderItems: allOrderItems,
      total: itemsTotal || orderTotal,
      id: activeTab === _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_ITEMS"] ? id : atob(itemId),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    });
  }

  renderBaseInfo() {
    const {
      order: {
        order_date
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrder",
      elem: "CreationDate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, this.renderOrderIncrementIdAndStatus(), /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Manipulations_Date__WEBPACK_IMPORTED_MODULE_10__["convertStringToDate"])(order_date)));
  }

  renderOrderIncrementIdAndStatus() {
    const {
      order: {
        increment_id,
        status
      },
      isMobile
    } = this.props;

    if (!isMobile) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "h2", {
      block: "MyAccountOrder",
      elem: "OrderId",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, __('Order # %s', increment_id), /*#__PURE__*/_checkBEM(React, "span", {
      block: "MyAccountOrder",
      elem: "OrderStatus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }
    }, status));
  }

  renderPrintAllAction() {
    const {
      activeTab,
      order: {
        id
      }
    } = this.props;
    const {
      printAllUrl,
      printAll
    } = _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_ACTION_LABELS"][activeTab] || {};

    if (!printAllUrl) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      block: "MyAccountOrder",
      elem: "PrintOrder",
      to: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__["appendWithStoreCode"])(`${printAllUrl}/${id}`),
      isOpenInNewTab: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, printAll);
  }

  renderActions() {
    const {
      handleChangeActiveTab,
      activeTab
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrder",
      elem: "Actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrder",
      elem: "Buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    }, this.renderReorderButton(), this.renderSubscriptionButton()), this.renderPrintOrder()), this.renderOrderComments(), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tabs: this.shouldTabsRender(),
      handleChangeActiveTab: handleChangeActiveTab,
      activeTab: activeTab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }), this.renderPrintAllAction());
  }

  renderPrintOrder() {
    const {
      order: {
        id
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      block: "MyAccountOrder",
      elem: "SubscribeToStatus",
      to: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__["appendWithStoreCode"])(`${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__["ACCOUNT_ORDER_PRINT_URL"]}/${id}`),
      isOpenInNewTab: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }
    }, __('Print Order'));
  }

  renderOrderComments() {
    var _this2 = this;

    const {
      activeTab,
      order: {
        comments = []
      }
    } = this.props;

    if (activeTab !== _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_ITEMS"] || !comments || !comments.length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrder",
      elem: "Comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrder",
      elem: "CommentsTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }, __('About Your Order')), /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrder",
      elem: "CommentsList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }, comments.map(function (_ref2) {
      let {
        timestamp,
        message
      } = _ref2;
      return /*#__PURE__*/_checkBEM(React, "dl", {
        block: "MyAccountOrder",
        elem: "Comment",
        key: `${activeTab}-comment-${timestamp}`,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }
      }, /*#__PURE__*/_checkBEM(React, "dt", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 29
        }
      }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Manipulations_Date__WEBPACK_IMPORTED_MODULE_10__["getTimeInCurrentTimezone"])(timestamp)), /*#__PURE__*/_checkBEM(React, "dd", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 29
        }
      }, message));
    })));
  }

  renderSubscriptionButton() {
    const {
      order: {
        rss_link
      },
      rss_order_subscribe_allow
    } = this.props;

    if (!rss_order_subscribe_allow) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      block: "MyAccountOrder",
      elem: "SubscribeToStatus",
      to: rss_link,
      isOpenInNewTab: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 13
      }
    }, __('Subscribe to Order Status'));
  }

  renderReorderButton() {
    const {
      is_allowed_reorder,
      handleReorder,
      order: {
        can_reorder
      }
    } = this.props;

    if (!is_allowed_reorder || !can_reorder) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        likeLink: true
      },
      mix: {
        block: 'MyAccountOrder',
        elem: 'Reorder'
      },
      onClick: handleReorder,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 13
      }
    }, __('Reorder'));
  }

  renderOrderInformation() {
    const {
      order,
      activeTab
    } = this.props;

    if (activeTab === _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_12__["ORDER_REFUNDS"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderInformation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      order: order,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 16
      }
    });
  }

  renderActiveTab() {
    const {
      activeTab
    } = this.props;
    return this.tabMap[activeTab].render();
  }

  renderContent() {
    const {
      order: {
        items
      }
    } = this.props;

    if (!items) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderBaseInfo(), this.renderActions(), this.renderActiveTab(), this.renderOrderInformation());
  }

  render() {
    const {
      isLoading
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      mix: {
        block: 'MyAccountOrder',
        elem: 'Loader '
      },
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 17
      }
    }), this.renderContent());
  }

}, _class.propTypes = {
  order: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_8__["OrderType"].isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  handleReorder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  is_allowed_reorder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  rss_order_subscribe_allow: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  handleChangeActiveTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class.defaultProps = {
  isLoading: true,
  handleReorder: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_9__["noopFn"],
  handleChangeActiveTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_9__["noopFn"]
}, _class), "Component/MyAccountOrder/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrder);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.container.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.container.js ***!
  \****************************************************************************************************/
/*! exports provided: OrderDispatcher, mapStateToProps, mapDispatchToProps, MyAccountOrderContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDispatcher", function() { return OrderDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderContainer", function() { return MyAccountOrderContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Header/Header.config */ "./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.action */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.reducer */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.reducer.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountOrder_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MyAccountOrder.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.component.js");
/* harmony import */ var _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.container.js";

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
/** #namespace Component/MyAccountOrder/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    display_tax_in_shipping_amount: state.ConfigReducer.cartDisplayConfig.display_tax_in_shipping_amount,
    is_allowed_reorder: state.ConfigReducer.is_allowed_reorder,
    rss_order_subscribe_allow: state.ConfigReducer.rss_order_subscribe_allow,
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/MyAccountOrder/Container/mapStateToProps");
/** #namespace Component/MyAccountOrder/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showNotification: function (type, message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_8__["showNotification"])(type, message));
    },
    getOrderById: function (orderId) {
      return OrderDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.getOrderById(dispatch, orderId);
      });
    },
    reorder: function (incrementId) {
      return OrderDispatcher.then(function (_ref2) {
        let {
          default: dispatcher
        } = _ref2;
        return dispatcher.reorder(dispatch, incrementId);
      });
    },
    changeHeaderState: function (state) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_6__["changeNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_7__["TOP_NAVIGATION_TYPE"], state));
    },
    goToPreviousNavigationState: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_6__["goToPreviousNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_7__["BOTTOM_NAVIGATION_TYPE"]));
    }
  };
}, "Component/MyAccountOrder/Container/mapDispatchToProps");
/** #namespace Component/MyAccountOrder/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderContainer = Mosaic.middleware((_class = class MyAccountOrderContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      order: {},
      isLoading: true,
      activeTab: _MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_15__["ORDER_ITEMS"]
    };
    this.containerFunctions = {
      handleReorder: this.handleReorder.bind(this),
      handleChangeActiveTab: this.handleChangeActiveTab.bind(this)
    };
  }

  __construct(props) {
    super.__construct(props);

    const {
      match: {
        params: {
          orderId
        }
      }
    } = this.props;

    if (orderId) {
      this.requestOrderDetails();
    }
  }

  componentWillUnmount() {
    const {
      changeTabName,
      setTabSubheading
    } = this.props;
    changeTabName();
    setTabSubheading();
  }

  containerProps() {
    const {
      order: stateOrder,
      isLoading,
      activeTab
    } = this.state;
    const {
      display_tax_in_shipping_amount,
      is_allowed_reorder,
      rss_order_subscribe_allow,
      setTabSubheading,
      isMobile
    } = this.props;
    return {
      display_tax_in_shipping_amount,
      isLoading,
      is_allowed_reorder,
      activeTab,
      rss_order_subscribe_allow,
      setTabSubheading,
      isMobile,
      order: { ...stateOrder
      }
    };
  }

  handleReorder() {
    const {
      reorder
    } = this.props;
    const {
      order: {
        increment_id
      }
    } = this.state;
    reorder(increment_id);
  }

  handleChangeActiveTab(tab) {
    this.setState({
      activeTab: tab
    });
  }

  handleChangeHeaderState() {
    const {
      changeHeaderState
    } = this.props;
    changeHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__["CUSTOMER_ORDER"],
      title: __('Order'),
      onBackClick: function () {
        return _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].goBack();
      }
    });
  }

  requestOrderDetails() {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        match: {
          params: {
            orderId
          }
        },
        getOrderById,
        changeTabName,
        setTabSubheading
      } = _this.props;

      if (!Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__["isSignedIn"])()) {
        return;
      }

      const order = yield getOrderById(orderId);

      if (!order) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].replace(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__["appendWithStoreCode"])(`${_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_ORDER_HISTORY"]}`));
        return;
      }

      const {
        increment_id,
        status,
        id: uid
      } = order; // decode uid of order before setting into state

      order.id = atob(uid);
      changeTabName(__('Order # %s', increment_id));
      setTabSubheading(status);

      _this.handleChangeHeaderState();

      _this.setState({
        order,
        isLoading: false
      });
    })();
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOrder_component__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  match: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_9__["MatchType"].isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getOrderById: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  display_tax_in_shipping_amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  changeTabName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  reorder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  is_allowed_reorder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rss_order_subscribe_allow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setTabSubheading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  changeHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  goToPreviousNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
}, _class.defaultProps = {
  is_allowed_reorder: false,
  changeTabName: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__["noopFn"],
  setTabSubheading: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__["noopFn"]
}, _class), "Component/MyAccountOrder/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountOrderContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/MyAccountOrderInformation.component.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/MyAccountOrderInformation.component.js ***!
  \**************************************************************************************************************************/
/*! exports provided: MyAccountOrderInformation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderInformation", function() { return MyAccountOrderInformation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/MyAccountAddressTable */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountAddressTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _MyAccountOrderInformation_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyAccountOrderInformation.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/MyAccountOrderInformation.style.scss");
/* harmony import */ var _MyAccountOrderInformation_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderInformation_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/MyAccountOrderInformation.component.js";

/* eslint-disable */

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




/** #namespace Component/MyAccountOrderInformation/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderInformation = Mosaic.middleware((_class = class MyAccountOrderInformation_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  renderShippingMethod() {
    const {
      order: {
        shipping_method
      }
    } = this.props;

    if (!shipping_method) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "Column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "ColumnTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, __('Shipping Method')))), /*#__PURE__*/_checkBEM(React, "span", {
      block: "MyAccountOrderInformation",
      elem: "ShippingMethod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, shipping_method));
  }

  renderBillingAddress() {
    const {
      order: {
        billing_address
      } = {}
    } = this.props;

    if (!billing_address) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "Column",
      mods: {
        type: 'billingAddress'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "ColumnTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __('Billing Address')))), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
      address: billing_address,
      mix: {
        block: 'MyAccountOrderInformation',
        elem: 'Address'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }));
  }

  renderPaymentMethod(paymentMethod, index) {
    const {
      name,
      purchase_number
    } = paymentMethod;
    return /*#__PURE__*/_checkBEM(React, "div", {
      key: `${name}-${index}`,
      block: "MyAccountOrderInformation",
      elem: "PaymentMethod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, name), this.renderPurchaseNumber(purchase_number));
  }

  renderPurchaseNumber(purchaseNumber) {
    if (!purchaseNumber) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 16
      }
    }, __('Purchase Order Number: %s', purchaseNumber));
  }

  renderPaymentMethods() {
    const {
      order: {
        payment_methods = []
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "Column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "ColumnTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, __('Payment Method')))), payment_methods.map(this.renderPaymentMethod.bind(this)));
  }

  renderShippingAddress() {
    const {
      order: {
        shipping_address
      } = {}
    } = this.props;

    if (!shipping_address) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "Column",
      mods: {
        type: 'shippingAddress'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "ColumnTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 25
      }
    }, __('Shipping Address')))), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountAddressTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
      address: shipping_address,
      mix: {
        block: 'MyAccountOrderInformation',
        elem: 'Address'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }));
  }

  renderContent() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    }, __('Order Information')), /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "Information",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, this.renderShippingAddress(), this.renderShippingMethod(), this.renderBillingAddress(), this.renderPaymentMethods()));
  }

  render() {
    const {
      order
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderInformation",
      elem: "Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, this.renderContent());
  }

}, _class.propTypes = {
  order: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_2__["OrderType"].isRequired
}, _class), "Component/MyAccountOrderInformation/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderInformation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderInformation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderInformation.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderInformation/MyAccountOrderInformation.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderInformation_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.component.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.component.js ***!
  \************************************************************************************************************************/
/*! exports provided: MyAccountOrderItemsTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderItemsTable", function() { return MyAccountOrderItemsTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderItemsTableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountOrderItemsTableRow */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTotals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MyAccountOrderTotals */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Manipulations_Date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Manipulations/Date */ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Date.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Orders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Orders */ "./node_modules/@scandipwa/scandipwa/src/util/Orders/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountOrderItemsTable_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MyAccountOrderItemsTable.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.style.scss");
/* harmony import */ var _MyAccountOrderItemsTable_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderItemsTable_style__WEBPACK_IMPORTED_MODULE_10__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.component.js";

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











/** #namespace Component/MyAccountOrderItemsTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderItemsTable = Mosaic.middleware((_class = class MyAccountOrderItemsTable_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderItems() {
    const {
      items: {
        items: products = []
      }
    } = this.props;
    return products.map(this.renderItemRow.bind(this));
  }

  renderItemRow(product) {
    const {
      activeTab,
      allOrderItems,
      items: {
        comments = []
      }
    } = this.props;
    const {
      product_sku,
      product_url_key
    } = product;
    const {
      entered_options = [],
      selected_options = []
    } = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Orders__WEBPACK_IMPORTED_MODULE_8__["getProductFromOrder"])(allOrderItems, product_sku) || {};
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderItemsTableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: product,
      selectedOptions: selected_options,
      enteredOptions: entered_options,
      key: product_url_key,
      activeTab: activeTab,
      comments: comments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    });
  }

  renderPrintAction() {
    const {
      activeTab,
      id,
      isPrintPage
    } = this.props;
    const {
      print: printLabel,
      printUrl
    } = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_ACTION_LABELS"][activeTab] || {};

    if (!printLabel || isPrintPage) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      block: "MyAccountOrderItemsTable",
      elem: "PrintOrder",
      to: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_9__["appendWithStoreCode"])(`${printUrl}/${id}`),
      isOpenInNewTab: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, printLabel);
  }

  renderOrderTitleAndActions() {
    const {
      activeTab,
      items: {
        number
      },
      isMobile
    } = this.props;

    if (isMobile && activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_ITEMS"]) {
      return /*#__PURE__*/_checkBEM(React, "div", {
        block: "MyAccountOrderItemsTable",
        elem: "OrderTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }, __('Items Ordered'));
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderItemsTable",
      elem: "OrderActions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderItemsTable",
      elem: "OrderTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, `${activeTab} # ${number}`), this.renderPrintAction());
  }

  renderRefundsTableHeading() {
    const {
      activeTab
    } = this.props;

    if (activeTab !== _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_REFUNDS"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "th", {
      block: "MyAccountOrderItemsTable",
      elem: "Discount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __('Discount Amount')), /*#__PURE__*/_checkBEM(React, "th", {
      block: "MyAccountOrderItemsTable",
      elem: "Total",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, __('Row Total')));
  }

  renderPriceHeading() {
    const {
      activeTab
    } = this.props;

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "th", {
      block: "MyAccountOrderItemsTable",
      elem: "Price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, __('Price'));
  }

  renderSubtotalHeading() {
    const {
      activeTab
    } = this.props;

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "th", {
      block: "MyAccountOrderItemsTable",
      elem: "Subtotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, __('Subtotal'));
  }

  renderItemsHeading() {
    return /*#__PURE__*/_checkBEM(React, "tr", {
      block: "MyAccountOrderItemsTable",
      elem: "Headings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "th", {
      block: "MyAccountOrderItemsTable",
      elem: "Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    }, __('Product Name'))), /*#__PURE__*/_checkBEM(React, "th", {
      block: "MyAccountOrderItemsTable",
      elem: "ProductSku",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }
    }, __('SKU')), this.renderPriceHeading(), /*#__PURE__*/_checkBEM(React, "th", {
      block: "MyAccountOrderItemsTable",
      elem: "Quantity",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __('Qty')), this.renderSubtotalHeading(), this.renderRefundsTableHeading());
  }

  renderTotals() {
    const {
      total,
      activeTab
    } = this.props;

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTotals__WEBPACK_IMPORTED_MODULE_5__["default"], {
      activeTab: activeTab,
      total: total,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 16
      }
    });
  }

  renderComments() {
    var _this = this;

    const {
      items: {
        comments = []
      },
      activeTab,
      isPrintPage
    } = this.props;

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_ITEMS"] || !comments.length || isPrintPage) {
      return null;
    }

    const commentOrder = comments.sort(function (_ref, _ref2) {
      let {
        timestamp: first
      } = _ref;
      let {
        timestamp: second
      } = _ref2;
      return new Date(second.replace(/-/g, '/')) - new Date(first.replace(/-/g, '/'));
    });
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderItemsTable",
      elem: "Comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderItemsTable",
      elem: "CommentsTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }
    }, __('About Your %s', activeTab)), /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderItemsTable",
      elem: "CommentsList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }, commentOrder.map(function (_ref3) {
      let {
        timestamp,
        message
      } = _ref3;
      return /*#__PURE__*/_checkBEM(React, "dl", {
        block: "MyAccountOrderItemsTable",
        elem: "Comment",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 25
        }
      }, /*#__PURE__*/_checkBEM(React, "dt", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 29
        }
      }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Manipulations_Date__WEBPACK_IMPORTED_MODULE_7__["getTimeInCurrentTimezone"])(timestamp)), /*#__PURE__*/_checkBEM(React, "dd", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 29
        }
      }, message));
    })));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderItemsTable",
      elem: "ProductsWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 13
      }
    }, this.renderOrderTitleAndActions(), /*#__PURE__*/_checkBEM(React, "table", {
      block: "MyAccountOrderItemsTable",
      elem: "Products",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 21
      }
    }, this.renderItemsHeading()), this.renderItems(), this.renderTotals()), this.renderComments());
  }

}, _class.propTypes = {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  items: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__["OrderTabType"].isRequired,
  total: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__["OrderTotalType"].isRequired,
  allOrderItems: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__["OrderProductsType"].isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isPrintPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountOrderItemsTable/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderItemsTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.container.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.container.js ***!
  \************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountOrderItemsTableContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderItemsTableContainer", function() { return MyAccountOrderItemsTableContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _MyAccountOrderItemsTable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyAccountOrderItemsTable.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.container.js";

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





/** #namespace Component/MyAccountOrderItemsTable/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/MyAccountOrderItemsTable/Container/mapStateToProps");
/** #namespace Component/MyAccountOrderItemsTable/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountOrderItemsTable/Container/mapDispatchToProps");
/** #namespace Component/MyAccountOrderItemsTable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderItemsTableContainer = Mosaic.middleware((_class = class MyAccountOrderItemsTableContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      isMobile,
      items,
      activeTab,
      total,
      allOrderItems,
      id,
      isPrintPage
    } = this.props;
    return {
      isMobile,
      items,
      activeTab,
      total,
      allOrderItems,
      id,
      isPrintPage
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOrderItemsTable_component__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  items: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__["OrderTabType"].isRequired,
  total: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__["OrderTotalType"].isRequired,
  allOrderItems: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__["OrderProductsType"].isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isPrintPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  isPrintPage: false
}, _class), "Component/MyAccountOrderItemsTable/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountOrderItemsTableContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderItemsTable_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderItemsTable.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/MyAccountOrderItemsTable.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderItemsTable_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.component.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.component.js ***!
  \******************************************************************************************************************************/
/*! exports provided: MyAccountOrderItemsTableRow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderItemsTableRow", function() { return MyAccountOrderItemsTableRow; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Html */ "./node_modules/@scandipwa/scandipwa/src/component/Html/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Orders */ "./node_modules/@scandipwa/scandipwa/src/util/Orders/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
/* harmony import */ var _MyAccountOrderItemsTableRow_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyAccountOrderItemsTableRow.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.config.js");
/* harmony import */ var _MyAccountOrderItemsTableRow_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyAccountOrderItemsTableRow.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.style.scss");
/* harmony import */ var _MyAccountOrderItemsTableRow_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderItemsTableRow_style__WEBPACK_IMPORTED_MODULE_8__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.component.js";

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









/** #namespace Component/MyAccountOrderItemsTableRow/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderItemsTableRow = Mosaic.middleware((_class = class MyAccountOrderItemsTableRow_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.renderMap = {
      renderOption: this.renderOption.bind(this),
      renderQty: this.renderQty.bind(this),
      renderOptionItem: this.renderOptionItem.bind(this),
      renderEnteredOptionAsRow: this.renderEnteredOptionAsRow.bind(this)
    };
  }

  renderItemPrice() {
    const {
      product: {
        product_sale_price: {
          value,
          currency
        }
      },
      activeTab
    } = this.props;

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"]) {
      return null;
    }

    return this.renderPrice(value, currency, __('Price'));
  }

  renderQty(_ref, index) {
    let [type, qty] = _ref;
    const {
      activeTab
    } = this.props;

    if (qty === 0) {
      return null;
    }

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_ITEMS"]) {
      return /*#__PURE__*/_checkBEM(React, "li", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, `${_MyAccountOrderItemsTableRow_config__WEBPACK_IMPORTED_MODULE_7__["orderQtyTranslationMap"][type]}: ${qty}`);
    }

    return /*#__PURE__*/_checkBEM(React, "li", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, qty);
  }

  renderRowQty() {
    const {
      product
    } = this.props;
    const {
      renderQty
    } = this.renderMap;
    const qtyArray = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Orders__WEBPACK_IMPORTED_MODULE_5__["getOrderItemQtyToArray"])(product);
    return /*#__PURE__*/_checkBEM(React, "ul", {
      block: "MyAccountOrderItemsTableRow",
      elem: "QtyList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, Object.entries(qtyArray).map(renderQty));
  }

  renderRowSubtotal() {
    const {
      activeTab,
      product: {
        row_subtotal: {
          value,
          currency
        } = {}
      }
    } = this.props;

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"]) {
      return null;
    }

    return this.renderPrice(value, currency, __('Subtotal'));
  }

  renderPrice(value, currency, title) {
    return /*#__PURE__*/_checkBEM(React, "td", {
      "data-th": title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_6__["formatPrice"])(value, currency)));
  }

  renderSelectedAndEnteredOptions() {
    const {
      selectedOptions,
      enteredOptions
    } = this.props;
    const {
      renderOption
    } = this.renderMap;

    if (!selectedOptions.length && !enteredOptions.length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, selectedOptions.map(renderOption), enteredOptions.map(renderOption));
  }

  renderNameAndOptions() {
    const {
      product: {
        product_name
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "td", {
      "data-th": __('Product Name'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      block: "MyAccountOrderItemsTableRow",
      elem: "Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, product_name), this.renderSelectedAndEnteredOptions());
  }

  renderOptionItem(item, isLastOptionItem) {
    const {
      product: {
        quantity_ordered = 1,
        product_sale_price: {
          currency
        }
      }
    } = this.props;
    const {
      qty,
      title,
      price
    } = item;
    return /*#__PURE__*/_checkBEM(React, "tr", {
      block: "MyAccountOrderItemsTableRow",
      elem: "EnteredRow",
      mods: {
        isLastOptionItem
      },
      key: `${qty}-${title}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "td", {
      "data-th": __('Product Name'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }
    }, `${qty} x ${title}`), /*#__PURE__*/_checkBEM(React, "td", {
      "data-th": __('SKU'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }
    }, title), this.renderEnteredOptionPrice(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_6__["formatPrice"])(price, currency)), /*#__PURE__*/_checkBEM(React, "td", {
      block: "MyAccountOrderItemsTableRow",
      elem: "EnteredQty",
      "data-th": __('Qty'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }
    }, quantity_ordered * qty), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }));
  }

  renderEnteredOptionPrice(price) {
    const {
      activeTab
    } = this.props;

    if (activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"]) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "td", {
      block: "MyAccountOrderItemsTableRow",
      elem: "EnteredPrice",
      "data-th": __('Price'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }
    }, price));
  }

  renderEnteredOptionAsRow(option, index) {
    const {
      colSpanCount,
      enteredOptions
    } = this.props;
    const {
      label,
      items
    } = option;
    const {
      renderOptionItem
    } = this.renderMap;

    if (!items) {
      return null;
    }

    const isLastOptionItem = enteredOptions.length - 1 === index;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "tr", {
      block: "MyAccountOrderItemsTableRow",
      elem: "EnteredLabel",
      key: `${label}-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "td", {
      colSpan: colSpanCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 21
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 25
      }
    }, label))), items.map(function (item) {
      return renderOptionItem(item, isLastOptionItem);
    }));
  }

  renderEnteredOptionsAsRow() {
    const {
      enteredOptions
    } = this.props;
    const {
      renderEnteredOptionAsRow
    } = this.renderMap;

    if (!enteredOptions.length) {
      return null;
    }

    return enteredOptions.map(renderEnteredOptionAsRow);
  }

  renderOption(option) {
    const {
      label,
      items,
      value
    } = option || [];

    if (items) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "dl", {
      key: `${label}-${value}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "dt", {
      block: "MyAccountOrderItemsTableRow",
      elem: "OptionLabel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 21
      }
    }, label)), this.renderOptionContent(option));
  }

  renderOptionContent(option) {
    const {
      value = '',
      linkItems = []
    } = option;

    if (linkItems && linkItems.length) {
      return linkItems.map(this.renderLink.bind(this));
    }

    return /*#__PURE__*/_checkBEM(React, "dd", {
      block: "MyAccountOrderItemsTableRow",
      elem: "OptionValue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 16
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 75
      }
    }));
  }

  renderLink(title, index) {
    return /*#__PURE__*/_checkBEM(React, "dd", {
      block: "MyAccountOrderItemsTableRow",
      elem: "DownloadableLink",
      key: `${title}-${index}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }
    }, title);
  }

  renderDiscountAndRowTotal() {
    const {
      activeTab,
      product: {
        row_subtotal: {
          value: row_subtotal,
          currency
        } = {},
        discounts = []
      },
      isMobile
    } = this.props;

    if (activeTab !== _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_REFUNDS"]) {
      return null;
    }

    const totalDiscount = discounts.length ? Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Orders__WEBPACK_IMPORTED_MODULE_5__["getOrderItemRowDiscount"])(discounts) : 0;

    if (isMobile) {
      return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderPrice(-totalDiscount, currency, __('Discount Amount')), this.renderPrice(row_subtotal - totalDiscount, currency, __('Row Total')));
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 21
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_6__["formatPrice"])(-totalDiscount, currency))), /*#__PURE__*/_checkBEM(React, "td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 21
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_6__["formatPrice"])(row_subtotal - totalDiscount, currency))));
  }

  renderTableRow() {
    var _enteredOptions$;

    const {
      activeTab,
      product: {
        product_sku
      },
      enteredOptions = [],
      comments
    } = this.props;
    const isWithEnteredItems = !!((_enteredOptions$ = enteredOptions[0]) === null || _enteredOptions$ === void 0 ? void 0 : _enteredOptions$.items);
    const lineBefore = !!(activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"] && comments.length);
    return /*#__PURE__*/_checkBEM(React, "tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "tr", {
      block: "MyAccountOrderItemsTableRow",
      elem: "RowWrapper",
      mods: {
        isWithEnteredItems,
        lineBefore
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 17
      }
    }, this.renderNameAndOptions(), /*#__PURE__*/_checkBEM(React, "td", {
      "data-th": __('SKU'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 21
      }
    }, product_sku), this.renderItemPrice(), /*#__PURE__*/_checkBEM(React, "td", {
      block: "MyAccountOrderItemsTableRow",
      elem: "Qty",
      "data-th": __('Qty'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 21
      }
    }, this.renderRowQty()), this.renderRowSubtotal(), this.renderDiscountAndRowTotal()), this.renderEnteredOptionsAsRow());
  }

  render() {
    return this.renderTableRow();
  }

}, _class.propTypes = {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.isRequired,
  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OrderProductType"].isRequired,
  selectedOptions: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OptionsType"].isRequired,
  enteredOptions: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OptionsType"].isRequired,
  colSpanCount: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool.isRequired,
  comments: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OrderComments"]
}, _class.defaultProps = {
  comments: []
}, _class), "Component/MyAccountOrderItemsTableRow/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderItemsTableRow);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.config.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.config.js ***!
  \***************************************************************************************************************************/
/*! exports provided: orderQtyTranslationMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderQtyTranslationMap", function() { return orderQtyTranslationMap; });
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
const orderQtyTranslationMap = {
  quantity_ordered: __('Ordered'),
  quantity_canceled: __('Canceled'),
  quantity_invoiced: __('Invoiced'),
  quantity_refunded: __('Refunded'),
  quantity_returned: __('Returned'),
  quantity_shipped: __('Shipped')
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.container.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.container.js ***!
  \******************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountOrderItemsTableRowContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderItemsTableRowContainer", function() { return MyAccountOrderItemsTableRowContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _MyAccountOrderItemsTableRow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyAccountOrderItemsTableRow.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.container.js";

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






/** #namespace Component/MyAccountOrderItemsTableRow/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/MyAccountOrderItemsTableRow/Container/mapStateToProps");
/** #namespace Component/MyAccountOrderItemsTableRow/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountOrderItemsTableRow/Container/mapDispatchToProps");
/** #namespace Component/MyAccountOrderItemsTableRow/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderItemsTableRowContainer = Mosaic.middleware((_class = class MyAccountOrderItemsTableRowContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      product,
      activeTab,
      enteredOptions,
      selectedOptions,
      isMobile,
      comments
    } = this.props;
    return {
      product,
      activeTab,
      enteredOptions,
      selectedOptions,
      isMobile,
      comments,
      colSpanCount: this.getOrderColumnSpanCount()
    };
  }

  getOrderColumnSpanCount() {
    const {
      activeTab
    } = this.props;

    switch (activeTab) {
      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_REFUNDS"]:
        {
          return '7';
        }

      case _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_3__["ORDER_SHIPMENTS"]:
        {
          return '3';
        }

      default:
        {
          return '5';
        }
    }
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOrderItemsTableRow_component__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OrderProductType"].isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  selectedOptions: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OptionsType"],
  enteredOptions: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OptionsType"],
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  comments: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OrderComments"]
}, _class.defaultProps = {
  selectedOptions: [],
  enteredOptions: [],
  comments: []
}, _class), "Component/MyAccountOrderItemsTableRow/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountOrderItemsTableRowContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderItemsTableRow_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderItemsTableRow.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTableRow/MyAccountOrderItemsTableRow.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderItemsTableRow_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.component.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: MyAccountOrderPrint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderPrint", function() { return MyAccountOrderPrint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Logo */ "./node_modules/@scandipwa/scandipwa/src/component/Logo/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderItemsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/MyAccountOrderItemsTable */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderItemsTable/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/CSS */ "./node_modules/@scandipwa/scandipwa/src/util/CSS/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Media */ "./node_modules/@scandipwa/scandipwa/src/util/Media/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media_Media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Media/Media */ "./node_modules/@scandipwa/scandipwa/src/util/Media/Media.js");
/* harmony import */ var _MyAccountOrderPrint_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MyAccountOrderPrint.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.style.scss");
/* harmony import */ var _MyAccountOrderPrint_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderPrint_style__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.component.js";

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











/** #namespace Component/MyAccountOrderPrint/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderPrint = Mosaic.middleware(class MyAccountOrderPrint_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_component__WEBPACK_IMPORTED_MODULE_4__["default"]) {
  constructor() {
    super(...arguments);
    this.logoRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    this.state = {
      isPrintShown: false
    };
  }

  componentDidUpdate() {
    const {
      order: {
        id
      } = {},
      isLogoLoaded
    } = this.props;
    const {
      isPrintShown
    } = this.state;

    if (id && isLogoLoaded && !isPrintShown) {
      this.showPrint();
    }
  }

  showPrint() {
    this.setState({
      isPrintShown: true
    });
    print();
  }

  renderOrderIncrementIdAndStatus() {
    const {
      order: {
        increment_id,
        status
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "h2", {
      block: "MyAccountOrder",
      elem: "OrderId",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, __('Order # %s', increment_id), /*#__PURE__*/_checkBEM(React, "span", {
      block: "MyAccountOrder",
      elem: "OrderStatus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, status));
  }

  renderOrderItemsTable(items, index) {
    const {
      activeTab,
      order: {
        total: orderTotal,
        items: allOrderItems,
        id
      }
    } = this.props;
    const {
      total: itemsTotal,
      id: itemId
    } = items;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderItemsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: `${activeTab}-${id}-${index}`,
      activeTab: activeTab,
      items: items,
      allOrderItems: allOrderItems,
      total: itemsTotal || orderTotal,
      id: activeTab === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_ITEMS"] ? id : atob(itemId),
      isPrintPage: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    });
  }

  renderLogoImage() {
    const {
      logo_src,
      logo_alt,
      logo_height,
      logo_width,
      onLogoLoad
    } = this.props;
    const logoSrc = logo_src ? Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media__WEBPACK_IMPORTED_MODULE_8__["default"])(logo_src, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Media_Media__WEBPACK_IMPORTED_MODULE_9__["LOGO_MEDIA"]) : null;
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__["default"].setVariable(this.logoRef, 'header-logo-height', `${logo_height}px`);
    _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_CSS__WEBPACK_IMPORTED_MODULE_7__["default"].setVariable(this.logoRef, 'header-logo-width', `${logo_width}px`);
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      to: "/",
      "aria-label": "Go to homepage by clicking on ScandiPWA logo",
      block: "MyAccountOrderPrint",
      elem: "LogoWrapper",
      key: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: logoSrc,
      alt: logo_alt,
      title: logo_alt,
      onImageLoad: onLogoLoad,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }));
  }

  renderCopyright() {
    const {
      copyright
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "small", {
      block: "MyAccountOrderPrint",
      elem: "Copyright",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, copyright);
  }

  renderContent() {
    const {
      order: {
        items
      }
    } = this.props;

    if (!items) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderLogoImage(), this.renderBaseInfo(), this.renderOrderComments(), this.renderActiveTab(), this.renderOrderInformation(), this.renderCopyright());
  }

  render() {
    const {
      isLoading
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderPrint",
      elem: "Wrapper",
      ref: this.logoRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }), this.renderContent());
  }

}, "Component/MyAccountOrderPrint/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderPrint);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.container.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.container.js ***!
  \**************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountOrderPrintContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderPrintContainer", function() { return MyAccountOrderPrintContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.container.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Meta_Meta_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Meta/Meta.action */ "./node_modules/@scandipwa/scandipwa/src/store/Meta/Meta.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountOrderPrint_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyAccountOrderPrint.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.container.js";

/* eslint-disable no-param-reassign */

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









/** #namespace Component/MyAccountOrderPrint/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return { ...Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_container__WEBPACK_IMPORTED_MODULE_3__["mapStateToProps"])(state),
    logo_src: state.ConfigReducer.header_logo_src,
    logo_alt: state.ConfigReducer.logo_alt,
    logo_height: state.ConfigReducer.logo_height,
    logo_width: state.ConfigReducer.logo_width,
    copyright: state.ConfigReducer.copyright
  };
}, "Component/MyAccountOrderPrint/Container/mapStateToProps");
/** #namespace Component/MyAccountOrderPrint/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return { ...Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_container__WEBPACK_IMPORTED_MODULE_3__["mapDispatchToProps"])(dispatch),
    updateMeta: function (meta) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Meta_Meta_action__WEBPACK_IMPORTED_MODULE_5__["updateMeta"])(meta));
    }
  };
}, "Component/MyAccountOrderPrint/Container/mapDispatchToProps");
/** #namespace Component/MyAccountOrderPrint/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderPrintContainer = Mosaic.middleware((_class = class MyAccountOrderPrintContainer_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_container__WEBPACK_IMPORTED_MODULE_3__["MyAccountOrderContainer"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_container__WEBPACK_IMPORTED_MODULE_3__["MyAccountOrderContainer"].containerFunctions,
      onLogoLoad: this.onLogoLoad.bind(this)
    };
    this.state = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_container__WEBPACK_IMPORTED_MODULE_3__["MyAccountOrderContainer"].state,
      isLogoLoaded: false
    };
  }

  componentDidMount() {
    this.requestOrderPrintDetails();
  }

  componentWillUnmount() {}

  requestOrderPrintDetails() {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        match: {
          params: {
            invoiceId,
            shipmentId,
            refundId
          }
        },
        orderPrintRequest,
        orderPrintMap
      } = _this.props;
      const {
        request
      } = orderPrintMap[orderPrintRequest];

      if (!request) {
        return _this.requestOrderDetails();
      }

      const order = yield request(invoiceId || shipmentId || refundId);

      if (!order) {
        return _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_7__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_8__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_ORDER_HISTORY"])
        });
      }

      return _this.handleSetOrder(order);
    })();
  }

  requestOrderDetails() {
    var _this2 = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        match: {
          params: {
            orderId
          }
        },
        getOrderById
      } = _this2.props;
      const order = yield getOrderById(orderId);

      if (!order) {
        return _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_7__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_8__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_ORDER_HISTORY"])
        });
      }

      return _this2.handleSetOrder(order);
    })();
  }

  handleSetOrder(order) {
    const {
      updateMeta
    } = this.props;
    const {
      id: uid,
      increment_id,
      ...newOrder
    } = order;
    updateMeta({
      title: __('Order # %s', increment_id)
    });
    this.setState({
      order: {
        increment_id,
        id: atob(uid),
        ...newOrder
      },
      isLoading: false
    });
  }

  onLogoLoad() {
    this.setState({
      isLogoLoaded: true
    });
  }

  containerProps() {
    const {
      logo_alt,
      logo_src,
      logo_height,
      logo_width,
      match,
      copyright,
      orderPrintRequest,
      orderPrintMap
    } = this.props;
    const {
      isLogoLoaded
    } = this.state;
    const {
      activeTab
    } = orderPrintMap[orderPrintRequest];
    return { ...super.containerProps(),
      logo_alt,
      logo_src,
      logo_height,
      logo_width,
      match,
      copyright,
      activeTab,
      isLogoLoaded
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOrderPrint_component__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_container__WEBPACK_IMPORTED_MODULE_3__["MyAccountOrderContainer"].propTypes,
  orderPrintRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  updateMeta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  orderPrintMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_6__["OrderPrintMapType"]).isRequired
}, _class), "Component/MyAccountOrderPrint/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountOrderPrintContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderPrint_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderPrint.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderPrint_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.component.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: MyAccountOrderTab, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderTab", function() { return MyAccountOrderTab; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyAccountOrderTab_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyAccountOrderTab.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.style.scss");
/* harmony import */ var _MyAccountOrderTab_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderTab_style__WEBPACK_IMPORTED_MODULE_2__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.component.js";

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



/** #namespace Component/MyAccountOrderTab/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderTab = Mosaic.middleware((_class = class MyAccountOrderTab_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      title,
      isActive,
      handleClickOnTab
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "li", {
      block: "MyAccountOrderTab",
      elem: "Item",
      mods: {
        isActive
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      mix: {
        block: 'MyAccountOrderTab',
        elem: 'Button'
      },
      onClick: handleClickOnTab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, title));
  }

}, _class.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  handleClickOnTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountOrderTab/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderTab);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.container.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.container.js ***!
  \**********************************************************************************************************/
/*! exports provided: MyAccountOrderTabContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderTabContainer", function() { return MyAccountOrderTabContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyAccountOrderTab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyAccountOrderTab.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.container.js";

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



/** #namespace Component/MyAccountOrderTab/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderTabContainer = Mosaic.middleware((_class = class MyAccountOrderTabContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      handleClickOnTab: this.handleClickOnTab.bind(this)
    };
  }

  containerProps() {
    const {
      tabName,
      isActive,
      title
    } = this.props;
    return {
      tabName,
      isActive,
      title
    };
  }

  handleClickOnTab() {
    const {
      onTabClick,
      tabName
    } = this.props;
    onTabClick(tabName);
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOrderTab_component__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  onTabClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  tabName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  isActive: false
}, _class), "Component/MyAccountOrderTab/Container");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderTabContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderTab_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderTab.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/MyAccountOrderTab.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderTab_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/MyAccountOrderTabs.component.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/MyAccountOrderTabs.component.js ***!
  \************************************************************************************************************/
/*! exports provided: MyAccountOrderTabs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderTabs", function() { return MyAccountOrderTabs; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/MyAccountOrderTab */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTab/index.js");
/* harmony import */ var _MyAccountOrderTabs_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyAccountOrderTabs.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/MyAccountOrderTabs.style.scss");
/* harmony import */ var _MyAccountOrderTabs_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderTabs_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/MyAccountOrderTabs.component.js";

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




/** #namespace Component/MyAccountOrderTabs/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderTabs = Mosaic.middleware((_class = class MyAccountOrderTabs_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderActiveTab() {
    const {
      tabs,
      activeTab
    } = this.props;
    return tabs[activeTab].render();
  }

  renderTab(item, i) {
    const {
      handleChangeActiveTab,
      activeTab
    } = this.props;
    const {
      title,
      tabName
    } = item;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderTab__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      tabName: tabName,
      key: i,
      onTabClick: handleChangeActiveTab,
      isActive: tabName === activeTab,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    });
  }

  renderTabs() {
    const {
      tabs
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "ul", {
      block: "MyAccountOrderTabs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, tabs.map(this.renderTab.bind(this)));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOrderTabs",
      elem: "Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, this.renderTabs());
  }

}, _class.propTypes = {
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    tabName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  })).isRequired,
  handleChangeActiveTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/MyAccountOrderTabs/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderTabs);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderTabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderTabs.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTabs/MyAccountOrderTabs.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderTabs_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.component.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.component.js ***!
  \****************************************************************************************************************/
/*! exports provided: MyAccountOrderTotals, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderTotals", function() { return MyAccountOrderTotals; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
/* harmony import */ var _MyAccountOrderTotals_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyAccountOrderTotals.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.style.scss");
/* harmony import */ var _MyAccountOrderTotals_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderTotals_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.component.js";

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






/** #namespace Component/MyAccountOrderTotals/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderTotals = Mosaic.middleware((_class = class MyAccountOrderTotals_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderTax(tax) {
    const {
      colSpanPriceCount,
      colSpanLabelCount
    } = this.props;
    const {
      amount: {
        value,
        currency
      },
      title,
      rate
    } = tax;
    return /*#__PURE__*/_checkBEM(React, "tr", {
      key: `${title}-${rate}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "th", {
      colSpan: colSpanLabelCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, `${title} (${rate})`), /*#__PURE__*/_checkBEM(React, "td", {
      colSpan: colSpanPriceCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_4__["formatPrice"])(value, currency)));
  }

  renderTaxes() {
    const {
      total: {
        taxes
      }
    } = this.props;
    return taxes.map(this.renderTax.bind(this));
  }

  renderDiscounts() {
    const {
      total: {
        discounts = []
      }
    } = this.props;

    if (!discounts.length) {
      return null;
    }

    return discounts.map(this.renderDiscount.bind(this));
  }

  renderDiscount(_ref, index) {
    let {
      label,
      amount: {
        value
      }
    } = _ref;
    const discountLabel = label ? __('Discount (%s)', label) : __('Discount');
    return this.renderPriceLine(discountLabel, -value, null, {}, `discount-${index}`);
  }

  renderContent() {
    const {
      total: {
        subtotal: {
          value: subtotalPrice
        },
        shipping_handling: {
          total_amount: {
            value: shippingHandlingPrice
          }
        },
        grand_total: {
          value: grandTotalPrice
        },
        total_tax: {
          value: totalTaxPrice
        }
      }
    } = this.props;
    const grandTotalMix = {
      block: 'MyAccountOrderTotals',
      elem: 'GrandTotal'
    };
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderPriceLine(__('Subtotal'), subtotalPrice), this.renderDiscounts(), this.renderPriceLine(__('Shipping & Handling'), shippingHandlingPrice), this.renderPriceLine(__('Grand Total (Excl.Tax)'), grandTotalPrice - totalTaxPrice, null, grandTotalMix), this.renderTaxes(), this.renderPriceLine(__('Tax'), totalTaxPrice), this.renderPriceLine(__('Grand Total (Incl.Tax)'), grandTotalPrice, null, grandTotalMix), this.renderBaseGrandTotal());
  }

  renderBaseGrandTotal() {
    const {
      activeTab,
      total: {
        base_grand_total: {
          value: baseGrandTotalPrice,
          currency: baseGrandTotalCurrency
        }
      }
    } = this.props;

    if (activeTab !== _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_2__["ORDER_ITEMS"]) {
      return null;
    }

    return this.renderPriceLine(__('Grand Total to be Charged'), baseGrandTotalPrice, baseGrandTotalCurrency);
  }

  renderPriceLine(title, price, currency) {
    let mix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let key = arguments.length > 4 ? arguments[4] : undefined;
    const {
      total: {
        grand_total: {
          currency: defaultCurrency
        }
      },
      colSpanLabelCount,
      colSpanPriceCount
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "tr", {
      mix: mix,
      key: key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "th", {
      colSpan: colSpanLabelCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, title), /*#__PURE__*/_checkBEM(React, "td", {
      colSpan: colSpanPriceCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_4__["formatPrice"])(price, currency || defaultCurrency)));
  }

  render() {
    const {
      total
    } = this.props;

    if (!total) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "tfoot", {
      block: "MyAccountOrderTotals",
      elem: "Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, this.renderContent());
  }

}, _class.propTypes = {
  total: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__["OrderTotalType"].isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  colSpanPriceCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  colSpanLabelCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/MyAccountOrderTotals/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountOrderTotals);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.config.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.config.js ***!
  \*************************************************************************************************************/
/*! exports provided: colSpanCounts, colSpanCountsMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colSpanCounts", function() { return colSpanCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colSpanCountsMobile", function() { return colSpanCountsMobile; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
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

const colSpanCounts = {
  [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_0__["ORDER_REFUNDS"]]: {
    colSpanPriceCount: '1',
    colSpanLabelCount: '6'
  }
};
const colSpanCountsMobile = {
  [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_0__["ORDER_REFUNDS"]]: {
    colSpanPriceCount: '2',
    colSpanLabelCount: '5'
  }
};

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.container.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.container.js ***!
  \****************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountOrderTotalsContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderTotalsContainer", function() { return MyAccountOrderTotalsContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _MyAccountOrderTotals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyAccountOrderTotals.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.component.js");
/* harmony import */ var _MyAccountOrderTotals_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyAccountOrderTotals.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.config.js");
/* harmony import */ var _MyAccountOrderTotals_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyAccountOrderTotals.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.style.scss");
/* harmony import */ var _MyAccountOrderTotals_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOrderTotals_style__WEBPACK_IMPORTED_MODULE_6__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.container.js";

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







/** #namespace Component/MyAccountOrderTotals/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/MyAccountOrderTotals/Container/mapStateToProps");
/** #namespace Component/MyAccountOrderTotals/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountOrderTotals/Container/mapDispatchToProps");
/** #namespace Component/MyAccountOrderTotals/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOrderTotalsContainer = Mosaic.middleware((_class = class MyAccountOrderTotalsContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  __construct(props) {
    super.__construct(props);

    const {
      activeTab,
      isMobile
    } = this.props;
    this.state = this.getColSpanCounts(activeTab, isMobile);
  }

  componentDidUpdate(prevProps) {
    const {
      isMobile: prevIsMobile
    } = prevProps;
    const {
      isMobile
    } = this.props;

    if (isMobile !== prevIsMobile) {
      this.setColSpanCount();
    }
  }

  setColSpanCount() {
    const {
      activeTab,
      isMobile
    } = this.props;
    this.setState(this.getColSpanCounts(activeTab, isMobile));
  }

  getColSpanCounts(activeTab, isMobile) {
    var _colSpanCounts$active;

    if (isMobile) {
      var _colSpanCountsMobile$;

      const defaultSpanCount = {
        colSpanPriceCount: '2',
        colSpanLabelCount: '3'
      };
      return (_colSpanCountsMobile$ = _MyAccountOrderTotals_config__WEBPACK_IMPORTED_MODULE_5__["colSpanCountsMobile"][activeTab]) !== null && _colSpanCountsMobile$ !== void 0 ? _colSpanCountsMobile$ : defaultSpanCount;
    }

    const defaultSpanCount = {
      colSpanPriceCount: '1',
      colSpanLabelCount: '4'
    };
    return (_colSpanCounts$active = _MyAccountOrderTotals_config__WEBPACK_IMPORTED_MODULE_5__["colSpanCounts"][activeTab]) !== null && _colSpanCounts$active !== void 0 ? _colSpanCounts$active : defaultSpanCount;
  }

  containerProps() {
    const {
      total,
      activeTab
    } = this.props;
    const {
      colSpanPriceCount,
      colSpanLabelCount
    } = this.state;
    return {
      total,
      activeTab,
      colSpanPriceCount,
      colSpanLabelCount
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOrderTotals_component__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  total: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_3__["OrderTotalType"].isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountOrderTotals/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountOrderTotalsContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOrderTotals_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOrderTotals.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderTotals/MyAccountOrderTotals.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOrderTotals_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js ***!
  \***********************************************************************************/
/*! exports provided: ACCOUNT_INFORMATION_EDIT_URL, ACCOUNT_FORGOT_PASSWORD_URL, ACCOUNT_CONFIRMATION_URL, ACCOUNT_REGISTRATION_URL, ACCOUNT_LOGIN_URL, ACCOUNT_URL, ACCOUNT_ORDER_URL, ACCOUNT_ORDER_PRINT_URL, ACCOUNT_ORDER_HISTORY, LOCKED_ACCOUNT_ERROR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_INFORMATION_EDIT_URL", function() { return ACCOUNT_INFORMATION_EDIT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_FORGOT_PASSWORD_URL", function() { return ACCOUNT_FORGOT_PASSWORD_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_CONFIRMATION_URL", function() { return ACCOUNT_CONFIRMATION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_REGISTRATION_URL", function() { return ACCOUNT_REGISTRATION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_LOGIN_URL", function() { return ACCOUNT_LOGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_URL", function() { return ACCOUNT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ORDER_URL", function() { return ACCOUNT_ORDER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ORDER_PRINT_URL", function() { return ACCOUNT_ORDER_PRINT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ORDER_HISTORY", function() { return ACCOUNT_ORDER_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCKED_ACCOUNT_ERROR_MESSAGE", function() { return LOCKED_ACCOUNT_ERROR_MESSAGE; });
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
const ACCOUNT_INFORMATION_EDIT_URL = '/customer/account/edit';
const ACCOUNT_FORGOT_PASSWORD_URL = '/customer/account/forgotpassword';
const ACCOUNT_CONFIRMATION_URL = '/customer/account/confirmation';
const ACCOUNT_REGISTRATION_URL = '/customer/account/create';
const ACCOUNT_LOGIN_URL = '/customer/account/login';
const ACCOUNT_URL = '/customer/account';
const ACCOUNT_ORDER_URL = '/sales/order/view/order_id';
const ACCOUNT_ORDER_PRINT_URL = '/sales/order/print/order_id';
const ACCOUNT_ORDER_HISTORY = '/sales/order/history'; // eslint-disable-next-line max-len

const LOCKED_ACCOUNT_ERROR_MESSAGE = __('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.component.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.component.js ***!
  \************************************************************************************************/
/*! exports provided: OrderPrintPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPrintPage", function() { return OrderPrintPage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/MyAccountOrderPrint */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Order.type */ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _OrderPrintPage_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OrderPrintPage.config */ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.config.js");
/* harmony import */ var _OrderPrintPage_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OrderPrintPage.style */ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.style.scss");
/* harmony import */ var _OrderPrintPage_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_OrderPrintPage_style__WEBPACK_IMPORTED_MODULE_7__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.component.js";

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








/** #namespace Route/OrderPrintPage/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const OrderPrintPage = Mosaic.middleware((_class = class OrderPrintPage_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  componentDidMount() {
    document.body.classList.add(_OrderPrintPage_config__WEBPACK_IMPORTED_MODULE_6__["ORDER_PRINT_PAGE_BODY_CLS"]);
  }

  componentWillUnmount() {
    document.body.classList.remove(_OrderPrintPage_config__WEBPACK_IMPORTED_MODULE_6__["ORDER_PRINT_PAGE_BODY_CLS"]);
  }

  render() {
    const {
      match,
      orderPrintRequest,
      orderPrintMap
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "OrderPrintPage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint__WEBPACK_IMPORTED_MODULE_3__["default"], {
      match: match,
      orderPrintRequest: orderPrintRequest,
      orderPrintMap: orderPrintMap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  match: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_5__["MatchType"].isRequired,
  orderPrintRequest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  orderPrintMap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Order_type__WEBPACK_IMPORTED_MODULE_4__["OrderPrintMapType"]).isRequired
}, _class), "Route/OrderPrintPage/Component");
/* harmony default export */ __webpack_exports__["default"] = (_c = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(OrderPrintPage));

var _c;

__webpack_require__.$Refresh$.register(_c, "%default%");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.config.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.config.js ***!
  \*********************************************************************************************/
/*! exports provided: ORDER_PRINT_PAGE_BODY_CLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_PRINT_PAGE_BODY_CLS", function() { return ORDER_PRINT_PAGE_BODY_CLS; });
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
// eslint-disable-next-line import/prefer-default-export
const ORDER_PRINT_PAGE_BODY_CLS = 'OrderPrintPageBody';

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.container.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.container.js ***!
  \************************************************************************************************/
/*! exports provided: OrderDispatcher, mapDispatchToProps, mapStateToProps, OrderPrintPageContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDispatcher", function() { return OrderDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPrintPageContainer", function() { return OrderPrintPageContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/MyAccountOrderPrint/MyAccountOrderPrint.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrderPrint/MyAccountOrderPrint.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _OrderPrintPage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OrderPrintPage.component */ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.container.js";

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
/** #namespace Route/OrderPrintPage/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    getOrderInvoice: function (invoiceId) {
      return OrderDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.getOrderInvoice(dispatch, invoiceId);
      });
    },
    getOrderShipment: function (shipmentId) {
      return OrderDispatcher.then(function (_ref2) {
        let {
          default: dispatcher
        } = _ref2;
        return dispatcher.getOrderShipment(dispatch, shipmentId);
      });
    },
    getOrderRefund: function (refundId) {
      return OrderDispatcher.then(function (_ref3) {
        let {
          default: dispatcher
        } = _ref3;
        return dispatcher.getOrderRefund(dispatch, refundId);
      });
    }
  };
}, "Route/OrderPrintPage/Container/mapDispatchToProps");
/** #namespace Route/OrderPrintPage/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function () {
  return {};
}, "Route/OrderPrintPage/Container/mapStateToProps");
/** #namespace Route/OrderPrintPage/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const OrderPrintPageContainer = Mosaic.middleware((_class = class OrderPrintPageContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.orderPrintMap = {
      [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__["PRINT_ORDER"]]: {
        activeTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_ITEMS"]
      },
      [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__["PRINT_ALL_INVOICES"]]: {
        activeTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_INVOICES"]
      },
      [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__["PRINT_ALL_SHIPMENT"]]: {
        activeTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_SHIPMENTS"]
      },
      [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__["PRINT_ALL_REFUNDS"]]: {
        activeTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_REFUNDS"]
      },
      [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__["PRINT_INVOICE"]]: {
        request: function (invoiceId) {
          return _this.requestOrderByInvoice(invoiceId);
        },
        activeTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_INVOICES"]
      },
      [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__["PRINT_SHIPMENT"]]: {
        request: function (shipmentId) {
          return _this.requestOrderByShipment(shipmentId);
        },
        activeTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_SHIPMENTS"]
      },
      [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrderPrint_MyAccountOrderPrint_config__WEBPACK_IMPORTED_MODULE_6__["PRINT_REFUND"]]: {
        request: function (refundId) {
          return _this.requestOrderByRefund(refundId);
        },
        activeTab: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_5__["ORDER_REFUNDS"]
      }
    };
  }

  __construct(props) {
    super.__construct(props);

    if (!Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_9__["isSignedIn"])()) {
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_10__["default"].push({
        pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_7__["ACCOUNT_LOGIN_URL"])
      });
    }
  }

  requestOrderByInvoice(invoiceId) {
    var _this2 = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        getOrderInvoice
      } = _this2.props;
      return getOrderInvoice(invoiceId);
    })();
  }

  requestOrderByShipment(shipmentId) {
    var _this3 = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        getOrderShipment
      } = _this3.props;
      return getOrderShipment(shipmentId);
    })();
  }

  requestOrderByRefund(refundId) {
    var _this4 = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        getOrderRefund
      } = _this4.props;
      return getOrderRefund(refundId);
    })();
  }

  containerProps() {
    const {
      match,
      orderPrintRequest
    } = this.props;
    return {
      match,
      orderPrintRequest,
      orderPrintMap: this.orderPrintMap
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _OrderPrintPage_component__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  match: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_8__["MatchType"].isRequired,
  orderPrintRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  getOrderInvoice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getOrderShipment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getOrderRefund: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
}, _class), "Route/OrderPrintPage/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(OrderPrintPageContainer)));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderPrintPage_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderPrintPage.container */ "./node_modules/@scandipwa/scandipwa/src/route/OrderPrintPage/OrderPrintPage.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _OrderPrintPage_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/style/icons/logos/mainLogo.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/style/icons/logos/mainLogo.svg ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mainLogo.f94fe30e.svg");

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

/***/ "./node_modules/@scandipwa/scandipwa/src/type/Order.type.js":
/*!******************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/type/Order.type.js ***!
  \******************************************************************/
/*! exports provided: OrderPrintMapType, OrderComment, OrderComments, OrderGrandTotalType, OrderTotalType, OrderInfoType, OrderPaymentInfo, OrderPaymentsInfo, OrderAddressType, orderItemQtyType, MoneyType, DiscountType, OptionItemType, OptionItemsType, OptionType, OptionsType, OrderProductType, OrderProductsType, OrderTabType, OrderTabsType, OrderType, DownloadableType, PageInfoType, OrdersType, OrdersListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPrintMapType", function() { return OrderPrintMapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComment", function() { return OrderComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComments", function() { return OrderComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderGrandTotalType", function() { return OrderGrandTotalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTotalType", function() { return OrderTotalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfoType", function() { return OrderInfoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPaymentInfo", function() { return OrderPaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPaymentsInfo", function() { return OrderPaymentsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderAddressType", function() { return OrderAddressType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderItemQtyType", function() { return orderItemQtyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyType", function() { return MoneyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountType", function() { return DiscountType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionItemType", function() { return OptionItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionItemsType", function() { return OptionItemsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionType", function() { return OptionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsType", function() { return OptionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductType", function() { return OrderProductType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductsType", function() { return OrderProductsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTabType", function() { return OrderTabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTabsType", function() { return OrderTabsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderType", function() { return OrderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadableType", function() { return DownloadableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInfoType", function() { return PageInfoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersType", function() { return OrdersType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListType", function() { return OrdersListType; });
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

const OrderPrintMapType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  request: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
});
const OrderComment = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  timestamp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
const OrderComments = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(OrderComment);
_c = OrderComments;
const OrderGrandTotalType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
const OrderTotalType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  grand_total: OrderGrandTotalType
});
const OrderInfoType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  increment_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  created_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  status_label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  grand_total: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  subtotal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
const OrderPaymentInfo = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  additional_data: {
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }
});
const OrderPaymentsInfo = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(OrderPaymentInfo);
_c2 = OrderPaymentsInfo;
const OrderAddressType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  city: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  country_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  firstname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  lastname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  postcode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  region: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  region_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  street: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  telephone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
const orderItemQtyType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  quantity_ordered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  quantity_canceled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  quantity_invoiced: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  quantity_refunded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  quantity_returned: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  quantity_shipped: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const MoneyType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  currency: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const DiscountType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  amount: MoneyType,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const OptionItemType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  qty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  price: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const OptionItemsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(OptionItemType);
_c3 = OptionItemsType;
const OptionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  items: OptionItemsType,
  linkItems: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
});
const OptionsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(OptionType);
_c4 = OptionsType;
const OrderProductType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  orderItemQtyType,
  discounts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(DiscountType),
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  selected_options: OptionsType,
  entered_options: OptionsType,
  product_name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  product_sale_price: MoneyType,
  product_sku: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  product_type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  product_url_key: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
const OrderProductsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(OrderProductType);
_c5 = OrderProductsType;
const OrderTabType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  items: OrderProductsType,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  number: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  total: OrderTotalType,
  comments: OrderComments
});
const OrderTabsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(OrderTabType);
_c6 = OrderTabsType;
const OrderType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  can_reorder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  carrier: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  order_date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  credit_memos: OrderTabsType,
  invoices: OrderTabsType,
  items: OrderProductsType,
  shipments: OrderTabsType,
  payment_methods: OrderPaymentsInfo,
  rss_link: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  shipping_address: OrderAddressType,
  billing_address: OrderAddressType,
  shipping_method: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  status: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  total: OrderTotalType,
  comments: OrderComments
});
const DownloadableType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  order_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  order_increment_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  status_label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  downloads: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  download_url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  created_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
const PageInfoType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  current_page: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  page_size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  total_pages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const OrdersType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(OrderType);
_c7 = OrdersType;
const OrdersListType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  items: OrdersType,
  pageInfo: PageInfoType
});

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "OrderComments");
__webpack_require__.$Refresh$.register(_c2, "OrderPaymentsInfo");
__webpack_require__.$Refresh$.register(_c3, "OptionItemsType");
__webpack_require__.$Refresh$.register(_c4, "OptionsType");
__webpack_require__.$Refresh$.register(_c5, "OrderProductsType");
__webpack_require__.$Refresh$.register(_c6, "OrderTabsType");
__webpack_require__.$Refresh$.register(_c7, "OrdersType");

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

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Form/Extract.js":
/*!********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Form/Extract.js ***!
  \********************************************************************/
/*! exports provided: zeroBasedValue, adjustHours, getDateValue, calcYearRangeAttributes, getYearRangeAttributes, isMagentoDateFormatValid, getTimeFormat, getDateFormat, getDateTimeFormat, adjustAmpmHours, transformDateFieldsData, groupDateFieldsData, getFieldsData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroBasedValue", function() { return zeroBasedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustHours", function() { return adjustHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateValue", function() { return getDateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcYearRangeAttributes", function() { return calcYearRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearRangeAttributes", function() { return getYearRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMagentoDateFormatValid", function() { return isMagentoDateFormatValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFormat", function() { return getTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFormat", function() { return getDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeFormat", function() { return getDateTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustAmpmHours", function() { return adjustAmpmHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformDateFieldsData", function() { return transformDateFieldsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupDateFieldsData", function() { return groupDateFieldsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldsData", function() { return getFieldsData; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/component/DateSelect/DateSelect.config */ "./node_modules/@scandipwa/scandipwa/src/component/DateSelect/DateSelect.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/FieldDate/FieldDate.config */ "./node_modules/@scandipwa/scandipwa/src/component/FieldDate/FieldDate.config.js");
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
 * Appends 0 to value if its less than passed attribute;
 * @param value
 * @param lessThan
 * @returns {string|*}
 * #namespace Util/Form/Extract/zeroBasedValue
 */
// eslint-disable-next-line no-magic-numbers

const zeroBasedValue = Mosaic.middleware(function (value) {
  let lessThan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return +value < lessThan ? `0${value}` : value;
}, "Util/Form/Extract/zeroBasedValue");
/** #namespace Util/Form/Extract/adjustHours */

const adjustHours = Mosaic.middleware(function (hours, timeFormat) {
  if (timeFormat === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["TIME_FORMAT"].H12) {
    if (hours > _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["HOURS_12H_COUNT"]) {
      return hours % _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["HOURS_12H_COUNT"];
    }

    if (hours === 0) {
      return _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["HOURS_12H_COUNT"];
    }
  }

  return hours;
}, "Util/Form/Extract/adjustHours");
/**
 * Converts date to magento supported format
 * @returns {string|*}
 * #namespace Util/Form/Extract/getDateValue
 */

const getDateValue = Mosaic.middleware(function (dateValue) {
  try {
    const date = new Date(dateValue);
    const day = zeroBasedValue(date.getDate());
    const month = zeroBasedValue(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = zeroBasedValue(date.getHours());
    const minutes = zeroBasedValue(date.getMinutes());
    const seconds = zeroBasedValue(date.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } catch {
    return dateValue;
  }
}, "Util/Form/Extract/getDateValue");
/** #namespace Util/Form/Extract/calcYearRangeAttributes */

const calcYearRangeAttributes = Mosaic.middleware(function (startYear, endYear) {
  const currentYear = new Date().getFullYear(); // https://docs.magento.com/user-guide/stores/attribute-date-time-options.html
  // blank year range defaults to current year

  if (!startYear && !endYear) {
    return {
      minYear: currentYear,
      maxYear: currentYear
    };
  } // if start or end date is empty it defaults to current year
  // if it creates an invalid range, the only filled in year is used both as start and end of the range
  // e.g. `2020,` => `2020,2021`, `,2022` => `2021,2022`, `,2020` => `2020,2020`, `2022,` => `2022,2022`


  const minYear = startYear || (endYear && currentYear <= endYear ? currentYear : endYear);
  const maxYear = endYear || (startYear && currentYear >= startYear ? currentYear : startYear);
  return {
    minYear,
    maxYear
  };
}, "Util/Form/Extract/calcYearRangeAttributes");
/** #namespace Util/Form/Extract/getYearRangeAttributes */

const getYearRangeAttributes = Mosaic.middleware(function () {
  let yearRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ',';
  let isYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const [startYear, endYear] = yearRange.split(',');
  const {
    minYear,
    maxYear
  } = calcYearRangeAttributes(startYear, endYear);

  if (isYear) {
    return {
      minYear,
      maxYear
    };
  }

  return {
    minDate: new Date(`${minYear}-01-01T00:00:00.000`),
    maxDate: new Date(`${maxYear}-12-31T23:59:59.999`)
  };
}, "Util/Form/Extract/getYearRangeAttributes");
/** #namespace Util/Form/Extract/isMagentoDateFormatValid */

const isMagentoDateFormatValid = Mosaic.middleware(function (dateFieldsOrder) {
  return new RegExp(Array(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["DATE_FIELDS_COUNT"]).fill('[dmy]').join(',')).test(dateFieldsOrder);
}, "Util/Form/Extract/isMagentoDateFormatValid");
/** #namespace Util/Form/Extract/getTimeFormat */

const getTimeFormat = Mosaic.middleware(function (timeFormat) {
  return timeFormat === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["TIME_FORMAT"].H12 ? 'h:mm aa' : 'HH:mm';
}, "Util/Form/Extract/getTimeFormat");
/** #namespace Util/Form/Extract/getDateFormat */

const getDateFormat = Mosaic.middleware(function (dateFieldsOrder) {
  if (!isMagentoDateFormatValid(dateFieldsOrder)) {
    return 'dd/MM/yyyy';
  }

  const dateMap = {
    d: 'dd',
    m: 'MM',
    y: 'yyyy'
  };
  return dateFieldsOrder.split(',').map(function (field) {
    return dateMap[field];
  }).join('/');
}, "Util/Form/Extract/getDateFormat");
/** #namespace Util/Form/Extract/getDateTimeFormat */

const getDateTimeFormat = Mosaic.middleware(function (type, dateFieldsOrder, timeFormat) {
  const timePart = type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"].time || type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"].dateTime ? getTimeFormat(timeFormat) : '';
  const datePart = type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"].date || type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"].dateTime ? getDateFormat(dateFieldsOrder) : '';
  return `${datePart} ${timePart}`.trim();
}, "Util/Form/Extract/getDateTimeFormat");
/** #namespace Util/Form/Extract/adjustAmpmHours */

const adjustAmpmHours = Mosaic.middleware(function (hours, ampm) {
  if (ampm === 'PM') {
    return hours % _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["HOURS_12H_COUNT"] + _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["HOURS_12H_COUNT"];
  }

  if (ampm === 'AM') {
    return hours % _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["HOURS_12H_COUNT"];
  }

  return hours;
}, "Util/Form/Extract/adjustAmpmHours");
/** #namespace Util/Form/Extract/transformDateFieldsData */

const transformDateFieldsData = Mosaic.middleware(function (datesData) {
  return Object.entries(datesData).reduce(function (prev, _ref) {
    let [name, data] = _ref;
    const {
      type,
      year,
      month,
      day,
      hours,
      minutes,
      ampm
    } = data;
    const hoursAdjusted = adjustAmpmHours(Number(hours), ampm);

    if (type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"].date && year && month && day) {
      return [...prev, {
        name,
        type,
        value: `${year}-${month}-${day} 00:00:00`
      }];
    }

    if (type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"].dateTime && year && month && day && hours && minutes) {
      return [...prev, {
        name,
        type,
        value: `${year}-${month}-${day} ${hoursAdjusted}:${minutes}:00`
      }];
    }

    if (type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"].time && hours && minutes) {
      return [...prev, {
        name,
        type,
        value: `2000-01-01 ${hoursAdjusted}:${minutes}:00`
      }];
    }

    return prev;
  }, []);
}, "Util/Form/Extract/transformDateFieldsData");
/** #namespace Util/Form/Extract/groupDateFieldsData */

const groupDateFieldsData = Mosaic.middleware(function (fields) {
  return Array.from(fields).reduce(function (prev, field) {
    const dataType = field.getAttribute(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["FIELD_TYPE_ATTR"]);

    if (!Object.values(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"]).includes(dataType)) {
      return prev;
    }

    const {
      name,
      value
    } = field;
    const fieldName = field.getAttribute(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["FIELD_NAME_ATTR"]);
    const {
      [name]: prevData
    } = prev;
    return { ...prev,
      [name]: { ...prevData,
        type: dataType,
        [fieldName]: value
      }
    };
  }, {});
}, "Util/Form/Extract/groupDateFieldsData");
/**
 * Returns fields values from DOM/Form
 * @param DOM
 * @param excludeEmpty
 * @param ignoreTypes
 * @param asObject
 * @returns {{}|*[]}
 * #namespace Util/Form/Extract/getFieldsData
 */

const getFieldsData = Mosaic.middleware(function (DOM) {
  let excludeEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let ignoreTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let asObject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const fields = DOM.querySelectorAll('input, textarea, select');
  const output = [];
  const dateFieldsGrouped = groupDateFieldsData(fields);
  output.push(...transformDateFieldsData(dateFieldsGrouped));
  fields.forEach(function (field) {
    if (Object.values(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_FieldDate_FieldDate_config__WEBPACK_IMPORTED_MODULE_2__["FIELD_DATE_TYPE"]).includes(field.getAttribute(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_DateSelect_DateSelect_config__WEBPACK_IMPORTED_MODULE_0__["FIELD_TYPE_ATTR"]))) {
      return;
    }

    const {
      tagName
    } = field;
    const tag = tagName.toLowerCase();
    const type = tag === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["default"].textarea || tag === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["default"].select || tag === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["default"].button ? tag : field.type;

    if (ignoreTypes.some(function (ignoreType) {
      return ignoreType === type;
    })) {
      return;
    } // eslint-disable-next-line no-nested-ternary


    const value = type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["default"].checkbox || type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["default"].radio // eslint-disable-next-line no-nested-ternary
    ? field.checked ? field.value === 'on' ? true : field.value : false : type === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_1__["default"].file ? field.fileData : field.value;
    const dateValue = field.getAttribute('data-date');
    const formattedValue = dateValue ? getDateValue(dateValue) : value;

    if (!excludeEmpty || value) {
      output.push({
        name: field.name,
        type,
        value: formattedValue,
        field
      });
    }
  });

  if (asObject) {
    const objectOutput = {};
    output.forEach(function (field) {
      const {
        name
      } = field;
      objectOutput[name] = field;
    });
    return objectOutput;
  }

  return output;
}, "Util/Form/Extract/getFieldsData");
/* harmony default export */ __webpack_exports__["default"] = (getFieldsData);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Date.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Manipulations/Date.js ***!
  \**************************************************************************/
/*! exports provided: MILLISECONDS_PER_MINUTE, convertStringToDate, getTimeInCurrentTimezone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_PER_MINUTE", function() { return MILLISECONDS_PER_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertStringToDate", function() { return convertStringToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeInCurrentTimezone", function() { return getTimeInCurrentTimezone; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/util/Form/Extract */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Extract.js");
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

const MILLISECONDS_PER_MINUTE = 60000;
/** #namespace Util/Manipulations/Date/convertStringToDate */

const convertStringToDate = Mosaic.middleware(function (stringDate, options) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const date = new Date(stringDate.replace(/\s/, 'T'));
  const language = navigator.languages ? navigator.languages[0] : navigator.language;
  return date.toLocaleDateString(language, options || defaultOptions);
}, "Util/Manipulations/Date/convertStringToDate");
/** #namespace Util/Manipulations/Date/getTimeInCurrentTimezone */

const getTimeInCurrentTimezone = Mosaic.middleware(function (timestamp) {
  const currentDate = new Date();
  const timezone = currentDate.getTimezoneOffset() * MILLISECONDS_PER_MINUTE;
  const timeInCurrentTimezone = new Date(timestamp.replace(/-/g, '/')) - new Date(timezone);
  return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Extract__WEBPACK_IMPORTED_MODULE_0__["getDateValue"])(timeInCurrentTimezone);
}, "Util/Manipulations/Date/getTimeInCurrentTimezone");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

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

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Orders/Orders.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Orders/Orders.js ***!
  \*********************************************************************/
/*! exports provided: getFormattedDate, formatOrders, getOrderItemQtyToArray, getProductFromOrder, getOrderItemRowDiscount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedDate", function() { return getFormattedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatOrders", function() { return formatOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderItemQtyToArray", function() { return getOrderItemQtyToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFromOrder", function() { return getProductFromOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderItemRowDiscount", function() { return getOrderItemRowDiscount; });
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

/** #namespace Util/Orders/getFormattedDate */
const getFormattedDate = Mosaic.middleware(function () {
  let rawDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const date = new Date(rawDate.replace(/\s/, 'T'));
  const RADIX = 10;

  const addLeadingZero = function (value) {
    return value < RADIX ? `0${value}` : value;
  };

  const day = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1);
  return `${date.getFullYear()}-${month}-${day}`;
}, "Util/Orders/getFormattedDate");
/** #namespace Util/Orders/formatOrders */

const formatOrders = Mosaic.middleware(function (orders) {
  return orders.reduceRight(function (acc, order) {
    const {
      order_date,
      id: uid
    } = order;
    const formattedDate = getFormattedDate(order_date);
    return [...acc, { ...order,
      id: atob(uid),
      created_at: formattedDate
    }];
  }, []);
}, "Util/Orders/formatOrders");
/** #namespace Util/Orders/getOrderItemQtyToArray */

const getOrderItemQtyToArray = Mosaic.middleware(function (product) {
  const {
    quantity_ordered = 0,
    quantity_canceled = 0,
    quantity_invoiced = 0,
    quantity_refunded = 0,
    quantity_returned = 0,
    quantity_shipped = 0
  } = product;
  return {
    quantity_ordered,
    quantity_canceled,
    quantity_invoiced,
    quantity_refunded,
    quantity_returned,
    quantity_shipped
  };
}, "Util/Orders/getOrderItemQtyToArray");
/** #namespace Util/Orders/getProductFromOrder */

const getProductFromOrder = Mosaic.middleware(function (allProducts, requiredProductSku) {
  return allProducts.find(function (_ref) {
    let {
      product_sku
    } = _ref;
    return product_sku === requiredProductSku;
  });
}, "Util/Orders/getProductFromOrder");
/** #namespace Util/Orders/getOrderItemRowDiscount */

const getOrderItemRowDiscount = Mosaic.middleware(function (discounts) {
  return discounts.reduce(function (currentValue, _ref2) {
    let {
      amount: {
        value
      }
    } = _ref2;
    return value + currentValue;
  }, 0);
}, "Util/Orders/getOrderItemRowDiscount");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Orders/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Orders/index.js ***!
  \********************************************************************/
/*! exports provided: getFormattedDate, formatOrders, getOrderItemQtyToArray, getProductFromOrder, getOrderItemRowDiscount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders */ "./node_modules/@scandipwa/scandipwa/src/util/Orders/Orders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFormattedDate", function() { return _Orders__WEBPACK_IMPORTED_MODULE_0__["getFormattedDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatOrders", function() { return _Orders__WEBPACK_IMPORTED_MODULE_0__["formatOrders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrderItemQtyToArray", function() { return _Orders__WEBPACK_IMPORTED_MODULE_0__["getOrderItemQtyToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductFromOrder", function() { return _Orders__WEBPACK_IMPORTED_MODULE_0__["getProductFromOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrderItemRowDiscount", function() { return _Orders__WEBPACK_IMPORTED_MODULE_0__["getOrderItemRowDiscount"]; });

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


/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Price/Price.config.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Price/Price.config.js ***!
  \**************************************************************************/
/*! exports provided: TIER_PRICES, HUNDRED_PERCENT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIER_PRICES", function() { return TIER_PRICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUNDRED_PERCENT", function() { return HUNDRED_PERCENT; });
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
const TIER_PRICES = 'TIER_PRICES';
const HUNDRED_PERCENT = 100;
/* harmony default export */ __webpack_exports__["default"] = ({
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: 'Bds$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: 'B$',
  BOB: '$b',
  BRL: 'R$',
  BSD: 'B$',
  BTC: '฿',
  BTN: 'Nu.',
  BWP: 'P',
  BYR: 'Br',
  BYN: 'Br',
  BZD: 'BZ$',
  CAD: 'CA$',
  CDF: 'FC',
  CHF: 'CHF',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CRC: '₡',
  CUC: 'CUC$',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EEK: 'kr',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: 'FJ$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHC: '₵',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: 'G$',
  HKD: 'HK$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: '$',
  KZT: 'лв',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: 'L$',
  LSL: 'M',
  LTC: 'Ł',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: 'Mex$',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: '$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'lei',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: 'Si$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: '$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: '$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '₡',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYU: '$U',
  UZS: 'лв',
  VEF: 'Bs',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: 'Ƀ',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  YER: '﷼',
  ZAR: 'R',
  ZWD: 'Z$'
});

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Price/Price.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Price/Price.js ***!
  \*******************************************************************/
/*! exports provided: formatCurrency, formatPrice, calculateFinalPrice, calculateTierDiscountOverSpecialPrice, roundPrice, getLowestPriceTiersPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFinalPrice", function() { return calculateFinalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTierDiscountOverSpecialPrice", function() { return calculateTierDiscountOverSpecialPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundPrice", function() { return roundPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowestPriceTiersPrice", function() { return getLowestPriceTiersPrice; });
/* harmony import */ var _Price_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Price.config */ "./node_modules/@scandipwa/scandipwa/src/util/Price/Price.config.js");
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

/** #namespace Util/Price/formatCurrency */

const formatCurrency = Mosaic.middleware(function () {
  let currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  return _Price_config__WEBPACK_IMPORTED_MODULE_0__["default"][currency];
}, "Util/Price/formatCurrency");
/** #namespace Util/Price/formatPrice */

const formatPrice = Mosaic.middleware(function (price, currentCurrency) {
  const language = navigator.languages ? navigator.languages[0] : navigator.language;
  const currency = currentCurrency || 'USD';
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency
  }).format(price);
}, "Util/Price/formatPrice");
/**
 * Calculate final price
 * @param {Number} discount discount percentage
 * @param {Number} min minimum price
 * @param {Number} reg regular price
 * @return {Number} final price
 * #namespace Util/Price/calculateFinalPrice
 */

const calculateFinalPrice = Mosaic.middleware(function (discount, min, reg) {
  return discount ? min : reg;
}, "Util/Price/calculateFinalPrice");
/**
 * Calculate final price
 * @param {Number} tier tier price
 * @param {Number} spec special price
 * @return {Number} final discount
 * #namespace Util/Price/calculateTierDiscountOverSpecialPrice */

const calculateTierDiscountOverSpecialPrice = Mosaic.middleware(function (spec, tier) {
  return Math.round(_Price_config__WEBPACK_IMPORTED_MODULE_0__["HUNDRED_PERCENT"] - tier / spec * _Price_config__WEBPACK_IMPORTED_MODULE_0__["HUNDRED_PERCENT"]);
}, "Util/Price/calculateTierDiscountOverSpecialPrice");
/**
 * Calculate final price
 * @param {Number} price
 * @return {Number} price rounded to 2 digits
 * #namespace Util/Price/roundPrice
 */

const roundPrice = Mosaic.middleware(function (price) {
  return parseFloat(price).toFixed(2);
}, "Util/Price/roundPrice");
/** #namespace Util/Price/getLowestPriceTiersPrice */

const getLowestPriceTiersPrice = Mosaic.middleware(function (price_tiers, currency) {
  const lowestValue = price_tiers.reduce(function (acc, _ref) {
    let {
      final_price: {
        value
      }
    } = _ref;
    return acc < value ? acc : value;
  }, price_tiers[0].final_price.value);
  return formatPrice(lowestValue, currency);
}, "Util/Price/getLowestPriceTiersPrice");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Price/index.js ***!
  \*******************************************************************/
/*! exports provided: formatCurrency, formatPrice, calculateFinalPrice, calculateTierDiscountOverSpecialPrice, roundPrice, getLowestPriceTiersPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/Price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["formatPrice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateFinalPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["calculateFinalPrice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateTierDiscountOverSpecialPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["calculateTierDiscountOverSpecialPrice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["roundPrice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLowestPriceTiersPrice", function() { return _Price__WEBPACK_IMPORTED_MODULE_0__["getLowestPriceTiersPrice"]; });

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
//# sourceMappingURL=print-order.chunk.js.map