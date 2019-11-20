import React from "react";
import { storiesOf } from "@storybook/react";

import PokemonTile from "../pages/Pokedex/PokemonTile/PokemonTile";
import { pokemonGrass } from "./mocks/pokemon/pokemonGrass";
import { pokemonFairy } from "./mocks/pokemon/pokemonFairy";
import { pokemonBug } from "./mocks/pokemon/pokemonBug";
import { pokemonFire } from "./mocks/pokemon/pokemonFire";
import { pokemonWater } from "./mocks/pokemon/pokemonWater";

storiesOf("PokemonTile", module)
  .add("bug", () => <PokemonTile pokemon={pokemonBug} />)
  .add("fairy", () => <PokemonTile pokemon={pokemonFairy} />)
  .add("fire", () => <PokemonTile pokemon={pokemonFire} />)
  .add("grass", () => <PokemonTile pokemon={pokemonGrass} />)
  .add("water", () => <PokemonTile pokemon={pokemonWater} />);
