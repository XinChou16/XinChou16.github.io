# Clone in js

## 1. Shallow clone

适用于基本类型和 plain object，如：

- null
- undefined
- string
- number
- boolean
- symbol
- bigint
- object

[源码](https://github.dev/XinChou16/MIX/blob/master/utils/cloneShallow.js)

```ts
function shallowClone(obj) {
    if (typeof obj !== 'object' || !obj) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.slice();
    } else {
        const cloned = Object.create(null);
        for (let key in obj) {
            cloned[key] = obj[key];
        }
        return cloned;
    }
}
```

## 2. Deep clone

参考：
- [源码](https://github.dev/XinChou16/MIX/blob/master/utils/cloneDeep-1.js)
- [MDN - JSON.Stringify](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN - Structured](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [blog - 1](https://cloud.tencent.com/developer/article/1540790)
- [blog - 2](https://blog.csdn.net/cc18868876837/article/details/114918262)

先列出测试对象, 基本涵盖了所有的测试数据类型

```ts
// test data for deep clone function
const obj1 = {
    // 1. 基础类型
    ['1_num']: 1,
    ['1.1_num']: [NaN, Infinity],
    ['2_str']: 'cool',
    ['3_bool']: true,
    ['4_null']: null,
    ['5_undef']: undefined,
    ['6_symb']: Symbol('cloneMe'),
    ['7_big']: BigInt(1n),
    // 2. 引用类型
    ['8_obj']: {
        name: 'obj',
        id: 1,
    },
    ['9_arr']: ['r', 'g', 'b'],
    ['10_func']: function func() {
        console.log('func');
    },
    ['11_date']: new Date(),
    ['12_reg']: new RegExp('/\d{10}/ig'),
    ['13_map']: new Map([ ['id', '100'] ]),
    ['14_set']: new Set([1, 2, 4]),
    // 3. 其他
    [Symbol('15_unique')]: 'only ME',
};

// 4. 不可枚举属性
Object.defineProperty(obj1, '16_inenumerable', {
    enumerable: false,
    value: 'not enumerable property'
});

// 5. 设置原型对象
Object.setPrototypeOf(obj1, {
    ['proto_17']: 'proto'
});

// 6. 循环引用
obj1['18_loop'] = obj1;
```

### 2.1 method 1

```ts
function deepCloneSimple(obj) {
    try {
        // 无法拷贝
        // 5_undef
        // 6_symbol
        // 7_big 报错
        // 10_func
        // 11_date 变成字符串
        // 12_reg 变成空对象
        // 13_map 变成空对象
        // 14_set 变成空对象
        // 18_loop 报错
        return JSON.parse(JSON.stringify(obj));
    } catch (o_O) {
        return obj;
    }
}
```

### 2.2 method 2

```ts
function deepClone2(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    // 无法拷贝的情形
    // 7_big 报错
    // 11_date 变成字符串
    // 12_reg 变成空对象
    // 13_map 变成空对象
    // 14_set 变成空对象
    // 15_symbol 丢失
    // 16_inenumerable 丢失
    // 18_loop 报错
    
    let cloned = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const val = obj[key];
        if (val && typeof val === 'object') {
            cloned[key] = deepClone2(val);
        } else {
            cloned[key] = val;
        }
    }

    return cloned;
}
```

### 2.3 method ultra

```ts
/**
 * deepClone
 * @param {*} value to be copied value
 * @param {*} cache cache for obj
 * @returns 
 */
function deepClone3(value, cache = new WeakMap()) {
    if (!isObject(value)) {
        return value;
    }

    // circular loop
    const exist = cache.get(value);
    if (exist) {
        return exist;
    }

    // 函数
    if (typeof value === 'function') {
        return new Function(`return ${value.toString()}`)();
    }
    // 日期 正则
    else if ([Date, RegExp].includes(value.constructor)) {
        return new value.constructor(value);
    }
    // Map
    else if (value instanceof Map) {
        const ret = new Map();
        cache.set(value, ret);

        // 将原 Map 中的数据全部拷贝到新 Map 中
        value.forEach((value, key) => {
            ret.set(
                key,
                isObject(value) ? deepClone3(value, cache) : value
            );
        });
        return ret;
    }
    // Set
    else if (value instanceof Set) {
        const ret = new Set();
        cache.set(value, ret);

        // 将原 Set 中的数据全部拷贝到新 Set 中
        value.forEach(value => {
            ret.add(
                isObject(value) ? deepClone3(value, cache) : value
            );
        });
        return ret;
    }
    else {
        // 其他类型，Array Object .etc
        
        // 获取所有的key, 包括Symbol等不可枚举的
        // 不需要symbol key，也可使用 getOwnPropertyNames
        const keys = Reflect.ownKeys(value);

        // descriptors 获取数据的 enumerable等属性，如不需要拷贝不可枚举的属性，可以去除
        const descriptors = Object.getOwnPropertyDescriptors(value);

        // 基于原型创建新的对象，如果不需要拷贝原型上的属性，第一个参数传入null即可
        const ret = Object.create(Object.getPrototypeOf(value), descriptors);

        keys.forEach(key => {
            const val = value[key];
            ret[key] = isObject(val) ? deepClone3(val, cache) : val;
        });

        cache.set(value, ret);

        return ret;
    }
}

function isObject(obj) {
    return (obj && typeof obj === 'object') || typeof obj === 'function';
}

```


