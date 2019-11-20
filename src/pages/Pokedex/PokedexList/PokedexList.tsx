import React from "react";
import PokemonTile from "../PokemonTile";
import "./style.scss";
import { PokemonDb } from "../../../models/pokemondb";

interface Props {
  pokedex: PokemonDb[];
}

const PokedexList = ({ pokedex }: Props) => {
  return (
    <div className="pokedex-list">
      {pokedex.map(pokemon => (
        <PokemonTile key={pokemon.number} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokedexList;
