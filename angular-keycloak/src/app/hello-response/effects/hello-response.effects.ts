import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, concatMap } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs'
import { GetHelloService, HelloResponse } from 'src/apis/application-service'
import * as HelloResponseActions from '../actions/hello-response.actions'

@Injectable()
export class HelloResponseEffects {
    _loadHelloResponses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HelloResponseActions.loadHelloResponses),
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
