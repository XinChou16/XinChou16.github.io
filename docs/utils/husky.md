# husky + lint-staged + prettier

> 可以自定义 git 钩子方法，来实现拦截相应的功能

## 使用

1. `NODE`要求：`>10.x`

2. 安装 NPM 包

```sh
yarn add -D husky lint-staged prettier
```
> 当前文章安装完成后的版本为
```json
"husky": "^6.0.0",
"lint-staged": "^11.0.0",
"prettier": "^2.3.1"
```

3. 初始化

```sh
# YARN 1
npx husky-init && yarn
```

4. 使用

在当前 GIT 目录下会自动生成 `.husky`文件夹，并在`pre-commit`文件内追加这几行：

```sh
node index.js
```

添加 index.js 文件，然后执行`git add . && git commit -m "test"`，就可以执行了上面这行脚本，接下来我们添加 `lint-staged`

5. 添加 `lint-staged`

> `lint-staged`是一个可以只针对添加到暂存区的文件进行处理的工具

修改 `pre-commit` 文件：

```sh
# ...
npx --no-install lint-staged
yarn lint-staged
```

然后`package.json`中添加执行脚本

> 您也可以在单独的`lintstagedrc`文件中添加，这里不赘述，可以参考官方文档

```json
{
  "lint-staged": {
    "*.{js,ts}": ["prettier --write"]
  }
}
```

接下来我们添加 Prettier

6. 添加 Prettier

项目根目录新建 `.prettierrc` 文件，写入以下内容

```json
{
  "semi": true,
  "singleQuote": true
}
```

然后我们再提交变更，可以看到样式不规范的代码已经自动格式化了，且其他文件不受影响。

## Reference

- [husky docs](https://typicode.github.io/husky/)
- [lint staged docs](https://github.com/okonet/lint-staged)
- [prettier docs](https://prettier.io/docs/en/configuration.html)
- [Vue next package.json](https://github.com/vuejs/vue-next/blob/master/package.json)
