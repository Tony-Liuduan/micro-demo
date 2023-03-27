'use strict';
(self['webpackChunkapp1'] = self['webpackChunkapp1'] || []).push([
	['src_bootstrap_js'],
	{
		/***/ './src/App.js':
			/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
					/* harmony export */
				});
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ 'webpack/sharing/consume/default/react/react'
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
				/* harmony import */ var app2_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! app2/Button */ 'webpack/container/remote/app2/Button'
				);
				/* harmony import */ var app2_Button__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(app2_Button__WEBPACK_IMPORTED_MODULE_1__);

				const { lazy, Suspense } = react__WEBPACK_IMPORTED_MODULE_0___default();
				const RemoteButton = lazy(() =>
					Promise.resolve(/*! import() */).then(
						__webpack_require__.t.bind(
							__webpack_require__,
							/*! app2/Button */ 'webpack/container/remote/app2/Button',
							23
						)
					)
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
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('h2', null, 'App 1'),
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
							app2_Button__WEBPACK_IMPORTED_MODULE_1___default(),
							null
						),
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('br', null),
						/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
							Suspense,
							{
								fallback: 'Loading Button',
							},
							/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RemoteButton, null)
						)
					);
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = App;

				/***/
			},

		/***/ './src/bootstrap.js':
			/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ 'webpack/sharing/consume/default/react/react'
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
				/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! react-dom/client */ './node_modules/react-dom/client.js'
				);
				/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./App */ './src/App.js'
				);

				console.log('app1 __webpack_require__.m', __webpack_require__.m);
				console.log('app1 __webpack_require__.c', __webpack_require__.c);

				const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
				root.render(
					/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						_App__WEBPACK_IMPORTED_MODULE_2__['default'],
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
