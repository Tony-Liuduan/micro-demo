function __webpack_init_sharing__(name, initScope) {
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
    var warn = function (msg) { return typeof console !== "undefined" && console.warn && console.warn(msg);; };
    var uniqueName = "shell";
    var register = function (name, version, factory) {
        var versions = scope[name] = scope[name] || {};
        var activeVersion = versions[version];
        if (!activeVersion || !activeVersion.loaded && uniqueName > activeVersion.from) versions[version] = { get: factory, from: uniqueName };

    };
    var initExternal = function (id) {
        var handleError = function (err) { return warn("Initialization of sharing external failed: " + err); };
        try {
            var module = __webpack_require__(id);
            if (!module) return;
            var initFn = function (module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
            if (module.then) return promises.push(module.then(initFn, handleError));
            var initResult = initFn(module);
            if (initResult && initResult.then) return promises.push(initResult.catch(handleError));

        } catch (err) { handleError(err); }

    }
    var promises = [];
    switch (name) {
        case "default": {
            register("@angular/common", "11.0.8", function () { return function () { return __webpack_require__(/*! ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js */ 8164); }; });
            register("@angular/core", "11.0.8", function () { return function () { return __webpack_require__(/*! ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js */ 5615); }; });
            register("@angular/router", "11.0.8", function () { return function () { return __webpack_require__(/*! ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js */ 3035); }; });

        }
            break;

    }
    if (!promises.length) return initPromises[name] = 1;
    return initPromises[name] = Promise.all(promises).then(function () { return initPromises[name] = 1; });
}