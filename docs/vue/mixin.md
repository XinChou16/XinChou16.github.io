# Vue.mixin()方法

> 用来全局混入

混入传入的选项，内部其实是调用合并选项的方法来合并至全局options上

## v2.x版本
```js
// src/core/global-api/mixin.js

function initMixin(Vue) {
  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };
}
```

## v3.x版本

>[src](https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/apiCreateApp.ts#L231)

```ts
// app实例选项的工厂函数
function createAppContext(): AppContext {
  return {
    // ...
    app: null as any,
    mixins: [],
  }
}

// 获取app对象选项
const context = createAppContext()

// 构造app对象
const app = {
    mixin(mixin: ComponentOptions) {
        // 只在options api 才有的特定方法
        if (__FEATURE_OPTIONS_API__) {
            // 保存到选项中的mixins数组中，确保唯一
            if (!context.mixins.includes(mixin)) {
                context.mixins.push(mixin)
            }
        }
        return app
    },
}
```
