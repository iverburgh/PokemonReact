import React, { useState, useEffect } from "react";
import { Pokemon } from "../../models/pokemon";
import axios from "axios";

function Home() {
  const [, setPokedex] = useState<Pokemon[]>([]);
  const [wildPokemon, setWildPokemon] = useState<Pokemon>();

  useEffect(() => {
    encounterWildPokemon();
  }, []);

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const encounterWildPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokeId())
      .then(response => {
        setWildPokemon(response.data);
      });
  };

  const catchPokemon = (pokemon: Pokemon) => {
    setPokedex(state => {
      const monExists = state.filter(p => pokemon.id === p.id).length > 0;

      if (!monExists) {
        state = [...state, pokemon];
        state.sort(function(a, b) {
          return a.id - b.id;
        });
      }
      return state;
    });
    encounterWildPokemon();
  };

  return (
    <section className="wild-pokemon">
      <h2>Wild Encounter</h2>
      {wildPokemon && <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} className="sprite" alt={wildPokemon.name} />}
      {wildPokemon && <h3>{wildPokemon.name}</h3>}
      {wildPokemon && <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>
        CATCH
  </button>}
    </section>
  );
}
export default Home;
