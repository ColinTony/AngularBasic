import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// debemos importarlo para poder usar diferentes componentes
import { AppComponent } from './app.component';
import { ListadoModule } from './Heroes/listado/listado.module';
import { ContadorModule } from './contadores/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListadoModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
