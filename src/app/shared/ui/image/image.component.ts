import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  imports: [NgOptimizedImage],
})
export class PokemonImageComponent {
  src = input.required<string>();
  alt = input.required<string>();
}
