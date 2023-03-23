import { PlanetarioComponent } from './planetario/planetario/planetario.component';
import { PortalComponent } from './portal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditaisComponent } from './editais/editais/editais.component';
import { NucleoDancaComponent } from './espacos-culturais/nucleo-danca/nucleo-danca.component';
import { NucleoMusicaComponent } from './espacos-culturais/nucleo-musica/nucleo-musica.component';
import { EventosComponent } from './eventos/eventos/eventos.component';
import { ContatoComponent } from './institucional/contato/contato/contato.component';
import { CredenciadosComponent } from './institucional/credenciados/credenciados.component';
import { OrganogramaComponent } from './institucional/organograma/organograma.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { TransparenciaComponent } from './institucional/transparencia/transparencia.component';
import { MainComponent } from './landing-page/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            { path: 'inicio', component: MainComponent },
            {
                path: 'institucional',
                children: [
                    {
                        path: 'sobre',
                        component: SobreComponent,
                    },
                    {
                        path: 'organograma',
                        component: OrganogramaComponent,
                    },
                    {
                        path: 'transparencia',
                        component: TransparenciaComponent,
                    },
                    {
                        path: 'contato',
                        component: ContatoComponent,
                    },
                    { path: 'credenciados', component: CredenciadosComponent },
                ],
            },
            { path: 'editais',  component: EditaisComponent },
            {
                path: 'eventos',
                children: [
                    {
                        path: 'carnaval',
                        component: EventosComponent,
                    },
                    {
                        path: 'marcha-jesus',
                        component: EventosComponent,
                    },
                    {
                        path: 'roteiro-junino',
                        component: EventosComponent,
                    },
                    {
                        path: 'festa-sabugo',
                        component: EventosComponent,
                    },
                    // {
                    //   path: 'virada-cultural',
                    //   component: EventosComponent,
                    // },
                    {
                        path: 'outros',
                        component: EventosComponent,
                    },
                ],
            },
            {
                path: 'espacos-culturais',
                children: [
                    {
                        path: 'nucleo-musica',
                        component: NucleoMusicaComponent,
                    },
                    {
                        path: 'nucleo-danca',
                        component: NucleoDancaComponent,
                    },
                ],
            },
            { path: 'planetario', component: PlanetarioComponent },
            { path: 'editais/2023/001', component: EditaisComponent },
            { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PortalRoutingModule {}
