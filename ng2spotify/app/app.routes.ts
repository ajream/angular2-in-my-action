/**
 * Created by ajream on 2016/10/12.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent }  from './components/search/search.component';
import { AboutComponent }  from './components/about/about.component';

const appRoutes: Routes = [
    { path: '', component: SearchComponent},
    { path: 'about', component: AboutComponent }
];

export const Routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);