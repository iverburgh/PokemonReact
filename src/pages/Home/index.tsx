import React, { useState } from "react";
import { Pokemon } from "../../models/pokemon";
import axios from "axios";
import useIntervalHook from "../../custom/useIntervalHook";
import "./style.scss";

const Home = () => {
  const [wildPokemon, setWildPokemon] = useState<Pokemon>();

  // useEffect(() => {
  //   encounterWildPokemon();
  // }, []);

  useIntervalHook(() => {
    encounterWildPokemon();
  }, 5000);

  const getRandomPokemonId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(807);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const encounterWildPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId())
      .then(response => {
        setWildPokemon(response.data);
      });
  };

  const addPokemonToPokedex = (pokemon: Pokemon) => {
    const pokedexString = localStorage.getItem("pokedex");
    let pokedex: Pokemon[] = JSON.parse(pokedexString ? pokedexString : "{}");
    const monExists = pokedex.filter(p => pokemon.id === p.id).length > 0;

    if (!monExists) {
      pokedex = [...pokedex, pokemon];
      pokedex.sort(function(a, b) {
        return a.id - b.id;
      });
    }
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
  };

  const catchPokemon = (pokemon: Pokemon) => {
    addPokemonToPokedex(pokemon);
    encounterWildPokemon();
  };

  return (
    <section className="wild-pokemon">
      <h2>Wild Encounter</h2>
      {wildPokemon && (
        <img
          src={`${process.env.PUBLIC_URL}/images/pokemonsprites/${wildPokemon.id}.png`}
          className="sprite"
          alt={wildPokemon.name}
        />
      )}
      {wildPokemon && <h3>{wildPokemon.name}</h3>}
      {wildPokemon && (
        <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>
          CATCH
        </button>
      )}
    </section>
  );
};
export default Home;
