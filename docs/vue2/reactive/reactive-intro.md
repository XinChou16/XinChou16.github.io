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
