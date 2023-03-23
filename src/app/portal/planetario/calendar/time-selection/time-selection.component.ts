import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeRange } from 'src/app/shared/models/time-range-interface';
import { ReservationService } from '../../../../shared/services/reservation.service';
import { DayInterface } from './../../../../shared/models/reservation-interface';

@Component({
    selector: 'app-time-selection',
    templateUrl: './time-selection.component.html',
    styleUrls: ['./time-selection.component.scss'],
})
export class TimeSelectionComponent implements OnInit {
    @Input() currentDate!: Date;
    @Input() timeIsAvailable!: boolean[];
    @Output('timeRange') timeRange: EventEmitter<TimeRange> =
        new EventEmitter();
    zeroRange: TimeRange = {
        init: new Date(0).getTime(),
        available: false,
    };
    selectedRange: TimeRange = this.zeroRange;
    timeRanges: TimeRange[] = [];
    momentTimestamp: number = 0;

    constructor(private reservationService: ReservationService) {}

    ngOnInit(): void {
        this.reservationService.getDate().subscribe((date) => {
            this.momentTimestamp = date.data.timestamp;
        });
    }

    updateTimeIsAvailable(day: DayInterface) {
        this.updateTimeAvailabilityDisplay(day.date);
        this.timeIsAvailable =
            day.events.length > 0
                ? day.events[0].meta.timeIsAvailable
                : [true, true, true, true, true, true, true, true];

        for (let i = 0; i < this.timeRanges.length; i++) {
            this.timeIsAvailable[i] =
                this.momentTimestamp >= this.timeRanges[i].init
                    ? false
                    : this.timeIsAvailable[i];
            this.timeRanges[i].available = this.timeIsAvailable[i];
        }
    }

    updateTimeAvailabilityDisplay(newDate?: Date) {
        if (newDate) this.currentDate = newDate;
        this.timeRanges = this.reservationService.getWorkingHoursAsDates(
            this.currentDate
        );
    }

    resetTimeRange() {
        this.selectedRange = this.zeroRange;
    }

    setTimeRange(range: TimeRange) {
        this.selectedRange =
            range.available && this.selectedRange.init != range.init
                ? range
                : this.zeroRange;

        this.timeRange.emit(this.selectedRange);
    }
}
