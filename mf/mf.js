/**
 * __webpack_require__()
 * __webpack_require__.l(remoteEntryUrl) add script load remoteEntryUrl && return window.TutorAtmH5
 *
 * remoteGradeFilterComponent = import('@yuanfudao/mobile/ec/PublicWelfareGradeFilter')
 * import 是调用 __webpack_require__.e 执行 __webpack_require__.f
 * __webpack_require__.f.remotes 加载 window.TutorAtmH5
 * __webpack_require__.I 加载 host 中的 shared 依赖，检查shared 依赖是否可用，通过 init 方法 __webpack_require__.S[react] 指向同一个 scope 引用，实现了host应用和remote应用共同维护一个__webpack_require__.S[name]，当需要使用共享模块的时候，都是从__webpack_require__.S之中去获取，就实现了模块的共享
 * __webpack_require__.f.consumes 用于 import 'react', 检查 shared 依赖是否可用
 */
var moduleMap = {
    './AppDownload': function () {
        return __webpack_require__
            .e('packages_ec_components_app-download_app-download_tsx')
            .then(function () {
                return function () {
                    return __webpack_require__(
                        /*! ./packages/ec/components/app-download/app-download.tsx */ './packages/ec/components/app-download/app-download.tsx'
                    );
                };
            });
    },
    './PublicWelfareGradeFilter': function () {
        return __webpack_require__
            .e('src_components_act_public-welfare_grade-filter_grade-filter_tsx')
            .then(function () {
                return function () {
                    return __webpack_require__(
                        /*! ./src/components/act/public-welfare/grade-filter/grade-filter.tsx */ './src/components/act/public-welfare/grade-filter/grade-filter.tsx'
                    );
                };
            });
    },
};
var get = function (module, getScope) {
	__webpack_require__.R = getScope;
	getScope = moduleMap[module]();
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function (shareScope, initScope) {
	if (!__webpack_require__.S) return;
	var name = 'default';
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

window.TutorAtmH5 = {
	get,
	init,
};

/* webpack/runtime/ensure chunk */
!(function () {
	__webpack_require__.f = {};
	// This file contains only the entry chunk.
	// The chunk loading function for additional chunks
	// 动态引入内容加载
	__webpack_require__.e = function (chunkId) {
		return Promise.all(
			Object.keys(__webpack_require__.f).reduce(function (promises, key) {
				__webpack_require__.f[key](chunkId, promises);
				return promises;
			}, [])
		);
	};
})();

/* webpack/runtime/remotes loading */
!(function () {
	var chunkMapping = {
		webpack_container_remote_yuanfudao_mobile_ec_PublicWelfareGradeFilter: [
			'webpack/container/remote/@yuanfudao/mobile/ec/PublicWelfareGradeFilter',
		],
		webpack_container_remote_yuanfudao_mobile_ec_AppDownload: [
			'webpack/container/remote/@yuanfudao/mobile/ec/AppDownload',
		],
	};
	var idToExternalAndNameMapping = {
		'webpack/container/remote/@yuanfudao/mobile/ec/PublicWelfareGradeFilter': [
			'default',
			'./PublicWelfareGradeFilter',
			'webpack/container/reference/@yuanfudao/mobile/ec',
		],
		'webpack/container/remote/@yuanfudao/mobile/ec/AppDownload': [
			'default',
			'./AppDownload',
			'webpack/container/reference/@yuanfudao/mobile/ec',
		],
	};
	__webpack_require__.f.remotes = function (chunkId, promises) {
		chunkMapping[chunkId].forEach(function (id) {
			var getScope = __webpack_require__.R;
			if (!getScope) getScope = [];
			var data = idToExternalAndNameMapping[id];
			if (getScope.indexOf(data) >= 0) return;
			getScope.push(data);
			if (data.p) return promises.push(data.p);
			var handleFunction = function (fn, arg1, arg2, d, next, first) {
				var promise = fn(arg1, arg2);
				if (promise && promise.then) {
					var p = promise.then(function (result) {
						return next(result, d);
					}, onError);
					if (first) promises.push((data.p = p));
					else return p;
				} else {
					return next(promise, d, first);
				}
			};
			var onExternal = function (external, _, first) {
				return external
					? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first)
					: onError();
			};
			// 初始化 window.TutorAtmH5 get 获取远程模块组件导出
			var onInitialized = function (_, external, first) {
				return handleFunction(external.get, data[1], getScope, 0, onFactory, first);
			};
			// 将远程组件 module 添加到 __webpack_require__.m 中
			var onFactory = function (factory) {
				data.p = 1;
				__webpack_require__.m[id] = function (module) {
					module.exports = factory();
				};
			};
			handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
		});
	};
})();

/* webpack/runtime/sharing */
!(function () {
	__webpack_require__.S = {}; // 在模块联邦中专门是使用的 存储模块
	var initPromises = {};
	var initTokens = {};
	// 加载某个shareScope下的内容，__webpack_require__.S 中是否有符合条件的模块提供使用，如果有的话，直接获取，如果没有，则加载当前所在模块下对应的模块 通过打包结果入手进行分析
	__webpack_require__.I = function (name, initScope) {
		if (!initScope) initScope = [];
		// handling circular init calls
		var initToken = initTokens[name];
		if (!initToken) initToken = initTokens[name] = {};
		if (initScope.indexOf(initToken) >= 0) return;
		initScope.push(initToken);
		// only runs once
		if (initPromises[name]) return initPromises[name];
		// creates a new share scope if needed
		if (!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
		// runs all init snippets from all modules reachable
		var scope = __webpack_require__.S[name];
		var uniqueName = 'tutor-web-mobile';
		var register = function (name, version, factory, eager) {
			var versions = (scope[name] = scope[name] || {});
			var activeVersion = versions[version];
			if (
				!activeVersion ||
				(!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))
			)
				versions[version] = { get: factory, from: uniqueName, eager: !!eager };
		};
		var initExternal = function (id) {
			var module = __webpack_require__(id);
			if (!module) return;
			var initFn = function (module) {
				return module && module.init && module.init(__webpack_require__.S[name], initScope);
			};
			if (module.then) return promises.push(module.then(initFn, handleError));
			var initResult = initFn(module);
			if (initResult && initResult.then) return promi;
		};
		var promises = [];
		switch (name) {
			case 'default':
				{
					register('react-dom', '18.2.0', function () {
						return Promise.all([
							__webpack_require__.e('vendors-node_modules_react-dom_index_js'),
							__webpack_require__.e('webpack_sharing_consume_default_react_react'),
						]).then(function () {
							return function () {
								return __webpack_require__(
									/*! ./node_modules/react-dom/index.js */ './node_modules/react-dom/index.js'
								);
							};
						});
					});
					register('react', '18.2.0', function () {
						return __webpack_require__.e('vendors-node_modules_react_index_js').then(function () {
							return function () {
								return __webpack_require__(
									/*! ./node_modules/react/index.js */ './node_modules/react/index.js'
								);
							};
						});
					});
					initExternal('webpack/container/reference/@yuanfudao/mobile/ec');
				}
				break;
		}
		if (!promises.length) return (initPromises[name] = 1);
		return (initPromises[name] = Promise.all(promises).then(function () {
			return (initPromises[name] = 1);
		}));
	};
})();
