import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Notice } from 'src/app/shared/models/notice-interface';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  checkModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  urlNotices = './../../../../assets/data/notice.json'

  getNotices(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.urlNotices).pipe(delay(100));
  }

}
