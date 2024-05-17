import React, { useEffect } from 'react';
import axios from 'axios'
import {useState} from 'react'
import Countrylist from './Countrylist';


function App() {
  const [searchString, setSearchString] = useState('')
  const [toShow, setToShow] = useState([])
  const [countryList, setCountryList] = useState([])

  var numOfMatches = toShow.length

  // load api data but only once at start
  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      setCountryList( response.data.map(item => ({name: item.name.common, showToggle: false})))
    })
  }, [])

  //update toShow every time searchString changes
  useEffect(() => {
    setToShow( countryList.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase())) )
  }, [searchString])

  const onSearchChange = e => setSearchString(e.target.value)

  return (
    <div>

      find countries <input value={searchString} onChange={onSearchChange}></input> <br/>

      <Countrylist toShow={toShow} setToShow={setToShow} numOfMatches={numOfMatches}/>
    
    </div>
  )
}

export default App
