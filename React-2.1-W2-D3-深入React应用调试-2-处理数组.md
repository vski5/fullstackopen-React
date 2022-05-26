# Handling arrays

【处理数组】

向应用添加一个状态，该状态包含一个数组 _allClicks_ ，该数组记录应用中发生的每次单击记录。
```js
const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
```

每次单击都会被存储到一个叫 _allClicks_ 的单独的状态单元中，这个状态单元被初始化为一个空数组:
```js
const [allClicks, setAll] = useState([])
```

当单击 left 按钮时，我们将字母 _L_ 添加到 allClicks 数组中:

```js
const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  setLeft(left + 1)
}
```

向数组中添加新元素是通过`concat`方法完成的，该方法不改变现有数组，而是返回数组 _新副本_，并将元素添加到该数组中。

在 JavaScript 中也可以使用`push`方法将元素添加到数组中。
但是，不要这样做。 如前所述，React 组件(如 _allClicks_ )的状态不能直接更改
```js
const handleLeftClick = () => {
	allClicks.push('L')
	setAll(allClicks)
	setLeft(left + 1)
}
```

# 点击历史是如何渲染在页面上的:
我们为 allClicks 数组调用`join`方法，该数组将所有项目连接到一个字符串中，由作为函数参数传递的字符串分隔，在我们的例子中，该字符串是一个空格。
`<p>{allClicks.join(' ')}</p>`

join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```