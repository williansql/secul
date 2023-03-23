import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrosComponent } from './cadastros/cadastros.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager.component';
import { ProfessionalsCategoriesComponent } from './professionals/professionals-categories.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { FormularioComponent } from './manager-modal/alterar-senha/formulario/formulario.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { CadastroEditaisComponent } from './cadastro-editais/cadastro-editais.component';

const routes: Routes = [
    {
        path: '',
        component: ManagerComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'profissionais',
                component: ProfessionalsCategoriesComponent,
            },
            {
                path: 'cadastros',
                component: CadastrosComponent,
            },
            {
                path: 'eventos',
                component: EventsComponent,
            },
            {
                path: 'galeria',
                component: GalleryComponent,
            },
            {
                path: 'agendamentos',
                component: SchedulingComponent,
            },
            {
                path: 'categorias', component: ProfessionalsCategoriesComponent
            },
            {
                path: 'cadastro-editais', component: CadastroEditaisComponent
            },
            {
                path: 'alterar-senha', component: FormularioComponent
            },
            {
                path: '**', redirectTo: 'login', pathMatch: 'full'
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagerRoutingModule { }
