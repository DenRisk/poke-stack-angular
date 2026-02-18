import { IconName } from '../../../shared/ui/icon/types/icon.types';

export interface SideNavigationItemModel {
  label: string;
  iconId: IconName;
  routerLink: string;
}

export interface SideNavigationModel {
  items: SideNavigationItemModel[];
}
