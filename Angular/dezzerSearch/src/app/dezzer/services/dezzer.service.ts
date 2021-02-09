import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoMusic, DezzerSearchResponse } from '../interfaces/music.interface';

@Injectable({
  providedIn: 'root'
})
export class DezzerService {

  private _apiKey:string = 'ac2b859e23msh3693badab62ad3fp10dd85jsnfafc16897ef1';
  private _host:string = 'deezerdevs-deezer.p.rapidapi.com';
  private _url:string = 'https://deezerdevs-deezer.p.rapidapi.com'
  private _endPoints:string[] = ['search']
  private _useQ:string = 'true';
  private _query:string = "";
  private _httpHeaders;

  private _resultados:InfoMusic[] = [];
  
  constructor(private http:HttpClient) {
    this._httpHeaders = new HttpHeaders()
    .set('x-rapidapi-key',this._apiKey)
    .set('x-rapidapi-host',this._host)
    .set('useQueryString',this._useQ);
  }

  get resultados():InfoMusic[]
  {
    return [...this._resultados];
  }


  buscarDezzer( busqueda : string )
  {
    this._query = busqueda;
    const httpParameters = new HttpParams().set('q',this._query);
    
    this.http.get<DezzerSearchResponse>(`${this._url}/${this._endPoints[0]}`,{params:httpParameters,headers:this._httpHeaders}).
    subscribe((resp) => {
      this._resultados = resp.data;
    });
  }

}
