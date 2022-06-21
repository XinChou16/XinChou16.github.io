# Whistle 最佳跨平台代理工具实践

## 参考

- [whistle github](https://github.com/avwo/whistle)
- [whistle doc](https://avwo.github.io/whistle/)
- [whistle plugin](https://github.com/whistle-plugins/examples)
- [whistle view jwt](https://www.npmjs.com/package/whistle.view-jwt)

## 功能

目前在项目中使用到的功能点罗列如下，全部是在项目中实践过的

- HTTP, HTTPS的接口抓包
- HTTPS接口的抓包和请求修改
- HTTPS静态资源的抓包和请求修改
- 系统HOST的设置
- HTTPS请求的延迟模拟，UA的模拟，超时响应模拟等
- 配置文件可基于项目同步，共享配置
- 抓包文件的导出，支持JSON，方便二次查看
- 请求的高亮和区分
- 输出移动端页面的日志
- 插件：远程调试移动页面，基于weinre
- 插件：自动注入vconsole, eruda到移动端页面
- 插件：查看请求头的 jwt 和响应 jwt字段，并自动解码
- 插件：抓包请求自动保存文件到本地

## 具体配置实现


### 系统HOST的设置

```sh
127.0.0.1 twitter.com
192.168.1.1 aaabbb.com
```


### HTTPS接口特殊操作

```sh
# 修改返回状态码，模拟服务端报错
www.baidu.com/api/send statusCode://500 
www.baidu.com/api/send statusCode://200

# 修改响应时间，模拟响应慢的情形
www.baidu.com/api/send resDelay://2000

# 修改请求速度，模拟弱网情形,单位是 kb/s
www.baidu.com/api/send reqSpeed://0.3

# 修改响应内容类型
www.baidu.com/api/a reqType://text

# 修改请求参数
www.baidu.com/api/a urlParams://(a=1)

# 修改请求方法
www.baidu.com/api/a method://put

# 修改refer, 调试refer
www.baidu.com/api/a refer://url

# 修改ua, 模拟不同设备
www.baidu.com/api/a refer://url

# 禁用缓存,防止资源返回 304，如html页面
www.baidu.com/api/a disable://cache

# 修改 cookie
www.baidu.com/api/a reqCookies://{a.json}

# 修改 请求头
www.baidu.com/api/a reqCookies://{a.json}

# 篡改响应内容
www.baidu.com/api/a resBody://{mock.json}

```

### 静态资源修改

prepend.js 示例
```js
window.deepClone = obj => JSON.parse(JSON.stringify(obj));
window.logger = (obj) => console.log( window.deepClone(obj) );
window.pretty = (obj, indent = 4) => console.log(JSON.stringify(obj, null, indent))
```

```sh
# html页面最前面添加 JS
www.baidu.com/a.html jsPrepend://{prepend.js}

# html页面最后面添加 JS
www.baidu.com/a.html jsAppend://{append.js}

# 页面转发
qq.com/foo.html qq.com/bar.html
qq.com/path/ http://localhost:8080

# 页面302跳转
qq.com/pageA redirect://qq.com/pageB
^**qq.com/longPath/**?key=** redirect://http://localhost:8080/$2?key=$3

# 资源替换
**/assets/js/vendor.js http://localhost:8090/vendor.js
**/assets/js/vendor.js.map http://localhost:8090/vendor.js.map

# 复杂路径替换
^**.domain.com/static/**/**/** /local/tpl/src/$2/static/$3/$4


```

### 高亮抓包请求

使用 `style://` 规则

```sh
**.baidu.com style://color=@fff&fontStyle=italic&bgColor=@eee
**.qq.com/game_**/**.html style://color=@fff&bgColor=@b199f9
*/api style://color=@fff&bgColor=@69f
```

### 移动端远程调试

```sh
qq.com weinre://
**.qq.com weinre://qq

# 打印日志到whsitle

/page/a.html log://
/page/a.html log://specifiedPanel
```

## 插件 - 插入vconsole

```sh
# vconsole
m.weibo.cn whistle.inspect://

# eruda
m.weibo.cn whistle.inspect://eruda

^**domain.com/**/**.html whistle.inspect://eruda
```

## 插件 - 查看请求头jwt数据

[地址](https://www.npmjs.com/package/whistle.view-jwt)

基于 [whistle.view-md5](https://github.com/whistle-plugins/examples)修改，简化了下，都是在页面上输入需要获取的数据，然后内部起了个 node 服务，来处理并返回数据，最终呈现在页面上展示


## 使用本地规则文件

1. 新建个 [whistle代理文件](http://wproxy.org/whistle/cli.html) `.whistle.js`，与 package.json同级

2. 里面填充规则，示例如下：

```js
const path = require('path');
const pkg = require('./package.json');

const resolve = file => path.join(__dirname, file);

const defaultRules = `

# =============== Highlight ============
*/game style://color=@fff&bgColor=@69f

# =============== LOG =================
# log
**domain.com/foo/ log://tpl
**domain.com/bar/ log://tpl

`;

const gameRules = `

# =============  HTML ================
# prod && dev
**qq.com/path http://localhost:8080
**aaaa.com/path http://localhost:8080

`;

exports.name = `local_rule_${pkg.name}`;
exports.rules = [defaultRules, gameRules].join('');

```

3. 全局后台启动代理服务：`w2 start`
4. 使用该文件（重名则覆盖）：`w2 add --force`
