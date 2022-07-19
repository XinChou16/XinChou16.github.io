# Promise A plus

## Reference

- [promise-aplus](https://github.com/promises-aplus/promises-spec)
- [promise-polyfill](https://github.com/taylorhakes/promise-polyfill/blob/master/src/index.js)

## Procedure 1

Example:
```js
var prom = new Promise(resolve => {
    resolve();
});
```

Principle
```js
function Promise(fn) {
    // 三种状态，这里简化为0，1，2
    this._status = 0;
    // 存储resolve和reject的值
    this._value = void 0;
    // 存储的回调
    this._defereds = [];

    // 执行fn
    doResolve(fn, this);
}

function doResolve(fn, self) {
    fn(
        // 第一个参数为 resolve，传入参数，执行内部方法，resolve
        value => {
            resolve(value, self);
        },
        // 第二个参数为 reject, 同理，传入拒绝理由，执行内部方法 reject
        reason => {
            reject(reason, self);
        }
    );
}

function resolve(value, self) {
    // 改变状态
    self._status = 1;
    // 保存值，后续执行的时候有用
    self._value = value;
}

function reject(value, self) {
    self._status = 2;
    self._value = value;
}
```

## Procedure 2

Example:
```js
new Promise((resolve) => (
    resolve('1');
))
.then(res => console.log(res));
```

```js
function resolve(value, self) {
    // 改变状态
    self._status = 1;
    // 保存值，后续执行的时候有用
    self._value = value;
    // 这里增加finale方法，表示这个promise已经resolved，状态不能被改变
    finale(self);
}

function reject(value, self) {
    self._status = 2;
    self._value = value;
    finale(self);
}

function finale(self) {
    var i = self._defereds.length;

    while(i--) {
        // 一依次执行，链式调用链上的保存的回调函数
        handle(self, self._defereds[i]);
    }

    // 执行完成后，清空回调存储栈
    self._defereds.length = 0;
}

function handle(self, defered) {
    // 当状态还没有resoved或rejected，则保存这个回调
    if (self.status === 0) {
        self._defereds.push(defered);
        return;
    }
    
    // resolved 或者 rejected 的情形
    // 下一个时间循环执行,实际需要兼容多个运行环境，这里只选取了浏览器中的定时器
    setTimeout(function() {
        // 根据当前 promsie 的状态获取回调
        var cb = self._status === 1
            ? defered.onResolved
            : defered.onRejected;
        var ret;

        try {
            ret = cb(self._value);
        } catch (e) {
            reject(e, self);
        }
        
        // 确保多个then调用时，执行完一个，接着执行下一个then
        resolve(ret, self);
    });
}

Promise.prototype.then = function(fn) {
    // then方法，本质上是创建了一个 Promsise 的实例
    var prom = new this.constructon(() => {});

    // 当前回调
    handle(this, new Hanlder(fn[0], fn[1], prom));

    // 返回创建的promise,确保能够链式调用
    return prom;
}

function Handler(onResolved, onRejcted, promise) {
    // 保存resolved, rejected回调方法
    this.onResolved = onResolved;
    this.onRejected = onRejected;
    this.promise = promise;
}

```