import { Action, createReducer, on } from '@ngrx/store'
import * as ApiActions from './app.actions'

export const appFeatureKey = 'app'

// export interface State {}
// export const initialState: State = {}
// export const reducer = createReducer(initialState)

export interface ApiState {
    loading: boolean
    success: boolean
    error: boolean
}
export const initialApiState: ApiState = {
    loading: false,
    success: false,
    error: false,
}

const apiReducer = createReducer(
    initialApiState,
    on(ApiActions.loadApi, (state) => ({
        ...state,
        loading: true,
    })),
    on(ApiActions.loadApiSuccess, (state) => ({
        ...state,
        success: true,
    })),
    on(ApiActions.loadApiError, (state) => ({
        ...state,
        error: true,
    }))
)
export function reducer(state: ApiState | undefined, action: Action) {
    console.log('reducer()')
    return apiReducer(state, action)
}
