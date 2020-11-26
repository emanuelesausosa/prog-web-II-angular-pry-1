import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZonaHorariaComponent } from './features/zona-horaria/zona-horaria.component';

@NgModule({
  declarations: [AppComponent, ZonaHorariaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
