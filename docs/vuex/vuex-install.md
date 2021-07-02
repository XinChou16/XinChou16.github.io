# 插件的注册

[注册源码](https://github.com/XinChou16/MIX/tree/master/Vue/vuex/own-vuex-v1/vuex.js)

注册后，我们在每个组件中可以使用 this.\$store 来访问当前的 store 对象。

不同版本的插件注册：

1. vue 2.x 版本：主要是通过全局 mixins 的方式来实现的，即在 beforeCreate 钩子函数中，执行 applyMixin 方法。

```js
Vue.mixin({beforeCreate: vuexInit})
```

2. vue 1.x 版本：劫持原型上的 \_init 方法，并执行 applyMixin 方法来实现。

```js
const _init = Vue.prototype._init
Vue.prototype._init = function(options = {}) {
  options.init = options.init ? [vuexInit].concat(options.init) : vuexInit
  _init.call(this, options)
}
```

applyMixin 混入方法：

1. 根组件：判断选项$options上是否存在store对象，有的话，就赋值给$store，实现根组件的注入
2. 非根组件：判断当前组件的父组件是否存在$store，有的话，就赋值给$store，从而实现了子组件的注入，更深层次的组件也是通过这种方式来实现注入的。

```js
// vuexInit方法
const options = this.$options;
if (options.store) {
    this.$store = options.store;
} else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store;
}
```
