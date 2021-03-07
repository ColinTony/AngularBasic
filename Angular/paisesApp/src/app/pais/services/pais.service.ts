import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _urlBase = 'https://restcountries.eu/rest/v2';
  constructor( private http : HttpClient ) { }

  buscarPais( termino : string ) : Observable<Country[]>
  {
    const url = `${this._urlBase}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino : string ) : Observable<Country[]>
  {
    const url = `${this._urlBase}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

}
