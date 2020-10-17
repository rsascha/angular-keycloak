import { Injectable } from '@angular/core'
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { HelloResponse } from 'src/apis/application-service'
import { DefaultService } from 'src/apis/application-service/api/default.service'
import { ApiActions, loadApiError, loadApiSuccess } from './app.actions'

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private readonly defaultService: DefaultService
    ) {}

    loadApi = this.actions$.pipe(
        ofType(ApiActions.Load),
        switchMap((action) => {
            return this.defaultService.appControllerGetHello().pipe(
                map((response: HelloResponse) =>
                    loadApiSuccess({ data: response })
                ),
                catchError((error) => of(loadApiError({ error: error })))
            )
        })
    )
}
