import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { KeycloakAuthGuard } from './keycloak-auth.guard'

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [KeycloakAuthGuard],
    },
    {
        path: 'hello',
        loadChildren: () =>
            import('./hello-response/hello-response.module').then(
                (m) => m.HelloResponseModule
            ),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
