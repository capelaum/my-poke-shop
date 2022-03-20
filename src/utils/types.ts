export interface Pokemon {
  name: string
  url: string
  id: number
  image: string
}

export interface PokemonDetails {
  name: string
  url: string
  id: number
  image: string
  types: string[]
  stats: {
    value: number
    name: string
  }[]
  abilities: string[]
}

export type PokemonData = Omit<Pokemon, 'id' | 'image'>

export type PokemonType = {
  type: {
    name: string
    url: string
  }
}

export type Stat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}
