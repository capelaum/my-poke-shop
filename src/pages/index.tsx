import { Header } from 'components/Header'
import { PokemonCard } from 'components/PokemonCard'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { Pokemon, PokemonData } from 'utils/types'

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [limit] = useState(20)
  const [offset, setOffset] = useState(0)

  const fetchPokemons = useCallback(async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?$limit=${limit}&offset=${offset}`
    )

    const data = await res.json()

    const allPokemons = data.results.map((pokemonItem: PokemonData) => {
      const id = pokemonItem.url.split('/')[6]

      const pokemon = {
        name: pokemonItem.name,
        url: pokemonItem.url,
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      }

      return pokemon
    })

    setPokemons(allPokemons)
  }, [limit, offset])

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  function handleNextPage() {
    setOffset(offset + 20)
  }

  function handlePreviousPage() {
    setOffset(offset - 20)
  }

  return (
    <>
      <Head>
        <title>PokeShop</title>
        <meta name="description" content="TailwindCSS Next Template" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center bg-stone-50 text-stone-900">
        <Header />

        <main
          className={`
            flex flex-col flex-grow items-center py-10
            bg-gradient-to-bl from-red-500 to-yellow-500
          `}
        >
          <div className="flex mb-10">
            <button
              disabled={offset === 0}
              onClick={handlePreviousPage}
              className="mr-4 px-4 py-2 bg-stone-50 rounded-md hover:bg-stone-200 font-semibold"
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-stone-50 rounded-md hover:bg-stone-200 font-semibold"
            >
              Next
            </button>
          </div>

          <div
            className={`
              max-w-7xl w-full px-5
              grid grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-10
            `}
          >
            {pokemons.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
