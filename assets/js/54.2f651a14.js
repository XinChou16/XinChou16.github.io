(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{238:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"whistle-最佳跨平台代理工具实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whistle-最佳跨平台代理工具实践"}},[t._v("#")]),t._v(" Whistle 最佳跨平台代理工具实践")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/avwo/whistle",target:"_blank",rel:"noopener noreferrer"}},[t._v("whistle github"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://avwo.github.io/whistle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("whistle doc"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/whistle-plugins/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("whistle plugin"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/whistle.view-jwt",target:"_blank",rel:"noopener noreferrer"}},[t._v("whistle view jwt"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),s("p",[t._v("目前在项目中使用到的功能点罗列如下，全部是在项目中实践过的")]),t._v(" "),s("ul",[s("li",[t._v("HTTP, HTTPS的接口抓包")]),t._v(" "),s("li",[t._v("HTTPS接口的抓包和请求修改")]),t._v(" "),s("li",[t._v("HTTPS静态资源的抓包和请求修改")]),t._v(" "),s("li",[t._v("系统HOST的设置")]),t._v(" "),s("li",[t._v("HTTPS请求的延迟模拟，UA的模拟，超时响应模拟等")]),t._v(" "),s("li",[t._v("配置文件可基于项目同步，共享配置")]),t._v(" "),s("li",[t._v("抓包文件的导出，支持JSON，方便二次查看")]),t._v(" "),s("li",[t._v("请求的高亮和区分")]),t._v(" "),s("li",[t._v("输出移动端页面的日志")]),t._v(" "),s("li",[t._v("插件：远程调试移动页面，基于weinre")]),t._v(" "),s("li",[t._v("插件：自动注入vconsole, eruda到移动端页面")]),t._v(" "),s("li",[t._v("插件：查看请求头的 jwt 和响应 jwt字段，并自动解码")]),t._v(" "),s("li",[t._v("插件：抓包请求自动保存文件到本地")])]),t._v(" "),s("h2",{attrs:{id:"具体配置实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体配置实现"}},[t._v("#")]),t._v(" 具体配置实现")]),t._v(" "),s("h3",{attrs:{id:"系统host的设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统host的设置"}},[t._v("#")]),t._v(" 系统HOST的设置")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 twitter.com\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.1 aaabbb.com\n")])])]),s("h3",{attrs:{id:"https接口特殊操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https接口特殊操作"}},[t._v("#")]),t._v(" HTTPS接口特殊操作")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改返回状态码，模拟服务端报错")]),t._v("\nwww.baidu.com/api/send statusCode://500 \nwww.baidu.com/api/send statusCode://200\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改响应时间，模拟响应慢的情形")]),t._v("\nwww.baidu.com/api/send resDelay://2000\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改请求速度，模拟弱网情形,单位是 kb/s")]),t._v("\nwww.baidu.com/api/send reqSpeed://0.3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改响应内容类型")]),t._v("\nwww.baidu.com/api/a reqType://text\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改请求参数")]),t._v("\nwww.baidu.com/api/a urlParams://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改请求方法")]),t._v("\nwww.baidu.com/api/a method://put\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改refer, 调试refer")]),t._v("\nwww.baidu.com/api/a refer://url\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改ua, 模拟不同设备")]),t._v("\nwww.baidu.com/api/a refer://url\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁用缓存,防止资源返回 304，如html页面")]),t._v("\nwww.baidu.com/api/a disable://cache\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 cookie")]),t._v("\nwww.baidu.com/api/a reqCookies://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a.json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 请求头")]),t._v("\nwww.baidu.com/api/a reqCookies://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a.json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 篡改响应内容")]),t._v("\nwww.baidu.com/api/a resBody://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mock.json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"静态资源修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源修改"}},[t._v("#")]),t._v(" 静态资源修改")]),t._v(" "),s("p",[t._v("prepend.js 示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("deepClone")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("logger")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deepClone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pretty")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# html页面最前面添加 JS")]),t._v("\nwww.baidu.com/a.html jsPrepend://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("prepend.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# html页面最后面添加 JS")]),t._v("\nwww.baidu.com/a.html jsAppend://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("append.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面转发")]),t._v("\nqq.com/foo.html qq.com/bar.html\nqq.com/path/ http://localhost:8080\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面302跳转")]),t._v("\nqq.com/pageA redirect://qq.com/pageB\n^**qq.com/longPath/**?key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("** redirect://http://localhost:8080/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("?key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 资源替换")]),t._v("\n**/assets/js/vendor.js http://localhost:8090/vendor.js\n**/assets/js/vendor.js.map http://localhost:8090/vendor.js.map\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复杂路径替换")]),t._v("\n^**.domain.com/static/**/**/** /local/tpl/src/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("/static/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$4")]),t._v("\n\n\n")])])]),s("h3",{attrs:{id:"高亮抓包请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高亮抓包请求"}},[t._v("#")]),t._v(" 高亮抓包请求")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("style://")]),t._v(" 规则")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("**.baidu.com style://color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("@fff"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("fontStyle")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("italic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("bgColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("@eee\n**.qq.com/game_**/**.html style://color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("@fff"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("bgColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("@b199f9\n*/api style://color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("@fff"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("bgColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("@69f\n")])])]),s("h3",{attrs:{id:"移动端远程调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端远程调试"}},[t._v("#")]),t._v(" 移动端远程调试")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("qq.com weinre://\n**.qq.com weinre://qq\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印日志到whsitle")]),t._v("\n\n/page/a.html log://\n/page/a.html log://specifiedPanel\n")])])]),s("h2",{attrs:{id:"插件-插入vconsole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件-插入vconsole"}},[t._v("#")]),t._v(" 插件 - 插入vconsole")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vconsole")]),t._v("\nm.weibo.cn whistle.inspect://\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eruda")]),t._v("\nm.weibo.cn whistle.inspect://eruda\n\n^**domain.com/**/**.html whistle.inspect://eruda\n")])])]),s("h2",{attrs:{id:"插件-查看请求头jwt数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件-查看请求头jwt数据"}},[t._v("#")]),t._v(" 插件 - 查看请求头jwt数据")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/whistle.view-jwt",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("基于 "),s("a",{attrs:{href:"https://github.com/whistle-plugins/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("whistle.view-md5"),s("OutboundLink")],1),t._v("修改，简化了下，都是在页面上输入需要获取的数据，然后内部起了个 node 服务，来处理并返回数据，最终呈现在页面上展示")]),t._v(" "),s("h2",{attrs:{id:"使用本地规则文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用本地规则文件"}},[t._v("#")]),t._v(" 使用本地规则文件")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("新建个 "),s("a",{attrs:{href:"http://wproxy.org/whistle/cli.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("whistle代理文件"),s("OutboundLink")],1),t._v(" "),s("code",[t._v(".whistle.js")]),t._v("，与 package.json同级")])]),t._v(" "),s("li",[s("p",[t._v("里面填充规则，示例如下：")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./package.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("resolve")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultRules "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n\n# =============== Highlight ============\n*/game style://color=@fff&bgColor=@69f\n\n# =============== LOG =================\n# log\n**domain.com/foo/ log://tpl\n**domain.com/bar/ log://tpl\n\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gameRules "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n\n# =============  HTML ================\n# prod && dev\n**qq.com/path http://localhost:8080\n**aaaa.com/path http://localhost:8080\n\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("local_rule_")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("defaultRules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gameRules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("全局后台启动代理服务："),s("code",[t._v("w2 start")])]),t._v(" "),s("li",[t._v("使用该文件（重名则覆盖）："),s("code",[t._v("w2 add --force")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);