import {Component} from '@angular/core';
import {PokedexListItemComponent} from '../components/pokedex-item/pokedex-list-item.component';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  imports: [
    PokedexListItemComponent
  ]
})

export class PokedexPage {}
