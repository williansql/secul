import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { ArtistRelation } from 'src/app/shared/models/artist-relation-interface';
import { ArtistService } from '../../../shared/services/artist.service';

@Component({
    selector: 'app-credenciados',
    templateUrl: './credenciados.component.html',
    styleUrls: ['./credenciados.component.scss'],
})
export class CredenciadosComponent implements OnInit, AfterViewInit {
    relations: ArtistRelation[] = [];

    dropdownSelected: boolean = false;
    optionDropDown?: string;
    currentOption?: any;

    constructor(artistService: ArtistService, service: NavbarService) {
        artistService.getArtistRelation().subscribe((relations) => {
            this.relations = relations;
            this.selectOptionDropDown(this.relations[0].area);
        });
        service.closeDropdown.subscribe(this.close());
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.currentOption = this.relations[0];
    }

    toggle() {
        this.dropdownSelected = !this.dropdownSelected;
    }

    close() {
        this.dropdownSelected = true;
    }

    selectOptionDropDown(value: string) {
        this.optionDropDown = value;

        this.currentOption = this.relations.find(
            (relations) => relations.area === this.optionDropDown
        );
    }
}
