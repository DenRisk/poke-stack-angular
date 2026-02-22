import {Component, input} from '@angular/core';
import {PokemonImageComponent} from '../../../../shared/ui/image/components/image.component';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list.component.html',
  imports: [
    PokemonImageComponent
  ]
})

export class PokedexListComponent {

}
