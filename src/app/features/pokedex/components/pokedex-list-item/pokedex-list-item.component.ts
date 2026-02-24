import {Component, computed, input} from '@angular/core';
import {PokemonImageComponent} from '../../../../shared/ui/image/components/image.component';
import {TypeComponent} from '../../../../shared/ui/type/type.component';
import {PokedexTypeCircleComponent} from '../pokedex-type-circle/pokedex-type-circle.component';
import {PokemonListItem} from '../../data/pokemon.model';
import {PokemonNumberPipe} from '../../../../shared/pipes/pokemon-number.pipe';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  imports: [
    PokemonImageComponent,
    TypeComponent,
    PokedexTypeCircleComponent,
    PokemonNumberPipe,
    TitleCasePipe
  ]
})

export class PokedexListItemComponent {
  pokemonItem = input.required<PokemonListItem>()
  primaryPokemonType = computed(() => this.pokemonItem().types[0])
}
