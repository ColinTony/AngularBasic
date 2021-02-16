import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  public termino:string = '';
  public error : boolean = false;
  public paisesR: Country[] = [];
  
  constructor(private paisService:PaisService) { }
  
  buscar()
  {
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
}
