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

const Statistics = ({type, info}) => {
  if (type == "all") {
    return (
      <>
        {type + " "}   
        {info.good + info.neutral + info.bad}
      </>
    )
  }

  if (type == "average") {
    var average = (info.good - info.bad) / (info.good + info.neutral + info.bad)
    //console.log(average)
    return (
      <>
        {type + " "}
        {average}
      </>
    )
  }

  if (type == "positive") {
    return (
      <>
        {type + " "}
        {info.good * 100 / (info.good + info.bad + info.neutral)} %
      </>
    )
  }

  if (type == "good") {
    return (
      <div>
        {type + " "}
        {info.good}
      </div>
    )
  }

  if (type == "neutral") {
    return (
      <div>
        {type + " "}
        {info.neutral}
      </div>
    )
  }

  if (type == "bad") {
    return (
      <div>
        {type + " "}
        {info.bad}
      </div>
    )
  }
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

      <Statistics type="good" info={info}/>
      <Statistics type="neutral" info={info}/>
      <Statistics type="bad" info={info}/>
      <Statistics type="all" info={info}/> <br/>
      <Statistics type="average" info={info}/> <br/>
      {/* positive {good * 100 / (good + bad + neutral)} % <br/> */}
      <Statistics type="positive" info={info}/>
    </div>
  )
}

export default App