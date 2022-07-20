# webpack 核心 Compiler 实现


Compiler 类是 webpack的运行入口，每次打包时，会生成一个实例，里面挂载了许多打包的数据，在这里简化了结构，力求了解关键性打包流程

## 1. Compiler类初始化

1. 解析 import 语句
2. 保存依赖图
3. 生成入口代码

```js
/**
 * 1. 定义 Compiler 类
 */

class Compiler {
    constructor(options) {
        const { entry, output } = options;

        this.entry = entry;
        this.output = output;
        this.modules = [];
    }
    // 构建启动
    run(){}
    // 重写 require 函数，输出 Bundle
    generate() {}
}
```

## 2. Compiler 中的import导入解析

webpack.config.js

```js
const path = require('path')

module.exports = {
    // entry: path.resolve(__dirname, './src/index.js'),
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    }
}
```


compiler.js

```js
/**
 * 2. 解析入口文件，获取 AST
 */
const fs = require('fs');
const parser = require('@babel/parser');
const options = require('../webpack.config');

const Parser = {
    getAst: path => {
        // 读取入口文件
        const content = fs.readFileSync(path, 'utf-8');
        // 将文件内容转为AST抽象语法树
        return parser.parse(content, {
            sourceType: 'module'
        })
    }
}

class Compiler {
    constructor(options) {
        const { entry, output } = options;

        this.entry = entry;
        this.output = output;
        this.modules = [];
    }
    // 构建启动
    run() {
        const ast = Parser.getAst(this.entry);
        console.log(Object.keys(ast));
        console.log(ast);
    }
    // 重写 require函数，输出 bundle
    generate() {

    }
}

new Compiler(options).run();
```