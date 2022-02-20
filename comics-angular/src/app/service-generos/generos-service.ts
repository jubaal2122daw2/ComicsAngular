import { Injectable } from '@angular/core';
import { Genero } from './generos-interface';
import { GENEROS } from './generos-mock';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class Generos {
    obtenerGeneros(): Observable<Genero[]> {
      return of(GENEROS);
    }
  }