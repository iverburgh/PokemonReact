import React from "react";
import "./style.scss";
import { Pokemon } from "../../../models/pokemon";

interface Props {
  pokemon: Pokemon;
  caught: boolean;
}

const PokemonTile = ({ pokemon, caught }: Props) => {
  if (pokemon.number) {
    return (
      <div className="pokemon">
        <span className="pokemonNumber">
          <h4>{pokemon.number}</h4>
        </span>
        <div className="pokemonImage">
          <img
            src={`${process.env.PUBLIC_URL}/images/pokemonsprites/${pokemon.number}.png`}
            className={`sprite${caught ? "" : " blurred"}`}
            alt={pokemon.name}
          />
        </div>
        <span className={pokemon.types[0]}>
          <h3 className="pokemon-name">{pokemon.name}</h3>
        </span>
      </div>
    );
  } else {
    return <div className="pokemon">Invalid pokemon</div>;
  }
};

export default PokemonTile;
