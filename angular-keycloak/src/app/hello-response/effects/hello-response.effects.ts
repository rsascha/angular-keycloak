import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, concatMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { GetHelloService, HelloResponse } from 'src/apis/application-service'
import { HelloResponseActions } from '../actions/'

@Injectable()
export class HelloResponseEffects {
    _loadHelloResponses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HelloResponseActions.enter),
            concatMap(() =>
                this.getHelloService.getHello().pipe(
                    map(
                        (data: HelloResponse) =>
                            HelloResponseActions.loadHelloResponsesSuccess({
                                data,
                            }),
                        catchError((error) =>
                            of(
                                HelloResponseActions.loadHelloResponsesFailure({
                                    error,
                                })
                            )
                        )
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private readonly getHelloService: GetHelloService
    ) {}
}
