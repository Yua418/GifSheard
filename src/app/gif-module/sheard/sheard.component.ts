import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif-service.service';

@Component({
  selector: 'app-sheard',
  templateUrl: './sheard.component.html',
})
export class SheardComponent {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifService:GifService ) {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if( valor.trim().length === 0) {
      return;
    }

    this.gifService.buscarGif( valor );

    this.txtBuscar.nativeElement.value = "";
  }

}
