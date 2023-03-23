import { Component, OnInit } from '@angular/core';
import { NgxModalService } from '../../../../shared/components/ngx-modal/ngx-modal.service';
import { PopupComponent } from '../popup/popup.component';
@Component({
    selector: 'app-formularioComponent',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
    constructor(private modalService: NgxModalService) {}

    ngOnInit(): void {
        this.modalService.closeModals.subscribe(() => {
            this.fecharFormModal();
        });
    }

    openTestModal() {
        this.modalService.open(PopupComponent).subscribe();
    }

    fecharFormModal() {
        this.modalService.close();
    }

}
