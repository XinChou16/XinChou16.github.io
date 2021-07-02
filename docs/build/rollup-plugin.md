# Rollup 

## Reference

- [rollup-commonjs-umd](https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/)
- [rollupjs-note](https://chenshenhai.github.io/rollupjs-note/note/chapter02/02-05.html)
- [Setting JS Build](https://dev.to/plebras/setting-up-a-javascript-build-process-using-rollup-n1e)
- [Intro to Rollup](https://www.sitepoint.com/rollup-javascript-bundler-introduction/)
- [juejin Rollup usage](https://juejin.cn/post/6844904058394771470)
- [Rollup docs](https://rollupjs.org/guide/en/)


## 起步

>Node >= 10

## 安装依赖
```sh
npm install -g rollupjs
```

## 打包脚本

1. 命令行打包 

[源码地址](https://github.com/XinChou16/bundle-demos/blob/master/rollup-demo/v2/start/package.json)
```sh
rollup main.js --file bundle.js --format iife
```


2. 使用配置文件 `rollup.config.js`

[源码地址](https://github.com/XinChou16/bundle-demos/blob/master/rollup-demo/v2/02-with-config/rollup.config.js)


```sh
rollup main.js --file bundle.js --format umd --config rollup.config.js
```

3. 打包输出多种模块规范文件

```sh
rollup main.js --file bundle.js --format umd
rollup main.js --file bundle.js --format cjs
```

## 常用插件

1. 编译JS代码

```sh
yarn add -D rollup-plugin-babel
```

2. 编译 TS 代码

官方插件
```sh
yarn add -D @rollup/plugin-typescript
```

但另一个包用的也比较多，上面这个包会出现无法解决的问题，同事是使用这个包：

```sh
yarn add -D rollup-plugin-typescript2
```

3. 加载第三方模块

```sh
yarn add -D @rollup/plugin-node-resolve
```

4. 将CJS模块的第三方库转换为ES6模块规范

```sh
yarn add -D @rollup/plugin-commonjs typescript
```

5. 压缩代码

```sh
yarn add -D rollup-plugin-terser
```

6. 全局变量替换插件

```sh
yarn add -D @rollup/plugin-replace
```

7. 路径别名解析插件

```sh
yarn add -D @rollup/plugin-alias
```

8. 转换JSON文件为ES6模块

```sh
yarn add -D @rollup/plugin-json
```