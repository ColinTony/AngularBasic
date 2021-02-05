import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponet {
     // esta clase se esta exportando para poder ser usada dentro de otro archivo
  // de hecho podemos usar esta propiedad title dentro del html app.component.html
  // recuerda que una buena practica de programacion es decir el encapsulamiento y 
  // tipo de dato que estamos trabajando

  public title:string = 'Contador Basico'; 
  public numero:number = 0;
  public base:number = 5;
  
  // escrbimos un metodo para sumar o restar el valor de numero
  sumaResta(valor : number):void
  {
    this.numero += valor;
  }
}