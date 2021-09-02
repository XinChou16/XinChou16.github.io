# Vue provide/inject
# provide/inject 方法

> 深层次组件通信方法 [API](https://cn.vuejs.org/v2/api/#provide-inject)
[src](https://github.com/vuejs/vue/blob/v2.2.0/src/core/instance/inject.js)


```js
export function initInjections (vm: Component) {
  // 从组件选项中获取 provide, inject值
  const provide = vm.$options.provide
  const inject: any = vm.$options.inject

  // 注册provide, 将provide的值挂载到当前实例私有属性上
  if (provide) {
    // provide的值为对象或函数的情形，最终还是使用对象
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide
  }

  // 注册Inject
  if (inject) {
    const isArray = Array.isArray(inject)

    // inject 的值为数组和对象的两种情况
    const keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]

      // 获取需要注册的key值
      const provideKey = isArray ? key : inject[key]
      let source = vm

      // 遍历组件实例，获取provide值
      while (source) {
        if (source._provided && source._provided[provideKey]) {

          // 获取到后挂载到当前实例上
          vm[key] = source._provided[provideKey]
          break
        }
        // 不断往上级父组件进行查找
        source = source.$parent
      }
    }
  }
}
```
