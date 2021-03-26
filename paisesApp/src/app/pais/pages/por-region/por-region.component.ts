import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right : 5px
    }
    `
  ]
})
export class PorRegionComponent {
  
  public regiones : string[] = ['africa','americas','asia','europe','oceania'];
  public regionActiva:string='';
  public error : boolean = false;
  public paisesR: Country[] = [];

  constructor(private paisesService:PaisService){}

  getClass(region:string):string
  {
    return (this.regionActiva == region) 
            ? 'btn btn-primary' 
            : 'btn btn-outline-primary';
  }
  
  activarRegion(region:string)
  {
    if(this.regionActiva == region) {return;}
    this.regionActiva=region;
    
    // TODO: Llamada al servicio
    this.paisesService.buscarRegion(this.regionActiva)
        .subscribe(paises => {
          this.paisesR = paises;
        },(error=>{
          this.error = true;
          this.paisesR = [];
          console.error(error);
        }));
  }



}
