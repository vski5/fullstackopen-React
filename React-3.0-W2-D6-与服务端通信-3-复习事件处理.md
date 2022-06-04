# React-3.0-W2-D6-与服务端通信-3-复习事件处理
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

index.js:
```js
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
```