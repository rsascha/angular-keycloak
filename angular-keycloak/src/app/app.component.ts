import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KeycloakService } from './keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-keycloak';

  constructor(private keycloak: KeycloakService) {}

  get loginNameTest$(): Observable<string> {
    return of('Test User');
  }

  get loginName$(): Observable<string> {
    return this.keycloak.getUserName();
  }
}
