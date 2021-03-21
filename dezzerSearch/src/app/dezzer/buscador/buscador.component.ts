import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DezzerService } from '../services/dezzer.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {

  constructor(private dezzerS:DezzerService){}

  @ViewChild('txtBusqueda')
  private busqueda !: ElementRef<HTMLInputElement>;

  buscar()
  {
    this.dezzerS.buscarDezzer(this.busqueda.nativeElement.value);
  }
}
