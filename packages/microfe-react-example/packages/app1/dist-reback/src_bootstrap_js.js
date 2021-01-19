/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?af64\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var app2_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app2/Button */ \"webpack/container/remote/app2/Button\");\n/* harmony import */ var app2_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(app2_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var app2_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app2/Counter */ \"webpack/container/remote/app2/Counter\");\n/* harmony import */ var app2_Counter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(app2_Counter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst {\n  lazy,\n  Suspense\n} = (react__WEBPACK_IMPORTED_MODULE_0___default());\nconst RemoteButton = lazy(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! app2/Button */ \"webpack/container/remote/app2/Button\", 23)));\nconst RemoteCounter = lazy(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! app2/Counter */ \"webpack/container/remote/app2/Counter\", 23)));\n\nconst App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Basic Host-Remote\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"App 1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Romote component by Sync\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((app2_Button__WEBPACK_IMPORTED_MODULE_1___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((app2_Counter__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Romote component by Lazy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Suspense, {\n  fallback: \"Loading Button\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RemoteButton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Suspense, {\n  fallback: \"Loading Counter\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RemoteCounter, null)));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://app1/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?af64\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://app1/./src/bootstrap.js?");

/***/ })

}]);