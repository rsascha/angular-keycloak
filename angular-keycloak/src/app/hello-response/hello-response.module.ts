import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloResponseComponent } from './containers/hello-response/hello-response.component';
import { HelloResponseRoutingModule } from './hello-response-routing.module';
import { StoreModule } from '@ngrx/store';

import * as fromHelloResponse from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HelloResponseEffects } from './effects';

export const COMPONENTS = [];

export const CONTAINERS = [HelloResponseComponent];

@NgModule({
    declarations: [COMPONENTS, CONTAINERS],
    imports: [
        CommonModule,
        HelloResponseRoutingModule,
        StoreModule.forFeature(
            fromHelloResponse.helloResponseFeatureKey,
            fromHelloResponse.reducers
        ),
        EffectsModule.forFeature([HelloResponseEffects]),
    ],
})
export class HelloResponseModule {}
