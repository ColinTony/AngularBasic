import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// debemos importarlo para poder usar diferentes componentes
import { AppComponent } from './app.component';
import { ContadorComponet } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
