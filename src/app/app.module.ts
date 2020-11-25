import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpTest1Component } from './features/cmp-test-1/cmp-test-1.component';
import { CmpTest2Component } from './features/cmp-test-2/cmp-test-2.component';

@NgModule({
  declarations: [AppComponent, CmpTest1Component, CmpTest2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
