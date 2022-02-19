import { Component, Input, OnInit } from '@angular/core';

import { Comic } from '../service-comics/comics-interface';

@Component({
  selector: 'app-comic-template',
  templateUrl: './comic-template.component.html',
  styleUrls: ['./comic-template.component.css']
})
export class ComicTemplateComponent {

  @Input() infoComic: any;

  anadirFavoritos(comic: Comic): void {
    comic.fav = !comic.fav;
    console.log(comic.fav);
  }

}
