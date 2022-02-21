import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../service-comics/comics-interface';

import { Comics } from '../service-comics/comics-service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  

  comics: Comic[] = [];



  constructor(private comicService: Comics) { }

  ngOnInit() { //carga lo primeno nada más iniciar
    this.obtenerComicsdeService();
  }

  obtenerComicsdeService(): void {
    this.comicService.obtenerComics()
      .subscribe(comics => this.comics = comics);
  }

}

