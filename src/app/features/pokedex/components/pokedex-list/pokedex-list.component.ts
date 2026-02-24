import {Component, input} from '@angular/core';
import {PokemonImageComponent} from '../../../../shared/ui/image/components/image.component';
import {PokedexListItemComponent} from '../pokedex-list-item/pokedex-list-item.component';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  imports: [
    PokedexListItemComponent
  ]
})

export class PokedexListComponent {

}
