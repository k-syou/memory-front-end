"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/atoms/SlideCarousel.tsx":
/*!********************************************!*\
  !*** ./components/atoms/SlideCarousel.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"(app-pages-browser)/./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Import Swiper styles\n\n\n\n\nconst SlideCarousel = (props)=>{\n    _s();\n    swiper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use([\n        swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination\n    ]);\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        // onSwiper={(swiper) => {\n        //   swiperRef.current = swiper;\n        // }}\n        loop: true,\n        centeredSlides: true,\n        spaceBetween: props.spaceBetween,\n        slidesPerView: props.slidesPerView,\n        modules: [\n            swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination\n        ],\n        pagination: props.pagination,\n        autoplay: true,\n        children: props.data.map((value, idx)=>{\n            let src = __webpack_require__(\"(app-pages-browser)/./public/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(value));\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                className: \"h-full w-auto overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    src: src,\n                    alt: \"\",\n                    className: \"img scale-150\",\n                    height: 500\n                }, void 0, false, {\n                    fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, undefined)\n            }, \"sslide-\".concat(idx), false, {\n                fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SlideCarousel, \"7rRnQCzUMwK497nz2pZRyPKpHOg=\");\n_c = SlideCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideCarousel);\nvar _c;\n$RefreshReg$(_c, \"SlideCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXRvbXMvU2xpZGVDYXJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDc0M7QUFDYTtBQUNJO0FBQ3ZCO0FBQ2hDLHVCQUF1QjtBQUNIO0FBQ1c7QUFDQTtBQUNBO0FBUy9CLE1BQU1PLGdCQUFnQixDQUFDQzs7SUFDckJILDhDQUFVQSxDQUFDSSxHQUFHLENBQUM7UUFBQ0wsc0RBQVVBO0tBQUM7SUFDM0IsTUFBTU0sWUFBWVQsNkNBQU1BO0lBRXhCLHFCQUNFLDhEQUFDQyxnREFBTUE7UUFDTCwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLEtBQUs7UUFDTFMsTUFBTTtRQUNOQyxnQkFBZ0I7UUFDaEJDLGNBQWNMLE1BQU1LLFlBQVk7UUFDaENDLGVBQWVOLE1BQU1NLGFBQWE7UUFDbENDLFNBQVM7WUFBQ1gsc0RBQVVBO1NBQUM7UUFDckJZLFlBQVlSLE1BQU1RLFVBQVU7UUFDNUJDLFVBQVU7a0JBRVRULE1BQU1VLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DO1lBQ3RCLElBQUlDLE1BQU1DLHFGQUFRLEtBQXlCLE9BQU5ILE1BQUFBLENBQUFBO1lBQ3JDLHFCQUNFLDhEQUFDakIscURBQVdBO2dCQUF1QnFCLFdBQVU7MEJBQzNDLDRFQUFDbEIsbURBQUtBO29CQUFDZ0IsS0FBS0E7b0JBQUtHLEtBQUk7b0JBQUdELFdBQVU7b0JBQWdCRSxRQUFROzs7Ozs7ZUFEMUMsVUFBYyxPQUFKTDs7Ozs7UUFJaEM7Ozs7OztBQUdOO0dBM0JNZDtLQUFBQTtBQTZCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F0b21zL1NsaWRlQ2Fyb3VzZWwudHN4PzNiOWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgU2Nyb2xsYmFyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInN3aXBlci9tb2R1bGVzXCI7XHJcbmltcG9ydCBTd2lwZXJDb3JlIGZyb20gXCJzd2lwZXJcIjtcclxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBzcGFjZUJldHdlZW46IG51bWJlcjtcclxuICBzbGlkZXNQZXJWaWV3OiBhbnk7XHJcbiAgcGFnaW5hdGlvbjogYm9vbGVhbjtcclxuICBkYXRhOiBBcnJheTxhbnk+O1xyXG59O1xyXG5cclxuY29uc3QgU2xpZGVDYXJvdXNlbCA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBTd2lwZXJDb3JlLnVzZShbUGFnaW5hdGlvbl0pO1xyXG4gIGNvbnN0IHN3aXBlclJlZiA9IHVzZVJlZjxTd2lwZXJDb3JlPigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlclxyXG4gICAgICAvLyBvblN3aXBlcj17KHN3aXBlcikgPT4ge1xyXG4gICAgICAvLyAgIHN3aXBlclJlZi5jdXJyZW50ID0gc3dpcGVyO1xyXG4gICAgICAvLyB9fVxyXG4gICAgICBsb29wPXt0cnVlfVxyXG4gICAgICBjZW50ZXJlZFNsaWRlcz17dHJ1ZX1cclxuICAgICAgc3BhY2VCZXR3ZWVuPXtwcm9wcy5zcGFjZUJldHdlZW59XHJcbiAgICAgIHNsaWRlc1BlclZpZXc9e3Byb3BzLnNsaWRlc1BlclZpZXd9XHJcbiAgICAgIG1vZHVsZXM9e1tQYWdpbmF0aW9uXX1cclxuICAgICAgcGFnaW5hdGlvbj17cHJvcHMucGFnaW5hdGlvbn1cclxuICAgICAgYXV0b3BsYXk9e3RydWV9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5kYXRhLm1hcCgodmFsdWUsIGlkeCkgPT4ge1xyXG4gICAgICAgIGxldCBzcmMgPSByZXF1aXJlKGBAL3B1YmxpYy9pbWFnZXMvJHt2YWx1ZX1gKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17YHNzbGlkZS0ke2lkeH1gfSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1hdXRvIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZyBzY2FsZS0xNTBcIiBoZWlnaHQ9ezUwMH0+PC9JbWFnZT5cclxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L1N3aXBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVDYXJvdXNlbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJQYWdpbmF0aW9uIiwiU3dpcGVyQ29yZSIsIkltYWdlIiwiU2xpZGVDYXJvdXNlbCIsInByb3BzIiwidXNlIiwic3dpcGVyUmVmIiwibG9vcCIsImNlbnRlcmVkU2xpZGVzIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsIm1vZHVsZXMiLCJwYWdpbmF0aW9uIiwiYXV0b3BsYXkiLCJkYXRhIiwibWFwIiwidmFsdWUiLCJpZHgiLCJzcmMiLCJyZXF1aXJlIiwiY2xhc3NOYW1lIiwiYWx0IiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/atoms/SlideCarousel.tsx\n"));

/***/ })

});