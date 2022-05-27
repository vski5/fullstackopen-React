# Conditional rendering

【条件渲染】

让我们修改我们的应用，使得单击历史的渲染由一个新的 _History_ 组件处理:

```js
const History = (props) => {  
	if (props.allClicks.length === 0) {    
		return (      
		<div>
		the app is used by pressing the buttons     
		</div>    
		)  
		}  
		return (    
		<div>
	button press history: {props.allClicks.join(' ')}    
		</div>  
		)
		}
```

由`<History allClicks={allClicks} />`反馈渲染。

现在，组件的行为取决于是否单击了任何按钮。

如果没有，这意味着 _allClicks_ 数组是空的，那么该组件将渲染一个带有如下说明的 div 组件:

```js
<div>the app is used by pressing the buttons</div>
```

在其他情况下，该组件渲染单击历史记录:

```js
<div>
  button press history: {props.allClicks.join(' ')}
</div>
```

_History_ 组件根据应用的状态渲染完全不同的 React-元素。

让我们对我们的应用进行最后一次修改，重构它，用上我们前面定义的 Button 组件:
（是前几章学过的简化手法）
```js
const Button = ({ handleClick, text }) => (  
	<button onClick={handleClick}>    
	{text}  
	</button>
)
```

```js
return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />      
      <Button handleClick={handleRightClick} text='right' />      
      {right}
      <History allClicks={allClicks} />
    </div>
  )
```
总结：
```js
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (  <button onClick={handleClick}>    {text}  </button>)
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
      <Button handleClick={handleLeftClick} text='left' />      <Button handleClick={handleRightClick} text='right' />      {right}
      <History allClicks={allClicks} />
    </div>
  )
}
```


