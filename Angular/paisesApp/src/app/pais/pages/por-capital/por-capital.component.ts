import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  public termino:string = "";
  public error:boolean = false;
  public paisesR: Country[] = [];


  buscar(termino:string)
  {
    this.termino = termino;
    this.error = false;
    this.paisService.buscarCapital(this.termino)
    .subscribe(paises => {
      this.paisesR = paises;
    },(err => {
      this.error = true;
      this.paisesR = [];
      console.log(err);
    }));
  }

 constructor(private paisService : PaisService){}

}
