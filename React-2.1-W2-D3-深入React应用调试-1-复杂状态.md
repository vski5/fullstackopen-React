# Complex state

【复杂状态】

`const [ counter, setCounter ] = useState(0)`

`counter`为状态值，可用其他的单词替代。
`setCounter()`可用于设定状态，可用其他的单词替代。
`useState(0)`表示状态初始值为0。

多次使用 useState 函数来创建单独的状态“片段”，创造更复杂的状态。

为应用创建了两个名为 left 和 right 的初始值为0的状态:

```js
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
    <p>{left}</p>
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      
     <p>{right}</p>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      
    </div>
  )
}
```

组件获得对 setLeft 和 setRight 函数的访问权，可以使用这两个函数更新这两个状态。

**组件的状态或其状态的一部分可以是任何类型**。 

我们可以通过将 left 和 right 按钮的单击次数保存到一个对象中来实现相同的功能:

```js
{
  left: 0,
  right: 0
}
```

在这种情况下，应用应该是这样的:

先为两个值设定初始状态。
**组件的状态或其状态的一部分可以是任何类型**。

注意，默认值要用大括号括起来，此处的counter的值为`{left=0,right=0}`，两个默认值。

```js
const [counter,setCounter]=useState({
	left=0,
	right=0
})
```
现在设定点击后的函数操作：
```js
const handeleft =()=>{
	const setleft={
		left:counter.left+1,
		right:counter.right
	}
	setCounter(setleft)
}
```
`setCounter(setleft)`和`setCounter(counter+1)`是一样的，不过把该执行的函数设置到一个代称里面去了。
```js
const setleft={
		left:counter.left+1,
		right:counter.right
	}
```
counter.left表示执行的对象是上面声明的counter里的left。

完整的app.js为：
```js
import React, { useState } from 'react';

const App =()=>{
  const [counter,setCounter]=useState({left:0,right:0})
  const plusleft =()=>{
    const plusleft1 = {
      left:counter.left+1,
      right:counter.right
    }
    setCounter(plusleft1)
  }
  const plusright =()=>{
    const plusright1 = {
      left:counter.left,
      right:counter.right+1
    }
    setCounter(plusright1)
  }

  return(
    <div>
    <p>{counter.left}</p>
    <button onClick={plusleft}>
      left
      </button>
      <p>{counter.right}</p>
    <button onClick={plusright}>
    right
      </button>
    </div>
  )
}

export default App
```

# 展开语法

**展开语法(Spread syntax),** 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；
还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。

`...numbers`或者是其他`...单词`是在创造一个新对象，包括`...numbers`对象中除了声明的内容外的新副本。

(**译者注**: 字面量一般指 `[1, 2, 3]` 或者 `{name: "mdn"}` 这种简洁的构造方式)
```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

```

以上面的App.js为例：
```js
const plusleft =()=>{
    const plusleft1 = {
      left:counter.left+1,
      right:counter.right
    }
    setCounter(plusleft1)
  }
```
用展开对象描述就是：
```js
const plusleft =()=>{
    const plusleft1 = {
      ...counter,
      left:counter.left+1
    }
    setCounter(plusleft1)
  }
```