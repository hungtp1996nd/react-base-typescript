import { AxiosResponse } from 'axios'
import { QueryFunction, useQuery } from '@tanstack/react-query'
import request from '../request'
import { QueryOptions } from '../types'

export type Pokemon = {
  id: number
  name: string
}

type PokemonResponse = {
  get: AxiosResponse<Pokemon[]>
  getOne: AxiosResponse<Pokemon>
}

type PokemonQueryKey = {
  get: ['getPokemons']
  getOne: ['getPokemonDetail', number]
}

type PokemonAPI = {
  get: QueryFunction<PokemonResponse['get'], PokemonQueryKey['get']>
  getOne: QueryFunction<PokemonResponse['getOne'], PokemonQueryKey['getOne']>
}

const pokemon: PokemonAPI = {
  get: () => request.get('pokemons'),
  getOne: ({ queryKey: [, id] }) => request.get(`pokemons/${id}`),
}

export const useGetPokemonQuery = (
  options?: QueryOptions<PokemonResponse['get'], PokemonQueryKey['get']>,
) => useQuery(['getPokemons'], pokemon.get, options)

export const useGetPokemonDetailQuery = (
  id: number,
  options?: QueryOptions<PokemonResponse['getOne'], PokemonQueryKey['getOne']>,
) => useQuery(['getPokemonDetail', id], pokemon.getOne, options)
