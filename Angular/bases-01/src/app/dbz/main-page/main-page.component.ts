import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public nuevoP : Personaje = {
    nombre:'',
    poder: 0
  }
  public isBorrar : boolean = false;
  public elim: Personaje = {nombre:"",poder:0};

  public listaPersonajes : Personaje[] =[
    {
      nombre : "Goku",
      poder : 15000
    },
    {
      nombre : "Vegeta",
      poder : 8500
    }
  ];

  agregarNuevoPersonaje( personaje:Personaje )
  {
    this.listaPersonajes.push(personaje);
  }

}
