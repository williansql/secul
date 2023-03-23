import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent implements OnInit {
    facebook: string = environment.facebook;
    instagram: string = environment.instagram;
    youtube: string = environment.youtube;

    constructor() {}

    ngOnInit(): void {}
}
