# commit 方法原理

>一般使用的时候，都是 new Store()，传入参数来实现的，核心在于 Store构造器的实现。options传入 state，store实例对象上也有个state，也是响应式的。

[vuex-v2](https://github.com/XinChou16/MIX/tree/master/Vue/vuex/own-vuex-v2/vuex.js)

### 1. 使用：
commit的使用方法如下：
```ts
function commit(type: string, payload?: any)

commit('inc', 1);

// store
{
  mutations: {
    inc(state, payload) {
      state.count = payload;
    }
  }
}
```

接收两个参数，类型，和传递的数据，对应注册的mutations上也接收两个参数，第一个始终为state(根store)，第二个为数据。

### 2. 内部实现

Store构造器，初始化的时候，会将所有的mutations注册安装，保存到私有数据 _mutations上，每个mutation均为数组，传入store.state数据

```js
// 安装模块
installModules(store, options);

// 注册所有的mutations
if (mutations) {
  Object.keys(mutations).forEach(function mutationIterator(type) {
    registerMutations(store, type, mutations[type]);
  });
}

// 注册
function registerMutations(store, type, handler) {
  const entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrapperedMutationHandler(payload) {
      return handler(store.state, payload);
  });
}

// commit方法
commit(type, payload) {
  const entry = this._mutations[type];

  if (!entry) {
    console.log(`===type===: ${type} not exist`);
    return;
  }

  entry.forEach(function mutationIterator(handler) {
    console.log(`===exe commit===: ${type}, payload: ${payload}`);
    handler(payload);
  });
}
```
