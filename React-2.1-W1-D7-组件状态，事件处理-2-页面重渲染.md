# Page re-rendering

【页面重渲染】

即在最初的渲染之后，它们的外观一直是相同的。 如果我们想要创建一个计数器，在这个计数器中的值随着时间的变化而增加，或者通过点击一个按钮而增加，会是什么样呢？

## 新的App.js和index.js
让我们从下面的代码开始, _App.js_ 内容变成了:

```js
import React from 'react'

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App
```

_index.js_ 变成了:

```js
import ReactDOM from 'react-dom'
import App from './App'

let counter = 1

ReactDOM.render(
  <App counter={counter} />, 
  document.getElementById('root')
)
```

注意，当你修改 _index.js_ 文件时， React 并不会自动刷新，所以你需要重新加载浏览器页面，新的内容才会展示出来。
# ReactDOM.render 方法让组件重新渲染
添加命令后部件并不会重新渲染。
我们可以通过再次调用 ReactDOM.render 方法让组件重新渲染
（重复调用 _ReactDOM.render_-方法并不是重新渲染组件的推荐方法。 ）
例如:

```js
let counter = 1
//重新渲染命令被包装在了refresh函数中，以减少复制粘贴代码的数量。
const refresh = () => {
  ReactDOM.render(<App counter={counter} />, 
  document.getElementById('root'))
}

refresh()
counter += 1 //添加命令
refresh() //重新渲染
counter += 1
refresh()
```

重新渲染命令被包装在了 _refresh_ 函数中，以减少复制粘贴代码的数量。

重复调用 _ReactDOM.render_-方法并不是重新渲染组件的推荐方法。 

下一节，将介绍一种更好的，实现相同效果的方法。


# setInterval()
现在，组件渲染了三次，值由1、2最终变成了3。 但是，值1和2在屏幕上显示的时间非常短，因此无法注意到它们。
通过使用 setInterval，通过每隔一秒来重渲染一次并让计数器+1，来实现这个有趣的功能 :

```js
setInterval(() => {
  refresh()
  counter += 1
}, 1000)
```


 **`setInterval()`** 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔。
 ```
var intervalID = setInterval(func, [delay, arg1, arg2, ...]);
var intervalID = setInterval(function[, delay]);
var intervalID = setInterval(code, [delay]);
```

`func`
要重复调用的函数，每经过指定` delay 毫秒`后执行一次。
第一次调用发生在 delay 毫秒之后。
此处的func为
```js
() => {
  refresh()
  counter += 1
}
```

`delay`
是每次延迟的毫秒数（一秒等于 1000 毫秒），函数的每次调用会在该延迟之后发生。

`arg1, ..., argN`  可选
当定时器过期的时候，将被传递给 _func_ 函数的附加参数。

`code` 可选
你可以传递一个字符串来代替一个函数对象，你传递的字符串会被编译然后每经过 `delay` 毫秒执行一次。
存在相同的安全风险所以_不推荐_使用。

