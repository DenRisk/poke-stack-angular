import {Component, input} from '@angular/core';
import {PokemonImageComponent} from '../../../../shared/ui/image/components/image.component';
import {TypeComponent} from '../../../../shared/ui/type/type.component';
import {PokedexTypeCircleComponent} from '../pokedex-type-circle/pokedex-type-circle.component';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  imports: [
    PokemonImageComponent,
    TypeComponent,
    PokedexTypeCircleComponent
  ]
})

export class PokedexListItemComponent {
  pokemonItem = input<any>()
}
