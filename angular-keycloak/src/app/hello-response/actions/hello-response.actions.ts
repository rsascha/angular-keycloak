import { createAction, props } from '@ngrx/store'

export const loadHelloResponses = createAction(
    '[HelloResponse] Load HelloResponses'
)

export const loadHelloResponsesSuccess = createAction(
    '[HelloResponse] Load HelloResponses Success',
    props<{ data: any }>()
)

export const loadHelloResponsesFailure = createAction(
    '[HelloResponse] Load HelloResponses Failure',
    props<{ error: boolean }>()
)
