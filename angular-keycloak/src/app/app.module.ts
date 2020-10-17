import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { AppEffects } from './app.effects'
import { ApiModule } from 'src/apis/application-service'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import * as fromApi from './app.reducer'

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
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent],
})
export class AppModule {}
