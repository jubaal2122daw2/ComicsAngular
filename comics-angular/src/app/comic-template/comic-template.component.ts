declare var $: any;
import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';


import { Comic } from '../service-comics/comics-interface';

@Component({
  selector: 'app-comic-template',
  templateUrl: './comic-template.component.html',
  styleUrls: ['./comic-template.component.css']
})
export class ComicTemplateComponent {

  @Input() infoComic: any;

  constructor(private storage:LocalStorageService) {}

  ngAfterViewInit() { //carga lo primeno nada más iniciar
    if(this.infoComic.fav == true){
    $('#'+this.infoComic.id).css("color", "yellow");}
    if(this.infoComic.fav == false){
      $('#'+this.infoComic.id).css("color", "white");}
  }
  anadirFavoritos(comic: Comic,): void {
    comic.fav = !comic.fav;
    console.log(comic.fav);
    this.storage.store(comic.id.toString(), comic.fav);
    if(comic.fav == true){
      $('#'+this.infoComic.id).css("color", "yellow");}
      if(comic.fav == false){
        $('#'+this.infoComic.id).css("color", "white");}
  }

}
