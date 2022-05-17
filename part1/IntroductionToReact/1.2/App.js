import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}

const Part1 = () => {
  return (
    <div>
      <p>Fundamentals of React</p>
      <p>10</p>		
    </div>
  )
}
const Part2 = () => {
  return (
    <div>
      <p>Using props to pass data</p>
      <p>7</p>		
    </div>
  )
}

const Part3 = () => {
  return (
    <div>
      <p>State of a component</p>
      <p>14</p>		
    </div>
  )
}


const Content = () => {
  return (
    <div>
      <Part1 /> 
      <Part2 />
      <Part3 />		
    </div>
  )
}


const App = () => {
  return (
    <div>
		<Header /> 
		<Content />
    </div>
  )
}

export default App