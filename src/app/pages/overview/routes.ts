import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from '../login/login.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

export const OVERVIEW_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: LandingPageComponent,
  },
  {
    path: 'story/:id',
    component: OverviewComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
