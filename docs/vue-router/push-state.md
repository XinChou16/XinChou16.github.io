# pushState

## API 使用

```js
$router.push(params)
```

## 源代码

> [push-state.js](https://github.com/vuejs/vue-router/blob/dev/src/util/push-state.js)

```ts
import { inBrowser } from './dom'
import { genStateKey, setStateKey, getStateKey } from './state-key'
import { extend } from './misc'

// 检测是否支持 pushstate 特性
export const supportsPushState = /** ... */;

export function pushState (url?: string, replace?: boolean) {
  const history = window.history

  try {
    // replace 模式
    if (replace) {
      const stateCopy = extend({}, history.state)
      // key值为时间戳
      stateCopy.key = getStateKey()

      history.replaceState(stateCopy, '', url)
    } else {

        // push模式
      history.pushState({ key: setStateKey(genStateKey()) }, '', url)
    }
  } catch (e) {
    // 出错时的降级
    window.location[replace ? 'replace' : 'assign'](url)
  }
}

export function replaceState (url?: string) {
  pushState(url, true)
}
```
