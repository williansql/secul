import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { NavbarService } from './navbar.service';
import { NgxModalService } from '../ngx-modal/ngx-modal.service';
import { FormularioComponent } from '../../../manager/manager-modal/alterar-senha/formulario/formulario.component';

@Component({
    standalone: true,
    imports: [CommonModule, SidebarComponent, RouterModule],
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @ViewChild('institucional') institucional: any;
    @ViewChild('culturais') culturais: any;
    @ViewChild('eventos') eventos: any;
    @ViewChild('sidebar') sidebar: any;
    @ViewChild('menuButton') menuButton: any;

    sidebarOpen: boolean = false;
    dropdownSelected: string = '';
    onLandingPage: boolean = true;
    actualRoute: string = '/inicio';

    firstLoad: boolean = false;

    constructor(
        private modalService: NgxModalService,
        service: NavbarService,
        private router: Router
        ){
        document.addEventListener('click', this.offClickHandler.bind(this));
        service.closeDropdown.subscribe(this.closeDropdown());
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.closeSidebar();
                window.scrollTo(0, 0);
                this.actualRoute = router.url;
                this.onLandingPage = router.url == '/inicio';
            }
        });
    }

    ngOnInit(): void {}

    offClickHandler(event: any) {
        if (
            !this.institucional.nativeElement.contains(event.target) &&
            !this.culturais.nativeElement.contains(event.target) &&
            !this.eventos.nativeElement.contains(event.target)
        ) {
            this.closeDropdown();
        }
        if (
            !this.sidebar.nativeElement.contains(event.target) &&
            !this.menuButton.nativeElement.contains(event.target)
        ) {
            this.closeSidebar();
        }
    }

    openSidebar() {
        this.sidebarOpen = true;
        this.firstLoad = true;
    }

    closeSidebar() {
        this.sidebarOpen = false;
    }

    closeDropdown() {
        this.dropdownSelected = '';
    }

    toggleDropdown(dropdown: string) {
        if (!this.dropdownSelected) this.dropdownSelected = dropdown;
        else
            this.dropdownSelected =
                this.dropdownSelected == dropdown ? '' : dropdown;
    }

    redirect(route: string) {
        setTimeout(() => {
            this.router.navigate([route]);
            this.closeDropdown();
        }, 0);
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

    rotaGerenciador(): boolean {
        return this.actualRoute.includes('gerenciador');
    }

    trocarSenhaGerenciador(){
        this.modalService.open(FormularioComponent).subscribe();
    }


}
