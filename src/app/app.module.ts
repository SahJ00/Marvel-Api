import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ComicComponent } from './comic/comic.component';
import { CharacterComponent } from './character/character.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiMarvelService } from './api-marvel.service';
import { CharacterComicComponent } from './character-comic/character-comic.component';
import { ComicsFilterComponent } from './comics-filter/comics-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ComicComponent,
    CharacterComponent,
    ComicDetailComponent,
    NotFoundComponent,
    CharacterComicComponent,
    ComicsFilterComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [ApiMarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
