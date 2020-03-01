import React from "react";
import { Route, NavLink } from 'react-router-dom'
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import './App.css'
import styled from "styled-components"
const Holder = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
color: black;
`
const Img = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`

export default function App() {
  return (
    <main>
      <Holder >
        <NavLink to='/'>Home</NavLink> 
       <NavLink to='/characters'>Characters</NavLink> 
      </Holder>
      <Header />
      <Route exact path='/' >
        <WelcomePage />
      </Route>
      <Route path='/characters' >
        <CharacterList />
      </Route>
      <div>
       <Img src='https://starbaseatlanta.com/wp-content/uploads/rmhprs1238.jpg' />
      </div>
    </main>
  );
}
