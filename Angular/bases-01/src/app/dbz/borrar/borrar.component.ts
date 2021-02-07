import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html'
})
export class BorrarComponent {

  
  get isBorrar():boolean
  {
    return this.dbzService.isBorrarC;
  }

  get elim():Personaje
  {
    return this.dbzService.getElimP;
  }
  borrar()
  {
    this.dbzService.borrar();
  }

  constructor(private dbzService:DbzService)
  {}
}
