import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from "./components/CharacterCard"
import CharacterList from "./components/CharacterList"
import LocationCard from "./components/LocationCard"
import SearchForm from "./components/SearchForm"



export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterCard} />
      <Route path='/location' component={LocationCard} />
    </main>
  );
}
