# Vue.use()方法

>用来注册全局的插件

可以接收一个对象和一个函数

## v2.x版本
>[src](https://github.com/vuejs/vue/blob/v2.3.0/src/core/global-api/use.js)

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

## v3.x版本

>[src](https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/apiCreateApp.ts#L213)

```ts
// 新建SET，存储所有的插件列表
// 每个插件只会安装一遍
const installedPlugins = new Set()

const app = {
    //...
    use(plugin, ...options) {
        // 检查是否安装过，开发环境直接警告
        if (installedPlugins.has(plugin)) {
            __DEV__ && warn(`Plugin has already been applied to target app.`)
        }
        
        // 插件是个对象，且有install方法
        else if (plugin && isFunction(plugin.install)) {
            // 存储插件
            installedPlugins.add(plugin)
            // 执行安装注册方法
            plugin.install(app, ...options)
        }
        
        // 插件是个函数
        else if (isFunction(plugin)) {
            installedPlugins.add(plugin)
            plugin(app, ...options)
        }

        // 返回实例，可以链式调用
        return app
    },
}
```