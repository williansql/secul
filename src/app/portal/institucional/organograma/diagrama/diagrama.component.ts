import { Component, OnInit } from '@angular/core';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { ModalOrganogramaComponent } from '../modal-organograma/modal-organograma.component';

@Component({
    selector: 'app-diagrama',
    templateUrl: './diagrama.component.html',
    styleUrls: ['./diagrama.component.scss'],
})
export class DiagramaComponent implements OnInit {
    constructor(private modalService: NgxModalService) {}

    ngOnInit(): void {}

    openModal(names: string[], office?: string | undefined) {
        this.modalService
            .open(ModalOrganogramaComponent, { names, office })
            .subscribe();
    }
}
