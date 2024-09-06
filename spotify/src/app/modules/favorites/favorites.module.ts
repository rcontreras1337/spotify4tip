import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { FavoritesRoutingModule } from './favorites-routing.module';




@NgModule({
  declarations: [


    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
