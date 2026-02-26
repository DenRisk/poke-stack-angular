import {Component, inject, OnInit, signal} from '@angular/core';
import {PokedexListItemComponent} from '../pokedex-list-item/pokedex-list-item.component';
import {PokemonService} from '../../data/pokemon.service';
import {PokemonListItem} from '../../data/pokemon.model';
import {PaginationComponent} from '../../../../shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
  standalone: true,
  imports: [PokedexListItemComponent, PaginationComponent]
})
export class PokedexListComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  loading = signal(false);
  pokemonList = signal<PokemonListItem[]>([]);
  currentPage = signal(1);
  totalItems = signal<number>(0)

  readonly limit = 18;

  ngOnInit() {
    this.fetchPokemonList();
  }

  async fetchPokemonList() {
    this.loading.set(true);

    const offset = (this.currentPage() - 1) * this.limit;
    const result = await this.pokemonService.getPokemonListWithDetails(
      this.limit,
      offset
    );

    this.loading.set(false);

    if (result.status === 'success') {
      this.pokemonList.set(result.data.items);
      this.totalItems.set(result.data.total);
    }
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
    this.fetchPokemonList();
  }
}
