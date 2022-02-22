import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { BuscarComicsComponent } from './buscar-comics/buscar-comics.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PreviewComponent } from './preview/preview.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  { path: '', redirectTo: '/inici', pathMatch: 'full'}, //si no pones nada te envia a inicio.
  { path: 'inici', component: ComicsComponent },
  { path: 'buscar', component: BuscarComicsComponent },
  { path: 'fav', component: FavoritosComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'table', component: TablaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
