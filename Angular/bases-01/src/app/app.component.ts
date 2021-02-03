import { Component } from '@angular/core';
//  se importa un decorador Component de angular/core
// este compinente ya esta escrito de esta manera
/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
*/
// nosotros lo vamos a escribir y explicar, Es un decorador que recibe
// de argumento un objeto el cual contiene minumo el selector y el template
// el selector es el nombre con el cual podremos acceder a ese componenete
// y el template existen dos templateURL y template El Primero es pasarle el
// path del archivo html para escribirlo. El template solito es para escribir nosotros
// el html directamente.
@Component({
  selector : 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 
}
