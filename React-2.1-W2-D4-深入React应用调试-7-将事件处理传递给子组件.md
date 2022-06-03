# Passing Event Handlers to Child Components

【将事件处理传递给子组件】

将按钮提取到它自己的组件中:

```js
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
```

该组件从 _handleClick_ 属性获取事件处理函数，从text 属性获取按钮的文本。

必须确保在向组件传递props时使用正确的属性名。