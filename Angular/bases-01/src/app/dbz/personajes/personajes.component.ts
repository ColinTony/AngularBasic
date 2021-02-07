import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // usamos el decorador input para darle una propiedad de componente padre
  @Input()
  public personajes:Personaje[] = [];
}
