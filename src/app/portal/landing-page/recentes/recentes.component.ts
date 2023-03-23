import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/shared/models/notice-interface';
import { NoticeService } from '../../../shared/services/notice.service';

@Component({
    selector: 'app-recentes',
    templateUrl: './recentes.component.html',
    styleUrls: ['./recentes.component.scss'],
})
export class RecentesComponent implements OnInit {
    notices: Notice[] = [];

    constructor(private ns: NoticeService) {
        this.ns.getNotices().subscribe((res) => {
            res.sort((a, b) => (a.initDate < b.initDate ? 1 : -1));
            this.notices = res;
        });
    }

    ngOnInit(): void {}
}
