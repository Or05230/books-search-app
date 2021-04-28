import { NgModule } from '@angular/core';
import { FavoritesComponent } from './favorites.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    MatIconModule,
    CommonModule,
    MatCardModule
  ],
  bootstrap: [FavoritesComponent],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule {}
