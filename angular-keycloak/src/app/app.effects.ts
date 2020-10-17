import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { GetHelloService, HelloResponse } from 'src/apis/application-service'
import { ApiActions } from './app.actions'

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
                        data: response,
                    })),
                    catchError((error) =>
                        of({
                            type: ApiActions.LoadError,
                            data: error,
                        })
                    )
                )
            )
        )
    )
}
