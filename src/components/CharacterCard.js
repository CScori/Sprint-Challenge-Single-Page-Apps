import React from "react";


export default function CharacterCard(props) {
  return (
    <div>
     <img
          src={props.image}
          alt="character"
        />
    <div>
      <h2>{props.name}</h2>
      <div>
        <span className='date'>Status: {props.status}</span>
      </div>
      <p>
        Location: {props.location}
      </p>
    </div>
    <div>
      <p>
        Species: {props.species}
      </p>
    </div>
  </div>
  )
}