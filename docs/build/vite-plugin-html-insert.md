# vie-plugin-html-insert

## background

链接

- [npm pkg](https://www.npmjs.com/package/vite-plugin-html-insert)
- [homepage](https://github.com/XinChou16/vite-plugin-html-insert)

html文件中注入环境变量参数， vite中没有很好的 html plugin 插件来实现html的生成，而且html模板位置也没有特殊要求，类似于 [webpack plugin](./insert-content-html-plugin.md)，只是根据vite下打包方式不同，同样实现了一遍，除此之外，增加了 对 `.env` 文件的支持

## usage

使用参考 [项目readme](https://github.com/XinChou16/vite-plugin-html-insert/example)


## principle

### 1. html中变量的处理

vite plugin暴露了 [configureServer钩子](https://cn.vitejs.dev/guide/api-plugin.html#vite-specific-hooks)，方便我们在开发阶段处理一些内容，

通过注册一个中间件，来处理 客户端请求的html内容，并在返回前做一些加工处理。

```js
{
    // ...
    configureServer({ middlewares, config }) {
            middlewares.use(async (req, res, next) => {
                // 处理后的内容返回回去
                res.end(content);
            });
        },
}
```

### 2. 环境变量的读取

`.env`环境变量的读取是通过 vite 暴露的 `loadEnv()` 方法来实现的，我们也无需判断模式，直接获取最后合并的 `.env` 环境变量

自己写一个的话，也可以这样来实现，[代码参考](https://github.com/XinChou16/vite-plugin-html-insert/blob/main/loadEnv.js)，具体实现参考了 vite 源码 和 dotenv-expand包对 env 的加载处理。
