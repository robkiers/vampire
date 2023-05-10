import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/overview/routes').then((mod) => mod.OVERVIEW_ROUTES),
  },
];
