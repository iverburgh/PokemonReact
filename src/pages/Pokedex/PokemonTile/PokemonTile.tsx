import React from "react";
import { Pokemon } from "../../../models/pokemon";
import "./style.scss";

interface Props {
  pokemon: Pokemon;
  onDeletePokemon: (pokemonId: number) => void;
}

const PokemonTile = ({ pokemon, onDeletePokemon }: Props) => {
  return (
    <div className="pokemon">
      <img
        src={`${process.env.PUBLIC_URL}/images/pokemonsprites/${pokemon.id}.png`}
        className="sprite"
        alt={pokemon.name}
      />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <button className="remove" onClick={() => onDeletePokemon(pokemon.id)}>
        &times;
      </button>
    </div>
  );
};

export default PokemonTile;
