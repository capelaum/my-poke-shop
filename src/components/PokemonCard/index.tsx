import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from 'utils/types'

interface PokemonCardProps {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  function setCardBackground(pokemonType?: string) {
    switch (pokemonType) {
      case 'fire':
        return 'bg-red-300'
      case 'water':
        return 'bg-blue-300'
      case 'grass':
        return 'bg-green-300'
      default:
        return 'bg-stone-50'
    }
  }

  return (
    <Link href={`/pokemon/${pokemon.id}`} passHref>
      <div
        className={`
          flex flex-col items-center justify-center
          px-10 pt-8 pb-4
          drop-shadow-lg
          ${setCardBackground()} rounded-xl cursor-pointer
          hover:scale-110
          transition-all delay-30 ease-in-out
        `}
      >
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={100}
          height={100}
        />
        <h3 className="text-lg lg:text-2xl pt-4 capitalize">{pokemon.name}</h3>
      </div>
    </Link>
  )
}
