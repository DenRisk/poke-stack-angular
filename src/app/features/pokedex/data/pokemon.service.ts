import {Injectable, inject} from '@angular/core';
import {ApiClient} from '../../../core/api/api-client.service';
import {ApiResult, failure, success} from '../../../core/api/api-model';
import {ApiPokemonDetailResponse, PokemonList, PokemonListItem, ApiPokemonListResponse} from './pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api = inject(ApiClient);
  private baseUrl = 'https://pokeapi.co/api/v2';

  async getPokemonListWithDetails(
    limit = 20,
    offset = 0
  ): Promise<ApiResult<PokemonList>> {

    const listResult = await this.api.get<ApiPokemonListResponse>(
      `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`
    );

    if (listResult.status !== 'success') {
      return failure(listResult.error ?? {message: 'Could not fetch pokemon list'});
    }

    const pokemonEntries = listResult.data.results;

    if (pokemonEntries.length === 0) {
      return failure({message: 'No Pokémon found'});
    }

    const detailResults = await Promise.all(
      pokemonEntries.map(p => this.api.get<ApiPokemonDetailResponse>(p.url))
    );

    console.log(detailResults)

    const failedDetails = detailResults.filter(r => r.status === 'error');

    if (failedDetails.length > 0) {
      const messages = failedDetails
        .map(f => (f.status === 'error' ? f.error?.message ?? 'Unknown error' : ''))
        .join('; ');

      return failure({
        message: `Failed to fetch ${failedDetails.length} Pokémon details: ${messages}`
      });
    }

    const pokemonList: PokemonList = {
      items: detailResults
        .filter(r => r.status === 'success')
        .map(res => ({
          id: res.data.id,
          name: res.data.name,
          types: res.data.types.map(item => item.type.name),
          image: res.data.sprites.front_default
        })),
      total: listResult.data.count
    }

    return success(pokemonList);
  }
}
