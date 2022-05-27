# Rules of Hooks

【Hook的规则】

`useState` 是学习的第一个 “Hook”。

## Hook 和函数组件

复习一下， React 的函数组件是这样的：

```js
const Example = (props) => {
  // 你可以在这使用 Hook
  return <div />;
}
```

或是这样：

```js
function Example(props) {
  // 你可以在这使用 Hook
  return <div />;
}
```

你之前可能把它们叫做“无状态组件”。但现在我们为它们引入了使用 React state 的能力，所以我们更喜欢叫它”函数组件”。

Hook 在 class 内部是**不**起作用的。但你可以使用它们来取代 class 。

Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，`useState` 是允许你在 React 函数组件中添加 state 的 Hook。

**hook 只能从定义 React component 的函数体内部调用**

class实现等价hook会用到this，hook是一个单个函数体内的上下文（包含所有需要的方法。）