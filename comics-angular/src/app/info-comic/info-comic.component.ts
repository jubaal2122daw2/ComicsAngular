import { Component, Inject, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Comic } from '../service-comics/comics-interface';

@Component({
  selector: 'app-info-comic',
  templateUrl: './info-comic.component.html',
  styleUrls: ['./info-comic.component.css']
})
export class InfoComicComponent {

  resultado:string;
  generosToString: string = '';
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private route:ActivatedRoute, private router:Router){
    console.log("modal data",this.data.dataKey.name);
    this.generosToString = this.data.dataKey.types.join(', ');
    console.log("modal genero",this.generosToString);
    this.resultado='';
  }

  verPreview(dato:string):void{
    this.resultado = dato;
    this.router.navigate(["/preview"],{state: {data: {dato:this.resultado}}});
  }

}
