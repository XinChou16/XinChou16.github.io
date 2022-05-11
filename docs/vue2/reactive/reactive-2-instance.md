## instance

> 这里先实现 Vue 构造器，了解基本的运行流程

由于只需实现数据的响应式，我们这做了简化，只实现了对 data 的相关处理

```ts
import { stateMixin } from './state';

/**
 * Vue
 */
class Vue {
	constructor(opts) {
		console.log('init opts', opts);

		this.$options = opts;
        this._init();
	}
}

stateMixin(Vue);
```

解析：

- 挂载用户传递的 opts 到实例$options上，方便访问
- 执行原型上的 _init方法
- 处理数据，添加相关响应式

下一步我们将实现 _init 方法
