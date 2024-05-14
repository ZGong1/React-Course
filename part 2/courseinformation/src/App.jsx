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
      <Header course={courses.name}/>
      <Content parts={courses.parts}/>
      <Sum parts={courses.parts}/>
    </div>
  )
}


const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {course.map((item) => {
        return <Course key={item.id} courses={item}/>
      })}

    </div>
  )
}

export default App