import React, { useState, useEffect} from 'react'
import axios from 'axios'

const SearchForm = () => {
  const [search, setSearch] = useState("")
  const [people, setPeople] = useState([])
  const [result, setResult] = useState([])
  

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('search results', res.data.results);
        setPeople(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);
//axios call ^
  useEffect(() => {
    const results = people.filter(peep => {
      // peep.toLowerCase().includes(search)
    })
    setResult(results)
  })
  //results

  const handler = e => {
    setSearch(e.target.value)
  }
  return (
    <section className="search-form">
      <form>
        <label htmlFor='name'/>
          <input id='name' 
          type="text"
          placeholder='Search'
          value={search}
          onChange={handler}
          />
       
      </form>
      <div>
      <ul>
        {result.map(query => (
          <div>{query}</div>
        ))}
      </ul>
    </div>
    </section>
    

  )
}

export default SearchForm



// const [search, setSearch] = useState({
//   query: ''
// })

//  const submit = e => {
//    e.preventDefault();
//    setSearch({ query: ''})
//  }
// const handler = e => {
//  setSearch({ ...search, [e.target.name]: e.target.value });