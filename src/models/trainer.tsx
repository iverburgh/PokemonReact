import { TrainerPokemon } from "./trainerpokemon";

export interface Trainer {
  id: string;
  name: string;
  team: string;
  level: number;
  distancewalked: number;
  pokemoncaught: number;
  pokestopsvisited: number;
  totalxp: number;
  startdate: Date;
  trainerpokemons: TrainerPokemon[];
}
