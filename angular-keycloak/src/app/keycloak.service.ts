import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private _keycloak$ = new BehaviorSubject<any>(null);
  private keycloak$ = this._keycloak$.pipe(filter((k) => !!k));

  constructor() {
    this.initKeycloak();
  }

  private initKeycloak(): Promise<any> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'http://localhost:8080/auth/js/keycloak.js';
      document.getElementsByTagName('head')[0].appendChild(script);
      script.onload = () => {
        resolve(
          new Keycloak({
            url: 'http://localhost:8080/auth/',
            realm: 'master',
            clientId: 'angular-keycloak',
          })
        );
      };
    }).then((keycloak: any) => {
      return keycloak
        .init({
          onLoad: 'login-required',
          checkLoginIframe: false,
          enableLogging: true,
          responseMode: 'query',
        })
        .then((isAuthenticated) => {
          this._keycloak$.next(keycloak);
          this.isAuthenticated$.next(isAuthenticated);
        });
    });
  }

  public getUserName(): Observable<string> {
    return this.keycloak$.pipe(
      take(1),
      switchMap((k) => k.loadUserProfile()),
      map(({ username }) => username)
    );
  }
}
