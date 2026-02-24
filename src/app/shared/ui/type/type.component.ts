import {Component, input, output} from '@angular/core';
import {PokemonType} from '../../types/pokemon-type.model';
import {NgClass} from '@angular/common';
import {IconComponent} from '../icon/components/icon.component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  imports: [
    NgClass,
    IconComponent
  ]
})
export class TypeComponent {
  pokemonType = input.required<PokemonType>()
  size = input.required<'sm' | 'md' | 'lg'>()
  label = input<string>('')
}
