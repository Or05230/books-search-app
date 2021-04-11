import { NgModule } from '@angular/core';
import { BaseTemplateModule } from './base-template/base-template.module';
import { MiniWeatherItemModule } from './mini-weather-item/mini-weather-item.module';
import { AppPopUpModule } from './app-pop-up/app-pop-up.module';

@NgModule({
  exports: [AppPopUpModule,BaseTemplateModule,MiniWeatherItemModule],
  imports: [AppPopUpModule,BaseTemplateModule,MiniWeatherItemModule]
})
export class CoreModule {}
