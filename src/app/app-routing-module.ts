import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccespointAbout } from './accespoint-about/accespoint-about';
import { AccespointEvents } from './accespoint-events/accespoint-events';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: AccespointEvents
  },
  {
    path: 'about',
    component: AccespointAbout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
