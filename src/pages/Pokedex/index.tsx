import React from "react";
import PokedexList from "./PokedexList/";
import "./style.scss";

const Pokedex = () => {
  return (
    <section className="pokedex">
      <h2>Pokédex</h2>
      <PokedexList />
    </section>
  );
};

export default Pokedex;
