# state

这一节主要对数据进行响应式处理和添加依赖追踪

## _init方法

主要对传入的选项进行处理，这里我们只处理，data 和 computed 属性

```js
export function stateMixin(Vue) {
	Vue.prototype._init = function () {
		initState(this);
        initComputed(this);
	};
}
```

## initState

初始化data数据对象，做了以下几件事情

- 将选项数据传递给别名 _data
- 遍历_data数据，代理到当前实例，方便 vm.xx 的调用
- 执行observer，添加响应式依赖

```js
function initState(vm) {
	const data = (vm._data = vm.$options.data);

	// proxy data
	Object.keys(data).forEach((key) => {
		proxy(vm, '_data', key);
	});

	// observe data
	observe(data);
}

function proxy(obj, srcKey, key) {
	Object.defineProperty(obj, key, {
		enumerable: true,
		configurable: true,
		get: function proxyGetter() {
			return this[srcKey][key];
		},
		set: function proxySetter(val) {
			this[srcKey][key] = val;
		},
	});
}
```

当访问 vm.count 时，实际访问的是 vm._data.count，源码中做了重复性探测处理，避免属性重复

## computed

对 computed 的处理，类似于data，遍历所有属性，不同的是，内部添加了watcher，来追踪变化，实际上 computed 的value实际上是所依赖 watcher 的 value


```js
function initComputed(vm) {
  const computed = vm.$options.computed;
  const watchers = vm._computedWatchers = Object.create(null);

  for (let key in computed) {
    const getter = computed[key];

    watchers[key] = new Watcher(
      vm,
      getter,
      noop,
      { key, type: 'computed' }
    );

    defineComputed(vm, key, getter);
  }
  // console.log('watchers', vm._computedWatchers===watchers);
}
```

接着实现 defineComputed，来实现 getter，返回数据，这里是调用了个高级方法来返回 getter，实际代码里，还兼容了 SSR的情形，SSR里直接调用传递的方法
实际还有 setter的情形，即可以设置数据，不一定只是获取数据

```js

function defineComputed(vm, key, getter) {
  console.log('defineComputed', key);
  const def = {
    enumerable: true,
    configurable: true,
    get: makeComputedGetter(vm, key)
  };

  Object.defineProperty(vm, key, def);
}

function makeComputedGetter(vm, key) {
  return function computedGetter() {
      const watcher = vm._computedWatchers[key];
      // 添加当前依赖
      if (Dep.target) {
        watcher.depend();
      }
      console.log('computedGetter', watcher);
      return watcher.value;
    }
}
```

watcher, observe的实现在后面再详细介绍

