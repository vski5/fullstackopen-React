# Old React

【老版本的React】

在这个过程中，我们使用了状态Hook [state hook](https://reactjs.org/docs/hooks-state.html) 来添加状态到我们的 React 组件，这是 React 的新版本的一部分，可以从版本[16.8.0](https://www.npmjs.com/package/React/v/16.8.0)开始使用。

在添加Hook之前，没有办法将状态添加到函数组件。 需要状态的组件必须使用 JavaScript 类语法定义为 [class](https://reactjs.org/docs/react-component.html) 组件。

# Debugging React applications

【调试React应用】

#### The first rule of web development web开发第一原则

> **Keep the browser's developer console open at all times.**
> 
> 始终打开浏览器的开发控制台

> The _Console_ tab in particular should always be open, unless there is a specific reason to view another tab. 尤其是_Console_ 选项卡应该始终处于打开状态，除非有特定的原因需要查看另一个选项卡。

保持你的代码和网页同时打开，一直同时打开。

如果你的代码编译失败，你的浏览器就会像圣诞树一样亮起来:

不要继续编写更多的代码，而是立即找到并修复问题。 在编码的历史上，还没有哪一次编译失败的代码在编写了大量额外的代码之后奇迹般地开始工作。这样的事情在这个课程中也不会发生。

老派的，基于打印的调试总是一个好主意。

**一个例子**
如果组件如下所示

```js
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
```

不能正常工作时，开始将其变量输出到控制台是很有用的。 

为了有效地做到这一点，我们必须将我们的函数转换成不那么紧凑的形式，接收整个props对象而不是解构它:

```js
const Button = (props) => { 
  console.log(props)  
  const { onClick1, text } = props
  return (
    <button onClick={onClick1}>
      {text}
    </button>
  )
}
```

当您使用 _console.log_ 进行调试时，不要使用“加号”，像类似于 java 的方式组合对象。 即不要写:

```js
console.log('props value is' + props)
```

而应用逗号分隔需要打印到控制台的内容:

```js
console.log('props value is', props)
```

如果你使用类似于 java 的方式将一个字符串与一个对象结合起来，你最终会得到一个相当无用的日志消息:

```js
props value is [Object object]
```

而用逗号分隔的项目都可以在浏览器控制台中进行进一步检查。

可以在 Chrome 开发者控制台的debugger 中暂停应用代码的执行，只需在代码中的任何地方写入命令`debugger`即可。

下面的例子演示了一个包含 debugger 语句的函数，当函数被调用时，会尝试调用一个可用的调试器进行调试。

```js
function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}
```

当 debugger 被调用时, 执行暂停在 debugger 语句的位置。就像在脚本源代码中的断点一样。

React Developer Tools

在 Chrome 中添加 [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)扩展。 它为开发工具增加了一个新的 _Components_ 选项卡。新的开发者工具页可以用来检查不同的React 元素，以及它的属性和状态：