import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sobre',
    templateUrl: './sobre.component.html',
    styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
    lei_criacao_url: string = environment.sobre_lei_criacao;
    estatuto_social_url: string = environment.sobre_estatuto_social;

    constructor() {}

    ngOnInit(): void {}
}
