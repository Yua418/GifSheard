import { GifService } from 'src/app/gif-module/services/gif-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  get resultados() {
    return this.gifService.resultado;
  }

  constructor( private gifService:GifService ) {}
}
