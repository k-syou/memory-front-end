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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"(app-pages-browser)/./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Import Swiper styles\n\n\n\n\nconst SlideCarousel = (props)=>{\n    _s();\n    swiper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use([\n        swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination\n    ]);\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        // onSwiper={(swiper) => {\n        //   swiperRef.current = swiper;\n        // }}\n        loop: false,\n        centeredSlides: true,\n        spaceBetween: props.spaceBetween,\n        slidesPerView: props.slidesPerView,\n        modules: [\n            swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination\n        ],\n        pagination: props.pagination,\n        autoplay: true,\n        children: [\n            props.data.map((value, idx)=>{\n                let src = __webpack_require__(\"(app-pages-browser)/./public/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(value));\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                    className: \"h-full w-auto overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        src: src,\n                        alt: \"\",\n                        className: \"img scale-150\",\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                }, \"sslide-\".concat(idx), false, {\n                    fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                className: \"h-full w-auto overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center align-middle\",\n                    children: \"ddd\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ksyou\\\\memory-front-end\\\\components\\\\atoms\\\\SlideCarousel.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SlideCarousel, \"7rRnQCzUMwK497nz2pZRyPKpHOg=\");\n_c = SlideCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideCarousel);\nvar _c;\n$RefreshReg$(_c, \"SlideCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXRvbXMvU2xpZGVDYXJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDc0M7QUFDYTtBQUNJO0FBQ3ZCO0FBQ2hDLHVCQUF1QjtBQUNIO0FBQ1c7QUFDQTtBQUNBO0FBUy9CLE1BQU1PLGdCQUFnQixDQUFDQzs7SUFDckJILDhDQUFVQSxDQUFDSSxHQUFHLENBQUM7UUFBQ0wsc0RBQVVBO0tBQUM7SUFDM0IsTUFBTU0sWUFBWVQsNkNBQU1BO0lBRXhCLHFCQUNFLDhEQUFDQyxnREFBTUE7UUFDTCwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLEtBQUs7UUFDTFMsTUFBTTtRQUNOQyxnQkFBZ0I7UUFDaEJDLGNBQWNMLE1BQU1LLFlBQVk7UUFDaENDLGVBQWVOLE1BQU1NLGFBQWE7UUFDbENDLFNBQVM7WUFBQ1gsc0RBQVVBO1NBQUM7UUFDckJZLFlBQVlSLE1BQU1RLFVBQVU7UUFDNUJDLFVBQVU7O1lBRVRULE1BQU1VLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DO2dCQUN0QixJQUFJQyxNQUFNQyxxRkFBUSxLQUF5QixPQUFOSCxNQUFBQSxDQUFBQTtnQkFDckMscUJBQ0UsOERBQUNqQixxREFBV0E7b0JBQXVCcUIsV0FBVTs4QkFDM0MsNEVBQUNsQixtREFBS0E7d0JBQUNnQixLQUFLQTt3QkFBS0csS0FBSTt3QkFBR0QsV0FBVTt3QkFBZ0JFLFFBQVE7Ozs7OzttQkFEMUMsVUFBYyxPQUFKTDs7Ozs7WUFJaEM7MEJBQ0EsOERBQUNsQixxREFBV0E7Z0JBQUNxQixXQUFVOzBCQUNyQiw0RUFBQ0c7b0JBQUlILFdBQVU7OEJBQW1DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxRDtHQTlCTWpCO0tBQUFBO0FBZ0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvU2xpZGVDYXJvdXNlbC50c3g/M2I5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXIsIFBhZ2luYXRpb24gfSBmcm9tIFwic3dpcGVyL21vZHVsZXNcIjtcclxuaW1wb3J0IFN3aXBlckNvcmUgZnJvbSBcInN3aXBlclwiO1xyXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHNwYWNlQmV0d2VlbjogbnVtYmVyO1xyXG4gIHNsaWRlc1BlclZpZXc6IGFueTtcclxuICBwYWdpbmF0aW9uOiBib29sZWFuO1xyXG4gIGRhdGE6IEFycmF5PGFueT47XHJcbn07XHJcblxyXG5jb25zdCBTbGlkZUNhcm91c2VsID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIFN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uXSk7XHJcbiAgY29uc3Qgc3dpcGVyUmVmID0gdXNlUmVmPFN3aXBlckNvcmU+KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpcGVyXHJcbiAgICAgIC8vIG9uU3dpcGVyPXsoc3dpcGVyKSA9PiB7XHJcbiAgICAgIC8vICAgc3dpcGVyUmVmLmN1cnJlbnQgPSBzd2lwZXI7XHJcbiAgICAgIC8vIH19XHJcbiAgICAgIGxvb3A9e2ZhbHNlfVxyXG4gICAgICBjZW50ZXJlZFNsaWRlcz17dHJ1ZX1cclxuICAgICAgc3BhY2VCZXR3ZWVuPXtwcm9wcy5zcGFjZUJldHdlZW59XHJcbiAgICAgIHNsaWRlc1BlclZpZXc9e3Byb3BzLnNsaWRlc1BlclZpZXd9XHJcbiAgICAgIG1vZHVsZXM9e1tQYWdpbmF0aW9uXX1cclxuICAgICAgcGFnaW5hdGlvbj17cHJvcHMucGFnaW5hdGlvbn1cclxuICAgICAgYXV0b3BsYXk9e3RydWV9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5kYXRhLm1hcCgodmFsdWUsIGlkeCkgPT4ge1xyXG4gICAgICAgIGxldCBzcmMgPSByZXF1aXJlKGBAL3B1YmxpYy9pbWFnZXMvJHt2YWx1ZX1gKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17YHNzbGlkZS0ke2lkeH1gfSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1hdXRvIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZyBzY2FsZS0xNTBcIiBoZWlnaHQ9ezUwMH0+PC9JbWFnZT5cclxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1hdXRvIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGVcIj5kZGQ8L2Rpdj5cclxuICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgIDwvU3dpcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZUNhcm91c2VsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlBhZ2luYXRpb24iLCJTd2lwZXJDb3JlIiwiSW1hZ2UiLCJTbGlkZUNhcm91c2VsIiwicHJvcHMiLCJ1c2UiLCJzd2lwZXJSZWYiLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwibW9kdWxlcyIsInBhZ2luYXRpb24iLCJhdXRvcGxheSIsImRhdGEiLCJtYXAiLCJ2YWx1ZSIsImlkeCIsInNyYyIsInJlcXVpcmUiLCJjbGFzc05hbWUiLCJhbHQiLCJoZWlnaHQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/atoms/SlideCarousel.tsx\n"));

/***/ })

});