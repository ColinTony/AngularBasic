import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';
import { Gif } from '../interfaces/gif.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  get resultados():Gif[]
  {
    return this.gifService.resultados;
  }
  constructor(private gifService:GifService) { }


}
