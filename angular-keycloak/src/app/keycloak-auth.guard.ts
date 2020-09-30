import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root',
})
export class KeycloakAuthGuard implements CanActivate {
  constructor(protected router: Router, protected keycloak: KeycloakService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          `KeycloakAuthGuard - before await this.keycloak.isInitialized()`
        );
        const authenticated = await this.keycloak.isInitialized();
        console.log(
          `KeycloakAuthGuard - after await this.keycloak.isInitialized()`
        );
        resolve(authenticated);
      } catch (error) {
        reject('An error happened during access validation. Details:' + error);
      }
    });
  }
}
