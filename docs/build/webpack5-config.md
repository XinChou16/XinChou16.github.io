# webpack5 config

## links

- [create-react-app@5.0.0](https://github.com/facebook/create-react-app/blob/v5.0.0/packages/react-scripts/config/webpack.config.js)
- [vue-cli@5.0.0](https://github.com/vuejs/vue-cli/blob/v5.0.0-rc.1/packages/%40vue/cli-service/lib/config/base.js)

## ES6 -> ES5

1. install depends

```sh
pnpm install -D @babel/core @babel/preset-env babel-loader
```

2. add config

`touch babel.config.js`

```js
module.exports = {
    plugins: [],
    presets: ['@babel/preset-env']
}
```

```js
module.exports = {
    // ....
    module: {
        rules: [
            {
                test: /\.(js|mjs)$/,
                exclude: /node_modules/,
                use: [
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                    }
                ]
            }
        ]
    }
}
```

## Less -> CSS

1. install depends

```sh
pnpm install -D style-loader css-loader less-loader less
```

2. add config

```js
module.exports = {
    // ....
    module: {
        rules: [
            {
                test: /\.(less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}
```

