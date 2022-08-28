require.config({"config": {
        "jsbuild":{"Magento_Theme/static/js/product-reviews.chunk.js":"(this[\"webpackJsonpscandipwa\"] = this[\"webpackJsonpscandipwa\"] || []).push([[\"product-reviews\"],{\n\n/***/ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js\":\n/*!**********************************************************************************************************!*\\\n  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js ***!\n  \\**********************************************************************************************************/\n/*! exports provided: ProductReviewItem, default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductReviewItem\", function() { return ProductReviewItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/ProductReviewRating */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewRating/index.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Rating_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/Rating.type */ \"./node_modules/@scandipwa/scandipwa/src/type/Rating.type.js\");\n/* harmony import */ var _ProductReviewItem_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReviewItem.style */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.style.scss\");\n/* harmony import */ var _ProductReviewItem_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductReviewItem_style__WEBPACK_IMPORTED_MODULE_3__);\nvar _class,\n    _jsxFileName = \"/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js\";\n\n/**\n * ScandiPWA - Progressive Web App for Magento\n *\n * Copyright \u00a9 Scandiweb, Inc. All rights reserved.\n * See LICENSE for license details.\n *\n * @license OSL-3.0 (Open Software License (\"OSL\") v. 3.0)\n * @package scandipwa/scandipwa\n * @link https://github.com/scandipwa/scandipwa\n */\n\n\n\n\n/**\n * @class ProductReviewItem\n * #namespace Component/ProductReviewItem/Component\n */\n\nvar _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ \"./node_modules/babel-plugin-transform-rebem-jsx/build/index.js\").checkBEMProps;\n\nconst ProductReviewItem = Mosaic.middleware((_class = class ProductReviewItem_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]) {\n  getFormattedDate(created_at) {\n    // Safari bug\n    const fixedDate = created_at.replace(/-/g, '/');\n    const date = new Date(fixedDate);\n    return date ? date.toDateString() : created_at;\n  }\n\n  renderReviewListItemRating(ratingVoteItem, i) {\n    const {\n      rating_code,\n      percent\n    } = ratingVoteItem;\n    return /*#__PURE__*/_checkBEM(React, \"div\", {\n      key: i,\n      block: \"ProductReviewItem\",\n      elem: \"RatingSummaryItem\",\n      itemType: \"http://schema.org/Rating\",\n      itemScope: true,\n      itemProp: \"reviewRating\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/_checkBEM(React, \"p\", {\n      itemProp: \"name\",\n      block: \"ProductReviewItem\",\n      elem: \"RatingItem\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }, rating_code), /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"ratingValue\",\n      content: percent,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"worstRating\",\n      content: 0,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"bestRating\",\n      content: 100,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      summary: percent,\n      code: rating_code,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }));\n  }\n\n  renderAuthor(reviewItem) {\n    const {\n      nickname,\n      created_at\n    } = reviewItem;\n    return /*#__PURE__*/_checkBEM(React, \"p\", {\n      block: \"ProductReviewItem\",\n      elem: \"ReviewAuthor\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }\n    }, __('Written by '), /*#__PURE__*/_checkBEM(React, \"strong\", {\n      itemProp: \"author\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }\n    }, nickname), /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"datePublished\",\n      content: this.getFormattedDate(created_at),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }\n    }), __(', written at %s', this.getFormattedDate(created_at)));\n  }\n\n  render() {\n    const {\n      reviewItem,\n      reviewItem: {\n        title,\n        detail,\n        rating_votes\n      }\n    } = this.props;\n    return /*#__PURE__*/_checkBEM(React, \"li\", {\n      block: \"ProductReviewItem\",\n      itemType: \"http://schema.org/Review\",\n      itemProp: \"review\",\n      itemScope: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/_checkBEM(React, \"h4\", {\n      block: \"ProductReviewItem\",\n      elem: \"ReviewTitle\",\n      itemProp: \"name\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }\n    }, title), /*#__PURE__*/_checkBEM(React, \"div\", {\n      block: \"ProductReviewItem\",\n      elem: \"RatingSummary\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }, rating_votes.map(this.renderReviewListItemRating)), /*#__PURE__*/_checkBEM(React, \"div\", {\n      block: \"ProductReviewItem\",\n      elem: \"Content\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }\n    }, /*#__PURE__*/_checkBEM(React, \"p\", {\n      block: \"ProductReviewItem\",\n      elem: \"ReviewDetails\",\n      itemProp: \"reviewBody\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 21\n      }\n    }, detail), this.renderAuthor(reviewItem)));\n  }\n\n}, _class.propTypes = {\n  reviewItem: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Rating_type__WEBPACK_IMPORTED_MODULE_2__[\"ReviewItemType\"].isRequired\n}, _class), \"Component/ProductReviewItem/Component\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductReviewItem);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ \"./node_modules/@tilework/mosaic/dist/mosaic.js\")[\"default\"], __webpack_require__(/*! react */ \"./node_modules/react/index.js\"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ \"./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js\")[\"default\"]))\n\n/***/ }),\n\n/***/ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/index.js\":\n/*!************************************************************************************!*\\\n  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/index.js ***!\n  \\************************************************************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProductReviewItem_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviewItem.component */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/ProductReviewItem.component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ProductReviewItem_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/**\n * ScandiPWA - Progressive Web App for Magento\n *\n * Copyright \u00a9 Scandiweb, Inc. All rights reserved.\n * See LICENSE for license details.\n *\n * @license OSL-3.0 (Open Software License (\"OSL\") v. 3.0)\n * @package scandipwa/scandipwa\n * @link https://github.com/scandipwa/scandipwa\n */\n\n\n/***/ }),\n\n/***/ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js\":\n/*!**********************************************************************************************************!*\\\n  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js ***!\n  \\**********************************************************************************************************/\n/*! exports provided: ProductReviewList, default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductReviewList\", function() { return ProductReviewList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/component/ProductReviewItem */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewItem/index.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/type/ProductList.type */ \"./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js\");\n/* harmony import */ var _ProductReviewList_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReviewList.style */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.style.scss\");\n/* harmony import */ var _ProductReviewList_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductReviewList_style__WEBPACK_IMPORTED_MODULE_3__);\nvar _class,\n    _jsxFileName = \"/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js\";\n\n/**\n * ScandiPWA - Progressive Web App for Magento\n *\n * Copyright \u00a9 Scandiweb, Inc. All rights reserved.\n * See LICENSE for license details.\n *\n * @license OSL-3.0 (Open Software License (\"OSL\") v. 3.0)\n * @package scandipwa/scandipwa\n * @link https://github.com/scandipwa/scandipwa\n */\n\n\n\n\n/**\n * @class ProductReviewList\n * #namespace Component/ProductReviewList/Component\n */\n\nvar _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ \"./node_modules/babel-plugin-transform-rebem-jsx/build/index.js\").checkBEMProps;\n\nconst ProductReviewList = Mosaic.middleware((_class = class ProductReviewList_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]) {\n  renderReviews() {\n    var _this = this;\n\n    const {\n      product: {\n        reviews\n      }\n    } = this.props;\n    return reviews.map(function (reviewItem, i) {\n      return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        reviewItem: reviewItem // eslint-disable-next-line react/no-array-index-key\n        ,\n        key: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }\n      });\n    });\n  }\n\n  render() {\n    const {\n      product\n    } = this.props;\n    const hasReviews = product.reviews && Object.keys(product.reviews).length > 0;\n\n    if (!hasReviews) {\n      return null;\n    }\n\n    return /*#__PURE__*/_checkBEM(React, \"ul\", {\n      block: \"ProductReviewList\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    }, this.renderReviews());\n  }\n\n}, _class.propTypes = {\n  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_2__[\"ProductType\"].isRequired\n}, _class), \"Component/ProductReviewList/Component\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductReviewList);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ \"./node_modules/@tilework/mosaic/dist/mosaic.js\")[\"default\"], __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n/***/ }),\n\n/***/ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/index.js\":\n/*!************************************************************************************!*\\\n  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/index.js ***!\n  \\************************************************************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProductReviewList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviewList.component */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/ProductReviewList.component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ProductReviewList_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/**\n * ScandiPWA - Progressive Web App for Magento\n *\n * Copyright \u00a9 Scandiweb, Inc. All rights reserved.\n * See LICENSE for license details.\n *\n * @license OSL-3.0 (Open Software License (\"OSL\") v. 3.0)\n * @package scandipwa/scandipwa\n * @link https://github.com/scandipwa/scandipwa\n */\n\n\n/***/ }),\n\n/***/ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js\":\n/*!****************************************************************************************************!*\\\n  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js ***!\n  \\****************************************************************************************************/\n/*! exports provided: ProductReviews, default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Mosaic, React, __) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductReviews\", function() { return ProductReviews; });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/ContentWrapper */ \"./node_modules/@scandipwa/scandipwa/src/component/ContentWrapper/index.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/component/ExpandableContent */ \"./node_modules/@scandipwa/scandipwa/src/component/ExpandableContent/index.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/component/ProductReviewList */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewList/index.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/component/ProductReviewRating */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviewRating/index.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/type/Device.type */ \"./node_modules/@scandipwa/scandipwa/src/type/Device.type.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/type/ProductList.type */ \"./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/util/Product */ \"./node_modules/@scandipwa/scandipwa/src/util/Product/index.js\");\n/* harmony import */ var _ProductReviews_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductReviews.style */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.style.scss\");\n/* harmony import */ var _ProductReviews_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ProductReviews_style__WEBPACK_IMPORTED_MODULE_9__);\nvar _class,\n    _jsxFileName = \"/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js\";\n\n/**\n * ScandiPWA - Progressive Web App for Magento\n *\n * Copyright \u00a9 Scandiweb, Inc. All rights reserved.\n * See LICENSE for license details.\n *\n * @license OSL-3.0 (Open Software License (\"OSL\") v. 3.0)\n * @package scandipwa/scandipwa\n * @link https://github.com/scandipwa/scandipwa\n */\n\n\n\n\n\n\n\n\n\n\n/** #namespace Component/ProductReviews/Component */\n\nvar _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ \"./node_modules/babel-plugin-transform-rebem-jsx/build/index.js\").checkBEMProps;\n\nconst ProductReviews = Mosaic.middleware((_class = class ProductReviews_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]) {\n  renderButton() {\n    return /*#__PURE__*/_checkBEM(React, \"button\", {\n      block: \"ProductReviews\",\n      elem: \"Button\",\n      mix: {\n        block: 'Button',\n        mods: {\n          isHollow: true\n        }\n      },\n      onClick: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_util_Product__WEBPACK_IMPORTED_MODULE_8__[\"showNewReviewPopup\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    }, __('Write a review'));\n  }\n\n  renderNoRating() {\n    const {\n      device: {\n        isMobile\n      }\n    } = this.props;\n\n    if (isMobile) {\n      return /*#__PURE__*/_checkBEM(React, \"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }\n      }, __('There are no reviews yet! Click button below to submit one!'));\n    }\n\n    return /*#__PURE__*/_checkBEM(React, \"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }\n    }, __('There are no reviews yet! Click button on the right to submit one!'));\n  }\n\n  renderRatingSchema(percent, reviewCount) {\n    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"ratingValue\",\n      content: percent,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"worstRating\",\n      content: 0,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"bestRating\",\n      content: 100,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/_checkBEM(React, \"meta\", {\n      itemProp: \"reviewCount\",\n      content: reviewCount,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }\n    }));\n  }\n\n  renderRatingData() {\n    const {\n      product: {\n        review_summary: {\n          rating_summary,\n          review_count\n        } = {}\n      }\n    } = this.props;\n    const STARS_COUNT = 5;\n    const PERCENT = 100; // eslint-disable-next-line no-mixed-operators\n\n    const percent = parseFloat(STARS_COUNT * (rating_summary || 0) / PERCENT).toFixed(2);\n\n    if (!review_count) {\n      return this.renderNoRating();\n    }\n\n    return /*#__PURE__*/_checkBEM(React, React.Fragment, null, this.renderRatingSchema(rating_summary, review_count), /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewRating__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      mix: {\n        block: 'ProductReviews',\n        elem: 'SummaryRating'\n      },\n      summary: rating_summary,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }\n    }), /*#__PURE__*/_checkBEM(React, \"p\", {\n      block: \"ProductReviews\",\n      elem: \"SummaryDetails\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 17\n      }\n    }, percent, /*#__PURE__*/_checkBEM(React, \"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 21\n      }\n    }, __('%s reviews', review_count || 0))));\n  }\n\n  renderSummary() {\n    const {\n      product: {\n        review_summary: {\n          review_count\n        } = {}\n      }\n    } = this.props;\n    return /*#__PURE__*/_checkBEM(React, \"div\", {\n      block: \"ProductReviews\",\n      elem: \"Summary\",\n      itemType: review_count ? 'http://schema.org/AggregateRating' : null,\n      itemProp: review_count ? 'aggregateRating' : null,\n      itemScope: review_count ? true : null,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 13\n      }\n    }, this.renderRatingData(), this.renderButton());\n  }\n\n  renderList() {\n    const {\n      product\n    } = this.props;\n    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ProductReviewList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      product: product,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 13\n      }\n    });\n  }\n\n  render() {\n    const {\n      areDetailsLoaded\n    } = this.props;\n    const heading = areDetailsLoaded ? __('Reviews') : '';\n    return /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      label: \"Product reviews\",\n      mix: {\n        block: 'ProductReviews'\n      },\n      wrapperMix: {\n        block: 'ProductReviews',\n        elem: 'Wrapper'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/_checkBEM(React, _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      mix: {\n        block: 'ProductReviews',\n        elem: 'Content'\n      },\n      heading: heading,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 17\n      }\n    }, this.renderSummary(), this.renderList()));\n  }\n\n}, _class.propTypes = {\n  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_7__[\"ProductType\"].isRequired,\n  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,\n  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_6__[\"DeviceType\"].isRequired\n}, _class), \"Component/ProductReviews/Component\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductReviews);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ \"./node_modules/@tilework/mosaic/dist/mosaic.js\")[\"default\"], __webpack_require__(/*! react */ \"./node_modules/react/index.js\"), __webpack_require__(/*! ./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js */ \"./node_modules/@scandipwa/webpack-i18n-runtime/src/util/__.js\")[\"default\"]))\n\n/***/ }),\n\n/***/ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js\":\n/*!****************************************************************************************************!*\\\n  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js ***!\n  \\****************************************************************************************************/\n/*! exports provided: mapStateToProps, mapDispatchToProps, ProductReviewsContainer, default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Mosaic, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapStateToProps\", function() { return mapStateToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductReviewsContainer\", function() { return ProductReviewsContainer; });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/store/Notification/Notification.action */ \"./node_modules/@scandipwa/scandipwa/src/store/Notification/Notification.action.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/type/Device.type */ \"./node_modules/@scandipwa/scandipwa/src/type/Device.type.js\");\n/* harmony import */ var _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/type/ProductList.type */ \"./node_modules/@scandipwa/scandipwa/src/type/ProductList.type.js\");\n/* harmony import */ var _ProductReviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductReviews.component */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.component.js\");\nvar _class,\n    _jsxFileName = \"/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js\";\n\n/**\n * ScandiPWA - Progressive Web App for Magento\n *\n * Copyright \u00a9 Scandiweb, Inc. All rights reserved.\n * See LICENSE for license details.\n *\n * @license OSL-3.0 (Open Software License (\"OSL\") v. 3.0)\n * @package scandipwa/scandipwa\n * @link https://github.com/scandipwa/scandipwa\n */\n\n\n\n\n\n\n\n/** #namespace Component/ProductReviews/Container/mapStateToProps */\n\nconst mapStateToProps = Mosaic.middleware(function (state) {\n  return {\n    isEnabled: state.ConfigReducer.reviews_are_enabled,\n    isGuestEnabled: state.ConfigReducer.reviews_allow_guest,\n    device: state.ConfigReducer.device\n  };\n}, \"Component/ProductReviews/Container/mapStateToProps\");\n/** #namespace Component/ProductReviews/Container/mapDispatchToProps */\n\nconst mapDispatchToProps = Mosaic.middleware(function (dispatch) {\n  return {\n    showInfoNotification: function (message) {\n      return dispatch(Object(_Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_3__[\"showNotification\"])('info', message));\n    }\n  };\n}, \"Component/ProductReviews/Container/mapDispatchToProps\");\n/** #namespace Component/ProductReviews/Container */\n\nvar _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ \"./node_modules/babel-plugin-transform-rebem-jsx/build/index.js\").checkBEMProps;\n\nconst ProductReviewsContainer = Mosaic.middleware((_class = class ProductReviewsContainer_ extends Mosaic.Extensible(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]) {\n  containerProps() {\n    const {\n      areDetailsLoaded,\n      device,\n      isEnabled,\n      product\n    } = this.props;\n    return {\n      areDetailsLoaded,\n      device,\n      isEnabled,\n      product\n    };\n  }\n\n  render() {\n    const {\n      isEnabled\n    } = this.props;\n\n    if (!isEnabled) {\n      return null;\n    }\n\n    return /*#__PURE__*/_checkBEM(React, _ProductReviews_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object.assign({}, this.containerProps(), this.containerFunctions, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }\n    }));\n  }\n\n}, _class.propTypes = {\n  showInfoNotification: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,\n  isGuestEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  isEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  product: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_ProductList_type__WEBPACK_IMPORTED_MODULE_5__[\"ProductType\"].isRequired,\n  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  device: _Users_mariasulezko_PhpStormProject_test_my_app_scandipwa_src_type_Device_type__WEBPACK_IMPORTED_MODULE_4__[\"DeviceType\"].isRequired\n}, _class.defaultProps = {\n  isEnabled: true,\n  isGuestEnabled: true,\n  areDetailsLoaded: false\n}, _class), \"Component/ProductReviews/Container\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(ProductReviewsContainer));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@tilework/mosaic/dist/mosaic.js */ \"./node_modules/@tilework/mosaic/dist/mosaic.js\")[\"default\"], __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n/***/ }),\n\n/***/ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/index.js\":\n/*!*********************************************************************************!*\\\n  !*** ./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/index.js ***!\n  \\*********************************************************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProductReviews_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviews.container */ \"./node_modules/@scandipwa/scandipwa/src/component/ProductReviews/ProductReviews.container.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ProductReviews_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/**\n * ScandiPWA - Progressive Web App for Magento\n *\n * Copyright \u00a9 Scandiweb, Inc. All rights reserved.\n * See LICENSE for license details.\n *\n * @license OSL-3.0 (Open Software License (\"OSL\") v. 3.0)\n * @package scandipwa/scandipwa\n * @link https://github.com/scandipwa/scandipwa\n */\n\n\n/***/ })\n\n}]);\n//# sourceMappingURL=product-reviews.chunk.js.map"}
}});