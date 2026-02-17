import {Component} from '@angular/core';
import {navigationConfig} from '../../side-navigation.config';
import {SideNavItemComponent} from '../side-nav-item/side-nav-item.component';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  imports: [
    SideNavItemComponent
  ]
})
export class SideNavigationComponent {
  protected readonly navigationConfig = navigationConfig;
}
