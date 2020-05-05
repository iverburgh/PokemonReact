import React from "react";
import PokedexList from "./PokedexList";
import { Pokemon } from "../../../models/pokemon";

const PokedexListContainer = () => {
  let pokemonList: Pokemon[] = [];
  const pokedex: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <PokedexList loading={false} pokemonList={pokemonList} pokedex={pokedex} />
  );
};

export default PokedexListContainer;
