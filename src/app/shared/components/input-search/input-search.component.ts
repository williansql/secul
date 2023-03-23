import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-search',
    standalone: true,
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
    @Input() placeholder!: string;

    constructor() {}

    ngOnInit(): void {}
}
