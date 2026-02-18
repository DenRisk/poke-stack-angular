import { SideNavigationModel } from './model/side-navigation.model';

export const navigationConfig: SideNavigationModel = {
  items: [
    {
      label: 'Pokedex',
      iconId: 'pokedex',
      routerLink: '/',
    },
    {
      label: 'Types',
      iconId: 'types',
      routerLink: '/types',
    },
    {
      label: 'Movesets',
      iconId: 'movesets',
      routerLink: '/movesets',
    },
  ],
};
