import { Component, OnInit } from '@angular/core';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { Notice } from 'src/app/shared/models/notice-interface';
import { FileService } from '../../../shared/services/file.service';

@Component({
    selector: 'app-modal-editais',
    templateUrl: './modal-editais.component.html',
    styleUrls: ['./modal-editais.component.scss'],
})
export class ModalEditaisComponent implements OnInit {
    notice!: Notice;
    loading: boolean = false;
    disabled!: boolean;

    constructor(
        private modalService: NgxModalService,
        private fileService: FileService
    ) {
        this.fileService.finishedLoading.subscribe(() => {
            this.loading = false;
        });
    }

    ngOnInit(): void {}

    closeModal() {
        this.modalService.close();
    }

    checkDate(date: string) {
        let initDate = new Date(this.notice.initDate * 1000);
        let endDate = new Date(this.notice.endDate * 1000);

        if (date == 'month') {
            if (initDate.getMonth() != endDate.getMonth()) {
                return true;
            }
        }

        if ('year') {
            if (initDate.getFullYear() != endDate.getFullYear()) {
                return true;
            }
        }

        return false;
    }

    toggleLoading() {
        this.loading = true;
    }

    padLeft(number: number, length: number, character: string = '0'): string {
        return this.modalService.padLeft(number, length, character);
    }

}
