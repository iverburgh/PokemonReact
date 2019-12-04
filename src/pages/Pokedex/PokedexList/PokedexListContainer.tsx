import React from "react";
import PokedexList from "./PokedexList";
import { PokemonDb } from "../../../models/pokemondb";
import data from "./db.json";

const PokedexListContainer = () => {
  let pokemonList: PokemonDb[] = data as PokemonDb[];
  const pokedex: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <PokedexList loading={false} pokemonList={pokemonList} pokedex={pokedex} />
  );
};

export default PokedexListContainer;
