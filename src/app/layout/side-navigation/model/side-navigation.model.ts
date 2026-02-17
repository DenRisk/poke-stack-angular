export interface SideNavigationItemModel {
  label: string
  iconId: string
  routerLink: string
}

export interface SideNavigationModel {
  items: SideNavigationItemModel[]
}
