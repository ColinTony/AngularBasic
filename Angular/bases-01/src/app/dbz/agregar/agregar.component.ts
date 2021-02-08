import { Component} from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  public nuevoP:Personaje = {nombre:"",poder:0};

  constructor(private dbzService:DbzService){}
  
  agregar()
  {
    if(this.nuevoP.nombre.trim().length === 0){ return }
    this.dbzService.agregarNuevoP(this.nuevoP);
  }

}
