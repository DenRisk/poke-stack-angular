import {Component} from '@angular/core';
import {PokedexListItemComponent} from '../components/pokedex-list-item/pokedex-list-item.component';
import {PokedexListComponent} from '../components/pokedex-list/pokedex-list.component';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  imports: [
    PokedexListComponent
  ]
})

export class PokedexPage {}
