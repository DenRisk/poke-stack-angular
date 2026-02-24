import {Component, inject, input, OnInit, signal} from '@angular/core';
import {PokemonImageComponent} from '../../../../shared/ui/image/components/image.component';
import {PokedexListItemComponent} from '../pokedex-list-item/pokedex-list-item.component';
import {PokemonService} from '../../data/pokemon.service';
import {idle, loading, Result} from '../../../../core/api/api-model';
import {PokemonListItem, PokemonListResponse} from '../../data/pokemon.model';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  imports: [
    PokedexListItemComponent
  ]
})

export class PokedexListComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  state = signal<Result<PokemonListItem[]>>(idle());

  async ngOnInit() {
    await this.fetchPokemonList();
  }

  async fetchPokemonList() {
    this.state.set(loading());
    const result = await this.pokemonService.getPokemonListWithDetails(20, 0);
    console.log(result)
    this.state.set(result);
  }

}
