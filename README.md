# micro-demo

## 引用

* [webpack作者code](https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote)
* [AlloyTeam 团队 Blog](http://www.alloyteam.com/2020/04/14338/)
* [micro-frontends-demo](https://github.com/micro-frontends-demo)
* [掘金-微前端入门](https://juejin.im/post/5d8adb8ff265da5ba12cd173#heading-6)
* [lerna](https://segmentfault.com/a/1190000023954051)

## run project --development
```sh
npm run dev
```

## run project --production
```sh
npm run build
npm run serve
```



### 重载
共享模块是指既可重写的又可作为向嵌套容器提供重写的模块。它们通常指向每个构建中的相同模块，例如相同的库。
requiredVersion??
这个插件使得特定模块“可重载”。一个本地 API ( __webpack_override__ ) 允许提供重载

容器能够将选定的本地模块标记为“可重载”。容器的使用者能够提供“重载”，即替换容器中的一个“可重载”的模块。


## 解决问题
1. 模块联合允许JavaScript应用程序从另一个应用程序动态加载代码 —在此过程中，共享依赖关系，如果使用联合模块的应用程序不具有联合代码所需的依赖关系，则Webpack将从该联合生成源下载缺少的依赖关系。
2. 可以共享代码，但每种情况都存在后备。联合代码始终可以加载其依赖关系，但在下载更多有效负载之前将尝试使用使用者的依赖关系。更少的代码重复，依赖项共享就像单片式Webpack构建一样



## 共享模块实现方式

| type              | good       | bad                                              |
|-------------------|------------|--------------------------------------------------|
| npm               | any        | 升级通知                                         |
| umd               | script-src + externals | 无法达到本地编译时的优化效果, 依赖库之间容易冲突 |
| module-federation | script-src | 无法达到本地编译时的优化效果, 依赖库之间容易冲突 |

