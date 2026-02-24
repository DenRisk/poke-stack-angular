export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetailResponse {
  id: number;
  name: string
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
}
