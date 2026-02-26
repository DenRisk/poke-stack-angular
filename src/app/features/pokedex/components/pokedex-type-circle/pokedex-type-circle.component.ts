import {Component, input} from '@angular/core';
import {PokemonType} from '../../../../shared/types/pokemon-type.model';
import {NgClass} from '@angular/common';
import {IconComponent} from '../../../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-pokedex-type-circle',
  templateUrl: './pokedex-type-circle.component.html',
  styleUrls: ['pokedex-type-circle.component.scss'],
  imports: [
    NgClass,
    IconComponent
  ]
})

export class PokedexTypeCircleComponent {
  pokemonType = input.required<PokemonType>()
}
