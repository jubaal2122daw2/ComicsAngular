import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LocalStorageService } from 'ngx-webstorage';

import { Comic } from '../service-comics/comics-interface';
import { COMICS } from '../service-comics/comics-mock';
import { Comics } from '../service-comics/comics-service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{

  comics: Comic[] = [];

  constructor(private comicService: Comics) { }


  ngOnInit() {
    this.obtenerComicsdeService();
  }

  obtenerComicsdeService(): void {
    this.comicService.obtenerComics()
      .subscribe(comics => this.comics = comics);
  }

  displayedColumns: string[] = ['Titulo', 'Autor', 'Generos', 'Favoritos'];
  dataSource = new MatTableDataSource(COMICS);



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  chooseColor(elemento: Comic) {
    if (elemento.fav == true) {
      return "#f2e5c2"
    }
    else if (elemento.fav == false)
      return "#fff" 
    else
      return "#fff"
  }

}
