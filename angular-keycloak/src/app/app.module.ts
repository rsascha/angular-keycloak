import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './app.effects';
import { ApiModule } from 'src/apis/application-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import * as fromApi from './app.reducer';
import { reducers, metaReducers } from './reducers';
import * as fromHelloResponse from './hello-response/reducers/hello-response.reducer';
import { HelloResponseEffects } from './hello-response/effects/hello-response.effects';
import { HelloResponseComponent } from './hello-response/containers/hello-response/hello-response.component';
import { RuntimeConfigService } from './runtime-config.service';

const appInitializerFn = (config: RuntimeConfigService) => {
    return () => {
        return config.load();
    };
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ api: fromApi.reducer }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects]),
        ApiModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        // StoreModule.forFeature(
        //     fromHelloResponse.helloResponseFeatureKey,
        //     fromHelloResponse.reducer
        // ),
        // EffectsModule.forFeature([HelloResponseEffects]),
    ],
    providers: [
        HttpClient,
        RuntimeConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFn,
            multi: true,
            deps: [RuntimeConfigService],
        },
    ],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent],
})
export class AppModule {}
