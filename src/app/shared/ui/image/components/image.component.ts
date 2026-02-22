import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image.component.html'
})
export class PokemonImageComponent {
  src = input.required<string>();
  alt = input.required<string>();
}
