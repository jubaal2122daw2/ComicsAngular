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
  variableInput: string = '';
  autor: string = '';
  //types: string [] = ['Supernatural', 'Shonen', 'Shojo', 'Romance', 'Slice-Life', 'Yaoi', 'Drama', 'Action'];
  //checked = false;

  checkboxTypes = [
    {
      id: '1',
      label: 'Supernatural',
      isChecked: false,
    },
    {
      id: '2',
      label: 'Shonen',
      isChecked: false,
    },
    {
      id: '3',
      label: 'Shojo',
      isChecked: false,
    },
    {
      id: '4',
      label: 'Romance',
      isChecked: false,
    },
    {
      id: '5',
      label: 'Slice-Life',
      isChecked: false,
    },
    {
      id: '6',
      label: 'Yaoi',
      isChecked: false,
    },
    {
      id: '7',
      label: 'Drama',
      isChecked: false,
    },
    {
      id: '8',
      label: 'Action',
      isChecked: false,
    }
  ];

  // selectedItemsList: object = [];
  // checkedIDs: string [] = [];

  constructor(private comicService: Comics) { }

  ngOnInit() { //carga lo primeno nada más iniciar
    this.obtenerComicsdeService();
  }

  // obtenerTypesChecked(/*poner el array.*/) :void {
    
  // }

  // findChecked():void{
  //   /*Coger los seleccionados y buscar coincidencias con Comics */
  // }

  
  // anadirFavoritos(comic: Comic): void {
  //   comic.fav = !comic.fav;
  //   console.log(comic.fav);
  //   this.storage.store(comic.id.toString(), comic.fav);
  // }

  // changeSelection(comic: Comic):void {
  //   /*marcar en el array como checked*/
  //   if (comic.types)
  // }

  obtenerComicsdeService(): void {
    this.comicService.obtenerComics()
      .subscribe(comics => this.comics = comics);
  }


}
