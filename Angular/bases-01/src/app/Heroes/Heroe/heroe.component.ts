import { Component } from "@angular/core";

@Component(
    {
        selector:'app-heroe',
        templateUrl: './heroe.component.html'
    }
)
export class HeroeComponent
{
    public nombre:string  = 'IronMan';
    public edad : number = 40;
    
    // podemos definir una funcion como tal nombre
    // para obtener el nombre del heroe

    obtenerInfo():string
    {
        return `${ this.nombre } - ${this.edad} `;
    }
    // tambien podemos hacer uso de get y set
    get nombreCap():string
    {
        return this.nombre.toUpperCase();
    }

    // concepto de One Wat Data Binding
    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }
    cambiarEdad():void{
        this.edad = 20;
    }
};