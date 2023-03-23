import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {
    // you can override any of the methods defined in the parent class
    public static isMobile: boolean;

    public override monthViewColumnHeader({
        date,
        locale,
    }: DateFormatterParams): string {
        if (CustomDateFormatter.isMobile) return formatDate(date, 'EEE', locale!).replace('.', '')[0];
        else return formatDate(date, 'EEE', locale!).replace('.', '');
    }

    public override monthViewDayNumber({
        date,
        locale,
    }: DateFormatterParams): string {
        return formatDate(date, 'dd', locale!);
    }

    public override monthViewTitle({
        date,
        locale,
    }: DateFormatterParams): string {
        return formatDate(date, 'MMMM', locale!);
    }

    public override weekViewTitle({
        date,
        locale,
        weekStartsOn,
        excludeDays,
        daysInWeek,
    }: DateFormatterParams): string {
        return formatDate(date, 'YYYY', locale!);
    }
}
