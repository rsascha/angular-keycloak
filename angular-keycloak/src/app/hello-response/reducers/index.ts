//
// See: https://github.com/ngrx/platform/blob/master/projects/example-app/src/app/books/reducers/index.ts
//
import {
    Action,
    combineReducers,
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'
import * as fromHelloResponse from './hello-response.reducer'
import * as fromRoot from '../../app.reducer'

// hmm ... ?
// export const helloResponseFeatureKey = fromHelloResponse.helloResponseFeatureKey
export const helloResponseFeatureKey = 'helloResponse'

export interface HelloResponseState {
    [fromHelloResponse.helloResponseFeatureKey]: fromHelloResponse.State
}

export interface State extends fromRoot.State {
    [helloResponseFeatureKey]: HelloResponseState
}

export function reducers(
    state: HelloResponseState | undefined,
    action: Action
) {
    return combineReducers({
        [fromHelloResponse.helloResponseFeatureKey]: fromHelloResponse.reducer,
    })(state, action)
}

export const selectHelloResponseState = createFeatureSelector<
    State,
    HelloResponseState
>(helloResponseFeatureKey)

export const selectHelloResponseEntitiesState = createSelector(
    selectHelloResponseState,
    (state) => state
)
