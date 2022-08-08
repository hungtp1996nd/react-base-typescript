import React, { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { useQueryClient } from '@tanstack/react-query'
import { useCreatePokemonMutation, useGetPokemonQuery } from '../../apis'
import Spinner from '../../components/Spinner'

const Pokemons = () => {
  const [value, setValue] = useState('')
  const queryClient = useQueryClient()

  const { data: pokemons, isLoading } = useGetPokemonQuery()
  const { mutate: createPokemon } = useCreatePokemonMutation({
    onSuccess: () => {
      toast('🦄 Wow so easy!, created pokemon', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      queryClient.invalidateQueries(['getPokemons'])
    },
  })

  if (isLoading) return <Spinner />
  return (
    <div>
      <PokemonInput
        type="text"
        placeholder="Enter pokemon"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <PokemonButton
        type="button"
        onClick={() => {
          setValue('')
          createPokemon({
            name: value,
          })
        }}
      >
        Add pokemon
      </PokemonButton>
      {pokemons?.data.map(pokemon => {
        return <li key={pokemon.id}>{pokemon.name}</li>
      })}
    </div>
  )
}

export default Pokemons

const PokemonInput = styled.input.attrs({
  className:
    'w-1/2 px-2 py-1 my-4 mx-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300',
})``

const PokemonButton = styled.button.attrs({
  className:
    'px-6 py-1 text-sm rounded shadow bg-emerald-100 hover:bg-emerald-200 text-emerald-500',
})``
