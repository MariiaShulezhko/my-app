(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([["product-reviews"],{

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: ProductReviewItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewItem", function() { return ProductReviewItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/ProductReviewRating */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewRating/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Rating_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Rating.type */ "./node_modules/@scandipwa/scandipwa/src/type/Rating.type.js");
/* harmony import */ var _ProductReviewItem_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReviewItem.style */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.style.scss");
/* harmony import */ var _ProductReviewItem_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductReviewItem_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js";

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
 * @class ProductReviewItem
 * #namespace Component/ProductReviewItem/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductReviewItem = Mosaic.middleware((_class = class ProductReviewItem_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  getFormattedDate(created_at) {
    // Safari bug
    const fixedDate = created_at.replace(/-/g, '/');
    const date = new Date(fixedDate);
    return date ? date.toDateString() : created_at;
  }

  renderReviewListItemRating(ratingVoteItem, i) {
    const {
      rating_code,
      percent
    } = ratingVoteItem;
    return /*#__PURE__*/_checkBEM(React, "div", {
      key: i,
      block: "ProductReviewItem",
      elem: "RatingSummaryItem",
      itemType: "http://schema.org/Rating",
      itemScope: true,
      itemProp: "reviewRating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      itemProp: "name",
      block: "ProductReviewItem",
      elem: "RatingItem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, rating_code), /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "ratingValue",
      content: percent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "worstRating",
      content: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "bestRating",
      content: 100,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_1__["default"], {
      summary: percent,
      code: rating_code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }));
  }

  renderAuthor(reviewItem) {
    const {
      nickname,
      created_at
    } = reviewItem;
    return /*#__PURE__*/_checkBEM(React, "p", {
      block: "ProductReviewItem",
      elem: "ReviewAuthor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __('Written by '), /*#__PURE__*/_checkBEM(React, "strong", {
      itemProp: "author",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, nickname), /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "datePublished",
      content: this.getFormattedDate(created_at),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }), __(', written at %s', this.getFormattedDate(created_at)));
  }

  render() {
    const {
      reviewItem,
      reviewItem: {
        title,
        detail,
        rating_votes
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "li", {
      block: "ProductReviewItem",
      itemType: "http://schema.org/Review",
      itemProp: "review",
      itemScope: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, "h4", {
      block: "ProductReviewItem",
      elem: "ReviewTitle",
      itemProp: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, title), /*#__PURE__*/_checkBEM(React, "div", {
      block: "ProductReviewItem",
      elem: "RatingSummary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, rating_votes.map(this.renderReviewListItemRating)), /*#__PURE__*/_checkBEM(React, "div", {
      block: "ProductReviewItem",
      elem: "Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, /*#__PURE__*/_checkBEM(React, "p", {
      block: "ProductReviewItem",
      elem: "ReviewDetails",
      itemProp: "reviewBody",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, detail), this.renderAuthor(reviewItem)));
  }

}, _class.propTypes = {
  reviewItem: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Rating_type__WEBPACK_IMPORTED_MODULE_2__["ReviewItemType"].isRequired
}, _class), "Component/ProductReviewItem/Component");
/* harmony default export */ __webpack_exports__["default"] = (ProductReviewItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReviewItem_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviewItem.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductReviewItem_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: ProductReviewList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewList", function() { return ProductReviewList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/ProductReviewItem */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _ProductReviewList_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReviewList.style */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.style.scss");
/* harmony import */ var _ProductReviewList_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductReviewList_style__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js";

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
 * @class ProductReviewList
 * #namespace Component/ProductReviewList/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductReviewList = Mosaic.middleware((_class = class ProductReviewList_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]) {
  renderReviews() {
    var _this = this;

    const {
      product: {
        reviews
      }
    } = this.props;
    return reviews.map(function (reviewItem, i) {
      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        reviewItem: reviewItem // eslint-disable-next-line react/no-array-index-key
        ,
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      });
    });
  }

  render() {
    const {
      product
    } = this.props;
    const hasReviews = product.reviews && Object.keys(product.reviews).length > 0;

    if (!hasReviews) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, "ul", {
      block: "ProductReviewList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, this.renderReviews());
  }

}, _class.propTypes = {
  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__["ProductType"].isRequired
}, _class), "Component/ProductReviewList/Component");
/* harmony default export */ __webpack_exports__["default"] = (ProductReviewList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReviewList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviewList.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductReviewList_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js ***!
  \****************************************************************************************************/
/*! exports provided: ProductReviews, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviews", function() { return ProductReviews; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ContentWrapper */ "./node_modules/@scandipwa/scandipwa/src/component/ContentWrapper/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ExpandableContent */ "./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/ProductReviewList */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/ProductReviewRating */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviewRating/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Product */ "./node_modules/@scandipwa/scandipwa/src/util/Product/index.js");
/* harmony import */ var _ProductReviews_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductReviews.style */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.style.scss");
/* harmony import */ var _ProductReviews_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ProductReviews_style__WEBPACK_IMPORTED_MODULE_9__);
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js";

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










/** #namespace Component/ProductReviews/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductReviews = Mosaic.middleware((_class = class ProductReviews_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  renderButton() {
    return /*#__PURE__*/_checkBEM(React, "button", {
      block: "ProductReviews",
      elem: "Button",
      mix: {
        block: 'Button',
        mods: {
          isHollow: true
        }
      },
      onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_8__["showNewReviewPopup"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __('Write a review'));
  }

  renderNoRating() {
    const {
      device: {
        isMobile
      }
    } = this.props;

    if (isMobile) {
      return /*#__PURE__*/_checkBEM(React, "p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, __('There are no reviews yet! Click button below to submit one!'));
    }

    return /*#__PURE__*/_checkBEM(React, "p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, __('There are no reviews yet! Click button on the right to submit one!'));
  }

  renderRatingSchema(percent, reviewCount) {
    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "ratingValue",
      content: percent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "worstRating",
      content: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "bestRating",
      content: 100,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "meta", {
      itemProp: "reviewCount",
      content: reviewCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }));
  }

  renderRatingData() {
    const {
      product: {
        review_summary: {
          rating_summary,
          review_count
        } = {}
      }
    } = this.props;
    const STARS_COUNT = 5;
    const PERCENT = 100; // eslint-disable-next-line no-mixed-operators

    const percent = parseFloat(STARS_COUNT * (rating_summary || 0) / PERCENT).toFixed(2);

    if (!review_count) {
      return this.renderNoRating();
    }

    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderRatingSchema(rating_summary, review_count), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mix: {
        block: 'ProductReviews',
        elem: 'SummaryRating'
      },
      summary: rating_summary,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }), /*#__PURE__*/_checkBEM(React, "p", {
      block: "ProductReviews",
      elem: "SummaryDetails",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, percent, /*#__PURE__*/_checkBEM(React, "span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, __('%s reviews', review_count || 0))));
  }

  renderSummary() {
    const {
      product: {
        review_summary: {
          review_count
        } = {}
      }
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, "div", {
      block: "ProductReviews",
      elem: "Summary",
      itemType: review_count ? 'http://schema.org/AggregateRating' : null,
      itemProp: review_count ? 'aggregateRating' : null,
      itemScope: review_count ? true : null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, this.renderRatingData(), this.renderButton());
  }

  renderList() {
    const {
      product
    } = this.props;
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: product,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    });
  }

  render() {
    const {
      areDetailsLoaded
    } = this.props;
    const heading = areDetailsLoaded ? __('Reviews') : '';
    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Product reviews",
      mix: {
        block: 'ProductReviews'
      },
      wrapperMix: {
        block: 'ProductReviews',
        elem: 'Wrapper'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      mix: {
        block: 'ProductReviews',
        elem: 'Content'
      },
      heading: heading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, this.renderSummary(), this.renderList()));
  }

}, _class.propTypes = {
  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_7__["ProductType"].isRequired,
  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__["DeviceType"].isRequired
}, _class), "Component/ProductReviews/Component");
/* harmony default export */ __webpack_exports__["default"] = (ProductReviews);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ "./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js")["default"]))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js ***!
  \****************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, ProductReviewsContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewsContainer", function() { return ProductReviewsContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ "./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Device.type */ "./node_modules/@scandipwa/scandipwa/src/type/Device.type.js");
/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/ProductList.type */ "./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js");
/* harmony import */ var _ProductReviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductReviews.component */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js");
var _class,
    _jsxFileName = "/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js";

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







/** #namespace Component/ProductReviews/Container/mapStateToProps */

const mapStateToProps = Mosaic.middleware(function (state) {
  return {
    isEnabled: state.ConfigReducer.reviews_are_enabled,
    isGuestEnabled: state.ConfigReducer.reviews_allow_guest,
    device: state.ConfigReducer.device
  };
}, "Component/ProductReviews/Container/mapStateToProps");
/** #namespace Component/ProductReviews/Container/mapDispatchToProps */

const mapDispatchToProps = Mosaic.middleware(function (dispatch) {
  return {
    showInfoNotification: function (message) {
      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__["showNotification"])('info', message));
    }
  };
}, "Component/ProductReviews/Container/mapDispatchToProps");
/** #namespace Component/ProductReviews/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

const ProductReviewsContainer = Mosaic.middleware((_class = class ProductReviewsContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
  containerProps() {
    const {
      areDetailsLoaded,
      device,
      isEnabled,
      product
    } = this.props;
    return {
      areDetailsLoaded,
      device,
      isEnabled,
      product
    };
  }

  render() {
    const {
      isEnabled
    } = this.props;

    if (!isEnabled) {
      return null;
    }

    return /*#__PURE__*/_checkBEM(React, _ProductReviews_component__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.containerProps(), this.containerFunctions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }));
  }

}, _class.propTypes = {
  showInfoNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isGuestEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_5__["ProductType"].isRequired,
  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].isRequired
}, _class.defaultProps = {
  isEnabled: true,
  isGuestEnabled: true,
  areDetailsLoaded: false
}, _class), "Component/ProductReviews/Container");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ProductReviewsContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ "./node_modules/@tilework/mosaic/dist/mosaic.js")["default"], __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReviews_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviews.container */ "./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductReviews_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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
//# sourceMappingURL=product-reviews.chunk.js.map