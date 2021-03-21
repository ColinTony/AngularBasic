import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent{

  @ViewChild('txtBusqueda') txtBusqueda !: ElementRef<HTMLInputElement>;
  // inyeccion del servicio
  constructor(private gifService:GifService){}
  
  buscar()
  {
    const busqueda = this.txtBusqueda.nativeElement.value;
    if(busqueda.trim().length === 0){return;}
    this.gifService.busqueda(busqueda);
    this.txtBusqueda.nativeElement.value = '';
  }
}
