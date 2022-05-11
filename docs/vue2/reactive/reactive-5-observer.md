# observer

给用户定义的数据添加响应式依赖追踪，拦截数据的读取和赋值，通知订阅的watcher，来更新数据

## observe方法

首先是observer函数，进行一些判断，判断是否需要添加响应式，目前只针对对象进行添加，数组需要特殊处理，原型拦截特殊处理，在这先不考虑

```js
function observe(value) {
	console.log('v- observe', value);

	let ob;

	if (hasOwn(value, '__ob__')) {
		ob = value.__ob__;
	} else if (Array.isArray(value) || isPlainObj(value)) {
		ob = new Observer(value);
	}

	return ob;
}
```

## Observer实例

- 添加 dep实例，存储当前的订阅者
- 遍历对象上的数据，添加响应式依赖追踪，主要是 defineReactive方法

```js
class Observer {
	constructor(value) {
		this.value = value;
		this.dep = new Dep(); // 第一个dep

		def(value, '__ob__', this);

		this.walk(value);
	}

	walk(obj) {
		let keys = Object.keys(obj);
		keys.forEach((key) => {
			defineReactive(obj, key);
		});
	}
}
```

## defineReactive方法

- 拦截 vm._data 上的数据属性，数据get和set时，进行一些额外处理
- get数据时，保存当前 evaluate 的 watcher实例，表明依赖了这个数据
- set数据时，通知所有的依赖 watcher, 触发 watcher上的update方法，执行相应操作更新处理

```js
function defineReactive(obj, key, val) {
	console.log('reactive', obj, key);
	val = val || obj[key];

	const dep = new Dep();

	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: true,
		get() {
			console.log('get', { key, val });
      // 添加依赖追踪 watcher
      // computed 初始时的，如果有依赖了其他变量，读取
      // 这个变量时会执行
			if (Dep.target) {
				dep.depend();
			}
			return val;
		},
		set(newVal) {
			console.log('set', { key, val, newVal });
			if (newVal === val) {
				return;
			}
			val = newVal;

			dep.notify();
		},
	});
}
```