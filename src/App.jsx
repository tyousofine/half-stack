/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const Part = () => {
    return (
      <div>
        <p>{props.part1}, {props.exr1}</p>
        <p>{props.part2}, {props.exr2}</p>
        <p>{props.part3}, {props.exr3}</p>
      </div>
            )
  }

  return (
    <Part part={props.part}/>
  )
}

const Total = (props) => {
  return (
    <p>Number exercises {props.exr1 + props.exr2 + props.exr3}</p>
  )
}

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exr1={exercises1} exr2={exercises2} exr3={exercises3}/>
 
      <Total exr1={exercises1}
      exr2={exercises2}
      exr3={exercises3}/> 
  </div>
  )
}

export default App
