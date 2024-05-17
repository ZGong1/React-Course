import axios from "axios";
import React, { useState, useEffect } from 'react';


const Country = ({country}) => {

    const [info, setInfo] = useState(null)
    const [languages, setLanguages] = useState(null)
    const [flag, setFlag] = useState(null)
    
    useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => {
            setInfo(response.data)
            setLanguages( Object.values( response.data.languages ) )
            setFlag( (Object.values(response.data.flags))[0] )
        })
    }, [])

    if (info === null) return "Loading..."

    return ( 
        <div>
            <h1>{info.name.common}</h1>
            <p>capital {info.capital}</p>
            <p>area {info.area}</p>
            <b>languages:</b>
            <ul>
                {languages.map(item => <li key={item}> {item} </li>)}
            </ul>
            <img src={flag}/>
        </div>
     );
}
 
export default Country;