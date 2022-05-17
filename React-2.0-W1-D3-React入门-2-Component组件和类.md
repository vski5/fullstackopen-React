# Component
第一部分来自官方文档，写的不如赫尔辛基的教程，定义看第二部分也行。
## 组件
组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。

例如，`<div />` 代表 HTML 的 div 标签，
而 `<Welcome />` 则代表一个组件，并且需在作用域内使用 `Welcome`。Welcome可以是其他的名字，自己定义。

本来应该是组件 & Props。[组件和道具 – React (reactjs.org)](https://reactjs.org/docs/components-and-props.html)

Props是入参的意思。

通过组件，可以将 UI 拆分为独立的、可重用的部分，并单独考虑每个部分。

从概念上讲，组件类似于JavaScript**函数**。它们接受任意输入（称为“props”），并返回描述屏幕上应该显示的内容的 React 元素。

定义组件的最简单方法是编写一个 JavaScript 函数：
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
此函数是一个有效的 React 组件，因为它接受一个包含数据的“props”（代表属性）对象参数，并返回一个 React 元素。

我们将这些组件称为“函数组件”，因为它们实际上是JavaScript函数。

###  类，以及类来定义组件
您还可以使用 **类**来定义组件：
- （**类**是特殊的函数，包括类声明和类表达式，两者都可以定义类）
- （“**变量提升**”意味着变量和函数的声明会在编译阶段被放入内存中，移动到代码的最前面）
- （函数声明会提升，类声明不会）

#### **类声明**
**定义类的一种方法**是使用类声明。
要声明一个类，你可以使用带有`class`关键字的类名，就像下面。
这里的 Welcome 是类名。
```js
class Welcome extends React.Component {
  render() { //render，渲染
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

从 React 的角度来看，上述两个组件是等效的。

#### **类表达式**
**定义类的一种方法**是使用类表达式。

类表达式可以命名(**命名类**) & 不命名(**未命名/匿名类**)。

**命名类** 表达式的名称是该**类体**的局部名称。

```js
// 未命名/匿名类
let Rectangle = class {
  constructor(height, width) {
  {/*constructor，构造函数*/}
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// 命名类
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 输出: "Rectangle2"
```

####  **类体**
一个类的类体是一对花括号/大括号 `{}` 中的部分。
这是你定义类成员的位置，如方法或构造函数。
以上面提到的 命名类为例
```js
// 命名类
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 输出: "Rectangle2"
```
class有点像golang里的struct。
Rectangle2就是类名

### 渲染组件

上面的都是DOM标签
```js
const element = <div />;
```

React 元素也可以是用户自定义的组件：

```js
const element = <Welcome name="Sara" />;
```

当 React 元素（element）为用户自定义组件时，它会将 JSX(下一章讲) 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

此时的props如同golang里面声明了别名的函数。

这段代码会在页面上渲染 “Hello, Sara”：

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```
解析：
1.  我们调用 `root.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2.  React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3.  `Welcome` 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
4.  React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`。




# Component，回归正题
书接上文

### 改过的App.js
```js
import React from 'react'
const App = () => (
  <div>
    <p>Hello world lo23</p>
  </div>
)

export default App
```

文件App.js 用`const` 定义了一个 React component（就是组件） ，命名为App。

（从概念上讲，组件类似于JavaScript**函数**。它们接受任意输入（称为“props”），并返回描述屏幕上应该显示的内容的 React 元素。）

（export 输出， default 默认）

### index.js

index.js的最后一行代码为：

```js
ReactDOM.render(<App />, document.getElementById('root'))
```

这是将其内容渲染到div 元素中，其 id 值为 'root'，该（div ）元素在文件public/index.html中定义。

（div，内容划分元素，通用的流内容容器）

默认情况下，文件 _public/index.html_ 并没有什么能够展示在浏览器的HTML标签内容。 

可以尝试在文件中添加一些 HTML。 

但是，在用 React 开发时，需要渲染的内容通常需要定义为 React 组件。

定义组件App的代码:

```js
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)
```
App这个组件被渲染成div元素，div中又包含一个p-标签，p标签包含的文本为Hello world。

严格来说，这个组件被定义成了一个 JavaScript 函数。如下所示，这是一个不接收任何参数的函数 :

```js
() => (
  <div>
    <p>Hello world</p>
  </div>
)
```

然后该函数被赋给一个 const 修饰的变量 _App_:

```js
const App = ...
```

箭头函数定义=>,ES6 标准.

由于这个函数只包含一个表达式，所以我们使用了简写，不简写的话是如下这段代码:

```js
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```

换句话说，这个函数返回(return)了表达式的值。

定义组件的函数中可以包含任何类型的 JavaScript 代码。
就是说最外层括号内可以夹很多组件，
**大括号中的任何代码都会被计算，并且计算的结果将嵌入到HTML中，嵌入的位置就是 HTML 中定义的位置。
比如说这里对应的HTML是< div id="root" >< /div >
App这个组件由 index.js指定渲染到 id 值为 'root' 的div 元素中

- 比如日志，输出在控制台console
```js
const App = () => {

console.log('hello')//这里单引号、双引号都可以
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```

- 比如动态渲染
```js
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toDateString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
```
输出时间和计算结果
常量引用和计算藏在大括号内比如`{a} plus {b} is {a + b}`

大括号中的任何代码都会被计算，并且计算的结果将嵌入到HTML中，嵌入的位置就是 HTML 中定义的位置。
