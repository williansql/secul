import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-transparencia',
    templateUrl: './transparencia.component.html',
    styleUrls: ['./transparencia.component.scss'],
})
export class TransparenciaComponent implements OnInit {
    cria_parnamirim_url: string = environment.transparencia_cria_parnamirim;
    instrucoes_subsidio_url: string =
        environment.transparencia_instrucoes_subsidio;
    modelo_patrimonio_url: string = environment.transparencia_modelo_patrimonio;
    portal_url: string = environment.transparencia_portal;
    portaria_subsidios_url: string =
        environment.transparencia_portaria_subsidios;

    constructor() {}

    ngOnInit(): void {}
}
