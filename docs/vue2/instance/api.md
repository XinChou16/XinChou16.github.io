# instance

路径：`src/core/instance/index.js`

## 构造器

定义 vue 原型上的方法

- `initMixin`
- `stateMixin`
- `eventsMixin`
- `lifecycleMixin`
- `renderMixin`

## initMixin

初始化，实例的开始阶段执行的相关逻辑方法

- 定义 `Vue.prototype._init` 方法
- _init 是实例的初始化方法，每个实例从这个方法开始


## stateMixin

- 代理 `Vue.prototype.$data` 和 `Vue.prototype.$props` 对象到 vm 实例上，方便属性访问
- 定义 `Vue.prototype.$set` 方法
- 定义 `Vue.prototype.$delete` 方法
- 定义 `Vue.prototype.$watch` 方法


## eventsMixin

- 定义 `Vue.prototype.$on` 方法
- 定义 `Vue.prototype.$once` 方法
- 定义 `Vue.prototype.$off` 方法
- 定义 `Vue.prototype.$emit` 方法


## lifecycleMixin

- 定义 `Vue.prototype._update` 方法
- 定义 `Vue.prototype.$dorceUpdate` 方法
- 定义 `Vue.prototype.$destroy` 方法


## renderMixin

- 定义 `Vue.prototype.$nextTick` 方法
- 定义 `Vue.prototype._render` 方法
- 定义 `Vue.prototype._c` 等 render helper 方法
- 定义 `Vue.prototype._render` 方法

## instance

`Vue.prototype._init()`初始化方法里的内部逻辑执行相关顺序：

- `initLifecycle`: 初始化生命周期
- `initEvents`: 初始化事件
- `initRender`: 初始化渲染器
- `callHook(beforeCreate)`: 调用Hook
- `initInjections`: 初始化 inject
- `initState`: 初始化数据
- `initProvide`: 初始化 provide
- `callHook(created)`: 调用Hook
- `$mount`: 挂载
