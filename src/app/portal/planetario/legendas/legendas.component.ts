import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface Subtitles {
    circleColor: string;
    backgroundColor: string;
    title: string;
}
@Component({
    selector: 'app-legendas',
    templateUrl: './legendas.component.html',
    styleUrls: ['./legendas.component.scss'],
    imports: [CommonModule],
    standalone: true,
})
export class LegendasComponent implements OnInit {
    legendas: Subtitles[] = [
      {circleColor: '#006CB5', backgroundColor: '#e6ebf4', title: 'Data atual'},
      {circleColor: '#EB2D34', backgroundColor: '#F9B1AC', title: 'Todos os horários preenchidos'},
      {circleColor: '#FEAA00', backgroundColor: '#FEE0A4', title: 'Horários vagos'},
      {circleColor: '#DEDEDE', backgroundColor: '#F4F4F4', title: 'Selecionado'}
    ];
    constructor() {}

    ngOnInit(): void {}
}
