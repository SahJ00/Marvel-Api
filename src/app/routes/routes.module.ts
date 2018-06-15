import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { ComicComponent } from '../comic/comic.component';
import { CharacterComponent } from '../character/character.component';
import { ComicDetailComponent } from '../comic-detail/comic-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component'
import { CharacterComicComponent } from '../character-comic/character-comic.component';

const appRoutes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'comics', component: ComicComponent},
  { path: 'character-comic/:id', component: CharacterComicComponent },
  //{ path: 'character', component: CharacterComponent},
  // { path: 'products', component: ProductComponent },
  // { path: 'products', component: ProductComponent },
  { path: 'comic-details', component: ComicDetailComponent },
  { path: '**', component: NotFoundComponent }
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
    enableTracing: false
  })
  ],
  exports: [RouterModule],
  declarations: []

})
export class RoutesModule { }
