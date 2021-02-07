import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get personajes():Personaje[]
  {
    return this.dbzService.getPersonajes;
  }
  constructor(private dbzService:DbzService){}

}
