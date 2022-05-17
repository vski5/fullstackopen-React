# 开始React

创建一个React应用最简单的方式是使用一个叫做create-react-app的工具。

如果你随着node安装的npm工具版本号不小于5.3，你就可以（也不是必须的）在机器上安装 create-react-app

- npx侧重于执行命令的，执行某个模块命令。虽然会自动安装模块，但是重在执行某个命令。智能的识别模块，如果模块存在，就使用。如果不存在，就临时下载，用完就删除。
- npm侧重于安装或者卸载某个模块的。重在安装，并不具备执行某个模块的功能。

让我们创建一个名为 _part1_ 的应用，并进入到它的目录。

```bash
$ npx create-react-app part1
$ cd part1
```

从现在开始，所有以$开头的命令都表示是输入到终端的，也就是命令行。

但不要把$本身敲到终端，它只是一个输入终端的提示符。

用如下命令就可以让应用运行起来了

```bash
$ npm start
```

默认情况下，应用在本地localhost，3000端口运行，地址为 http://localhost:3000

打开浏览器控制台。 还可以打开一个文本编辑器（比如vscode）。

这样你就可以同时在屏幕上查看代码和网页了：

![[2-appjs位置.png]]

vscode里面没有App.js这个文件，但是浏览器里面可以找到。

那就就直接在浏览器里面改。

index.js同理。

两个都改成超级简化版
：
index.js
```js
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```
改完之后部分字的字体大小变了。

App.js
```js
import React from 'react'
const App = () => (
  <div>
    <p>Hello world lo23</p>
  </div>
)

export default App
```
改完之后原来的React原生背景无了，只留下清水html显示
```js
  <div>
    <p>Hello world lo23</p>
  </div>
```
也就是页面只有一行Hello world lo23

删掉文件 App.css、App.test.js、index.css 、logo.svg、 setupTests.js 和reportWebVitals.js 。

目前在我们的应用中不并需要。



