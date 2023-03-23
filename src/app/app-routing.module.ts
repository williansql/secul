import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'gerenciador',
        loadChildren: () =>
            import('./manager/manager.module').then((m) => m.ManagerModule),
    },
    {
        path: '',
        loadChildren: () =>
            import('./portal/portal.module').then((m) => m.PortalModule),
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
