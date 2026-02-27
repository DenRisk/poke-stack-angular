import {Component} from '@angular/core';
import {PokedexListItemComponent} from '../components/pokedex-list-item/pokedex-list-item.component';
import {PokedexListComponent} from '../components/pokedex-list/pokedex-list.component';
import {PageTitleComponent} from '../../../shared/ui/page-title/page-title.component';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  imports: [
    PokedexListComponent,
    PageTitleComponent
  ]
})

export class PokedexPage {}
