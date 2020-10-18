import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { KeycloakService } from './keycloak.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'angular-keycloak'
    loginName$: Observable<string>
    apiState$: Observable<boolean>
    apiData$: Observable<string>

    constructor(
        private keycloak: KeycloakService
    ) //private store: Store<{ api: ApiState }>
    {
        this.loginName$ = this.keycloak.getUserName()
        // this.apiState$ = this.store.select((state) => state.api.success)
        // this.apiData$ = this.store.select((state) => state.api.data)
    }

    load() {
        //this.store.dispatch({ type: ApiActions.Load })
    }
}
