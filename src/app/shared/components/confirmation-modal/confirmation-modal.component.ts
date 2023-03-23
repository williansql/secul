import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActionType } from '../../enum/action';
import { CategoryType } from '../../models/artist-interface';
import { ReservationService } from '../../services/reservation.service';
import { NgxModalService } from '../ngx-modal/ngx-modal.service';

@Component({
    selector: 'app-confirmation-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent implements OnInit {
    dataModal: any;
    actionEnum?: ActionType;
    isArtist?: Boolean;

    constructor(
        private modalService: NgxModalService,
    ) {}

    ngOnInit(): void {}

    actionConfirm() {
        switch(this.actionEnum){
            case ActionType.CONFIRM:
                console.log('Confirm')
                break;
            case ActionType.DELETE:
                console.log('Delete')
                break;
            case ActionType.UPDATE:

                break;
            default:
                

        }
    }

    closeModal() {
        this.modalService.close();
    }


}
