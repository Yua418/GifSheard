import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponse } from '../interface/gif.interface';
import { Gif } from './../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private servicioUrl:string = "https://api.giphy.com/v1/gifs";
  private _history:string[] = [];

  public resultado:Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor( private http:HttpClient ) { // Esto solo se ejecuta una vez cuando abrimos la pagina
    this._history = JSON.parse(localStorage.getItem("history")!) || []; // Aca llama los datos del local Storage
    this.buscarGif(localStorage.getItem("last")! || "Hello!")
  }

  buscarGif(query:string) {
    query = query.trim().toLowerCase();
    if(!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10); // Solo toma las ultimas 10 instancias del historial
      localStorage.setItem("history", JSON.stringify(this._history)); // Crea una base de datos local con el historial
      localStorage.setItem("last", query); // Crea una base de datos local con la ultima busqueda
    }
    const params = new HttpParams()
      .set("api_key", "3dapeSEVCllqhIgIOh6dVMW6OWAkW5aV")
      .set("limit", "10")
      .set("q", query);
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe((resp) => {
        this.resultado = resp.data;
      });
  }
}
