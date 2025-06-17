import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detailsionic/:name',
    loadComponent: () => import('./detailsionic/detailsionic.page').then( m => m.DetailsPage)
  },
];
