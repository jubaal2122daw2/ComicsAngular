/*
    Service permite crear un objeto injectable con métodos que recuperen información,
    sin necesidad de estar copiando la información en todos los componentes
*/

import { Injectable } from '@angular/core';
import { Comic } from './comics-interface';
import { COMICS } from './comics-mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Comics {

  constructor() { }

  obtenerComics(): Observable<Comic[]> {
    return of(COMICS);
  }
}