import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { CategoryCardComponent } from '../shared/components/category-card/category-card.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { LoginComponent } from './login/login.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ProfessionalsCategoriesComponent } from './professionals/professionals-categories.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { PaginationComponent } from './../shared/components/pagination/pagination.component';
import { TableComponent } from './../shared/components/table/table.component';
import { SelectComponent } from '../shared/components/select/select.component';
import { InputSearchComponent } from '../shared/components/input-search/input-search.component';
import { PopupComponent } from './manager-modal/alterar-senha/popup/popup.component';
import { ConfirmationModalComponent } from '../shared/components/confirmation-modal/confirmation-modal.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { BoxFileComponent } from './gallery/box-file/box-file.component';
import { DescriptionEventComponent } from './events/description-event/description-event.component';
import { CadastroEditaisComponent } from './cadastro-editais/cadastro-editais.component';

@NgModule({
    declarations: [ManagerComponent, LoginComponent, CadastrosComponent,ProfessionalsCategoriesComponent, PopupComponent, EventsComponent, GalleryComponent, BoxFileComponent, CadastroEditaisComponent],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        NavbarComponent,
        FooterComponent,
        NgxMaskModule.forChild(),
        CategoryCardComponent,
        ReactiveFormsModule,
        SelectComponent,
        TableComponent,
        PaginationComponent,
        SchedulingComponent,
        ConfirmationModalComponent,
        InputSearchComponent,
        DescriptionEventComponent
    ],
})
export class ManagerModule {}
