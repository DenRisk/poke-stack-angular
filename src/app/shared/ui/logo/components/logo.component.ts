import {Component, input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: 'logo.component.html'
})
export class LogoComponent {
  useText = input<boolean>(true)
}
