# 使用脚本文件进行打包

# 背景

项目中存在多个文件目录，每个目录都有 `package.json`，打包脚本都需要进入各个文件夹内进行打包，较为繁琐

## 方案

使用 `node` 启动单独的脚本来打包各个文件夹，使用第三方库，如[`execa`](https://github.com/sindresorhus/execa)来进行执行

当执行`yarn dev`，需要进入到子目录下，这个如何实现呢。通过查阅资料，其实npm和yarn都提供了命令来改变执行的工作目录

**yarn**
```sh
yarn --cwd your-sub-folder install
yarn --cwd your sub-folder build
```

**npm**
```sh
npm install --prefix your-sub-folder
npm build --prefix your-sub-folder
```


## reference

- [execa](https://github.com/sindresorhus/execa)
- [--prefix in npm](https://docs.npmjs.com/cli/v7/using-npm/config#prefix)
- [--cwd in yarn](https://stackoverflow.com/questions/36172442/how-can-i-get-npm-start-at-a-different-directory)
- [stackoverflow](https://stackoverflow.com/questions/32783885/is-it-possible-to-use-npm-to-run-scripts-in-multiple-subfolders)
- [execa usage reference url search params](https://github.com/XinChou16/vue-url-search-params/blob/main/scripts/release.js)
- [vue-next build scripts](https://github.com/vuejs/vue-next/blob/master/scripts/build.js)
