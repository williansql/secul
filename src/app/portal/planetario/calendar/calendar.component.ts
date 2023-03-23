import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import {
    CalendarDateFormatter,
    CalendarEvent,
    CalendarView,
    DAYS_OF_WEEK,
} from 'angular-calendar';
import { set, startOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { TimeRange } from 'src/app/shared/models/time-range-interface';
import { ReservationService } from 'src/app/shared/services/reservation.service';

import { DayInterface } from './../../../shared/models/reservation-interface';
import { CustomDateFormatter } from './custom-date-formatter.providers';
import { TimeSelectionComponent } from './time-selection/time-selection.component';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatter,
        },
    ],
})
export class CalendarComponent implements OnInit {
    now: Date = new Date();
    @Input() viewDate: Date = new Date();
    @Output('sendDate') sendDate: EventEmitter<Date> = new EventEmitter();

    @ViewChild('timeSelection') timeSelection!: TimeSelectionComponent;

    selectedDay: Date = set(this.viewDate, { date: this.now.getDate() });

    view: CalendarView = CalendarView.Month;
    viewMonth: CalendarView = CalendarView.Month;
    viewYear: CalendarView = CalendarView.Week;
    CalendarView = CalendarView;
    locale: string = 'pt-br';

    eightHoursInMillis: number = 28800000;
    oneDayInMillis: number = this.eightHoursInMillis * 3;

    excludeDays: number[] = [0, 6];
    weekStartsOn = DAYS_OF_WEEK.SUNDAY;

    events: CalendarEvent[] = [];
    refresh = new Subject<void>();
    monthsMenu!: any[];

    timeIsAvailable: boolean[] = [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
    ];

    isMobile: boolean = window.screen.width < 992;

    constructor(private reservationService: ReservationService) {
        this.loadEvents(true);
        this.reservationService.reloadCalendar.subscribe(() => {
            this.loadEvents();
        });
    }

    ngOnInit(): void {
        CustomDateFormatter.isMobile = this.isMobile;
    }

    windowResize() {
        this.isMobile = window.screen.width < 992;
        CustomDateFormatter.isMobile = this.isMobile;
        this.refresh.next();
    }

    loadEvents(resetDay?: boolean) {
        this.reservationService.getReservations().subscribe((res) => {
            this.events = res.data;
            if (this.events.length > 0) {
                let event = {
                    day: {
                        date: this.selectedDay,
                        events: this.events
                            .map(this.convertStart)
                            .filter((ev) => {
                                return (
                                    startOfDay(ev.start).getTime() ==
                                    startOfDay(this.selectedDay).getTime()
                                );
                            }),
                    },
                };
                setTimeout(() => this.selectDay(event), 100);
                if (resetDay) this.sendDate.emit(new Date(0));
            }
            this.updateMonthsMenu();
        });
    }

    convertStart(event: CalendarEvent) {
        event.start = new Date(event.start);
        return event;
    }

    selectDay(event: any) {
        let day: DayInterface = event.day;
        // Only select days from today forward
        if (day.date.getTime() > this.now.getTime() - this.oneDayInMillis) {
            this.selectedDay = startOfDay(day.date);
            this.timeSelection.resetTimeRange();
            this.timeSelection.updateTimeIsAvailable(day);
            this.sendDate.emit(this.selectedDay);
            this.changeViewDate(day.date);
        }
    }

    changeViewDate(currentDate: Date) {
        this.viewDate = currentDate;
    }

    updateMonthsMenu() {
        let monthsMenuString = this.reservationService.MONTHS_LIST;
        this.monthsMenu = [];
        for (let index = 0; index < monthsMenuString.length; index++) {
            const name = monthsMenuString[index];
            this.monthsMenu.push({
                name: name,
                date: new Date(this.viewDate.getFullYear(), index, 1),
            });
        }
    }

    setTimeRange(time: TimeRange) {
        let date = new Date(time.init);
        this.sendDate.emit(date);
    }

    dayInThePast(day: DayInterface): boolean {
        return day.date.getTime() < this.now.getTime() - this.oneDayInMillis;
    }

    pastEightHours(day: DayInterface) {
        return (
            day.date.getTime() == startOfDay(this.now).getTime() &&
            day.date.getTime() + this.eightHoursInMillis < this.now.getTime()
        );
    }
}
