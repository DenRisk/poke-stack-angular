import {Component} from '@angular/core';
import {navigationConfig} from '../../side-navigation.config';
import {SideNavItemComponent} from '../side-nav-item/side-nav-item.component';
import {LogoComponent} from '../../../../shared/ui/logo/components/logo.component';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  imports: [
    SideNavItemComponent,
    LogoComponent
  ]
})
export class SideNavigationComponent {
  protected readonly navigationConfig = navigationConfig;
}
