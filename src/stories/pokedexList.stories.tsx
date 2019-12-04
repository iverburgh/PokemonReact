import React from "react";
import { storiesOf } from "@storybook/react";

import PokedexList from "../pages/Pokedex/PokedexList/PokedexList";
import { pokemonGrass } from "./mocks/pokemon/pokemonGrass";
import { pokemonFairy } from "./mocks/pokemon/pokemonFairy";
import { pokemonBug } from "./mocks/pokemon/pokemonBug";
import { pokemonFire } from "./mocks/pokemon/pokemonFire";
import { pokemonWater } from "./mocks/pokemon/pokemonWater";
import { PokemonDb } from "../models/pokemondb";

const pokedexEmpty: number[] = [];
const pokedexFilled: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pokemonListEmpty: PokemonDb[] = [];
const pokemonListFilled: PokemonDb[] = [
  pokemonGrass,
  pokemonFairy,
  pokemonBug,
  pokemonFire,
  pokemonWater
];

storiesOf("PokedexList", module)
  .add("loading", () => (
    <PokedexList
      loading={true}
      pokedex={pokedexEmpty}
      pokemonList={pokemonListEmpty}
    />
  ))
  .add("empty", () => (
    <PokedexList
      loading={false}
      pokedex={pokedexEmpty}
      pokemonList={pokemonListEmpty}
    />
  ))
  .add("filled", () => (
    <PokedexList
      loading={false}
      pokedex={pokedexFilled}
      pokemonList={pokemonListFilled}
    />
  ));
