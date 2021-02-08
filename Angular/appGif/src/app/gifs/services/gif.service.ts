import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIFSearchResponse, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _apiKey = 'tafHPCNpMj2MIf6FvyFFNANy8wUCtVAw';
  private _url = 'http://api.giphy.com/v1/gifs';
  private _historial:string[]=[];
  private _resultados:Gif[] = [];


  constructor(private http:HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this._resultados = JSON.parse(localStorage.getItem('result')!) || [];
  }

  get historial() : string[]
  {
    return [...this._historial];
  }
  get resultados():Gif[]
  {
    return [...this._resultados];
  }
  busqueda( busqueda:string )
  {
    busqueda = busqueda.trim().toLowerCase();
    if(!this._historial.includes(busqueda))
    {
      this._historial.unshift(busqueda);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    const parameters = new HttpParams().
                      set('api_key',this._apiKey)
                      .set('limit','10')
                      .set('q',busqueda);
    this.http.get<GIFSearchResponse>(`${this._url}/search`,{params:parameters}).subscribe((data) => {
      this._resultados = data.data;
      localStorage.setItem('result',JSON.stringify(this._resultados));
    });
    
  }


}
