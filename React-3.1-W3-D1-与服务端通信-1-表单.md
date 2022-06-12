# React-3.1-W3-D1-与服务端通信-1-表单

导入useState函数，用它来定义一块状态，用prop中传递的初始笔记数组进行初始化。
该组件使用 `useState` 函数来初始化存储在 `notes` 中的状态片断，
并使用`prop`中传递的笔记阵列。
```js
import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {  
const [notes, setNotes] = useState(props.notes)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =><Note key={note.id} note={note} /> ) }
      </ul>
    </div>
  )
}

export default App
```

## 接下来，让我们在组件中添加一个HTML表单，用来添加新的笔记(note)。
HTML 表单是用户和 web 站点或应用程序之间交互的主要内容之一。

它们允许用户将数据发送到 web 站点。大多数情况下，数据被发送到 web 服务器，但是 web 页面也可以自己拦截它并使用它。

HTML 表单是由一个或多个小部件组成的。这些小部件可以是文本字段 (单行或多行)、选择框、按钮、复选框或单选按钮。

**所有 HTML 表单都以一个`<form>`元素开始：**

总览：
```js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

```
添加表单的代码为：
```js
const App = (props) => {
  ...

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <div>
	...
	
      <form onSubmit={addNote}> 
      
        <input />
        
        <button type="submit">save</button>
        
      </form>
    </div>
  )
}

```

`<form onSubmit={addNote}>`是指在onSubmit（提交）的时候调用addNote。

addNote是上文约定好的函数。将 `addNote` 函数作为事件处理程序添加到表单元素中，当表单被提交时，点击提交按钮，该函数将被调用。

**事件处理**程序立即调用`event.preventDefault()`方法，防止提交表单的默认动作。默认动作会，忽略其他操作，导致页面重新加载。

参数event是触发调用**事件处理函数**的**事件**。是合成事件。
有很多事件类型属于 Event ，比如`afterprint	`(当页面开始打印时，或者关闭打印对话框时，发生此事件。)


存储在`event.target`中的**事件**的目标被记录到控制台，在此处为:
```js
<form onSubmit={addNote}> 
        <input />
        <button type="submit">save</button>
</form>
```

`<input />`会制造出来一个框框，供人输入。

`<button type="submit">save</button>`就是按钮，
只为type赋参为`type="submit"` 。
阻止表单的默认提交行为。

# 如何访问表单的 `input` 元素中包含的数据？
##   方法一：Controlled component
【受控组件】


添加一个新的状态，叫做`newNote`，用来存储用户提交的输入，
把它设置为`input`元素的`value`属性。
`input`元素就是会制造出来一个框框，供人输入。
```js
const [newNote, setNewNote] = useState('a new note...')
```
```js
return (
<input value={newNote} />
)
```
存储为`newNote`状态初始值的占位符文本出现在`input`元素中，但输入文本不能被编辑。

为了**实现对输入元素的编辑**，我们必须注册一个 **事件处理程序** ，使输入元素的变化与组件的状态同步。

```js
  const handleNoteChange = (event) => {   
  console.log(event.target.value)    //打印
  setNewNote(event.target.value)     //可以设置新的值的事件处理程序
  }
```
input组件也要操作一下：
```js
<input
		//初始值为newNote
        value={newNote}  
        //改变框内值时触发事件handleNoteChange  
        //为表单的输入元素的onChange属性注册了一个事件处理器。
        onChange={handleNoteChange}          
/>
```
每次输入元素发生变化时都会调用事件处理程序。事件处理函数接收事件对象作为其event参数。

事件对象的target属性现在对应于被控制的input元素，而event.target.value指的是该元素的输入值。

注意，我们不需要像在onSubmit事件处理程序中那样调用event.preventDefault()方法。
这是因为在输入变化时没有默认动作（提交表格），这与表单提交时不同。


现在App组件的`newNote状态`反映了输入的当前值，这意味着我们可以完成创建新笔记的`addNote`功能。
原来的`addNote` ：
```js
const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }
```

现在：
```js
const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length + 1,
  }

  setNotes(notes.concat(noteObject)) 
  setNewNote('')
}
```
首先，我们为笔记创建一个新的对象，叫做**noteObject**(这和index.js里的数组里的元素格式是一样的。)，它将从组件的newNote(输入框`<input/>`的初始值)状态接收其内容。

唯一的标识符id是根据笔记的总数生成的。这种方法适用于我们的应用，因为笔记永远不会被删除。在Math.random()函数的帮助下，我们的笔记有50%的机会被标记为重要。

`setNotes( notes.concat(noteObject) ) ` 是useState方法里的设置部分，再用concat方法将**noteObject**加到notes(index.js里的数组 数据集)的后面。用于将

`setNewNote('')` 用于设置newNote的值，
最终会作用到`<input value={newNote}/>`，
表单的供输入的框的默认值就会被改，不再显示默认值，而是显示修改的值。


# Filtering Displayed Elements
【过滤显示的元素】

让我们在App组件中添加一个状态，跟踪哪些笔记应该被显示。
`const [showAll, setShowAll] = useState(true)`

让我们改变这个组件，让它在`notesToShow变量`中存储一个所有要显示的笔记的列表。
列表中的项目取决于该组件的状态：
```js
 const notesToShow = showAll    
 ? notes    
 : notes.filter(note => note.important === true)
```

```js
return(
<ul>

{notesToShow.map(note =>
	 <Note 
	 key={note.id} 
	 note={note} />
)}

</ul>
)
```

**条件（三元）运算符**是 JavaScript 仅有的使用三个操作数的运算符。
`condition ? exprIfTrue : exprIfFalse`
翻译一下：
`一个条件 ? ture就执行这个 : false就执行这个`
null就执行exprIfFalse。
```js
 const notesToShow = showAll    
 ? notes    
 : notes.filter(note => note.important === true)
```
ture就执行notes，false就执行被筛选(`filter`)的的notes。
这被选择出来的值会赋值给notesToShow，
在return中notesToShow会打印表单，
当三元运算符为false时，渲染到网页表单就是只保留notes.important === true的。

```js
notes.filter(note => note.important === true)
```

比较运算符实际上是多余的，因为 `note.important` 的值要么是 true ，要么是 false ，这意味着我们可以简单地写成：

```js
notes.filter(note => note.important)
```

我们之所以先展示比较运算符，是为了强调一个重要的细节：在JavaScript中， `val1 == val2` 并不是在所有情况下都能如愿以偿，在比较中完全使用 `val1 === val2` 会更安全。

**你可以通过改变`showAll`状态的初始值来测试过滤的功能。**

接下来，让我们添加功能，使用户能够从用户界面上切换应用的showAll状态。

相关的改变如下：
```js
 return (
      <div>        
      <button onClick={() => setShowAll(!showAll)}>          
      show {showAll ? 'important' : 'all' }        
      </button>      
      </div>
```
显示的笔记（所有与重要的）是用一个按钮控制的。这个按钮的事件处理程序非常简单，它被直接定义在按钮元素的属性中。该事件处理程序将_showAll_的值从真切换到假，反之亦然。

```js
() => setShowAll(!showAll)
```

按钮的文本取决于 `showAll` 状态的值：

```js
show {showAll ? 'important' : 'all'}
```

