import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-category-card',
    templateUrl: './category-card.component.html',
    styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
    @Output('context') context: EventEmitter<string> = new EventEmitter();
    @Input() content: { icon: string; text: string } = {
        icon: 'assets/icons/category-card/dance.svg',
        text: 'dança'
    };
    @Input() subMenus?: {active: boolean; item: {icon: string; text: string;}[]};

    constructor() {}

    ngOnInit(): void {}

    sendContext(context: string) {
        this.context.emit(context);
    }
}
