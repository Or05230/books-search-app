import { initialState } from './app.state';
import { ActionTypes, AppActions } from './app.actions';

export function appReducer(state= initialState, action: AppActions){
  switch (action.type){
    case ActionTypes.CHANGE_METRIC_VALUE:{
      return {
        ...state,
        isMetric : !action.payload.currentMetricValue
      }
    }
    default: { return state }
  }
}
