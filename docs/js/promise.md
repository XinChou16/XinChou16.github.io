# A+ Promise implementation

## features

- 三种状态，fulfilled, rejected, pending
- 构造器接收一个参数，一个函数

## step 1

```js
class MyPromise {
    status = 'pending';
    value = null;
    thenCbs = [];
    catchCbs = [];

    constructor(cb) {
        cb(
            this.onSuccess.bind(this),
            this.onFail.bind(this)
        );
    }
    onSuccess(value) {
        queueMicrotask(() => {
            this.status = 'fulfilled';
            this.value = value;
            this.runCallbacks();
        });
    }
    onFail(reason) {
        queueMicrotask(() => {
            this.status = 'rejected';
            this.reason = reason;
            this.runCallbacks();
        });
    }
    runCallbacks() {
        if (this.status === 'fulfilled') {
            this.thenCbs.forEach(cb => cb(this.value));
        } else if (this.status === 'rejected') {
            this.catchCbs.forEach(cb => cb(this.value));
        }
    }
    then(thenCb, catchCb) {
        thenCb && this.thenCbs.push(thenCb);
        catchCb && this.catchCbs.push(catchCb);
    }
}

// usage
const executor = (resolve, reject) => {
    resolve('awesome');
}
new Promise(executor).then(data => {
    console.log(data);
});
```
