import { Injectable, inject } from '@angular/core';
import { ApiClient } from '../../../core/api/api-client.service';
import {failure, Result, success} from '../../../core/api/api-model';
import {PokemonDetailResponse, PokemonListItem, PokemonListResponse} from './pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api = inject(ApiClient);
  private baseUrl = 'https://pokeapi.co/api/v2';

  async getPokemonList(
    limit = 20,
    offset = 0
  ): Promise<Result<PokemonListResponse>> {
    return this.api.get<PokemonListResponse>(
      `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  async getPokemonListWithDetails(
    limit = 20,
    offset = 0
  ): Promise<Result<PokemonListItem[]>> {
    const listResult = await this.api.get<PokemonListResponse>(
      `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`
    );

    if (listResult.status !== 'success' || !listResult.data) {
      return failure('Could not fetch pokemon data')
    }

    try {
      const detailPromises = listResult.data.results.map(pokemon =>
        this.api.get<PokemonDetailResponse>(pokemon.url)
      );

      const detailResults = await Promise.all(detailPromises);

      const enriched: PokemonListItem[] = detailResults
        .filter(r => r.status === 'success' && r.data)
        .map(r => ({
          id: r.data!.id,
          name: r.data!.name,
          types: r.data!.types.map(t => t.type.name),
        }));

      return success(enriched);
    } catch (err: any) {
      return failure(err.message);
    }
  }

}
