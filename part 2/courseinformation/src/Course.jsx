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

export default Course