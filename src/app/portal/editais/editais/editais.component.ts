import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/shared/models/notice-interface';
import { NoticeService } from '../../../shared/services/notice.service';


@Component({
    selector: 'app-editais',
    templateUrl: './editais.component.html',
    styleUrls: ['./editais.component.scss'],
})
export class EditaisComponent implements OnInit {
    notices: Notice[] = [];

    modal?: boolean;

    noticesOpen?: Notice[];
    noticesClose?: Notice[];

    constructor(private ns: NoticeService) {}

    ngOnInit(): void {
        this.getAllNotices();
        this.ns.checkModal.subscribe((bool) => (this.modal = bool));
    }

    getAllNotices() {
        this.ns.getNotices().subscribe((notices) => {
            this.notices = notices;
            this.noticesOpen = this.notices?.filter(
                (notice) => notice.active == true
            );
            this.noticesClose = this.notices?.filter(
                (notice) => notice.active == false
            );
        });
    }
}
