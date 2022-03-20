import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Ability, PokemonDetails, PokemonType, Stat } from 'utils/types'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx

  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params?.id}`
  ).then((res) => res.json())

  const pokemon = {
    name: data.name,
    id: data.id,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params?.id}.png`,
    types: data.types.map((t: PokemonType) => t.type.name),
    stats: data.stats.map((s: Stat) => {
      return { name: s.stat.name, value: s.base_stat }
    }),
    abilities: data.abilities.map((a: Ability) => a.ability.name)
  }

  return {
    props: { pokemon }
  }
}

interface PokemonDetailsProps {
  pokemon: PokemonDetails
}

export default function Details({ pokemon }: PokemonDetailsProps) {
  function setCardBackground(pokemonType?: string) {
    switch (pokemonType) {
      case 'fire':
        return 'bg-red-500'
      case 'water':
        return 'bg-blue-500'
      case 'grass':
        return 'bg-green-500'
      case 'poison':
        return 'bg-purple-500'
      case 'electric':
        return 'bg-yellow-500'
      default:
        return 'bg-stone-50'
    }
  }

  if (!pokemon) return <h1>No Pokemon found!</h1>

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
        <meta name="description" content="TailwindCSS Next Template" />
      </Head>

      <div
        className={`
          min-h-screen flex flex-col justify-center items-center
          bg-gradient-to-bl from-red-500 to-yellow-500
        `}
      >
        <Link href="/">
          <a className="mb-5 px-4 py-2 bg-stone-50 rounded-md hover:bg-stone-200 font-semibold">
            Back to Home
          </a>
        </Link>
        <div
          className={`
            flex drop-shadow-lg p-10
            text-stone-800
            ${setCardBackground(pokemon.types[0])} rounded-xl
          `}
        >
          <div>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={300}
              height={300}
            />
          </div>
          <div className="pl-20">
            <div className="pb-4 flex flex-col">
              <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
              <span className="text-md italic">{pokemon.types.join(', ')}</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="text-left">Name</th>
                  <th className="text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.stats.map(({ name, value }, index) => (
                  <tr key={index}>
                    <td className="pr-20 font-bold capitalize">{name}</td>
                    <td className="text-center">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pt-4">
              <strong>Abilities: </strong>
              <span className="text-md italic">
                {pokemon.abilities.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
