import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DezzerModule } from './dezzer/dezzer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DezzerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
