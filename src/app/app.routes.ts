import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/pokedex/page/pokedex-page.component')
        .then(m => m.PokedexPage)
  },
  {
    path: 'types',
    loadComponent: () =>
      import('./features/types/page/types-page.component')
        .then(m => m.TypesPage)
  },
  {
    path: 'movesets',
    loadComponent: () =>
      import('./features/movesets/page/movesets-page.component')
        .then(m => m.MovesetsPageComponent)
  }
];

