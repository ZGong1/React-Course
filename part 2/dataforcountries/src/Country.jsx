import axios from "axios";
import React, { useState, useEffect } from 'react';


const Country = ({country}) => {

    const [info, setInfo] = useState(null)
    const [languages, setLanguages] = useState(null)
    const [flag, setFlag] = useState(null)
    const [temperatureData, setTemperatureData] = useState(null)
    const apiKey = import.meta.env.VITE_API_KEY

    
    useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => {
            setInfo(response.data)
            setLanguages( Object.values( response.data.languages ) )
            setFlag( (Object.values(response.data.flags))[0] )
            var lat = response.data.capitalInfo.latlng[0]
            var lon = response.data.capitalInfo.latlng[1]
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
            .then(response => {
                setTemperatureData(response.data)
            })
        })
        
    }, [])

    if (info === null) return "Loading..."
    if (temperatureData === null) return "Loading..."

    // only runs once country api call is returned




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
            <h2>Weather in {info.capital}</h2>
            <p>temperature {temperatureData.main.temp} Fahrenheit </p>
            <img src={`https://openweathermap.org/img/wn/${temperatureData.weather[0].icon}@2x.png`}/>
            <p>wind {temperatureData.wind.speed} mph </p>

            <br/><br/>
        </div>
     );
}
 
export default Country;