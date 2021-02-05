import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado.component';

@NgModule({
    declarations:[
        // componentes
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class ListadoModule{

};