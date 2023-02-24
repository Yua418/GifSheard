import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _history:string[] = [];

  get history() {
    return [...this._history];
  }

  buscarGif(query:string) {
    query = query.trim().toLowerCase();
    if(!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10); // Solo toma las ultimas 10 instancias del historial
    }
  }

}
