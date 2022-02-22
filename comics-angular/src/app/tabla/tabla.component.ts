import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LocalStorageService } from 'ngx-webstorage';

import { Comic } from '../service-comics/comics-interface';
import { COMICS } from '../service-comics/comics-mock';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  constructor(private storage:LocalStorageService){
    
  }

  displayedColumns: string[] = ['Titulo', 'Autor', 'Generos'];
  dataSource = new MatTableDataSource(COMICS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  chooseColor(elemento: any) {
    if (elemento.fav == true) {
      return "#f2e5c2"
    }
    else if (elemento.fav == false)
      return "#fff" 
    else
      return "#fff"
  }

}
