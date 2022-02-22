import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';

/*IMPORTS MATERIAL */
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


/*IMPORTS COMPONENTES */
import { BuscarComicsComponent } from './buscar-comics/buscar-comics.component';
import { ComicsComponent } from './comics/comics.component';
import { AppComponent } from './app.component';
import { ComicTemplateComponent } from './comic-template/comic-template.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { InfoComicComponent } from './info-comic/info-comic.component';
import { PreviewComponent } from './preview/preview.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComicsComponent,
    ComicsComponent,
    ComicTemplateComponent,
    FavoritosComponent,
    FilterPipe,
    InfoComicComponent,
    PreviewComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    NgxWebstorageModule.forRoot(),
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
