import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Pokedex ',
    loadComponent: () =>
      import('./features/pokedex/page/pokedex-page.component').then((m) => m.PokedexPage),
  },
  {
    path: 'types',
    title: 'Types',
    loadComponent: () =>
      import('./features/types/page/types-page.component').then((m) => m.TypesPage),
  },
  {
    path: 'movesets',
    title: 'Movesets',
    loadComponent: () =>
      import('./features/movesets/page/movesets-page.component').then(
        (m) => m.MovesetsPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
