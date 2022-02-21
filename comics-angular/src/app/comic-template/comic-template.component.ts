import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDialog } from '@angular/material/dialog';
import { InfoComicComponent } from '../info-comic/info-comic.component';


import { Comic } from '../service-comics/comics-interface';

@Component({
  selector: 'app-comic-template',
  templateUrl: './comic-template.component.html',
  styleUrls: ['./comic-template.component.css']
})
export class ComicTemplateComponent {

  @Input() infoComic: any;

  constructor(private storage:LocalStorageService, public dialog: MatDialog) {}
  
  anadirFavoritos(comic: Comic,): void {
    comic.fav = !comic.fav;
    console.log(comic.fav);
    this.storage.store(comic.id.toString(), comic.fav);
  }
  
  openDialog(comic: Comic) {
    this.dialog.open(InfoComicComponent, {
      width: '500px',
      height: '600px',
      data: {
        dataKey: comic
      }
    });
  }

}
