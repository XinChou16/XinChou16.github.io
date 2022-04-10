# vue data 初始化

步骤：

- 获取数据对象，根据对象或者函数
- 遍历数据对象，添加 _data 的代理，原数据在 _data 上

关键：

- 代理 $options.data 到 vm 实例上，需要唯一的 KEY，避免冲突
- 响应式依赖的追踪

TODO:

- 追踪data数据的响应式依赖 observe 方法

```ts
{
  function initState(vm) {
    if (opts.data) {
      initData(vm)
    } else {
      observe((vm._data = {}), true /* asRootData */)
    }
  }

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  }

  // 代理对象，提供源KEY，和目标KEY
  // vm.count === vm._data.count
  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
  }

  // 初始化data对象
  function initData(vm) {
    var data = vm.$options.data

    // 函数或者对象
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}
    
    // proxy data on instance
    var keys = Object.keys(data)
    var props = vm.$options.props
    var methods = vm.$options.methods
    var i = keys.length

    // 遍历data对象
    while (i--) {
      var key = keys[i]

      // 校验 key是否重复，不为保留key
      {
        if (methods && hasOwn(methods, key)) {
          warn('Method "' + key + '" has already been defined as a data property.', vm)
        }
      }
      if (props && hasOwn(props, key)) {
        warn('The data property "' + key + '" is already declared as a prop. ' + 'Use prop default value instead.', vm)
      } else if (!isReserved(key)) {
        proxy(vm, '_data', key)
      }
    }

    // observe data
    observe(data, true /* asRootData */)
  }

  function getData(data, vm) {
    try {
        // data为函数，绑定当前实例，并传入当前实例
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, 'data()')
      return {}
    }
  }
}
```
