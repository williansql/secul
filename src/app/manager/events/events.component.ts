import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    eventForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) { 
        this.eventForm = this.formBuilder.group({
            eventName: ['', Validators.required],
            eventInfo: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    saveEvent() {
        if (this.eventForm.invalid) {
            console.log("Formulário inválido");
            return;
        }

        console.log(this.eventForm.value);
    }
}
