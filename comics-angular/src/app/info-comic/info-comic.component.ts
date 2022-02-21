import { Component, Inject, Input, OnInit } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Comic } from '../service-comics/comics-interface';

@Component({
  selector: 'app-info-comic',
  templateUrl: './info-comic.component.html',
  styleUrls: ['./info-comic.component.css']
})
export class InfoComicComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    console.log(this.data.dataKey.name);
  }

}
