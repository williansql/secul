import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-polaroid',
    templateUrl: './polaroid.component.html',
    styleUrls: ['./polaroid.component.scss'],
})
export class PolaroidComponent implements OnInit {
    @Input() imgUrl!: string;
    @Input() sizeImg?: boolean;

    constructor() {}

    ngOnInit(): void {}
}
