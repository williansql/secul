import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { NavbarService } from '../navbar/navbar.service';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    dropdownSelected: string = '';
    onLandingPage: boolean = true;
    actualRoute: string = '/inicio';

    constructor(service: NavbarService, private router: Router) {
        service.closeDropdown.subscribe(this.closeDropdown());
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.actualRoute = router.url;
                this.onLandingPage = router.url == '/inicio';
            }
        });
    }

    ngOnInit(): void {}

    toggleDropdown(dropdown: string) {
        if (!this.dropdownSelected) this.dropdownSelected = dropdown;
        else
            this.dropdownSelected =
                this.dropdownSelected == dropdown ? '' : dropdown;
    }

    closeDropdown() {
        this.dropdownSelected = '';
    }

    redirect(route: string) {
        this.router.navigate([route]);
        this.closeDropdown();
    }

    menuInstitucional(): boolean {
        return [
            '/institucional/transparencia',
            '/institucional/sobre',
            '/institucional/organograma',
            '/institucional/contato',
        ].includes(this.actualRoute);
    }

    menuEspacosCulturais(): boolean {
        return [
            '/espacos-culturais/nucleo-musica',
            '/espacos-culturais/nucleo-danca',
        ].includes(this.actualRoute);
    }

    menuEventos(): boolean {
        return [
            '/eventos/carnaval',
            '/eventos/marcha-jesus',
            '/eventos/roteiro-junino',
            '/eventos/festa-sabugo',
            // '/eventos/virada-cultural',
            '/eventos/outros',
        ].includes(this.actualRoute);
    }
}
