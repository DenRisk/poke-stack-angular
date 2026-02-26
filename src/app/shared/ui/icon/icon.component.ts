import { Component, inject, input } from '@angular/core';
import { IconName } from './icon.types';
import { ICON_CONFIG } from '../../../core/config/icon.config';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  config = inject(ICON_CONFIG);

  iconId = input.required<IconName>();
  size = input<number>(24);
  color = input<string>('currentColor');
}
