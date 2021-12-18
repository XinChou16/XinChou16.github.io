# 环境变量设置

## 第三方包

- dotenv
- dotenv-expand

## 覆盖规则

以开发环境为例

权重从上至下依次递减

- `.env.development.local`
- `.env.development`
- `.env.local`
- `.env`

## 示例

```js
const fs = require('fs');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const mode = process.env.ENV;
const prefixReg = /^APP_/;
const KEYS = ['NODE_ENV'];
const env = Object.create(null);
const envFiles = [
  /** mode local file */ `.env.${mode}.local`,
  /** mode file */ `.env.${mode}`,
  /** local file */ `.env.local`,
  /** default file */ `.env`
];
const existEnvFiles = envFiles.filter(existFile);

// https://github.com/vitejs/vite/blob/5f39c28908/packages/vite/src/node/utils.ts#L294
for (const file of existEnvFiles) {
    const myEnv = dotenv.config({
        path: file
    });
    console.log(file, existFile(file));
    dotenvExpand(myEnv);
    
    for (const key in process.env) {
        try {
            if (KEYS.includes(key) || prefixReg.test(key)) {
                env[key] = JSON.stringify(process.env[key]);
            }
        } catch (error) { }
    }
}

function existFile(path) {
    return fs.existsSync(path) && fs.statSync(path).isFile();
}

module.exports = function loadEnv() {
    return env;
}
```