import React from 'react'
import { useGetPokemonQuery } from '../../apis'
import Spinner from '../../components/Spinner'

const Pokemons = () => {
  const { data: pokemons, isLoading } = useGetPokemonQuery()

  if (isLoading) return <Spinner />
  return (
    <div>
      {pokemons?.data.map(pokemon => {
        return <li key={pokemon.id}>{pokemon.name}</li>
      })}
    </div>
  )
}

export default Pokemons
