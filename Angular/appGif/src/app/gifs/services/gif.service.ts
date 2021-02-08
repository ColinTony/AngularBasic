import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial:string[]=[];
  constructor() { }

  get historial() : string[]
  {
    return [...this._historial];
  }

  busqueda( busqueda:string ):void
  {
    busqueda = busqueda.trim().toLowerCase();
    if(!this._historial.includes(busqueda))
    {
      this._historial.unshift(busqueda);
      this._historial = this._historial.splice(0,10);
    }
  }

}
