import { Action, createReducer, on } from '@ngrx/store'
import { HelloResponse } from 'src/apis/application-service'
import * as ApiActions from './app.actions'

export const appFeatureKey = 'app'

// export interface State {}
// export const initialState: State = {}
// export const reducer = createReducer(initialState)

export interface ApiState {
    loading: boolean
    success: boolean
    error: boolean
    data: string
}
export const initialApiState: ApiState = {
    loading: false,
    success: false,
    error: false,
    data: null,
}

const apiReducer = createReducer(
    initialApiState,
    on(ApiActions.loadApi, (state) => ({
        ...state,
        loading: true,
    })),
    on(ApiActions.loadApiSuccess, (state, { data }) => ({
        ...state,
        success: true,
        data: data.data,
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
