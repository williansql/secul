import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-message-contato',
    templateUrl: './message-contato.component.html',
    styleUrls: ['./message-contato.component.scss'],
})
export class MessageContatoComponent implements OnInit {
    @Input() messageBox = {
        loading: false,
        show: false,
        success: false,
    };

    constructor() {}

    ngOnInit(): void {}
}
