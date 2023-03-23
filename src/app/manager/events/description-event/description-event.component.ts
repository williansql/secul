import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-description-event',
    templateUrl: './description-event.component.html',
    styleUrls: ['./description-event.component.scss'],
    standalone: true,
})
export class DescriptionEventComponent implements OnInit {
    @Input() title: string = 'Festa do Sabugo';
    @Input() about: string =
        'Criada em 1982 na administração do então prefeito Sadi Mendes, a Festa do Sabugo tornou-se uma das festas mais populares da cidade Trampolim da Vitória. Festa essa que influencia a economia da cidade no que se entende por economia criativa, que vão desde apresentações musicais de artistas até o impacto na economia local com o crescimento das vendas nas lojas de roupas e sapatos, movimentando postos de gasolina, hotéis, motoristas de táxi e de aplicativos e aquisição de produtos de supermercados como bebidas, carnes e gelo. Podemos acrescentar a tudo isso a contratação de mão de obra de montagens e desmontagens de estruturas, técnicos de som e os restaurantes.';
    constructor() {}

    ngOnInit(): void {}
}
