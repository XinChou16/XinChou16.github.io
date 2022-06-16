# Build your own vuex

## 源码解析

- [vuex 插件的安装](./vuex-install.md)
- [vuex commit 方法解析](./vuex-commit.md)
- [vuex dispatch 方法解析](./vuex-dispatch.md)
- [vuex state变化的订阅解析](./vuex-subscribe.md)


## 示例源码

[完整源码目录](https://github.com/XinChou16/MIX/tree/master/Vue/vuex)


### [vuex v1](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v1/vuex.js)

**实现功能：**

- vuex如何注入到 vue view model 实例中
- vuex 
- vue 1.x 和 2.x 版本的 vuex 安装


### [vuex v2](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v2/vuex.js)

**基于 v1 添加的功能：**

- 定义了 Vuex Store 构造器方法
- 初始化了 store 的 state
- 实现了 commit 方法
- mutation的初始化和注册
- 例子中可以通过 mutation 实现简易的状态变更


### [vuex v3](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v3/vuex.js)

**基于 v2 添加的功能：**

- 初始化了 store 中的 getter，计算属性
- vm 实例可以使用 store 的计算属性
- store内部定义了一个 vm 实例，来实现响应式


### [vuex v4](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v4/vuex.js)

**基于 v3 添加的功能：**

- 添加了 dispatch 方法
- 实现了 actions 的定义和处理
- actions的注册和安装


### [vuex v5](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v5/vuex.js)

**基于 v4 添加的功能：**

- 添加了 subscribe 方法，方便用户订阅 state 变化时的事件
- 内部维护了一个订阅队列，在commit改变 state时，依次调用


### [vuex v6](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v6/vuex.js)

**基于 v5 添加的功能：**

- 添加了 registerModule 方法，动态注册 module
- 添加了 unRegisterModule 方法，动态解绑 module


### [vuex v7](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v7/vuex.js)

**基于 v6 添加的功能：**

- 添加了 replaceState 方法
- 添加了 watch 方法
- 添加了内部的 _withCommit 方法，开发环境监听 state 的改变是否来自 mutation


### [vuex v8](https://github.com/XinChou16/MIX/blob/master/Vue/vuex/own-vuex-v8/vuex.js)

**基于 v7 添加的功能：**

- 添加了子模块的注册和安装
- 内部处理子模块的 state 的读取和赋值

