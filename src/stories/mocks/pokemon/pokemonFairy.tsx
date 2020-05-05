import { Pokemon } from "../../../models/pokemon";
import { Abilities } from "../../../models/abilities";
import { Family } from "../../../models/family";
const abilities: Abilities = {
  normal: [""],
  hidden: [""],
};
const family: Family = {
  id: 0,
  evolutionStage: 0,
  evolutionLine: [""],
};
export const pokemonFairy: Pokemon = {
  id: "12345789abcd",
  number: 1,
  name: "test",
  species: "",
  types: ["Fairy"],
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
  gen: 1,
};
