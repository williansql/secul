import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs';
import { TimeRange } from 'src/app/shared/models/time-range-interface';
import { ReservationData } from '../models/reservation-interface';
import { ApiResponse } from '../models/api-response-interface';


@Injectable({
    providedIn: 'root',
})
export class ReservationService {
    MONTHS_LIST = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    workingHours: number[] = [8, 9, 10, 11, 13, 14, 15, 16];
    private readonly urlDate = 'http://localhost:8080/api/calendar';
    reloadCalendar: EventEmitter<any> = new EventEmitter();
    private readonly mockUrlData = './../../../../assets/data/reservation.json'

    constructor(private http: HttpClient) {}

    getDate(): Observable<any> {
        return this.http.get<any>(this.urlDate + "/now");
    }

    planetariumReserve(reservationData: ReservationData): Observable<any> {
        return this.http.post(this.urlDate, reservationData);
    }

    getReservations(): Observable<ApiResponse<CalendarEvent[]>> {
        return this.http.get<ApiResponse<CalendarEvent[]>>(this.urlDate);
    }

    getWorkingHoursAsDates(date: Date): TimeRange[] {
        let ranges: TimeRange[] = [];
        let dummy = new Date(date);
        this.workingHours.forEach((hour) => {
            ranges.push({
                init: new Date(dummy.setHours(hour, 0, 0)).getTime(),
                available: false,
            });
        });

        return ranges;
    }

    getReservationMock(): Observable<ReservationData[]>{
        return this.http.get<ReservationData[]>(this.mockUrlData);
    }

}
