import { ArtistRegister } from './../../shared/models/artist-register-interface';
import { ArtistService } from './../../shared/services/artist.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryType } from 'src/app/shared/models/artist-interface';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { ActionType } from 'src/app/shared/enum/action';
import { Router } from '@angular/router';

@Component({
    selector: 'app-professionals-categories',
    templateUrl: './professionals-categories.component.html',
    styleUrls: ['./professionals-categories.component.scss'],
})
export class ProfessionalsCategoriesComponent implements OnInit {
    form!: FormGroup;
    contentToForm: any;

    action = ActionType;

    actualPage: string = '';
    data: ArtistRegister[] = [];

    titles: any[] = ['Cl.', 'Nome', 'Média geral', 'Situação'];

    menus = [
        {
            icon: 'assets/icons/category-card/music.svg',
            text: CategoryType.MUSIC,
        },
        {
            icon: 'assets/icons/category-card/dance.svg',
            text: CategoryType.DANCE,
        },
        {
            icon: 'assets/icons/category-card/theater.svg',
            text: CategoryType.THEATER,
        },
        {
            icon: 'assets/icons/category-card/press_office.svg',
            text: CategoryType.PRESS_OFFICE,
        },
        {
            icon: 'assets/icons/category-card/photography.svg',
            text: CategoryType.PHOTOGRAPHY,
        },
        {
            icon: 'assets/icons/category-card/sound technician.svg',
            text: CategoryType.SOUND_TECHNICIAN,
        },
        {
            icon: 'assets/icons/category-card/filming and editing.svg',
            text: CategoryType.FILMING_AND_EDITING,
        },
        {
            icon: 'assets/icons/category-card/voiceover.svg',
            text: CategoryType.VOICEOVER,
        },
    ];

    constructor(
        private as: ArtistService,
        private modalService: NgxModalService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.as.getArtistRegister().subscribe((value) => {
            this.data = value;
            this.createForm();
        });
    }

    createForm() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            score: new FormControl('', [
                Validators.required,
                Validators.pattern('^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$'),
            ]),
            able: new FormControl(false),
            accredited: new FormControl(false),
        });
    }

    readForm() {}

    readCategories(event: string) {
        this.actualPage = event;
        this.contentToForm = this.data.filter(
            (category) =>
                category.area.toLowerCase() == this.actualPage.toLowerCase()
        )[0].artists;
    }

    resetToCategories() {
        this.actualPage = '';
    }

    openModal(index: number, action: ActionType) {
        this.modalService
            .open(ConfirmationModalComponent, {
                dataModal: this.contentToForm[index],
                actionEnum: action,
                isArtist: true
            })
            .subscribe();
    }

    backToMenu() {
        this.router.navigateByUrl('/gerenciador/cadastros');
    }
}
