import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideNavigationComponent} from '../../../side-navigation/components/side-nav/side-navigation.component';
import {HeaderComponent} from '../../../header/components/header/header.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [
    RouterOutlet,
    SideNavigationComponent,
    HeaderComponent
  ]
})
export class MainLayoutComponent {
}
