import { Component, OnInit } from '@angular/core';
import { DezzerService } from '../services/dezzer.service';
import { InfoMusic } from '../interfaces/music.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  get resultadosB():InfoMusic[]
  {
    return this.dezzerService.resultados;
  }
  constructor(private dezzerService:DezzerService){}
}
