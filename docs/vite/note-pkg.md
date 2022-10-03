# vite source code

1. pkg.json

```json
{
    "type": "module", // 当前项目均使用 ESM 模块
    "bin": {
        "vite": "bin/vite.js" // MAIN BIN FILE
    },
    "main": "./dist/node/index.js", // CJS 主入口
    "module": "./dist/node/index.js", // ESM 主入口
    "types": "./dist/node/index.d.ts", // 类型信息
    "exports": {
        ".": {
            "types": "./dist/node/index.d.ts",
            "import": "./dist/node/index.js",
            "require": "./index.cjs"
        },
        "./client": {
            "types": "./client.d.ts"
        },
        "./dist/client/*": "./dist/client/*",
        "./package.json": "./package.json"
    },
    "files": [ // npm 包安装下载时包含的文件目录信息
        "bin",
        "dist",
        "client.d.ts",
        "index.cjs",
        "src/client",
        "types"
    ],
    "engines": {
        "node": "^14.18.0 || >=16.0.0" // node 版本要求，注意
    },
    "scripts": {
        "dev": "rimraf dist && pnpm run build-bundle -w",
        "build": "rimraf dist && run-s build-bundle build-types",
        "build-bundle": "rollup --config rollup.config.ts --configPlugin typescript",
        "build-types": "run-s build-types-temp build-types-pre-patch build-types-roll build-types-post-patch build-types-check",
        "build-types-temp": "tsc --emitDeclarationOnly --outDir temp/node -p src/node",
        "build-types-pre-patch": "tsx scripts/prePatchTypes.ts",
        "build-types-roll": "api-extractor run && rimraf temp",
        "build-types-post-patch": "tsx scripts/postPatchTypes.ts",
        "build-types-check": "tsc --project tsconfig.check.json",
        "lint": "eslint --cache --ext .ts src/**",
        "format": "prettier --write --cache --parser typescript \"src/**/*.ts\"",
        "prepublishOnly": "npm run build"
    },
    "//": "READ CONTRIBUTING.md to understand what to put under deps vs. devDeps!",
    // 安装在 deps 和 devDeps的区别
    // https://github.com/vitejs/vite/blob/main/CONTRIBUTING.md#notes-on-dependencies
    "dependencies": {
        "esbuild": "^0.15.9",
        "postcss": "^8.4.17",
        "resolve": "^1.22.1", // ?
        "rollup": "^2.79.1"
    },
    "optionalDependencies": {
        "fsevents": "~2.3.2" // ?
    },
    "devDependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/parser": "^7.19.3",
        "@babel/types": "^7.19.3",
        "@jridgewell/trace-mapping": "^0.3.15",

        // ROLLUP PLUGIN GROUP
        "@rollup/plugin-alias": "^3.1.9",
        "@rollup/plugin-commonjs": "^22.0.2",
        "@rollup/plugin-dynamic-import-vars": "^1.4.4",
        "@rollup/plugin-json": "^4.1.0",
        "@rollup/plugin-node-resolve": "14.1.0",
        "@rollup/plugin-typescript": "^8.5.0",
        "@rollup/pluginutils": "^4.2.1",

        "acorn": "^8.8.0",
        "cac": "^6.7.14",
        "chokidar": "^3.5.3",
        "connect": "^3.7.0",
        "connect-history-api-fallback": "^2.0.0", // 提供history模式的兼容
        "convert-source-map": "^1.8.0",
        "cors": "^2.8.5",
        "cross-spawn": "^7.0.3",
        "debug": "^4.3.4", // 调试信息输出库
        "dotenv": "^14.3.2", // 环境变量
        "dotenv-expand": "^5.1.0", // 环境变量
        "es-module-lexer": "^1.0.3",
        "estree-walker": "^3.0.1",
        "etag": "^1.8.1",
        "fast-glob": "^3.2.12",
        "http-proxy": "^1.18.1",
        "json5": "^2.2.1",
        "launch-editor-middleware": "^2.6.0", // 尤大写的跳转文件行数的，跨浏览器支持，参考了react-dev-tools相关
        "magic-string": "^0.26.5", // 字符串操作的
        "micromatch": "^4.0.5",
        "mlly": "^0.5.16",
        "mrmime": "^1.0.1",
        "okie": "^1.0.1",
        "open": "^8.4.0",
        "parse5": "^7.1.1",
        "periscopic": "^3.0.4",
        "picocolors": "^1.0.0",
        "picomatch": "^2.3.1",
        "postcss-import": "^15.0.0",
        "postcss-load-config": "^4.0.1",
        "postcss-modules": "^5.0.0",
        "resolve.exports": "^1.1.0",
        "sirv": "^2.0.2",
        "source-map-js": "^1.0.2",
        "source-map-support": "^0.5.21",
        "strip-ansi": "^7.0.1",
        "strip-literal": "^0.4.2",
        "tsconfck": "^2.0.1",
        "tslib": "^2.4.0",
        "dep-types": "link:./src/types",
        "types": "link:./types",
        "ufo": "^0.8.5",
        "ws": "^8.9.0"
    },
    "peerDependencies": {
        "less": "*",
        "sass": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
    },
    // 应该是不输出警告的作用
    "peerDependenciesMeta": {
        "sass": {
            "optional": true
        },
        "stylus": {
            "optional": true
        },
        "less": {
            "optional": true
        },
        "sugarss": {
            "optional": true
        },
        "terser": {
            "optional": true
        }
    }
}

```