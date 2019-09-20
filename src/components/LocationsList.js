import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LocationsList = () => {
    const [loctions, setLocations] = useState([])

    useEffect(
axios
.get(' https://rickandmortyapi.com/api/location/')
.then(res => {
    console.log(res)

})
.catch(err => console.log(err))
    )
    return (
        <div>
          {locations.map( location => {
        return <LocationCard character={location} key={location.id}/>
      })} 
        </div>
    )
}

export default LocationsList

