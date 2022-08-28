(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["overlays-category"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.component.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.component.js ***!
  \************************************************************************************************************************************/
/*! exports provided: CategoryConfigurableAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryConfigurableAttributes", function() { return CategoryConfigurableAttributes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/ExpandableContent */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContentShowMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ExpandableContentShowMore */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductAttributeValue_ProductAttributeValue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ProductAttributeValue/ProductAttributeValue.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductAttributeValue/ProductAttributeValue.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductConfigurableAttributes_ProductConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/ProductConfigurableAttributes/ProductConfigurableAttributes.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductConfigurableAttributes/ProductConfigurableAttributes.component.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Category.type */ "./node_modules/@scandipwa/scandipwa/src/type/Category.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Category */ "./node_modules/@scandipwa/scandipwa/src/util/Category/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Product */ "./node_modules/@scandipwa/scandipwa/src/util/Product/index.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.component.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */



 // eslint-disable-next-line max-len





/** #namespace Component/CategoryConfigurableAttributes/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CategoryConfigurableAttributes = Mosaic.middleware((_class = class CategoryConfigurableAttributes_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductConfigurableAttributes_ProductConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_4__["default"]) {
  renderSubCategories(option) {
    const {
      getSubCategories
    } = this.props;
    const optionWithSubcategories = getSubCategories(option);
    const {
      attribute_values = []
    } = optionWithSubcategories;

    if (!attribute_values.length) {
      return null;
    }

    return this.renderDropdownOrSwatch(optionWithSubcategories);
  }

  renderPriceSwatch(option) {
    const {
      currencyCode
    } = this.props;
    const {
      attribute_options,
      ...priceOption
    } = option;

    if (attribute_options) {
      // do not render price filter if it includes "*_*" aggregation
      if (attribute_options['*_*']) {
        return null;
      }

      priceOption.attribute_options = Object.entries(attribute_options).reduce(function (acc, _ref) {
        let [key, option] = _ref;
        const {
          label: oldLabel
        } = option;
        const [from, to] = oldLabel.split('~');
        const label = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Category__WEBPACK_IMPORTED_MODULE_6__["getPriceFilterLabel"])(from, to, currencyCode);
        acc[key] = { ...option,
          label
        };
        return acc;
      }, {});
    }

    return this.renderDropdownOrSwatch(priceOption);
  }

  renderDropdownOrSwatch(option) {
    const {
      isContentExpanded,
      getSubHeading
    } = this.props;
    const {
      attribute_label,
      attribute_code,
      attribute_options
    } = option;
    const [{
      swatch_data
    }] = attribute_options ? Object.values(attribute_options) : [{}];
    const isSwatch = !!swatch_data;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: attribute_code,
      heading: attribute_label,
      subHeading: getSubHeading(option),
      mix: {
        block: 'ProductConfigurableAttributes',
        elem: 'Expandable'
      },
      isContentExpanded: isContentExpanded,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, isSwatch ? this.renderSwatch(option) : this.renderDropdown(option));
  }

  renderConfigurableAttributeValue(attribute) {
    const {
      getIsConfigurableAttributeAvailable,
      handleOptionClick,
      getLink,
      isSelected,
      showProductCount
    } = this.props;
    const {
      attribute_value
    } = attribute;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductAttributeValue_ProductAttributeValue_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: attribute_value,
      attribute: attribute,
      isSelected: isSelected(attribute),
      isAvailable: getIsConfigurableAttributeAvailable(attribute),
      onClick: handleOptionClick,
      getLink: getLink,
      isProductCountVisible: showProductCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    });
  }

  renderConfigurableOption(option) {
    const {
      attribute_code
    } = option;

    switch (attribute_code) {
      case 'price':
        return this.renderPriceSwatch(option);

      case 'category_id':
        return this.renderSubCategories(option);

      default:
        return this.renderDropdownOrSwatch(option);
    }
  }

  renderConfigurableAttributes() {
    const {
      configurable_options
    } = this.props;
    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_7__["sortBySortOrder"])(Object.values(configurable_options), 'attribute_position').map(this.renderConfigurableOption.bind(this));
  }

  renderDropdown(option) {
    var _this = this;

    const {
      attribute_values
    } = option;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ProductConfigurableAttributes",
      elem: "DropDownList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContentShowMore__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, attribute_values.map(function (attribute_value) {
      return _this.renderConfigurableAttributeValue({ ...option,
        attribute_value
      });
    })));
  }

}, _class.propTypes = { ..._Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductConfigurableAttributes_ProductConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_4__["default"].propTypes,
  currencyCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  showProductCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  childrenCategories: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_5__["CategoryFragment"])).isRequired,
  getSubCategories: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  parameters: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_5__["SelectedFiltersType"].isRequired
}, _class), "Component/CategoryConfigurableAttributes/Component");
/* harmony default export */ __webpack_exports__["default"] = (CategoryConfigurableAttributes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.container.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.container.js ***!
  \************************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, CategoryConfigurableAttributesContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryConfigurableAttributesContainer", function() { return CategoryConfigurableAttributesContainer; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductConfigurableAttributes_ProductConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/ProductConfigurableAttributes/ProductConfigurableAttributes.container */ "./node_modules/@scandipwa/scandipwa/src/component/ProductConfigurableAttributes/ProductConfigurableAttributes.container.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Category.type */ "./node_modules/@scandipwa/scandipwa/src/type/Category.type.js");
/* harmony import */ var _CategoryConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryConfigurableAttributes.component */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.container.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */
 // eslint-disable-next-line max-len




/** #namespace Component/CategoryConfigurableAttributes/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    currencyCode: state.ConfigReducer.currencyData.current_currency_code,
    showProductCount: state.ConfigReducer.layered_navigation_product_count_enabled,
    childrenCategories: state.CategoryReducer.category.children || []
  };
}, "Component/CategoryConfigurableAttributes/Container/mapStateToProps");
/** #namespace Component/CategoryConfigurableAttributes/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/CategoryConfigurableAttributes/Container/mapDispatchToProps");
/** #namespace Component/CategoryConfigurableAttributes/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CategoryConfigurableAttributesContainer = Mosaic.middleware((_class = class CategoryConfigurableAttributesContainer_ extends Mosaic.Extensible(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductConfigurableAttributes_ProductConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = { ...this.containerFunctions,
      getSubCategories: this.getSubCategories.bind(this)
    };
  }

  containerProps() {
    const {
      currencyCode,
      showProductCount,
      childrenCategories
    } = this.props;
    return {
      currencyCode,
      showProductCount,
      childrenCategories,
      ...super.containerProps()
    };
  }

  getCategorySubCategories() {
    const {
      childrenCategories
    } = this.props;
    return childrenCategories.map(function (_ref) {
      let {
        id
      } = _ref;
      return id.toString();
    });
  }

  getSubCategories(option) {
    const {
      isSearchPage
    } = this.props;
    const optionWithSubcategories = { ...option
    };
    const {
      attribute_values
    } = option;

    if (!isSearchPage) {
      const categoryItemsIds = this.getCategorySubCategories();
      const subCategoriesIds = attribute_values.filter(function (item) {
        return categoryItemsIds.includes(item);
      });
      optionWithSubcategories.attribute_values = subCategoriesIds;
    }

    return optionWithSubcategories;
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CategoryConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  parameters: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_2__["SelectedFiltersType"].isRequired
}, _class), "Component/CategoryConfigurableAttributes/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(CategoryConfigurableAttributesContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryConfigurableAttributes.container */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategoryConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.component.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.component.js ***!
  \******************************************************************************************************************/
/*! exports provided: CategoryFilterOverlay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFilterOverlay", function() { return CategoryFilterOverlay; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CategoryConfigurableAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CategoryConfigurableAttributes */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryConfigurableAttributes/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Overlay */ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ResetAttributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/ResetAttributes */ "./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ResetButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/ResetButton */ "./node_modules/@scandipwa/scandipwa/src/component/ResetButton/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Category.type */ "./node_modules/@scandipwa/scandipwa/src/type/Category.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CategoryFilterOverlay.config */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.config.js");
/* harmony import */ var _CategoryFilterOverlay_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CategoryFilterOverlay.style */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.style.scss");
/* harmony import */ var _CategoryFilterOverlay_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_CategoryFilterOverlay_style__WEBPACK_IMPORTED_MODULE_10__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.component.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */











/** #namespace Component/CategoryFilterOverlay/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CategoryFilterOverlay = Mosaic.middleware((_class = class CategoryFilterOverlay_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderFilters() {
    const {
      availableFilters,
      customFiltersValues,
      toggleCustomFilter,
      isMatchingInfoFilter,
      getFilterUrl,
      isSearchPage
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CategoryConfigurableAttributes__WEBPACK_IMPORTED_MODULE_2__["default"], {
      mix: {
        block: 'CategoryFilterOverlay',
        elem: 'Attributes'
      },
      isReady: isMatchingInfoFilter,
      configurable_options: availableFilters,
      getLink: getFilterUrl,
      parameters: customFiltersValues,
      updateConfigurableVariant: toggleCustomFilter,
      isSearchPage: isSearchPage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    });
  }

  renderSeeResults() {
    const {
      onSeeResultsClick
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CategoryFilterOverlay",
      elem: "SeeResults",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "CategoryFilterOverlay",
      elem: "Button",
      mix: {
        block: 'Button'
      },
      onClick: onSeeResultsClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __('SEE RESULTS')));
  }

  renderResetButton() {
    const {
      onSeeResultsClick
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ResetButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: onSeeResultsClick,
      mix: {
        block: 'CategoryFilterOverlay',
        elem: 'ResetButton'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    });
  }

  renderResetAttributes() {
    const {
      customFiltersValues,
      availableFilters,
      toggleCustomFilter
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ResetAttributes__WEBPACK_IMPORTED_MODULE_5__["default"], {
      customFiltersValues: customFiltersValues,
      availableFilters: availableFilters,
      toggleCustomFilter: toggleCustomFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    });
  }

  renderHeading() {
    const {
      isContentFiltered
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "h3", {
      block: "CategoryFilterOverlay",
      elem: "Heading",
      mods: {
        isContentFiltered
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, __('Shopping Options'));
  }

  renderNoResults() {
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "CategoryFilterOverlay",
      elem: "NoResults",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __(`The selected filter combination returned no results.
                Please try again, using a different set of filters.`));
  }

  renderEmptyFilters() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderNoResults(), this.renderResetButton(), this.renderSeeResults());
  }

  renderMinimalFilters() {
    return this.renderSeeResults();
  }

  renderDefaultFilters() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderHeading(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CategoryFilterOverlay",
      elem: "ResetSection",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, this.renderResetAttributes(), this.renderResetButton()), this.renderFilters());
  }

  renderContent() {
    const {
      totalPages,
      areFiltersEmpty,
      isProductsLoading
    } = this.props;

    if (!isProductsLoading && totalPages === 0) {
      return this.renderEmptyFilters();
    }

    if (areFiltersEmpty) {
      return this.renderMinimalFilters();
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderDefaultFilters(), this.renderSeeResults());
  }

  renderLoader() {
    const {
      isInfoLoading,
      availableFilters
    } = this.props;
    const isLoaded = availableFilters && !!Object.keys(availableFilters).length;

    if (!isLoaded) {
      // hide loader if filters were not yet loaded (even once!)
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isLoading: isInfoLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    });
  }

  render() {
    const {
      onVisible,
      onHide,
      totalPages,
      isProductsLoading,
      isContentFiltered,
      isCategoryAnchor,
      isSearchPage
    } = this.props; // show CategoryFilterOverlay for 1. categories marked as `anchor` in Magento admin 2. Search page

    if (!isProductsLoading && totalPages === 0 && !isContentFiltered || !isCategoryAnchor && !isSearchPage) {
      return /*#__PURE__*/_checkBEM(React, "div", {
        block: "CategoryFilterOverlay",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 17
        }
      });
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onVisible: onVisible,
      onHide: onHide,
      mix: {
        block: 'CategoryFilterOverlay'
      },
      id: _CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_9__["CATEGORY_FILTER_OVERLAY_ID"],
      isRenderInPortal: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "CategoryFilterOverlay",
      elem: "Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }
    }, this.renderContent(), this.renderLoader()));
  }

}, _class.propTypes = {
  isInfoLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  availableFilters: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_8__["AttributesType"].isRequired,
  areFiltersEmpty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isContentFiltered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isMatchingInfoFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isProductsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onSeeResultsClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  customFiltersValues: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_7__["SelectedFiltersType"].isRequired,
  toggleCustomFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getFilterUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  isCategoryAnchor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isSearchPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/CategoryFilterOverlay/Component");
/* harmony default export */ __webpack_exports__["default"] = (CategoryFilterOverlay);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.container.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.container.js ***!
  \******************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, CategoryFilterOverlayContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFilterOverlayContainer", function() { return CategoryFilterOverlayContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Header/Header.config */ "./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.action */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.reducer */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.reducer.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/store/Overlay/Overlay.action */ "./node_modules/@scandipwa/scandipwa/src/store/Overlay/Overlay.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/type/Category.type */ "./node_modules/@scandipwa/scandipwa/src/type/Category.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _CategoryFilterOverlay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CategoryFilterOverlay.component */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.component.js");
/* harmony import */ var _CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CategoryFilterOverlay.config */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.container.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */














/** #namespace Component/CategoryFilterOverlay/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isInfoLoading: state.ProductListInfoReducer.isLoading,
    isProductsLoading: state.ProductListReducer.isLoading,
    totalPages: state.ProductListReducer.totalPages
  };
}, "Component/CategoryFilterOverlay/Container/mapStateToProps");
/** #namespace Component/CategoryFilterOverlay/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    hideActiveOverlay: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_7__["hideActiveOverlay"])());
    },
    goToPreviousHeaderState: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["goToPreviousNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["TOP_NAVIGATION_TYPE"]));
    },
    goToPreviousNavigationState: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["goToPreviousNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["BOTTOM_NAVIGATION_TYPE"]));
    },
    changeHeaderState: function (state) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["changeNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["TOP_NAVIGATION_TYPE"], state));
    },
    changeNavigationState: function (state) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["changeNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["BOTTOM_NAVIGATION_TYPE"], state));
    }
  };
}, "Component/CategoryFilterOverlay/Container/mapDispatchToProps");
/** #namespace Component/CategoryFilterOverlay/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CategoryFilterOverlayContainer = Mosaic.middleware((_class = class CategoryFilterOverlayContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onSeeResultsClick: this.onSeeResultsClick.bind(this),
      toggleCustomFilter: this.toggleCustomFilter.bind(this),
      getFilterUrl: this.getCustomFilterUrl.bind(this),
      onVisible: this.onVisible.bind(this),
      onHide: this.onHide.bind(this)
    };
  }

  updateFilter(filterName, filterArray) {
    const {
      location,
      history
    } = this.props;
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__["setQueryParams"])({
      customFilters: this.getFilterUrl(filterName, filterArray, false),
      page: ''
    }, location, history);
  }

  toggleCustomFilter(requestVar, value) {
    this.updateFilter(requestVar, this._getNewFilterArray(requestVar, value));
  }

  getFilterUrl(filterName, filterArray) {
    let isFull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const {
      location: {
        pathname
      }
    } = this.props;

    const selectedFilters = this._getNewSelectedFiltersString(filterName, filterArray);

    const customFilters = isFull ? `${pathname}?customFilters=` : '';

    const formattedFilters = this._formatSelectedFiltersString(selectedFilters);

    return `${customFilters}${formattedFilters}`;
  }

  getCustomFilterUrl(filterKey, value) {
    return this.getFilterUrl(filterKey, this._getNewFilterArray(filterKey, value));
  }

  _getSelectedFiltersFromUrl() {
    const {
      location
    } = this.props;
    const selectedFiltersString = (Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__["getQueryParam"])('customFilters', location) || '').split(';');
    return selectedFiltersString.reduce(function (acc, filter) {
      if (!filter) {
        return acc;
      }

      const [key, value] = filter.split(':');
      return { ...acc,
        [key]: value.split(',')
      };
    }, {});
  }

  _getNewSelectedFiltersString(filterName, filterArray) {
    const prevCustomFilters = this._getSelectedFiltersFromUrl();

    const customFilers = { ...prevCustomFilters,
      [filterName]: filterArray
    };
    return Object.entries(customFilers).reduce(function (accumulator, _ref) {
      let [filterKey, filterValue] = _ref;

      if (filterValue.length) {
        const filterValues = filterValue.sort().join(',');
        accumulator.push(`${filterKey}:${filterValues}`);
      }

      return accumulator;
    }, []).sort().join(';');
  }

  _formatSelectedFiltersString(string) {
    const hasTrailingSemicolon = string[string.length - 1] === ';';
    const hasLeadingSemicolon = string[0] === ';';

    if (hasLeadingSemicolon) {
      return this._formatSelectedFiltersString(string.slice(0, -1));
    }

    if (hasTrailingSemicolon) {
      return string.slice(1);
    }

    return string;
  }

  onSeeResultsClick() {
    const {
      hideActiveOverlay,
      goToPreviousHeaderState,
      goToPreviousNavigationState
    } = this.props;
    hideActiveOverlay();
    goToPreviousHeaderState();
    goToPreviousNavigationState();
  }

  onVisible() {
    const {
      hideActiveOverlay,
      changeHeaderState,
      changeNavigationState,
      goToPreviousNavigationState,
      location: {
        pathname,
        search
      }
    } = this.props;
    changeHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__["FILTER"],
      title: __('Filters'),
      onCloseClick: function () {
        hideActiveOverlay();
        goToPreviousNavigationState();
      }
    });
    changeNavigationState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__["FILTER"],
      isHidden: true
    });
    window.addEventListener('popstate', this.historyBackHook);
    history.pushState({
      overlayOpen: true
    }, '', pathname + search);
  }

  historyBackHook() {
    const {
      goToPreviousNavigationState,
      customFiltersValues,
      hideActiveOverlay,
      goToPreviousHeaderState
    } = this.props;
    goToPreviousNavigationState(); // close filter only if no applied filters left

    if (Object.keys(customFiltersValues).length === 0) {
      hideActiveOverlay();
      goToPreviousHeaderState();
    }
  }

  onHide() {
    window.removeEventListener('popstate', this.historyBackHook);
  }

  getAreFiltersEmpty() {
    const {
      isInfoLoading,
      availableFilters
    } = this.props;
    return !isInfoLoading && (!availableFilters || !Object.keys(availableFilters).length);
  }

  containerProps() {
    const {
      availableFilters,
      customFiltersValues,
      isCategoryAnchor,
      isInfoLoading,
      isMatchingInfoFilter,
      isProductsLoading,
      isSearchPage,
      totalPages
    } = this.props;
    return {
      availableFilters,
      isCategoryAnchor,
      isInfoLoading,
      isProductsLoading,
      isMatchingInfoFilter,
      isSearchPage,
      totalPages,
      customFiltersValues,
      areFiltersEmpty: this.getAreFiltersEmpty(),
      isContentFiltered: this.isContentFiltered()
    };
  }

  isContentFiltered() {
    const {
      customFilters,
      priceMin,
      priceMax
    } = this.urlStringToObject();
    return !!(customFilters || priceMin || priceMax);
  }

  urlStringToObject() {
    const {
      location: {
        search
      }
    } = this.props;
    return search.substr(1).split('&').reduce(function (acc, part) {
      const [key, value] = part.split('=');
      return { ...acc,
        [key]: value
      };
    }, {});
  }
  /**
   * Returns filter array with new parameters
   *
   * @param {String} filterKey key of option
   * @param {String} value
   * @returns {Object[]}
   * @memberof CategoryShoppingOptions
   */


  _getNewFilterArray(filterKey, value) {
    const {
      customFiltersValues,
      customFiltersValues: {
        price
      }
    } = this.props;
    const newFilterArray = customFiltersValues[filterKey] !== undefined ? Array.from(customFiltersValues[filterKey]) : [];
    const filterValueIndex = newFilterArray.indexOf(value);

    if (filterKey === _CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_13__["KEY_PRICE"]) {
      // for price filter, choose one only
      // if price is already selected, remove
      // if price is not selected, select
      // if price is already selected and new other price is selected, replace
      return price && price.includes(value) ? [] : [value];
    }

    if (filterValueIndex === -1) {
      newFilterArray.push(value);
    } else {
      newFilterArray.splice(filterValueIndex, 1);
    }

    return newFilterArray;
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CategoryFilterOverlay_component__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  history: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_10__["HistoryType"].isRequired,
  location: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_10__["LocationType"].isRequired,
  customFiltersValues: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_8__["SelectedFiltersType"].isRequired,
  hideActiveOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  goToPreviousHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  goToPreviousNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  changeHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  changeNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  availableFilters: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_9__["FilterAttributeType"].isRequired,
  isInfoLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isCategoryAnchor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMatchingInfoFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isProductsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isSearchPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
}, _class.defaultProps = {
  isCategoryAnchor: true,
  isMatchingInfoFilter: false
}, _class), "Component/CategoryFilterOverlay/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CategoryFilterOverlayContainer)));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryFilterOverlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryFilterOverlay.container */ "./node_modules/@scandipwa/scandipwa/src/component/CategoryFilterOverlay/CategoryFilterOverlay.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategoryFilterOverlay_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.component.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.component.js ***!
  \**************************************************************************************************************************/
/*! exports provided: ExpandableContentShowMore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableContentShowMore", function() { return ExpandableContentShowMore; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _ExpandableContentShowMore_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpandableContentShowMore.style */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.style.scss");
/* harmony import */ var _ExpandableContentShowMore_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ExpandableContentShowMore_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.component.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */




/** #namespace Component/ExpandableContentShowMore/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ExpandableContentShowMore = Mosaic.middleware((_class = class ExpandableContentShowMore_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.handleShowAllButtonClick = this.handleShowAllButtonClick.bind(this);
  }

  __construct(props) {
    super.__construct(props);

    this.ref = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    const {
      showElemCount,
      children: {
        length
      }
    } = this.props;
    this.expandableRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    this.expandableContentHeight = 'auto';
    this.state = {
      isOpen: length > showElemCount,
      isExpanding: false
    };
  }

  componentDidMount() {
    const {
      isOpen
    } = this.state;

    if (isOpen) {
      if (this.expandableRef.current) {
        this.expandableContentHeight = this.expandableRef.current.getBoundingClientRect().height;
      }

      this.setState({
        isOpen: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    var _this = this;

    const {
      children: prevChildren
    } = prevProps;
    const {
      children: nextChildren
    } = this.props;

    if (prevChildren !== nextChildren) {
      if (this.expandableRef.current) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isOpen: true
        }, function () {
          _this.expandableRef.current.style.height = 'auto';
        });
      }
    }

    const {
      isExpanding
    } = this.state;

    if (isExpanding) {
      const ONE_SECOND_IN_MS = 1000;
      const transitionDurationCSStoMS = window.getComputedStyle(this.expandableRef.current).getPropertyValue('transition-duration').slice(0, -1) * ONE_SECOND_IN_MS;
      setTimeout(function () {
        return _this.setState({
          isExpanding: false
        });
      }, transitionDurationCSStoMS);
    }

    if (nextChildren !== prevChildren) {
      this.getExpandableContentHeight();
    }
  }

  getExpandableContentHeight() {
    var _this2 = this;

    const {
      isOpen
    } = this.state;
    const {
      showElemCount,
      children: {
        length
      }
    } = this.props;

    if (isOpen && length <= showElemCount) {
      this.setState({
        isOpen: false
      });
      return;
    }

    this.expandableContentHeight = 'auto';
    this.setState({
      isOpen: true
    }, function () {
      if (_this2.expandableRef.current) {
        _this2.expandableContentHeight = _this2.expandableRef.current.getBoundingClientRect().height;
      }

      _this2.setState({
        isOpen: false
      });
    });
  }

  handleShowAllButtonClick() {
    const {
      isExpanding
    } = this.state;

    if (!isExpanding) {
      this.setState(function (_ref) {
        let {
          isOpen
        } = _ref;
        return {
          isOpen: !isOpen,
          isExpanding: true
        };
      });
    }
  }

  renderShowAllButton() {
    const {
      showElemCount,
      children: {
        length
      }
    } = this.props;

    if (length <= showElemCount) {
      return null;
    }

    const {
      isOpen
    } = this.state;
    const mods = isOpen ? {
      state: 'isOpen'
    } : {};
    return /*#__PURE__*/_checkBEM(React, "button", {
      onClick: this.handleShowAllButtonClick,
      mix: {
        block: 'Button',
        mods: {
          likeLink: true
        }
      },
      block: "ExpandableContentShowMore",
      elem: "ShowAllButton",
      mods: mods,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, isOpen ? __('Show less') : __('Show more'));
  }

  renderExpandableChildren() {
    const {
      isOpen,
      isExpanding
    } = this.state;
    const {
      children,
      showElemCount
    } = this.props;
    const child = isOpen || isExpanding ? children.slice(showElemCount) : null;
    const style = {
      height: isOpen ? this.expandableContentHeight : 0
    };
    return /*#__PURE__*/_checkBEM(React, "div", {
      ref: this.expandableRef,
      block: "ExpandableContentShowMore",
      elem: "ExpandableChildren",
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }, child);
  }

  renderContent() {
    const {
      children,
      showElemCount
    } = this.props;
    const child = children.slice(0, showElemCount);
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, child, this.renderExpandableChildren(), this.renderShowAllButton());
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
      block: "ExpandableContentShowMore",
      ref: this.ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, this.renderContent());
  }

}, _class.propTypes = {
  showElemCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"].isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class.defaultProps = {
  showElemCount: 3
}, _class), "Component/ExpandableContentShowMore/Component");
/* harmony default export */ __webpack_exports__["default"] = (ExpandableContentShowMore);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.container.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.container.js ***!
  \**************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ExpandableContentShowMore_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandableContentShowMore.component */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.component.js");
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */


/** #namespace Component/ExpandableContentShowMore/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/ExpandableContentShowMore/Container/mapStateToProps");
/** #namespace Component/ExpandableContentShowMore/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/ExpandableContentShowMore/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ExpandableContentShowMore_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpandableContentShowMore_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableContentShowMore.container */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContentShowMore/ExpandableContentShowMore.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ExpandableContentShowMore_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.container.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.container.js ***!
  \**************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay.component */ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.component.js");
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */


/** #namespace Component/Overlay/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    activeOverlay: state.OverlayReducer.activeOverlay,
    areOtherOverlaysOpen: state.OverlayReducer.areOtherOverlaysOpen,
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/Overlay/Container/mapStateToProps");
/** #namespace Component/Overlay/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/Overlay/Container/mapDispatchToProps"); // eslint-disable-next-line @scandipwa/scandipwa-guidelines/always-both-mappings

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
})(_Overlay_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Overlay/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay.container */ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/Overlay.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Overlay_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.component.js ***!
  \******************************************************************************************************/
/*! exports provided: ResetAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAttributes", function() { return ResetAttributes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CloseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CloseIcon */ "./node_modules/@scandipwa/scandipwa/src/component/CloseIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Html */ "./node_modules/@scandipwa/scandipwa/src/component/Html/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/Category */ "./node_modules/@scandipwa/scandipwa/src/util/Category/index.js");
/* harmony import */ var _ResetAttributes_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResetAttributes.style */ "./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.style.scss");
/* harmony import */ var _ResetAttributes_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ResetAttributes_style__WEBPACK_IMPORTED_MODULE_5__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.component.js";

/* eslint-disable react/jsx-no-bind */

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */






/** #namespace Component/ResetAttributes/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ResetAttributes = Mosaic.middleware((_class = class ResetAttributes_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderSelectedOptionLabel(label) {
    if (typeof label !== 'string') {
      return label;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Html__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 16
      }
    });
  }

  renderSelectedOption(selectedOption) {
    const {
      toggleCustomFilter
    } = this.props;
    const {
      attribute_code,
      attribute_label,
      value_string
    } = selectedOption;

    const onRemove = function () {
      return toggleCustomFilter(attribute_code, value_string);
    };

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ResetAttributes",
      elem: "AttributeValue",
      key: value_string,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "div", {
      block: "ResetAttributes",
      elem: "CloseIcon",
      role: "button",
      tabIndex: "0",
      onKeyDown: onRemove,
      onClick: onRemove,
      "aria-label": __('Close'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CloseIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    })), /*#__PURE__*/_checkBEM(React, "div", {
      block: "ResetAttributes",
      elem: "AttributeText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "span", {
      block: "ResetAttributes",
      elem: "AttributeLabel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, `${attribute_label}: `), /*#__PURE__*/_checkBEM(React, "span", {
      block: "ResetAttributes",
      elem: "AttributeOption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, this.renderSelectedOptionLabel(selectedOption.label))));
  }

  renderResetItem(title, selectedOptions) {
    var _this = this;

    return /*#__PURE__*/_checkBEM(React, "div", {
      key: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, selectedOptions.map(function (o) {
      return _this.renderSelectedOption(o);
    }));
  }

  renderDesktopTitle() {
    return /*#__PURE__*/_checkBEM(React, "h3", {
      block: "ResetAttributes",
      elem: "Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __('Now shopping by:'));
  }

  renderMobileTitle() {
    const {
      filtersData = {}
    } = this.props;
    const count = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Category__WEBPACK_IMPORTED_MODULE_4__["getFiltersCount"])(filtersData);
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ResetAttributes",
      elem: "MobileTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, count === 1 ? __('1 filter selected') : Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Category__WEBPACK_IMPORTED_MODULE_4__["getFiltersCount"])(filtersData) + __(' filters selected'));
  }

  render() {
    var _this2 = this;

    const {
      filtersData = {}
    } = this.props;

    if (!Object.keys(filtersData).length) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderDesktopTitle(), this.renderMobileTitle(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "ResetAttributes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, Object.entries(filtersData).map(function (_ref) {
      let [attrName, attrData] = _ref;
      return _this2.renderResetItem(attrName, attrData);
    })));
  }

}, _class.propTypes = {
  toggleCustomFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  filtersData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    attribute_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  }))).isRequired
}, _class), "Component/ResetAttributes/Component");
/* harmony default export */ __webpack_exports__["default"] = (ResetAttributes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.container.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.container.js ***!
  \******************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, ResetAttributesContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAttributesContainer", function() { return ResetAttributesContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Category.type */ "./node_modules/@scandipwa/scandipwa/src/type/Category.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Category */ "./node_modules/@scandipwa/scandipwa/src/util/Category/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Product */ "./node_modules/@scandipwa/scandipwa/src/util/Product/index.js");
/* harmony import */ var _ResetAttributes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ResetAttributes.component */ "./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.container.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */








/** #namespace Component/ResetAttributes/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    currency_code: state.ConfigReducer.currencyData.current_currency_code
  };
}, "Component/ResetAttributes/Container/mapStateToProps");
/** #namespace Component/ResetAttributes/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/ResetAttributes/Container/mapDispatchToProps");
/** #namespace Component/ResetAttributes/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ResetAttributesContainer = Mosaic.middleware((_class = class ResetAttributesContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      toggleCustomFilter
    } = this.props;
    return {
      toggleCustomFilter,
      filtersData: this.filterResetItems()
    };
  }

  getFilterOptionsForPrice(values, options) {
    var _this = this;

    // no multiselect for price, always 1 selected value
    const [fromValue, toValue] = values[0].split('_');
    return options.filter(function (_ref) {
      let {
        value_string
      } = _ref;
      return value_string.startsWith(fromValue);
    }).map(function (option) {
      const {
        currency_code
      } = _this.props;
      const {
        label: initialLabel,
        value_string
      } = option;
      const [from, to] = initialLabel.split('~');
      const rangeEnd = toValue === '*' ? toValue : to;
      const label = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Category__WEBPACK_IMPORTED_MODULE_5__["getPriceFilterLabel"])(from, rangeEnd, currency_code);
      return {
        value_string,
        label
      };
    });
  }

  getFilterOptionsDefault(values, options) {
    return options.filter(function (option) {
      return values.includes(option.value_string);
    });
  }

  getResetData(attrCode, attrValues) {
    const {
      availableFilters
    } = this.props;
    const filterData = availableFilters[attrCode];

    if (!filterData) {
      return {};
    }

    const {
      is_boolean,
      attribute_label,
      attribute_options,
      attribute_code
    } = filterData;
    const func = attribute_code === 'price' ? this.getFilterOptionsForPrice.bind(this) : this.getFilterOptionsDefault.bind(this);
    return {
      [attribute_label]: func(attrValues, Object.values(attribute_options)).map(function (option) {
        return { ...option,
          attribute_code,
          attribute_label,
          label: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_6__["getBooleanLabel"])(option.label, is_boolean)
        };
      })
    };
  }

  filterResetItems() {
    var _this2 = this;

    const {
      customFiltersValues
    } = this.props;
    return Object.entries(customFiltersValues).reduce(function (prev, _ref2) {
      let [attrCode, attrValues] = _ref2;
      return { ...prev,
        ..._this2.getResetData(attrCode, attrValues)
      };
    }, {});
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _ResetAttributes_component__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  availableFilters: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_4__["AttributesType"].isRequired,
  customFiltersValues: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Category_type__WEBPACK_IMPORTED_MODULE_3__["SelectedFiltersType"].isRequired,
  currency_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  toggleCustomFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/ResetAttributes/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ResetAttributesContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetAttributes_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetAttributes.container */ "./node_modules/@scandipwa/scandipwa/src/component/ResetAttributes/ResetAttributes.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ResetAttributes_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.component.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.component.js ***!
  \**********************************************************************************************/
/*! exports provided: ResetButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetButton", function() { return ResetButton; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/Browser */ "./node_modules/@scandipwa/scandipwa/src/util/Browser/index.js");
/* harmony import */ var _ResetButton_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResetButton.style */ "./node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.style.scss");
/* harmony import */ var _ResetButton_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ResetButton_style__WEBPACK_IMPORTED_MODULE_4__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.component.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */





/** #namespace Component/ResetButton/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ResetButton = Mosaic.middleware((_class = class ResetButton_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      onClick,
      resetFilters
    } = this.props;
    onClick();
    resetFilters();
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_3__["scrollToTop"])();
  }

  render() {
    const {
      mix,
      isContentFiltered
    } = this.props;

    if (!isContentFiltered) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ResetButton",
      mix: mix,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      onClick: this.onClick,
      block: "ResetButton",
      elem: "Button",
      mix: {
        block: 'Button',
        mods: {
          isHollow: true
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __('Reset all')));
  }

}, _class.propTypes = {
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["MixType"],
  resetFilters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isContentFiltered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class.defaultProps = {
  mix: {}
}, _class), "Component/ResetButton/Component");
/* harmony default export */ __webpack_exports__["default"] = (ResetButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.container.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.container.js ***!
  \**********************************************************************************************/
/*! exports provided: ResetButtonContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetButtonContainer", function() { return ResetButtonContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Router.type */ "./node_modules/@scandipwa/scandipwa/src/type/Router.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _ResetButton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResetButton.component */ "./node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.container.js";

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */







/** #namespace Component/ResetButton/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ResetButtonContainer = Mosaic.middleware((_class = class ResetButtonContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      resetFilters: this.resetFilters.bind(this)
    };
  }

  containerProps() {
    const {
      mix,
      onClick
    } = this.props;
    return {
      mix,
      onClick,
      isContentFiltered: this.isContentFiltered()
    };
  }

  resetFilters() {
    const {
      location,
      history
    } = this.props;
    Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_5__["setQueryParams"])({
      customFilters: '',
      priceMin: '',
      priceMax: '',
      page: ''
    }, location, history);
  }

  isContentFiltered() {
    const {
      customFilters,
      priceMin,
      priceMax
    } = this.urlStringToObject();
    return !!(customFilters || priceMin || priceMax);
  }

  urlStringToObject() {
    const {
      location: {
        search = ''
      }
    } = this.props;
    return search.substr(1).split('&').reduce(function (acc, part) {
      const [key, value] = part.split('=');
      return { ...acc,
        [key]: value
      };
    }, {});
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _ResetButton_component__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  history: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_4__["HistoryType"].isRequired,
  location: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Router_type__WEBPACK_IMPORTED_MODULE_4__["LocationType"].isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_3__["MixType"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class.defaultProps = {
  mix: {}
}, _class), "Component/ResetButton/Container");
/* harmony default export */ __webpack_exports__["default"] = (_c = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ResetButtonContainer));

var _c;

__webpack_require__.$Refresh$.register(_c, "%default%");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ResetButton/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ResetButton/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetButton_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetButton.container */ "./node_modules/@scandipwa/scandipwa/src/component/ResetButton/ResetButton.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ResetButton_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
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
//# sourceMappingURL=overlays-category.chunk.js.map