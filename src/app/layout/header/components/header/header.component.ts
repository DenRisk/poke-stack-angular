import {Component} from '@angular/core';
import {SearchInputComponent} from '../search-input/search-input.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  imports: [
    SearchInputComponent
  ]
})
export class HeaderComponent {

}
