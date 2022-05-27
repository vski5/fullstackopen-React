# Function that returns a function

【返回函数的函数】

事件处理程序不能是对**函数的调用**，它必须是**函数**或**对函数的引用**。
```js
const Button = ({ handleClick, text }) => (  
	<button onClick={handleClick}>    
	{text}  
	</button>
)
```
此时button中onClick是具体的值。

还可以是**函数**或**对函数的引用**。

```js
const App = () => {
  const [value, setValue] = useState(10)

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}
```

`<button onClick={hello()}>button</button>
`
此时 `onClick={hello()}` ，事件处理程序现在设置为函数调用。

**为什么函数调用在这种情况下会起作用：**

函数的 **返回值return** 是分配给处理程序变量的另一个函数。

当 React 渲染行时:

```js
<button onClick={hello()}>button</button>
```

它将 hello ()的返回值赋给 onClick-属性，本质上该行被转换成:

```js
<button onClick={() => console.log('hello world')}>
  button
</button>
```

因为 hello 函数返回一个函数，所以事件处理程序现在是一个函数。

修改一下代码:

```js
const App = () => {
  const [value,setValue]=useState
  
  const handle =(who)=>{
  handle1 =()=>{console("hello",who)}
  return(handle1)
  }
  
  return(
  <div>
  <p><button onClick={handle(1)}>1</button></p>
  </div>
  )
  }
```

现在，应用有可定制重复的按钮，事件处理程序由接受参数的 hello 函数定义。
`<button onClick={handle(1)}>1</button>`中的1可以是任意需要的值，也可以是value+1，这种调用了变量的运算式。

```js
  const handle =(who)=>{
  handle1 =()=>{console("hello",who)}
  return(handle1)
  }
```
这个函数可以简化。
消除辅助变量，直接返回创建的函数:
`()=>{函数内容}`,是设定一个能跑的函数的必要结构语法。
这里已经舍去了return后面的()
```js
  const handle =(who)=>{

  return ()=>{console("hello",who)}
  }
```
因为 hello 函数是由一个单独的返回命令组成的，所以我们可以省略大括号，对箭头函数使用更紧凑的语法:

```js
const hello = (who) =>
  () => {
    console.log('hello', who)
  }
```

最后，让我们把所有的箭头写在同一行上:

```js
const hello = (who) => () => {
  console.log('hello', who)
}
```

