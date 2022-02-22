import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent{

  recibido: string;

  constructor() {
    this.recibido = history.state.data[Object.keys(history.state.data)[0]];
 }

}
