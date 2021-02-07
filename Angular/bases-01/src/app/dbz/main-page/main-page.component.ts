import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor( private dbzService:DbzService){}
}
