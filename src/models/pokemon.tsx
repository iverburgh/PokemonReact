import { Abilities } from "./abilities";
import { Family } from "./family";

export interface Pokemon {
  id: string;
  number: number;
  name: string;
  species: string;
  types: string[];
  abilities: Abilities;
  eggGroups: string[];
  gender: number[];
  height: string;
  weight: string;
  family: Family;
  starter: boolean;
  legendary: boolean;
  mythical: boolean;
  ultraBeast: boolean;
  mega: boolean;
  gen: number;
}
