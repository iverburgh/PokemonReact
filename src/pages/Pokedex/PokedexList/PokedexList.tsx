import React from "react";
import { Pokemon } from "../../../models/pokemon";
import PokemonTile from "../PokemonTile";
import "./style.scss";

interface Props {
  pokedex: Pokemon[];
  onDeletePokemon: (pokemonId: number) => void;
}

const PokedexList = ({ pokedex, onDeletePokemon }: Props) => {
  return (
    <div className="pokedex-list">
      {pokedex.map(pokemon => (
        <PokemonTile
          key={pokemon.id}
          pokemon={pokemon}
          onDeletePokemon={onDeletePokemon}
        />
      ))}
    </div>
  );
};

export default PokedexList;
