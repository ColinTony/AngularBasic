import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html',
  styles: [
  ]
})
export class TablePaisComponent {
  @Input() paisesR:Country[] = [];
}
