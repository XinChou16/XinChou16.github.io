# Vue.component(), directive(), filter()方法

> 全局方法别名

可以接收一个对象和一个函数

```js
// src/core/global-api/assets.js

function initAssetRegisters(Vue) {
  // 组件选项类型：三种[component, filter, directive]
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      /**
       * Vue.filter('upper'), -> this.options.filters.upper
       * Vue.filter('upper', () => {}), -> this.options.filters.upper
       *
      */
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        // 如果是组件选项，则判断组件名是否是保留标签名称
        // isReservedTag目前在配置里是始终返回 false, 在哪覆盖的，后续再补充上@todo
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
                'id: ' +
                id
            );
          }
        }

        // 如果当前为组件，且传入的选项为对象，则根据名称来注册
        // 创建继承实例
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = Vue.extend(definition);
        }

        // 如果是指令，且为函数，则将该方法，作为 bind, update的回调，如果为对象，则自动使用
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }

        // 
        this.options[type + 's'][id] = definition;

        return definition;
      }
    };
  });
}
```
