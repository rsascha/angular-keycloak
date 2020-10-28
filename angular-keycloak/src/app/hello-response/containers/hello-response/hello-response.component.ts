import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelloResponseActions } from '../../actions';
import * as fromHelloResponse from '../../reducers';
import { LoadHelloResponseSelectors } from '../../selectors';

@Component({
    selector: 'app-hello-response',
    templateUrl: './hello-response.component.html',
    styleUrls: ['./hello-response.component.css'],
})
export class HelloResponseComponent implements OnInit {
    helloResponseState$: Observable<fromHelloResponse.HelloResponseState>;

    constructor(private store: Store<{ fromHelloResponseState }>) {
        this.helloResponseState$ = store.select(
            LoadHelloResponseSelectors.selectHelloResponseState
        );
    }

    ngOnInit(): void {}

    load() {
        this.store.dispatch(HelloResponseActions.enter());
    }
}
