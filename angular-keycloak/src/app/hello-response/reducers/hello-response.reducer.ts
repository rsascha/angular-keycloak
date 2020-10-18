import { createReducer, on } from '@ngrx/store'
import { HelloResponseActions } from '../actions/'

export const helloResponseFeatureKey = 'helloResponse'

export interface State {
    loading: boolean
    success: boolean
    error: boolean
    data: string
}

export const initialState: State = {
    loading: false,
    success: false,
    error: false,
    data: null,
}

export const reducer = createReducer(
    initialState,
    on(HelloResponseActions.enter, (state) => ({
        ...state,
        loading: true,
    })),
    on(HelloResponseActions.loadHelloResponsesSuccess, (state, { data }) => ({
        ...state,
        success: true,
        data: data.data,
    })),
    on(HelloResponseActions.loadHelloResponsesFailure, (state, { error }) => ({
        ...state,
        error: error,
    }))
)
