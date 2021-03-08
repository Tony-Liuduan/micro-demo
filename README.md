# micro-demo

## 引用

* [webpack作者code](https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote)
* [AlloyTeam 团队 Blog](http://www.alloyteam.com/2020/04/14338/)
* [micro-frontends-demo](https://github.com/micro-frontends-demo)
* [掘金-微前端入门](https://juejin.im/post/5d8adb8ff265da5ba12cd173#heading-6)


## run project --development
```sh
npm run dev
```

## run project --production
```sh
npm run build
npm run serve
```

## lerna 
```sh
yarn global add lerna
lerna init
lerna clean # 对于之前依赖包已经被安装到各个 package 下的情况，我们只需要清理一下安装的依赖即可 lerna clean
lerna bootstrap

lerna add lodash -D --scope=house

# 运行所有子模块  
lerna run start
# 运行 antd 模块，注意 scope 后为包名，而非文件名
lerna run start --scope antd

# 添加 --stream 参数，在终端打印运行日志信息
lerna run start --scope antd --stream

# lerna add <moduleName>  // 所有子包都添加这个依赖
# lerna add <moduleName> --scope = <pkgName> // 给scope后的包添加依赖
# lerna add <pkgName1> --scope = <pkgName2> // 给pkgName2中添加pkgName1，包内的互相引用，会复制pkgName1到pkgName2中

# lerna exec -- <command> [..args] # 在所有包中运行该命令
# 例子
lerna exec --scope=antd  yarn remove webpack # 将 antd 包下的 webpack 卸载

# http://www.sosout.com/2018/07/21/lerna-repo.html


# 在根目录安装 npm 包，以 danger 为例：
yarn add danger --dev -W

```

## lerna 最佳实践
> https://juejin.cn/post/6844903911095025678#heading-7
```sh
## 1. 建议提交 commit 内容
yarn add commitizen cz-lerna-changelog --dev -W
## package.json 变为如下:
# {
#   "name": "root",
#   "private": true,
#   "scripts": {
#     "c": "git-cz"
#   },
#   "config": {
#     "commitizen": {
#       "path": "./node_modules/cz-lerna-changelog"
#     }
#   },
#   "devDependencies": {
#     "commitizen": "^3.1.1",
#     "cz-lerna-changelog": "^2.0.2",
#     "lerna": "^3.15.0"
#   }
# }

## 2. 强制使用 git-cz 提交, 做 commit lint 校验

yarn add husky@4.3.8 --dev -W

## 在 package.json 中增加如下配置
# "husky": {
#   "hooks": {
#     "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
#   }
# }


## 3. 校验提交代码
yarn add standard lint-staged --dev -W
# lint-staged staged 是 Git 里的概念，表示暂存区，lint-staged 表示只检查并矫正暂存区中的文件。一来提高校验效率，二来可以为老的项目带去巨大的方便。
## 在 package.json 中增加如下配置
#  "husky": {
#     "hooks": {
#       "pre-commit": "lint-staged",
#       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
#     }
#   },
#   "lint-staged": {
#     "*.js": [
#       "standard --fix",
#       "git add"
#     ]
#   },


## 4. 自动生成日志
npx lerna version

# lerna publish = lerna version && npm publish

# lerna version:
# 1. 调用 lerna version找出从上一个版本发布以来有过变更的 
# 2. package提示开发者确定要发布的版本号
# 3. 将所有更新过的的 package 中的 package.json 的 version 字段更新
# 4. 将依赖更新过的 package 的 包中的依赖版本号更新
# 5. 更新 lerna.json 中的 version 字段
# 6. 提交上述修改，并打一个 tag推送到 git 仓库

```