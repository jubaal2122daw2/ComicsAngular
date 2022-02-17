import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*IMPORTS MATERIAL */
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

/*IMPORTS COMPONENTES */
import { BuscarComicsComponent } from './buscar-comics/buscar-comics.component';
import { ComicsComponent } from './comics/comics.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComicsComponent,
    ComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
