# Vue 中对数组变量的拦截监听

## 数组方法拦截

举个例子，在不改变readBook的方法前提下，想实现个拦截功能，添加埋点上报等功能，一般思路是这样的：
```js
function readBook() {

}

function readBookProxy() {
    readBook();
    console.log('You read this book.');
}
```

在平常开发中，由于全局变量较为分散，不知道在哪出修改了数组，如给数组添加了一项，这时我们就需要拦截下数组的Array方法，参考上述的思路：
```js
const arrMethod= 'push';

const originProto = Array.prototype;
const midProto = Object.create(originProto);

midProto[arrMethod] = function(...args) {
    const result = originProto[arrMethod].apply(this, args);

    console.log('U called array push method', args);

    return result;
}

// example
const list = [];
list.__proto__ = midProto;

list.push(1);
```

有些对象上不存在`__proto__`属性，这时就需要更改下思路
```js
const arr = [];
const methods = Object.getOwnPropertyNames(midProto);
methods.forEach(methods => {
    arr[method] = midProto[method];
});
```

实例上添加的方法是可以呗枚举的，这时我们就要设置成不可枚举，隐藏其该方法
```js
const arr = [];
const methods = Object.getOwnPropertyNames(midProto);
methods.forEach(methods => {
    Object.defineProperty(arr, method, {
        enumerable: false,
        writable: true,
        configurale: true,
        value: midProto[method]
    })
    arr[method] = midProto[method];
});
```

我们再执行下上面的例子，可以看到已经实例方法已经不能枚举出来了。


## 源码相关代码片段

1. [observer/array.js](https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/array.js)

```ts
import {def} from '../util/index'

// 缓存原始数组原型
const arrayProto = Array.prototype

// 基于数组原型创建新的数组原型
export const arrayMethods = Object.create(arrayProto)

// 需要拦截的方法
const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

// 拦截方法并进行监听
methodsToPatch.forEach(function(method) {
  // 缓存原始方法
  const original = arrayProto[method]
  // 实例上定义的方法是可以被枚举的，这里把 enumerable 设置成false
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args)
    // 获取当前的观察者
    const ob = this.__ob__

    // 获取新插入的参数
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }

    // 给新插入的参数定义响应式
    if (inserted) ob.observeArray(inserted)

    // 通知订阅者更新
    ob.dep.notify()

    // 返回结果
    return result
  })
})
```

2. [observer/index.js](https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/index.js)

```ts
// 是否有__proto__属性
const hasProto = '__proto__' in {}

// 获取拦截的数组方法名
const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

// 链接数组对象的原型到新数组对象原型上
function protoAugment(target, src: Object) {
  target.__proto__ = src
}

// 兼容那些对象上没有__proto__的数组，给他们添加拦截方法
function copyAugment(target: Object, src: Object, keys: Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    // def 是 Object.defineProperty()的方法封装
    def(target, key, src[key])
  }
}

// 判断是否为数组
if (Array.isArray(value)) {
  if (hasProto) {
    protoAugment(value, arrayMethods)
  } else {
    copyAugment(value, arrayMethods, arrayKeys)
  }
  this.observeArray(value)
}
```
