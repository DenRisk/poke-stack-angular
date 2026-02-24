import {PokemonType} from '../../../shared/types/pokemon-type.model';

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResponseItem[];
}

export interface PokemonListResponseItem {
  name: string;
  url: string;
}

export interface PokemonDetailResponse {
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

export interface PokemonListItem {
  id: number;
  name: string;
  types: PokemonType[];
  image: string
}
