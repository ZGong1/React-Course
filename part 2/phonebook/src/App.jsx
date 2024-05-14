import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchvalue] = useState('')
  var toShow = persons.filter(item => item.name.toUpperCase().includes( searchValue ))

  useEffect(() => {
    var promise = axios.get("http://localhost:3001/persons")

    promise.then(response => setPersons(response.data))
  }, [])

  
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

  const handleSearch = e => setSearchvalue(e.target.value.toUpperCase())

  



  return (
    <div>

      <h2>Phonebook</h2>
      <Filter handler={handleSearch}/>

      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Persons toShow={toShow}/>
    
    </div>
  )
}

export default App