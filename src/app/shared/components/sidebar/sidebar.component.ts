import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService : GifsService){}

  get tags() : string[]{
    return this.gifService.tagsHistory;
    // obtenemos todos los datos ingresados por el usuario desde el servicio "GifService"
  }
  searchTag(tag : string):void{
    this.gifService.searchTag(tag);
  }

}
