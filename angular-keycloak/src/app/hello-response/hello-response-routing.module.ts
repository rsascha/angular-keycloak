import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HelloResponseComponent } from './containers/hello-response/hello-response.component'

const routes: Routes = [
    {
        path: 'hello',
        component: HelloResponseComponent,
        data: { title: 'HelloResponse' },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HelloResponseRoutingModule {}
