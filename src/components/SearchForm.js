import React, { useState } from "react";

export default function SearchForm(props) {
 console.log('search props', props)

 const handleInputChange = e => {
  props.setQuery(e.target.value);
};
  return (
    <section className="search-form">
       <form >
      <input
      id="name" 
      type="text" 
      name="textfield" 
      placeholder="Search by Name"
      value={props.query} 
      onChange={handleInputChange}/>



    <Link to="/"><button>Home
          </button></Link>
    </form>
    </section>
  );
}
