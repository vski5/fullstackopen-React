 
 
 首先，我们将了解如何将数据集合(如一个names列表)渲染到屏幕上。
 
  然后，我们将检查用户如何使用 HTML 表单向 React 应用提交数据。 
  
  再然后，我们的重点将向后端转移，关注浏览器中的 JavaScript 代码如何获取和处理存储（远程）后端服务器中的数据。 
  
  最后，我们将快速浏览一下向 React 应用中添加 CSS 样式的几种简单方法。

# 从渲染集合到模块学习
 **console.log**
**_What's the difference between an experienced JavaScript programmer and a rookie? The experienced one uses console.log 10-100 times more._**

一个JavaScript 老鸟和菜鸟有什么区别? 老鸟使用 console.log的次数是菜鸟的数十倍甚至数百倍。

逗号把要打印的东西分开，不许用加号:

```js
console.log('props value is', props)
```

# Protip: Visual Studio Code snippets

【高级技巧: Visual Studio Code 的代码片段】
代码片段（snippets）即快速生成常用代码块的快捷方式。
有用的、现成的代码片段也可以在 VS 代码插件中找到。

最重要的片段是用于 _console.log()_ 命令的片段，例如_clog_:

```js
{
  "console.log": {
    "prefix": "clog",
    "body": [
      "console.log('$1')",
    ],
    "description": "Log output to console"
  }
}
```

使用 _console.log()_ 来debug 你的代码十分常见， Visual Studio Code 有内置的snippet（片段）。可以使用 _log_ 和tab键来自动补全。