import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZonaHorariaComponent } from './features/zona-horaria/zona-horaria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZonaHorariaListComponent } from './features/zona-horaria-list/zona-horaria-list.component';

@NgModule({
  declarations: [AppComponent, ZonaHorariaListComponent, ZonaHorariaComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
