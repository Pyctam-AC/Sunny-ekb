export interface NavigationItem {
  title: string;
  path: string;
}

export const MainNavigationLinks: NavigationItem[] = [
  {
    title: 'На районе',
    path: '/nearby',
  },
  {
    title: 'О районе',
    path: '/about',
  },
];

