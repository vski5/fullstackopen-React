import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ handleClick, text }) => ( 
    <button onClick={handleClick}>    
    {text}  
    </button>
)
  const goodplus =()=>(setGood(good+1))
  const neutralplus =()=>(setNeutral(neutral+1))
  const badplus =()=>(setBad(bad+1))
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodplus} text='good' /> 
      <Button handleClick={neutralplus} text='neutral' /> 
      <Button handleClick={badplus} text='bad' /> 
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      
    </div>
  )
}

export default App