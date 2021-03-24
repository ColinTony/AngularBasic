import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!:Country; // puede ser nulo.

  constructor(
    private activedRouter:ActivatedRoute,
    private paisService: PaisService
    
    ) { }


  // ngOnINit se ejecuta despues del constructor
  ngOnInit(): void {

    this.activedRouter.params
    .pipe(
      switchMap(({idPais})=>this.paisService.verPais(idPais)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais);
    
   /*
    this.activedRouter.params
    .subscribe(({idPais})=>{

      console.log(idPais);
      this.paisService.verPais(idPais)
      .subscribe(pais=>{
        console.log(pais);
      });
      
    });
    */

  }

}
