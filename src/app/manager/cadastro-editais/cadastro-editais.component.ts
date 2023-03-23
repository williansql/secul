import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Component({
    selector: 'app-form-cad-editais',
    templateUrl: './cadastro-editais.component.html',
    styleUrls: ['./cadastro-editais.component.scss'],
})
export class CadastroEditaisComponent {
    linksForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.linksForm = this.fb.group({
            titulo: ['', Validators.required],
            descreva: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            nameLink: ['', Validators.required],
            pasteLink: ['', Validators.required],
            links: this.fb.array([]),
        });
    }

    get links(): FormArray {
        return this.linksForm.get('links') as FormArray;
    }

    newLinks(): FormGroup {
        return this.fb.group({
            nameLink: ['', Validators.required],
            pasteLink: ['', Validators.required],
        });
    }

    addLinks() {
        this.links.push(this.newLinks());
    }

    removeLinks(i: number) {
        this.links.removeAt(i);
    }

    onSubmit() {
        console.log(this.linksForm.value);
    }

    validSubmit(): boolean{
        return this.linksForm.get('titulo, descreva, email')?.value == 0;
    }
}
