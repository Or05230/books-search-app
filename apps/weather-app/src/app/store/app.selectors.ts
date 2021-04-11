import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState } from './app.state';

const getIsMetric = (state : AppState): boolean => state.isMetric;

export const selectAppFeatureState: MemoizedSelector<object,AppState> = createFeatureSelector<AppState>('state');
export const selectIsMetric: MemoizedSelector<object,boolean> = createSelector(selectAppFeatureState,getIsMetric);
