import { createReducer, on } from '@ngrx/store'

export const appFeatureKey = 'app'

export interface State {}
export const initialState: State = {}
export const reducer = createReducer(initialState)
