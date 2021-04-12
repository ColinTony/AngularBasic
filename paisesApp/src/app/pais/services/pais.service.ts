import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private _urlBase = 'https://restcountries.eu/rest/v2';
  constructor( private http : HttpClient ) { }

  // get
  get getParams(){return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');}
  // end get params
  buscarPais( pais : string ) : Observable<Country[]>
  {
    const url = `${this._urlBase}/name/${pais}`;

    return this.http.get<Country[]>(url,{params:this.getParams});
  }

  buscarCapital( capital : string ) : Observable<Country[]>
  {
    const url = `${this._urlBase}/capital/${capital}`;

    return this.http.get<Country[]>(url,{params:this.getParams});
  }

  buscarRegion( region : string ) : Observable<Country[]>
  {
    const url = `${this._urlBase}/region/${region}`;

    return this.http.get<Country[]>(url,{params:this.getParams});
  }

  verPais( idPais : string ) : Observable<Country>
  {
    const url = `${this._urlBase}/alpha/${idPais}`;
    return this.http.get<Country>(url);
  }

}
