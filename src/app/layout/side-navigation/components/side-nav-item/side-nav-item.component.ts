import {Component, input, output} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  imports: [
    RouterLink
  ]
})
export class SideNavItemComponent {
  readonly iconId = input<string>();
  readonly label = input<string>();
  readonly routerLink = input<string>();
}
