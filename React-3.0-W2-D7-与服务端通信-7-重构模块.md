# Refactoring Modules
【重构模块】
通过**解构赋值** 可以将属性/值从对象/数组中取出，赋值给其他变量。
说白了就是`...someting` 可以被赋予剩下对象/数组中的值。
```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```



直接使用**解构**来检索prop的字段 `notes` 。
值的传递：{ notes1 }-->notes1.map-->note2.id / note2.content
只要把包含id和content的数组代入{ notes1 }（函数的输入值就行）
```js
const App = ({ notes1 }) => {  
return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes1.map(note2 =>
          <li key={note2.id}>
            {note2.content}
          </li>
        )}
      </ul>
    </div>
  )
}
```

## 把显示一个笔记分离成独立的组件Note。

```js
const Note = ({ note }) => {  
return (    
<li>{note.content}</li>  
)}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
	<ul>
        {notes.map(note =>          
        <Note key={note.id} note={note} />        
        )}      
        </ul>
    </div>
  )
}
```
现在必须为 Note 组件定义 key 属性，而不是像以前那样为 li 标签定义。
也就是说Note数组里面要有key属性key={note.id}中的id项。

我们一直都在使用模块。文件_index.js_的前几行。
import了三个模块，使它们可以在该文件中使用。
模块React被放入变量React，模块react-dom被放入变量ReactDOM，而定义应用主要组件的模块 `./App` 被放入变量App。
```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
```


## 把刚建立的 `Note组件` 移到自己的模块中。
 components：组件、元件
 
在较小的应用中，组件通常被放在一个叫做 components 的目录中，而这个目录又被放在 src 目录中。惯例是用组件的名字来命名文件。

现在，我们将为我们的应用创建一个名为 components 的目录，并在其中放置一个名为 Note.js 的文件。


Note.js文件的内容如下。
```js
import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note
```
`const Note` 相当于文件的总结，最后返回的就是Note，所以模块最后的声明要和这个文件的总结的函数（js中函数就是值）同名。
模块的最后一行`export default Note`声明这个组件的引用名为Note，也可以说是把模块的总结提出来了。

现在使用该组件的文件 --App.js-- 可以导入(import)该模块。
注意，当导入我们自己的组件时，必须给出它们的位置，_与导入的文件位置有关_。`'./components/Note'`
开头的句号 `.` 指的是当前目录，所以模块的位置是当前目录下 components 子目录中一个叫 Note.js 的文件。文件名的扩展名_.js_可以省略。
```js
import Note from './components/Note'
```

文件目录如下：
```
src
└─components
	└─Note.js
└─App.js
└─index.js
```


如果你克隆了某个项目，在用`npm start`启动应用之前，运行`npm install`命令。

```js
import Note from './components/Note'

const App = ({ notes } ) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
```

```js
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
```
此处的`<Note key={note.id} note={note} />`里的Note就是应用了上面自定义的组件，key是标签(key)组件是自带的，note={note}就是填写Note函数（组件）需要的数值。