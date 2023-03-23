import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { MailService } from 'src/app/shared/services/mail.service';
import { ContactInfo } from 'src/app/shared/models/contactinfo-interface';

@Component({
    selector: 'app-contato-box',
    templateUrl: './contato-box.component.html',
    styleUrls: ['./contato-box.component.scss'],
})
export class ContatoBoxComponent implements OnInit {
    form!: FormGroup;

    sendInfo?: ContactInfo;

    messageBox = {
        loading: false,
        show: false,
        success: true,
    };

    constructor(private mailService: MailService) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('', [
                Validators.pattern(
                    /^(?:[0-9]{2}|\([0-9]{2}\)|)(?: ||-)(?:[2-9]{4}|[2-9]{5})(?: ||-)(?:[0-9]{4})$/
                ),
            ]),
            content: new FormControl('', [Validators.required]),
        });
    }

    onSubmit() {
        this.form.markAllAsTouched();
        this.sendInfo = this.form.value;
        if (this.form.valid) this.sendMail(this.sendInfo!);
    }

    invalid(field: string) {
        return (
            this.form.controls[field].invalid &&
            (this.form.controls[field].dirty ||
                this.form.controls[field].touched)
        );
    }

    sendMail(info: ContactInfo) {
        this.setLoading();
        this.mailService
            .sendMail(info)
            .pipe(
                catchError((err) => {
                    this.checkMsg(false);
                    setTimeout(() => {
                        this.messageBox.show = false;
                    }, 2500);
                    return err;
                })
            )
            .subscribe(() => {
                this.checkMsg(true);
                setTimeout(() => {
                    this.messageBox.show = false;
                    this.form.reset();
                }, 2500);
            });
    }

    checkMsg(success: boolean) {
        this.messageBox.loading = false;
        this.messageBox.show = true;
        this.messageBox.success = success;
    }

    setLoading() {
        this.messageBox.show = true;
        this.messageBox.loading = true;
    }
}
