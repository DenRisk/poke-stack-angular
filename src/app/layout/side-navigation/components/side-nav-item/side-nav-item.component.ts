import { Component, input, output } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { IconComponent } from '../../../../shared/ui/icon/components/icon.component';
import { IconName } from '../../../../shared/ui/icon/types/icon.types';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  imports: [RouterLink, IconComponent, RouterLinkActive],
})
export class SideNavItemComponent {
  readonly iconId = input.required<IconName>();
  readonly label = input.required<string>();
  readonly routerLink = input.required<string>();
}
