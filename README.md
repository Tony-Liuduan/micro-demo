# micro-demo

## 引用

* [webpack作者code](https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote)
* [AlloyTeam 团队 Blog](http://www.alloyteam.com/2020/04/14338/)
* [micro-frontends-demo](https://github.com/micro-frontends-demo)
* [掘金-微前端入门](https://juejin.im/post/5d8adb8ff265da5ba12cd173#heading-6)
* [lerna](https://segmentfault.com/a/1190000023954051)


## 共享模块实现方式

| type              | good                                                                                                                      | bad                                                |
|-------------------|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| npm               | 版本维护方便                                                                                                              | 开发需要 npm link, 升级不爽, 影响 webpack 构建速度 |
| umd               | script-src + externals                                                                                                    | 依赖处理棘手                                       |
| module-federation | 1.直接加载的是 externals src, 是动态的, 可以通过配置系统配置维护的, 无需手动 update 版本 2.是可共享资源的, 更少的冗余代码 | -                                                  |

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
                        requiredVersion: deps.react, // 版本控制, 不同的版本生成的公共库 id 不同，还是会导致重复加载
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
  // 将 host 的 __webpack_require__.S 同步给 remote 的 __webpack_require__.S
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


### 3. 总结: 顺序输出
1. 动态加载 src_bootstrap_js 这个 chunk
2. 经过 __webpack_require__.f.remotes
  - __webpack_require__ 获取 remote module.export (var app2, 全局变量获取)
  - __webpack_require__.I 给 __webpack_require__.S 赋值, 执行 remoteModuel.export.init(__webpack_require__.S.default)
  - 执行 remoteEntry 中的 __webpack_require__.I('default'); 给 remoteEntry 中的 __webpack_require__.S  赋值
  - 执行 remoteModuel.export.get(), 期间会加重模块需要的依赖, 就是通过 __webpack_require__.l 加载, 依赖加载完后再加载需要的模块
  - 将执行结果赋值给 remote 模块的 export
2. 经过 __webpack_require__.f.consumes, 检查 shered js 是否加载 (依赖 __webpack_require__.S.default 指向同一个 object), 如果加载了就使用缓存, 没加载加载就去 load shared js
3. 经过 __webpack_require__.f.j, 去加载 src_bootstrap_js chunk

---

## 思考: module-federation 到底能帮助我们做什么?
### 1. 微前端方案
  * 确实可以更优雅的帮助我们进行项目的拆分组合, 不仅仅是路由级别也可以是组件形式
  * 使用 module-federation 可以更方便处理依赖, 我们不需要再将所有依赖一次性全部导入而保障依赖的一致性, 而是可以通过 host 和 remote 共享方式加载
  * TODO: 需要开发一套自动配置webpack插件 or 维护一套配置工具 js
### 2. 版本维护

* 2.1 发问: 继续 npm 包方式版本维护?
  - tips: 不同的版本生成的公共库 id 不同，还是会导致重复加载
  - 思路: 维护一个配置平台  + node 服务
    + node 服务 
      * 1.负责收集 remote 模块信息, 包括: 模块 key, 模块 cdn 地址, 操作人, 操作时间, 使用环境... (模块整体 js  zip 提交)
      * 2.数据库存储上次历史记录
    + 配置平台
      * 1.负责配置 remote list json 表, 默认读取最新
      * 2.可操作回滚历史版本
  
### 3. 无视技术栈 
  - angular 项目 remote react chunk, 无共享依赖, 通过路由方式接入?
  - angualr / react 多仓库 or 单仓库 多 package.json ?