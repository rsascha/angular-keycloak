import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromHelloResponse from '../hello-response/reducers/hello-response.reducer';


export interface State {

  [fromHelloResponse.helloResponseFeatureKey]: fromHelloResponse.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromHelloResponse.helloResponseFeatureKey]: fromHelloResponse.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
