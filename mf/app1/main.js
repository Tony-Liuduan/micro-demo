(self['webpackChunkapp1'] = self['webpackChunkapp1'] || []).push([
	['main'],
	{
		'./src/index.js': (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			Promise.all(
				/*! import() */ [
					__webpack_require__.e('common-webpack_sharing_consume_default_react_react'),
					__webpack_require__.e('src_bootstrap_js'),
				]
			)
				.then(res => {
					console.log('@@@@@@@@@@@@@@@@@@@@@@@@ app1 2 个 promis resolve');
					return res;
				})
				.then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ './src/bootstrap.js'));
		},

		'webpack/container/reference/app2': (module, __unused_webpack_exports, __webpack_require__) => {
			'use strict';
			var __webpack_error__ = new Error();
			module.exports = new Promise((resolve, reject) => {
				if (typeof app2 !== 'undefined') return resolve();
				__webpack_require__.l(
					'http://localhost:3002/remoteEntry.js',
					event => {
						if (typeof app2 !== 'undefined') return resolve();
						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
						__webpack_error__.name = 'ScriptExternalLoadError';
						__webpack_error__.type = errorType;
						__webpack_error__.request = realSrc;
						reject(__webpack_error__);
					},
					'app2'
				);
			}).then(() => app2);
		},
	},
	__webpack_require__ => {
		// webpackRuntimeModules
		var __webpack_exec__ = moduleId => __webpack_require__((__webpack_require__.s = moduleId));
		var __webpack_exports__ = __webpack_exec__('./src/index.js');
	},
]);
