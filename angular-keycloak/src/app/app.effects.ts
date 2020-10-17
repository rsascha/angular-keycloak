import { Injectable } from '@angular/core'
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators'
import { GetHelloService, HelloResponse } from 'src/apis/application-service'
import { DefaultService } from 'src/apis/application-service/api/default.service'
import { ApiActions, loadApiError, loadApiSuccess } from './app.actions'

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private readonly getHelloService: GetHelloService
    ) {}

    loadApi$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ApiActions.Load),
            mergeMap(() =>
                this.getHelloService.appControllerGetHello().pipe(
                    map((response: HelloResponse) => ({
                        type: ApiActions.LoadSuccess,
                        payload: response,
                    })),
                    catchError((error) =>
                        of({
                            type: ApiActions.LoadError,
                            payload: error,
                        })
                    )
                )
            )
        )
    )
}
