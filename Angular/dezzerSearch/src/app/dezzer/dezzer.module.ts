import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { DezzerPageComponent } from './dezzer-page/dezzer-page.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';




@NgModule({
  declarations: [DezzerPageComponent, BuscadorComponent, ResultadosComponent],
  exports:[DezzerPageComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DezzerModule { }
