import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent implements OnInit{
  @Input()
  gifs : Gif[] = [];

  
  ngOnInit(): void {
    if( !this.gifs ) throw new Error('Gifs property is required.');
  }

}
