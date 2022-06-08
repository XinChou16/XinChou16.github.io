# computed响应式数据变化实现


## 目标

实现如下的功能：定义变量count，和计算属性size，当count变化时，size属性也自动变化。

- [demo](https://xinchou16.github.io/MIX/Vue/v2/principle/lib-vue2-observer/demo/)
- [src code](https://github.com/XinChou16/MIX/blob/master/Vue/v2/principle/lib-vue2-observer/demo/index.html)

```vue
<div id="app">
    <p>count: </p>
    <p>size: </p>
</div>

new Vue({
    data: {
        count: 1,
    },
    computed: {
        size() {
            return this.count + 1;
        }
    }
});
```

## 目录

包括以下几部分

- [1. setup准备工作](./reactive-1-start.md)
- [2. instance工作流程](./reactive-2-instance.md)
- [3. state的实现](./reactive-3-state.md)
- [4. dep的实现](./reactive-4-dep.md)
- [5. observer的实现](./reactive-5-observer.md)
- [6. watcher的实现](./reactive-6-watcher.md)
