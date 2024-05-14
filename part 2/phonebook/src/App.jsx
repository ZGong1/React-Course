import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '123-456-7890'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = e => {
    e.preventDefault()
   
    if (persons.some(item => item.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    var newObj = { name: newName, number: newNumber }
    setPersons(persons.concat(newObj))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(item => <p key={item.name}>{item.name} {item.number}</p>)}
    </div>
  )
}

export default App