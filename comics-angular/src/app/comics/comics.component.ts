import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'] //de momento esto no hace nada
})
export class ComicsComponent {
    title = 'comics-angular';
    tiles: any[] = [
      {img: 'assets/Rengoku.png', name: 'Kimetsu no Yaiba'},
      {img: 'assets/tokyorevengers.png', name: 'Tokyo Revengers'},
      {img: 'assets/fullmetal.png', name: 'Full Metal Alchemist'},
      {img: 'assets/erased.png', name: 'Erased'},
      {img: 'assets/shingeki.png', name: 'Shingeki no Kyojin'},
      {img: 'assets/jujutsu.png', name: 'Jujutsu Kaisen'},
      {img: 'assets/bokunohero.png', name: 'Boku no Hero Academia'},
      {img: 'assets/given.png', name: 'Given'},
    ];
}
