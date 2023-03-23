import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgxMaskModule],
})
export class FormularioComponent implements OnInit {
    form!: FormGroup;
    @Output('formSubmited') formSubmited: EventEmitter<any> =
        new EventEmitter();

    constructor() {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.form = new FormGroup({
            type: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            phone: new FormControl('', [Validators.required]),
            quantity: new FormControl('', [
                Validators.required,
                Validators.pattern('^[0-9]*$'),
            ]),
        });
    }

    invalid(field: string) {
        return (
            this.form.controls[field].invalid &&
            (this.form.controls[field].dirty ||
                this.form.controls[field].touched)
        );
    }

    emitForm() {
        if (this.form.valid) this.formSubmited.emit(this.form.value);
    }
}
