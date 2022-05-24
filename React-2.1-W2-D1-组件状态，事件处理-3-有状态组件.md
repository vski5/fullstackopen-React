# Stateful component

【有状态组件】

通过 React 的 `state hook` 向应用的_App_ 组件中添加状态。

_Hook_ 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

一个例子的两个等价实现方法。
Hook：
```js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
class:
```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

还是回到react.part1的例子
开改：
_index.js_ 重新变成了：

```js
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, 
document.getElementById('root'))
```

_App.js_ 变成了：

```js
//在第一行中，文件导入了 useState 函数
import React, { useState } from 'react'

const App = () => {
//定义组件的函数体以如下函数调用开始
  const [ counter, setCounter ] = useState(0)

  setTimeout(    
  () => setCounter(counter + 1),    
  1000  
  )
  return (
    <div>{counter}</div>
  )
}

export default App
```

在第一行中，文件导入了 useState 函数:
```js
import React, { useState } from 'react'
```
定义组件的函数体以如下函数调用开始:
函数调用将 `state` 添加到组件，并将其值用0进行初始化。
```js
const [ counter, setCounter ] = useState(0)
```
该函数返回一个包含两个元素的数组。 我们使用前面所讲的解构赋值语法将元素分配给变量 _counter_ 和 _setCounter_ 。
变量 _counter_ 和 _setCounter_ 是返回值。
变量_counter_ 被赋予的初始值_state_ 为零。 
变量 setCounter 被分配给一个函数，该函数将用于_修改 state_。

这个应用调用 `setTimeout` 函数，并传递给它两个参数: 
第一个是增加计数器状态的函数，(`() => setCounter(counter + 1)`)，
`setCounter`是增加计数器状态的函数,
`counter`是计数器。
第二个是1秒钟的超时设置:(`1000`)

```js
setTimeout(
  () => setCounter(counter + 1),
  1000
)
```

 setCounter是useState(0)的状态修改函数，被调用时意味着状态的变更，react会重新渲染这个组件，组件函数的函数体会被重新执行。
```js
() => {
//定义组件的函数体以如下函数调用开始
  const [ counter, setCounter ] = useState(0)

  setTimeout(    
  () => setCounter(counter + 1),    
  1000  
  )
  
  return (
    <div>{counter}</div>
  )
}
```
第二次执行组件函数时，它调用了 useState 函数返回的新状态值: 1。 

再次执行函数体还会对 setTimeout 进行一次新的函数调用，它会执行一秒钟的等待，并再次递增计数器状态。

由于counter变量的值现在是1，所以将该值增加1，本质上等同于将计数器的状态值设置为2。

```js
() => setCounter(2)
```

与此同时，计数器的旧值“1”被渲染到了屏幕上。

每次 setCounter 修改状态时，它都会导致组件重新渲染。 
状态的值将在一秒钟后再次递增，并且在应用运行期间循环往复。

如果组件在该渲染时没有渲染，或者在“错误的时间”进行了渲染，您可以通过将组件变量的值打印到控制台来调试应用。
```js
 console.log('rendering...', counter)
```
