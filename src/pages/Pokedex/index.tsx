import React, {useState} from 'react'
import { Pokemon } from '../../models/pokemon';
import './index.scss'

function Pokedex() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([])

  const releasePokemon = (id: number) => {
    setPokedex(state => state.filter(p => p.id !== id))
  }

  return (
      <section className="pokedex">
        <h2>Pokédex</h2>
        <div className="pokedex-list">
          {pokedex.map(pokemon => (
            <div className="pokemon" key={pokemon.id}>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} className="sprite" alt={pokemon.name} />
              <h3 className="pokemon-name">{pokemon.name}</h3>
              <button className="remove" onClick={() => releasePokemon(pokemon.id)}>&times;</button>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Pokedex;