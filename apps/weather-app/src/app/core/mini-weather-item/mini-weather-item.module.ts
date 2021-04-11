import { NgModule } from '@angular/core';
import { MiniWeatherItemComponent } from './mini-weather-item.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [MiniWeatherItemComponent],
  imports: [
    MatIconModule,
    CommonModule
  ],
  bootstrap: [MiniWeatherItemComponent],
  exports: [
    MiniWeatherItemComponent
  ]
})
export class MiniWeatherItemModule {}
