import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { HelloResponse } from 'src/apis/application-service'
import { ApiActions, loadApi } from './app.actions'
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
    helloResponse$: Observable<HelloResponse>
    constructor(
        private keycloak: KeycloakService,
        private store: Store<{ helloResponse: HelloResponse }>
    ) {
        this.loginName$ = this.keycloak.getUserName()
        this.helloResponse$ = this.store.select((state) => state.helloResponse)
    }

    load() {
        this.store.dispatch({ type: ApiActions.Load })
    }
}
