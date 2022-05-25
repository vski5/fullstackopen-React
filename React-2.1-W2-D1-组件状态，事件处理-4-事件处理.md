# 事件处理
HTML `<button>` 元素表示一个可点击的按钮，可以用在表单或文档其它需要使用简单标准按钮的地方。 

在 React 中，将一个 事件处理函数(此处例子为handleClick 函数) 注册到click 事件 发生 时，
将按钮的 onClick 属性 的值设置为 handleClick 函数的引用,
如下:
此处的plus是按钮的名字。只有当用户单击按钮时才会调用 setCounter 函数。
```js
      <button onClick={handleClick}>        
      plus      
      </button>
```
事件处理函数也可以在 onClick 属性的值中直接定义:
```js
<button onClick={() => console.log('clicked')}>
```
当用户单击按钮时会调用 setToZero 函数。
```js
const setToZero = () => setCounter(0)//将计数器counter重设为零

<button onClick={setToZero}>
        zero
      </button>
```


完整的app.js代码为：
```js
import React, { useState } from 'react';


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App
```

自己的复刻版本：
```js
import React, { useState } from 'react';


const App = () => {
  const [counter,setCounter]=useState(0)

  const pluss =()=>{
    setCounter(counter+1);
    console.log('clicked',counter)
  }
   const subtracts =()=>{
    setCounter(counter-1);
    console.log('clicked',counter)
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={pluss}>
      plus
      </button>
      <button onClick={subtracts}>
      subtract
      </button>
    </div>
  )
}

export default App
```
