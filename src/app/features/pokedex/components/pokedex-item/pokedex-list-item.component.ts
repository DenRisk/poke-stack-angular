import {Component, input} from '@angular/core';
import {PokemonImageComponent} from '../../../../shared/ui/image/components/image.component';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  imports: [
    PokemonImageComponent
  ]
})

export class PokedexListItemComponent {
  pokemonItem = input<any>()
}
