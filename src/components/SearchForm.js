import React, { useState } from "react";
import { Field } from 'formik';

export default function SearchForm() {
 const [search, setSearch] = useState({
   query: ''
 })

 const submit = e => {
   e.preventDefault();
   setSearch({ query: ''})
 }
 const handler = e => {
  setSearch({ ...search, [e.target.name]: e.target.value });
}

  return (
    <section className="search-form">
     <form onSubmit={submit}>
       <label htmlFor='search'>
         <Field name ='search' value={search.query} placeholder='Search For' onChange={handler}/>
        <button>Search</button>
       </label>
     </form>
    </section>
  );
}
