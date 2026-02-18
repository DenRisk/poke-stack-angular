import {Component, input, output} from '@angular/core';
import {RouterLink} from '@angular/router';
import {IconComponent} from '../../../../shared/ui/icon/components/icon.component';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  imports: [
    RouterLink,
    IconComponent
  ]
})
export class SideNavItemComponent {
  readonly iconId = input<string>();
  readonly label = input<string>();
  readonly routerLink = input<string>();
}
