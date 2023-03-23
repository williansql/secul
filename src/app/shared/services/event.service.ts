import { Injectable } from '@angular/core';
import { Event } from 'src/app/shared/models/event-interface';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  api = './../../../../assets/data/event.json'

  getEvent(): Observable<Event[]>{
    return this.http.get<Event[]>(this.api).pipe(delay(100));
  }
}
