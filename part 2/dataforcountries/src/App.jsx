import React, { useEffect } from 'react';
import axios from 'axios'
import {useState} from 'react'


function App() {
  const [searchString, setSearchString] = useState('')
  const [toShow, setToShow] = useState([])
  const [apiData, setApiData] = useState([])

  var numOfMatches = toShow.length

  // load api data but only once at start
  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      setApiData( response.data )
    })
  }, [])

  //update toShow every time searchString changes
  useEffect(() => {
    setToShow( apiData.filter(item => item.name.common.includes(searchString)) )
  }, [searchString])

  const onSearchChange = e => setSearchString(e.target.value)

  return (
    <div>

      find countries <input value={searchString} onChange={onSearchChange}></input> <br/>

      
      {(numOfMatches <= 10) 
        ? toShow.map(item => <p key={item.name.common}>{item.name.common}</p>) 
        : "Too many matches, specify another filter"}


      <br/><br/><br/>DEBUG: <br/>
      numOfMatches: {numOfMatches} <br/>
      

    </div>
  )
}

export default App
