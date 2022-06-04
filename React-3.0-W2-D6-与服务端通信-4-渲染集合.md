# Rendering Collections

【渲染集合】

编写“前端”或叫浏览器端的应用逻辑。

约定翻译：
-   Note 应用实际上是在创建一个和提醒、便笺相关的应用，因此以下的Note均翻译为便笺。

让我们从如下代码开始( _App.js_):

```js
import React from 'react'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  )
}

export default App
```

_index.js_ 内容如下:

```js
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
```

每个便笺都包含其文本内容、时间戳以及一个布尔值，用于标记该便笺是否重要，便笺还包含一个惟一的_id_。