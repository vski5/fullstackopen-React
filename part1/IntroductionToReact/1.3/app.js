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