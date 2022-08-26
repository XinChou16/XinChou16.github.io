
# 相关webpack plugin 实现原理

1. interpolate plugin

 - v5版本：获取getHooks(compilation)钩子
 - 注册 afterTemplateExecution事件，在回调里执行字符串处理
 - 重要：特别注意 webpack和html-plugin的版本，要相对应，不同版本钩子的获取方式不一样

