# Changes in state cause rerendering

【状态的改变导致重新渲染】

三个 _Button_ 组件。button 都包含事件处理，用来改变计数器的状态。

当单击其中一个按钮时，将执行事件处理程序。 **事件处理程序使用 setCounter 函数更改 App 组件的状态**。

**调用一个改变状态的函数会导致组件的重新渲染。**

因此，如果用户单击_plus_ 按钮，按钮的事件处理程序将 counter 的值更改为1，并重新渲染 App 组件。

这将导致其子组件 Display 和 Button 也被重新渲染。

# Refactoring the components

【重构组件】
类似
[[React-2.1-W2-D1-组件状态，事件处理-3-有状态组件]]
中提到的，舍去props，将需要引用的值放到括号内，要用大括号括起来。
`(props) =>`到`({ onClick, text }) =>`
简化 Button 组件。

```js
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
```

我们可以使用解构，只从_props_ 获取所需的字段，并使用更紧凑的箭头函数:

```js
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
```