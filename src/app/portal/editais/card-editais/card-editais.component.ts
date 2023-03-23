import { Component, Input, OnInit } from '@angular/core';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { Notice } from 'src/app/shared/models/notice-interface';

import { ModalEditaisComponent } from '../modal-editais/modal-editais.component';

@Component({
    selector: 'app-card-editais',
    templateUrl: './card-editais.component.html',
    styleUrls: ['./card-editais.component.scss'],
})
export class CardEditaisComponent implements OnInit {
    @Input() noticeC!: Notice;

    widthSize =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    constructor(private modalService: NgxModalService) {}

    ngOnInit(): void {}

    openModal(value: boolean) {
        if (!value || (this.widthSize < 576 && value)) {
            this.modalService
                .open(ModalEditaisComponent, { notice: this.noticeC })
                .subscribe();
        }
    }

    padLeft(number: number, length: number, character: string = '0'): string {
        return this.modalService.padLeft(number, length, character);
    }
}
