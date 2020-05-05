import React, { useState, useEffect } from "react";
import { Pokemon } from "../../models/pokemon";
import axios from "axios";
import useIntervalHook from "../../custom/useIntervalHook";
import "./style.scss";
import { Trainer } from "../../models/trainer";
import { TrainerPokemon } from "../../models/trainerpokemon";
import { Guid } from "guid-typescript";

const Home = () => {
  const [trainer, setTrainer] = useState<Trainer>();
  const [wildPokemon, setWildPokemon] = useState<Pokemon>();

  useEffect(() => {
    getTrainer();
  }, [trainer]);

  useIntervalHook(() => {
    encounterWildPokemon();
  }, 5000);

  const getTrainer = () => {
    axios
      .get("http://localhost:3000/trainer/5eb069b0eabc101abc927af5")
      .then((response) => {
        setTrainer(response.data);
      });
  };

  const getRandomPokemonId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(807);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const encounterWildPokemon = () => {
    axios
      .get("http://localhost:3000/pokemon/" + getRandomPokemonId())
      .then((response) => {
        setWildPokemon(response.data);
      });
  };

  const addPokemonToTrainer = (pokemon: Pokemon) => {
    if (trainer) {
      trainer.pokemoncaught++;
      const trainerPokemon: TrainerPokemon = {
        id: Guid.create().toString(),
        pokemonname: pokemon.name,
        pokemonnumber: pokemon.number,
        caughtdate: new Date(),
      };
      trainer.trainerpokemons.push(trainerPokemon);
      setTrainer(trainer);
      axios.put("http://localhost:3000/trainer/" + trainer.id, trainer);
    }
  };

  const removePokemonFromTrainer = (trainerpokemonid: string) => {
    if (trainer) {
      trainer.trainerpokemons = trainer.trainerpokemons.filter(
        (tp) => tp.id !== trainerpokemonid
      );
      trainer.pokemoncaught--;
      setTrainer(trainer);
      axios.put("http://localhost:3000/trainer/" + trainer.id, trainer);
    }
  };

  const catchPokemon = (pokemon: Pokemon) => {
    addPokemonToTrainer(pokemon);
    encounterWildPokemon();
  };

  if (trainer) {
    return (
      <div className="app-wrapper">
        <section className="wild-pokemon">
          <h2>Wild Encounter</h2>
          {wildPokemon && (
            <img
              src={`${process.env.PUBLIC_URL}/images/pokemonsprites/${wildPokemon.number}.png`}
              className="sprite"
              alt={wildPokemon.name}
            />
          )}
          {wildPokemon && <h3>{wildPokemon.name}</h3>}
          {wildPokemon && (
            <button
              className="catch-btn"
              onClick={() => catchPokemon(wildPokemon)}
            >
              CATCH
            </button>
          )}
        </section>
        <section className="pokedex">
          <h2>
            {trainer.name} has caught {trainer.pokemoncaught} Pokémon
          </h2>
          <div className="pokedex-list">
            {trainer.trainerpokemons.map((trainerpokemon) => (
              <div className="pokemon" key={trainerpokemon.pokemonnumber}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/pokemonsprites/${trainerpokemon.pokemonnumber}.png`}
                  className="sprite"
                  alt={trainerpokemon.pokemonnumber.toString()}
                />
                <h3 className="pokemon-name">{trainerpokemon.pokemonname}</h3>
                <button
                  className="remove"
                  onClick={() => removePokemonFromTrainer(trainerpokemon.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  } else {
    return <div className="app-wrapper">Please login</div>;
  }
};
export default Home;
