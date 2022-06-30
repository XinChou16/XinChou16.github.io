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

DEMO首页完整源码

```html
<button id="plus">+</button>
<button id="minus">-</button>

<script type="module">
  import Vue from './index.js';

  var render = (data) => {
    var $app = document.querySelector('#app');
    $app.innerHTML = Object.keys(data)
      .map(key => {
        return `<p>${key}: ${data[key]}</p>`;
      })
      .join('');
  };
  plus.onclick = () => vm.count++;
  minus.onclick = () => vm.count--;

  var vm = window.vm = new Vue({
    data: {
      count: 1,
    },
    computed: {
      size() {
        const val =  this.count + 1;
        console.log('size evaluate', val);

        render({
          count: this.count,
          size: val,
        });

        return val;
      }
    }
  });

  console.log(vm);

</script>

```

## 目录

包括以下几部分

- [1. setup准备工作](./reactive-1-start.md)
- [2. instance工作流程](./reactive-2-instance.md)
- [3. state的实现](./reactive-3-state.md)
- [4. dep的实现](./reactive-4-dep.md)
- [5. observer的实现](./reactive-5-observer.md)
- [6. watcher的实现](./reactive-6-watcher.md)
