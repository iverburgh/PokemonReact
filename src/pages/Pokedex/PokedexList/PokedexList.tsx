import React from "react";
import PokemonTile from "../PokemonTile";
import "./style.scss";
import { Pokemon } from "../../../models/pokemon";

interface Props {
  loading: boolean;
  pokemonList: Pokemon[];
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
        {pokemonList.map((pokemon) => (
          <PokemonTile
            key={pokemon.number}
            pokemon={pokemon}
            caught={pokedex.some((p) => p === pokemon.number)}
          />
        ))}
      </div>
    </>
  );
};

export default PokedexList;
