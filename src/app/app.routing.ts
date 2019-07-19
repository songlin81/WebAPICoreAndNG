import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactformComponent } from './contactform/contactform.component';
import { NSTformComponent } from './nstform/nstform.component';

const appRoutes: Routes = [
  { path: '',  pathMatch: 'full' , component: ContactlistComponent },
  { path: 'contactform', component: ContactformComponent },
  { path: 'nst', component: NSTformComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);