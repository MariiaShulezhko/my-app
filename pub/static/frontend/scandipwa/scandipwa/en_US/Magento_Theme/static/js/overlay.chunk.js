(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["overlay"],{

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.component.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.component.js ***!
  \**********************************************************************************************/
/*! exports provided: CartOverlay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartOverlay", function() { return CartOverlay; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/CartItem */ "./node_modules/@scandipwa/scandipwa/src/component/CartItem/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CmsBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/CmsBlock */ "./node_modules/@scandipwa/scandipwa/src/component/CmsBlock/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Header/Header.config */ "./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Link */ "./node_modules/@scandipwa/scandipwa/src/component/Link/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_LockIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/LockIcon */ "./node_modules/@scandipwa/scandipwa/src/component/LockIcon/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/component/Overlay */ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_PopupSuspense_PopupSuspense_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/component/PopupSuspense/PopupSuspense.config */ "./node_modules/@scandipwa/scandipwa/src/component/PopupSuspense/PopupSuspense.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_CartPage_CartPage_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/route/CartPage/CartPage.config */ "./node_modules/@scandipwa/scandipwa/src/route/CartPage/CartPage.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Browser */ "./node_modules/@scandipwa/scandipwa/src/util/Browser/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/util/Price */ "./node_modules/@scandipwa/scandipwa/src/util/Price/index.js");
/* harmony import */ var _CartOverlay_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CartOverlay.style */ "./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.style.scss");
/* harmony import */ var _CartOverlay_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_CartOverlay_style__WEBPACK_IMPORTED_MODULE_13__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.component.js";

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














/** #namespace Component/CartOverlay/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartOverlay = Mosaic.middleware((_class = class CartOverlay_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  componentDidMount() {
    const {
      showOverlay,
      isMobile,
      activeOverlay
    } = this.props;

    if (!isMobile && activeOverlay === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_PopupSuspense_PopupSuspense_config__WEBPACK_IMPORTED_MODULE_8__["OVERLAY_PLACEHOLDER"]) {
      showOverlay(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__["CART_OVERLAY"]);
    }
  }

  renderPriceLine(price) {
    const {
      currencyCode
    } = this.props;
    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Price__WEBPACK_IMPORTED_MODULE_12__["formatPrice"])(price, currencyCode);
  }

  renderCartItems() {
    var _this = this;

    const {
      totals: {
        items = [],
        prices: {
          quote_currency_code = null
        } = {}
      },
      onCartItemLoading
    } = this.props;

    if (items.length < 1) {
      return this.renderNoCartItems();
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartOverlay",
      elem: "Items",
      "aria-label": "List of items in cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, items.map(function (item) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CartItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: item.id,
        item: item,
        currency_code: quote_currency_code,
        onCartItemLoading: onCartItemLoading,
        showLoader: true,
        isCartOverlay: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      });
    }));
  }

  renderNoCartItems() {
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "CartOverlay",
      elem: "Empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, __('You have no items in your shopping cart.'));
  }

  renderOrderTotalExlTax() {
    const {
      cartTotalSubPrice
    } = this.props;

    if (!cartTotalSubPrice && cartTotalSubPrice !== 0) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, __('Excl. tax: %s', this.renderPriceLine(cartTotalSubPrice)));
  }

  renderTotals() {
    const {
      totals: {
        prices: {
          grand_total: {
            value: grand_total = 0
          } = {}
        } = {}
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "dl", {
      block: "CartOverlay",
      elem: "Total",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "dt", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, __('Order total:')), /*#__PURE__*/_checkBEM(React, "dd", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, this.renderPriceLine(grand_total), this.renderOrderTotalExlTax()));
  }

  renderTax() {
    var _applied_taxes$, _applied_taxes$$amoun, _applied_taxes$2, _applied_taxes$2$amou;

    const {
      totals: {
        prices: {
          applied_taxes = []
        } = {}
      },
      cartDisplaySettings: {
        display_zero_tax_subtotal
      } = {}
    } = this.props;

    if (!((_applied_taxes$ = applied_taxes[0]) === null || _applied_taxes$ === void 0 ? void 0 : (_applied_taxes$$amoun = _applied_taxes$.amount) === null || _applied_taxes$$amoun === void 0 ? void 0 : _applied_taxes$$amoun.value) && !display_zero_tax_subtotal) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "dl", {
      block: "CartOverlay",
      elem: "Tax",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "dt", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, __('Tax total:')), /*#__PURE__*/_checkBEM(React, "dd", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, this.renderPriceLine((_applied_taxes$2 = applied_taxes[0]) === null || _applied_taxes$2 === void 0 ? void 0 : (_applied_taxes$2$amou = _applied_taxes$2.amount) === null || _applied_taxes$2$amou === void 0 ? void 0 : _applied_taxes$2$amou.value)));
  }

  renderCouponCode(code) {
    if (!code) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "strong", {
      block: "CartOverlay",
      elem: "DiscountCoupon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 16
      }
    }, `${code.toUpperCase()}:`);
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
    const {
      amount: {
        value: discount_amount = 0
      } = {}
    } = discount || {};

    if (!applied_rule_ids || !discount_amount) {
      return null;
    }

    const label = coupon_code ? __('Coupon code discount ') : __('Discount: ');
    return /*#__PURE__*/_checkBEM(React, "dl", {
      block: "CartOverlay",
      elem: "Discount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "dt", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }
    }, label, this.renderCouponCode(coupon_code)), /*#__PURE__*/_checkBEM(React, "dd", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }
    }, `-${this.renderPriceLine(Math.abs(discount_amount))}`));
  }

  renderSecureCheckoutButton() {
    const {
      handleCheckoutClick,
      minimumOrderAmountReached,
      hasOutOfStockProductsInCart
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "CartOverlay",
      elem: "CheckoutButton",
      mix: {
        block: 'Button'
      },
      onClick: handleCheckoutClick,
      disabled: hasOutOfStockProductsInCart || !minimumOrderAmountReached,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_LockIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }), __('Secure checkout'));
  }

  renderActions() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartOverlay",
      elem: "Actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      block: "CartOverlay",
      elem: "CartButton",
      mix: {
        block: 'Button',
        mods: {
          isHollow: true
        }
      },
      to: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_CartPage_CartPage_config__WEBPACK_IMPORTED_MODULE_9__["CART_URL"],
      onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_11__["scrollToTop"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }
    }, __('View cart')), this.renderSecureCheckoutButton());
  }

  renderCartAdditional() {
    const {
      totals: {
        items = []
      }
    } = this.props;

    if (items.length < 1) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartOverlay",
      elem: "Additional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 13
      }
    }, this.renderDiscount(), this.renderTax(), this.renderTotals(), this.renderOutOfStockProductsWarning(), this.renderActions());
  }

  renderPromo() {
    const {
      minicart_content: {
        minicart_cms
      } = {}
    } = window.contentConfiguration;

    if (minicart_cms) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_CmsBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
        identifier: minicart_cms,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 20
        }
      });
    }

    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "CartOverlay",
      elem: "Promo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 13
      }
    }, __('Free shipping on order 49$ and more.'));
  }

  renderOutOfStockProductsWarning() {
    const {
      hasOutOfStockProductsInCart
    } = this.props;

    if (!hasOutOfStockProductsInCart) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartOverlay",
      elem: "OutOfStockProductsWarning",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 13
      }
    }, __('Please, remove out of stock products from cart'));
  }

  render() {
    const {
      changeHeaderState
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__["CART_OVERLAY"],
      onVisible: changeHeaderState,
      mix: {
        block: 'CartOverlay'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 13
      }
    }, this.renderPromo(), /*#__PURE__*/_checkBEM(React, "div", {
      block: "CartOverlay",
      elem: "ContentWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }
    }, this.renderCartItems(), this.renderCartAdditional()));
  }

}, _class.propTypes = {
  totals: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__["TotalsType"].isRequired,
  changeHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleCheckoutClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  currencyCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  showOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  activeOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  hasOutOfStockProductsInCart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  cartTotalSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cartDisplaySettings: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__["CartDisplayType"].isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onCartItemLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  minimumOrderAmountReached: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  hasOutOfStockProductsInCart: false,
  onCartItemLoading: null,
  currencyCode: null,
  cartTotalSubPrice: null,
  minimumOrderAmountReached: true
}, _class), "Component/CartOverlay/Component");
/* harmony default export */ __webpack_exports__["default"] = (CartOverlay);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.container.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.container.js ***!
  \**********************************************************************************************/
/*! exports provided: CartDispatcher, mapStateToProps, mapDispatchToProps, CartOverlayContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDispatcher", function() { return CartDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartOverlayContainer", function() { return CartOverlayContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Header/Header.config */ "./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountOverlay/MyAccountOverlay.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.action */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.reducer */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.reducer.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/store/Overlay/Overlay.action */ "./node_modules/@scandipwa/scandipwa/src/store/Overlay/Overlay.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/util/Browser */ "./node_modules/@scandipwa/scandipwa/src/util/Browser/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/util/Cart */ "./node_modules/@scandipwa/scandipwa/src/util/Cart/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product_Extract__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/util/Product/Extract */ "./node_modules/@scandipwa/scandipwa/src/util/Product/Extract.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _CartOverlay_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CartOverlay.component */ "./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.container.js";

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
/** #namespace Component/CartOverlay/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  var _state$CartReducer$ca, _state$CartReducer$ca2;

  return {
    totals: state.CartReducer.cartTotals,
    isMobile: state.ConfigReducer.device.isMobile,
    guest_checkout: state.ConfigReducer.guest_checkout,
    currencyCode: (_state$CartReducer$ca = state.CartReducer.cartTotals) === null || _state$CartReducer$ca === void 0 ? void 0 : (_state$CartReducer$ca2 = _state$CartReducer$ca.prices) === null || _state$CartReducer$ca2 === void 0 ? void 0 : _state$CartReducer$ca2.quote_currency_code,
    activeOverlay: state.OverlayReducer.activeOverlay,
    cartTotalSubPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_13__["getCartTotalSubPrice"])(state),
    cartShippingPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_13__["getCartShippingPrice"])(state),
    cartShippingSubPrice: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Cart__WEBPACK_IMPORTED_MODULE_13__["getCartShippingSubPrice"])(state),
    cartDisplaySettings: state.ConfigReducer.cartDisplayConfig,
    minimumOrderAmount: state.CartReducer.cartTotals.minimum_order_amount
  };
}, "Component/CartOverlay/Container/mapStateToProps");
/** #namespace Component/CartOverlay/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    setNavigationState: function (stateName) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_6__["changeNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_7__["TOP_NAVIGATION_TYPE"], stateName));
    },
    changeHeaderState: function (state) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_6__["changeNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_7__["TOP_NAVIGATION_TYPE"], state));
    },
    updateTotals: function (options) {
      return CartDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.updateTotals(dispatch, options);
      });
    },
    showOverlay: function (overlayKey) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_9__["toggleOverlayByKey"])(overlayKey));
    },
    showNotification: function (type, message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_8__["showNotification"])(type, message));
    },
    hideActiveOverlay: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_9__["hideActiveOverlay"])());
    }
  };
}, "Component/CartOverlay/Container/mapDispatchToProps");
/** #namespace Component/CartOverlay/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const CartOverlayContainer = Mosaic.middleware((_class = class CartOverlayContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isEditing: false,
      isCartItemLoading: false
    };
    this.containerFunctions = {
      changeHeaderState: this.changeHeaderState.bind(this),
      handleCheckoutClick: this.handleCheckoutClick.bind(this),
      onCartItemLoading: this.onCartItemLoading.bind(this)
    };
  }

  containerProps() {
    const {
      totals,
      totals: {
        items = []
      } = {},
      showOverlay,
      currencyCode,
      activeOverlay,
      cartTotalSubPrice,
      cartDisplaySettings,
      isMobile,
      cartShippingPrice,
      cartShippingSubPrice,
      minimumOrderAmount: {
        minimum_order_amount_reached: minimumOrderAmountReached = true
      }
    } = this.props;
    const {
      isEditing,
      isCartItemLoading
    } = this.state;
    return {
      totals,
      showOverlay,
      currencyCode,
      activeOverlay,
      cartTotalSubPrice,
      cartDisplaySettings,
      isEditing,
      isMobile,
      cartShippingPrice,
      cartShippingSubPrice,
      isCartItemLoading,
      minimumOrderAmountReached,
      hasOutOfStockProductsInCart: this.hasOutOfStockProductsInCartItems(items)
    };
  }

  hasOutOfStockProductsInCartItems() {
    let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return items.some(function (_ref2) {
      let {
        product
      } = _ref2;
      return !Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product_Extract__WEBPACK_IMPORTED_MODULE_15__["getProductInStock"])(product);
    });
  }

  handleCheckoutClick(e) {
    const {
      guest_checkout,
      showOverlay,
      showNotification,
      setNavigationState,
      hideActiveOverlay,
      totals
    } = this.props; // to prevent outside-click handler trigger

    e.nativeEvent.stopImmediatePropagation();
    const hasOutOfStockProductsInCart = this.hasOutOfStockProductsInCartItems(totals.items);

    if (hasOutOfStockProductsInCart) {
      showNotification('error', __('Cannot proceed to checkout. Remove out of stock products first.'));
      e.preventDefault();
      return;
    } // Guest checkout enabled or user is signed in => proceed to the checkout


    if (guest_checkout || Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_11__["isSignedIn"])()) {
      hideActiveOverlay();
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_14__["default"].push({
        pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_16__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_5__["CHECKOUT_URL"])
      });
      Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Browser__WEBPACK_IMPORTED_MODULE_12__["scrollToTop"])();
      return;
    } // there is no mobile, as cart overlay is not visible here


    showOverlay(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_4__["CUSTOMER_ACCOUNT_OVERLAY_KEY"]);
    showNotification('info', __('Please sign-in to complete checkout!'));
    setNavigationState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_4__["CUSTOMER_ACCOUNT_OVERLAY_KEY"],
      title: 'Sign in'
    });
  }

  changeHeaderState() {
    var _this = this;

    const {
      changeHeaderState,
      totals: {
        total_quantity = 0
      }
    } = this.props;

    const title = __('%s Items', total_quantity || 0);

    changeHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CART_OVERLAY"],
      title,
      onEditClick: function () {
        _this.setState({
          isEditing: true
        });

        changeHeaderState({
          name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CART_EDITING"],
          title,
          onOkClick: function () {
            return _this.setState({
              isEditing: false
            });
          },
          onCancelClick: function () {
            return _this.setState({
              isEditing: false
            });
          }
        });
      },
      onCloseClick: function () {
        return _this.setState({
          isEditing: false
        });
      }
    });
  }

  onCartItemLoading(isCartItemLoading) {
    this.setState({
      isCartItemLoading
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _CartOverlay_component__WEBPACK_IMPORTED_MODULE_17__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  totals: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__["TotalsType"].isRequired,
  guest_checkout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  changeHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  setNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  hideActiveOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  cartTotalSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cartDisplaySettings: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_10__["CartDisplayType"].isRequired,
  currencyCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  activeOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  cartShippingPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cartShippingSubPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  minimumOrderAmount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    minimum_order_amount_reached: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    minimum_order_description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })
}, _class.defaultProps = {
  guest_checkout: true,
  cartTotalSubPrice: null,
  cartShippingPrice: 0,
  cartShippingSubPrice: null,
  currencyCode: null,
  minimumOrderAmount: {}
}, _class), "Component/CartOverlay/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CartOverlayContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartOverlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartOverlay.container */ "./node_modules/@scandipwa/scandipwa/src/component/CartOverlay/CartOverlay.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CartOverlay_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Form/Form.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Form/Form.component.js ***!
  \********************************************************************************/
/*! exports provided: Form, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/type/Field.type */ "./node_modules/@scandipwa/scandipwa/src/type/Field.type.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Form/Form.component.js";

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




/**
 * Form
 * @class Form
 * #namespace Component/Form/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const Form = Mosaic.middleware((_class = class Form_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  //#region LABEL/TEXT RENDER
  // Renders validation error messages under form
  renderErrorMessage(message) {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Field",
      elem: "ErrorMessage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }
    }, message);
  }

  renderErrorMessages() {
    const {
      showErrorAsLabel,
      validationResponse
    } = this.props;

    if (!showErrorAsLabel || !validationResponse || validationResponse === true) {
      return null;
    }

    const {
      errorMessages
    } = validationResponse;

    if (!errorMessages) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "Form",
      elem: "ErrorMessages",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, errorMessages.map(this.renderErrorMessage.bind(this)));
  } // Renders group label above form


  renderLabel() {
    const {
      label
    } = this.props;

    if (!label) {
      return null;
    }

    return {
      label
    };
  } // Renders group label under form


  renderSubLabel() {
    const {
      subLabel
    } = this.props;

    if (!subLabel) {
      return null;
    }

    return {
      subLabel
    };
  } //#endregion


  render() {
    const {
      validationResponse,
      children,
      setRef,
      attr,
      events,
      mix
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderLabel(), /*#__PURE__*/_checkBEM(React, "form", Object.assign({}, attr, events, {
      ref: function (elem) {
        return setRef(elem);
      },
      block: "Form",
      mix: mix,
      mods: {
        isValid: validationResponse === true,
        hasError: validationResponse !== true && Object.keys(validationResponse || {}).length !== 0
      },
      noValidate: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }), children), this.renderErrorMessages(), this.renderSubLabel());
  }

}, _class.propTypes = {
  // Group attributes
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"].isRequired,
  attr: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Field_type__WEBPACK_IMPORTED_MODULE_3__["FieldAttrType"].isRequired,
  events: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Field_type__WEBPACK_IMPORTED_MODULE_3__["EventsType"].isRequired,
  setRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  // Validation
  showErrorAsLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  validationResponse: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    errorMessages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool]),
  // Labels
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  subLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_2__["MixType"].isRequired
}, _class.defaultProps = {
  validationResponse: null
}, _class), "Component/Form/Component");
/* harmony default export */ __webpack_exports__["default"] = (Form);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Form/Form.container.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Form/Form.container.js ***!
  \********************************************************************************/
/*! exports provided: FormContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Common.type */ "./node_modules/@scandipwa/scandipwa/src/type/Common.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Field_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Field.type */ "./node_modules/@scandipwa/scandipwa/src/type/Field.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Extract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Form/Extract */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Extract.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Validator */ "./node_modules/@scandipwa/scandipwa/src/util/Validator/index.js");
/* harmony import */ var _Form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form.component */ "./node_modules/@scandipwa/scandipwa/src/component/Form/Form.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/Form/Form.container.js";

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








/**
 * Form
 * @class FormContainer
 * #namespace Component/Form/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const FormContainer = Mosaic.middleware((_class = class FormContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      validationResponse: null
    };
    this.containerFunctions = {
      validate: this.validate.bind(this),
      setRef: this.setRef.bind(this),
      onSubmit: this.onSubmit.bind(this)
    };
    this.formRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  }

  //#region VALIDATION
  // Removes event listener for validation from field
  componentWillUnmount() {
    const {
      validationRule
    } = this.props;

    if (this.formRef) {
      this.formRef.removeEventListener('reset', this.resetField.bind(this));

      if (validationRule && Object.keys(validationRule).length > 0) {
        this.formRef.removeEventListener('validate', this.validate.bind(this));
      }
    }
  } // Adds validation event listener to field


  setRef(elem) {
    const {
      validationRule,
      elemRef
    } = this.props;

    if (elem && this.formRef !== elem) {
      this.formRef = elem;

      if (elemRef) {
        elemRef.current = elem;
      }

      elem.addEventListener('reset', this.resetField.bind(this));

      if (validationRule && Object.keys(validationRule).length > 0) {
        elem.addEventListener('validate', this.validate.bind(this));
      }
    }
  }

  resetField() {
    const fields = this.formRef.querySelectorAll('input, textarea, select');
    const event = new CustomEvent('resetField');
    fields.forEach(function (field) {
      return field.dispatchEvent(event);
    });
  }

  validate(data) {
    const {
      validationRule
    } = this.props;
    const output = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator__WEBPACK_IMPORTED_MODULE_7__["validateGroup"])(this.formRef, validationRule); // If validation is called from different object you can pass object
    // to store validation error values

    if (data && data.detail && output !== true) {
      if (!data.detail.errors) {
        // eslint-disable-next-line no-param-reassign
        data.detail.errors = [];
      }

      data.detail.errors.push(output);
    }

    this.setState({
      validationResponse: output
    });
    return output;
  }

  validateOnEvent(hook) {
    this.validate();

    if (typeof hook === 'function') {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.surroundEvent(hook, ...args);
    }
  }

  surroundEvent(hook) {
    const {
      attr,
      returnAsObject
    } = this.props;
    const fields = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Extract__WEBPACK_IMPORTED_MODULE_6__["default"])(this.formRef, false, [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].numberWithControls, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].button], returnAsObject);

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    hook(...[...args, { ...attr,
      formRef: this.formRef,
      fields
    }]);
  } //#endregion


  onSubmit(e) {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      e.preventDefault();
      const {
        onSubmit,
        onError,
        returnAsObject = false,
        validationRule
      } = _this.props;
      const fields = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Extract__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.formRef, false, [_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].numberWithControls, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].button], returnAsObject);
      const isValid = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator__WEBPACK_IMPORTED_MODULE_7__["validateGroup"])(_this.formRef, validationRule);

      if (isValid !== true) {
        if (typeof onError === 'function') {
          onError(_this.formRef, fields, isValid);
        }

        return;
      }

      if (typeof onSubmit === 'function') {
        onSubmit(_this.formRef, fields);
      }
    })();
  }

  containerProps() {
    var _this2 = this;

    const {
      events,
      validateOn,
      children,
      attr,
      showErrorAsLabel,
      label,
      subLabel,
      mix
    } = this.props;
    const {
      validate,
      onSubmit
    } = this.containerFunctions;
    const {
      validationResponse
    } = this.state;
    const newEvents = {};
    Object.keys(events).forEach(function (eventName) {
      const {
        [eventName]: event
      } = events;
      newEvents[eventName] = _this2.surroundEvent.bind(_this2, event);
    }); // Surrounds events with validation

    validateOn.forEach(function (eventName) {
      const {
        [eventName]: baseEvent
      } = events;
      newEvents[eventName] = baseEvent ? _this2.validateOnEvent.bind(_this2, baseEvent) : validate;
    });
    return {
      validationResponse,
      children,
      attr,
      showErrorAsLabel,
      label,
      subLabel,
      mix,
      events: { ...newEvents,
        onSubmit
      }
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _Form_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  // Form attributes
  children: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["ChildrenType"],
  attr: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Field_type__WEBPACK_IMPORTED_MODULE_5__["FieldAttrType"],
  events: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Field_type__WEBPACK_IMPORTED_MODULE_5__["EventsType"],
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  returnAsObject: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  elemRef: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["RefType"],
  // Validation
  validationRule: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Field_type__WEBPACK_IMPORTED_MODULE_5__["ValidationRuleType"],
  validateOn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  showErrorAsLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Labels
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mix: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Common_type__WEBPACK_IMPORTED_MODULE_4__["MixType"]
}, _class.defaultProps = {
  attr: {},
  events: {},
  validationRule: {},
  validateOn: [],
  showErrorAsLabel: true,
  label: '',
  subLabel: '',
  onSubmit: null,
  onError: null,
  children: [],
  returnAsObject: false,
  mix: {},
  elemRef: null
}, _class), "Component/Form/Container");
/* harmony default export */ __webpack_exports__["default"] = (FormContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/Form/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/Form/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.container */ "./node_modules/@scandipwa/scandipwa/src/component/Form/Form.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Form_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/LockIcon/LockIcon.component.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/LockIcon/LockIcon.component.js ***!
  \****************************************************************************************/
/*! exports provided: LockIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockIcon", function() { return LockIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LockIcon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LockIcon.style */ "./node_modules/@scandipwa/scandipwa/src/component/LockIcon/LockIcon.style.scss");
/* harmony import */ var _LockIcon_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LockIcon_style__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/LockIcon/LockIcon.component.js";

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


/** #namespace Component/LockIcon/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const LockIcon = Mosaic.middleware(class LockIcon_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  render() {
    return /*#__PURE__*/_checkBEM(React, "svg", {
      block: "LockIcon",
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
      d: "M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }));
  }

}, "Component/LockIcon/Component");
/* harmony default export */ __webpack_exports__["default"] = (LockIcon);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/LockIcon/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/LockIcon/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LockIcon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LockIcon.component */ "./node_modules/@scandipwa/scandipwa/src/component/LockIcon/LockIcon.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LockIcon_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountConfirmEmail/MyAccountConfirmEmail.component.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountConfirmEmail/MyAccountConfirmEmail.component.js ***!
  \******************************************************************************************************************/
/*! exports provided: MyAccountConfirmEmail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountConfirmEmail", function() { return MyAccountConfirmEmail; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountConfirmEmail/MyAccountConfirmEmail.component.js";

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



/** #namespace Component/MyAccountConfirmEmail/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountConfirmEmail = Mosaic.middleware((_class = class MyAccountConfirmEmail_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    const {
      state,
      handleSignIn
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "article", {
      "aria-labelledby": "confirm-email-notice",
      block: "MyAccountOverlay",
      elem: "Additional",
      mods: {
        state
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      id: "confirm-email-notice",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __('The email confirmation link has been sent to your email. Please confirm your account to proceed.')), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      onClick: handleSignIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __('Got it')));
  }

}, _class.propTypes = {
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__["SignInStateType"].isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class), "Component/MyAccountConfirmEmail/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountConfirmEmail);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountConfirmEmail/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountConfirmEmail/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountConfirmEmail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountConfirmEmail.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountConfirmEmail/MyAccountConfirmEmail.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountConfirmEmail_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.component.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.component.js ***!
  \********************************************************************************************************************/
/*! exports provided: MyAccountCreateAccount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCreateAccount", function() { return MyAccountCreateAccount; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Form */ "./node_modules/@scandipwa/scandipwa/src/component/Form/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Validator */ "./node_modules/@scandipwa/scandipwa/src/util/Validator/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Validator/Config */ "./node_modules/@scandipwa/scandipwa/src/util/Validator/Config.js");
/* harmony import */ var _MyAccountCreateAccount_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyAccountCreateAccount.style.scss */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.style.scss");
/* harmony import */ var _MyAccountCreateAccount_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MyAccountCreateAccount_style_scss__WEBPACK_IMPORTED_MODULE_9__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.component.js";

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










/** #namespace Component/MyAccountCreateAccount/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountCreateAccount = Mosaic.middleware((_class = class MyAccountCreateAccount_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderVatNumberField() {
    const {
      showTaxVatNumber,
      vatNumberRequired
    } = this.props;

    if (!showTaxVatNumber) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].text,
      label: __('Tax/VAT Number'),
      attr: {
        id: 'taxvat',
        name: 'taxvat',
        placeholder: __('Your Tax/VAT Number')
      },
      validateOn: ['onChange'],
      validationRule: {
        isRequired: vatNumberRequired
      },
      addRequiredTag: vatNumberRequired,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    });
  }

  renderSubscribeToNewsletter() {
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].checkbox,
      label: __('Subscribe to newsletter'),
      attr: {
        id: 'is_subscribed',
        name: 'is_subscribed',
        placeholder: __('Your Tax/VAT Number')
      },
      mix: {
        block: 'MyAccountOverlay',
        elem: 'Checkbox'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    });
  }

  renderCreateAccountPersonalInfoFields() {
    const {
      newsletterActive
    } = this.props;
    const {
      location: {
        state: {
          firstName = '',
          lastName = ''
        } = {}
      }
    } = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_6__["default"];
    return /*#__PURE__*/_checkBEM(React, "fieldset", {
      block: "MyAccountOverlay",
      elem: "Legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "legend", {
      block: "MyAccountOverlay",
      elem: "PersonalInfoLegend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __('Personal Information')), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].text,
      label: __('First Name'),
      attr: {
        id: 'firstname',
        name: 'firstname',
        defaultValue: firstName,
        placeholder: __('Your first name'),
        autocomplete: 'given-name'
      },
      validateOn: ['onChange'],
      validationRule: {
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_8__["VALIDATION_INPUT_TYPE"].alphaSpace,
        isRequired: true
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].text,
      label: __('Last Name'),
      attr: {
        id: 'lastname',
        name: 'lastname',
        defaultValue: lastName,
        placeholder: __('Your last name'),
        autocomplete: 'family-name'
      },
      validateOn: ['onChange'],
      validationRule: {
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_8__["VALIDATION_INPUT_TYPE"].alphaSpace,
        isRequired: true
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }), this.renderVatNumberField(), newsletterActive ? this.renderSubscribeToNewsletter() : null);
  }

  renderCreateAccountSignUpInfoFields() {
    const {
      location: {
        state: {
          email = ''
        } = {}
      }
    } = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_6__["default"];
    const {
      range,
      minimunPasswordCharacter
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "fieldset", {
      block: "MyAccountOverlay",
      elem: "Legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "legend", {
      block: "MyAccountOverlay",
      elem: "SignUpLegend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, __('Sign-Up Information')), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].email,
      label: __('Email'),
      attr: {
        id: 'email',
        name: 'email',
        defaultValue: email,
        placeholder: __('Your email name'),
        autocomplete: 'email'
      },
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true,
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_8__["VALIDATION_INPUT_TYPE"].email
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOverlay",
      elem: "PasswordBlock",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].password,
      label: __('Password'),
      attr: {
        id: 'password',
        name: 'password',
        placeholder: __('Enter your password'),
        autocomplete: 'new-password'
      },
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true,
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_8__["VALIDATION_INPUT_TYPE"].password,
        match: function (value) {
          const email = document.getElementById('email');

          if (value && email.value === value) {
            return __('Passwords can\'t be the same as email!');
          }

          return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator__WEBPACK_IMPORTED_MODULE_7__["validatePassword"])(value, range, minimunPasswordCharacter);
        }
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].password,
      label: __('Confirm password'),
      attr: {
        id: 'confirm_password',
        name: 'confirm_password',
        placeholder: __('Retype your password'),
        autocomplete: 'new-password'
      },
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true,
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_8__["VALIDATION_INPUT_TYPE"].password,
        match: function (value) {
          const password = document.getElementById('password');
          return value && password.value === value;
        },
        customErrorMessages: {
          onMatchFail: __('Passwords do not match!')
        }
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    })));
  }

  renderSubmitButton() {
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOverlay",
      elem: "Buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      type: "submit",
      mix: {
        block: 'MyAccountOverlay',
        elem: 'SignUpButton'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, __('Sign up')));
  }

  renderCreateAccountForm() {
    const {
      onError,
      onSuccess
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "create-account",
      onSubmit: onSuccess,
      onError: onError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    }, this.renderCreateAccountPersonalInfoFields(), this.renderCreateAccountSignUpInfoFields(), this.renderSubmitButton());
  }

  renderAdditionalField() {
    const {
      state,
      handleSignIn
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "article", {
      block: "MyAccountOverlay",
      elem: "Additional",
      mods: {
        state
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 21
      }
    }, __('Already have an account?')), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        likeLink: true
      },
      mix: {
        block: 'MyAccountOverlay',
        elem: 'SignInLink'
      },
      onClick: handleSignIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 21
      }
    }, __('Sign in'))));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderCreateAccountForm(), this.renderAdditionalField());
  }

}, _class.propTypes = {
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_5__["SignInStateType"].isRequired,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showTaxVatNumber: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  vatNumberRequired: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  newsletterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  range: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  }).isRequired,
  minimunPasswordCharacter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/MyAccountCreateAccount/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountCreateAccount);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.container.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.container.js ***!
  \********************************************************************************************************************/
/*! exports provided: MyAccountDispatcher, mapStateToProps, mapDispatchToProps, MyAccountCreateAccountContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, process, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCreateAccountContainer", function() { return MyAccountCreateAccountContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountOrder/MyAccountOrder.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOrder/MyAccountOrder.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MyAccountOverlay/MyAccountOverlay.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/Form/Transform */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _MyAccountCreateAccount_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MyAccountCreateAccount.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.component.js");
/* harmony import */ var _MyAccountCreateAccount_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MyAccountCreateAccount.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.config.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.container.js";

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
/** #namespace Component/MyAccountCreateAccount/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isLoading: state.MyAccountReducer.isLoading,
    showTaxVatNumber: !!state.ConfigReducer.show_tax_vat_number,
    newsletterActive: state.ConfigReducer.newsletter_general_active,
    isMobile: state.ConfigReducer.device.isMobile,
    minimunPasswordLength: state.ConfigReducer.minimun_password_length,
    minimunPasswordCharacter: state.ConfigReducer.required_character_classes_number
  };
}, "Component/MyAccountCreateAccount/Container/mapStateToProps");
/** #namespace Component/MyAccountCreateAccount/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    createAccount: function (options) {
      return MyAccountDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.createAccount(options, dispatch);
      });
    },
    showNotification: function (type, message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__["showNotification"])(type, message));
    }
  };
}, "Component/MyAccountCreateAccount/Container/mapDispatchToProps");
/** #namespace Component/MyAccountCreateAccount/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountCreateAccountContainer = Mosaic.middleware((_class = class MyAccountCreateAccountContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onSuccess: this.onSuccess.bind(this),
      onError: this.onError.bind(this)
    };
  }

  containerProps() {
    const {
      state,
      handleSignIn,
      showTaxVatNumber,
      newsletterActive,
      minimunPasswordLength,
      minimunPasswordCharacter
    } = this.props;
    const range = {
      min: minimunPasswordLength,
      max: 64
    };
    return {
      state,
      handleSignIn,
      showTaxVatNumber,
      newsletterActive,
      vatNumberRequired: this.getVatNumberRequired(),
      range,
      minimunPasswordCharacter
    };
  }

  getVatNumberRequired() {
    const {
      showTaxVatNumber
    } = this.props;
    return showTaxVatNumber === _MyAccountCreateAccount_config__WEBPACK_IMPORTED_MODULE_12__["SHOW_VAT_NUMBER_REQUIRED"];
  }

  onError() {
    const {
      showNotification
    } = this.props;
    showNotification('info', __('Incorrect data! Please resolve all field validation errors.'));
  }

  onSuccess(form, fields) {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        createAccount,
        onSignIn,
        setSignInState,
        setLoadingState,
        isLoading,
        isLandingPage,
        showNotification,
        isMobile
      } = _this.props;
      const {
        password,
        email,
        firstname,
        lastname,
        is_subscribed,
        taxvat
      } = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_9__["default"])(fields);
      const customerData = {
        customer: {
          firstname,
          lastname,
          email,
          is_subscribed,
          taxvat
        },
        password,
        orderID: sessionStorage.getItem(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOrder_MyAccountOrder_config__WEBPACK_IMPORTED_MODULE_4__["ORDER_ID"])
      };

      if (isLoading) {
        return;
      }

      try {
        const code = yield createAccount(customerData).catch(
        /** #namespace Component/MyAccountCreateAccount/Container/MyAccountCreateAccountContainer/onSuccess/code/createAccount/catch */
        Mosaic.middleware(function () {
          return process.exit(1);
        }, "Component/MyAccountCreateAccount/Container/MyAccountCreateAccountContainer/onSuccess/code/createAccount/catch")); // if user needs confirmation

        if (code === _MyAccountCreateAccount_config__WEBPACK_IMPORTED_MODULE_12__["CONFIRMATION_REQUIRED"]) {
          setSignInState(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_5__["STATE_CONFIRM_EMAIL"]);

          if (isLandingPage || isMobile) {
            showNotification('success', // eslint-disable-next-line max-len
            __('The email confirmation link has been sent to your email. Please confirm your account to proceed.'));
            _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_10__["default"].push('/default/customer/account/login');
          }
        } else if (code !== false) {
          onSignIn();
        }
      } finally {
        setLoadingState(false);
      }
    })();
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountCreateAccount_component__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  createAccount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setSignInState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setLoadingState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  showTaxVatNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isLandingPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__["SignInStateType"].isRequired,
  newsletterActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  minimunPasswordLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  minimunPasswordCharacter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
}, _class.defaultProps = {
  isLandingPage: false,
  onSignIn: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_8__["noopFn"]
}, _class), "Component/MyAccountCreateAccount/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountCreateAccountContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountCreateAccount_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountCreateAccount.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/MyAccountCreateAccount.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountCreateAccount_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.component.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.component.js ***!
  \**********************************************************************************************************************/
/*! exports provided: MyAccountForgotPassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountForgotPassword", function() { return MyAccountForgotPassword; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Form */ "./node_modules/@scandipwa/scandipwa/src/component/Form/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/Validator/Config */ "./node_modules/@scandipwa/scandipwa/src/util/Validator/Config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.component.js";

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







/** #namespace Component/MyAccountForgotPassword/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountForgotPassword = Mosaic.middleware((_class = class MyAccountForgotPassword_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderForgotPasswordForm() {
    const {
      onForgotPasswordSuccess,
      onFormError
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "forgot-password",
      onSubmit: onForgotPasswordSuccess,
      onError: onFormError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].email,
      label: __('Email'),
      attr: {
        id: 'email',
        name: 'email',
        class: 'ForgotPassword-Input_type_email',
        placeholder: __('Your email address'),
        autocomplete: 'email'
      },
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true,
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_6__["VALIDATION_INPUT_TYPE"].email
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOverlay",
      elem: "Buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      type: "submit",
      mix: {
        block: 'MyAccountOverlay',
        elem: 'ResetPassword'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __('Send reset link'))));
  }

  renderCreateAccountLabel() {
    const {
      isCheckout,
      handleCreateAccount
    } = this.props;

    if (isCheckout) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "section", {
      "aria-labelledby": "create-account-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "h4", {
      id: "create-account-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __("Don't have an account?")), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        likeLink: true
      },
      onClick: handleCreateAccount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __('Create an account')));
  }

  renderAdditionalField() {
    const {
      state,
      handleSignIn
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "article", {
      block: "MyAccountOverlay",
      elem: "Additional",
      mods: {
        state
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "section", {
      "aria-labelledby": "forgot-password-labe",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "h4", {
      id: "forgot-password-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, __('Already have an account?')), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        likeLink: true
      },
      mix: {
        block: 'MyAccountOverlay',
        elem: 'SignInButton'
      },
      onClick: handleSignIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }, __('Sign in'))), this.renderCreateAccountLabel());
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderForgotPasswordForm(), this.renderAdditionalField());
  }

}, _class.propTypes = {
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_5__["SignInStateType"].isRequired,
  onForgotPasswordSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onFormError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleCreateAccount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isCheckout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
}, _class), "Component/MyAccountForgotPassword/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountForgotPassword);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.container.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.container.js ***!
  \**********************************************************************************************************************/
/*! exports provided: MyAccountDispatcher, mapStateToProps, mapDispatchToProps, MyAccountForgotPasswordContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountForgotPasswordContainer", function() { return MyAccountForgotPasswordContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountOverlay/MyAccountOverlay.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/MyAccount/MyAccount.action */ "./node_modules/@scandipwa/scandipwa/src/store/MyAccount/MyAccount.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Form/Transform */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js");
/* harmony import */ var _MyAccountForgotPassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyAccountForgotPassword.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.container.js";

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
/** #namespace Component/MyAccountForgotPassword/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountForgotPassword/Container/mapStateToProps");
/** #namespace Component/MyAccountForgotPassword/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    forgotPassword: function (options) {
      return MyAccountDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.forgotPassword(options, dispatch);
      });
    },
    forgotPasswordEmail: function (email) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_action__WEBPACK_IMPORTED_MODULE_5__["updateCustomerPasswordForgotEmail"])(email));
    },
    showNotification: function (type, message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_6__["showNotification"])(type, message));
    }
  };
}, "Component/MyAccountForgotPassword/Container/mapDispatchToProps");
/** #namespace Component/MyAccountForgotPassword/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountForgotPasswordContainer = Mosaic.middleware((_class = class MyAccountForgotPasswordContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onForgotPasswordSuccess: this.onForgotPasswordSuccess.bind(this)
    };
  }

  containerProps() {
    const {
      state,
      onFormError,
      handleSignIn,
      handleCreateAccount,
      isCheckout
    } = this.props;
    return {
      state,
      onFormError,
      handleSignIn,
      handleCreateAccount,
      isCheckout
    };
  }

  onForgotPasswordSuccess(form, fields) {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        forgotPassword,
        setSignInState,
        setLoadingState,
        forgotPasswordEmail,
        isOverlayVisible
      } = _this.props;
      const submittedEmail = form[0].value;
      setLoadingState(true);

      try {
        yield forgotPassword(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_8__["default"])(fields));
        setSignInState(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_4__["STATE_FORGOT_PASSWORD_SUCCESS"]);
        forgotPasswordEmail(submittedEmail); // if on route /forgotpassword

        if (!isOverlayVisible) {
          _this.showSuccessNotification(submittedEmail);
        }

        setLoadingState(false);
      } catch {
        setLoadingState(false);
      }
    })();
  }

  showSuccessNotification(submittedEmail) {
    const {
      showNotification
    } = this.props; // eslint-disable-next-line max-len

    const message = __('If there is an account associated with %s you will receive an email with a link to reset your password', submittedEmail).toString();

    showNotification('success', message);
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountForgotPassword_component__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_7__["SignInStateType"].isRequired,
  onFormError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleCreateAccount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isCheckout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  forgotPassword: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  forgotPasswordEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setLoadingState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setSignInState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isOverlayVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
}, _class), "Component/MyAccountForgotPassword/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountForgotPasswordContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountForgotPassword_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountForgotPassword.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/MyAccountForgotPassword.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountForgotPassword_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.component.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.component.js ***!
  \************************************************************************************************************************************/
/*! exports provided: MyAccountForgotPasswordSuccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountForgotPasswordSuccess", function() { return MyAccountForgotPasswordSuccess; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.component.js";

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



/** #namespace Component/MyAccountForgotPasswordSuccess/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountForgotPasswordSuccess = Mosaic.middleware((_class = class MyAccountForgotPasswordSuccess_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  render() {
    // eslint-disable-next-line react/prop-types
    const {
      state,
      handleSignIn,
      submittedEmail
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "article", {
      "aria-labelledby": "forgot-password-success",
      block: "MyAccountOverlay",
      elem: "Additional",
      mods: {
        state
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      id: "forgot-password-success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __('If there is an account associated with %s you will receive an email with a link to reset your password', submittedEmail)), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      onClick: handleSignIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __('Got it')));
  }

}, _class.propTypes = {
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__["SignInStateType"].isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  submittedEmail: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/MyAccountForgotPasswordSuccess/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountForgotPasswordSuccess);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.container.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.container.js ***!
  \************************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountForgotPasswordSuccessContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, PureComponent, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountForgotPasswordSuccessContainer", function() { return MyAccountForgotPasswordSuccessContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _MyAccountForgotPasswordSuccess_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyAccountForgotPasswordSuccess.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.container.js";

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




/** #namespace Component/MyAccountForgotPasswordSuccess/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    submittedEmail: state.MyAccountReducer.email
  };
}, "Component/MyAccountForgotPasswordSuccess/Container/mapStateToProps");
/** #namespace Component/MyAccountForgotPasswordSuccess/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function () {
  return {};
}, "Component/MyAccountForgotPasswordSuccess/Container/mapDispatchToProps");
/** #namespace Component/MyAccountForgotPasswordSuccess/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountForgotPasswordSuccessContainer = Mosaic.middleware((_class = class MyAccountForgotPasswordSuccessContainer_ extends Mosaic.Extensible(PureComponent) {
  containerProps() {
    const {
      state,
      handleSignIn,
      submittedEmail
    } = this.props;
    return {
      state,
      handleSignIn,
      submittedEmail
    };
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountForgotPasswordSuccess_component__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }));
  }

}, _class.propTypes = {
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_2__["SignInStateType"].isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  submittedEmail: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}, _class), "Component/MyAccountForgotPasswordSuccess/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountForgotPasswordSuccessContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")["PureComponent"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountForgotPasswordSuccess_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountForgotPasswordSuccess.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/MyAccountForgotPasswordSuccess.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountForgotPasswordSuccess_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.component.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.component.js ***!
  \********************************************************************************************************/
/*! exports provided: MyAccountOverlay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOverlay", function() { return MyAccountOverlay; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountConfirmEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/MyAccountConfirmEmail */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountConfirmEmail/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountCreateAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/MyAccountCreateAccount */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountCreateAccount/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountForgotPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/component/MyAccountForgotPassword */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPassword/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountForgotPasswordSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/component/MyAccountForgotPasswordSuccess */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountForgotPasswordSuccess/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountSignIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/component/MyAccountSignIn */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/component/Overlay */ "./node_modules/@scandipwa/scandipwa/src/component/Overlay/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MyAccountOverlay.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _MyAccountOverlay_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MyAccountOverlay.style */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.style.scss");
/* harmony import */ var _MyAccountOverlay_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_MyAccountOverlay_style__WEBPACK_IMPORTED_MODULE_13__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.component.js";

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














/** #namespace Component/MyAccountOverlay/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOverlay = Mosaic.middleware((_class = class MyAccountOverlay_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.renderMap = {
      [_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__["STATE_SIGN_IN"]]: {
        render: function () {
          return _this.renderSignIn();
        },
        title: __('Sign in to your account')
      },
      [_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__["STATE_FORGOT_PASSWORD"]]: {
        render: function () {
          return _this.renderForgotPassword();
        },
        title: __('Get password link')
      },
      [_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__["STATE_FORGOT_PASSWORD_SUCCESS"]]: {
        render: function () {
          return _this.renderForgotPasswordSuccess();
        }
      },
      [_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__["STATE_CREATE_ACCOUNT"]]: {
        render: function () {
          return _this.renderCreateAccount();
        },
        title: __('Create new account')
      },
      [_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__["STATE_LOGGED_IN"]]: {
        render: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__["noopFn"]
      },
      [_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__["STATE_CONFIRM_EMAIL"]]: {
        render: function () {
          return _this.renderConfirmEmail();
        },
        title: __('Confirm the email')
      }
    };
  }

  renderMyAccount() {
    const {
      state
    } = this.props;
    const {
      render,
      title
    } = this.renderMap[state];
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOverlay",
      elem: "Action",
      mods: {
        state
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      block: "MyAccountOverlay",
      elem: "Heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, title), render());
  }

  renderConfirmEmail() {
    const {
      state,
      handleSignIn
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountConfirmEmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
      state: state,
      handleSignIn: handleSignIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    });
  }

  renderForgotPassword() {
    const {
      state,
      onFormError,
      handleSignIn,
      handleCreateAccount,
      setSignInState,
      setLoadingState,
      isCheckout,
      isOverlayVisible
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountForgotPassword__WEBPACK_IMPORTED_MODULE_6__["default"], {
      state: state,
      onFormError: onFormError,
      handleSignIn: handleSignIn,
      handleCreateAccount: handleCreateAccount,
      setLoadingState: setLoadingState,
      setSignInState: setSignInState,
      isCheckout: isCheckout,
      isOverlayVisible: isOverlayVisible,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    });
  }

  renderForgotPasswordSuccess() {
    const {
      state,
      handleSignIn
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountForgotPasswordSuccess__WEBPACK_IMPORTED_MODULE_7__["default"], {
      state: state,
      handleSignIn: handleSignIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    });
  }

  renderCreateAccount() {
    let isLandingPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const {
      state,
      handleSignIn,
      setSignInState,
      setLoadingState,
      onSignIn
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountCreateAccount__WEBPACK_IMPORTED_MODULE_5__["default"], {
      state: state,
      handleSignIn: handleSignIn,
      setLoadingState: setLoadingState,
      setSignInState: setSignInState,
      onSignIn: onSignIn,
      isLandingPage: isLandingPage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    });
  }

  renderSignIn() {
    const {
      state,
      onFormError,
      handleForgotPassword,
      handleCreateAccount,
      isCheckout,
      setLoadingState,
      onSignIn
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_MyAccountSignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: state,
      onFormError: onFormError,
      handleForgotPassword: handleForgotPassword,
      handleCreateAccount: handleCreateAccount,
      isCheckout: isCheckout,
      setLoadingState: setLoadingState,
      onSignIn: onSignIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    });
  }

  render() {
    const {
      onVisible,
      isCheckout,
      isMobile,
      isLoading
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Overlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_12__["CUSTOMER_ACCOUNT_OVERLAY_KEY"],
      mix: {
        block: 'MyAccountOverlay'
      },
      onVisible: onVisible,
      isStatic: !isCheckout && isMobile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }), this.renderMyAccount());
  }

}, _class.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  isOverlayVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_10__["SignInStateType"].isRequired,
  setSignInState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  setLoadingState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onFormError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleForgotPassword: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleCreateAccount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isCheckout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
}, _class.defaultProps = {
  isCheckout: false,
  onSignIn: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__["noopFn"]
}, _class), "Component/MyAccountOverlay/Component");
/* harmony default export */ __webpack_exports__["default"] = (_c = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MyAccountOverlay));

var _c;

__webpack_require__.$Refresh$.register(_c, "%default%");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.container.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.container.js ***!
  \********************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, MyAccountOverlayContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOverlayContainer", function() { return MyAccountOverlayContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Header/Header.config */ "./node_modules/@scandipwa/scandipwa/src/component/Header/Header.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/route/MyAccount/MyAccount.config */ "./node_modules/@scandipwa/scandipwa/src/route/MyAccount/MyAccount.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/store/MyAccount/MyAccount.action */ "./node_modules/@scandipwa/scandipwa/src/store/MyAccount/MyAccount.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.action */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/store/Navigation/Navigation.reducer */ "./node_modules/@scandipwa/scandipwa/src/store/Navigation/Navigation.reducer.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/store/Overlay/Overlay.action */ "./node_modules/@scandipwa/scandipwa/src/store/Overlay/Overlay.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/Auth */ "./node_modules/@scandipwa/scandipwa/src/util/Auth/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountOverlay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MyAccountOverlay.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.component.js");
/* harmony import */ var _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MyAccountOverlay.config */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.config.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.container.js";

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
















/** #namespace Component/MyAccountOverlay/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isSignedIn: state.MyAccountReducer.isSignedIn,
    customer: state.MyAccountReducer.customer,
    isMobile: state.ConfigReducer.device.isMobile,
    isPasswordForgotSend: state.MyAccountReducer.isPasswordForgotSend,
    isOverlayVisible: state.OverlayReducer.activeOverlay === _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_ACCOUNT"],
    redirectToDashboard: state.ConfigReducer.redirect_dashboard,
    isLoading: state.MyAccountReducer.isLoading,
    device: state.ConfigReducer.device
  };
}, "Component/MyAccountOverlay/Container/mapStateToProps");
/** #namespace Component/MyAccountOverlay/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    hideActiveOverlay: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_9__["hideActiveOverlay"])());
    },
    showOverlay: function (overlayKey) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_9__["toggleOverlayByKey"])(overlayKey));
    },
    setHeaderState: function (headerState) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_7__["changeNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_8__["TOP_NAVIGATION_TYPE"], headerState));
    },
    goToPreviousHeaderState: function () {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_7__["goToPreviousNavigationState"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_8__["TOP_NAVIGATION_TYPE"]));
    },
    updateCustomerLoadingStatus: function (status) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_MyAccount_MyAccount_action__WEBPACK_IMPORTED_MODULE_6__["updateIsLoading"])(status));
    }
  };
}, "Component/MyAccountOverlay/Container/mapDispatchToProps");
/** #namespace Component/MyAccountOverlay/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountOverlayContainer = Mosaic.middleware((_class = class MyAccountOverlayContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.containerFunctions = {
      onFormError: this.onFormError.bind(this),
      handleForgotPassword: this.handleForgotPassword.bind(this),
      handleSignIn: this.handleSignIn.bind(this),
      handleCreateAccount: this.handleCreateAccount.bind(this),
      onVisible: this.onVisible.bind(this),
      setSignInState: this.setSignInState.bind(this),
      setLoadingState: this.setLoadingState.bind(this)
    };
  }

  __construct(props) {
    super.__construct(props);

    this.state = this.redirectOrGetState(props);
  }

  static getDerivedStateFromProps(props, state) {
    const {
      isPasswordForgotSend,
      isOverlayVisible,
      isMobile,
      goToPreviousHeaderState
    } = props;
    const {
      isPasswordForgotSend: currentIsPasswordForgotSend,
      state: myAccountState
    } = state;
    const {
      location: {
        pathname,
        state: {
          isForgotPassword
        } = {}
      }
    } = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"];
    const stateToBeUpdated = {};
    const customerIsSignedIn = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__["isSignedIn"])();

    if (!isMobile) {
      if (!isOverlayVisible && !customerIsSignedIn) {
        if (pathname !== '/forgot-password' && !isForgotPassword) {
          stateToBeUpdated.state = _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_SIGN_IN"];
        }
      } else if (!isOverlayVisible && customerIsSignedIn) {
        stateToBeUpdated.state = _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_LOGGED_IN"];
      }
    }

    if (myAccountState !== _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_LOGGED_IN"] && customerIsSignedIn) {
      stateToBeUpdated.state = _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_LOGGED_IN"];

      if (pathname.includes(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__["CHECKOUT_URL"])) {
        goToPreviousHeaderState();
      }
    }

    if (myAccountState === _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_LOGGED_IN"] && !customerIsSignedIn) {
      stateToBeUpdated.state = _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_SIGN_IN"];
    }

    if (isPasswordForgotSend !== currentIsPasswordForgotSend) {
      stateToBeUpdated.isPasswordForgotSend = isPasswordForgotSend;

      if (!isOverlayVisible) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_LOGIN_URL"])
        });
      }

      stateToBeUpdated.state = _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_SIGN_IN"];
    }

    return Object.keys(stateToBeUpdated).length ? stateToBeUpdated : null;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      isSignedIn: prevIsSignedIn
    } = prevProps;
    const {
      state: oldMyAccountState
    } = prevState;
    const {
      state: newMyAccountState
    } = this.state;
    const {
      isOverlayVisible
    } = this.props;
    const {
      location: {
        pathname
      }
    } = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"];
    const {
      isSignedIn,
      hideActiveOverlay,
      isCheckout,
      goToPreviousHeaderState,
      redirectToDashboard
    } = this.props;

    if (oldMyAccountState === newMyAccountState) {
      return;
    }

    if (isSignedIn !== prevIsSignedIn) {
      hideActiveOverlay();

      if (isCheckout) {
        goToPreviousHeaderState();
      }
    }

    if (newMyAccountState !== _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_LOGGED_IN"] && pathname.includes(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_URL"]) && !isOverlayVisible) {
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].push({
        pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_LOGIN_URL"])
      });
    }

    if (newMyAccountState === _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_LOGGED_IN"]) {
      if (pathname.includes(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_URL"])) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__["appendWithStoreCode"])('/')
        });
      } else if (!pathname.includes(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__["CHECKOUT_URL"]) && redirectToDashboard) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_URL"])
        });
      }
    }
  }

  containerProps() {
    const {
      isOverlayVisible,
      isMobile,
      isLoading: propIsLoading,
      onSignIn
    } = this.props;
    const {
      state,
      isCheckout
    } = this.state;
    return {
      isCheckout,
      isLoading: propIsLoading,
      isMobile,
      isOverlayVisible,
      onSignIn,
      state
    };
  }

  setSignInState(state) {
    this.setState({
      state
    });
  }

  setLoadingState(isLoading) {
    const {
      updateCustomerLoadingStatus
    } = this.props;
    updateCustomerLoadingStatus(isLoading);
  }

  redirectOrGetState(props) {
    var _this = this;

    const {
      showOverlay,
      setHeaderState,
      isPasswordForgotSend,
      isMobile
    } = props;
    const {
      location: {
        pathname,
        state: {
          isForgotPassword
        } = {}
      }
    } = _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"];
    const state = {
      state: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Auth__WEBPACK_IMPORTED_MODULE_10__["isSignedIn"])() ? _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_LOGGED_IN"] : _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_SIGN_IN"],
      // eslint-disable-next-line react/no-unused-state
      isPasswordForgotSend,
      isLoading: false
    };

    if (pathname !== '/forgot-password' && !isForgotPassword) {
      return state;
    } // if customer got here from forgot-password


    state.state = _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_FORGOT_PASSWORD"];
    setHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_SUB_ACCOUNT"],
      title: 'Forgot password',
      onBackClick: function (e) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_URL"])
        });

        _this.handleSignIn(e);
      }
    });

    if (isMobile) {
      _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_12__["default"].push({
        pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_13__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_MyAccount_MyAccount_config__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_URL"]),
        state: {
          isForgotPassword: true
        }
      });
      return state;
    }

    showOverlay(_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["CUSTOMER_ACCOUNT_OVERLAY_KEY"]);
    return state;
  }

  onVisible() {
    const {
      setHeaderState,
      isCheckout,
      isMobile
    } = this.props;

    if (isMobile && !isCheckout) {
      setHeaderState({
        name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_ACCOUNT"],
        title: __('Sign in')
      });
    }
  }

  onFormError() {
    const {
      updateCustomerLoadingStatus
    } = this.props;
    updateCustomerLoadingStatus(false);
  }

  stopLoadingAndHideOverlay() {
    const {
      hideActiveOverlay,
      updateCustomerLoadingStatus
    } = this.props;
    updateCustomerLoadingStatus(false);
    hideActiveOverlay();
  }

  handleForgotPassword(e) {
    var _this2 = this;

    const {
      setHeaderState
    } = this.props;
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      state: _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_FORGOT_PASSWORD"]
    });
    setHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_SUB_ACCOUNT"],
      title: __('Forgot password'),
      onBackClick: function () {
        return _this2.handleSignIn(e);
      }
    });
  }

  handleSignIn(e) {
    const {
      setHeaderState
    } = this.props;
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      state: _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_SIGN_IN"]
    });
    setHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_ACCOUNT"],
      title: __('Sign in')
    });
  }

  handleCreateAccount(e) {
    var _this3 = this;

    const {
      setHeaderState
    } = this.props;
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      state: _MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_15__["STATE_CREATE_ACCOUNT"]
    });
    setHeaderState({
      name: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_SUB_ACCOUNT"],
      title: __('Create account'),
      onBackClick: function () {
        return _this3.handleSignIn(e);
      }
    });
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountOverlay_component__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  isCheckout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isOverlayVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isPasswordForgotSend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isSignedIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  goToPreviousHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  hideActiveOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  redirectToDashboard: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  setHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  updateCustomerLoadingStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
}, _class.defaultProps = {
  isCheckout: false,
  isLoading: false,
  onSignIn: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__["noopFn"],
  goToPreviousHeaderState: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_11__["noopFn"]
}, _class), "Component/MyAccountOverlay/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountOverlayContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountOverlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountOverlay.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountOverlay/MyAccountOverlay.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountOverlay_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.component.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.component.js ***!
  \******************************************************************************************************/
/*! exports provided: MyAccountSignIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountSignIn", function() { return MyAccountSignIn; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/Field */ "./node_modules/@scandipwa/scandipwa/src/component/Field/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/Field/Field.config */ "./node_modules/@scandipwa/scandipwa/src/component/Field/Field.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/Form */ "./node_modules/@scandipwa/scandipwa/src/component/Form/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/Loader */ "./node_modules/@scandipwa/scandipwa/src/component/Loader/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Account.type */ "./node_modules/@scandipwa/scandipwa/src/type/Account.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Validator/Config */ "./node_modules/@scandipwa/scandipwa/src/util/Validator/Config.js");
/* harmony import */ var _MyAccountSignIn_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyAccountSignIn.style.scss */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.style.scss");
/* harmony import */ var _MyAccountSignIn_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MyAccountSignIn_style_scss__WEBPACK_IMPORTED_MODULE_8__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.component.js";

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









/** #namespace Component/MyAccountSignIn/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountSignIn = Mosaic.middleware((_class = class MyAccountSignIn_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderSignInForm() {
    const {
      onSignInSuccess,
      onFormError,
      handleForgotPassword,
      emailValue,
      isCheckout,
      handleEmailInput,
      isLoading
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "sign-in",
      onSubmit: onSignInSuccess,
      onError: onFormError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __('Email'),
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].email,
      attr: {
        id: 'email',
        name: 'email',
        placeholder: __('Your email address'),
        defaultValue: emailValue,
        autocomplete: isCheckout ? 'off' : 'email'
      },
      validateOn: ['onChange'],
      validationRule: {
        isRequired: true,
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_INPUT_TYPE"].email
      },
      events: {
        onChange: handleEmailInput
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __('Password'),
      type: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Field_Field_config__WEBPACK_IMPORTED_MODULE_3__["default"].password,
      attr: {
        id: 'password',
        name: 'password',
        placeholder: __('Enter your password'),
        autocomplete: 'current-password'
      },
      validateOn: isCheckout ? ['onSubmit'] : ['onChange'],
      validationRule: {
        isRequired: true,
        inputType: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Validator_Config__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_INPUT_TYPE"].password
      },
      addRequiredTag: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "button", {
      type: "button",
      block: "Button",
      mods: {
        likeLink: true
      },
      mix: {
        block: 'MyAccountOverlay',
        elem: 'ForgotPassword'
      },
      onClick: handleForgotPassword,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __('Forgot password?')), /*#__PURE__*/_checkBEM(React, "div", {
      block: "MyAccountOverlay",
      elem: "SignInButton",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, __('Sign in'))), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isLoading: isLoading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }));
  }

  renderAdditionalField() {
    const {
      isCheckout,
      handleCreateAccount,
      state
    } = this.props;

    if (isCheckout) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "article", {
      block: "MyAccountOverlay",
      elem: "Additional",
      mods: {
        state
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "h4", {
      id: "forgot-password-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }, __("Don't have an account?")), /*#__PURE__*/_checkBEM(React, "button", {
      block: "Button",
      mods: {
        likeLink: true
      },
      onClick: handleCreateAccount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, __('Create an account'))));
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderSignInForm(), this.renderAdditionalField());
  }

}, _class.propTypes = {
  onSignInSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onFormError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleForgotPassword: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleCreateAccount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isCheckout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  state: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Account_type__WEBPACK_IMPORTED_MODULE_6__["SignInStateType"].isRequired,
  emailValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  handleEmailInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  isLoading: false
}, _class), "Component/MyAccountSignIn/Component");
/* harmony default export */ __webpack_exports__["default"] = (MyAccountSignIn);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.container.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.container.js ***!
  \******************************************************************************************************/
/*! exports provided: MyAccountDispatcher, mapStateToProps, mapDispatchToProps, MyAccountSignInContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountSignInContainer", function() { return MyAccountSignInContainer; });
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/route/Checkout/Checkout.config */ "./node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.config.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/MiniCart.type */ "./node_modules/@scandipwa/scandipwa/src/type/MiniCart.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/Common */ "./node_modules/@scandipwa/scandipwa/src/util/Common/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Form/Transform */ "./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/util/History */ "./node_modules/@scandipwa/scandipwa/src/util/History/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/util/Request */ "./node_modules/@scandipwa/scandipwa/src/util/Request/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/util/Url */ "./node_modules/@scandipwa/scandipwa/src/util/Url/index.js");
/* harmony import */ var _MyAccountSignIn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MyAccountSignIn.component */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.component.js");


var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.container.js";

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
/** #namespace Component/MyAccountSignIn/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isEmailAvailable: state.CheckoutReducer.isEmailAvailable,
    isLocked: state.MyAccountReducer.isLocked,
    totals: state.CartReducer.cartTotals
  };
}, "Component/MyAccountSignIn/Container/mapStateToProps");
/** #namespace Component/MyAccountSignIn/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    signIn: function (options) {
      return MyAccountDispatcher.then(function (_ref) {
        let {
          default: dispatcher
        } = _ref;
        return dispatcher.signIn(options, dispatch);
      });
    },
    showNotification: function (type, message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])(type, message));
    }
  };
}, "Component/MyAccountSignIn/Container/mapDispatchToProps");
/** #namespace Component/MyAccountSignIn/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const MyAccountSignInContainer = Mosaic.middleware((_class = class MyAccountSignInContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
  constructor() {
    super(...arguments);
    this.state = {
      isSignIn: false
    };
    this.containerFunctions = {
      onSignInSuccess: this.onSignInSuccess.bind(this)
    };
  }

  componentDidUpdate(prevProps) {
    const {
      isCheckout,
      isEmailAvailable,
      setSignInState
    } = this.props;
    const {
      isEmailAvailable: prevIsEmailAvailable
    } = prevProps;

    if (isCheckout && isEmailAvailable && !prevIsEmailAvailable) {
      setSignInState('');
    }
  }

  containerProps() {
    const {
      state,
      onFormError,
      handleForgotPassword,
      handleCreateAccount,
      isCheckout,
      setLoadingState,
      emailValue,
      handleEmailInput,
      isLoading
    } = this.props;
    return {
      state,
      onFormError,
      handleForgotPassword,
      handleCreateAccount,
      isCheckout,
      setLoadingState,
      emailValue,
      handleEmailInput,
      isLoading
    };
  }

  onSignInSuccess(form, fields) {
    var _this = this;

    return Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        signIn,
        showNotification,
        onSignIn,
        setLoadingState,
        totals: {
          is_virtual
        },
        isCheckout
      } = _this.props;
      const {
        isSignIn
      } = _this.state;
      setLoadingState(true);
      const fieldPairs = Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Form_Transform__WEBPACK_IMPORTED_MODULE_8__["default"])(fields);

      if (!isSignIn) {
        _this.setState({
          isSignIn: true
        });

        try {
          yield signIn(fieldPairs);
          onSignIn();
        } catch (error) {
          showNotification('error', Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Request__WEBPACK_IMPORTED_MODULE_10__["getErrorMessage"])(error));

          _this.setState({
            isSignIn: false
          });
        } finally {
          setLoadingState(false);
        }
      }

      setLoadingState(false);

      if (is_virtual && isCheckout) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_9__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__["BILLING_URL"])
        });
      } else if (!is_virtual && isCheckout) {
        _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_History__WEBPACK_IMPORTED_MODULE_9__["default"].push({
          pathname: Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Url__WEBPACK_IMPORTED_MODULE_11__["appendWithStoreCode"])(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_route_Checkout_Checkout_config__WEBPACK_IMPORTED_MODULE_4__["SHIPPING_URL"])
        });
      }
    })();
  }

  render() {
    return /*#__PURE__*/_checkBEM(React, _MyAccountSignIn_component__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, this.containerFunctions, this.containerProps(), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onFormError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleForgotPassword: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleCreateAccount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isCheckout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  signIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setLoadingState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  emailValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isEmailAvailable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setSignInState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleEmailInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isLocked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  updateCustomerLockedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  totals: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_MiniCart_type__WEBPACK_IMPORTED_MODULE_6__["TotalsType"].isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}, _class.defaultProps = {
  emailValue: '',
  isEmailAvailable: true,
  setSignInState: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_7__["noopFn"],
  handleEmailInput: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Common__WEBPACK_IMPORTED_MODULE_7__["noopFn"],
  isLoading: false
}, _class), "Component/MyAccountSignIn/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountSignInContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccountSignIn_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccountSignIn.container */ "./node_modules/@scandipwa/scandipwa/src/component/MyAccountSignIn/MyAccountSignIn.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MyAccountSignIn_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/util/Form/Transform.js ***!
  \**********************************************************************/
/*! exports provided: transformToNameValuePair, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToNameValuePair", function() { return transformToNameValuePair; });
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
 * Returns name: value pair object for form output.
 * @param fields (Array|Object)
 * @returns {{}}
 * #namespace Util/Form/Transform/transformToNameValuePair
 */
const transformToNameValuePair = Mosaic.middleware(function (fields) {
  const filteredFields = {};
  const arrayFormat = !Array.isArray(fields) ? Object.values(fields) : fields;
  arrayFormat.forEach(function (_ref) {
    let {
      value,
      name
    } = _ref;
    filteredFields[name] = value;
  });
  return filteredFields;
}, "Util/Form/Transform/transformToNameValuePair");
/* harmony default export */ __webpack_exports__["default"] = (transformToNameValuePair);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"]))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

}]);
//# sourceMappingURL=overlay.chunk.js.map