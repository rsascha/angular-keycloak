import { createFeatureSelector } from '@ngrx/store'
import * as fromHelloResponse from '../reducers'

export const selectHelloResponseState = createFeatureSelector<
    fromHelloResponse.HelloResponseState
>(fromHelloResponse.helloResponseFeatureKey)
