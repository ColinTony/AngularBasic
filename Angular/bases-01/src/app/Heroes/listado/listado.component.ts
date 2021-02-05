import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
    
  public hereoes:string[] = ['IronMan','SpiderMan','Goku','Capitan America'];
  public elim:string = "Nada eliminado";
  public isElim:boolean = false;

  borrarHeroe():void
  {
    // Este mismo codigo se puede escrbir de otra forma
    // si usamos ese codigo debemos agregarle a elim que puede
    // ser de tipo undefined
    /*
    if(this.hereoes.length != 0)
      this.elim = this.hereoes.pop() + ' Fue eliminado';
    else
      this.elim = "Ya no hay elementos;
    */
   this.elim = this.hereoes.shift() || "No hay elementos para borrar";
   this.isElim = true;
  }
}
