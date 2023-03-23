import { Component, Input, OnInit } from '@angular/core';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';

@Component({
    selector: 'app-modal-organograma',
    templateUrl: './modal-organograma.component.html',
    styleUrls: ['./modal-organograma.component.scss'],
})
export class ModalOrganogramaComponent implements OnInit {
    @Input() names!: string[];
    @Input() office!: string;

    constructor(private modalService: NgxModalService) {}

    ngOnInit(): void {}

    closeModal() {
        this.modalService.close();
    }
}
