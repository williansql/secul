import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ActionType } from 'src/app/shared/enum/action';
import { ReservationData } from 'src/app/shared/models/reservation-interface';
import { ReservationService } from 'src/app/shared/services/reservation.service';

@Component({
    selector: 'app-scheduling',
    standalone: true,
    imports: [CommonModule, TableComponent],
    templateUrl: './scheduling.component.html',
    styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
    titles: any[] = [
        'Data',
        'Turno',
        'Horário',
        'Instituição',
        'Nº de Alunos',
        'E-mail',
    ];

    data: ReservationData[] = [];

    turn: string[] = [];

    action = ActionType;

    constructor(
        private modalService: NgxModalService,
        private reservationService: ReservationService,
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {        
        this.reservationService.getReservationMock().subscribe((value) => {
            this.data = value;
            this.convertDateToTurn();
        });
    }

    convertDateToTurn() {
        this.data.forEach((reserve, i) => {
            const time = this.datePipe.transform(
                reserve.reservationDate,
                'HH'
            )!;
            const timeNumber = parseInt(time);
            this.turn[i] = timeNumber >= 12 ? 'Vespertino' : 'Matutino';
        });
    }

    openModal(index: number, action: ActionType) {        
        this.modalService
            .open(ConfirmationModalComponent, {
                dataModal: this.data[index],
                actionEnum: action,
            })
            .subscribe();
    }
}
