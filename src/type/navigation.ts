export interface Navigation {
  path: string;
  active: string;
  name: string;
  icon: string;
  iconActive?: string;
  children: Navigation[];
}
