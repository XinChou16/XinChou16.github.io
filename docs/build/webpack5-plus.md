# webpack5 config plus

## reference

- [create-react-app@5.0.0](https://github.com/facebook/create-react-app/blob/v5.0.0/packages/react-scripts/config/webpack.config.js)
- [vue-cli@5.0.0](https://github.com/vuejs/vue-cli/blob/v5.0.0-rc.1/packages/%40vue/cli-service/lib/config/base.js)

## skip parse

```js
{
    //...
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/
    }
}
```

## esm pkg version alias

```js
{
    //...
    resolve: {
        alias: {
            // vue2
            'vue$': 'vue/dist/vue.esm.js',
            // vue2 runtime
            'vue$': 'vue/dist/vue.runtime.esm.js',
            // vue3
            'vue$': 'vue/dist/vue.esm-bundler.js',
            // vue3 runtime
            'vue$': 'vue/dist/vu.runtime.esm-bundler.js,
        }
    }
}
```

## splitChunks

```js
{
    //...
    optimization: {
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    name: `chunk-vendors`,
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: `chunk-common`,
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        }
    }
}
```

## enhance html-webpack-plugin

```js
{
    //...
    plugins: [
        new HtmlWebpackPlugin({
            template: '',
            title: 'title',
            scriptLoading: 'defer',
            templateParameters: (compilation, assets, assetTags, pluginOptions) => {
                // enhance html-webpack-plugin's built in template params
                return Object.assign({
                    compilation: compilation,
                    webpackConfig: compilation.options,
                    htmlWebpackPlugin: {
                        tags: assetTags,
                        files: assets,
                        options: pluginOptions
                    }
                }, resolveClientEnv(options, true /* raw */))
            }
        })
    ]
}
```

## enhance copy-webpack-plugin

```js
{
    //...
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: publicDir,
                to: outputDir,
                toType: 'dir',
                noErrorOnMissing: true,
                globOptions: {
                    ignore: ['**/.*']
                },
                info: {
                    minimized: true
                }
            }]
        })
    ]
}
```


