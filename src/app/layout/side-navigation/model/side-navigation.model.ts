import { IconName } from '../../../shared/ui/icon/icon.types';

export interface SideNavigationItemModel {
  label: string;
  iconId: IconName;
  routerLink: string;
}

export interface SideNavigationModel {
  items: SideNavigationItemModel[];
}
