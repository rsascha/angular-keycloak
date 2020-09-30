import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KeycloakAuthGuard } from './keycloak-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [KeycloakAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
