# 在服务端将数据Alert出来
Alert：其主要用法就是在你自己定义了一定的函数以后，通过执行相应的操作，所弹出对话框的语言。并且alert对话框通常用于一些对用户的提示信息。
简而言之：一个弹窗
## REST APIs一般使用的一些约定
REST中路由的常规使用
![[REST中路由的常规使用.png]]




## Sending Data to the Server
对负责创建一个新笔记的事件处理程序做如下修改。

```js
addNote = event => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date(),
    important: Math.random() < 0.5,
  }

  axios    
  .post('http://localhost:3001/notes', noteObject)   
  .then(response => {      
  console.log(response)    
  })
  }
```

1. 为注释创建一个新的对象，但省略了id属性，因为最好让服务器为我们的资源生成id。
2. 该对象使用axios的post方法被发送到服务器。注册的事件处理程序记录了从服务器发回控制台的响应。
3. 新创建的笔记资源被存储在response对象的data属性值中。

新的注释还没有渲染在屏幕上。这是因为我们在创建新笔记时没有更新App组件的状态。
解决方法：
```js
 axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))      
      setNewNote('')    
      })
```

后台服务器返回的新笔记被添加到我们应用的状态中的笔记列表中，习惯的方法是使用setNotes函数，然后重设笔记创建表单。

一个需要记住的重要细节是，concat方法并不改变组件的原始状态，而是创建一个新的列表副本。
filter是筛出符合条件的值，建立新的副本。

运行步骤：
axios.post获得服务器json，用useState将其加入原有的notes中。

#  Changing the Importance of Notes

让我们为每个笔记添加一个按钮，可以用来切换其重要性。

我们对 Note 组件做如下修改。
```js
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
```
解释：
添加一个按钮，并将其事件处理程序指定为组件prop中传递的`toggleImportance`函数。
App组件定义：初始版本的` toggleImportanceOf `事件处理函数，并将其传递给每个 Note 组件。
App组件定义：`toggleImportance`事件处理函数，用于获得被` toggleImportanceOf `事件处理函数操作过的 字符串。
```js
  const toggleImportanceOf = (id) => {    
  console.log('importance of ' + id + ' needs to be toggled')  
  }
  
  ..........

  toggleImportance={() => toggleImportanceOf(note.id)}
```

ES6中添加的**模板字符串**语法可以用来以更漂亮的方式编写类似的字符串。
```js
console.log(`importance of ${id} needs to be toggled`)
```
我们现在可以使用 "美元括号 "语法在字符串中添加将计算JavaScript表达式的部分，例如一个变量的值。
注意，模板字符串中使用的引号（键盘左上角的）与普通JavaScript字符串中使用的引号不同。

存储在json-server后台的单个笔记可以通过对笔记的唯一URL进行HTTP请求，以两种不同方式进行修改。我们可以用HTTP PUT请求来替换整个笔记，或者用HTTP PATCH请求只改变笔记的某些属性。
