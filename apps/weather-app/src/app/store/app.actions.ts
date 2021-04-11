import { Action } from '@ngrx/store';

export enum ActionTypes {
  CHANGE_METRIC_VALUE='[AppState] Change Metric Value',
}

export class ChangeMetricValue implements Action {
  readonly type = ActionTypes.CHANGE_METRIC_VALUE;

  constructor(public payload : { currentMetricValue : boolean}) {}
}



export type AppActions = ChangeMetricValue
