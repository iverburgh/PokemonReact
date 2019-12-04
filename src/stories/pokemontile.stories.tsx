import React from "react";
import { storiesOf } from "@storybook/react";

import PokemonTile from "../pages/Pokedex/PokemonTile/PokemonTile";
import { pokemonEmpty } from "./mocks/pokemon/pokemonEmpty";
import { pokemonGrass } from "./mocks/pokemon/pokemonGrass";
import { pokemonFairy } from "./mocks/pokemon/pokemonFairy";
import { pokemonBug } from "./mocks/pokemon/pokemonBug";
import { pokemonFire } from "./mocks/pokemon/pokemonFire";
import { pokemonWater } from "./mocks/pokemon/pokemonWater";

storiesOf("PokemonTile", module)
  .add("empty", () => <PokemonTile pokemon={pokemonEmpty} caught={true} />)
  .add("uncaught", () => <PokemonTile pokemon={pokemonBug} caught={false} />)
  .add("caught", () => <PokemonTile pokemon={pokemonBug} caught={true} />)
  .add("bug", () => <PokemonTile pokemon={pokemonBug} caught={true} />)
  .add("fairy", () => <PokemonTile pokemon={pokemonFairy} caught={true} />)
  .add("fire", () => <PokemonTile pokemon={pokemonFire} caught={true} />)
  .add("grass", () => <PokemonTile pokemon={pokemonGrass} caught={true} />)
  .add("water", () => <PokemonTile pokemon={pokemonWater} caught={true} />);
