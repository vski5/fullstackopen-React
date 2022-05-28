import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.total === 0) {
    return <p>No feedback given</p>
  }
  return(
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    <p>average {props.average }</p>
    <p>positive {props.positive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = (good + neutral)/total 

  const Button = ({ handleClick, text }) => ( 
    <button onClick={handleClick}>    
    {text}  
    </button>
    
)
  const goodplus =()=>(setGood(good+1)) 
  const neutralplus =()=>(setNeutral(neutral+1))
  const badplus =()=>(setBad(bad+1))
  //const average =()=>(({good}-{bad})/3)

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodplus} text='good' /> 
      <Button handleClick={neutralplus} text='neutral' /> 
      <Button handleClick={badplus} text='bad' /> 
      <h1>statistics</h1>

    <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>

      
    </div>
  )
}

export default App