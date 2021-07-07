# dispatch 实现

- [source code](https://github.com/XinChou16/MIX/tree/master/Vue/vuex/own-vuex-v4/vuex.js)
- [demo url](https://xinchou16.github.io/MIX/Vue/vuex/own-vuex-v4/main.html)

## 使用

类型声明：
```ts
dispatch(type: string, payload?: any, options?: Object): Promise<any>
```

实际使用：
```js
// vm
increment() {
    store.dispatch('incrementAction', 2).then(res => {
        console.log('increment resolved', {res});
    })
}
```

## 实现

```js
// 内部保存的 actions map表
this._actions = Object.create(null)

// 绑定外部 dispatch 方法到当前 store 上
this.dispatch = function(type, payload) {
  return dispatch.call(store, type, payload)
}

// 注册所有的 actions 方法
if (actions) {
  Object.keys(actions).forEach(function actionIterator(type) {
    registerActions(store, type, actions[type])
  })
}

// 包裹 actions 方法，传入 store 的一些参数，如 state, getters, commit, dispatch 等方法
// 默认返回一个 promise, 如果结果不是的话，则会自动包装成 promise
function registerActions(store, type, handler) {
  const entry = store._actions[type] || (store._actions[type] = [])
  entry.push(function wrappedActionHandler(payload) {
    var result = handler(
      {
        state: store.state,
        getters: store.getters,
        commit: store.commit,
        dispatch: store.dispatch
      },
      payload
    )

    if (!isPromise(result)) {
      return Promise.resolve(result)
    }

    return result
  })
}
```
