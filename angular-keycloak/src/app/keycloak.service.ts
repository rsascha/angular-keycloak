import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import {
    KeycloakConfigType,
    RuntimeConfigService,
} from './runtime-config.service';

declare var Keycloak: any;

@Injectable({
    providedIn: 'root',
})
export class KeycloakService {
    private config: KeycloakConfigType;
    private _keycloak$ = new BehaviorSubject<any>(null);
    private keycloak$ = this._keycloak$.pipe(filter((k) => !!k));
    public isAuthenticated$ = new BehaviorSubject<boolean>(false);

    constructor(private runtimeConfigService: RuntimeConfigService) {
        this.config = this.runtimeConfigService.get().keycloak;
        this.initKeycloak();
    }

    private initKeycloak(): Promise<any> {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.config.js;
            document.getElementsByTagName('head')[0].appendChild(script);
            script.onload = () => {
                resolve(
                    new Keycloak({
                        url: this.config.url,
                        realm: this.config.realm,
                        clientId: this.config.clientId,
                    })
                );
            };
        }).then((keycloak: any) => {
            return keycloak
                .init({
                    onLoad: 'login-required',
                    checkLoginIframe: false,
                    enableLogging: false,
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
