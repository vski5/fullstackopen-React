import React from 'react'

const Header=(props)=>{
	return(
	<div>
		<p>yes,{props.Course}</p>
	</div>
	)
}
const Content=(props)=>{
	return(
	<div>
		<p>{props.part1}</p>
		<p>{props.part2}</p>
		<p>{props.part3}</p>
	</div>
		
	)
}
const Total=(props)=>{
	return(
	<div>
		<p>{props.exercises1}</p>
		<p>{props.exercises2}</p>
		<p>{props.exercises3}</p>
	</div>
		
	)
}
const App = () => {
  return (
    <div>
		<h1>
			<Header Course={'Half Stack application development'} />		
		</h1>
		<p>
			<Content part1={'Fundamentals of React'} />
			<Total exercises1={10}/>
			<Content part2={'Using props to pass data'} />
			<Total exercises2={7}/>
			<Content part3={'State of a component'} />
			<Total exercises3={14}/>
		</p>

    </div>
  )
}

export default App