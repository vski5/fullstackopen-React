回到 React。

我们从一个新的例子开始:

```js
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
```

# Component helper functions

【组件辅助函数】

修改例子，使Hello组件中用const和箭头符号定义另外的一个函数：
扩展一下Hello组件，让它能猜到被问候(greeted)者的出生年份
```js
const Hello = (props) => {
  const bornYear = () => {    
  const yearNow = new Date().getFullYear()    
  return yearNow - props.age  
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>    
    </div>
  )
}
```
猜测出生年份的逻辑被放到了它自己的函数中，这个函数会在渲染组件时被调用。

用户的年龄不必单独作为参数传递给函数，因为它可以直接访问传递给组件的所有props。

组件辅助函数实际上是在另一个函数中定义的，而这个函数是我们用来定义组件行为的。

在 JavaScript 中，在函数中定义函数是一种常规操作。

# Destructuring解构
**解构赋值**语法是一种 Javascript 表达式。

通过**解构赋值,** 可以将属性/值从对象/数组中取出,赋值给其他变量。

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];//解构赋值

console.log(rest);
// expected output: Array [30,40,50]
```

在前面的代码中，我们必须将 props.name 和 props.age 传递给组件让组件来引用。 

在这两个表达式中，我们必须在代码中重复 props.age 两次。

因为props 是一个对象：
```js
props = {
  name: 'Arto Hellas',
  age: 35,
}
```

我们可以通过将属性值直接赋值为两个变量， name 和 age 来简化我们的组件，然后我们可以在代码中使用这两个变量:

```js
const Hello = (props) => {
  const name = props.name  const age = props.age
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

 如前所述，如果一个箭头函数由单个表达式组成，那么函数体就不需要用花括号括起来。 在这种更紧凑的形式中，函数只返回单个表达式的结果。
也就是说，下面的两个函数定义是等价的:

```js
const bornYear = () => new Date().getFullYear() - age

const bornYear = () => {
  return new Date().getFullYear() - age
}
```

解构使变量的赋值变得更加容易，因为我们可以使用它来提取和收集对象属性的值，将其提取到单独的变量中:

```js
const Hello = (props) => {
  const { name, age } = props //使用 解构 来提取和收集对象属性的值，将其提取到单独的变量中
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      {/*此处从单独变量中使用*/}
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

`const { name, age } = props`使用 解构 来提取和收集对象属性的值，将其提取到单独的变量中

如果我们要解构的对象具有值
例如：
```js
props = {
  name: 'Arto Hellas',
  age: 35,
}
```

表达式 `const { name, age } = props` 会将值 'Arto Hellas' 赋值给 name，35赋值给 age。

我们可以进一步解构:
传递给组件的props现在直接解构为变量 name 和 age。
注意({ name, age })中有大括号。
```js
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```
这意味着不需要将整个 props 对象赋值给一个名为_props_ 的变量中，然后再将其属性分配到变量 name 和 age 中：
```js
const Hello = (props) => {
  const { name, age } = props
```
(上下等效)
```js
const Hello = ({ name, age }) => {
```