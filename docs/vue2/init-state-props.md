# vue props 初始化

步骤：

- 获取数据对象，根据对象
- 校验 prop
- 添加代理 便于vm直接访问

TODO:

- 定义响应式 definedReactive
- 校验函数

```ts
{

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;

    // 最先处理
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }


  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }

    // 循环 props 的每个 key
    var loop = function ( key ) {
        // 保存 KEY，作用？？
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      
        defineReactive$$1(props, key, value);
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        //   代理
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

}
```
