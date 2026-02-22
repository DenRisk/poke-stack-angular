import {Component} from '@angular/core';
import {SearchInputComponent} from '../search-input/search-input.component';
import {AccountLoginComponent} from '../account-login/account-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  imports: [
    SearchInputComponent,
    AccountLoginComponent
  ]
})
export class HeaderComponent {

}
