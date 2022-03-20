import { Header } from 'components/Header'
import { PokemonCard } from 'components/PokemonCard'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { api } from 'services/api'
import { Pokemon, PokemonData } from 'utils/types'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const offset = Number(query?.page) * 20

  const { data } = await api.get(`pokemon?offset=${offset}`)

  const allPokemons = data.results.map((pokemonItem: PokemonData) => {
    const id = pokemonItem.url.split('/')[6]

    const pokemon = {
      id,
      name: pokemonItem.name,
      url: pokemonItem.url,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    }

    return pokemon
  })

  const { next, previous } = data

  return {
    props: { next, previous, allPokemons }
  }
}

interface HomeProps {
  allPokemons: Pokemon[]
  next: string
  previous: string
}

const Home = ({ allPokemons }: HomeProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [page, setPage] = useState(0)

  const router = useRouter()

  useEffect(() => {
    setPokemons(allPokemons)
  }, [allPokemons])

  function handleNextPage() {
    if (page < 56) {
      setPage(page + 1)
      router.push(`?page=${page + 1}`)
    }
  }

  function handlePreviousPage() {
    if (page > 0) {
      setPage(page - 1)
      router.push(`?page=${page - 1}`)
    }
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
          {/* <Pagination /> */}
          <div className="flex mb-10">
            <button
              disabled={page === -1}
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
