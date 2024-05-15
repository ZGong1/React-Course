import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import jsonService from './services/jsonService'

const baseUrl = "http://localhost:3001/persons"

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

    jsonService.create(newObj).then(() => console.log("test"))
  }

  const handleSearch = e => setSearchvalue(e.target.value.toUpperCase())

  const onDelete = id => {
    jsonService.remove(id).then((response) => {console.log(response)})
    var newPersons = persons.filter(item => item.id !== id)
    setPersons(newPersons)
  }
  



  return (
    <div>

      <h2>Phonebook</h2>
      <Filter handler={handleSearch}/>

      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Persons toShow={toShow} onDelete={onDelete}/>
    
    </div>
  )
}

export default App