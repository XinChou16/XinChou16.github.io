## setup

>准备工作

为了实现这个功能。需要拆分下功能点，循序渐进的实现，避免无从下手的困境，同时建议同时参考 vue 的源码。

需要实现的有：

- Reactive
- Observer
- Watcher
- Dep


为了观察数据变化，我们先写个简单的渲染函数，方便查看效果，如下：

```js
var render = (data) => {
    var $app = document.querySelector('#app');
    $app.innerHTML = Object.keys(data)
      .map(key => {
        return `<p>${key}: ${data[key]}</p>`;
      })
      .join('');
};

// 初始化调用一下
render({ count: 1 });

// size属性里也调用一下，确保数据更新时，界面更新
{
    // ...
    computed: {
        size() {
            const size = this.count + 1;
            render({
                count: this.count,
                size,
            });
            return size;
        }
    }
}
```

[→Vue实例]()