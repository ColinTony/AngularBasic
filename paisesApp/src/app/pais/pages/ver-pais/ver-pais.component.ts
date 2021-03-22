import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activedRouter:ActivatedRoute,
    private paisService: PaisService
    
    ) { }


  // ngOnINit se ejecuta despues del constructor
  ngOnInit(): void {

    this.activedRouter.params
    .pipe(
      switchMap(({idPais})=>this.paisService.verPais(idPais))
    )
    .subscribe(res => {
      console.log(res);
    });
    
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
