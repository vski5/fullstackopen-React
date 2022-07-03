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