import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [GifPageComponent, BuscadorComponent, ResultadosComponent],
  exports:[
    GifPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
