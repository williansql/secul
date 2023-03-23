import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgxModalService } from '../../../../shared/components/ngx-modal/ngx-modal.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(private modalService: NgxModalService) { }



  ngOnInit(): void {
    setTimeout(() => {
        this.modalService.closeModals.emit();
        this.modalService.close();

    }, 3000);
  }



}
