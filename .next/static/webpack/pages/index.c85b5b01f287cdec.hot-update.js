"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./sections/Hero.jsx":
/*!***************************!*\
  !*** ./sections/Hero.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\"use client\";\n\n\n\n\nconst Hero = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yPaddings, \" sm:pl-16 pl-6\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex flex-col\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full md:-mt-[20px] -mt-[12px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[30px]\",\n                        style: {\n                            background: \"linear-gradient(90deg, rgba(50,60,80,0.8673844537815126) 0%, rgba(51,109,132,1) 100%)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full sm:h-[500px] h-[350px] rounded-tl-[140px] z-10 relative\",\n                        style: {\n                            background: \"rgb(19,29,41)\",\n                            background: \"linear-gradient(90deg, rgba(19,29,41,0.8673844537815126) 0%, rgba(21,79,102,1) 100%)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex justify-center items-center z-20\",\n                        style: {\n                            top: \"-30px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {\n                            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(1.1),\n                            className: _styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].heroHeading,\n                            children: \"MagiCloud\"\n                        }, void 0, false, {\n                            fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 10\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex justify-center items-center z-20\",\n                        style: {\n                            top: \"-30px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                initial: {\n                                    x: -200,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    x: 0,\n                                    opacity: 1\n                                },\n                                transition: {\n                                    duration: 3\n                                },\n                                className: \"absolute left-0\",\n                                style: {\n                                    bottom: \"70px\"\n                                },\n                                onAnimationComplete: (definition)=>{\n                                    if (definition.x === 0) {\n                                        document.querySelector(\".cloud-left\").classList.add(\"shaking\");\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/cloud-left.png\",\n                                    alt: \"cloud-left\",\n                                    className: \"w-[500px] h-[300px] object-contain cloud-left\",\n                                    style: {\n                                        opacity: 0.8\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                initial: {\n                                    x: 200,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    x: 0,\n                                    opacity: 1\n                                },\n                                transition: {\n                                    duration: 3\n                                },\n                                className: \"absolute right-0\",\n                                style: {\n                                    top: \"30px\"\n                                },\n                                onAnimationComplete: (definition)=>{\n                                    if (definition.x === 0) {\n                                        document.querySelector(\".cloud-right\").classList.add(\"shaking\");\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/cloud-right.png\",\n                                    alt: \"cloud-right\",\n                                    className: \"w-[500px] h-[300px] object-contain cloud-right\",\n                                    style: {\n                                        opacity: 0.8\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#explore\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-30\",\n                            style: {\n                                top: \"-20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 3\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/santiago/Documents/MagiCloudweb/sections/Hero.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9IZXJvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFdUM7QUFFUjtBQUMwQztBQUV6RSxNQUFNSyxPQUFPLGtCQUNYLDhEQUFDQztRQUFRQyxXQUFXLEdBQW9CLE9BQWpCTix5REFBZ0IsRUFBQztrQkFDdEMsNEVBQUNELHFEQUFVO1lBQ1RVLFVBQVVQLDJEQUFnQkE7WUFDMUJRLFNBQVE7WUFDUkMsYUFBWTtZQUNaQyxVQUFVO2dCQUFFQyxNQUFNLEtBQUs7Z0JBQUVDLFFBQVE7WUFBSztZQUN0Q1IsV0FBVyxHQUFxQixPQUFsQk4sMERBQWlCLEVBQUM7c0JBRWhDLDRFQUFDUTtnQkFBSUYsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDRixXQUFVO3dCQUNWVSxPQUFPOzRCQUNMQyxZQUFZO3dCQUNkOzs7Ozs7a0NBR0YsOERBQUNUO3dCQUNDRixXQUFVO3dCQUNWVSxPQUFPOzRCQUNMQyxZQUFZOzRCQUNaQSxZQUFZO3dCQUNkOzs7Ozs7a0NBR0YsOERBQUNUO3dCQUNDRixXQUFVO3dCQUNWVSxPQUFPOzRCQUFFRSxLQUFLO3dCQUFRO2tDQUV2Qiw0RUFBQ25CLG9EQUFTOzRCQUFDVSxVQUFVTiwwREFBV0EsQ0FBQzs0QkFBTUcsV0FBV04sMkRBQWtCO3NDQUFFOzs7Ozs7Ozs7OztrQ0FLL0UsOERBQUNRO3dCQUNPRixXQUFVO3dCQUNWVSxPQUFPOzRCQUFFRSxLQUFLO3dCQUFROzswQ0FFdEIsOERBQUNuQixxREFBVTtnQ0FDVFcsU0FBUztvQ0FBRVcsR0FBRyxDQUFDO29DQUFLQyxTQUFTO2dDQUFFO2dDQUMvQkMsU0FBUztvQ0FBRUYsR0FBRztvQ0FBR0MsU0FBUztnQ0FBRTtnQ0FDNUJFLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUU7Z0NBQzFCbkIsV0FBVTtnQ0FDVlUsT0FBTztvQ0FBRVUsUUFBUTtnQ0FBTztnQ0FDeEJDLHFCQUFxQixDQUFDQyxhQUFlO29DQUNuQyxJQUFJQSxXQUFXUCxDQUFDLEtBQUssR0FBRzt3Q0FDdEJRLFNBQVNDLGFBQWEsQ0FBQyxlQUFlQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztvQ0FDdEQsQ0FBQztnQ0FDSDswQ0FFQSw0RUFBQ0M7b0NBQ0NDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0o3QixXQUFVO29DQUNWVSxPQUFPO3dDQUFFTSxTQUFTO29DQUFJOzs7Ozs7Ozs7OzswQ0FJMUIsOERBQUN2QixxREFBVTtnQ0FDVFcsU0FBUztvQ0FBRVcsR0FBRztvQ0FBS0MsU0FBUztnQ0FBRTtnQ0FDOUJDLFNBQVM7b0NBQUVGLEdBQUc7b0NBQUdDLFNBQVM7Z0NBQUU7Z0NBQzVCRSxZQUFZO29DQUFFQyxVQUFVO2dDQUFFO2dDQUMxQm5CLFdBQVU7Z0NBQ1ZVLE9BQU87b0NBQUVFLEtBQUs7Z0NBQU87Z0NBQ3JCUyxxQkFBcUIsQ0FBQ0MsYUFBZTtvQ0FDbkMsSUFBSUEsV0FBV1AsQ0FBQyxLQUFLLEdBQUc7d0NBQ3RCUSxTQUFTQyxhQUFhLENBQUMsZ0JBQWdCQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztvQ0FDdkQsQ0FBQztnQ0FDSDswQ0FFQSw0RUFBQ0M7b0NBQ0NDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0o3QixXQUFVO29DQUNWVSxPQUFPO3dDQUFFTSxTQUFTO29DQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLbEMsOERBQUNjO3dCQUFFQyxNQUFLO2tDQUNOLDRFQUFDN0I7NEJBQ0NGLFdBQVU7NEJBQ1ZVLE9BQU87Z0NBQUVFLEtBQUs7NEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWxGcEJkO0FBNEZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0hlcm8uanN4PzU4YzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2xpZGVJbiwgc3RhZ2dlckNvbnRhaW5lciwgdGV4dFZhcmlhbnQgfSBmcm9tIFwiLi4vdXRpbHMvbW90aW9uXCI7XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnlQYWRkaW5nc30gc206cGwtMTYgcGwtNmB9PlxuICAgIDxtb3Rpb24uZGl2XG4gICAgICB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IGZhbHNlLCBhbW91bnQ6IDAuMjUgfX1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGh9IG14LWF1dG8gZmxleCBmbGV4LWNvbGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWQ6LW10LVsyMHB4XSAtbXQtWzEycHhdXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1bMzAwcHhdIHJvdW5kZWQtdGwtWzE0MHB4XSB6LVswXSAtdG9wLVszMHB4XVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDUwLDYwLDgwLDAuODY3Mzg0NDUzNzgxNTEyNikgMCUsIHJnYmEoNTEsMTA5LDEzMiwxKSAxMDAlKVwiXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOmgtWzUwMHB4XSBoLVszNTBweF0gcm91bmRlZC10bC1bMTQwcHhdIHotMTAgcmVsYXRpdmVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigxOSwyOSw0MSlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE5LDI5LDQxLDAuODY3Mzg0NDUzNzgxNTEyNikgMCUsIHJnYmEoMjEsNzksMTAyLDEpIDEwMCUpXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei0yMFwiXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiBcIi0zMHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgPG1vdGlvbi5oMSB2YXJpYW50cz17dGV4dFZhcmlhbnQoMS4xKX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0hlYWRpbmd9PlxuICAgIE1hZ2lDbG91ZFxuICA8L21vdGlvbi5oMT4gIFxuICA8L2Rpdj5cbnsvKiBoZXJlKi99XG48ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei0yMFwiXG4gICAgICAgIHN0eWxlPXt7IHRvcDogXCItMzBweFwiIH19XG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyB4OiAtMjAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMFwiXG4gICAgICAgICAgc3R5bGU9e3sgYm90dG9tOiBcIjcwcHhcIiB9fVxuICAgICAgICAgIG9uQW5pbWF0aW9uQ29tcGxldGU9eyhkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi54ID09PSAwKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvdWQtbGVmdFwiKS5jbGFzc0xpc3QuYWRkKFwic2hha2luZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2Nsb3VkLWxlZnQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImNsb3VkLWxlZnRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNTAwcHhdIGgtWzMwMHB4XSBvYmplY3QtY29udGFpbiBjbG91ZC1sZWZ0XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAuOCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgeDogMjAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTBcIlxuICAgICAgICAgIHN0eWxlPXt7IHRvcDogXCIzMHB4XCIgfX1cbiAgICAgICAgICBvbkFuaW1hdGlvbkNvbXBsZXRlPXsoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24ueCA9PT0gMCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3VkLXJpZ2h0XCIpLmNsYXNzTGlzdC5hZGQoXCJzaGFraW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvY2xvdWQtcmlnaHQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImNsb3VkLXJpZ2h0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzUwMHB4XSBoLVszMDBweF0gb2JqZWN0LWNvbnRhaW4gY2xvdWQtcmlnaHRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogMC44IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbjxhIGhyZWY9XCIjZXhwbG9yZVwiPlxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1lbmQgc206LW10LVs3MHB4XSAtbXQtWzUwcHhdIHByLVs0MHB4XSByZWxhdGl2ZSB6LTMwXCJcbiAgICBzdHlsZT17eyB0b3A6IFwiLTIwcHhcIiB9fVxuICA+XG4gICAgXG4gIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwic2xpZGVJbiIsInN0YWdnZXJDb250YWluZXIiLCJ0ZXh0VmFyaWFudCIsIkhlcm8iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwieVBhZGRpbmdzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwidG9wIiwiaDEiLCJoZXJvSGVhZGluZyIsIngiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImJvdHRvbSIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJkZWZpbml0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW1nIiwic3JjIiwiYWx0IiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/Hero.jsx\n"));

/***/ })

});