import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as HelloResponseActions from '../actions/hello-response.actions';



@Injectable()
export class HelloResponseEffects {

  loadHelloResponses$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(HelloResponseActions.loadHelloResponses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => HelloResponseActions.loadHelloResponsesSuccess({ data })),
          catchError(error => of(HelloResponseActions.loadHelloResponsesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
