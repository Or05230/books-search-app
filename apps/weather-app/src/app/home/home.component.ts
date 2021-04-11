import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as fromSelectors from '../store/app.selectors';


@Component({
  selector: 'weather-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isMetrics$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscribeStoreObservables();
  }

  subscribeStoreObservables(){
    this.isMetrics$ = this.store.select(fromSelectors.selectIsMetric);
  }

}
