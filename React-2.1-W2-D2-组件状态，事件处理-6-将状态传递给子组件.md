# Passing state to child components

【将状态传递给子组件】

**状态提升**：通常，几个组件需要反映相同的变化数据。 我们建议将共享状态提升到它们最接近的共同祖先。

首先实现一个_Display_ 组件，它负责显示计数器的值。
```js
const Display =(props)=>{
	return(
	<div>{props.counter}</div>
	)
}
```

使用组件很简单，因为我们只需要将计数器的状态传递给组件即可:

```js
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}
```

一切仍然正常。 当单击按钮并重新渲染_App_ 时，其所有子元素(包括_Display_ 组件)也将重新渲染。

为应用的按钮制作一个_Button_ 组件：

我们必须通过组件的props传递 事件处理程序 以及 按钮的标题 :

```js
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
```

App.js现在看起来像这样:

```js
import React, { useState } from 'react';

const Display =(props)=>{
	return(
	<div>{props.counter}</div>
	)
}
const Button =(props)=>{
return(
	<div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
	)
}
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1) 
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>    
      <Button onClick={setToZero} text='zero'/>          
      <Button onClick={decreaseByOne} text='minus'/>              
     </div>
  )
}

export default App
```

由于我们现在有一个易于重用的_Button_ 组件，我们还可以通过添加一个可用于减法的计数器按钮，为应用实现一个新功能。

事件处理程序通过_onClick_ 属性传递给_Button_ 组件。