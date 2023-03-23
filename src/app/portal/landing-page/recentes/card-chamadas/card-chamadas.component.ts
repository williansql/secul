import { Notice } from '../../../../shared/models/notice-interface';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { ModalEditaisComponent } from 'src/app/portal/editais/modal-editais/modal-editais.component';


@Component({
    selector: 'app-card-chamadas',
    templateUrl: './card-chamadas.component.html',
    styleUrls: ['./card-chamadas.component.scss'],
})
export class CardChamadasComponent implements OnInit {
    @Input() notice!: Notice;

    constructor(
        private router: Router,
        private modalService: NgxModalService
    ) {}

    goToEditais() {
        this.router.navigate(['/editais']);
        this.modalService
            .open(ModalEditaisComponent, { notice: this.notice })
            .subscribe();
    }

    ngOnInit(): void {}

    padLeft(number: number, length: number, character: string = '0'): string {
        return this.modalService.padLeft(number, length, character);
    }
}
