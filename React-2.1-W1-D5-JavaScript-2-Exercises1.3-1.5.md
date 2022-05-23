# Exercises1.3

让我们继续在应用中使用对象。 按如下方式修改_App_ 组件的变量定义来重构应用，使其仍然可以正常工作:

```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

修改后：

要按题目要求的格式来......

```js
import React from 'react'
const App = () => {
  const course = 'Half Stack application development'
  const parts = {
    parts1: {
      name: 'Fundamentals of React',
      exercises: 10
    },
     parts2: {
      name: 'Using props to pass data',
      exercises: 7
    },
     parts3: {
      name: 'State of a component',
      exercises: 14
    }
  }

return (
  <div>
      <h1>{course}</h1>
    <p> name:{parts.parts1.name}</p>
    <p> exercises:{parts.parts1.exercises}</p>
    <p> name:{parts.parts2.name}</p>
    <p> exercises:{parts.parts2.exercises}</p>    
    <p> name:{parts.parts3.name}</p>
    <p> exercises:{parts.parts3.exercises}</p>
  </div>
  )
}
export default App
```
# Exercises1.4

然后将对象放到一个数组中。按如下方式修改_App_ 变量的定义，并相应地修改应用的其他部分:
```js
import React from 'react'

const Header =(props)=>{
    return (
    <h1>{props.course}</h1>
    )
}
const Part =(props)=>{
    return(
       <p>part:{props.part},exercise:{props.exercise}</p> 
    )
}
const Content =(props)=>{
    return(
        <div>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
        </div>
    )

}
const Total = (props) => {
    return (
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
  }
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
        <div>
          <Header course={course} />
          <Content parts={parts} />
          <Total parts={parts} />
        </div>
      )
  }
  
  export default App
```
# Exercises1.5

让我们进一步做一些改变。 将课程及其章节合成为一个 JavaScript 对象。 修复好之前所有的缺陷。

```js
import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App
```