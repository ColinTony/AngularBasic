import { Component } from '@angular/core';

interface Personaje {
  nombre:string;
  poder:number;
}

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

  agregar()
  {
    if(this.nuevoP.nombre.trim().length === 0){ return }
    this.listaPersonajes.push(this.nuevoP);
    this.nuevoP = {nombre:"",poder:0};
  }
  borrar()
  {
    this.isBorrar = true;
    this.elim = this.listaPersonajes.shift() || {nombre:"Nadie",poder:0};
  }
}
