import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
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
      keycloak
        .init({
          onLoad: 'login-required',
          checkLoginIframe: false,
          enableLogging: true,
          responseMode: 'query',
        })
        .then((keycloak) => {
          this._keycloak$.next(keycloak);
        });
    });
  }

  public isInitialized(): Promise<void> {
    return new Promise((resolve) => {
      this.keycloak$.subscribe(() => {
        resolve();
      });
    });
  }

  public getUserName(): Observable<string> {
    return of('DUMMY');
  }
}
