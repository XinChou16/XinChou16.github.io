# Dep

Dep核心

- 读取属性，触发getter，执行依赖收集
- 写入属性，触发setter，执行收集的依赖
- ref对字面量进行包装，包装成一个对象，使其具有响应式特性

```js
let active;

function watchEffect(cb) {
  active = cb;
  active();
  active = null;
}

function ref(initVal) {
  let value = initVal;
  let dep = new Dep();

  return Object.defineProperty({}, 'value', {
    get() {
      dep.depend();
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        value = newVal;
        dep.notify();
      }
    }
  });
}

class Dep {
  deps = new Set();
  depend() {
    if (active) {
      this.deps.add(active);
    }
  }
  notify() {
    this.deps.forEach(dep => dep());
  }
}
```

一个简单的使用例子
```js
// example
let x;
let y;

let f = num => num * 100 + 200;

x = ref(1);
watchEffect(() => {
  let r = f(x.value);
  console.log('r', r);
});
```

