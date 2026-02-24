import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokedexIdPipe',
  })
export class PokemonNumberPipe implements PipeTransform {
  transform(value: number | null | undefined, digits: number = 3): string {
    if (value == null) return '';

    return `N° ${value.toString().padStart(digits, '0')}`;
  }
}
