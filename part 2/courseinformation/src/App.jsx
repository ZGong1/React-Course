const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {
      parts.map(item => <Part key={item.id} part={item}/>)
    }     
  </>

const Sum = ({parts}) => {
  return (
    <b>
      total of {parts.reduce((acc, part) => acc+=part.exercises, 0)} exercises
    </b>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      <Header course="Half Stack application development"/>
      <Content parts={courses.parts}/>
      <Sum parts={courses.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course courses={course} />
}

export default App