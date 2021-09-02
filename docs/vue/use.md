# Vue.use()方法

>用来注册全局的插件

可以接收一个对象和一个函数

```js
// src/core/global-api/use.js

function initUse (Vue) {
  Vue.use = function (plugin) {
    // 确保只安装一次
    if (plugin.installed) {
      return
    }

    // 获取所有的参数，并把Vue塞进第一个参数里
    var args = toArray(arguments, 1)
    args.unshift(this)

    // 处理传入参数是函数和对象两种格式
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else {
      plugin.apply(null, args)
    }

    // 添加安装后的标记
    plugin.installed = true

    return this
  }
}
```
