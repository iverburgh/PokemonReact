import React from "react";
import "./style.scss";
import { PokemonDb } from "../../../models/pokemondb";

interface Props {
  pokemon: PokemonDb;
}

const PokemonTile = ({ pokemon }: Props) => {
  return (
    <div className="pokemon">
      <span className="pokemonNumber">
        <h4>{pokemon.number}</h4>
      </span>
      <div className="pokemonImage">
        <img
          src={`${process.env.PUBLIC_URL}/images/pokemonsprites/${pokemon.number}.png`}
          className="sprite"
          alt={pokemon.name}
        />
      </div>
      <span className={pokemon.types[0]}>
        <h3 className="pokemon-name">{pokemon.name}</h3>
      </span>
    </div>
  );
};

export default PokemonTile;
