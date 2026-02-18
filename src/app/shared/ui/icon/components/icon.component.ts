import { Component, inject, input } from '@angular/core';
import { IconName } from '../types/icon.types';
import { ICON_CONFIG } from '../../../../core/config/icon.config';

@Component({
  selector: 'app-icon',
  template: `
    @if (iconId(); as iconId) {
      <svg [attr.width]="size()" [attr.height]="size()" [attr.fill]="color()" class="inline-block">
        <use [attr.href]="config.spritePublicPath + '#' + iconId"></use>
      </svg>
    }
  `,
})
export class IconComponent {
  config = inject(ICON_CONFIG);

  iconId = input.required<IconName>();
  size = input<number>(24);
  color = input<string>('currentColor');
}
