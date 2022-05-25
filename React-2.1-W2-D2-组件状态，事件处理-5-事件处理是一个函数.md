# Event handler is a function

【事件处理是一个函数】

```js
<button ={()=>setCounter(counter+1)}>
plus
</button>
```

不能舍弃：`() =>`。
`() =>`的意义在于表示一个函数，输入值为空的函数。

事件处理程序应该是一个 函数  或一个 函数引用 ，当我们编写时:

```js
<button onClick={setCounter(counter + 1)}>
```

事件处理器实际上被定义成了一个_函数调用_。
这将导致组件重新渲染，React 将再次执行 setCounter 函数调用，并且状态将发生变化，从而导致另一个重新运行...

但无论如何，让我们将事件处理程序分离成单独的函数:
```js
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)    const setToZero = () => setCounter(0)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>        plus
      </button>
      <button onClick={setToZero}>        zero
      </button>
    </div>
  )
}
```

这里就正确定义了事件处理。_onClick_ 属性的值是一个包含函数引用的变量:

```js
<button onClick={increaseByOne}> 
  plus
</button>
```