import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  public termino:string = '';
  public error : boolean = false;
  public paisesR: Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar(termino:string)
  {
    this.termino = termino;
    this.error = false;
    this.paisService.buscarRegion(this.termino)
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
    this.error = true;
  }

}
