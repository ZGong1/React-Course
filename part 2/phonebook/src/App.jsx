import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchvalue] = useState('')
  var toShow = persons.filter(item => item.name.toUpperCase().includes( searchValue ))

  
  // persons.filter(item => !(item.name.toUpperCase().indexOf("A")))

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

  const handleSearch = e => {
    setSearchvalue(e.target.value.toUpperCase())
    //console.log("toShow is now: ", toShow)
  }

  



  return (
    <div>

      <h2>Phonebook</h2>
      <Filter handler={handleSearch}/>

      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      {/* <form onSubmit={addName}>             // addName, newName, setNewName, newNumber, setNewNumber
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}


      <h2>Numbers</h2>
      <Persons toShow={toShow}/>
      {/* {toShow.map(item => <p key={item.name}>{item.name} {item.number}</p>)} */}


      {/* DEBUG */}
    </div>
  )
}

export default App