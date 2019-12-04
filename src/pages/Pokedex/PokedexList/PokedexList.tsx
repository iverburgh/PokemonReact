import React from "react";
import PokemonTile from "../PokemonTile";
import "./style.scss";
import { PokemonDb } from "../../../models/pokemondb";

interface Props {
  loading: boolean;
  pokemonList: PokemonDb[];
  pokedex: number[];
}

const PokedexList = ({ loading, pokemonList, pokedex }: Props) => {
  if (loading) {
    return <div className="pokedex-list">loading</div>;
  }

  if (pokemonList.length === 0) {
    return <div className="pokedex-list">empty</div>;
  }

  return (
    <>
      <div className="header">
        CAUGHT: {pokedex.length} SEEN: {pokedex.length + 10}
      </div>
      <div className="pokedex-list">
        {pokemonList.map(pokemon => (
          <PokemonTile
            key={pokemon.number}
            pokemon={pokemon}
            caught={pokedex.some(p => p.toString() === pokemon.number)}
          />
        ))}
      </div>
    </>
  );
};

export default PokedexList;
