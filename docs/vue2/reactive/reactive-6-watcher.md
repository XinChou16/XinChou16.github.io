# watcher

Vue 中有三种Watcher，对应 computed watcher, render watcher, user watcher,这里讨论的是第一种

首先看构造器

- 定义了一些属性，deps用来保存dep, getter是传来的getter方法
- depIds用来记录添加的dep，避免重复添加
- 最后执行了 get方法，获取当前的value，这里没有考虑lazy条件，lazy条件下，不是立即求值的

```js
class Watcher {
  constructor(vm, getter, cb, opts) {
    this.vm = vm;
    this.id = ++uid;
    this.deps = [];
    this.depIds = new Set();

    // debug info
    this.bindKey = opts.key;
    this.watchType = opts.type;

    if (typeof getter === 'function') {
      this.getter = getter;
    }

    this.value = this.get();
  }
}
```

接着看原型上的get方法

- get用来 evaluate value的，执行前，现将全局唯一的 Dep.target设置为当前watcher实例
- 然后，observe中的defineReactive方法里，会判断这个target实例存不存在，然后添加依赖
- 最后，读取完值后，重置target 为空

其他定义的方法

- update方法，是dep类的notify方法调用的，实际执行了 run方法
- run方法，首先会执行getter，获取最新的value, diff一下，如果不同，则更新为最新的value
- addDep, 是否把传入的dep添加进来，用了depIds Set数据结构来存储id，避免重复添加

```js
class Watcher {
  get() {
    Dep.target = this;
    const value = this.getter.call(this.vm, this.vm);
    Dep.target = null;
    return value;
  }

  update() {
    return this.run();
  }

  run() {
    const value = this.get();
    const oldValue = this.value;

    if (value !== oldValue) {
      this.value = value;
    }
  }

  addDep(dep) {
    if (!this.depIds.has(dep.id)) {
      this.deps.push(dep);
      this.depIds.add(dep.id);
      dep.addSub(this);
    }
  }
}
```
