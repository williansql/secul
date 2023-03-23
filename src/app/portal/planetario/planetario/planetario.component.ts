import { CalendarComponent } from './../calendar/calendar.component';
import { TimeRange } from 'src/app/shared/models/time-range-interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';

import { PainelRevisaoComponent } from '../painel-revisao/painel-revisao.component';

@Component({
    selector: 'app-planetario',
    templateUrl: './planetario.component.html',
    styleUrls: ['./planetario.component.scss'],
})
export class PlanetarioComponent implements OnInit {
    @ViewChild(CalendarComponent) calendar!: CalendarComponent;
    window: boolean = false;
    currentDate: Date = new Date(0);
    timeIsAvailable: boolean[] = [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
    ];

    timeIsSelected = false;

    constructor(private modalService: NgxModalService) {}
    ngOnInit(): void {}

    formData(event: any) {
        if (this.timeIsSelected) {
            this.modalService
                .open(PainelRevisaoComponent, {
                    reservationData: {
                        reservationDate: this.currentDate.getTime(),
                        isInstitutionPublic: event.type == 'publica',
                        institutionName: event.name,
                        numberOfStudents: event.quantity,
                        email: event.email,
                        contactNumber: event.phone,
                    },
                })
                .subscribe();
        }
    }

    updateDate(date: Date) {
        this.currentDate = date;
        this.timeIsSelected = date.getHours() != 0 && date.getTime() != 0;
        if (!this.timeIsSelected) this.toggleWindow('toLeft');
    }

    toggleWindow(side: string) {
        if (side == 'toRight' && this.timeIsSelected) {
            this.window = true;
        } else if (side == 'toLeft') {
            this.window = false;
        }
    }
}
