import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { KeycloakService } from './keycloak.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  //bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  async ngDoBootstrap(app) {
    // console.log(`DoBootstrap - before await keycloak.isInitialized()`);
    // const keycloak = new KeycloakService();
    // await keycloak.isInitialized();
    // console.log(`DoBootstrap - after await keycloak.isInitialized()`);
    app.bootstrap(AppComponent);
  }
}
