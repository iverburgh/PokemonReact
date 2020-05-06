import React, { useState, useEffect } from "react";
import PokedexList from "./PokedexList";
import { Pokemon } from "../../../models/pokemon";
import axios from "axios";
import { Trainer } from "../../../models/trainer";

const PokedexListContainer = () => {
  const [trainer, setTrainer] = useState<Trainer>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();

  useEffect(() => {
    getPokemonList();
    getTrainer();
  }, [trainer, pokemonList]);

  const getTrainer = () => {
    axios
      .get("http://localhost:3000/trainer/5eb069b0eabc101abc927af5")
      .then((response) => {
        setTrainer(response.data);
      });
  };

  const getPokemonList = () => {
    axios.get("http://localhost:3000/pokemon/").then((response) => {
      setPokemonList(response.data);
    });
  };

  if (pokemonList && trainer) {
    return (
      <PokedexList
        loading={false}
        pokemonList={pokemonList}
        pokedex={trainer.trainerpokemons.map((tp) => tp.pokemonnumber)}
      />
    );
  } else {
    return <PokedexList loading={true} pokemonList={[]} pokedex={[]} />;
  }
};

export default PokedexListContainer;
