import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: '<app-select [options]>',
    standalone: true,
    imports: [CommonModule],
    template: `
    <select>
        <option
            *ngFor="let option of options"
            value="{{ option.id }}"
            [disabled]="option.disabled"
            [selected]="option.selected"
        >
            {{ option.name }}
        </option>
    </select>
    `,
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
    @Input() options!: any[];
    @Output() changes = new EventEmitter();
    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        let element = this.el.nativeElement.childNodes[0] as HTMLSelectElement;        
        element.onchange = () => {             
            let selected = element.options[element.selectedIndex].text;     
            element.value = selected;
            this.changes.emit(selected);
        };
    }
}
