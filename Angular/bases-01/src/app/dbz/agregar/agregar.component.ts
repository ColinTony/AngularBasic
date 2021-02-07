import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() 
  public nuevoP:Personaje = {nombre:"",poder:0};

  @Output()
  public onNewPersonaje:EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar()
  {
    if(this.nuevoP.nombre.trim().length === 0){ return }
    this.onNewPersonaje.emit(this.nuevoP);
    this.nuevoP = {nombre:"",poder:0};
  }

}
