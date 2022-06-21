# insert-content-html-plugin 插件

## background

项目中，通常需要打包生成一个 .html 的入口文件，有时，需要注入些变量到 .html 页面中，一般是使用 html-webpack-plugin，但没有提供这样的能力，所以需要个插件来将环境变量，自定义参数注入到 html 页面中

[repo](https://github.com/XinChou16/insert-content-html-wepack-plugin)

## features

- 注入传入的自定义变量
- 提供方法来自定义实现注入

## usage

### config

1. 传入自定义变量

```js
// ...
new ReplaceContentHtmlPlugin({
  replacements: {
     NODE_ENV: 'test',
     VERSION: 'v1.2.0',
     BASE_URL: '//domain.com'
  },
});
```

2. 传入自定义方法，方便用户自定义，加工 html 内容，返回最新的html内容

```js
// ...
new ReplaceContentHtmlPlugin({
  transform: (html) => {
    return html += '<p>extra content</p>'
  }
});
```

### html file use

```html
<script>
window.APP_META = {
    version: "%VERSION%",
    env: "%NODE_ENV%",
};
</script>

<script src="%BASE_URL%/assets/utils.js?v=%VERSION%"></script>
```

## principle

基于 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/tree/v3.1.0)提供的钩子函数，提供了以下几种：

- html-webpack-plugin-before-html-generation
- html-webpack-plugin-before-html-processing
- html-webpack-plugin-alter-asset-tags
- html-webpack-plugin-after-html-processing
- html-webpack-plugin-after-emit

在这我们选择 暴露的`html-webpack-plugin-before-html-processing`钩子，在html处理前对内容进行处理，
执行完成后需要针对不同版本，进行callback回调或者返回一个 resolved 的promise， 进入下一个流程。

## [v2 version](https://github.com/XinChou16/insert-content-html-wepack-plugin/blob/main/main.js)

v2 版本，不做替换，只在特定标识下进行内容填充，参考了 Nuxt 的 页面插槽，预留 {{body-outlet}} 标识，构建时，识别到这个标识进行内容插入。
content 的拷贝，参考了 旧版 vue-cli 生成的配置

SSR中的 template.html文件

```js
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>

```

旧版cli工具生成的打包配置截取：

loadMinified是封装了方法，直接调用 fs 模块，读取的代码字符串，并交由 uglifyJS 模块来压缩，v2版本也借鉴了这个实现
```js
new HtmlWebpackPlugin({
      filename: config.build.main,
      template: 'main.html',
      serviceWorkerLoader: `<script>${loadMinified(path.join(__dirname, './service-worker-prod.js'))}</script>`,
      chunks: ['manifest', 'vendor', 'main']
    }),
```

使用：
```js
new InsertContentHtmlPlugin([
    {
        insertedAfter: '<!--rem-outlet-->',
        content: '<script>..</script>'
    }
]);
```

注意：

- 这里插入的内容是不经过 webpack 打包处理的不经过 html-loader 处理，直接 fs 命令copy过来， 使用 loadMinified 方法，uglifyjs 对 es6+语法支持不是很好
- 针对 scss文件，压缩使用 sass来处理。


## [v3 version](https://github.com/XinChou16/insert-content-html-wepack-plugin/blob/main/specified-insert.js)

V3版本根据实际需求简化了配置，实际需求是：

- 在 head 中插入 link 标签
- 在 body 底部插入 script 标签，引入脚本
- 在 head 顶部添加埋点代码

内部实现：

- 建立了 MAP 表，维护4种情形
  - prepend-head
  - append-head
  - prepend-body
  - append-body
- 使用时，传入类型即可


使用:

```js
new InjectContentHtmlPlugin({
  content: '<script>window.foo = 'foo';</script>',
  position: 'head',
  type: 'prepend'
});
```
