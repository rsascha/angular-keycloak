import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHelloResponse from '../reducers/hello-response.reducer';

export const selectHelloResponseState = createFeatureSelector<fromHelloResponse.State>(
  fromHelloResponse.helloResponseFeatureKey
);
