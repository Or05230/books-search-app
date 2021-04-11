import { Injectable, OnDestroy } from '@angular/core';
import {
  WEATHER_KEY, FORECAST_BY_LOCATION_KEY_URL
} from '../../../../../libs/models/url.consts';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as fromSelectors from '../store/app.selectors';
import { WeatherModel } from '../../../../../libs/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService implements OnDestroy {
  isMetric: boolean;
  isMetricSub: Subscription;

  constructor(private httpClient : HttpClient, private store: Store<AppState>) {
    this.isMetricSub = this.store.select(fromSelectors.selectIsMetric).subscribe(isMetric => {
      this.isMetric = isMetric;
    });
  }


  getForecastByLocationKey(locationKey : string) : Observable<WeatherModel>{
    return this.httpClient.get<any>(
      FORECAST_BY_LOCATION_KEY_URL + `?q=${locationKey}`,
      { params: new HttpParams()
          .append('units', `${this.isMetric? 'metric': 'imperial'}`)
          .append('appid', WEATHER_KEY)

      }
    )
  }

  ngOnDestroy() {
    this.isMetricSub.unsubscribe();
  }


}
