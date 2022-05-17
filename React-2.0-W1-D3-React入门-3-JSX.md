# JSX，是一个 JavaScript 的语法扩展。
 
我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。

JSX 可能会使人联想到模板语言，但它具有 JavaScript 的全部功能。

标签语法，例子
```JSX
const element = <h1>Hello, world!</h1>;
```

看起来 React 组件返回的是 HTML 标签，但实际并不是这样。

React 组件的布局大部分是使用JSX编写的。

尽管 JSX 看起来像 HTML，但我们其实是在用一种特殊的方法写 JavaScript 。
在底层，React 组件实际上返回的 JSX 会被编译成 JavaScript。
使用 _create-react-app_ 创建的项目会配置为自动编译。

JSX 是一种“类XML”语言，这意味着每个标签都需要关闭。 
例如，换行符是一个空元素，在 HTML 中可以这样写:

```html
<br>
```

但是在写 JSX 时，HTML 中 标签需要如下关闭:

```html
<br />
```

`{/z在大括号内这么注释/}`