# dep

dep作为中间者，承担了 observer 和 watcher 的桥梁，本身很简单，如：

```js
let uid = 0;

class Dep {
	constructor() {
    this.id = uid++;
		this.subs = [];
	}
	addSub(sub) {
		this.subs.push(sub);
	}
	removeSub(sub) {
		const idx = this.subs.indexOf(sub);
		if (idx > -1) {
			this.subs.splice(idx, 1);
		}
	}
  // 添加订阅者，访问了this.xx
	depend() {
		if (Dep.target) {
			Dep.target.addDep(this);
		}
	}
  // 通知订阅者更新, this.xx 数据更新了
	notify() {
		const subs = this.subs.slice();
		for (let i = 0; i < subs.length; i++) {
			subs[i].update();
		}
	}
}

Dep.target = null;
```

1. 原型上的subs，存储了所有的订阅watcher
2. 定义了添加和移除订阅者的方法
3. depend可以为当前的订阅实例，添加数据依赖, Dep.target的唯一性，确保了添加的 watcher就是数据订阅的watcher
4. notify可以触发所有的订阅实例，通知它们订阅的数据发生了改变，对应的是执行watcher实例上的update方法
5. Dep.target表明当前正在处理的订阅watcher，同一时间只能存在一个watcher
