import React, { useEffect, useState } from "react";
import axios from 'axios'
import SearchForm from './SearchForm'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results)
      // data = res.data.results.filter()
      setData(res.data.results)
    })
    .catch(err => console.log('err', err))
  }, [query]);

  return (
    <section className="character-list">
      <SearchForm query={query} setQuery={setQuery}/>
      {
        data.map(c => (
          <CharacterCard key={c.id} person={c}/>
        ))
      }
      
    </section>
  );
}
