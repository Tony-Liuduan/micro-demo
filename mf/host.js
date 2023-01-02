(function () {
	// webpackBootstrap
	var __webpack_modules__ = {
		'webpack/container/reference/@yuanfudao/mobile/ec': function (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) {
			'use strict';
			var __webpack_error__ = new Error();
			module.exports = new Promise(function (resolve, reject) {
				if (typeof TutorAtmH5 !== 'undefined') return resolve();
				__webpack_require__.l(
					window.TutorAtmH5UrlGlobalVariable,
					function (event) {
						if (typeof TutorAtmH5 !== 'undefined') return resolve();
						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
						__webpack_error__.name = 'ScriptExternalLoadError';
						__webpack_error__.type = errorType;
						__webpack_error__.request = realSrc;
						reject(__webpack_error__);
					},
					'TutorAtmH5'
				);
			}).then(function () {
				return TutorAtmH5;
			});
		},
	};
	/************************************************************************/
	// The module cache
	var __webpack_module_cache__ = {};

	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			if (cachedModule.error !== undefined) throw cachedModule.error;
			return cachedModule.exports;
		}
		// Create a new module (and put it into the cache)
		var module = (__webpack_module_cache__[moduleId] = {
			id: moduleId,
			loaded: false,
			exports: {},
		});

		// Execute the module function
		try {
			var execOptions = {
				id: moduleId,
				module: module,
				factory: __webpack_modules__[moduleId],
				require: __webpack_require__,
			};
			__webpack_require__.i.forEach(function (handler) {
				handler(execOptions);
			});
			module = execOptions.module;
			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
		} catch (e) {
			module.error = e;
			throw e;
		}

		// Flag the module as loaded
		module.loaded = true;

		// Return the exports of the module
		return module.exports;
	}

	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = __webpack_modules__;

	// expose the module cache
	__webpack_require__.c = __webpack_module_cache__;

	// expose the module execution interceptor
	__webpack_require__.i = [];

	/************************************************************************/
	/* webpack/runtime/compat get default export */
	!(function () {
		// getDefaultExport function for compatibility with non-harmony modules
		__webpack_require__.n = function (module) {
			var getter =
				module && module.__esModule
					? function () {
							return module['default'];
					  }
					: function () {
							return module;
					  };
			__webpack_require__.d(getter, { a: getter });
			return getter;
		};
	})();

	/* webpack/runtime/create fake namespace object */
	!(function () {
		var getProto = Object.getPrototypeOf
			? function (obj) {
					return Object.getPrototypeOf(obj);
			  }
			: function (obj) {
					return obj.__proto__;
			  };
		var leafPrototypes;
		// create a fake namespace object
		// mode & 1: value is a module id, require it
		// mode & 2: merge all properties of value into the ns
		// mode & 4: return value when already ns object
		// mode & 16: return value when it's Promise-like
		// mode & 8|1: behave like require
		__webpack_require__.t = function (value, mode) {
			if (mode & 1) value = this(value);
			if (mode & 8) return value;
			if (typeof value === 'object' && value) {
				if (mode & 4 && value.__esModule) return value;
				if (mode & 16 && typeof value.then === 'function') return value;
			}
			var ns = Object.create(null);
			__webpack_require__.r(ns);
			var def = {};
			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
			for (
				var current = mode & 2 && value;
				typeof current == 'object' && !~leafPrototypes.indexOf(current);
				current = getProto(current)
			) {
				Object.getOwnPropertyNames(current).forEach(function (key) {
					def[key] = function () {
						return value[key];
					};
				});
			}
			def['default'] = function () {
				return value;
			};
			__webpack_require__.d(ns, def);
			return ns;
		};
	})();

	/* webpack/runtime/define property getters */
	!(function () {
		// define getter functions for harmony exports
		__webpack_require__.d = function (exports, definition) {
			for (var key in definition) {
				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
				}
			}
		};
	})();

	/* webpack/runtime/ensure chunk */
	!(function () {
		__webpack_require__.f = {};
		// This file contains only the entry chunk.
		// The chunk loading function for additional chunks
		__webpack_require__.e = function (chunkId) {
			return Promise.all(
				Object.keys(__webpack_require__.f).reduce(function (promises, key) {
					__webpack_require__.f[key](chunkId, promises);
					return promises;
				}, [])
			);
		};
	})();

	/* webpack/runtime/get javascript chunk filename */
	!(function () {
		// This function allow to reference async chunks
		__webpack_require__.u = function (chunkId) {
			// return url for filenames based on template
			return '' + chunkId + '.chunk.js';
		};
	})();

	/* webpack/runtime/get javascript update chunk filename */
	!(function () {
		// This function allow to reference all chunks
		__webpack_require__.hu = function (chunkId) {
			// return url for filenames based on template
			return '' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js';
		};
	})();

	/* webpack/runtime/getFullHash */
	!(function () {
		__webpack_require__.h = function () {
			return 'f2b76ed73ea613276253';
		};
	})();

	/* webpack/runtime/global */
	!(function () {
		__webpack_require__.g = (function () {
			if (typeof globalThis === 'object') return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if (typeof window === 'object') return window;
			}
		})();
	})();

	/* webpack/runtime/harmony module decorator */
	!(function () {
		__webpack_require__.hmd = function (module) {
			module = Object.create(module);
			if (!module.children) module.children = [];
			Object.defineProperty(module, 'exports', {
				enumerable: true,
				set: function () {
					throw new Error(
						'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
							module.id
					);
				},
			});
			return module;
		};
	})();

	/* webpack/runtime/hasOwnProperty shorthand */
	!(function () {
		__webpack_require__.o = function (obj, prop) {
			return Object.prototype.hasOwnProperty.call(obj, prop);
		};
	})();

	/* webpack/runtime/load script */
	!(function () {
		var inProgress = {};
		var dataWebpackPrefix = 'tutor-web-mobile:';
		// loadScript function to load a script via script tag
		__webpack_require__.l = function (url, done, key, chunkId) {
			if (inProgress[url]) {
				inProgress[url].push(done);
				return;
			}
			var script, needAttach;
			if (key !== undefined) {
				var scripts = document.getElementsByTagName('script');
				for (var i = 0; i < scripts.length; i++) {
					var s = scripts[i];
					if (s.getAttribute('src') == url || s.getAttribute('data-webpack') == dataWebpackPrefix + key) {
						script = s;
						break;
					}
				}
			}
			if (!script) {
				needAttach = true;
				script = document.createElement('script');

				script.charset = 'utf-8';
				script.timeout = 120;
				if (__webpack_require__.nc) {
					script.setAttribute('nonce', __webpack_require__.nc);
				}
				script.setAttribute('data-webpack', dataWebpackPrefix + key);
				script.src = url;
			}
			inProgress[url] = [done];
			var onScriptComplete = function (prev, event) {
				// avoid mem leaks in IE.
				script.onerror = script.onload = null;
				clearTimeout(timeout);
				var doneFns = inProgress[url];
				delete inProgress[url];
				script.parentNode && script.parentNode.removeChild(script);
				doneFns &&
					doneFns.forEach(function (fn) {
						return fn(event);
					});
				if (prev) return prev(event);
			};
			var timeout = setTimeout(
				onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }),
				120000
			);
			script.onerror = onScriptComplete.bind(null, script.onerror);
			script.onload = onScriptComplete.bind(null, script.onload);
			needAttach && document.head.appendChild(script);
		};
	})();

	/* webpack/runtime/make namespace object */
	!(function () {
		// define __esModule on exports
		__webpack_require__.r = function (exports) {
			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();

	/* webpack/runtime/node module decorator */
	!(function () {
		__webpack_require__.nmd = function (module) {
			module.paths = [];
			if (!module.children) module.children = [];
			return module;
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
			if (__webpack_require__.o(chunkMapping, chunkId)) {
				chunkMapping[chunkId].forEach(function (id) {
					var getScope = __webpack_require__.R;
					if (!getScope) getScope = [];
					var data = idToExternalAndNameMapping[id];
					if (getScope.indexOf(data) >= 0) return;
					getScope.push(data);
					if (data.p) return promises.push(data.p);
					var onError = function (error) {
						if (!error) error = new Error('Container missing');
						if (typeof error.message === 'string')
							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
						__webpack_require__.m[id] = function () {
							throw error;
						};
						data.p = 0;
					};
					var handleFunction = function (fn, arg1, arg2, d, next, first) {
						try {
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
						} catch (error) {
							onError(error);
						}
					};
					var onExternal = function (external, _, first) {
						return external
							? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first)
							: onError();
					};
					var onInitialized = function (_, external, first) {
						return handleFunction(external.get, data[1], getScope, 0, onFactory, first);
					};
					var onFactory = function (factory) {
						data.p = 1;
						__webpack_require__.m[id] = function (module) {
							module.exports = factory();
						};
					};
					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
				});
			}
		};
	})();

	/* webpack/runtime/sharing */
	!(function () {
		__webpack_require__.S = {};
		var initPromises = {};
		var initTokens = {};
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
			var warn = function (msg) {
				return typeof console !== 'undefined' && console.warn && console.warn(msg);
			};
			var uniqueName = 'tutor-web-mobile';
			var register = function (name, version, factory, eager) {
				var versions = (scope[name] = scope[name] || {});
				var activeVersion = versions[version];
				if (
					!activeVersion ||
					(!activeVersion.loaded &&
						(!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))
				)
					versions[version] = { get: factory, from: uniqueName, eager: !!eager };
			};
			var initExternal = function (id) {
				var handleError = function (err) {
					warn('Initialization of sharing external failed: ' + err);
				};
				try {
					var module = __webpack_require__(id);
					if (!module) return;
					var initFn = function (module) {
						return module && module.init && module.init(__webpack_require__.S[name], initScope);
					};
					if (module.then) return promises.push(module.then(initFn, handleError));
					var initResult = initFn(module);
					if (initResult && initResult.then) return promises.push(initResult['catch'](handleError));
				} catch (err) {
					handleError(err);
				}
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

	/* webpack/runtime/publicPath */
	!(function () {
		__webpack_require__.p = '/s/';
	})();

	/* webpack/runtime/consumes */
	!(function () {
		var parseVersion = function (str) {
			// see webpack/lib/util/semver.js for original code
			var p = function (p) {
					return p.split('.').map(function (p) {
						return +p == p ? +p : p;
					});
				},
				n = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),
				r = n[1] ? p(n[1]) : [];
			return n[2] && (r.length++, r.push.apply(r, p(n[2]))), n[3] && (r.push([]), r.push.apply(r, p(n[3]))), r;
		};
		var versionLt = function (a, b) {
			// see webpack/lib/util/semver.js for original code
			(a = parseVersion(a)), (b = parseVersion(b));
			for (var r = 0; ; ) {
				if (r >= a.length) return r < b.length && 'u' != (typeof b[r])[0];
				var e = a[r],
					n = (typeof e)[0];
				if (r >= b.length) return 'u' == n;
				var t = b[r],
					f = (typeof t)[0];
				if (n != f) return ('o' == n && 'n' == f) || 's' == f || 'u' == n;
				if ('o' != n && 'u' != n && e != t) return e < t;
				r++;
			}
		};
		var rangeToString = function (range) {
			// see webpack/lib/util/semver.js for original code
			var r = range[0],
				n = '';
			if (1 === range.length) return '*';
			if (r + 0.5) {
				n += 0 == r ? '>=' : -1 == r ? '<' : 1 == r ? '^' : 2 == r ? '~' : r > 0 ? '=' : '!=';
				for (var e = 1, a = 1; a < range.length; a++) {
					e--, (n += 'u' == (typeof (t = range[a]))[0] ? '-' : (e > 0 ? '.' : '') + ((e = 2), t));
				}
				return n;
			}
			var g = [];
			for (a = 1; a < range.length; a++) {
				var t = range[a];
				g.push(
					0 === t
						? 'not(' + o() + ')'
						: 1 === t
						? '(' + o() + ' || ' + o() + ')'
						: 2 === t
						? g.pop() + ' ' + g.pop()
						: rangeToString(t)
				);
			}
			return o();
			function o() {
				return g.pop().replace(/^\((.+)\)$/, '$1');
			}
		};
		var satisfy = function (range, version) {
			// see webpack/lib/util/semver.js for original code
			if (0 in range) {
				version = parseVersion(version);
				var e = range[0],
					r = e < 0;
				r && (e = -e - 1);
				for (var n = 0, i = 1, a = !0; ; i++, n++) {
					var f,
						s,
						g = i < range.length ? (typeof range[i])[0] : '';
					if (n >= version.length || 'o' == (s = (typeof (f = version[n]))[0]))
						return !a || ('u' == g ? i > e && !r : ('' == g) != r);
					if ('u' == s) {
						if (!a || 'u' != g) return !1;
					} else if (a)
						if (g == s)
							if (i <= e) {
								if (f != range[i]) return !1;
							} else {
								if (r ? f > range[i] : f < range[i]) return !1;
								f != range[i] && (a = !1);
							}
						else if ('s' != g && 'n' != g) {
							if (r || i <= e) return !1;
							(a = !1), i--;
						} else {
							if (i <= e || s < g != r) return !1;
							a = !1;
						}
					else 's' != g && 'n' != g && ((a = !1), i--);
				}
			}
			var t = [],
				o = t.pop.bind(t);
			for (n = 1; n < range.length; n++) {
				var u = range[n];
				t.push(1 == u ? o() | o() : 2 == u ? o() & o() : u ? satisfy(u, version) : !o());
			}
			return !!o();
		};
		var ensureExistence = function (scopeName, key) {
			var scope = __webpack_require__.S[scopeName];
			if (!scope || !__webpack_require__.o(scope, key))
				throw new Error('Shared module ' + key + " doesn't exist in shared scope " + scopeName);
			return scope;
		};
		var findVersion = function (scope, key) {
			var versions = scope[key];
			var key = Object.keys(versions).reduce(function (a, b) {
				return !a || versionLt(a, b) ? b : a;
			}, 0);
			return key && versions[key];
		};
		var findSingletonVersionKey = function (scope, key) {
			var versions = scope[key];
			return Object.keys(versions).reduce(function (a, b) {
				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
			}, 0);
		};
		var getInvalidSingletonVersionMessage = function (scope, key, version, requiredVersion) {
			return (
				'Unsatisfied version ' +
				version +
				' from ' +
				(version && scope[key][version].from) +
				' of shared singleton module ' +
				key +
				' (required ' +
				rangeToString(requiredVersion) +
				')'
			);
		};
		var getSingleton = function (scope, scopeName, key, requiredVersion) {
			var version = findSingletonVersionKey(scope, key);
			return get(scope[key][version]);
		};
		var getSingletonVersion = function (scope, scopeName, key, requiredVersion) {
			var version = findSingletonVersionKey(scope, key);
			if (!satisfy(requiredVersion, version))
				typeof console !== 'undefined' &&
					console.warn &&
					console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
			return get(scope[key][version]);
		};
		var getStrictSingletonVersion = function (scope, scopeName, key, requiredVersion) {
			var version = findSingletonVersionKey(scope, key);
			if (!satisfy(requiredVersion, version))
				throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
			return get(scope[key][version]);
		};
		var findValidVersion = function (scope, key, requiredVersion) {
			var versions = scope[key];
			var key = Object.keys(versions).reduce(function (a, b) {
				if (!satisfy(requiredVersion, b)) return a;
				return !a || versionLt(a, b) ? b : a;
			}, 0);
			return key && versions[key];
		};
		var getInvalidVersionMessage = function (scope, scopeName, key, requiredVersion) {
			var versions = scope[key];
			return (
				'No satisfying version (' +
				rangeToString(requiredVersion) +
				') of shared module ' +
				key +
				' found in shared scope ' +
				scopeName +
				'.\n' +
				'Available versions: ' +
				Object.keys(versions)
					.map(function (key) {
						return key + ' from ' + versions[key].from;
					})
					.join(', ')
			);
		};
		var getValidVersion = function (scope, scopeName, key, requiredVersion) {
			var entry = findValidVersion(scope, key, requiredVersion);
			if (entry) return get(entry);
			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
		};
		var warnInvalidVersion = function (scope, scopeName, key, requiredVersion) {
			typeof console !== 'undefined' &&
				console.warn &&
				console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
		};
		var get = function (entry) {
			entry.loaded = 1;
			return entry.get();
		};
		var init = function (fn) {
			return function (scopeName, a, b, c) {
				var promise = __webpack_require__.I(scopeName);
				if (promise && promise.then)
					return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
				return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
			};
		};

		var load = /*#__PURE__*/ init(function (scopeName, scope, key) {
			ensureExistence(scopeName, key);
			return get(findVersion(scope, key));
		});
		var loadFallback = /*#__PURE__*/ init(function (scopeName, scope, key, fallback) {
			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
		});
		var loadVersionCheck = /*#__PURE__*/ init(function (scopeName, scope, key, version) {
			ensureExistence(scopeName, key);
			return get(
				findValidVersion(scope, key, version) ||
					warnInvalidVersion(scope, scopeName, key, version) ||
					findVersion(scope, key)
			);
		});
		var loadSingleton = /*#__PURE__*/ init(function (scopeName, scope, key) {
			ensureExistence(scopeName, key);
			return getSingleton(scope, scopeName, key);
		});
		var loadSingletonVersionCheck = /*#__PURE__*/ init(function (scopeName, scope, key, version) {
			ensureExistence(scopeName, key);
			return getSingletonVersion(scope, scopeName, key, version);
		});
		var loadStrictVersionCheck = /*#__PURE__*/ init(function (scopeName, scope, key, version) {
			ensureExistence(scopeName, key);
			return getValidVersion(scope, scopeName, key, version);
		});
		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init(function (scopeName, scope, key, version) {
			ensureExistence(scopeName, key);
			return getStrictSingletonVersion(scope, scopeName, key, version);
		});
		var loadVersionCheckFallback = /*#__PURE__*/ init(function (scopeName, scope, key, version, fallback) {
			if (!scope || !__webpack_require__.o(scope, key)) return fallback();
			return get(
				findValidVersion(scope, key, version) ||
					warnInvalidVersion(scope, scopeName, key, version) ||
					findVersion(scope, key)
			);
		});
		var loadSingletonFallback = /*#__PURE__*/ init(function (scopeName, scope, key, fallback) {
			if (!scope || !__webpack_require__.o(scope, key)) return fallback();
			return getSingleton(scope, scopeName, key);
		});
		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init(function (scopeName, scope, key, version, fallback) {
			if (!scope || !__webpack_require__.o(scope, key)) return fallback();
			return getSingletonVersion(scope, scopeName, key, version);
		});
		var loadStrictVersionCheckFallback = /*#__PURE__*/ init(function (scopeName, scope, key, version, fallback) {
			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
			return entry ? get(entry) : fallback();
		});
		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init(function (
			scopeName,
			scope,
			key,
			version,
			fallback
		) {
			if (!scope || !__webpack_require__.o(scope, key)) return fallback();
			return getStrictSingletonVersion(scope, scopeName, key, version);
		});
		var installedModules = {};
		var moduleToHandlerMapping = {
			'webpack/sharing/consume/default/react/react': function () {
				return loadSingletonFallback('default', 'react', function () {
					return __webpack_require__.e('vendors-node_modules_react_index_js').then(function () {
						return function () {
							return __webpack_require__(/*! react */ './node_modules/react/index.js');
						};
					});
				});
			},
			'webpack/sharing/consume/default/react-dom/react-dom': function () {
				return loadSingletonFallback('default', 'react-dom', function () {
					return __webpack_require__.e('vendors-node_modules_react-dom_index_js').then(function () {
						return function () {
							return __webpack_require__(/*! react-dom */ './node_modules/react-dom/index.js');
						};
					});
				});
			},
		};
		// no consumes in initial chunks
		var chunkMapping = {
			webpack_sharing_consume_default_react_react: ['webpack/sharing/consume/default/react/react'],
			'view_static_ts_public-welfare_bootstrap_ts': ['webpack/sharing/consume/default/react-dom/react-dom'],
		};
		__webpack_require__.f.consumes = function (chunkId, promises) {
			chunkMapping[chunkId].forEach(function (id) {
				var onFactory = function (factory) {
					installedModules[id] = 0;
					__webpack_require__.m[id] = function (module) {
						delete __webpack_require__.c[id];
						module.exports = factory();
					};
				};
				var promise = moduleToHandlerMapping[id]();
				if (promise.then) {
					promises.push((installedModules[id] = promise.then(onFactory)['catch'](onError)));
				} else onFactory(promise);
			});
		};
	})();
})();
