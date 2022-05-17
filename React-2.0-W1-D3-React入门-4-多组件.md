# Multiple components
多组件

最初的App.js修改一下。
定义了一个新的组件Hello，并在组件App中用`<Hello />`引用了它。
index.js中也是用`<App />`引用了App这个组件
```js
import React from 'react'

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello /> {/*这里是新加入的*/}
      <Hello /> {/*多引用几次*/}
    </div>
  )
}

export default App
```

**一个约定，**
就是应用的组件树顶部都要有一个root 组件 叫做App。
在某些情况下，组件的根并不一定是App ，而是包装在了一些工具组件中。