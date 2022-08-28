(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["product-attributes"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.component.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: ProductAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributes", function() { return ProductAttributes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ExpandableContent */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductAttributeValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ProductAttributeValue */ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributeValue/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _ProductAttributes_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductAttributes.style */ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.style.scss");
/* harmony import */ var _ProductAttributes_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductAttributes_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.component.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */






/** #namespace Component/ProductAttributes/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductAttributes = Mosaic.middleware((_class = class ProductAttributes_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderGroups() {
    var _this = this;

    const {
      attributesWithValues
    } = this.props;
    const groups = Object.values(attributesWithValues).map(function (attribute) {
      return {
        attribute_group_id: attribute.attribute_group_id,
        attribute_group_name: attribute.attribute_group_name
      };
    });
    const uniqueGroups = groups.filter(function (group, index, array) {
      return index === array.findIndex(function (g) {
        return g.attribute_group_id === group.attribute_group_id;
      });
    });
    return uniqueGroups.map(function (group) {
      return /*#__PURE__*/_checkBEM(React, "div", {
        block: "ProductAttributes",
        elem: "AttributeBlock",
        key: group.attribute_group_name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }
      }, /*#__PURE__*/_checkBEM(React, "h2", {
        block: "ProductAttributes",
        elem: "Group",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }
      }, group.attribute_group_name), _this.renderAttributes(group.attribute_group_id));
    });
  }

  renderAttribute(attribute) {
    return /*#__PURE__*/_checkBEM(React, react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: attribute.attribute_label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "dt", {
      block: "ProductAttributes",
      elem: "AttributeLabel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, attribute.attribute_label), /*#__PURE__*/_checkBEM(React, "dd", {
      block: "ProductAttributes",
      elem: "ValueLabel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductAttributeValue__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: attribute.attribute_label,
      attribute: attribute,
      isFormattedAsText: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    })));
  }

  renderAttributes(attribute_group_id) {
    const {
      attributesWithValues
    } = this.props;

    if (!Object.keys(attributesWithValues).length) {
      return null;
    }

    const filteredAttributesWithValues = Object.values(attributesWithValues).filter(function (attribute) {
      return attribute.attribute_group_id === attribute_group_id;
    });

    if (!filteredAttributesWithValues.length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "dl", {
      block: "ProductAttributes",
      elem: "Attributes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, filteredAttributesWithValues.map(this.renderAttribute.bind(this)));
  }

  renderContent() {
    const {
      areDetailsLoaded
    } = this.props;
    const heading = areDetailsLoaded ? __('Details') : '';
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_2__["default"] // show placeholder if the details are not loaded
    , {
      heading: heading,
      mix: {
        block: 'ProductAttributes',
        elem: 'Content'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, this.renderGroups());
  }

  render() {
    const {
      areDetailsLoaded
    } = this.props;

    if (!areDetailsLoaded) {
      return null;
    }

    return this.renderContent();
  }

}, _class.propTypes = {
  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  attributesWithValues: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_4__["AttributeType"].isRequired
}, _class), "Component/ProductAttributes/Component");
/* harmony default export */ __webpack_exports__["default"] = (ProductAttributes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.container.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.container.js ***!
  \**********************************************************************************************************/
/*! exports provided: ProductAttributesContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributesContainer", function() { return ProductAttributesContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Product */ "./node_modules/@scandipwa/scandipwa/src/util/Product/index.js");
/* harmony import */ var _ProductAttributes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductAttributes.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.container.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */





/** #namespace Component/ProductAttributes/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductAttributesContainer = Mosaic.middleware((_class = class ProductAttributesContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      areDetailsLoaded,
      product
    } = this.props;
    return {
      areDetailsLoaded,
      attributesWithValues: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_3__["getAttributesWithValues"])(product)
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _ProductAttributes_component__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__["ProductType"].isRequired,
  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/ProductAttributes/Container");
/* harmony default export */ __webpack_exports__["default"] = (ProductAttributesContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductAttributes_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAttributes.container */ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributes/ProductAttributes.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductAttributes_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
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
//# sourceMappingURL=product-attributes.chunk.js.map