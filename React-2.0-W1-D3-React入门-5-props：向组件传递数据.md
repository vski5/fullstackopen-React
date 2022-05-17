# props: passing data to components
props用于向组件传递数据
**props是不能变成其他名字的。这是一个保留字**

之前写的无参数组件components：
```js
()=>{
	{/*something*/}
}
```
括号()内可以加入props，也就是参数。
开始向组件中加入参数。
还是修改App.js:
```js
const Hello=(props)=>{
	return(
	<div>
		<p>yes,{props.name}</p>
	</div>
	)
	
}
```
此时的props.name就是golang里面struct里的元素字段，但是在JS里是一个会被const定义出来的常量，如同一个K/V。

（常量const是块级范围的，非常类似用 let 语句定义的变量。但常量的值是无法（通过重新赋值）改变的，也不能被重新声明。）

假设：
参数props，接收了一个对象，该对象具有组件中所定义的、用于定义user的所有“属性”所对应的字段。

还是修改App.js:
```js
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>{/*这是标题*/}
      <Hello name="George" />      
      <Hello name="Daisy" />    
    </div>
  )
}
```
两个修改的App.js连到一起，常量App作为了被引用的原始值的存放地。

输出结果是：

-----
 # Greetings

yes,George

 yes,Daisy
 
---------------------------------------

`<Hello name="George" />  `中，hello作为一个声明，表明了后面的name所对应的值，作用于前面const Hello。虽然只有一个`<p>yes,{props.name}</p>`，但是会代入所有后面的与hello对应的name的值。
可以说是互相引用的。

可以有任意数量的props ，它们的值可以是“硬编码的”字符串，也可以是 JavaScript 表达式的结果。 如果props的值是通过 JavaScript 表达式实现的，那么它必须用花括号括起来。

使组件（component）Hello使用两个props:

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


最好记住，在 React 的代码中编写 _console.log()_ 命令(打印到控制台)是可行的，而且是提倡的。

还要记住 **React 组件名称首字母必须大写**。

注意 React 组件的内容(通常)需要包含 **一个根元素** 。

在 Dom 树中会有“额外的” div 元素。 这可以通过使用fragments里的短语法来避免，即用一个空元素来包装组件的返回内容:


短语法
你可以使用一种新的，且更简短的语法来声明 Fragments。它看起来像空标签：

```js
class Columns extends React.Component {
  render() {
    return (
      <>
		<td>Hello</td>
        <td>World</td>
      </>    
      );
  }
}
```

你可以像使用其他任意元素一样使用 `<> </>`，但它并不支持 key 或属性。

（`extends`关键字用来创建一个普通类或者内建对象的子类。从后面的对象继承到前一个对象）


```
const part1=(props)=>{
	return(
	<div>
		<p>yes,{props.name}</p>
		
	</div>
	)
}
const exercises1=(props)=>{
	return(
	<div>
		<p>yes,{props.name}</p>		
	</div>
	)
}
```
      <Content part1={'Fundamentals of React'} />
      <Total exercises1={10} />