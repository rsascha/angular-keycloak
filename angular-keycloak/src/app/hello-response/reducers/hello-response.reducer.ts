import { Action, createReducer, on } from '@ngrx/store';
import * as HelloResponseActions from '../actions/hello-response.actions';

export const helloResponseFeatureKey = 'helloResponse';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(HelloResponseActions.loadHelloResponses, state => state),
  on(HelloResponseActions.loadHelloResponsesSuccess, (state, action) => state),
  on(HelloResponseActions.loadHelloResponsesFailure, (state, action) => state),

);

