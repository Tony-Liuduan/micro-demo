# micro-demo

## 引用

* [webpack作者code](https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote)
* [AlloyTeam 团队 Blog](http://www.alloyteam.com/2020/04/14338/)
* [micro-frontends-demo](https://github.com/micro-frontends-demo)
* [掘金-微前端入门](https://juejin.im/post/5d8adb8ff265da5ba12cd173#heading-6)
* [lerna](https://segmentfault.com/a/1190000023954051)


## 共享模块实现方式

| type              | good                   | bad                                             |
|-------------------|------------------------|-------------------------------------------------|
| npm               | any                    | 升级通知                                        |
| umd               | script-src + externals | 无法达到本地编译时的优化效果 依赖库之间容易冲突 |
| module-federation | ?                      | ?                                               |

---

## 模块联邦能解决的问题 (这里很官方...)

1. 模块联合允许JavaScript应用程序从另一个应用程序动态加载代码 
    * 在此过程中，共享依赖关系
    * 如果使用联合模块的应用程序不具有联合代码所需的依赖关系，则Webpack将从该联合生成源下载缺少的依赖关系

2. 可以共享代码，但每种情况都存在后备 (好像和上面说的一个语义)
    * 联合代码始终可以加载其依赖关系，但在下载更多有效负载之前将尝试使用使用者的依赖关系
    * 更少的代码重复，依赖项共享就像单片式Webpack构建一样


---

## module-federation 配置

> host  / remote / Bidirectional-hosts
### 1. runtimeChunk 不能分离, 配置如下:
    ```js
    // webpack config
    optimization: {
        runtimeChunk: false,
    },
    ```
原因: ???

### 2. host 加载 remote 方式
#### 2.1 加载方案1: (同步加载 remote)
* 配置关键步骤:  
    ```js
    // host webpack config
    module.exports = {
        plugins: [
            // ...
            new ModuleFederationPlugin({
                // ...
                remotes: { app2: 'app2' }, // 类似 externals,  值是 App2 lib name, key 是 App1 中调用时用的名字
                shared: {
                    'react': {
                        eager: false, // true: react 模块被整个放进 main.js, false: react 模块被单独抽离到 vender-react.js 中
                        // FIXME: angualr 中 eager 设置为 false 报错... crazy
                        singleton: true,
                    },
                    'react-dom': {
                        eager: false,
                        singleton: true,
                    },
                },
            })
        ]
    };
    ```

    ```html
    <!-- host html 模板  -->
    <!-- remoteEntry 是 remote 配置的 filename 值  -->
    <script src="http://localhost:3002/remoteEntry.js"></script> 
    ```

* 优点: 通过这种方式加载, 可以同步引用 remote 中模块, 也可异步引用 remote 中模块
    ```js
    // 同步方式
    import RemoteSyncButton from 'app2/Button';
    
    // 异步方式
    const { lazy, Suspense } = React;
    const RemoteButton = lazy(() => import('app2/Button'));

    <Suspense fallback="Loading Button">
      <RemoteButton />
    </Suspense>
    ```

* 缺点: 需要开发 webpack 插件, 自动在 html 模板中插入 remote js

#### 2.2 加载方案2: (异步加载 remote)
* 配置关键步骤:  

> host webpack 仅仅配置 shared 属性即可, 其他无需配置 

```ts
// ps: webpack 构建后的 module 会被一个方法包裹, 方法入参提供了 __webpack_require__ 

type Scope = unknown;
type Factory = () => any;

type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>; // webpack
declare const __webpack_share_scopes__: { default: Scope };

const moduleMap: any = {};

// 加载 remote js
function loadRemoteEntry(remoteEntry: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (moduleMap[remoteEntry]) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = remoteEntry;

    script.onerror = reject;

    script.onload = () => {
      moduleMap[remoteEntry] = true;
      resolve(); // window is the global namespace
    };

    document.body.append(script);
  });
}

// 模拟 import 
async function lookupExposedModule<T>(
  remoteName: string,
  exposedModule: string
): Promise<T> {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default'); //  webpack 会自动将 __webpack_init_sharing__ 转为 __webpack_require__.I
  // 构建后结果: __webpack_require__.I('default'); 构建 __webpack_require__.S.default, 也就是 shared info
    
  // 获取 lib 实例
  const container = (window as any)[remoteName] as Container;
  
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);  // webpack 会自动将 __webpack_share_scopes__ 转为 __webpack_require__.S /// container.init(__webpack_require__.S.default);
  
  const factory = await container.get(exposedModule);
  const Module = factory();
  return Module as T;

  // factory()                                  同理: const Module = app2.get('./Button').then(f => f())
  // Module.then((m) => m[o.ngModuleName])      同理 : Module.then(x => console.log(x.default))
}

export type LoadRemoteModuleOptions = {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
};

export async function loadRemoteModule(
  options: LoadRemoteModuleOptions
): Promise<any> {
  /*
  options = {
    displayName: "Profile"
    exposedModule: "ProfileModule"
    ngModuleName: "ProfileModule"
    remoteEntry: "http://localhost:4201/remoteEntry.js"
    remoteName: "profile"
    routePath: "profile"
  }
  */
  await loadRemoteEntry(options.remoteEntry); // hack 执行 remoteUrl script load
  return await lookupExposedModule<any>(
    options.remoteName,
    options.exposedModule
  );
}

// ------------------------- route.js 调用 -------------------------
const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    // loadChildren: () => import('xxpath').then(m => m.XxxModule), 
    loadChildren: () => loadRemoteModule(o).then((m) => m[o.ngModuleName]), // ngModuleName 就是 exposes 的 key
}));
```

* 优点: webpack config 无需配置 remotes, html 模板无需插入 remote js
* 缺点: 不能同步引入, 单独维护 remote load 工具方法, 不好理解

---

## 原理

执行入口:

```js
__webpack_require__.e("src_bootstrap_js");
```
### 1. 执行 __webpack_require__.e 会按顺序执行如下 3 个 方法
* __webpack_require__.f.remotes   加载远程模块, 比如 button / couter 远程模块
* __webpack_require__.f.consumes  加载共享模块, 比如 react
* __webpack_require__.f.j         加载本地模块, 比如 src_bootstrap_js

  ```js
  __webpack_require__.e = (chunkId) => {
      return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
        __webpack_require__.f[key](chunkId, promises);
        return promises;
      }, []));
  };
  ```

### 2. 加载 chunk 通过 `__webpack_require__.l` 方法
script.src 方式加载, 加载成功后 remove script


---

## 思考: module-federation 到底能帮助我们做什么?
### 1. 微前端方案

### 2. 版本维护

* 2.1 发问: 继续 npm 包方式版本维护?


### 3. 无视技术栈
