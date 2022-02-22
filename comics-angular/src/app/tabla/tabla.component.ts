import { Component, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { Comic } from '../service-comics/comics-interface';
import { COMICS } from '../service-comics/comics-mock';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent{

  displayedColumns: string[] = ['Titulo', 'Autor', 'Favorito'];
  dataSource = new MatTableDataSource(COMICS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
