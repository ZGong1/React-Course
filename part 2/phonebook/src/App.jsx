import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import axios from 'axios'
import jsonService from './services/jsonService'
// testing on new pc

const baseUrl = "http://localhost:3001/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchvalue] = useState('')
  const [errorMessage, setErrorMessage] = useState([null, null])
  var toShow = persons.filter(item => item.name.toUpperCase().includes( searchValue ))

  useEffect(() => {
    var promise = axios.get("http://localhost:3001/persons")

    promise.then(response => setPersons(response.data))
  }, [])

  
  // persons.filter(item => !(item.name.toUpperCase().indexOf("A")))

  const addName = e => {
    e.preventDefault()
   
    if (persons.some(item => item.name === newName)) {
      if (!window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`))
        return
      
      // code for confirmed change of number
      var personToEdit = persons.find(item => item.name === newName)
      var toReplace = {...personToEdit, number: newNumber}
      jsonService.replace(toReplace).then((response) => {
        console.log("response.data", response.data)
        setPersons( persons.map(item => toReplace.id !== item.id ? item : response.data) )
        setErrorMessage([`Changed ${newName}'s number`, "green"])
        setTimeout(() => setErrorMessage([null, null]), 5000)
        setNewName('')
        setNewNumber('')
      })

      return
    }

    // new person added
    var newObj = { name: newName, number: newNumber }
    
    jsonService.create(newObj).then((response) => {
      setErrorMessage([`Added ${newName}`, "green"])
      setPersons(persons.concat(response.data))
    })
    setTimeout(() => setErrorMessage([null, null]), 5000)
    setNewName('')
    setNewNumber('')
  }

  const handleSearch = e => setSearchvalue(e.target.value.toUpperCase())

  const onDelete = (id, name) => {

    var userResponse = window.confirm(`Are you sure you would like to delete the entry?`)

    if (userResponse) {
      jsonService.remove(id)
        .then((response) => {
          console.log(response)
        }).catch(() => {
          setErrorMessage([`Information of ${name} has already been removed from the server`, "red"])
          setTimeout(() => setErrorMessage([null, null]), 5000)
        })
      var newPersons = persons.filter(item => item.id !== id)
      setPersons(newPersons)
    }
  }
  



  return (
    <div>

      <Notification message={errorMessage}/>

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