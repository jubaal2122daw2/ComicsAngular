import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoComicComponent } from '../info-comic/info-comic.component';
import { trigger,state,style,animate,transition } from '@angular/animations';

import { Comic } from '../service-comics/comics-interface';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-comic-template',
  templateUrl: './comic-template.component.html',
  styleUrls: ['./comic-template.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        
        opacity: 1,
        
      })),
      state('closed', style({
        opacity: 1,
        transform: 'scale(1.4)'
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),
    trigger('mostrarautor', [
      // ...
      state('open', style({
        
        opacity: 0,
        
      })),
      state('closed', style({
        opacity: 1,
        transform: 'scale(1.0)'
        
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),
    trigger('zoom', [
      // ...
      state('open', style({
        
        opacity: 1,
        
      })),
      state('closed', style({
        opacity: 1,
        transform: 'scale(1.1)'
        
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),
  ],
})
export class ComicTemplateComponent {

  @Input() infoComic: any;

  constructor(private storage:LocalStorageService, public dialog: MatDialog, private dbService: NgxIndexedDBService) {}
  
  anadirFavoritos(comic: Comic): void {
    comic.fav = !comic.fav;
    console.log(comic.fav);
    this.storage.store(comic.id.toString(), comic.fav);

    this.dbService.update('comicsTable', {
      id: comic.id.toString(),
      fav: comic.fav,
    }).subscribe((key)=>{
      console.log('key: ', key);
    });
  }
  
  openDialog(comic: Comic) {
    this.dialog.open(InfoComicComponent, {
      width: '550px',
      height: '650px',
      data: {
        dataKey: comic
      }
    });
  }


  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }


  mautor = true;

  mostra() {
    this.mautor = !this.mautor;
  }
  izoom = true;

  zoom() {
    this.izoom = !this.izoom;
  }
}