import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as AppActions from '../../store/app.actions';

import { OverlaySpinner } from '../overlay-spinner/overlay-spinner';
import { AppPopUpComponent } from '../app-pop-up/app-pop-up.component';
import { CHANGE_METRICS } from '../../../../../../libs/models/app-pop-up-data.model';
import { OpenweatherService } from '../../services/openweather.service';

@Component({
  selector: 'weather-app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.scss'],
})
export class BaseTemplateComponent {
  copyright = '© Icons by: Linseed Studio from Noun project';

  isMetric: boolean;

  constructor(private dialog: MatDialog, private store: Store<AppState>, private overlaySpinner: OverlaySpinner, private openweatherService: OpenweatherService) {
  }

  async changeUnit() {
    this.overlaySpinner.showSpinner();
    this.store.dispatch(new AppActions.ChangeMetricValue({ currentMetricValue: this.isMetric }));
    this.isMetric = this.openweatherService.isMetric;

    this.overlaySpinner.hideSpinner();
  }

  onChangeUnitClick() {
    const dialogRef = this.dialog.open(AppPopUpComponent, {
      autoFocus: true,
      restoreFocus: false,
      hasBackdrop: true,
      backdropClass: 'dialog-open',
      width: '500px',
      data: {
        popUpData: CHANGE_METRICS,
        content: this.isMetric ? 'Imperial' : 'Metrics'
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.changeUnit();
      }
    });
  }

}
