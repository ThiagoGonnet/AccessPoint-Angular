import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListConcerts } from './list-concerts/list-concerts';
import { Cart } from './cart/cart';
import { AccespointAbout } from './accespoint-about/accespoint-about';
import { AccespointEvents } from './accespoint-events/accespoint-events';
import { InputInteger } from './input-integer/input-integer';

@NgModule({
  declarations: [App, ListConcerts, Cart, AccespointAbout, AccespointEvents, InputInteger],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
