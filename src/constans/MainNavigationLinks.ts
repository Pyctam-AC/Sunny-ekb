export interface NavigationItem {
  title: string;
  path: string;
}

export const MainNavigationLinks: NavigationItem[] = [
  {
    title: 'Что есть в районе',
    path: '/nearby',
  },
  {
    title: 'О районе',
    path: '/about',
  },
];

