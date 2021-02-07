import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/personajes.interface';


@Injectable()
export class DbzService{

    private _listaPersonajes : Personaje[] =[
        {
          nombre : "Goku",
          poder : 15000
        },
        {
          nombre : "Vegeta",
          poder : 8500
        }
    ];
    private nuevoP : Personaje = {
        nombre:'',
        poder: 0
    }
    private isBorrar : boolean = false;
    private elim: Personaje = {nombre:"",poder:0};

    // getters
    get isBorrarC():boolean
    {
        return this.isBorrar;
    }

    get getPersonajes() : Personaje[]
    {
        return [...this._listaPersonajes];
    } 

    get getNuevoPersonaje() : Personaje{
        return this.nuevoP;
    }

    get getElimP() : Personaje {
        return this.elim;
    }

    constructor(){}
    borrar()
    {
      this.isBorrar = true;
      this.elim = this._listaPersonajes.shift() || {nombre:"Nadie",poder:0};
    }

    agregarNuevoP( nuevo : Personaje) : void
    {
        this._listaPersonajes.push(nuevo);
    }
};