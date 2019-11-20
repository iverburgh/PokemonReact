import React from "react";
import PokedexList from "./PokedexList";
import { PokemonDb } from "../../../models/pokemondb";
import data from "./db.json";

const PokedexListContainer = () => {
  let pokedex: PokemonDb[] = data as PokemonDb[];

  return <PokedexList pokedex={pokedex} />;
};

export default PokedexListContainer;
