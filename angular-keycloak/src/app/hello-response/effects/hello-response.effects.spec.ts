import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HelloResponseEffects } from './hello-response.effects';

describe('HelloResponseEffects', () => {
    let actions$: Observable<any>;
    let effects: HelloResponseEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                HelloResponseEffects,
                provideMockActions(() => actions$),
            ],
        });

        effects = TestBed.inject(HelloResponseEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
