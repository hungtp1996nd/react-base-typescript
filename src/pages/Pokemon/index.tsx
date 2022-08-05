import React from 'react'
import { useGetPokemonQuery } from '../../apis'

const Pokemons = () => {
  const { data: pokemons, isLoading } = useGetPokemonQuery()

  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      {pokemons?.data.map(pokemon => {
        return <li key={pokemon.id}>{pokemon.name}</li>
      })}
    </div>
  )
}

export default Pokemons
