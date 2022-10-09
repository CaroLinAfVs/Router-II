import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonSelect from "./components/PokemonSelected";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemones />} />
          <Route path="/pokemons/:name" element={<PokemonSelect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
