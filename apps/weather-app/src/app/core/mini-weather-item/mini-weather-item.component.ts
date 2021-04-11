import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { WeatherModel } from '../../../../../../libs/models/weather.model';
import * as fromSelectors from '../../store/app.selectors';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'weather-app-mini-weather-item',
  templateUrl: './mini-weather-item.component.html',
  styleUrls: ['./mini-weather-item.component.scss'],
})
export class MiniWeatherItemComponent implements OnInit, OnDestroy {
  @Input() forecast: WeatherModel;

  isMetric = false;
  isMetricSub: Subscription;

  constructor( private store: Store<AppState>){}


  ngOnInit() {
    this.isMetricSub = this.store.select(fromSelectors.selectIsMetric).subscribe(isMetric => {
      this.isMetric = isMetric;
    });
  }

  roundTemp(temp: number){
    return Math.round(temp);
  }


  convertDate(date: number) {
    return new Date(date*1000)
  }

  getWeatherIcon(icon: string) {
    if (icon === '02n' || icon === '03d' || icon === '04d') return 'cloud'
    else if (icon === '02d') return 'partly_sunny'
    else if (icon === '09d') return 'showers'
    else if (icon === '10d' || icon === '11d') return 'rain'
    else if (icon === '13d') return 'snow'
    else if (icon === '01d') return 'sun'
    else return 'cloud_moon'
  }


  ngOnDestroy() {
    this.isMetricSub.unsubscribe();
  }



}



