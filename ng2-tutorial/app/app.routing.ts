/**
 * Created by ajream on 2016/10/7.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);