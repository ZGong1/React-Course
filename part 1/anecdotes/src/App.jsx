import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  let maxIdx = votes.indexOf(Math.max(...votes));
  //console.log("max index is", maxIdx)


  const onRandom = () => {
    var randomNumber = Math.floor(Math.random() * 8)
    //console.log(randomNumber)
    setSelected(randomNumber)
  }

  const onVote = () => {
    var copy = [...votes]
    copy[selected]++
    setVotes(copy)
    //console.log("onVote ran")
  }


  return (
    <div>
    <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/>
      has {votes[selected]} votes <br/>
      <button onClick={onVote}>vote</button>
      <button onClick={onRandom}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIdx]} <br/>
      has {votes[maxIdx]} votes <br/>
    </div>
  )
}

export default App