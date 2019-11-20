import { PokemonDb } from "../../../models/pokemondb";
import { Abilities } from "../../../models/abilities";
import { Family } from "../../../models/family";
const abilities: Abilities = {
  normal: [""],
  hidden: [""]
};
const family: Family = {
  id: 0,
  evolutionStage: 0,
  evolutionLine: [""]
};
export const pokemonBug: PokemonDb = {
  number: "1",
  name: "test",
  species: "",
  types: ["Bug"],
  abilities: abilities,
  eggGroups: [""],
  gender: [0],
  height: "",
  weight: "",
  family: family,
  starter: false,
  legendary: false,
  mythical: false,
  ultraBeast: false,
  mega: false,
  gen: 1
};
