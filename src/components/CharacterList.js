import React, { useEffect, useState } from "react";
import axios from 'axios'
import SearchForm from './SearchForm'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [data, setData] = useState([])
  const searchValue = ['?name=', '?page=']
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const searchHandler = e => {
    setQuery(e)
  }
  useEffect(() => {
    if(query.length < 1) {
      axios(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${searchValue[1]}${page}`)
        .then(response => {
          // console.log(`Main fetch`, response)
          setData(response.data.results)
        })
        .catch(error => console.error(`Couldn't retrieve data `, error))
    }
  }, [page]);

  useEffect(() => {
    if(query.length > 1){
    axios
    .get(`https://rickandmortyapi.com/api/character/${searchValue[0]}${query}`)
    .then(res => {
      setData(res.data.results)
    })
    .catch(err => console.log('err', err))
  }
  }, [query]);

  return (
    <>
      <SearchForm query={searchHandler} />
      <div>
          {page < 1 ?  <button onClick={() => setPage(page - 1)} >previous page</button> : null }
          {page > 1 ?  <button onClick={() => setPage(page - 1)} >previous page</button> : null }
          <button style={{  }} onClick={() => setPage(page + 1)} >Next Page</button>
      </div>
    <section className="character-list">
      {
        data.map(c => (
          <CharacterCard data={c} />
        ))
      }
    </section>
    </>
  );
}
