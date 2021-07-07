# dispatch 实现

- [source code](https://github.com/XinChou16/MIX/tree/master/Vue/vuex/own-vuex-v5/vuex.js)
- [demo url](https://xinchou16.github.io/MIX/Vue/vuex/own-vuex-v5/main.html)

## 使用

类型声明：
```ts
subscribe(handler: Function, options?: Object): Function
```

具体使用：
```js
// vm
const unSubscribe = store.subscribe((mutation, state) => {
  console.log('mutation: %s, payload: %s', mutation.type, mutation.payload, state)
})

setTimeout(() => {
  unSubscribe()
  console.log('unsubscribe')
}, 2000)
```

## 实现

```js
// 保存所有subscribers
this._subscribers = [];

// 调用一次就存储一次 订阅者的方法，并返回取消订阅函数
// 根据传入的选项，来决定插入的方式
subscribe(handler, options = {}) {
    const subs = this._subscribers;

    if (subs.indexOf(handler) < 0) {
        subs[options.prepend ? 'unshift' : 'push'](handler);
    }

    return () => {
        var index = subs.indexOf(handler);
        if (index > -1) {
            subs.splice(index, 1);
        }
    }
}
```
