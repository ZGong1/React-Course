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

const StatisticLine = ({type, toDisplay}) => {
  return (
    <div>
      {type} {toDisplay}
    </div>
  )
}

const Statistics = ({info}) => {
  if (info.good != 0 || info.neutral != 0 || info.bad != 0) {
    return (
      <div>
        <StatisticLine type="good" toDisplay={info.good}/>
        <StatisticLine type="neutral" toDisplay={info.neutral}/>
        <StatisticLine type="bad" toDisplay={info.bad}/>
        <StatisticLine type="all" toDisplay={info.good + info.neutral + info.bad}/>
        <StatisticLine type="average" toDisplay={(info.good - info.bad) / (info.good + info.neutral + info.bad)}/>
        <StatisticLine type="positive" toDisplay={info.good * 100 / (info.good + info.bad + info.neutral) + " %"}/>
      </div>
    )
  }

  return <p>No feedback given</p>
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const info = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <Header text="Give feedback" />
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral+1)} text="neutral" /> 
      <Button onClick={() => setBad(bad+1)} text="bad" /> <br/>
      <Header text="statistics"/>
      <Statistics info={info}/>
      
    </div>
  )
}

export default App