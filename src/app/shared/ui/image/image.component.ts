import {Component, computed, input} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  imports: [NgOptimizedImage],
})
export class PokemonImageComponent {
  imageSrc = input.required<string>();
  imageAlt = input.required<string>();

  fallbackImage = '/images/PikatchuFallback.png';

  safeImageSrc = computed(() => {
    return this.imageSrc() || this.fallbackImage;
  });

}
