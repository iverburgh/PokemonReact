import React from "react";
import { Pokemon } from "../../../models/pokemon";
import PokedexList from "./PokedexList";

const PokedexListContainer = () => {
  const pokedexString = localStorage.getItem("pokedex");
  let pokedex: Pokemon[] = JSON.parse(pokedexString ? pokedexString : "{}");

  const onDeletePokemon = (pokemonId: number) => {
    pokedex = pokedex.filter(pokemon => pokemon.id !== pokemonId);
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
  };

  return <PokedexList pokedex={pokedex} onDeletePokemon={onDeletePokemon} />;
};

export default PokedexListContainer;
