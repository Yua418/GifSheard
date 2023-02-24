import { GifService } from './../../gif-module/services/gif-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get history() {
    return this.gifService.history;
  }
  

  constructor(private gifService:GifService) {}

  buscar(item:string) {
    if( item.trim().length === 0) {
      return;
    }
    this.gifService.buscarGif( item );
  }
}
