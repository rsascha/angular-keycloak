import { ChangeDetectionStrategy, Component } from '@angular/core'
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
    constructor(private keycloak: KeycloakService) {
        this.loginName$ = this.keycloak.getUserName()
    }
}
