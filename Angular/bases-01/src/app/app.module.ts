import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// debemos importarlo para poder usar diferentes componentes
import { AppComponent } from './app.component';
import { ContadorComponet } from './contadores/contador.component';
import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponet,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
