import { useState } from 'react'


const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const onGood = () => {
  //   console.log("Its running")
  //   setGood(good + 1)
  // }

  

  return (
    <div>
      <Header text="Give feedback" />
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral+1)} text="neutral" /> 
      <Button onClick={() => setBad(bad+1)} text="bad" /> <br/>
      <Header text="statistics"/>

      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad}
    </div>
  )
}

export default App