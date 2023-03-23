import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/shared/models/event-interface';
import { EventService } from '../../../shared/services/event.service';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
    currentRoute: string = '';
    events: Event[] = [];
    currentEvent: Event = { title: '', desc: '', galleries: [] };

    other: boolean = false;

    constructor(private router: Router, private es: EventService) {
        this.currentRoute = router.url;
        this.es.getEvent().subscribe((res) => {
            this.events = res;
            this.showEvent();
            this.currentEvent.galleries.sort((a, b) => b.date - a.date);
        });
    }

    ngOnInit(): void {}

    showEvent() {
        switch (this.currentRoute) {
            case '/eventos/carnaval':
                this.currentEvent = this.events[0];
                break;
            case '/eventos/marcha-jesus':
                this.currentEvent = this.events[1];
                break;
            case '/eventos/roteiro-junino':
                this.currentEvent = this.events[2];
                break;
            case '/eventos/festa-sabugo':
                this.currentEvent = this.events[3];
                break;
            // case '/eventos/virada-cultural':
            //   this.currentEvent = this.events[4];
            //   break;
            case '/eventos/outros':
                this.currentEvent = this.events[4];
                this.other = true;
                break;
            default:
                console.log('Error');
        }
    }
}
