import { Component} from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{
  
  constructor(private gifService:GifService){}
  
  get historialBusqueda():string[]
  {
    return this.gifService.historial;
  }
}
