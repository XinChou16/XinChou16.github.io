# Vue.mixin()方法

> 用来全局混入

混入传入的选项，内部其实是调用合并选项的方法来合并至全局options上

```js
// src/core/global-api/mixin.js

function initMixin(Vue) {
  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };
}
```
