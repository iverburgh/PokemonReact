import { createStore } from "redux";
import { PokemonDb } from "../models/pokemondb";
import data from "./../pages/Pokedex/PokedexList/db.json";

export const actions = {
  ARCHIVE_POKEMON: "ARCHIVE_POKEMON",
  PIN_POKEMON: "PIN_POKEMON"
};

// The action creators bundle actions with the data required to execute them
export const archivePokemon = id: any => ({ type: actions.ARCHIVE_POKEMON, id });
export const pinPokemon = id: any => ({ type: actions.PIN_POKEMON, id });

// All our reducers simply change the state of a single pokemon.
function pokemonStateReducer(pokemonState) {
  return (state, action) => {
    return {
      ...state,
      pokemons: state.pokemons.map(pokemon =>
        pokemon.id === action.id ? { ...pokemon, state: pokemonState } : pokemon
      )
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_POKEMON:
      return pokemonStateReducer("POKEMON_ARCHIVED")(state, action);
    case actions.PIN_POKEMON:
      return pokemonStateReducer("POKEMON_PINNED")(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const pokemonList: PokemonDb[] = data as PokemonDb[];

// We export the constructed redux store
export default createStore(reducer, { pokemons: pokemonList });
