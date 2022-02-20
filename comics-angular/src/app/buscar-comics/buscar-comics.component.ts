import { Component, OnInit, NgModule } from '@angular/core';

import { Comics } from '../service-comics/comics-service';
import { Comic } from '../service-comics/comics-interface';
import { Genero } from '../service-generos/generos-interface';
import { Generos } from '../service-generos/generos-service';

@Component({
  selector: 'app-buscar-comics',
  templateUrl: './buscar-comics.component.html',
  styleUrls: ['./buscar-comics.component.css']
})
export class BuscarComicsComponent implements OnInit {

  comics: Comic[] = [];
  generos: Genero[] = [];
  titulo: string = '';
  autor: string = '';
  checked: any;
  setGeneros = new Set<string>();
  stringGeneros = '';


  constructor(private comicService: Comics, private generoService: Generos) { }

  ngOnInit() { //carga lo primeno nada más iniciar
    this.obtenerComicsdeService();
    this.obtenerGenerosService();
  }

  obtenerComicsdeService(): void {
    this.comicService.obtenerComics()
      .subscribe(comics => this.comics = comics);
  }

  obtenerGenerosService(): void {
    this.generoService.obtenerGeneros()
      .subscribe(generos => this.generos = generos);
  }

  obtenerChecked(event: Event, label: string): void{
    this.checked = (event.target as HTMLInputElement);
    if(this.checked.checked){
      console.log("Está checked");
      this.setGeneros.add(label);
      // this.stringGeneros = label;
      console.log(this.setGeneros);
    }else{
      console.log("Está unchecked");
      this.setGeneros.delete(label);
      // this.stringGeneros = '';
      console.log(this.setGeneros);
    }
  }

}
