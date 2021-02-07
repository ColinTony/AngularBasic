import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html'
})
export class BorrarComponent {

  public isBorrar:boolean = false;
  
  @Input()
  public personajes: Personaje[] = [];
  
  @Input()
  public elim: Personaje = {nombre:"",poder:0};

  borrar()
  {
    this.isBorrar = true;
    this.elim = this.personajes.shift() || {nombre:"Nadie",poder:0};
  }

}
