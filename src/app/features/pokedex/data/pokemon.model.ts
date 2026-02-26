import {PokemonType} from '../../../shared/types/pokemon-type.model';

// API Model

export interface ApiPokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: ApiPokemonListResponseItem[];
}

export interface ApiPokemonListResponseItem {
  name: string;
  url: string;
}

export interface ApiPokemonDetailResponse {
  id: number;
  name: string
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: PokemonType;
    };
  }[];
}

// UI Model

export interface PokemonList {
  items: PokemonListItem[];
  total: number;
}

export interface PokemonListItem {
  id: number;
  name: string;
  types: PokemonType[];
  image: string
}
