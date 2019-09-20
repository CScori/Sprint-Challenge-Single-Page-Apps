import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(result => {
        console.log(result);
        setCharacters(result.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <section className="character-list grid-view">
      
      {characters.map( character => {
        return <CharacterCard character={character} key={character.id}/>
      })}


    </section>
  );
}




  