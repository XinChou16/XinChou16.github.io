# interface 接口



## 0710

TS 函数的类型声明

- [vuex@3.0.0](https://github.com/vuejs/vuex/blob/v3.0.0/types/helpers.d.ts)
- [ts docs](https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types)

```TS
interface Func {
    (map: string): boolean
}

let myFunc: Func = (map) => true;

myFunc('1');
```

```ts

type Computed = () => any;

type Dictionary<T> = {
  [key: string]: T;
};

interface GetTruthy {
  (map: string): boolean;
}

interface Mapper<R> {
  (map: string[]): Dictionary<R>;
  (map: Dictionary<string>): Dictionary<R>;
}
```

泛型
未使用泛型
```ts
type Getter = (state, getters, rootState, rootGetters) => any;

export interface GetterTree {
  [key: string]: Getter
}
```

使用泛型
```ts
type Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any;

export interface GetterTree<S, R> {
  [key: string]: Getter<S, R>
}

```