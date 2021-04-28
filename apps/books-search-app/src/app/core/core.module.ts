import { NgModule } from '@angular/core';
import { BaseTemplateModule } from './base-template/base-template.module';
import { FavoritesModule } from './favorites/favorites.module';

@NgModule({
  exports: [BaseTemplateModule,FavoritesModule],
  imports: [BaseTemplateModule,FavoritesModule]
})
export class CoreModule {}
