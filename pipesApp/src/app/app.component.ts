import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "LuIs AnToNio CoLin HereDia"
  edad : string = "22";
  
  mostrarData()
  {
    console.log(`${this.nombre} - ${this.edad}`);
  }
}
