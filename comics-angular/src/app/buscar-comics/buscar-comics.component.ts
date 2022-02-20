import { Component, OnInit, NgModule } from '@angular/core';

import { Comics } from '../service-comics/comics-service';
import { Comic } from '../service-comics/comics-interface';

@Component({
  selector: 'app-buscar-comics',
  templateUrl: './buscar-comics.component.html',
  styleUrls: ['./buscar-comics.component.css']
})
export class BuscarComicsComponent implements OnInit {

  comics: Comic[] = [];
  types: string [] = ['Supernatural', 'Shonen', 'Shojo', 'Romance', 'Slice-Life', 'Yaoi', 'Drama','Action'];
  checked = false;

  constructor(private comicService: Comics) { }

  ngOnInit() { //carga lo primeno nada más iniciar
    this.obtenerComicsdeService();
  }

  obtenerComicsdeService(): void {
    this.comicService.obtenerComics()
      .subscribe(comics => this.comics = comics);
  }

}