import {Component, input} from '@angular/core';
import {PokemonType} from '../../../../shared/types/pokemon-type.model';
import {NgClass} from '@angular/common';
import {IconComponent} from '../../../../shared/ui/icon/components/icon.component';

@Component({
  selector: 'app-pokedex-type-circle',
  templateUrl: './pokedex-type-circle.component.html',
  imports: [
    NgClass,
    IconComponent
  ]
})

export class PokedexTypeCircleComponent {
  pokemonType = input.required<PokemonType>()
}
