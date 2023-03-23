import { CalendarEvent } from 'angular-calendar';

export interface ReservationData {
    reservationDate: number;
    isInstitutionPublic: boolean;
    institutionName: string;
    numberOfStudents: number;
    email: string;
    contactNumber: string;
}

export interface DayInterface {
    date: Date;
    events: CalendarEvent[];
}