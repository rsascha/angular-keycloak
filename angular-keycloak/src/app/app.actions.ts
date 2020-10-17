import { createAction, props } from '@ngrx/store'
import { Action } from 'rxjs/internal/scheduler/Action'
import { HelloResponse } from 'src/apis/application-service'

export const loadApps = createAction('[App] Load Apps')
export const loadAppsSuccess = createAction(
    '[App] Load Apps Success',
    props<{ data: any }>()
)
export const loadAppsFailure = createAction(
    '[App] Load Apps Failure',
    props<{ error: any }>()
)

export interface Loadable {
    loading: boolean
    success: boolean
    error: any
}
export enum ApiActions {
    Load = '[API] LOAD',
    LoadSuccess = '[API] LOAD SUCCESS',
    LoadError = '[API] LOAD ERROR',
}
export const loadApi = createAction(ApiActions.Load)
export const loadApiSuccess = createAction(
    ApiActions.LoadSuccess,
    props<{ data: HelloResponse }>()
)
export const loadApiError = createAction(
    ApiActions.LoadError,
    props<{ error: any }>()
)
