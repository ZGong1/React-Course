const Header = (props) => {
  return ( <div>
    <h1>{props.title}</h1>
  </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part.name} {props.part.exercise} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
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
      <Header title={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App