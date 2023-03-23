import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastros',
    templateUrl: './cadastros.component.html',
    styleUrls: ['./cadastros.component.scss'],
})
export class CadastrosComponent implements OnInit {
    actualPage: string = '';

    menus = [
        {
            icon: 'assets/icons/category-card/register_events.svg',
            text: 'cadastro de eventos',
            subMenus: {
                active: true,
                item: [
                    {
                        icon: 'assets/icons/add-item.svg',
                        text: 'Adicionar evento',
                    },
                    {
                        icon: 'assets/icons/list-hamburger.svg',
                        text: 'Listar eventos',
                    }
                ]
            }
        },
        {
            icon: 'assets/icons/category-card/register_gallery.svg',
            text: 'cadastro de galeria',
            subMenus: {
                active: true,
                item: [
                    {
                        icon: 'assets/icons/add-item.svg',
                        text: 'Adicionar galeria',
                    },
                    {
                        icon: 'assets/icons/list-hamburger.svg',
                        text: 'Listar galerias',
                    }
                ]
            }
        },
        {
            icon: 'assets/icons/category-card/register_edicts.svg',
            text: 'cadastro de editais'
        },
        {
            icon: 'assets/icons/category-card/artist_registration.svg',
            text: 'cadastro de profissionais'
        },
        {
            icon: 'assets/icons/category-card/planetary_scheduling.svg',
            text: 'agendamento planetário'
        },
        {   icon: 'assets/icons/category-card/register.svg',
            text: 'inscrições'
        }
    ];

    constructor(private route: Router) {}

    ngOnInit(): void {}

    readCategories(event: string) {
        this.actualPage = event;
        console.log(event);
    }

    menuSelect(i: number){
        switch(i){
            case 2:
                this.route.navigate(['/gerenciador/cadastro-editais']);
            console.log(i);

        }
    }


}
