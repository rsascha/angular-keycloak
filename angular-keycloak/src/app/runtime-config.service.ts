import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RuntimeConfigService {
    private data: RuntimeConfigType;

    constructor(private httpClient: HttpClient) {}

    load(): Promise<void> {
        return this.httpClient
            .get('/assets/data/config.json')
            .toPromise()
            .then((data: RuntimeConfigType) => {
                this.data = data;
            });
    }

    get(): any {
        return this.data;
    }
}

export interface RuntimeConfigType {
    keycloak: KeycloakConfigType;
}

export interface KeycloakConfigType {
    js: string;
    url: string;
    realm: string;
    clientId: string;
}
