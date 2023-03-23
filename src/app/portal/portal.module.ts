import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ButtonComponent } from '../shared/components/button/button.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { ArtistStatusPipe } from '../shared/pipes/artist-status.pipe';
import { NavbarComponent } from './../shared/components/navbar/navbar.component';
import { PhonePipe } from './../shared/pipes/phone.pipe';
import { CardEditaisComponent } from './editais/card-editais/card-editais.component';
import { EditaisComponent } from './editais/editais/editais.component';
import { ModalEditaisComponent } from './editais/modal-editais/modal-editais.component';
import { NucleoDancaComponent } from './espacos-culturais/nucleo-danca/nucleo-danca.component';
import { NucleoMusicaComponent } from './espacos-culturais/nucleo-musica/nucleo-musica.component';
import { CardGalleryComponent } from './eventos/card-galery/card-gallery.component';
import { EventosComponent } from './eventos/eventos/eventos.component';
import { ContatoBoxComponent } from './institucional/contato/contato-box/contato-box.component';
import { MessageContatoComponent } from './institucional/contato/contato-box/message-contato/message-contato.component';
import { ContatoComponent } from './institucional/contato/contato/contato.component';
import { CredenciadosComponent } from './institucional/credenciados/credenciados.component';
import { DiagramaComponent } from './institucional/organograma/diagrama/diagrama.component';
import { ModalOrganogramaComponent } from './institucional/organograma/modal-organograma/modal-organograma.component';
import { OrganogramaComponent } from './institucional/organograma/organograma.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { TransparenciaComponent } from './institucional/transparencia/transparencia.component';
import { MainComponent } from './landing-page/main/main.component';
import { PolaroidComponent } from './landing-page/polaroid/polaroid.component';
import { CardChamadasComponent } from './landing-page/recentes/card-chamadas/card-chamadas.component';
import { RecentesComponent } from './landing-page/recentes/recentes.component';
import { CalendarComponent } from './planetario/calendar/calendar.component';
import { FormularioComponent } from './planetario/formulario/formulario.component';
import { LegendasComponent } from './planetario/legendas/legendas.component';
import { PainelRevisaoComponent } from './planetario/painel-revisao/painel-revisao.component';
import { PlanetarioComponent } from './planetario/planetario/planetario.component';
import { TimeSelectionComponent } from './planetario/calendar/time-selection/time-selection.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
    declarations: [
        PortalComponent,
        MainComponent,
        RecentesComponent,
        EditaisComponent,
        OrganogramaComponent,
        EventosComponent,
        SobreComponent,
        NucleoMusicaComponent,
        NucleoDancaComponent,
        TransparenciaComponent,
        ContatoComponent,
        ContatoBoxComponent,
        PolaroidComponent,
        ArtistStatusPipe,
        MessageContatoComponent,
        CardEditaisComponent,
        ModalEditaisComponent,
        CardChamadasComponent,
        CardGalleryComponent,
        CredenciadosComponent,
        ModalOrganogramaComponent,
        DiagramaComponent,
        PlanetarioComponent,
        TimeSelectionComponent,
        PainelRevisaoComponent,
        PhonePipe,
        CalendarComponent,

    ],
    imports: [
        CommonModule,
        PortalRoutingModule,
        NavbarComponent,
        FooterComponent,
        NgxSkeletonLoaderModule,
        ButtonComponent,
        SpinnerComponent,
        ReactiveFormsModule,
        FormularioComponent,
        LegendasComponent,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
          }),
        NgxMaskModule.forChild(),
    ],
})
export class PortalModule {}
