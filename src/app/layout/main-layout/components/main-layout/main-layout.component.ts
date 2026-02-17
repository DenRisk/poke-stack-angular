import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideNavigationComponent} from '../../../side-navigation/components/side-nav/side-navigation.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  imports: [
    RouterOutlet,
    SideNavigationComponent
  ]
})
export class MainLayoutComponent {}
