# React-3.2-W3-D2-与服务端通信-2-从服务器获取数据
命令`npm install -g json-server`在你的机器上安装JSON服务器.

在项目的根目录下创建一个名为 _db.json_ 的文件，内容如下：
```json
{
  "notes": [
    {
      "id": 1,
      "content": "HTML is easy",
      "date": "2022-1-17T17:30:31.098Z",
      "important": true
    },
    {
      "id": 2,
      "content": "Browser can execute only JavaScript",
      "date": "2022-1-17T18:39:34.091Z",
      "important": false
    },
    {
      "id": 3,
      "content": "GET and POST are the most important methods of HTTP protocol",
      "date": "2022-1-17T19:20:14.298Z",
      "important": true
    }
  ]
}
```

从你的应用的根目录，我们可以使用 _npx_ 命令来运行 _json-server_ 。
```js
npx json-server --port 3001 --watch db.json
```

json-server默认在端口3000上开始运行；但由于使用create-react-app创建的项目保留了端口3000，我们必须为json-server定义一个备用端口，如端口3001。
[http://localhost:3001/notes](http://localhost:3001/notes)这个地址可以看到，_json-server_ 以JSON格式提供我们之前写到文件中的注释。

安装插件JSONView，格式化显示JSON数据。

目标：
- 将笔记保存到服务器上，在当下就是保存到json-server。
- React代码从服务器上获取笔记，并将其渲染到屏幕上。每当一个新的笔记被添加到应用中，React代码也会将其发送到服务器，使新的笔记在 "内存 "中持续存在。

json-server将所有数据存储在 _db.json_ 文件中，该文件位于服务器上。在现实世界中，数据会被存储在某种数据库中。

#  The browser as a runtime environment

第一个任务是从[http://localhost:3001/notes](http://localhost:3001/notes)的地址中获取已经存在的笔记到我们的React应用中。

最好用`fetch`方法。
但示例中的代码是使用`XMLHttpRequest`来获取数据的，也就是使用XHR对象来进行HTTP请求。
```js
const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText)
    // handle the response that is saved in variable data
  }
}

xhttp.open('GET', '/data.json', true)
xhttp.send()
```
分布解读：
- `const xhttp = new XMLHttpRequest`
为名为xhttp的常量注册了一个事件处理程序XMLHttpRequest，
当 `xhttp` 对象 的状态发生变化时，事件处理程序就会被JavaScript运行时调用。

假设此时 状态的变化 意味着 对请求的响应 已经到来 ，看到这个变化就知道对请求的相应来了，那么，数据就会得到相应的处理。

值得注意的是，事件处理程序中的代码是在请求被发送到服务器之前定义的。

事件处理程序中的代码将在以后的时间点上执行。

因此，代码不是 "从上到下 "同步执行的，而是 **_异步_** 执行的。JavaScript调用在某个时间点为请求注册的事件处理程序。

JavaScript引擎或运行时环境遵循**异步模型**都以**非阻塞**方式执行。这意味着在调用一个IO函数后，代码的执行会立即继续，而不需要等待它的返回。

当一个异步操作完成时，或者更确切地说，在完成后的某个时间点，JavaScript引擎会调用注册在该操作上的事件处理程序。
（也就是说，一个函数绑在某个异步操作上，当异步操作结束后某个时间点，绑在上面的函数（也就是事件处理程序）会运行）

JavaScript引擎是单线程的，这意味着它们不能并行地执行代码。因此，在实践中需要使用非阻塞模型来执行IO操作。否则，在从服务器获取数据的过程中，浏览器会 "冻结"。
如果某些代码的执行占用了大量的时间，浏览器就会在执行的过程中卡住。

解决方法是：添加超时动作
在应用的顶部添加以下代码：
```js
setTimeout(() => {
  console.log('loop..')
  let i = 0
  while (i < 50000000000) {
    i++
  }
  console.log('end')
}, 5000)
```

一切都会在5秒内正常工作。然而，当定义为`setTimeout`参数的函数运行时，浏览器将在长循环的执行过程中被卡住。甚至在执行循环的过程中也不能关闭浏览器标签，至少在Chrome中不能。

为了使浏览器保持响应性，即能够以足够的速度对用户的操作作出连续的反应，代码逻辑需要做到没有一个计算能够花费太长时间。

#  npm
回到从服务器获取数据的话题上来。

## **用上文提到的`fetch`来获取数据。**
Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。

它还提供了一个全局 `fetch()` 方法，该方法提供了一种简单，合理的方式来**跨网络异步**获取资源。

`fetch`的中文意思：取来；取回；提取

`fetch`基于promises，promises有三个状态表示 最终完成（或失败）及其结果值。
-   _待定（pending）_：初始状态，既没有被兑现，也没有被拒绝。
-   _已兑现（履行）_：意味着操作成功完成。
-   _已拒绝（rejected）_：意味着操作失败。

一个基本的 fetch 请求设置起来很简单。
看看下面的代码举例：
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

这里我们通过网络获取一个 JSON 文件并将其打印到控制台。最简单的用法是只提供一个参数用来指明想 `fetch()` 到的资源路径，然后返回一个包含响应结果的 promise（一个 `Response` 对象）。

当然它只是一个 HTTP 响应，而不是真的 JSON。为了获取 JSON 的内容，我们需要使用 `json()` 方法（该方法返回一个将响应 body 解析成 JSON 的 promise）。

## **用另外的库:`axios`来获取数据。**

几乎所有的JavaScript项目都是用node包管理器来定义的，也就是npm。
使用create-react-app创建的项目也遵循npm的格式。
**一个项目使用npm的明显标志是位于项目根部的`package.json`文件。**

`package.json`文件定义了项目有哪些 _dependencies_ (依赖项) ，或外部库。

我们现在想使用axios。理论上，我们可以直接在  _package.json_ 文件中定义这个库，但最好从命令行中安装它。

```js
npm install axios
```
` npm install `命令下载了库代码，将axios添加到依赖项中。

==**NB _npm_-commands应该总是在项目根目录下运行**，也就是可以找到 _package.json_ 文件的地方。==

与其他依赖项一样，代码可以在位于根目录的 `node/modules` 目录中找到。
这个学习中，依赖项应该是存在part1/node_modules里面

再看package.json文件的"dependencies"部分，就能发现多了一行：`"axios": "^0.24.0",`

通过执行以下命令，将 json-server 安装为开发依赖项（只在开发过程中使用）。

```js
npm install json-server --save-dev
```
`--save-dev`这个安装参数指的是自动把模块和版本号添加到devdependencies部分

配置文件 区分这俩部分， 是用于区别 开发依赖模块 和 产品依赖模块。

在` package.json` 文件的 scripts 部分做一个小小的补充。
```json
{
  // ...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -p3001 --watch db.json"  },//要加的部分
}
```

我们现在可以方便地，在没有参数定义的情况下，用命令从项目根目录下启动json-server。（记得先把原来运行的关掉）
```js
npm run server
```
命令行返回：
```console
 \{^_^}/ hi!

  Loading db.json
  Oops, db.json doesn't seem to exist
  Creating db.json with some default data

  Done

  Resources
  http://localhost:3001/posts
  http://localhost:3001/comments
  http://localhost:3001/profile

  Home
  http://localhost:3001

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

在任何时候输入s + enter来创建数据库的快照.
资源网址和主页为：
```console
  Resources
  http://localhost:3001/posts
  http://localhost:3001/comments
  http://localhost:3001/profile

  Home
  http://localhost:3001
```
用了两次npm install的命令，但略有不同。
```js
npm install axios
npm install json-server --save-dev
```
在参数上有细微差别。axios被安装为应用的运行时依赖，因为程序的执行需要该库的存在。
另一方面，json-server被安装为开发依赖项（`--save-dev`），因为程序本身并不需要它。它是用来在软件开发过程中提供帮助的。

#  Axios and promises
开两个终端窗口，一个跑网页的3000端口的`npm start`，一个跑假服务端的3001端口的`npm run server`。

Axios这个库可以像其他库（如React）一样被使用，即通过使用适当的 import 语句。

在文件_index.js_中添加以下内容来调用axios包，并且使用其中的get方法从服务器（也就是json-server这个程序）中获得数据。

```js
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)
```

如果你在浏览器中打开[http://localhost:3000](http://localhost:3000/)，应该会在控制台中打印出以下内容:
![[3-AxiosAndpromises.png]]
当文件index.js的内容发生变化时，React并不总是自动注意到这一点，所以你可能需要刷新浏览器来看到你的变化。
#### 自动刷新
**一个简单的解决方法**是在项目的根目录下创建一个名为`.env`的文件，并添加这一行`FAST_REFRESH=false`，使React自动注意到变化，
重新启动应用以使应用的变化生效。

## Axios 方法 get 返回一个 **`Promise`**  (承诺)。
**`Promise`** 对象用于表示一个异步操作的最终完成（或失败）及其结果值。

一个承诺是一个代表异步操作的对象。
一个承诺必然处于以下三种状态之一：
-   _待定（pending）_：初始状态，既没有被兑现，也没有被拒绝。
-   _已兑现（fulfilled）_：意味着操作成功完成。
-   _已拒绝（rejected）_：意味着操作失败。

1. 答应是 pending ：这意味着最终的值（以下两个中的一个）还不能用。
2. 承诺是 fulfilled ：它意味着操作已经完成，最终值可用，一般来说是一个成功的操作。这种状态有时也被称为 resolved 。
3. 承诺被 拒绝 ：这意味着一个错误阻止了最终值的确定，这一般代表一个失败的操作。

**我们例子中**的第一个承诺是fulfilled，
代表一个成功的`axios.get('http://localhost:3001/notes')`请求。
文件 _db.json_ 只有一个有标题的最大的块，名为notes。
第二个承诺是拒绝的，并且控制台告诉我们原因。看起来我们试图向一个不存在的地址发出HTTP GET请求。

### 如果，想访问承诺所代表的操作的结果
如果，想访问承诺所代表的操作的结果。
必须为承诺注册一个事件处理程序。
这可以通过 `then` 方法实现。

```js
const promise = axios.get('http://localhost:3001/notes')

promise.then(response => {
  console.log(response)
})
```

由then方法注册的回调函数，为其提供一个response(响应头)对象作为参数。

此处的`response`相当于一个axios.get自带的保留值，一些数据会被存储到其中。但是不一定要叫这个名字，一样会用来表示响应头。
==`response`是在指代get方法所获取的数据。==

`response`对象包含与HTTP GET请求的响应相关的所有基本数据，其中包括返回的数据、状态代码和头信息。
此处response指的是response(响应头)，response可以换成其他的单词，一样指的是response(响应头)。

将承诺对象存储在一个变量中通常是不必要的，
通常是将then方法调用链到axios方法调用中，回调函数现在接收响应中包含的数据，将其存储在一个变量中，并将注释打印到控制台。
只需要响应头里的response.data数据的时候：
```js
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
})
```

格式化**链式**方法调用的一个更可读的方法是将每个调用放在自己的一行。
```js
axios
.get('http://localhost:3001/notes')
.then(response => {
  const notes = response.data
  console.log(notes)
})
```

服务器返回的数据是纯文本，基本上就是一个长字符串。
axios库仍然能够将数据解析成一个JavaScript数组，
因为服务器使用content-type头指定数据格式为：`application/json; charset=utf-8`


# Effect-hooks
效果钩子。
_Effect Hook_ 可以让你在函数组件中执行副作用操作.
==说白了就是：Effect-hooks可以设置哪些状态改变后，效果钩子就被触发，再执行什么函数。==
后来被执行的函数被称为副作用。
一般是状态钩子改变某些状态，然后使得效果钩子被触发。
**获取数据、设置订阅、以及手动改变React组件中的DOM都是副作用的例子**。

`useEffect()` 的使用如下面语句。
```js
useEffect(() => {
    dosomeing(); // 执行一些副作用操作
}，[]);
```

**一个例子：**
```js
const hook = () => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
}

useEffect(hook, [])
```

**从例子中可以看出  useEffect 需要参数**

-   第一个参数：此处 `Hook` 接收一个包含命令式、且可能有副作用代码的函数。也就是Effect本身。
-   第二个参数：该 `useEffect` 在哪些 `state` 发生变化时，才重新执行 用于指定效果的运行频率。如果第二个参数是一个空的数组[]，那么效果就只在组件的第一次渲染时运行。

此处就是，只在第一次渲染时执行效果，也就是运行`hook`，因为第二个参数是一个空的数组[]所以只在第一次渲染的时候运行。

通过使用这个 `Hook`，你可以告诉 `React` 组件需要在渲染后执行某些操作。`React` 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 `DOM` 更新之后调用它。

默认情况下，Effect-hooks在**第一次渲染之后**和**每次更新之后**都会执行（你可以利用前面提到的第二个参数来控制渲染条件）。而且，`React` 保证了每次运行 `effect` 的同时，`DOM` 都已经更新完毕。


```js
import React, { useState, useEffect } from 'react';
```
useState状态钩子, useEffect效果钩子。

也可以这样写效果函数的代码。

```js
useEffect(() => {
  console.log('effect')

  const eventHandler = response => {
    console.log('promise fulfilled')
    setNotes(response.data)
  }

  const promise = axios.get('http://localhost:3001/notes')
  promise.then(eventHandler)
}, [])
```

1. 一个事件处理函数的引用被分配到变量 eventHandler 。
2. 由Axios的 get 方法返回的承诺被存储在变量 promise 中。
3. 回调的注册是通过给 eventHandler 变量，指的是事件处理函数，作为承诺的 then 方法的一个参数。
4. 通常没有必要把函数和承诺分配给变量，用更紧凑的方式来表示事情，如上面进一步看到的，就足够了。

```js
useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
}, [])
```

在我们的应用中仍然有一个问题。当添加新的笔记时，它们没有被存储在服务器上。

先从index.js中移除数据的获取。既然我们要从服务器上获取笔记，就不再需要将数据作为prop传递给 App 组件。

所以_index.js_可以简化为：
```js
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
最终：
index.js
```js
import ReactDOM from 'react-dom/client'
import App from './App'

import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes} />
  )
})
```
App.js
```js
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
```

下面的函数，用React的说法就是效果。

```js
() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
}
```

在渲染后立即执行。该函数的执行结果是effect被打印到控制台，命令axios.get开始从服务器获取数据，并注册以下函数作为该操作的event handler。






