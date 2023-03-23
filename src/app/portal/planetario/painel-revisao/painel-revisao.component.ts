import { ReservationService } from '../../../shared/services/reservation.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { ReservationData } from 'src/app/shared/models/reservation-interface';

@Component({
    selector: 'app-painel-revisao',
    templateUrl: './painel-revisao.component.html',
    styleUrls: ['./painel-revisao.component.scss'],
})
export class PainelRevisaoComponent implements OnInit {
    @Input() reservationData!: ReservationData;

    loading: boolean = false;
    infoSuccess: boolean = false;
    infoError: boolean = false;

    constructor(
        private modalService: NgxModalService,
        private reservationService: ReservationService
    ) {}

    ngOnInit(): void {}

    submitInfo() {
        this.loading = true;
        this.reservationService
            .planetariumReserve(this.reservationData)
            .subscribe({
                next: (data) => {
                    console.log('Done. Received: ', data);
                    this.infoSuccess = true;
                    setTimeout(() => {
                        this.infoSuccess = false;
                        this.closeModal();
                        this.reloadEvents();
                    }, 2000);
                },
                error: (error) => {
                    console.log('Error. Received: ', error);
                    this.infoError = true;
                    setTimeout(() => {
                        this.infoError = false;
                        this.closeModal();
                    }, 2000);
                },
            });
    }

    closeModal() {
        this.loading = false;
        this.modalService.close();
    }

    reloadEvents() {
        this.reservationService.reloadCalendar.emit();
    }
}
