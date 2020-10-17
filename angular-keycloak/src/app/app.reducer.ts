import { Action, createReducer, on } from '@ngrx/store'
import { ApiActions } from './app.actions'

export const appFeatureKey = 'app'

export interface State {}
export const initialState: State = {}
export const reducer = createReducer(initialState)

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
export const apiReducer = (
    state: ApiState = initialApiState,
    action: ApiActions
): ApiState => {
    switch (action) {
        case ApiActions.Load:
            return { loading: true, success: false, error: false }
        case ApiActions.LoadSuccess:
            return { loading: false, success: true, error: false }
        case ApiActions.LoadError:
            return { loading: false, success: false, error: true }
        default:
            return state
    }
}
