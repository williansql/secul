import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    galleryForm: FormGroup;
    years: number[] = [];

    files: any[] = [];
    hasFiles: boolean = false;
    
    selectOptions: any = [
        {id: 1, name: 'Teste 1'},
        {id: 2, name: 'Teste 2'},
        {id: 3, name: 'Teste 3'}
    ]
    
    constructor(private formBuilder: FormBuilder) { 
        const currentYear = new Date().getFullYear();
        for (let i = 2020; i <= currentYear; i++) {
            this.years.push(i);
        }

        this.galleryForm = this.formBuilder.group({
            galleryName: ['', Validators.required],
            selectedEvent: ['', Validators.required],
            selectedYear: ['', Validators.required],
            galleryArchives: ''
        });
    }

    ngOnInit(): void {
    }

    emitFileList(data: any) {
        this.files = data;
        this.hasFiles = this.files.length > 0;
    }
    
    saveEvent() {
        if (this.galleryForm.invalid) {
            console.log("Formulário inválido");
            return;
        }

        if (this.files.length <= 0) {
            console.log("A Galeria está sem arquivos!");
            return;
        } else {
            const file = this.files.join(', ');
            this.galleryForm.patchValue({ galleryArchives: file });
        }

        console.log(this.galleryForm.value);
    }
}
