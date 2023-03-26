'use strict';
(self['webpackChunkapp2'] = self['webpackChunkapp2'] || []).push([
	['src_bootstrap_js'],
	{
		/***/ './src/App.js':
			/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
					/* harmony export */
				});
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ 'webpack/sharing/consume/default/react/react'
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
				/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./Button.js */ './src/Button.js'
				);
				/* harmony import */ var _Counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./Counter.js */ './src/Counter.js'
				);

				const App = () =>
					/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						'div',
						null,
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
							'h1',
							null,
							'Basic Host-Remote'
						),
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('h2', null, 'App 2'),
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
							_Button_js__WEBPACK_IMPORTED_MODULE_1__['default'],
							null
						),
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
							_Counter_js__WEBPACK_IMPORTED_MODULE_2__['default'],
							null
						)
					);
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = App;

				/***/
			},

		/***/ './src/Button.js':
			/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
					/* harmony export */
				});
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ 'webpack/sharing/consume/default/react/react'
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
				/**
				 * @fileoverview
				 * @author liuduan
				 * @Date 2020-07-02 12:27:42
				 * @LastEditTime 2020-07-02 16:07:09
				 */

				const Button = () =>
					/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement('button', null, ' App2 Button');
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Button;

				/***/
			},

		/***/ './src/Counter.js':
			/*!************************!*\
  !*** ./src/Counter.js ***!
  \************************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
					/* harmony export */
				});
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ 'webpack/sharing/consume/default/react/react'
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

				const Counter = () =>
					/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('button', null, 'add: 1');
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Counter;

				/***/
			},

		/***/ './src/bootstrap.js':
			/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./App */ './src/App.js'
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! react */ 'webpack/sharing/consume/default/react/react'
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
				/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! react-dom/client */ './node_modules/react-dom/client.js'
				);

				const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
				root.render(
					/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
						_App__WEBPACK_IMPORTED_MODULE_0__['default'],
						null
					)
				);

				/***/
			},

		/***/ './node_modules/react-dom/client.js':
			/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				var m = __webpack_require__(/*! react-dom */ 'webpack/sharing/consume/default/react-dom/react-dom');
				if (false) {
				} else {
					var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
					exports.createRoot = function (c, o) {
						i.usingClientEntryPoint = true;
						try {
							return m.createRoot(c, o);
						} finally {
							i.usingClientEntryPoint = false;
						}
					};
					exports.hydrateRoot = function (c, h, o) {
						i.usingClientEntryPoint = true;
						try {
							return m.hydrateRoot(c, h, o);
						} finally {
							i.usingClientEntryPoint = false;
						}
					};
				}

				/***/
			},
	},
]);
