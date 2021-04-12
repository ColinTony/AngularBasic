import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
      li {
        cursor : pointer;
      }
    `
  ]
})
export class PorPaisComponent {
  public termino:string = '';
  public error : boolean = false;
  public paisesR: Country[] = [];
  public paisesSugerencia : Country[] = [];
  
  constructor(private paisService:PaisService) { }
  
  buscar(termino:string)
  {
    
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        
        this.paisesR = paises;

      }, (error => {
          this.error = true;
          this.paisesR = [];
          console.error(error);
      }));
  }

  sugerencias(termino:string)
  {
    this.error = false;
    this.paisService.buscarPais(termino)
    .subscribe(paises => {
      this.paisesSugerencia = paises.splice(0,5);
      
    },(error => {
      console.log('No hay sugerencias');
      this.paisesSugerencia = [];
    }));
  }
}
